/* @ds-bundle: {"format":4,"namespace":"DesignSystem_3d5da5","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"CardHeader","sourcePath":"components/core/Card.jsx"},{"name":"CardBody","sourcePath":"components/core/Card.jsx"},{"name":"CardFooter","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"StatCard","sourcePath":"components/data/StatCard.jsx"},{"name":"Banner","sourcePath":"components/feedback/Banner.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Radio","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Textarea","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"1a6a0b3bfb8b","components/core/Badge.jsx":"95c1908b3bfb","components/core/Button.jsx":"709e13549041","components/core/Card.jsx":"1d86390c5fb4","components/core/IconButton.jsx":"b0ef28ce900b","components/data/StatCard.jsx":"aa11c5e78b84","components/feedback/Banner.jsx":"1a321bbe2cbe","components/feedback/ProgressBar.jsx":"adfd5218045b","components/forms/Checkbox.jsx":"78cc369d66b2","components/forms/Input.jsx":"1ffdc9965bad","components/forms/Select.jsx":"4ece7b890ad9","components/forms/Switch.jsx":"72e5ee4facca","components/navigation/Tabs.jsx":"5eea552eb1a3","ui_kits/bluenorth-app/App.jsx":"0a47b120d4f3","ui_kits/bluenorth-app/DashboardView.jsx":"5adcb481eac3","ui_kits/bluenorth-app/Login.jsx":"c744fcc49889","ui_kits/bluenorth-app/NewRequisition.jsx":"172b92b1894f","ui_kits/bluenorth-app/RequisitionsView.jsx":"f4e60187842e","ui_kits/bluenorth-app/Sidebar.jsx":"3ff8eb8992a6","ui_kits/bluenorth-app/SuppliersView.jsx":"3f38ee5a59cb","ui_kits/bluenorth-app/Topbar.jsx":"3ea80bb2a403","ui_kits/bluenorth-app/data.jsx":"271927c94aa8"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_3d5da5 = window.DesignSystem_3d5da5 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
if (typeof document !== 'undefined' && !document.getElementById('bn-avatar-styles')) {
  const el = document.createElement('style');
  el.id = 'bn-avatar-styles';
  el.textContent = `
  .bn-avatar {
    display: inline-flex; align-items: center; justify-content: center;
    border-radius: 50%; overflow: hidden; flex: none;
    font-family: var(--font-sans); font-weight: 600; color: var(--white);
    background: var(--harbor); user-select: none;
    box-shadow: inset 0 0 0 1px rgba(255,255,255,0.12);
  }
  .bn-avatar img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .bn-avatar--xs { width: 24px; height: 24px; font-size: 10px; }
  .bn-avatar--sm { width: 32px; height: 32px; font-size: 12px; }
  .bn-avatar--md { width: 40px; height: 40px; font-size: 14px; }
  .bn-avatar--lg { width: 56px; height: 56px; font-size: 19px; }
  .bn-avatar--square { border-radius: var(--radius-md); }
  `;
  document.head.appendChild(el);
}
const TONES = ['var(--polaris-blue)', 'var(--harbor)', 'var(--glacier)', 'var(--aurora-teal)', 'var(--ember)'];
function toneFor(str = '') {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = h * 31 + str.charCodeAt(i) >>> 0;
  return TONES[h % TONES.length];
}
function initials(name = '') {
  const p = name.trim().split(/\s+/);
  return ((p[0]?.[0] || '') + (p.length > 1 ? p[p.length - 1][0] : '')).toUpperCase();
}
function Avatar({
  name = '',
  src = null,
  size = 'md',
  square = false,
  className = '',
  style,
  ...rest
}) {
  const cls = ['bn-avatar', `bn-avatar--${size}`, square ? 'bn-avatar--square' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    style: {
      background: src ? undefined : toneFor(name),
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name
  }) : initials(name));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
if (typeof document !== 'undefined' && !document.getElementById('bn-badge-styles')) {
  const el = document.createElement('style');
  el.id = 'bn-badge-styles';
  el.textContent = `
  .bn-badge {
    display: inline-flex; align-items: center; gap: 6px;
    font-family: var(--font-sans); font-weight: 600; font-size: 12px; line-height: 1;
    padding: 4px 9px; border-radius: var(--radius-pill);
    border: 1px solid transparent; white-space: nowrap;
  }
  .bn-badge--sm { font-size: 11px; padding: 3px 7px; }
  .bn-badge__dot { width: 6px; height: 6px; border-radius: 50%; background: currentColor; flex: none; }
  .bn-badge--neutral { background: var(--surface-sunken); color: var(--text-muted); }
  .bn-badge--brand   { background: var(--surface-brand-soft); color: var(--text-brand); }
  .bn-badge--success { background: var(--status-success-soft); color: var(--status-success-text); }
  .bn-badge--warning { background: var(--status-warning-soft); color: var(--status-warning-text); }
  .bn-badge--danger  { background: var(--status-danger-soft); color: var(--status-danger-text); }
  .bn-badge--info    { background: var(--status-info-soft); color: var(--status-info-text); }
  .bn-badge--solid   { background: var(--polaris-blue); color: var(--white); }
  `;
  document.head.appendChild(el);
}
function Badge({
  children,
  tone = 'neutral',
  size = 'md',
  dot = false,
  className = '',
  ...rest
}) {
  const cls = ['bn-badge', `bn-badge--${tone}`, size === 'sm' ? 'bn-badge--sm' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), dot ? /*#__PURE__*/React.createElement("span", {
    className: "bn-badge__dot"
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Inject component styles once. Tokens come from the linked styles.css. */
if (typeof document !== 'undefined' && !document.getElementById('bn-button-styles')) {
  const el = document.createElement('style');
  el.id = 'bn-button-styles';
  el.textContent = `
  .bn-btn {
    --_bg: var(--action-primary);
    --_fg: var(--action-primary-text);
    --_bd: transparent;
    display: inline-flex; align-items: center; justify-content: center; gap: 8px;
    font-family: var(--font-sans); font-weight: 600; line-height: 1;
    border: var(--border-width-strong) solid var(--_bd);
    background: var(--_bg); color: var(--_fg);
    border-radius: var(--radius-md); cursor: pointer; white-space: nowrap;
    transition: background var(--duration-fast) var(--ease-standard),
                border-color var(--duration-fast) var(--ease-standard),
                transform var(--duration-fast) var(--ease-standard),
                box-shadow var(--duration-fast) var(--ease-standard);
    -webkit-tap-highlight-color: transparent;
  }
  .bn-btn:focus-visible { outline: none; box-shadow: var(--shadow-focus); }
  .bn-btn:active { transform: translateY(0.5px) scale(0.99); }
  .bn-btn[disabled] { opacity: 0.45; cursor: not-allowed; pointer-events: none; }

  /* sizes */
  .bn-btn--sm { height: 32px; padding: 0 12px; font-size: 13px; }
  .bn-btn--md { height: 40px; padding: 0 16px; font-size: 15px; }
  .bn-btn--lg { height: 48px; padding: 0 22px; font-size: 16px; }

  /* variants */
  .bn-btn--primary { --_bg: var(--action-primary); --_fg: var(--action-primary-text); }
  .bn-btn--primary:hover { --_bg: var(--action-primary-hover); }
  .bn-btn--primary:active { --_bg: var(--action-primary-press); }

  .bn-btn--secondary { --_bg: var(--action-secondary); --_fg: var(--white); }
  .bn-btn--secondary:hover { --_bg: var(--action-secondary-hover); }
  .bn-btn--secondary:active { --_bg: var(--action-secondary-press); }

  .bn-btn--outline { --_bg: transparent; --_fg: var(--text-brand); --_bd: var(--border-strong); }
  .bn-btn--outline:hover { --_bg: var(--surface-brand-soft); --_bd: var(--sky-blue); }

  .bn-btn--ghost { --_bg: transparent; --_fg: var(--text-brand); --_bd: transparent; }
  .bn-btn--ghost:hover { --_bg: var(--surface-brand-soft); }

  .bn-btn--danger { --_bg: var(--status-danger); --_fg: var(--white); }
  .bn-btn--danger:hover { --_bg: #b3322f; }

  .bn-btn--full { width: 100%; }
  .bn-btn svg, .bn-btn .bn-btn__ico { width: 1.1em; height: 1.1em; flex: none; }
  `;
  document.head.appendChild(el);
}
function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  leadingIcon = null,
  trailingIcon = null,
  disabled = false,
  type = 'button',
  className = '',
  ...rest
}) {
  const cls = ['bn-btn', `bn-btn--${variant}`, `bn-btn--${size}`, fullWidth ? 'bn-btn--full' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    className: cls,
    disabled: disabled
  }, rest), leadingIcon ? /*#__PURE__*/React.createElement("span", {
    className: "bn-btn__ico"
  }, leadingIcon) : null, children, trailingIcon ? /*#__PURE__*/React.createElement("span", {
    className: "bn-btn__ico"
  }, trailingIcon) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
