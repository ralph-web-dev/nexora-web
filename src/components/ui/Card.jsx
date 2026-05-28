import React from 'react';
const Card = ({
  title,
  value,
  icon,
  cardClass = 'rounded-none shadow-xl hover:-translate-y-3 hover:scale-[1.03]',
  iconWrapperClass = '',
  titleClass = '',
  valueClass = '',
  onClick
}) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-4 sm:gap-8 p-6 sm:p-10 md:p-12 transition-all duration-500 ease-out transform group cursor-pointer ${cardClass}`}
    >
      {icon && (
        <div className={`p-2 rounded-none transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-3 ${iconWrapperClass}`}>
          {icon}
        </div>
      )}
      <div className="flex flex-col text-left">
        <span className={`font-display mb-1 ${titleClass || 'text-[11px] font-black uppercase tracking-[0.15em]'}`}>
          {title}
        </span>
        <span className={`font-display tracking-tight leading-none ${valueClass || 'text-4xl md:text-5xl font-black'}`}>
          {value}
        </span>
      </div>
    </div>
  );
};
export default Card;
