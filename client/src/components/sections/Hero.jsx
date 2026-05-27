import React, { useState, useEffect, useCallback } from 'react';
import heroBg from '../../assets/images/hero.jpg';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';
import Button from '../ui/Button';
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const slides = [
    {
      subtitle: 'Creative & Innovative',
      title: 'Creative & Innovative Digital Solutions',
      btn1Text: 'Free Quote',
      btn1Href: '#contact',
      btn2Text: 'Contact Us',
      btn2Href: '#contact',
      image: heroBg,
    },
    {
      subtitle: 'Modern & Robust',
      title: 'Tailored Enterprise IT Infrastructure',
      btn1Text: 'Our Services',
      btn1Href: '#services',
      btn2Text: 'Learn More',
      btn2Href: '#about',
      image: heroBg,
    },
    {
      subtitle: 'Expert & Reliable',
      title: 'Accelerating Your Digital Transformation',
      btn1Text: 'Get Started',
      btn1Href: '#contact',
      btn2Text: 'Read More',
      btn2Href: '#about',
      image: heroBg,
    },
  ];
  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [isAnimating, slides.length]);
  const handlePrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [isAnimating, slides.length]);
  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 800);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 7000);
    return () => clearInterval(timer);
  }, [handleNext]);
  return (
    <section
      id="home"
      className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-32 pb-44 overflow-hidden bg-slate-950"
    >
      <div className="absolute inset-0 z-0">
        {slides.map((slide, idx) => {
          const isActive = idx === currentSlide;
          return (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <div
                className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[7000ms] ease-out ${
                  isActive ? 'scale-105 rotate-0.5' : 'scale-100 rotate-0'
                }`}
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="absolute inset-0 bg-[#091e3e]/45" />
            </div>
          );
        })}
      </div>
      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 text-center text-white flex flex-col items-center">
        {slides.map((slide, idx) => {
          const isActive = idx === currentSlide;
          return (
            <div
              key={idx}
              className={`${
                isActive ? 'flex flex-col items-center' : 'hidden'
              }`}
            >
              <span
                className="text-[#06a3da] text-xs sm:text-sm md:text-base font-extrabold tracking-[0.25em] uppercase mb-4 transition-all duration-700 delay-200 transform translate-y-0 opacity-100"
                style={{
                  animation: isActive ? 'slide-down 0.8s ease-out forwards' : 'none',
                }}
              >
                {slide.subtitle}
              </span>
              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-display tracking-tight leading-[1.1] max-w-4xl mb-8 drop-shadow-md select-none text-slate-100"
                style={{
                  animation: isActive ? 'fade-up 0.9s ease-out forwards' : 'none',
                }}
              >
                {slide.title}
              </h1>
              <div
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                style={{
                  animation: isActive ? 'scale-in 1s ease-out forwards' : 'none',
                }}
              >
                <Button
                  href={slide.btn1Href}
                  variant="solid"
                  text={slide.btn1Text}
                />
                <Button
                  href={slide.btn2Href}
                  variant="outline"
                  text={slide.btn2Text}
                />
              </div>
            </div>
          );
        })}
      </div>
      <button
        onClick={handlePrev}
        aria-label="Previous Slide"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 text-white/50 hover:text-white hover:scale-105 p-2 md:p-3 border border-white/10 hover:border-white/30 rounded-full bg-slate-950/20 hover:bg-slate-950/45 backdrop-blur-sm transition-all duration-300 cursor-pointer focus:outline-none"
      >
        <ChevronLeftIcon className="w-5 h-5 md:w-6 h-6" />
      </button>
      <button
        onClick={handleNext}
        aria-label="Next Slide"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 text-white/50 hover:text-white hover:scale-105 p-2 md:p-3 border border-white/10 hover:border-white/30 rounded-full bg-slate-950/20 hover:bg-slate-950/45 backdrop-blur-sm transition-all duration-300 cursor-pointer focus:outline-none"
      >
        <ChevronRightIcon className="w-5 h-5 md:w-6 h-6" />
      </button>

      <style>{`
        @keyframes slide-down {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scale-in {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};
export default Hero;
