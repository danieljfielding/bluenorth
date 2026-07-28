/**
 * BlueNorth contact-form endpoint — Cloudflare Worker.
 *
 * The website is static (GitHub Pages), so it cannot hold the Resend API key.
 * This Worker sits in between: the form POSTs here, this calls Resend.
 *
 * ── Deploy ──────────────────────────────────────────────────────────────────
 * 1. Verify bluenorth.com.au in Resend (Domains → Add domain → add the DNS
 *    records it gives you). Sending from an unverified domain will fail.
 * 2. dash.cloudflare.com → Workers & Pages → Create → Worker.
 *    Paste this file in, Deploy.
 * 3. Worker → Settings → Variables → add a SECRET named RESEND_API_KEY
 *    with your Resend key (starts re_...). Never put the key in this file.
 * 4. Copy the Worker URL (e.g. https://bluenorth-contact.<you>.workers.dev)
 *    and set FORM_ENDPOINT in Contact.dc.html to it.
 */

const TO = ['hello@bluenorth.com.au'];
const FROM = 'BlueNorth website <website@bluenorth.com.au>';

// CORS: open. Restricting Origin is not real protection (curl ignores it) and it
// silently breaks testing from previews or a staging URL. Abuse is handled by
// the honeypot + required-field checks below, and the API key living server-side.
const cors = () => ({
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Max-Age': '86400',
});

const esc = (s) => String(s || '').replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]));

export default {
  async fetch(request, env) {
    const headers = { ...cors(), 'Content-Type': 'application/json' };

    if (request.method === 'OPTIONS') return new Response(null, { headers: cors() });
    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ success: false, message: 'Method not allowed' }), { status: 405, headers });
    }

    let d;
    try {
      d = await request.json();
    } catch {
      return new Response(JSON.stringify({ success: false, message: 'Invalid request' }), { status: 400, headers });
    }

    // Honeypot — bots fill hidden fields, humans do not.
    if (d.botcheck) return new Response(JSON.stringify({ success: true }), { headers });

    const name = [d.first_name, d.last_name].filter(Boolean).join(' ').trim();
    const emailOk = typeof d.email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email);
    if (!name || !emailOk || !d.message) {
      return new Response(JSON.stringify({ success: false, message: 'Please complete the required fields.' }), { status: 422, headers });
    }

    const rows = [
      ['Name', name],
      ['Email', d.email],
      ['Phone', d.phone],
      ['Organisation', d.organisation],
      ['Role', d.role],
      ['Sector', d.sector],
      ['Interested in', d.interests],
    ].filter(([, v]) => v);

    const html = `
      <div style="font-family:-apple-system,Segoe UI,sans-serif;color:#161D2B;line-height:1.6">
        <p style="font:600 12px/1 ui-monospace,monospace;letter-spacing:.12em;text-transform:uppercase;color:#5E89C9;margin:0 0 16px">
          New website enquiry
        </p>
        <table style="border-collapse:collapse;margin-bottom:24px">
          ${rows.map(([k, v]) => `<tr>
            <td style="padding:4px 20px 4px 0;color:#6B7280;font-size:13px;vertical-align:top">${k}</td>
            <td style="padding:4px 0;font-size:15px">${esc(v)}</td>
          </tr>`).join('')}
        </table>
        <p style="font:600 12px/1 ui-monospace,monospace;letter-spacing:.12em;text-transform:uppercase;color:#6B7280;margin:0 0 8px">Message</p>
        <p style="white-space:pre-wrap;margin:0;font-size:15px">${esc(d.message)}</p>
      </div>`;

    const text = rows.map(([k, v]) => `${k}: ${v}`).join('\n') + '\n\n' + d.message;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM,
        to: TO,
        reply_to: d.email,
        subject: `Website enquiry — ${name}${d.organisation ? ', ' + d.organisation : ''}`,
        html,
        text,
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => '');
      console.error('Resend error', res.status, detail);
      return new Response(JSON.stringify({ success: false, message: 'Could not send. Please email hello@bluenorth.com.au.' }), { status: 502, headers });
    }

    return new Response(JSON.stringify({ success: true }), { headers });
  },
};
