import React, { useState, useEffect } from 'react';
import logoImg from '../../assets/images/logo.png';
import {
  LocationPinIcon,
  PhoneIcon,
  MailIcon,
  TwitterIcon,
  LinkedinIcon,
  YoutubeIcon,
  SearchIcon,
  MenuIcon,
  CloseIcon
} from './Icons';
import { Link, useLocation } from 'react-router-dom';
import NavDropdown from '../ui/NavDropdown';
const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { 
      name: 'Pages', 
      href: '#', 
      dropdown: [
        { name: 'Pricing Plan', href: '/pricing' },
        { name: 'Our features', href: '/features' },
        { name: 'Free Quote', href: '/quote' }
      ]
    },
    { name: 'Contact', href: '/contact' },
  ];
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`);
      setSearchQuery('');
      setSearchOpen(false);
    }
  };
  return (
    <header className="w-full z-50">
      <div className="bg-[#091e3e] border-b border-white/5 text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 md:px-8 py-2.5 gap-2 text-xs font-medium">
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4 md:gap-6">
            <a
              href="https://maps.google.com/?q=Saudi+Arabia,+Riyadh"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-[#06a3da] transition-colors duration-300"
            >
              <LocationPinIcon className="w-3.5 h-3.5 text-white" />
              <span>Saudi Arabia, Riyadh</span>
            </a>
            <a
              href="tel:+966561716569"
              className="flex items-center gap-2 hover:text-[#06a3da] transition-colors duration-300"
            >
              <PhoneIcon className="w-3.5 h-3.5 text-white" />
              <span>+966 561716569</span>
            </a>
            <a
              href="mailto:info@nexorais.com"
              className="flex items-center gap-2 hover:text-[#06a3da] transition-colors duration-300"
            >
              <MailIcon className="w-3.5 h-3.5 text-white" />
              <span>info@nexorais.com</span>
            </a>
          </div>
          <div className="flex items-center gap-2.5">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center text-slate-300 hover:text-white hover:border-white hover:bg-white/10 hover:scale-105 transition-all duration-300"
            >
              <TwitterIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center text-slate-300 hover:text-white hover:border-white hover:bg-white/10 hover:scale-105 transition-all duration-300"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center text-slate-300 hover:text-white hover:border-white hover:bg-white/10 hover:scale-105 transition-all duration-300"
            >
              <YoutubeIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
      <nav
        className={`w-full transition-all duration-500 z-40 border-b border-white/15 ${
          isScrolled
            ? 'fixed top-0 left-0 bg-[#091e3e]/95 backdrop-blur-md shadow-lg'
            : 'absolute top-auto bg-transparent'
        }`}
      >
        <div className={`max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 transition-all duration-500 ${
          isScrolled ? 'h-16' : 'h-24'
        }`}>
          <Link to="/" className="flex items-center gap-3 group cursor-pointer">
            <img
              src={logoImg}
              alt="Nexora IT Solutions Logo"
              className="h-12 md:h-15 w-auto object-contain transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105"
            />
            <span className="text-2xl md:text-[28px] font-black font-display text-white tracking-wide transition-colors duration-300 group-hover:text-[#06a3da]">
              Nexora <span className="text-[#06a3da] group-hover:text-white transition-colors duration-300 font-light">IT Solutions</span>
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8 h-full">
            <ul className="flex items-center gap-8 h-full">
              {navLinks.map((link) => {
                const isActive = (link.href === '/' && location.pathname === '/') || 
                                 (link.href !== '/' && location.pathname === link.href);
                return (
                <li key={link.name} className="h-full relative group/navitem">
                  <Link
                    to={link.href}
                    className={`text-[15px] font-semibold tracking-wide h-full flex items-center gap-1 relative transition-colors duration-300 ${
                      isActive
                        ? 'text-[#06a3da]'
                        : 'text-white/95 group-hover/navitem:text-[#06a3da]'
                    }`}
                  >
                    {link.name}
                    {link.dropdown && (
                      <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover/navitem:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                    <span
                      className={`absolute bottom-0 left-0 h-[2.5px] bg-[#06a3da] transition-all duration-300 rounded-full ${
                        isActive ? 'w-full' : 'w-0 group-hover/navitem:w-full'
                      }`}
                    ></span>
                  </Link>
                  <NavDropdown items={link.dropdown} />
                </li>
              )})}
            </ul>
            <div className="relative flex items-center">
              <form
                onSubmit={handleSearchSubmit}
                className={`flex items-center transition-all duration-500 ease-out overflow-hidden ${
                  searchOpen ? 'w-48 opacity-100 mr-2' : 'w-0 opacity-0 pointer-events-none'
                }`}
              >
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-900/80 border border-slate-700/60 rounded-full px-4 py-1 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#06a3da]"
                />
              </form>
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="Search"
                className={`p-2 rounded-full cursor-pointer transition-all duration-300 ${
                  searchOpen
                    ? 'text-[#06a3da] bg-slate-900/65'
                    : 'text-white/90 hover:text-[#06a3da] hover:bg-white/5'
                }`}
              >
                <SearchIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => {
                setIsOpen(true);
                setSearchOpen(false);
              }}
              aria-label="Open Menu"
              className="p-2 text-white hover:text-[#06a3da] transition-colors duration-300"
            >
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-500 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div
          onClick={() => setIsOpen(false)}
          className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
        />
        <div
          className={`absolute top-0 right-0 h-full w-[290px] bg-[#091e3e] border-l border-white/5 p-6 flex flex-col shadow-2xl transition-transform duration-500 ease-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between pb-6 border-b border-slate-900 mb-6">
            <span className="text-lg font-black font-display text-white tracking-wide">
              NEXORA
            </span>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close Menu"
              className="p-1 text-slate-400 hover:text-white transition-colors duration-300"
            >
              <CloseIcon className="w-6 h-6" />
            </button>
          </div>
          <form onSubmit={handleSearchSubmit} className="mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-900/60 border border-slate-800 rounded-full pl-4 pr-10 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#06a3da]"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#06a3da]"
              >
                <SearchIcon className="w-4 h-4" />
              </button>
            </div>
          </form>
          <ul className="flex flex-col gap-5 mb-8">
            {navLinks.map((link) => {
              const isActive = (link.href === '/' && location.pathname === '/') || 
                               (link.href !== '/' && location.pathname === link.href);
              return (
              <li key={link.name} className="flex flex-col">
                <Link
                  to={link.href}
                  onClick={() => !link.dropdown && setIsOpen(false)}
                  className={`text-base font-semibold block py-1 border-b border-slate-900/10 flex items-center justify-between transition-colors duration-300 ${
                    isActive ? 'text-[#06a3da]' : 'text-slate-200 hover:text-[#06a3da]'
                  }`}
                >
                  {link.name}
                  {link.dropdown && (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                {link.dropdown && (
                  <div className="flex flex-col gap-3 mt-3 pl-4">
                    {link.dropdown.map(sublink => (
                      <Link
                        key={sublink.name}
                        to={sublink.href}
                        onClick={() => setIsOpen(false)}
                        className="text-sm font-medium text-slate-400 hover:text-[#06a3da] transition-colors"
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            )})}
          </ul>
          <div className="mt-auto pt-6 border-t border-slate-900/80 flex flex-col gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-2.5">
              <LocationPinIcon className="w-4 h-4 text-white" />
              <span>Saudi Arabia, Riyadh</span>
            </div>
            <a href="tel:+966561716569" className="flex items-center gap-2.5 hover:text-white transition-colors duration-300">
              <PhoneIcon className="w-4 h-4 text-white" />
              <span>+966 561716569</span>
            </a>
            <a href="mailto:info@nexorais.com" className="flex items-center gap-2.5 hover:text-white transition-colors duration-300">
              <MailIcon className="w-4 h-4 text-white" />
              <span>info@nexorais.com</span>
            </a>
            <div className="flex items-center gap-3 mt-2">
              <a
                href="https://twitter.com"
                className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-white transition-all duration-300"
              >
                <TwitterIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://linkedin.com"
                className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-white transition-all duration-300"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://youtube.com"
                className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-white transition-all duration-300"
              >
                <YoutubeIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
