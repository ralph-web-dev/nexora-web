import React from 'react';

const variants = {
  success: {
    title: 'Success',
    bg: 'bg-emerald-50 text-emerald-950 border-emerald-200',
    icon: '✓',
    text: 'text-emerald-900',
  },
  error: {
    title: 'Error',
    bg: 'bg-rose-50 text-rose-950 border-rose-200',
    icon: '⛔',
    text: 'text-rose-900',
  },
  warning: {
    title: 'Warning',
    bg: 'bg-amber-50 text-amber-950 border-amber-200',
    icon: '⚠',
    text: 'text-amber-900',
  },
  info: {
    title: 'Info',
    bg: 'bg-sky-50 text-sky-950 border-sky-200',
    icon: 'ℹ',
    text: 'text-sky-900',
  },
};

const Toast = ({ type = 'success', title, message, onClose, className = '' }) => {
  const variant = variants[type] || variants.success;
  return (
    <div
      className={`flex items-start gap-4 rounded-2xl border px-4 py-4 shadow-sm ${variant.bg} ${className}`}
      role="status"
      aria-live="polite"
    >
      <div className={`flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-lg font-semibold shadow-sm ${variant.text}`}>
        {variant.icon}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold leading-tight text-slate-900">
          {title || variant.title}
        </p>
        <p className="text-sm leading-snug text-slate-700 mt-1">
          {message}
        </p>
      </div>
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className="ml-auto rounded-full p-1 text-slate-500 transition hover:bg-white/80 hover:text-slate-900"
          aria-label="Close notification"
        >
          <span className="text-lg">×</span>
        </button>
      )}
    </div>
  );
};

export default Toast;
