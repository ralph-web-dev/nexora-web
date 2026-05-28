import React from 'react';
const Dropdown = ({ 
  options = [], 
  defaultText = "Select an option", 
  className = "", 
  value, 
  onChange, 
  ...props 
}) => {
  return (
    <select 
      value={value}
      onChange={onChange}
      defaultValue={value === undefined ? "" : undefined}
      className={`w-full bg-white p-4 text-[#4f4f4f] outline-none transition-shadow rounded-none appearance-none cursor-pointer ${className}`}
      {...props}
    >
      <option value="" disabled>{defaultText}</option>
      {options.map((opt, index) => (
        <option key={index} value={opt.value}>{opt.label}</option>
      ))}
    </select>
  );
};
export default Dropdown;
