import React, { useState } from 'react';
import AnimatedUnderline from '../ui/AnimatedUnderline';
import Dropdown from '../ui/Dropdown';
import Toast from '../ui/Toast';
import Button from '../ui/Button';
import replyIcon from '../../assets/icons/reply.svg';
import contactIcon from '../../assets/icons/contact.svg';
import ScrollReveal from '../ui/ScrollReveal';
const ContactForm = () => {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000';
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('');
    setError('');

    if (!name || !email || !message) {
      setError('Please provide name, email, and a message.');
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/inquiry`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          service,
          subject: service,
          message,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to send inquiry.');
      }

      setStatus('Inquiry sent successfully!');
      setName('');
      setEmail('');
      setService('');
      setMessage('');
    } catch (err) {
      setError(err.message || 'Submission failed.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full bg-white text-slate-800 py-16 md:py-32 select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="flex flex-col items-start text-left">
            <ScrollReveal delay={0.1}>
              <span className="text-[#06a3da] font-extrabold uppercase tracking-widest text-base md:text-lg mb-3 block">
                REQUEST A QOUTE
              </span>
              <h2 className="text-[#091e3e] text-3xl md:text-4xl lg:text-[40px] font-black leading-tight mb-4 relative pb-4">
                Need A Free Quote? Please Feel Free to Contact Us
                <div className="absolute bottom-0 left-0">
                  <AnimatedUnderline lineClass="left-0 w-24 md:w-32" />
                </div>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2} direction="up" startScale={0.98} className="flex flex-col sm:flex-row gap-6 sm:gap-12 mb-8 mt-6">
              <div className="flex items-center gap-3">
                <img src={replyIcon} alt="Reply within 24 hours" className="w-5 h-5 icon-blue-filter" />
                <span className="text-[#4f4f4f] font-medium">Reply within 24 hours</span>
              </div>
              <div className="flex items-center gap-3">
                <img src={contactIcon} alt="24 hrs telephone support" className="w-5 h-5 icon-blue-filter" />
                <span className="text-[#4f4f4f] font-medium">24 hrs telephone support</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-[#4f4f4f] text-sm md:text-base leading-relaxed mb-10">
                We'd love to hear from you! Whether you're looking to modernize your business, explore AI and automation, or implement a powerful ERP solution — our team is here to support your digital transformation journey. Reach out to us today to discover how Nexora IT Solutions can help your organization grow smarter, faster, and more efficiently.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.4} className="flex items-center gap-4 group/phone cursor-default">
              <div className="bg-[#06a3da] w-12 h-12 flex items-center justify-center text-white rounded-none shadow-md shadow-[#06a3da]/10 group-hover/phone:bg-[#0592c5] transition-all duration-500 ease-out group-hover/phone:-translate-y-2 group-hover/phone:scale-110 group-hover/phone:rotate-3 shrink-0">
                <img src={contactIcon} alt="Contact" className="w-5 h-5 object-contain icon-white-filter" />
              </div>
              <div className="text-left">
                <span className="text-[13px] text-slate-500 font-bold block mb-0.5 uppercase tracking-wide">
                  Call to ask any question
                </span>
                <a
                  href="tel:+966561716569"
                  className="text-[#06a3da] text-xl font-black tracking-wide hover:text-[#0592c5] transition-colors duration-300"
                >
                  +966 561716569
                </a>
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.3} direction="none" startScale={0.9} className="bg-[#06a3da] p-8 md:p-12 w-full h-full flex flex-col justify-center shadow-none">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white p-4 text-[#4f4f4f] placeholder-slate-400 outline-none transition-shadow rounded-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white p-4 text-[#4f4f4f] placeholder-slate-400 outline-none transition-shadow rounded-none"
              />
              <Dropdown
                defaultText="Select A Service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                options={[
                  { value: 'ERP Solutions', label: 'ERP Solutions' },
                  { value: 'FAR-DFARS Compliance', label: 'FAR-DFARS Compliance' },
                  { value: 'Web Development', label: 'Web Development' },
                  { value: 'Mobile Development', label: 'Mobile Development' },
                  { value: 'AI Solutions', label: 'AI Solutions' },
                  { value: 'E-Learning', label: 'E-Learning' }
                ]}
              />
              <textarea
                placeholder="Message"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-white p-4 text-[#4f4f4f] placeholder-slate-400 outline-none transition-shadow resize-y rounded-none"
              ></textarea>
              <Button
                type="submit"
                text="Request a Quote"
                isLoading={submitting}
                className="w-full bg-[#091e3e] hover:bg-[#071630] text-white text-sm font-bold p-4 rounded-none cursor-pointer shadow-none tracking-widest"
              />
              {status && <Toast type="success" message={status} onClose={() => setStatus('')} className="mt-4 w-fit mx-auto px-6" />}
              {error && <Toast type="error" message={error} onClose={() => setError('')} className="mt-4 w-fit mx-auto px-6" />}
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
export default ContactForm;
