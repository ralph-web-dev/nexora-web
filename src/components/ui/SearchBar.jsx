import React, { useState } from 'react';
import { SearchIcon } from '../sections/Icons';

const SearchBar = ({
  onSearch,
  placeholder = 'Search...',
  variant = 'static',
  className = '',
  inputClassName = '',
  buttonClassName = '',
  searchQuery,
  setSearchQuery,
  searchOpen,
  setSearchOpen,
}) => {

  const [localQuery, setLocalQuery] = useState('');
  const [localOpen, setLocalOpen] = useState(false);

  const isControlledQuery = searchQuery !== undefined && setSearchQuery !== undefined;
  const currentQuery = isControlledQuery ? searchQuery : localQuery;
  const setCurrentQuery = isControlledQuery ? setSearchQuery : setLocalQuery;

  const isControlledOpen = searchOpen !== undefined && setSearchOpen !== undefined;
  const isOpen = isControlledOpen ? searchOpen : localOpen;
  const setIsOpen = isControlledOpen ? setSearchOpen : setLocalOpen;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(currentQuery);
    }
  };

  const handleButtonClick = () => {
    if (variant === 'collapsible') {
      if (isOpen) {
        if (currentQuery.trim() && onSearch) {
          onSearch(currentQuery);
        } else {
          setIsOpen(false);
        }
      } else {
        setIsOpen(true);
      }
    } else {
      if (onSearch) {
        onSearch(currentQuery);
      }
    }
  };

  if (variant === 'collapsible') {
    return (
      <div className={`relative flex items-center ${className}`}>
        <form
          onSubmit={handleSubmit}
          className={`flex items-center transition-all duration-500 ease-out overflow-hidden ${isOpen ? 'w-48 opacity-100 mr-2' : 'w-0 opacity-0 pointer-events-none'
            }`}
        >
          <input
            type="text"
            placeholder={placeholder}
            value={currentQuery}
            onChange={(e) => setCurrentQuery(e.target.value)}
            className={`w-full bg-slate-900/80 border border-slate-700/60 rounded-full px-4 py-1 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#06a3da] ${inputClassName}`}
          />
        </form>
        <button
          type="button"
          onClick={handleButtonClick}
          aria-label="Search"
          className={`p-2 rounded-full cursor-pointer transition-all duration-300 ${isOpen
              ? 'text-[#06a3da] bg-slate-900/65'
              : 'text-white/90 hover:text-[#06a3da] hover:bg-white/5'
            } ${buttonClassName}`}
        >
          <SearchIcon className="w-5 h-5" />
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`relative w-full max-w-xs ${className}`}>
      <input
        type="text"
        placeholder={placeholder}
        value={currentQuery}
        onChange={(e) => setCurrentQuery(e.target.value)}
        className={`w-full bg-white/5 border border-white/10 rounded-full pl-5 pr-12 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#06a3da] focus:bg-white/10 transition-all duration-300 ${inputClassName}`}
      />
      <button
        type="submit"
        aria-label="Submit Search"
        className={`absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#06a3da] cursor-pointer transition-colors ${buttonClassName}`}
      >
        <SearchIcon className="w-5 h-5" />
      </button>
    </form>
  );
};

export default SearchBar;
