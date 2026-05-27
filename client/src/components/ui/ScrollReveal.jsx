import React from 'react';
import { motion } from 'framer-motion';
const ScrollReveal = ({ children, className = '', delay = 0, direction = 'up', startScale = 1 }) => {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 }
  };
  return (
    <motion.div
      initial={{ opacity: 0, scale: startScale, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
export default ScrollReveal;
