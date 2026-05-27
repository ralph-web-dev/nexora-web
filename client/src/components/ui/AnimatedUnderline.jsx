import React from 'react';
const AnimatedUnderline = ({ children, className = '', lineClass = 'left-0 w-full' }) => {
  return (
    <span className={`relative inline-block pb-4 ${className}`}>
      {children}
      <span className={`absolute bottom-0 h-[4px] bg-[#06a3da] rounded-none overflow-hidden ${lineClass}`}>
        <span className="absolute top-0 w-2 h-full bg-white animate-loading-bar"></span>
      </span>
    </span>
  );
};
export default AnimatedUnderline;
