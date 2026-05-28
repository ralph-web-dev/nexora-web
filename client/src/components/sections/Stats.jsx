import React from 'react';
import Card from '../ui/Card';
import chatBotIcon from '../../assets/icons/chat-bot.svg';
import infrastructureIcon from '../../assets/icons/infrastructure.svg';
import customerServiceIcon from '../../assets/icons/customer-service.svg';
import ScrollReveal from '../ui/ScrollReveal';
const Stats = () => {
  const statCards = [
    {
      title: 'Technology Stack',
      value: '20',
      icon: (
        <img
          src={chatBotIcon}
          alt="Technology Stack Icon"
          className="w-12 h-12 object-contain icon-white-filter"
        />
      ),
      cardClass: 'bg-[#06a3da] text-white rounded-none hover:bg-[#0592c5] shadow-none flex-1 justify-center',
      iconWrapperClass: 'text-white',
      titleClass: 'text-white/90 text-[15px] font-semibold tracking-wide mb-0.5',
      valueClass: 'text-4xl md:text-5xl font-black leading-none',
    },
    {
      title: 'Business Industry',
      value: '10',
      icon: (
        <img
          src={infrastructureIcon}
          alt="Business Industry Icon"
          className="w-12 h-12 object-contain icon-blue-filter"
        />
      ),
      cardClass: 'bg-[#eef9ff] text-[#06a3da] rounded-none hover:bg-[#e2f3fe] shadow-none flex-1 justify-center',
      iconWrapperClass: 'text-[#06a3da]',
      titleClass: 'text-[#06a3da]/90 text-[15px] font-semibold tracking-wide mb-0.5',
      valueClass: 'text-4xl md:text-5xl font-black text-[#06a3da] leading-none',
    },
    {
      title: 'Services',
      value: '6',
      icon: (
        <img
          src={customerServiceIcon}
          alt="Services Icon"
          className="w-12 h-12 object-contain icon-white-filter"
        />
      ),
      cardClass: 'bg-[#06a3da] text-white rounded-none hover:bg-[#0592c5] shadow-none flex-1 justify-center',
      iconWrapperClass: 'text-white',
      titleClass: 'text-white/90 text-[15px] font-semibold tracking-wide mb-0.5',
      valueClass: 'text-4xl md:text-5xl font-black leading-none',
    },
  ];
  return (
    <div className="md:absolute md:bottom-0 md:left-0 md:right-0 md:z-30 md:translate-y-1/2 relative bottom-auto left-auto right-auto translate-y-0 z-30 select-none md:mt-0">
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 shadow-2xl rounded-none overflow-hidden">
          {statCards.map((card, idx) => (
            <ScrollReveal key={idx} delay={0.2 + (idx * 0.15)} direction="up" startScale={0.9} className="w-full h-full flex">
              <Card {...card} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Stats;
