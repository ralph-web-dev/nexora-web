import React from 'react';
import { motion } from 'framer-motion';

const Button = ({
  text,
  onClick,
  href,
  variant = 'solid',
  className = '',
  type = 'button',
  isLoading = false,
  disabled = false,
  children,
  ...props
}) => {
  const baseStyles = 'px-10 py-4 font-bold rounded-none transition-all duration-200 text-sm md:text-base uppercase tracking-widest cursor-pointer inline-flex items-center justify-center gap-2 select-none disabled:opacity-60 disabled:cursor-not-allowed';
  
  const variants = {
    solid: 'bg-[#06a3da] hover:bg-[#0592c5] text-white shadow-lg hover:shadow-[#06a3da]/20',
    outline: 'bg-transparent border border-white/80 hover:border-white hover:bg-white hover:text-slate-950 text-white',
  };

  const combinedStyles = `${baseStyles} ${variants[variant] || variants.solid} ${className}`;

  const renderContent = () => (
    <>
      {isLoading && (
        <svg className="animate-spin h-5 w-5 text-current shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {children || text}
    </>
  );

  if (href) {
    return (
      <motion.a 
        href={href} 
        className={combinedStyles}
        whileHover={{ scale: 1.01, y: -2 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {renderContent()}
      </motion.a>
    );
  }

  return (
    <motion.button 
      type={type} 
      onClick={onClick} 
      className={combinedStyles}
      disabled={disabled || isLoading}
      whileHover={disabled || isLoading ? {} : { scale: 1.01, y: -2 }}
      whileTap={disabled || isLoading ? {} : { scale: 0.98 }}
      {...props}
    >
      {renderContent()}
    </motion.button>
  );
};

export default Button;
