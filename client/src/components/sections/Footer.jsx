import React, { useState } from 'react';
import AnimatedUnderline from '../ui/AnimatedUnderline';
import Toast from '../ui/Toast';
import logo from '../../assets/images/logo.png';
import locationIcon from '../../assets/icons/location-pin.svg';
import emailIcon from '../../assets/icons/open-message.svg';
import phoneIcon from '../../assets/icons/contact.svg';
import twitterIcon from '../../assets/icons/twitter.svg';
import linkedinIcon from '../../assets/icons/linkedin.svg';
import youtubeIcon from '../../assets/icons/youtube.svg';
import rightArrowIcon from '../../assets/icons/right-arrow.svg';
import ScrollReveal from '../ui/ScrollReveal';
const Footer = () => {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000';
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSignup = async (event) => {
    event.preventDefault();
    setStatus('');
    setError('');

    if (!email) {
      setError('Please enter your email address.');
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Signup failed.');
      }

      setStatus('Thanks! You are signed up.');
      setEmail('');
    } catch (err) {
      setError(err.message || 'Subscription failed.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <footer className="w-full bg-[#091e3e] text-white relative overflow-hidden">
      <ScrollReveal delay={0.1} className="max-w-7xl mx-auto flex flex-col md:flex-row relative z-20">
        <div className="relative p-8 md:p-10 lg:p-12 md:w-1/3 flex flex-col justify-center">
          <div className="absolute inset-x-0 top-0 -bottom-96 bg-[#06a3da] -z-10"></div>
          <div className="flex items-center gap-4 mb-6">
            <img src={logo} alt="Nexora Logo" className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain shrink-0" />
            <h2 className="text-xl md:text-2xl font-black tracking-wide text-white whitespace-nowrap">Nexora IT Solutions</h2>
          </div>
          <p className="text-white/90 text-sm leading-relaxed mb-8 text-justify">
            Nexora IT Solutions is a cutting-edge IT and digital transformation company dedicated to empowering organizations with smart, scalable, and secure technology solutions.
          </p>
          <form onSubmit={handleSignup} className="flex w-full items-center gap-0 rounded-none overflow-hidden border border-white/20 shadow-sm">
            <input 
              type="email" 
              placeholder="Your Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 min-w-0 bg-white px-3 h-12 text-[#4f4f4f] placeholder-slate-400 outline-none rounded-none border-none"
            />
            <button 
              type="submit" 
              disabled={submitting}
              className="h-12 bg-[#091e3e] disabled:opacity-60 text-white px-6 font-medium hover:bg-[#071630] transition-colors rounded-none whitespace-nowrap cursor-pointer"
            >
              {submitting ? 'Signing Up...' : 'Sign Up'}
            </button>
          </form>
          {status && <Toast type="success" message={status} className="mt-3" />}
          {error && <Toast type="error" message={error} className="mt-3" />}
        </div>
        <div className="p-8 md:p-12 md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 relative pb-4">
              Get in Touch
              <div className="absolute bottom-0 left-0">
                <AnimatedUnderline lineClass="left-0 w-16" />
              </div>
            </h3>
            <ul className="space-y-4 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <img src={locationIcon} alt="Location" className="w-5 h-5 shrink-0 icon-blue-filter" />
                <span>Saudi Arabia, Riyadh</span>
              </li>
              <li className="flex items-start gap-3">
                <img src={emailIcon} alt="Email" className="w-5 h-5 shrink-0 icon-blue-filter" />
                <span>info@nexorais.com</span>
              </li>
              <li className="flex items-start gap-3">
                <img src={phoneIcon} alt="Phone" className="w-5 h-5 shrink-0 icon-blue-filter" />
                <span>+966 561716569</span>
              </li>
            </ul>
            <div className="flex gap-2 mt-6">
              <a href="#" className="w-8 h-8 bg-[#06a3da] flex items-center justify-center hover:bg-[#0592c5] transition-colors">
                <img src={twitterIcon} alt="Twitter" className="w-4 h-4 icon-white-filter" />
              </a>
              <a href="#" className="w-8 h-8 bg-[#06a3da] flex items-center justify-center hover:bg-[#0592c5] transition-colors">
                <img src={linkedinIcon} alt="LinkedIn" className="w-4 h-4 icon-white-filter" />
              </a>
              <a href="#" className="w-8 h-8 bg-[#06a3da] flex items-center justify-center hover:bg-[#0592c5] transition-colors">
                <img src={youtubeIcon} alt="YouTube" className="w-4 h-4 icon-white-filter" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 relative pb-4">
              Quick Links
              <div className="absolute bottom-0 left-0">
                <AnimatedUnderline lineClass="left-0 w-16" />
              </div>
            </h3>
            <ul className="space-y-3 text-sm text-white/80">
              {['Home', 'About Us', 'Our Services', 'Pricing', 'Free Quote', 'Contact Us'].map((link, i) => (
                <li key={i}>
                  <a href="#" className="flex items-center gap-2 hover:text-[#06a3da] transition-colors">
                    <img src={rightArrowIcon} alt="" className="w-3 h-3 icon-blue-filter" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 relative pb-4">
              Popular Links
              <div className="absolute bottom-0 left-0">
                <AnimatedUnderline lineClass="left-0 w-16" />
              </div>
            </h3>
            <ul className="space-y-3 text-sm text-white/80">
              {['Features', 'Pricing', 'Free Quote'].map((link, i) => (
                <li key={i}>
                  <a href="#" className="flex items-center gap-2 hover:text-[#06a3da] transition-colors">
                    <img src={rightArrowIcon} alt="" className="w-3 h-3 icon-blue-filter" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ScrollReveal>
      <div className="bg-[#071630] border-t border-[#091e3e] py-6 px-4 md:px-8 relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center text-sm text-white/70">
          <p>© 2025 Nexora IT Solutions. All Rights Reserved.</p>
        </div>
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="absolute right-4 md:right-8 top-0 -translate-y-1/2 w-10 h-10 bg-[#06a3da] hover:bg-[#0592c5] flex items-center justify-center transition-colors cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </footer>
  );
};
export default Footer;