if (typeof document !== 'undefined' && !document.getElementById('bn-card-styles')) {
  const el = document.createElement('style');
  el.id = 'bn-card-styles';
  el.textContent = `
  .bn-card {
    background: var(--surface-card);
    border: 1px solid var(--border-default);
    border-radius: var(--radius-card);
    box-shadow: var(--shadow-sm);
    overflow: clip;
  }
  .bn-card--flat { box-shadow: none; }
  .bn-card--raised { box-shadow: var(--shadow-md); }
  .bn-card--interactive { cursor: pointer; transition: box-shadow var(--duration-normal) var(--ease-standard), border-color var(--duration-normal) var(--ease-standard), transform var(--duration-normal) var(--ease-standard); }
  .bn-card--interactive:hover { box-shadow: var(--shadow-lg); border-color: var(--border-strong); transform: translateY(-2px); }
  .bn-card__pad { padding: var(--space-5); }
  .bn-card__header { padding: var(--space-5); border-bottom: 1px solid var(--border-subtle); display: flex; align-items: center; justify-content: space-between; gap: 12px; }
  .bn-card__title { font-family: var(--font-heading); font-weight: 600; font-size: 17px; color: var(--text-strong); letter-spacing: -0.01em; }
  .bn-card__footer { padding: var(--space-4) var(--space-5); border-top: 1px solid var(--border-subtle); background: var(--surface-page); }
  `;
  document.head.appendChild(el);
}
function Card({
  children,
  elevation = 'default',
  interactive = false,
  padded = false,
  className = '',
  ...rest
}) {
  const cls = ['bn-card', elevation === 'flat' ? 'bn-card--flat' : '', elevation === 'raised' ? 'bn-card--raised' : '', interactive ? 'bn-card--interactive' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), padded ? /*#__PURE__*/React.createElement("div", {
    className: "bn-card__pad"
  }, children) : children);
}
function CardHeader({
  title,
  action,
  children,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['bn-card__header', className].filter(Boolean).join(' ')
  }, rest), title ? /*#__PURE__*/React.createElement("div", {
    className: "bn-card__title"
  }, title) : children, action ? /*#__PURE__*/React.createElement("div", null, action) : null);
}
function CardBody({
  children,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['bn-card__pad', className].filter(Boolean).join(' ')
  }, rest), children);
}
function CardFooter({
  children,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['bn-card__footer', className].filter(Boolean).join(' ')
  }, rest), children);
}
Object.assign(__ds_scope, { Card, CardHeader, CardBody, CardFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
if (typeof document !== 'undefined' && !document.getElementById('bn-iconbtn-styles')) {
  const el = document.createElement('style');
  el.id = 'bn-iconbtn-styles';
  el.textContent = `
  .bn-iconbtn {
    display: inline-flex; align-items: center; justify-content: center;
    border: 1px solid transparent; background: transparent; color: var(--text-muted);
    border-radius: var(--radius-md); cursor: pointer; flex: none;
    transition: background var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard);
  }
  .bn-iconbtn:hover { background: var(--surface-sunken); color: var(--text-strong); }
  .bn-iconbtn:active { transform: scale(0.94); }
  .bn-iconbtn:focus-visible { outline: none; box-shadow: var(--shadow-focus); }
  .bn-iconbtn[disabled] { opacity: 0.4; cursor: not-allowed; pointer-events: none; }
  .bn-iconbtn--outline { border-color: var(--border-default); }
  .bn-iconbtn--solid { background: var(--polaris-blue); color: var(--white); }
  .bn-iconbtn--solid:hover { background: var(--action-primary-hover); color: var(--white); }
  .bn-iconbtn--sm { width: 32px; height: 32px; }
  .bn-iconbtn--md { width: 40px; height: 40px; }
  .bn-iconbtn--lg { width: 48px; height: 48px; }
  .bn-iconbtn svg, .bn-iconbtn img { width: 1.15em; height: 1.15em; }
  .bn-iconbtn--sm { font-size: 16px; } .bn-iconbtn--md { font-size: 18px; } .bn-iconbtn--lg { font-size: 20px; }
  `;
  document.head.appendChild(el);
}
function IconButton({
  children,
  label,
  variant = 'ghost',
  size = 'md',
  disabled = false,
  className = '',
  ...rest
}) {
  const cls = ['bn-iconbtn', `bn-iconbtn--${variant}`, `bn-iconbtn--${size}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls,
    "aria-label": label,
    title: label,
    disabled: disabled
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
if (typeof document !== 'undefined' && !document.getElementById('bn-stat-styles')) {
  const el = document.createElement('style');
  el.id = 'bn-stat-styles';
  el.textContent = `
  .bn-stat { font-family: var(--font-sans); background: var(--surface-card); border: 1px solid var(--border-default); border-radius: var(--radius-card); padding: var(--space-5); box-shadow: var(--shadow-xs); }
  .bn-stat__top { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
  .bn-stat__label { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-muted); }
  .bn-stat__icon { width: 30px; height: 30px; border-radius: var(--radius-sm); display: inline-flex; align-items: center; justify-content: center; background: var(--surface-brand-soft); color: var(--polaris-blue); flex: none; }
  .bn-stat__value { font-family: var(--font-heading); font-weight: 700; font-size: 30px; letter-spacing: -0.02em; color: var(--text-strong); margin-top: 12px; line-height: 1; }
  .bn-stat__foot { display: flex; align-items: center; gap: 6px; margin-top: 8px; font-size: 13px; color: var(--text-muted); }
  .bn-stat__delta { display: inline-flex; align-items: center; gap: 3px; font-weight: 600; font-family: var(--font-mono); font-size: 12px; }
  .bn-stat__delta--up { color: var(--status-success-text); }
  .bn-stat__delta--down { color: var(--status-danger-text); }
  `;
  document.head.appendChild(el);
}
function StatCard({
  label,
  value,
  delta,
  trend,
  hint,
  icon,
  className = '',
  ...rest
}) {
  const dir = trend || (delta && String(delta).trim().startsWith('-') ? 'down' : delta ? 'up' : null);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['bn-stat', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "bn-stat__top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bn-stat__label"
  }, label), icon ? /*#__PURE__*/React.createElement("span", {
    className: "bn-stat__icon"
  }, icon) : null), /*#__PURE__*/React.createElement("div", {
    className: "bn-stat__value"
  }, value), /*#__PURE__*/React.createElement("div", {
    className: "bn-stat__foot"
  }, delta != null ? /*#__PURE__*/React.createElement("span", {
    className: ['bn-stat__delta', dir === 'down' ? 'bn-stat__delta--down' : 'bn-stat__delta--up'].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      transform: dir === 'down' ? 'rotate(180deg)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "6 15 12 9 18 15"
  })), delta) : null, hint ? /*#__PURE__*/React.createElement("span", null, hint) : null));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Banner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
if (typeof document !== 'undefined' && !document.getElementById('bn-banner-styles')) {
  const el = document.createElement('style');
  el.id = 'bn-banner-styles';
  el.textContent = `
  .bn-banner {
    display: flex; align-items: flex-start; gap: 12px; font-family: var(--font-sans);
    padding: 13px 16px; border-radius: var(--radius-md);
    border: 1px solid transparent; font-size: 14px; line-height: 1.45;
  }
  .bn-banner__ico { flex: none; margin-top: 1px; display: inline-flex; }
  .bn-banner__body { flex: 1; }
  .bn-banner__title { font-weight: 700; }
  .bn-banner__msg { color: inherit; opacity: 0.92; }
  .bn-banner__close { flex: none; background: none; border: 0; cursor: pointer; color: inherit; opacity: 0.6; padding: 2px; border-radius: var(--radius-xs); line-height: 0; }
  .bn-banner__close:hover { opacity: 1; }
  .bn-banner--info { background: var(--status-info-soft); border-color: #cdd9ec; color: var(--status-info-text); }
  .bn-banner--success { background: var(--status-success-soft); border-color: #bfe3d9; color: var(--status-success-text); }
  .bn-banner--warning { background: var(--status-warning-soft); border-color: #f0dcb0; color: var(--status-warning-text); }
  .bn-banner--danger { background: var(--status-danger-soft); border-color: #f2c9c7; color: var(--status-danger-text); }
  `;
  document.head.appendChild(el);
}
const ICONS = {
  info: /*#__PURE__*/React.createElement("path", {
    d: "M12 16v-4M12 8h.01"
  }),
  success: /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }),
  warning: /*#__PURE__*/React.createElement("path", {
    d: "M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"
  }),
  danger: /*#__PURE__*/React.createElement("path", {
    d: "M12 8v5M12 16h.01M12 3 2 21h20L12 3Z"
  })
};
function Banner({
  tone = 'info',
  title,
  children,
  onClose,
  className = '',
  ...rest
}) {
  const showCircle = tone === 'info' || tone === 'success';
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['bn-banner', `bn-banner--${tone}`, className].filter(Boolean).join(' '),
    role: "status"
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "bn-banner__ico"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, showCircle ? /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }) : null, ICONS[tone])), /*#__PURE__*/React.createElement("div", {
    className: "bn-banner__body"
  }, title ? /*#__PURE__*/React.createElement("div", {
    className: "bn-banner__title"
  }, title) : null, children ? /*#__PURE__*/React.createElement("div", {
    className: "bn-banner__msg"
  }, children) : null), onClose ? /*#__PURE__*/React.createElement("button", {
    className: "bn-banner__close",
    "aria-label": "Dismiss",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }))) : null);
}
Object.assign(__ds_scope, { Banner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Banner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
if (typeof document !== 'undefined' && !document.getElementById('bn-progress-styles')) {
  const el = document.createElement('style');
  el.id = 'bn-progress-styles';
  el.textContent = `
  .bn-progress { font-family: var(--font-sans); display: flex; flex-direction: column; gap: 6px; }
  .bn-progress__top { display: flex; justify-content: space-between; font-size: 12px; }
  .bn-progress__label { font-weight: 600; color: var(--text-strong); }
  .bn-progress__val { font-family: var(--font-mono); color: var(--text-muted); }
  .bn-progress__track { height: 8px; background: var(--surface-sunken); border-radius: var(--radius-pill); overflow: hidden; }
  .bn-progress__fill { height: 100%; border-radius: var(--radius-pill); background: var(--polaris-blue); transition: width var(--duration-slow) var(--ease-out); }
  .bn-progress__fill--success { background: var(--aurora-teal); }
  .bn-progress__fill--warning { background: var(--sun); }
  .bn-progress__fill--danger { background: var(--signal-red); }
  `;
  document.head.appendChild(el);
}
function ProgressBar({
  value = 0,
  max = 100,
  label,
  showValue = true,
  tone = 'brand',
  formatValue,
  className = '',
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  const toneCls = tone === 'brand' ? '' : `bn-progress__fill--${tone}`;
  const display = formatValue ? formatValue(value, max) : `${Math.round(pct)}%`;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['bn-progress', className].filter(Boolean).join(' ')
  }, rest), label || showValue ? /*#__PURE__*/React.createElement("div", {
    className: "bn-progress__top"
  }, label ? /*#__PURE__*/React.createElement("span", {
    className: "bn-progress__label"
  }, label) : /*#__PURE__*/React.createElement("span", null), showValue ? /*#__PURE__*/React.createElement("span", {
    className: "bn-progress__val"
  }, display) : null) : null, /*#__PURE__*/React.createElement("div", {
    className: "bn-progress__track",
    role: "progressbar",
    "aria-valuenow": value,
    "aria-valuemax": max
  }, /*#__PURE__*/React.createElement("div", {
    className: ['bn-progress__fill', toneCls].filter(Boolean).join(' '),
    style: {
      width: pct + '%'
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
if (typeof document !== 'undefined' && !document.getElementById('bn-choice-styles')) {
  const el = document.createElement('style');
  el.id = 'bn-choice-styles';
  el.textContent = `
  .bn-choice { display: inline-flex; align-items: flex-start; gap: 10px; font-family: var(--font-sans); font-size: 15px; color: var(--text-body); cursor: pointer; user-select: none; }
  .bn-choice input { position: absolute; opacity: 0; width: 0; height: 0; }
  .bn-choice__box {
    width: 20px; height: 20px; flex: none; margin-top: 1px;
    border: 1.5px solid var(--border-strong); background: var(--surface-card);
    border-radius: var(--radius-xs); display: inline-flex; align-items: center; justify-content: center;
    color: var(--white); transition: all var(--duration-fast) var(--ease-standard);
  }
  .bn-choice__box--radio { border-radius: 50%; }
  .bn-choice input:checked + .bn-choice__box { background: var(--polaris-blue); border-color: var(--polaris-blue); }
  .bn-choice input:focus-visible + .bn-choice__box { box-shadow: var(--shadow-focus); }
  .bn-choice input:disabled + .bn-choice__box { background: var(--surface-sunken); border-color: var(--border-default); }
  .bn-choice--disabled { color: var(--text-subtle); cursor: not-allowed; }
  .bn-choice__check { opacity: 0; transition: opacity var(--duration-fast); }
  .bn-choice input:checked + .bn-choice__box .bn-choice__check { opacity: 1; }
  .bn-choice__dot { width: 8px; height: 8px; border-radius: 50%; background: var(--white); transform: scale(0); transition: transform var(--duration-fast) var(--ease-out); }
  .bn-choice input:checked + .bn-choice__box .bn-choice__dot { transform: scale(1); }
  .bn-choice__text { line-height: 1.35; }
  .bn-choice__desc { font-size: 13px; color: var(--text-muted); margin-top: 2px; }
  `;
  document.head.appendChild(el);
}
function Checkbox({
  label,
  description,
  disabled = false,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['bn-choice', disabled ? 'bn-choice--disabled' : '', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "bn-choice__box"
  }, /*#__PURE__*/React.createElement("svg", {
    className: "bn-choice__check",
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))), label || description ? /*#__PURE__*/React.createElement("span", {
    className: "bn-choice__text"
  }, label, description ? /*#__PURE__*/React.createElement("span", {
    className: "bn-choice__desc"
  }, description) : null) : null);
}
function Radio({
  label,
  description,
  disabled = false,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['bn-choice', disabled ? 'bn-choice--disabled' : '', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "bn-choice__box bn-choice__box--radio"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bn-choice__dot"
  })), label || description ? /*#__PURE__*/React.createElement("span", {
    className: "bn-choice__text"
  }, label, description ? /*#__PURE__*/React.createElement("span", {
    className: "bn-choice__desc"
  }, description) : null) : null);
}
Object.assign(__ds_scope, { Checkbox, Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
if (typeof document !== 'undefined' && !document.getElementById('bn-field-styles')) {
  const el = document.createElement('style');
  el.id = 'bn-field-styles';
  el.textContent = `
  .bn-field { display: flex; flex-direction: column; gap: 6px; font-family: var(--font-sans); }
  .bn-field__label { font-size: 13px; font-weight: 600; color: var(--text-strong); }
  .bn-field__req { color: var(--status-danger); margin-left: 2px; }
  .bn-field__hint { font-size: 12px; color: var(--text-muted); }
  .bn-field__hint--error { color: var(--status-danger-text); }
  .bn-inputwrap { position: relative; display: flex; align-items: center; }
  .bn-input {
    width: 100%; font-family: var(--font-sans); font-size: 15px; color: var(--text-body);
    background: var(--surface-card); border: 1.5px solid var(--border-default);
    border-radius: var(--radius-md); height: 40px; padding: 0 12px;
    transition: border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard);
    outline: none;
  }
  .bn-input::placeholder { color: var(--text-subtle); }
  .bn-input:hover { border-color: var(--border-strong); }
  .bn-input:focus { border-color: var(--border-focus); box-shadow: var(--shadow-focus); }
  .bn-input[disabled] { background: var(--surface-sunken); color: var(--text-subtle); cursor: not-allowed; }
  .bn-inputwrap--has-lead .bn-input { padding-left: 38px; }
  .bn-inputwrap--has-trail .bn-input { padding-right: 38px; }
  .bn-input--error { border-color: var(--status-danger); }
  .bn-input--error:focus { box-shadow: 0 0 0 3px var(--status-danger-soft); }
  .bn-input__adorn { position: absolute; display: inline-flex; align-items: center; color: var(--text-subtle); pointer-events: none; }
  .bn-input__adorn--lead { left: 12px; }
  .bn-input__adorn--trail { right: 12px; }
  .bn-textarea { min-height: 96px; padding: 10px 12px; line-height: 1.5; resize: vertical; }
  `;
  document.head.appendChild(el);
}
function Input({
  label,
  hint,
  error,
  required = false,
  leadingIcon = null,
  trailingIcon = null,
  id,
  className = '',
  ...rest
}) {
  const fid = id || (label ? 'bn-' + label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const wrapCls = ['bn-inputwrap', leadingIcon ? 'bn-inputwrap--has-lead' : '', trailingIcon ? 'bn-inputwrap--has-trail' : ''].filter(Boolean).join(' ');
  const inputCls = ['bn-input', error ? 'bn-input--error' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: "bn-field"
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "bn-field__label",
    htmlFor: fid
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    className: "bn-field__req"
  }, "*") : null) : null, /*#__PURE__*/React.createElement("div", {
    className: wrapCls
  }, leadingIcon ? /*#__PURE__*/React.createElement("span", {
    className: "bn-input__adorn bn-input__adorn--lead"
  }, leadingIcon) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    className: inputCls
  }, rest)), trailingIcon ? /*#__PURE__*/React.createElement("span", {
    className: "bn-input__adorn bn-input__adorn--trail"
  }, trailingIcon) : null), error ? /*#__PURE__*/React.createElement("span", {
    className: "bn-field__hint bn-field__hint--error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "bn-field__hint"
  }, hint) : null);
}
function Textarea({
  label,
  hint,
  error,
  required = false,
  id,
  className = '',
  ...rest
}) {
  const fid = id || (label ? 'bn-' + label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const cls = ['bn-input', 'bn-textarea', error ? 'bn-input--error' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: "bn-field"
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "bn-field__label",
    htmlFor: fid
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    className: "bn-field__req"
  }, "*") : null) : null, /*#__PURE__*/React.createElement("textarea", _extends({
    id: fid,
    className: cls
  }, rest)), error ? /*#__PURE__*/React.createElement("span", {
    className: "bn-field__hint bn-field__hint--error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "bn-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Input, Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
if (typeof document !== 'undefined' && !document.getElementById('bn-select-styles')) {
  const el = document.createElement('style');
  el.id = 'bn-select-styles';
  el.textContent = `
  .bn-selectwrap { position: relative; display: flex; align-items: center; }
  .bn-select {
    width: 100%; font-family: var(--font-sans); font-size: 15px; color: var(--text-body);
    background: var(--surface-card); border: 1.5px solid var(--border-default);
    border-radius: var(--radius-md); height: 40px; padding: 0 36px 0 12px;
    appearance: none; -webkit-appearance: none; cursor: pointer; outline: none;
    transition: border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard);
  }
  .bn-select:hover { border-color: var(--border-strong); }
  .bn-select:focus { border-color: var(--border-focus); box-shadow: var(--shadow-focus); }
  .bn-select[disabled] { background: var(--surface-sunken); color: var(--text-subtle); cursor: not-allowed; }
  .bn-select__chev { position: absolute; right: 12px; pointer-events: none; color: var(--text-muted); display: inline-flex; }
  `;
  document.head.appendChild(el);
}
function Select({
  label,
  hint,
  error,
  required = false,
  options = [],
  placeholder,
  id,
  className = '',
  children,
  ...rest
}) {
  const fid = id || (label ? 'bn-' + label.toLowerCase().replace(/\s+/g, '-') : undefined);
  return /*#__PURE__*/React.createElement("div", {
    className: "bn-field"
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "bn-field__label",
    htmlFor: fid
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    className: "bn-field__req"
  }, "*") : null) : null, /*#__PURE__*/React.createElement("div", {
    className: "bn-selectwrap"
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fid,
    className: ['bn-select', className].filter(Boolean).join(' ')
  }, rest), placeholder ? /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder) : null, children || options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const lab = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lab);
  })), /*#__PURE__*/React.createElement("span", {
    className: "bn-select__chev",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  })))), error ? /*#__PURE__*/React.createElement("span", {
    className: "bn-field__hint bn-field__hint--error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "bn-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
if (typeof document !== 'undefined' && !document.getElementById('bn-switch-styles')) {
  const el = document.createElement('style');
  el.id = 'bn-switch-styles';
  el.textContent = `
  .bn-switch { display: inline-flex; align-items: center; gap: 10px; font-family: var(--font-sans); font-size: 15px; color: var(--text-body); cursor: pointer; user-select: none; }
  .bn-switch input { position: absolute; opacity: 0; width: 0; height: 0; }
  .bn-switch__track {
    width: 40px; height: 24px; flex: none; border-radius: var(--radius-pill);
    background: var(--fog); position: relative;
    transition: background var(--duration-normal) var(--ease-standard);
  }
  .bn-switch__thumb {
    position: absolute; top: 2px; left: 2px; width: 20px; height: 20px; border-radius: 50%;
    background: var(--white); box-shadow: var(--shadow-sm);
    transition: transform var(--duration-normal) var(--ease-out);
  }
  .bn-switch input:checked + .bn-switch__track { background: var(--aurora-teal); }
  .bn-switch input:checked + .bn-switch__track .bn-switch__thumb { transform: translateX(16px); }
  .bn-switch input:focus-visible + .bn-switch__track { box-shadow: var(--shadow-focus); }
  .bn-switch--disabled { color: var(--text-subtle); cursor: not-allowed; opacity: 0.6; }
  `;
  document.head.appendChild(el);
}
function Switch({
  label,
  disabled = false,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['bn-switch', disabled ? 'bn-switch--disabled' : '', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "bn-switch__track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bn-switch__thumb"
  })), label ? /*#__PURE__*/React.createElement("span", null, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
if (typeof document !== 'undefined' && !document.getElementById('bn-tabs-styles')) {
  const el = document.createElement('style');
  el.id = 'bn-tabs-styles';
  el.textContent = `
  .bn-tabs { display: flex; gap: 4px; border-bottom: 1px solid var(--border-default); font-family: var(--font-sans); }
  .bn-tab {
    appearance: none; border: 0; background: none; cursor: pointer;
    font-family: inherit; font-size: 14px; font-weight: 600; color: var(--text-muted);
    padding: 10px 14px; position: relative; border-radius: var(--radius-sm) var(--radius-sm) 0 0;
    display: inline-flex; align-items: center; gap: 8px;
    transition: color var(--duration-fast) var(--ease-standard), background var(--duration-fast) var(--ease-standard);
  }
  .bn-tab:hover { color: var(--text-strong); background: var(--surface-sunken); }
  .bn-tab--active { color: var(--text-brand); }
  .bn-tab--active::after {
    content: ''; position: absolute; left: 8px; right: 8px; bottom: -1px; height: 2.5px;
    background: var(--polaris-blue); border-radius: var(--radius-pill);
  }
  .bn-tab__count {
    font-family: var(--font-mono); font-size: 11px; font-weight: 500;
    background: var(--surface-sunken); color: var(--text-muted);
    padding: 1px 7px; border-radius: var(--radius-pill);
  }
  .bn-tab--active .bn-tab__count { background: var(--surface-brand-soft); color: var(--text-brand); }
  `;
  document.head.appendChild(el);
}
function Tabs({
  tabs = [],
  value,
  onChange,
  className = '',
  ...rest
}) {
  const active = value != null ? value : tabs[0] && (tabs[0].id ?? tabs[0]);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['bn-tabs', className].filter(Boolean).join(' '),
    role: "tablist"
  }, rest), tabs.map(t => {
    const id = t.id ?? t;
    const label = t.label ?? t;
    const isActive = id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      role: "tab",
      "aria-selected": isActive,
      className: ['bn-tab', isActive ? 'bn-tab--active' : ''].filter(Boolean).join(' '),
      onClick: () => onChange && onChange(id)
    }, label, t.count != null ? /*#__PURE__*/React.createElement("span", {
      className: "bn-tab__count"
    }, t.count) : null);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/bluenorth-app/App.jsx
try { (() => {
/* App shell: login gate, sidebar + topbar, view routing, new-requisition drawer, toast. */

const VIEW_META = {
  dashboard: {
    title: 'Dashboard'
  },
  requisitions: {
    title: 'Requisitions'
  },
  orders: {
    title: 'Purchase orders'
  },
  suppliers: {
    title: 'Suppliers'
  },
  invoices: {
    title: 'Invoices'
  },
  analytics: {
    title: 'Analytics'
  },
  settings: {
    title: 'Settings'
  },
  help: {
    title: 'Help & support'
  }
};
function Placeholder({
  name
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "bn-view"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bn-placeholder"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Hammer",
    size: 28,
    color: "var(--text-subtle)"
  }), /*#__PURE__*/React.createElement("div", {
    className: "bn-placeholder__t"
  }, name), /*#__PURE__*/React.createElement("div", {
    className: "bn-placeholder__s"
  }, "This surface isn\u2019t part of the kit sample. The shell, navigation and brand styling are live.")));
}
function Toast({
  show,
  message
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'bn-toast' + (show ? ' bn-toast--show' : '')
  }, /*#__PURE__*/React.createElement("span", {
    className: "bn-toast__ico"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Check",
    size: 15,
    color: "#fff",
    strokeWidth: 2.6
  })), message);
}
function App() {
  const [authed, setAuthed] = React.useState(false);
  const [view, setView] = React.useState('dashboard');
  const [drawer, setDrawer] = React.useState(false);
  const [toast, setToast] = React.useState({
    show: false,
    message: ''
  });
  const fireToast = message => {
    setToast({
      show: true,
      message
    });
    clearTimeout(window.__bnToast);
    window.__bnToast = setTimeout(() => setToast(t => ({
      ...t,
      show: false
    })), 2600);
  };
  if (!authed) return /*#__PURE__*/React.createElement(Login, {
    onSignIn: () => setAuthed(true)
  });
  const meta = VIEW_META[view] || {
    title: view
  };
  let body;
  if (view === 'dashboard') body = /*#__PURE__*/React.createElement(DashboardView, {
    onOpenRequisitions: () => setView('requisitions')
  });else if (view === 'requisitions') body = /*#__PURE__*/React.createElement(RequisitionsView, {
    onNew: () => setDrawer(true)
  });else if (view === 'suppliers') body = /*#__PURE__*/React.createElement(SuppliersView, null);else body = /*#__PURE__*/React.createElement(Placeholder, {
    name: meta.title
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "bn-app"
  }, /*#__PURE__*/React.createElement(Sidebar, {
    active: view,
    onNavigate: setView
  }), /*#__PURE__*/React.createElement("div", {
    className: "bn-main"
  }, /*#__PURE__*/React.createElement(Topbar, {
    title: meta.title,
    onNew: () => setDrawer(true)
  }), /*#__PURE__*/React.createElement("div", {
    className: "bn-scroll"
  }, body)), /*#__PURE__*/React.createElement(NewRequisition, {
    open: drawer,
    onClose: () => setDrawer(false),
    onSubmit: () => {
      setDrawer(false);
      fireToast('Requisition submitted for approval');
    }
  }), /*#__PURE__*/React.createElement(Toast, {
    show: toast.show,
    message: toast.message
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/bluenorth-app/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/bluenorth-app/DashboardView.jsx
try { (() => {
/* Dashboard: KPI row, spend-by-category chart, activity feed, approvals queue. */

function SpendChart() {
  const {
    Card,
    CardHeader
  } = window.DesignSystem_3d5da5;
  const max = Math.max(...SPEND_CATEGORIES.map(c => c.value));
  return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, {
    title: "Spend by category",
    action: /*#__PURE__*/React.createElement("span", {
      className: "bn-mono bn-muted"
    }, "Last 90 days")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bn-bars"
  }, SPEND_CATEGORIES.map(c => /*#__PURE__*/React.createElement("div", {
    className: "bn-bars__row",
    key: c.name
  }, /*#__PURE__*/React.createElement("span", {
    className: "bn-bars__name"
  }, c.name), /*#__PURE__*/React.createElement("div", {
    className: "bn-bars__track"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bn-bars__fill",
    style: {
      width: c.value / max * 100 + '%',
      background: c.color
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "bn-bars__val"
  }, MONEY(c.value), "K"))))));
}
function ApprovalsQueue({
  onOpen
}) {
  const {
    Card,
    CardHeader,
    Badge,
    Button,
    Avatar
  } = window.DesignSystem_3d5da5;
  const pending = REQUISITIONS.filter(r => r.status === 'pending' || r.status === 'review').slice(0, 3);
  return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, {
    title: "Needs your approval",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      onClick: onOpen
    }, "View all")
  }), /*#__PURE__*/React.createElement("div", {
    className: "bn-approvals"
  }, pending.map(r => /*#__PURE__*/React.createElement("div", {
    className: "bn-approval",
    key: r.id
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: r.requester,
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    className: "bn-approval__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bn-approval__title"
  }, r.title), /*#__PURE__*/React.createElement("div", {
    className: "bn-approval__meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bn-mono"
  }, r.id), " \xB7 ", r.requester, " \xB7 ", r.dept)), /*#__PURE__*/React.createElement("div", {
    className: "bn-approval__amt"
  }, MONEY(r.amount)), /*#__PURE__*/React.createElement("div", {
    className: "bn-approval__actions"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm"
  }, "Decline"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "Approve"))))));
}
function ActivityFeed() {
  const {
    Card,
    CardHeader
  } = window.DesignSystem_3d5da5;
  return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, {
    title: "Activity"
  }), /*#__PURE__*/React.createElement("div", {
    className: "bn-activity"
  }, ACTIVITY.map((a, i) => /*#__PURE__*/React.createElement("div", {
    className: "bn-activity__row",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "bn-activity__dot",
    style: {
      background: a.tone
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: a.icon,
    size: 13,
    color: "#fff",
    strokeWidth: 2.4
  })), /*#__PURE__*/React.createElement("div", {
    className: "bn-activity__text"
  }, /*#__PURE__*/React.createElement("strong", null, a.who), " ", a.action, " ", /*#__PURE__*/React.createElement("span", {
    className: "bn-mono bn-activity__target"
  }, a.target)), /*#__PURE__*/React.createElement("span", {
    className: "bn-activity__time"
  }, a.time)))));
}
function DashboardView({
  onOpenRequisitions
}) {
  const {
    StatCard,
    Banner
  } = window.DesignSystem_3d5da5;
  return /*#__PURE__*/React.createElement("div", {
    className: "bn-view"
  }, /*#__PURE__*/React.createElement(Banner, {
    tone: "warning",
    title: "3 requisitions need your approval",
    onClose: () => {}
  }, "Two are over $50K and require dual sign-off. Review before end of day to keep orders on schedule."), /*#__PURE__*/React.createElement("div", {
    className: "bn-kpis"
  }, KPIS.map(k => /*#__PURE__*/React.createElement(StatCard, {
    key: k.label,
    label: k.label,
    value: k.value,
    delta: k.delta,
    trend: k.trend,
    hint: k.hint,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: k.icon,
      size: 17
    })
  }))), /*#__PURE__*/React.createElement("div", {
    className: "bn-grid-2"
  }, /*#__PURE__*/React.createElement(SpendChart, null), /*#__PURE__*/React.createElement(ActivityFeed, null)), /*#__PURE__*/React.createElement(ApprovalsQueue, {
    onOpen: onOpenRequisitions
  }));
}
window.DashboardView = DashboardView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/bluenorth-app/DashboardView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/bluenorth-app/Login.jsx
try { (() => {
/* Login / sign-in screen — brand split layout. */

function Login({
  onSignIn
}) {
  const {
    Input,
    Button,
    Checkbox
  } = window.DesignSystem_3d5da5;
  return /*#__PURE__*/React.createElement("div", {
    className: "bn-login"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bn-login__brandside"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/bluenorth-reverse-tagline.png",
    alt: "BlueNorth",
    className: "bn-login__logo"
  }), /*#__PURE__*/React.createElement("div", {
    className: "bn-login__pitch"
  }, /*#__PURE__*/React.createElement("h2", null, "Every purchase, one source of truth."), /*#__PURE__*/React.createElement("p", null, "Intake to PO to invoice \u2014 approvals that move at the speed of your business.")), /*#__PURE__*/React.createElement("div", {
    className: "bn-login__metrics"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "bn-mono"
  }, "$2.4M+"), /*#__PURE__*/React.createElement("small", null, "Spend under management")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "bn-mono"
  }, "4.2d"), /*#__PURE__*/React.createElement("small", null, "Avg. approval time")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "bn-mono"
  }, "98"), /*#__PURE__*/React.createElement("small", null, "Suppliers connected"))), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/bluenorth-mark-transparent-white.png",
    alt: "",
    className: "bn-login__star"
  })), /*#__PURE__*/React.createElement("div", {
    className: "bn-login__formside"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bn-login__form"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bn-eyebrow"
  }, "Welcome back"), /*#__PURE__*/React.createElement("h1", {
    className: "bn-login__h1"
  }, "Sign in to BlueNorth"), /*#__PURE__*/React.createElement("div", {
    className: "bn-login__fields"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Work email",
    type: "email",
    placeholder: "you@company.com",
    defaultValue: "dana@northwind.co",
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "Mail",
      size: 16
    })
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Password",
    type: "password",
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
    defaultValue: "password",
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "Lock",
      size: 16
    })
  }), /*#__PURE__*/React.createElement("div", {
    className: "bn-login__rowbetween"
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Remember me",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, "Forgot password?")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    fullWidth: true,
    size: "lg",
    onClick: onSignIn
  }, "Sign in"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    fullWidth: true,
    size: "lg",
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "Shield",
      size: 17
    })
  }, "Continue with SSO")), /*#__PURE__*/React.createElement("div", {
    className: "bn-login__foot"
  }, "New to your team? ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, "Request access")))));
}
window.Login = Login;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/bluenorth-app/Login.jsx", error: String((e && e.message) || e) }); }

// ui_kits/bluenorth-app/NewRequisition.jsx
try { (() => {
/* Slide-in drawer to create a new requisition. */

function NewRequisition({
  open,
  onClose,
  onSubmit
}) {
  const {
    Input,
    Textarea,
    Select,
    Button,
    Checkbox,
    Badge
  } = window.DesignSystem_3d5da5;
  const [amount, setAmount] = React.useState('48,000');
  const over = parseFloat(String(amount).replace(/[^0-9.]/g, '')) > 50000;
  return /*#__PURE__*/React.createElement("div", {
    className: 'bn-drawer' + (open ? ' bn-drawer--open' : ''),
    "aria-hidden": !open
  }, /*#__PURE__*/React.createElement("div", {
    className: "bn-drawer__scrim",
    onClick: onClose
  }), /*#__PURE__*/React.createElement("div", {
    className: "bn-drawer__panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bn-drawer__head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "bn-eyebrow"
  }, "New requisition"), /*#__PURE__*/React.createElement("h2", {
    className: "bn-drawer__title"
  }, "Request a purchase")), /*#__PURE__*/React.createElement("button", {
    className: "bn-drawer__close",
    onClick: onClose,
    "aria-label": "Close"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "X",
    size: 20
  }))), /*#__PURE__*/React.createElement("div", {
    className: "bn-drawer__body"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "What are you buying?",
    placeholder: "e.g. Annual Figma Enterprise renewal",
    required: true,
    defaultValue: ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "bn-formrow"
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Department",
    options: ['Design', 'Engineering', 'Marketing', 'Facilities', 'Legal'],
    required: true
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Cost center",
    options: ['CC-1043 · Product', 'CC-2210 · GTM', 'CC-3001 · Ops'],
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "bn-formrow"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Supplier",
    placeholder: "Search suppliers\u2026",
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "Building2",
      size: 16
    })
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Amount (USD)",
    value: amount,
    onChange: e => setAmount(e.target.value),
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "DollarSign",
      size: 16
    }),
    error: over ? 'Over $50K — needs dual approval' : undefined
  })), /*#__PURE__*/React.createElement(Select, {
    label: "Payment terms",
    options: ['Net 30', 'Net 60', 'Due on receipt'],
    defaultValue: "Net 30"
  }), /*#__PURE__*/React.createElement(Textarea, {
    label: "Business justification",
    hint: "Visible to approvers",
    placeholder: "Explain the need and expected outcome\u2026"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "This is a recurring purchase",
    description: "Auto-create a requisition each renewal period"
  }), /*#__PURE__*/React.createElement("div", {
    className: "bn-drawer__summary"
  }, /*#__PURE__*/React.createElement("span", null, "Approval path"), /*#__PURE__*/React.createElement("div", {
    className: "bn-drawer__chips"
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral",
    dot: true
  }, "Manager"), /*#__PURE__*/React.createElement(Icon, {
    name: "ChevronRight",
    size: 14,
    color: "var(--text-subtle)"
  }), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral",
    dot: true
  }, "Finance"), over ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Icon, {
    name: "ChevronRight",
    size: 14,
    color: "var(--text-subtle)"
  }), /*#__PURE__*/React.createElement(Badge, {
    tone: "warning",
    dot: true
  }, "VP sign-off")) : null))), /*#__PURE__*/React.createElement("div", {
    className: "bn-drawer__foot"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: onClose
  }, "Cancel"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline"
  }, "Save draft"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "Send",
      size: 16
    }),
    onClick: onSubmit
  }, "Submit for approval")))));
}
window.NewRequisition = NewRequisition;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/bluenorth-app/NewRequisition.jsx", error: String((e && e.message) || e) }); }

// ui_kits/bluenorth-app/RequisitionsView.jsx
try { (() => {
/* Requisitions: tabbed, filterable table of purchase requests. */

function RequisitionsView({
  onNew
}) {
  const {
    Tabs,
    Badge,
    Button,
    IconButton,
    Input,
    Card
  } = window.DesignSystem_3d5da5;
  const [tab, setTab] = React.useState('all');
  const [query, setQuery] = React.useState('');
  const counts = {
    all: REQUISITIONS.length,
    pending: REQUISITIONS.filter(r => r.status === 'pending').length,
    review: REQUISITIONS.filter(r => r.status === 'review').length,
    approved: REQUISITIONS.filter(r => r.status === 'approved').length
  };
  const tabs = [{
    id: 'all',
    label: 'All',
    count: counts.all
  }, {
    id: 'pending',
    label: 'Pending',
    count: counts.pending
  }, {
    id: 'review',
    label: 'In review',
    count: counts.review
  }, {
    id: 'approved',
    label: 'Approved',
    count: counts.approved
  }];
  const rows = REQUISITIONS.filter(r => tab === 'all' ? true : r.status === tab).filter(r => (r.title + r.supplier + r.id + r.requester).toLowerCase().includes(query.toLowerCase()));
  return /*#__PURE__*/React.createElement("div", {
    className: "bn-view"
  }, /*#__PURE__*/React.createElement(Card, {
    elevation: "flat",
    style: {
      overflow: 'visible'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bn-reqbar"
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    tabs: tabs
  }), /*#__PURE__*/React.createElement("div", {
    className: "bn-reqbar__tools"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bn-inlinesearch"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Search",
    size: 16,
    style: {
      color: 'var(--text-subtle)'
    }
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Filter\u2026",
    value: query,
    onChange: e => setQuery(e.target.value)
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "md",
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "SlidersHorizontal",
      size: 16
    })
  }, "Filters"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "md",
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "Plus",
      size: 16
    }),
    onClick: onNew
  }, "New"))), /*#__PURE__*/React.createElement("div", {
    className: "bn-table"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bn-table__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bn-col-id"
  }, "ID"), /*#__PURE__*/React.createElement("span", {
    className: "bn-col-title"
  }, "Requisition"), /*#__PURE__*/React.createElement("span", {
    className: "bn-col-dept"
  }, "Department"), /*#__PURE__*/React.createElement("span", {
    className: "bn-col-status"
  }, "Status"), /*#__PURE__*/React.createElement("span", {
    className: "bn-col-amt"
  }, "Amount"), /*#__PURE__*/React.createElement("span", {
    className: "bn-col-req"
  }, "Requester"), /*#__PURE__*/React.createElement("span", {
    className: "bn-col-act"
  })), rows.map(r => {
    const st = STATUS_TONE[r.status];
    return /*#__PURE__*/React.createElement("div", {
      className: "bn-table__row",
      key: r.id
    }, /*#__PURE__*/React.createElement("span", {
      className: "bn-col-id bn-mono"
    }, r.id), /*#__PURE__*/React.createElement("span", {
      className: "bn-col-title"
    }, /*#__PURE__*/React.createElement("span", {
      className: "bn-table__title"
    }, r.title), /*#__PURE__*/React.createElement("span", {
      className: "bn-table__sub"
    }, r.supplier, " \xB7 ", r.date)), /*#__PURE__*/React.createElement("span", {
      className: "bn-col-dept"
    }, r.dept), /*#__PURE__*/React.createElement("span", {
      className: "bn-col-status"
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: st.tone,
      dot: r.status !== 'rejected'
    }, st.label)), /*#__PURE__*/React.createElement("span", {
      className: "bn-col-amt bn-mono"
    }, MONEY(r.amount)), /*#__PURE__*/React.createElement("span", {
      className: "bn-col-req"
    }, r.requester), /*#__PURE__*/React.createElement("span", {
      className: "bn-col-act"
    }, /*#__PURE__*/React.createElement(IconButton, {
      label: "Open",
      variant: "ghost"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "ChevronRight",
      size: 18
    }))));
  }), rows.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "bn-table__empty"
  }, "No requisitions match your filter.") : null)));
}
window.RequisitionsView = RequisitionsView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/bluenorth-app/RequisitionsView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/bluenorth-app/Sidebar.jsx
try { (() => {
/* Left navigation rail for the BlueNorth app shell. */

function Sidebar({
  active,
  onNavigate
}) {
  const {
    Badge
  } = window.DesignSystem_3d5da5;
  return /*#__PURE__*/React.createElement("aside", {
    className: "bn-sidebar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bn-sidebar__brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/bluenorth-mark-transparent-white.png",
    alt: "",
    className: "bn-sidebar__mark"
  }), /*#__PURE__*/React.createElement("span", {
    className: "bn-sidebar__word"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bn-sidebar__blue"
  }, "Blue"), "North")), /*#__PURE__*/React.createElement("nav", {
    className: "bn-sidebar__nav"
  }, NAV.map(item => /*#__PURE__*/React.createElement("button", {
    key: item.id,
    className: 'bn-navitem' + (active === item.id ? ' bn-navitem--active' : ''),
    onClick: () => onNavigate(item.id)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: item.icon,
    size: 18
  }), /*#__PURE__*/React.createElement("span", {
    className: "bn-navitem__label"
  }, item.label), item.count ? /*#__PURE__*/React.createElement(Badge, {
    tone: "solid",
    size: "sm"
  }, item.count) : null))), /*#__PURE__*/React.createElement("div", {
    className: "bn-sidebar__spacer"
  }), /*#__PURE__*/React.createElement("div", {
    className: "bn-sidebar__budget"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bn-sidebar__budget-top"
  }, /*#__PURE__*/React.createElement("span", null, "Q2 budget"), /*#__PURE__*/React.createElement("span", {
    className: "bn-mono"
  }, "68%")), /*#__PURE__*/React.createElement("div", {
    className: "bn-sidebar__budget-track"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bn-sidebar__budget-fill",
    style: {
      width: '68%'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "bn-sidebar__budget-sub"
  }, "$680K of $1.0M committed")), /*#__PURE__*/React.createElement("nav", {
    className: "bn-sidebar__nav"
  }, NAV_FOOTER.map(item => /*#__PURE__*/React.createElement("button", {
    key: item.id,
    className: "bn-navitem",
    onClick: () => onNavigate(item.id)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: item.icon,
    size: 18
  }), /*#__PURE__*/React.createElement("span", {
    className: "bn-navitem__label"
  }, item.label)))));
}
window.Sidebar = Sidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/bluenorth-app/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/bluenorth-app/SuppliersView.jsx
try { (() => {
/* Suppliers: card grid of vendors with spend, risk, rating. */

function SupplierCard({
  s
}) {
  const {
    Card,
    Badge,
    Avatar,
    IconButton
  } = window.DesignSystem_3d5da5;
  const statusTone = s.status === 'Preferred' ? 'brand' : s.status === 'Under review' ? 'warning' : 'neutral';
  return /*#__PURE__*/React.createElement(Card, {
    interactive: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "bn-supplier"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bn-supplier__top"
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: s.name,
    square: true,
    size: "md"
  }), /*#__PURE__*/React.createElement("div", {
    className: "bn-supplier__id"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bn-supplier__name"
  }, s.name), /*#__PURE__*/React.createElement("div", {
    className: "bn-supplier__cat"
  }, s.category)), /*#__PURE__*/React.createElement(IconButton, {
    label: "More",
    variant: "ghost"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "MoreHorizontal",
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    className: "bn-supplier__stats"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "bn-supplier__k"
  }, "Spend YTD"), /*#__PURE__*/React.createElement("div", {
    className: "bn-supplier__v bn-mono"
  }, MONEY(s.spend))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "bn-supplier__k"
  }, "Rating"), /*#__PURE__*/React.createElement("div", {
    className: "bn-supplier__v"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Star",
    size: 13,
    color: "var(--sun)"
  }), " ", s.rating)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "bn-supplier__k"
  }, "Contracts"), /*#__PURE__*/React.createElement("div", {
    className: "bn-supplier__v"
  }, s.contracts))), /*#__PURE__*/React.createElement("div", {
    className: "bn-supplier__foot"
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: statusTone
  }, s.status), /*#__PURE__*/React.createElement(Badge, {
    tone: RISK_TONE[s.risk],
    dot: true
  }, s.risk[0].toUpperCase() + s.risk.slice(1), " risk"))));
}
function SuppliersView() {
  const {
    Button,
    Select
  } = window.DesignSystem_3d5da5;
  return /*#__PURE__*/React.createElement("div", {
    className: "bn-view"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bn-filterrow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bn-filterrow__left"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 180
    }
  }, /*#__PURE__*/React.createElement(Select, {
    options: ['All categories', 'IT & Software', 'Logistics', 'Facilities'],
    defaultValue: "All categories"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 150
    }
  }, /*#__PURE__*/React.createElement(Select, {
    options: ['All risk', 'Low', 'Medium', 'High'],
    defaultValue: "All risk"
  }))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "Plus",
      size: 16
    })
  }, "Add supplier")), /*#__PURE__*/React.createElement("div", {
    className: "bn-supplier-grid"
  }, SUPPLIERS.map(s => /*#__PURE__*/React.createElement(SupplierCard, {
    key: s.name,
    s: s
  }))));
}
window.SuppliersView = SuppliersView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/bluenorth-app/SuppliersView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/bluenorth-app/Topbar.jsx
try { (() => {
/* Top bar: page title, global search, actions, user. */

function Topbar({
  title,
  subtitle,
  onNew
}) {
  const {
    Button,
    IconButton,
    Avatar
  } = window.DesignSystem_3d5da5;
  return /*#__PURE__*/React.createElement("header", {
    className: "bn-topbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bn-topbar__titles"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bn-eyebrow"
  }, "Procurement"), /*#__PURE__*/React.createElement("h1", {
    className: "bn-topbar__title"
  }, title)), /*#__PURE__*/React.createElement("div", {
    className: "bn-topbar__search"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Search",
    size: 17,
    style: {
      color: 'var(--text-subtle)'
    }
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Search requisitions, suppliers, POs\u2026"
  }), /*#__PURE__*/React.createElement("span", {
    className: "bn-topbar__kbd"
  }, "\u2318K")), /*#__PURE__*/React.createElement("div", {
    className: "bn-topbar__actions"
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Notifications",
    variant: "ghost"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Bell",
    size: 19
  })), /*#__PURE__*/React.createElement(IconButton, {
    label: "Saved views",
    variant: "ghost"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Bookmark",
    size: 19
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "Plus",
      size: 17
    }),
    onClick: onNew
  }, "New requisition"), /*#__PURE__*/React.createElement("div", {
    className: "bn-topbar__user"
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Dana Okafor",
    size: "sm"
  }))));
}
window.Topbar = Topbar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/bluenorth-app/Topbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/bluenorth-app/data.jsx
try { (() => {
/* Shared helpers + mock data for the BlueNorth procurement app UI kit. */

/* Lucide icon helper — renders a stroke icon by name. */
function Icon({
  name,
  size = 18,
  color = 'currentColor',
  strokeWidth = 2,
  style
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current && window.lucide && lucide[name]) {
      ref.current.innerHTML = '';
      const svg = lucide.createElement(lucide[name]);
      svg.setAttribute('width', size);
      svg.setAttribute('height', size);
      svg.setAttribute('stroke-width', strokeWidth);
      ref.current.appendChild(svg);
    }
  }, [name, size, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: 'inline-flex',
      color,
      ...style
    }
  });
}
const MONEY = n => '$' + n.toLocaleString('en-US');
const NAV = [{
  id: 'dashboard',
  label: 'Dashboard',
  icon: 'LayoutDashboard'
}, {
  id: 'requisitions',
  label: 'Requisitions',
  icon: 'FileText',
  count: 12
}, {
  id: 'orders',
  label: 'Purchase orders',
  icon: 'ShoppingCart'
}, {
  id: 'suppliers',
  label: 'Suppliers',
  icon: 'Building2'
}, {
  id: 'invoices',
  label: 'Invoices',
  icon: 'ReceiptText'
}, {
  id: 'analytics',
  label: 'Analytics',
  icon: 'TrendingUp'
}];
const NAV_FOOTER = [{
  id: 'settings',
  label: 'Settings',
  icon: 'Settings'
}, {
  id: 'help',
  label: 'Help & support',
  icon: 'LifeBuoy'
}];
const KPIS = [{
  label: 'Spend YTD',
  value: '$2.41M',
  delta: '12.3%',
  trend: 'down',
  hint: 'vs last year',
  icon: 'Wallet'
}, {
  label: 'Realized savings',
  value: '$312K',
  delta: '8.1%',
  trend: 'up',
  hint: 'on target',
  icon: 'PiggyBank'
}, {
  label: 'Avg. cycle time',
  value: '4.2d',
  delta: '0.8d faster',
  trend: 'up',
  hint: '',
  icon: 'Timer'
}, {
  label: 'Active suppliers',
  value: '98',
  delta: '3',
  trend: 'down',
  hint: 'vs last month',
  icon: 'Building2'
}];
const SPEND_CATEGORIES = [{
  name: 'IT & Software',
  value: 842,
  color: 'var(--viz-1)'
}, {
  name: 'Facilities',
  value: 564,
  color: 'var(--viz-2)'
}, {
  name: 'Logistics',
  value: 438,
  color: 'var(--viz-3)'
}, {
  name: 'Professional svc.',
  value: 322,
  color: 'var(--viz-4)'
}, {
  name: 'Marketing',
  value: 254,
  color: 'var(--viz-5)'
}];
const REQUISITIONS = [{
  id: 'REQ-4417',
  title: 'Annual Figma Enterprise renewal',
  supplier: 'Figma Inc.',
  dept: 'Design',
  amount: 48000,
  status: 'pending',
  requester: 'Dana Okafor',
  date: 'Jun 11'
}, {
  id: 'REQ-4416',
  title: '40× standing desks — HQ fit-out',
  supplier: 'Branch Furniture',
  dept: 'Facilities',
  amount: 31200,
  status: 'approved',
  requester: 'Theo Nguyen',
  date: 'Jun 11'
}, {
  id: 'REQ-4415',
  title: 'Q3 paid search budget',
  supplier: 'Google Ads',
  dept: 'Marketing',
  amount: 75000,
  status: 'pending',
  requester: 'Mara Lindqvist',
  date: 'Jun 10'
}, {
  id: 'REQ-4414',
  title: 'Datadog observability — tier up',
  supplier: 'Datadog',
  dept: 'Engineering',
  amount: 22400,
  status: 'review',
  requester: 'Sam Patel',
  date: 'Jun 10'
}, {
  id: 'REQ-4413',
  title: 'Pallet racking — West warehouse',
  supplier: 'Acme Industrial',
  dept: 'Logistics',
  amount: 18650,
  status: 'approved',
  requester: 'Lena Brandt',
  date: 'Jun 09'
}, {
  id: 'REQ-4412',
  title: 'Legal retainer — Q3 contracts',
  supplier: 'Hale & Voss LLP',
  dept: 'Legal',
  amount: 60000,
  status: 'rejected',
  requester: 'Owen Reyes',
  date: 'Jun 08'
}, {
  id: 'REQ-4411',
  title: 'Office coffee program',
  supplier: 'Blue Bottle',
  dept: 'Facilities',
  amount: 9400,
  status: 'approved',
  requester: 'Theo Nguyen',
  date: 'Jun 07'
}];
const STATUS_TONE = {
  pending: {
    tone: 'warning',
    label: 'Pending approval'
  },
  approved: {
    tone: 'success',
    label: 'Approved'
  },
  review: {
    tone: 'info',
    label: 'In review'
  },
  rejected: {
    tone: 'danger',
    label: 'Rejected'
  },
  draft: {
    tone: 'neutral',
    label: 'Draft'
  }
};
const SUPPLIERS = [{
  name: 'Acme Industrial',
  category: 'Logistics',
  spend: 312000,
  risk: 'low',
  rating: 4.6,
  status: 'Preferred',
  contracts: 3
}, {
  name: 'Datadog',
  category: 'IT & Software',
  spend: 268000,
  risk: 'low',
  rating: 4.8,
  status: 'Preferred',
  contracts: 1
}, {
  name: 'Branch Furniture',
  category: 'Facilities',
  spend: 96400,
  risk: 'medium',
  rating: 4.1,
  status: 'Active',
  contracts: 2
}, {
  name: 'Hale & Voss LLP',
  category: 'Professional svc.',
  spend: 184000,
  risk: 'low',
  rating: 4.4,
  status: 'Active',
  contracts: 1
}, {
  name: 'Northwind Freight',
  category: 'Logistics',
  spend: 142500,
  risk: 'high',
  rating: 3.2,
  status: 'Under review',
  contracts: 2
}, {
  name: 'Figma Inc.',
  category: 'IT & Software',
  spend: 88000,
  risk: 'low',
  rating: 4.9,
  status: 'Preferred',
  contracts: 1
}];
const RISK_TONE = {
  low: 'success',
  medium: 'warning',
  high: 'danger'
};
const ACTIVITY = [{
  who: 'Mara Lindqvist',
  action: 'approved',
  target: 'REQ-4416',
  time: '8m ago',
  icon: 'Check',
  tone: 'var(--aurora-teal)'
}, {
  who: 'You',
  action: 'commented on',
  target: 'REQ-4414',
  time: '24m ago',
  icon: 'MessageSquare',
  tone: 'var(--glacier)'
}, {
  who: 'Sam Patel',
  action: 'submitted',
  target: 'REQ-4417',
  time: '1h ago',
  icon: 'FileText',
  tone: 'var(--polaris-blue)'
}, {
  who: 'System',
  action: 'flagged budget on',
  target: 'REQ-4415',
  time: '2h ago',
  icon: 'TriangleAlert',
  tone: 'var(--sun)'
}];
Object.assign(window, {
  Icon,
  MONEY,
  NAV,
  NAV_FOOTER,
  KPIS,
  SPEND_CATEGORIES,
  REQUISITIONS,
  STATUS_TONE,
  SUPPLIERS,
  RISK_TONE,
  ACTIVITY
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/bluenorth-app/data.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardHeader = __ds_scope.CardHeader;

__ds_ns.CardBody = __ds_scope.CardBody;

__ds_ns.CardFooter = __ds_scope.CardFooter;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Banner = __ds_scope.Banner;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
