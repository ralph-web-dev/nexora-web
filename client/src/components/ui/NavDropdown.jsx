import React from 'react';
import { Link } from 'react-router-dom';
const NavDropdown = ({ items }) => {
  if (!items || items.length === 0) return null;
  return (
    <div className="absolute top-full left-0 mt-0 w-[180px] bg-white shadow-sm opacity-0 invisible group-hover/navitem:opacity-100 group-hover/navitem:visible transition-all duration-300 py-2 flex flex-col z-50">
      {items.map((sublink) => (
        <Link
          key={sublink.name}
          to={sublink.href}
          className="px-5 py-2.5 text-[15px] text-slate-700 font-medium hover:text-[#06a3da] hover:bg-slate-50 transition-colors"
        >
          {sublink.name}
        </Link>
      ))}
    </div>
  );
};
export default NavDropdown;
