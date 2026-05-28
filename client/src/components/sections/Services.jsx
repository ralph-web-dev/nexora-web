import React from 'react';
import AnimatedUnderline from '../ui/AnimatedUnderline';
import erpIcon from '../../assets/icons/erp.svg';
import dataAnalyticsIcon from '../../assets/icons/data-analytics.svg';
import codeIcon from '../../assets/icons/code.svg';
import appDevIcon from '../../assets/icons/software-development.svg';
import aiIcon from '../../assets/icons/ai-assistant.svg';
import ScrollReveal from '../ui/ScrollReveal';
const Services = () => {
  const services = [
    {
      title: 'ERP Solutions',
      description: 'End-to-end ERP implementation, integration, and support to streamline your operations and boost efficiency.',
      icon: erpIcon
    },
    {
      title: 'Data Analytics',
      description: 'Turn raw data into actionable insights with interactive dashboards and predictive analytics for better decision-making.',
      icon: dataAnalyticsIcon
    },
    {
      title: 'Web Development',
      description: 'Custom, responsive, and high-performance websites built to showcase your brand and engage your audience.',
      icon: codeIcon
    },
    {
      title: 'Apps Development',
      description: 'Scalable mobile and web applications designed to deliver seamless user experiences and solve real business problems.',
      icon: appDevIcon
    },
    {
      title: 'AI Solutions',
      description: 'Leverage machine learning and automation to enhance productivity, reduce costs, and stay ahead in the digital age.',
      icon: aiIcon
    }
  ];
  return (
    <section id="services" className="w-full bg-white text-slate-800 py-16 md:py-32 select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        <ScrollReveal delay={0.1} className="text-center mb-16 md:mb-24">
          <span className="text-[#06a3da] font-extrabold uppercase tracking-widest text-base md:text-lg mb-3 block">
            Our Services
          </span>
          <h2 className="text-[#091e3e] text-3xl md:text-4xl lg:text-[40px] font-black leading-tight">
            Professional IT Solutions for <br className="hidden sm:block" />
            <AnimatedUnderline lineClass="left-1/2 -translate-x-1/2 w-32 md:w-48">Your Successful Business</AnimatedUnderline>
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <ScrollReveal key={idx} delay={0.15 + (idx * 0.1)} direction="up" startScale={0.95} className="relative bg-[#dcefff] p-10 pb-12 text-center flex flex-col items-center justify-center rounded-none shadow-sm hover:-translate-y-2 transition-transform duration-300 group">
              <img src={service.icon} alt={service.title} className="w-14 h-14 object-contain mb-6 icon-dark-blue-filter" />
              <h3 className="text-[#091e3e] text-lg font-bold mb-4">{service.title}</h3>
              <p className="text-[#4f4f4f] text-sm leading-relaxed">{service.description}</p>
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-16 h-10 bg-[#06a3da] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 cursor-pointer shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </ScrollReveal>
          ))}
          <ScrollReveal delay={0.65} direction="up" startScale={0.95} className="bg-[#06a3da] p-10 text-center flex flex-col items-center justify-center rounded-none shadow-md hover:-translate-y-2 transition-transform duration-300 text-white">
            <h3 className="text-xl font-bold mb-4">Call Us For Quote</h3>
            <p className="text-white/90 text-sm leading-relaxed mb-8">
              We'd love to hear about your project! Contact us today and get a personalized quote that fits your goals and budget.
            </p>
            <a
              href="tel:+966561716569"
              className="text-white text-xl md:text-2xl font-black tracking-wide hover:text-white/80 transition-colors duration-300"
            >
              +966 561716569
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
export default Services;
