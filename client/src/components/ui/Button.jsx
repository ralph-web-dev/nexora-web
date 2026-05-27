import React from 'react';
const Button = ({
  text,
  onClick,
  href,
  variant = 'solid',
  className = '',
  type = 'button',
  ...props
}) => {
  const baseStyles = 'px-10 py-4 font-bold rounded-none transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 text-sm md:text-base uppercase tracking-widest cursor-pointer inline-flex items-center justify-center select-none';
  const variants = {
    solid: 'bg-[#06a3da] hover:bg-[#0592c5] text-white shadow-lg hover:shadow-[#06a3da]/20',
    outline: 'bg-transparent border border-white/80 hover:border-white hover:bg-white hover:text-slate-950 text-white',
  };
  const combinedStyles = `${baseStyles} ${variants[variant] || variants.solid} ${className}`;
  if (href) {
    return (
      <a href={href} className={combinedStyles} {...props}>
        {text}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={combinedStyles} {...props}>
      {text}
    </button>
  );
};
export default Button;
