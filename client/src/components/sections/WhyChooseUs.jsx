import React from 'react';
import AnimatedUnderline from '../ui/AnimatedUnderline';
import cubeIcon from '../../assets/icons/3d.svg';
import medalIcon from '../../assets/icons/medal.svg';
import teamIcon from '../../assets/icons/team-management.svg';
import contactIcon from '../../assets/icons/contact.svg';
import teamImg from '../../assets/images/team.jpg';
import ScrollReveal from '../ui/ScrollReveal';
const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="w-full bg-white text-slate-800 py-16 md:py-32 select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <ScrollReveal delay={0.1} className="text-center mb-16 md:mb-24">
          <span className="text-[#06a3da] font-extrabold uppercase tracking-widest text-base md:text-lg mb-3 block">
            Why Choose Us
          </span>
          <h2 className="text-[#091e3e] text-3xl md:text-4xl lg:text-[40px] font-black leading-tight">
            We Are Here to Grow Your <br className="hidden sm:block" />
            <AnimatedUnderline lineClass="left-1/2 -translate-x-1/2 w-48 md:w-64">Business Exponentially</AnimatedUnderline>
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 items-stretch">
          <div className="lg:col-span-1 flex flex-col justify-between gap-12">
            <ScrollReveal delay={0.2} className="flex flex-col items-start text-left group hover:-translate-y-3 transition-transform duration-500 ease-out cursor-default">
              <div className="bg-[#06a3da] w-12 h-12 flex items-center justify-center rounded-none mb-4 group-hover:bg-[#0592c5] transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-3">
                <img src={cubeIcon} alt="Best in Industry" className="w-6 h-6 object-contain icon-white-filter" />
              </div>
              <h3 className="text-[#091e3e] text-[17px] font-bold mb-2">Best in Industry</h3>
              <p className="text-[#4f4f4f] text-sm leading-relaxed">
                We deliver world-class solutions powered by proven methodologies and cutting-edge technology to help your business stay ahead of the competition.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3} className="flex flex-col items-start text-left group hover:-translate-y-3 transition-transform duration-500 ease-out cursor-default">
              <div className="bg-[#06a3da] w-12 h-12 flex items-center justify-center rounded-none mb-4 group-hover:bg-[#0592c5] transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-3">
                <img src={medalIcon} alt="Digital Transformation" className="w-6 h-6 object-contain icon-white-filter" />
              </div>
              <h3 className="text-[#091e3e] text-[17px] font-bold mb-2">Digital Transformation</h3>
              <p className="text-[#4f4f4f] text-sm leading-relaxed">
                We transform traditional operations into agile, data-driven, and automated ecosystems that enable innovation and measurable business outcomes.
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.3} direction="none" startScale={0.85} className="lg:col-span-2 w-full h-full">
            <img 
              src={teamImg} 
              alt="Team" 
              className="w-full h-full min-h-[400px] object-cover rounded-none shadow-xl border border-slate-100"
            />
          </ScrollReveal>
          <div className="lg:col-span-1 flex flex-col justify-between gap-12">
            <ScrollReveal delay={0.4} className="flex flex-col items-start text-left group hover:-translate-y-3 transition-transform duration-500 ease-out cursor-default">
              <div className="bg-[#06a3da] w-12 h-12 flex items-center justify-center rounded-none mb-4 group-hover:bg-[#0592c5] transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-3">
                <img src={teamIcon} alt="Professional Staff" className="w-6 h-6 object-contain icon-white-filter" />
              </div>
              <h3 className="text-[#091e3e] text-[17px] font-bold mb-2">Professional Staff</h3>
              <p className="text-[#4f4f4f] text-sm leading-relaxed">
                Our team of certified consultants and industry experts work hand-in-hand with you to design and implement solutions tailored to your unique needs.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.5} className="flex flex-col items-start text-left group hover:-translate-y-3 transition-transform duration-500 ease-out cursor-default">
              <div className="bg-[#06a3da] w-12 h-12 flex items-center justify-center rounded-none mb-4 group-hover:bg-[#0592c5] transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-3">
                <img src={contactIcon} alt="24/7 Support" className="w-6 h-6 object-contain icon-white-filter" />
              </div>
              <h3 className="text-[#091e3e] text-[17px] font-bold mb-2">24/7 Support</h3>
              <p className="text-[#4f4f4f] text-sm leading-relaxed">
                We provide round-the-clock support to ensure your systems run smoothly, minimizing downtime and maximizing productivity.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhyChooseUs;
