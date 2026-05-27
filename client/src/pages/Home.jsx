import React from 'react';
import Hero from '../components/sections/Hero';
import Stats from '../components/sections/Stats';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import ContactForm from '../components/sections/ContactForm';
const Home = () => {
  return (
    <>
      <div className="ambient-glow-1"></div>
      <div className="ambient-glow-2"></div>
      <div className="ambient-glow-3"></div>
      <div className="relative">
        <Hero />
        <Stats />
      </div>
      <About />
      <WhyChooseUs />
      <Services />
      <ContactForm />
    </>
  );
};
export default Home;
