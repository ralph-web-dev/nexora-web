import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const variants = {
  success: {
    title: 'Success',
    bg: 'bg-emerald-50 text-emerald-800 border-emerald-200/80',
    iconColor: 'text-emerald-700',
    icon: (
      <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  error: {
    title: 'Error',
    bg: 'bg-rose-50 text-rose-800 border-rose-200/80',
    iconColor: 'text-rose-700',
    icon: (
      <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
        <circle cx="12" cy="12" r="9" />
        <line x1="5.6" y1="18.4" x2="18.4" y2="5.6" />
      </svg>
    ),
  },
  warning: {
    title: 'Warning',
    bg: 'bg-amber-50 text-amber-800 border-amber-200/80',
    iconColor: 'text-amber-700',
    icon: (
      <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  info: {
    title: 'Info',
    bg: 'bg-sky-50 text-sky-800 border-sky-200/80',
    iconColor: 'text-sky-700',
    icon: (
      <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <circle cx="12" cy="12" r="10" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-4m0-4h.01" />
      </svg>
    ),
  },
};

const Toast = ({ type = 'success', title, message, onClose, duration = 5000, className = '' }) => {
  const [isVisible, setIsVisible] = useState(true);
  const variant = variants[type] || variants.success;

  useEffect(() => {
    setIsVisible(true);
  }, [message]);

  useEffect(() => {
    if (!duration || !isVisible) return;

    const timer = setTimeout(() => {
      handleClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, isVisible, message]);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) {
      setTimeout(onClose, 250);
    }
  };

  const hasWidth = /\bw-\w+/.test(className);
  const defaultWidth = hasWidth ? '' : 'w-full';

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 5, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -5, scale: 0.98 }}
          transition={{ duration: 0.15 }}
          className={`${defaultWidth} flex items-center gap-3 rounded-lg border px-4 py-2.5 shadow-sm text-left ${variant.bg} ${className}`}
          role="status"
          aria-live="polite"
        >

          <div className={`${variant.iconColor} shrink-0`}>
            {variant.icon}
          </div>


          <span className="text-[13px] sm:text-sm font-medium leading-tight flex-1 min-w-0">
            <strong className="font-bold mr-1">{title || variant.title}:</strong>
            {message}
          </span>

          <button
            type="button"
            onClick={handleClose}
            className="ml-auto rounded p-1 opacity-60 hover:opacity-100 hover:bg-black/5 transition duration-150 shrink-0 cursor-pointer"
            aria-label="Close notification"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
