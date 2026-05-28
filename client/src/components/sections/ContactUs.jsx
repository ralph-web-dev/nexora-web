import React, { useState } from 'react';
import AnimatedUnderline from '../ui/AnimatedUnderline';
import ScrollReveal from '../ui/ScrollReveal';
import Toast from '../ui/Toast';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { PhoneIcon, MailIcon, LocationPinIcon } from './Icons';
const ContactUs = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('');
    setError('');

    if (!name || !email || !message) {
      setError('Please fill in name, email, and message.');
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to send inquiry.');
      }

      setStatus('Message sent successfully!');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (err) {
      setError(err.message || 'Submission failed.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="w-full bg-white text-slate-800 py-16 md:py-32 select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        <ScrollReveal delay={0.1} className="text-center mb-16 md:mb-20">
          <span className="text-[#06a3da] font-extrabold uppercase tracking-widest text-base md:text-lg mb-3 block">
            Contact Us
          </span>
          <h2 className="text-[#091e3e] text-3xl md:text-4xl lg:text-[40px] font-black leading-tight">
            If You Have Any Query, Feel <br className="hidden sm:block" />
            <AnimatedUnderline lineClass="left-1/2 -translate-x-1/2 w-48">Free To Contact Us</AnimatedUnderline>
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <ScrollReveal delay={0.2} direction="up" className="w-full">
            <Card 
              icon={<PhoneIcon className="w-6 h-6" />}
              title="Call to ask any question"
              value={<a href="tel:+966561716569" className="hover:text-[#0592c5] transition-colors">+966 561716569</a>}
              cardClass="flex items-center gap-4 p-0 shadow-none bg-white cursor-default"
              iconWrapperClass="bg-[#06a3da] p-4 text-white shrink-0 flex items-center justify-center w-[56px] h-[56px] rounded-none shadow-none"
              titleClass="text-sm text-slate-500 font-semibold block mb-0.5 tracking-normal normal-case"
              valueClass="text-[#06a3da] text-lg font-bold"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.3} direction="up" className="w-full">
            <Card 
              icon={<MailIcon className="w-6 h-6" />}
              title="Email to get free quote"
              value={<a href="mailto:info@nexorais.com" className="hover:text-[#0592c5] transition-colors">info@nexorais.com</a>}
              cardClass="flex items-center gap-4 p-0 shadow-none bg-white cursor-default"
              iconWrapperClass="bg-[#06a3da] p-4 text-white shrink-0 flex items-center justify-center w-[56px] h-[56px] rounded-none shadow-none"
              titleClass="text-sm text-slate-500 font-semibold block mb-0.5 tracking-normal normal-case"
              valueClass="text-[#06a3da] text-lg font-bold"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.4} direction="up" className="w-full">
            <Card 
              icon={<LocationPinIcon className="w-6 h-6" />}
              title="Visit our office"
              value="Saudi Arabia, Riyadh"
              cardClass="flex items-center gap-4 p-0 shadow-none bg-white cursor-default"
              iconWrapperClass="bg-[#06a3da] p-4 text-white shrink-0 flex items-center justify-center w-[56px] h-[56px] rounded-none shadow-none"
              titleClass="text-sm text-slate-500 font-semibold block mb-0.5 tracking-normal normal-case"
              valueClass="text-[#06a3da] text-lg font-bold"
            />
          </ScrollReveal>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <ScrollReveal delay={0.5} direction="right" className="bg-[#f8f9fa] p-8 md:p-10 rounded-sm">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 h-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white px-5 py-3.5 text-slate-700 text-[15px] outline-none border border-transparent focus:border-[#06a3da] transition-colors"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white px-5 py-3.5 text-slate-700 text-[15px] outline-none border border-transparent focus:border-[#06a3da] transition-colors"
                />
              </div>
              <input 
                type="text" 
                placeholder="Subject" 
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full bg-white px-5 py-3.5 text-slate-700 text-[15px] outline-none border border-transparent focus:border-[#06a3da] transition-colors"
              />
              <textarea 
                placeholder="Message" 
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-white px-5 py-3.5 text-slate-700 text-[15px] outline-none border border-transparent focus:border-[#06a3da] transition-colors resize-y grow"
              ></textarea>
              <Button 
                type="submit"
                text="Send Message" 
                variant="solid" 
                isLoading={submitting}
                className="w-full py-4 text-base shadow-md mt-2" 
              />
              {status && <Toast type="success" message={status} onClose={() => setStatus('')} className="mt-4 w-fit mx-auto px-6" />}
              {error && <Toast type="error" message={error} onClose={() => setError('')} className="mt-4 w-fit mx-auto px-6" />}
            </form>
          </ScrollReveal>
          <ScrollReveal delay={0.6} direction="left" className="h-[400px] lg:h-auto min-h-[400px] rounded-sm overflow-hidden bg-slate-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.518600052697!2d46.63750867514757!3d24.743403277995167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee321a6448375%3A0xcda8d752f9a2fc9a!2sKing%20Abdullah%20Financial%20District%20(KAFD)!5e0!3m2!1sen!2sus!4v1716900000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="KAFD Location Map"
              className="w-full h-full object-cover"
            ></iframe>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
export default ContactUs;
