import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ContactForm from '../components/sections/ContactForm';
import heroBg from '../assets/images/hero.jpg';
import ScrollReveal from '../components/ui/ScrollReveal';
const QuotePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="w-full flex flex-col"
    >
      <div 
        className="relative w-full h-[350px] md:h-[450px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-[#091e3e]/45"></div>
        <ScrollReveal delay={0.1} direction="up" className="relative z-10 flex flex-col items-center text-white mt-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-display tracking-wide mb-4">Free Quote</h1>
          <div className="flex items-center gap-3 text-sm md:text-base font-medium">
            <Link to="/" className="hover:text-[#06a3da] transition-colors">Home</Link>
            <span className="w-1.5 h-1.5 rounded-full border border-white"></span>
            <span className="text-white/80">Free Quote</span>
          </div>
        </ScrollReveal>
      </div>
      <div className="w-full">
        <ContactForm />
      </div>
    </motion.div>
  );
};
export default QuotePage;
