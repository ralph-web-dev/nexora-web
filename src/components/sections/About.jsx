import React from 'react';
import Button from '../ui/Button';
import businessImg from '../../assets/images/business.jpg';
import checkIcon from '../../assets/icons/check.svg';
import contactIcon from '../../assets/icons/contact.svg';
import AnimatedUnderline from '../ui/AnimatedUnderline';
import ScrollReveal from '../ui/ScrollReveal';
const About = () => {
  return (
    <section id="about" className="w-full bg-white text-slate-800 pt-16 md:pt-24 pb-20 md:pb-28 select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <ScrollReveal delay={0.1}>
              <span className="text-[#06a3da] font-extrabold uppercase tracking-widest text-base md:text-lg mb-3 block">
                About Us
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <h2 className="text-[#091e3e] text-3xl md:text-4xl lg:text-[40px] font-black leading-tight mb-6">
                The Best IT Solution With 17 Years of{' '}
                <AnimatedUnderline>Experience</AnimatedUnderline>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-[#4f4f4f] text-sm md:text-base leading-relaxed mb-6 font-medium">
                Nexora IT Solutions is a cutting-edge IT and digital transformation company dedicated to empowering organizations with smart, scalable, and secure technology solutions.
              </p>
              <p className="text-[#4f4f4f] text-sm md:text-base leading-relaxed mb-6">
                We specialize in delivering tailored services that drive efficiency, intelligence, and innovation across industries.
              </p>
              <p className="text-[#4f4f4f] text-sm md:text-base leading-relaxed mb-8">
                From performance dashboards to enterprise-grade automation and ERP systems, we are your trusted partner in building tomorrow's digital infrastructure—today.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.4} direction="up" startScale={0.95} className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 mb-10 w-full">
              {[
                'Digital Transformation',
                '24/7 Support',
                'Professional Staff',
                'Fair Prices'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-slate-700 font-bold text-sm md:text-[15px]">
                  <img src={checkIcon} alt="" className="w-5 h-5 shrink-0 object-contain icon-blue-filter" />
                  <span>{item}</span>
                </div>
              ))}
            </ScrollReveal>
            <ScrollReveal delay={0.5} className="flex flex-col items-start gap-8 pt-4 w-full">
              <div className="flex items-center gap-4 group/phone cursor-default">
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
              </div>
              <Button
                text="Request A Quote"
                variant="solid"
                href="#contact"
                className="w-full sm:w-auto shadow-[#06a3da]/10 hover:shadow-[#06a3da]/20"
              />
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.3} direction="none" startScale={0.85} className="lg:col-span-5 relative group w-full flex justify-center">
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#06a3da]/10 to-transparent rounded-2xl -z-10 blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-[#06a3da]/5 border border-[#06a3da]/10 rounded-2xl -translate-x-3 translate-y-3 group-hover:-translate-x-1.5 group-hover:translate-y-1.5 transition-transform duration-500 -z-10"></div>
            <img
              src={businessImg}
              alt="Nexora IT Solutions Business Meeting"
              className="w-full h-auto lg:h-[650px] object-cover rounded-none shadow-xl transition-all duration-500 group-hover:scale-[1.01] group-hover:shadow-2xl border border-slate-100"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
export default About;
