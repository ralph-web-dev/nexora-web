import React, { useState, useEffect } from 'react';
import logoImg from '../../assets/images/logo.png';
import {
  LocationPinIcon,
  PhoneIcon,
  MailIcon,
  TwitterIcon,
  LinkedinIcon,
  YoutubeIcon,
  MenuIcon,
  CloseIcon
} from './Icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import NavDropdown from '../ui/NavDropdown';
import Toast from '../ui/Toast';
import Button from '../ui/Button';
import SearchBar from '../ui/SearchBar';
const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobilePagesOpen, setMobilePagesOpen] = useState(false);
  useEffect(() => {
    if (!isOpen) {
      setMobilePagesOpen(false);
    }
  }, [isOpen]);
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
  const [errorStatus, setErrorStatus] = useState('');

  const handleSearchSubmit = (query) => {
    const q = (typeof query === 'string' ? query : searchQuery) || '';
    const cleanQuery = q.toLowerCase().trim();
    if (!cleanQuery) return;

    let targetUrl = '';
    
    if (cleanQuery.includes('erp')) {
      targetUrl = '/services';
    } else if (cleanQuery.includes('data') || cleanQuery.includes('analyt') || cleanQuery.includes('dashboard')) {
      targetUrl = '/services';
    } else if (cleanQuery.includes('web') || cleanQuery.includes('site') || cleanQuery.includes('code') || cleanQuery.includes('dev')) {
      targetUrl = '/services';
    } else if (cleanQuery.includes('app') || cleanQuery.includes('mobile') || cleanQuery.includes('software')) {
      targetUrl = '/services';
    } else if (cleanQuery.includes('ai') || cleanQuery.includes('machine') || cleanQuery.includes('bot') || cleanQuery.includes('auto')) {
      targetUrl = '/services';
    } else if (cleanQuery.includes('serv')) {
      targetUrl = '/services';
    } else if (cleanQuery.includes('price') || cleanQuery.includes('pricing') || cleanQuery.includes('plan') || cleanQuery.includes('cost')) {
      targetUrl = '/pricing';
    } else if (cleanQuery.includes('feat') || cleanQuery.includes('why') || cleanQuery.includes('choose')) {
      targetUrl = '/features';
    } else if (cleanQuery.includes('quote') || cleanQuery.includes('free') || cleanQuery.includes('estim')) {
      targetUrl = '/quote';
    } else if (cleanQuery.includes('about') || cleanQuery.includes('team') || cleanQuery.includes('mission') || cleanQuery.includes('vision')) {
      targetUrl = '/about';
    } else if (cleanQuery.includes('cont') || cleanQuery.includes('phone') || cleanQuery.includes('mail') || cleanQuery.includes('support') || cleanQuery.includes('call')) {
      targetUrl = '/contact';
    } else if (cleanQuery.includes('home') || cleanQuery.includes('main') || cleanQuery.includes('nexora')) {
      targetUrl = '/';
    }

    if (targetUrl) {
      navigate(targetUrl);
      setSearchQuery('');
      setSearchOpen(false);
      setIsOpen(false);
      setErrorStatus('');
    } else {
      setErrorStatus(`No matching page found for "${q}". Try "ERP", "Web", "Pricing", or "Quote".`);
    }
  };
  return (
    <header className="w-full z-50">
      <div className="bg-[#091e3e] border-b border-white/5 text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-6 md:px-12 lg:px-16 xl:px-20 py-2.5 gap-2 text-xs font-medium">
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
              href="https://x.com/nexorais"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center text-slate-300 hover:text-white hover:border-white hover:bg-white/10 hover:scale-105 transition-all duration-300"
            >
              <TwitterIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.linkedin.com/in/nexora-it-solutions-08426538a/?_l=en_US"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center text-slate-300 hover:text-white hover:border-white hover:bg-white/10 hover:scale-105 transition-all duration-300"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.youtube.com/@NexoraITSolutions"
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
        <div className={`max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 lg:px-16 xl:px-20 transition-all duration-500 ${
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
            <SearchBar
              variant="collapsible"
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              searchOpen={searchOpen}
              setSearchOpen={setSearchOpen}
              onSearch={handleSearchSubmit}
            />
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
        className={`fixed inset-0 z-50 md:hidden flex flex-col bg-[#040d1a]/90 transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="w-full border-b border-white/5 bg-transparent shrink-0">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-4 h-24">
            <Link to="/" className="flex items-center gap-2 group cursor-pointer" onClick={() => setIsOpen(false)}>
              <img
                src={logoImg}
                alt="Nexora IT Solutions Logo"
                className="h-10 w-auto object-contain"
              />
              <span className="text-lg sm:text-xl font-black font-display text-white tracking-wide">
                Nexora <span className="text-[#06a3da] font-light">IT Solutions</span>
              </span>
            </Link>
            <div className="flex items-center gap-3.5">
              <Button
                href="/quote"
                onClick={() => setIsOpen(false)}
                variant="outline"
                className="!px-4 !py-2 !text-[10px] sm:!text-xs border-white text-white rounded-none transition-all duration-300 uppercase tracking-widest shrink-0"
              >
                Free Quote
              </Button>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close Menu"
                className="p-1.5 text-slate-400 hover:text-white hover:scale-110 transition-all duration-300"
              >
                <CloseIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center overflow-y-auto px-6 py-8">
          <ul className="flex flex-col items-center justify-center gap-6 sm:gap-7 w-full text-center">
            {navLinks.map((link) => {
              const isActive = (link.href === '/' && location.pathname === '/') || 
                               (link.href !== '/' && location.pathname === link.href);
              const isDropdownActive = link.dropdown && link.dropdown.some(sub => location.pathname === sub.href);
              const highlight = isActive || isDropdownActive;
              return (
                <li key={link.name} className="w-full flex flex-col items-center">
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() => setMobilePagesOpen(!mobilePagesOpen)}
                        className={`text-2xl sm:text-3xl font-black font-display tracking-wide flex items-center justify-center gap-2 cursor-pointer transition-colors duration-300 ${
                          highlight ? 'text-[#06a3da]' : 'text-white hover:text-[#06a3da]'
                        }`}
                      >
                        {link.name}
                        <svg className={`w-5 h-5 transition-transform duration-300 ${mobilePagesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {highlight && !mobilePagesOpen && (
                        <div className="h-[3px] bg-[#06a3da] w-12 mt-1.5 rounded-full" />
                      )}
                      <div className={`flex flex-col gap-3.5 overflow-hidden transition-all duration-300 ease-in-out ${mobilePagesOpen ? 'max-h-60 mt-4 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                        {link.dropdown.map(sublink => {
                          const isSubActive = location.pathname === sublink.href;
                          return (
                            <Link
                              key={sublink.name}
                              to={sublink.href}
                              onClick={() => setIsOpen(false)}
                              className={`text-lg sm:text-xl font-bold transition-colors duration-300 ${
                                isSubActive ? 'text-[#06a3da]' : 'text-slate-400 hover:text-white'
                              }`}
                            >
                              {sublink.name}
                            </Link>
                          );
                        })}
                      </div>
                    </>
                  ) : (
                    <div className="flex flex-col items-center relative group py-1">
                      <Link
                        to={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`text-2xl sm:text-3xl font-black font-display tracking-wide transition-colors duration-300 ${
                          highlight ? 'text-[#06a3da]' : 'text-white hover:text-[#06a3da]'
                        }`}
                      >
                        {link.name}
                      </Link>
                      {highlight && (
                        <div className="h-[3px] bg-[#06a3da] w-12 mt-1.5 rounded-full" />
                      )}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
          <SearchBar
            variant="static"
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onSearch={handleSearchSubmit}
            className="mt-10"
          />
        </div>
        <div className="mt-auto w-full max-w-7xl mx-auto border-t border-white/5 pt-6 pb-6 px-4 flex flex-col items-center gap-4 text-xs text-slate-400 shrink-0 bg-transparent">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2.5">
            <span className="flex items-center gap-2">
              <LocationPinIcon className="w-3.5 h-3.5 text-[#06a3da]" />
              Saudi Arabia, Riyadh
            </span>
            <a href="tel:+966561716569" className="flex items-center gap-2 hover:text-white transition-colors">
              <PhoneIcon className="w-3.5 h-3.5 text-[#06a3da]" />
              +966 561716569
            </a>
            <a href="mailto:info@nexorais.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <MailIcon className="w-3.5 h-3.5 text-[#06a3da]" />
              info@nexorais.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://x.com/nexorais"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#06a3da] hover:border-[#06a3da] hover:bg-white/10 transition-all duration-300"
            >
              <TwitterIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.linkedin.com/in/nexora-it-solutions-08426538a/?_l=en_US"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#06a3da] hover:border-[#06a3da] hover:bg-white/10 transition-all duration-300"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.youtube.com/@NexoraITSolutions"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#06a3da] hover:border-[#06a3da] hover:bg-white/10 transition-all duration-300"
            >
              <YoutubeIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
      {errorStatus && (
        <div className="fixed top-28 left-1/2 -translate-x-1/2 z-[9999] w-[90%] max-w-lg px-4 pointer-events-auto">
          <Toast
            title="Search Notice"
            message={errorStatus}
            type="warning"
            onClose={() => setErrorStatus('')}
          />
        </div>
      )}
    </header>
  );
};
export default Navbar;
