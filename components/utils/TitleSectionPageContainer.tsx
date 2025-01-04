'use client';

import { motion } from 'framer-motion';

const animation = {
  hide: { y: -12, opacity: 0 },
  show: {
    y: 0,
    opacity: 1
  }
};

interface TitleSectionProps {
  title: string;
  color?: string; // Optional color prop
}

const TitleSectionPageContainer = ({ title, color }: TitleSectionProps) => {
  return (
    <motion.div
      initial={animation.hide}
      animate={animation.show}
      transition={{ delay: 0.5 }}
    >
      <h2
        style={{
          backgroundImage: color
            ? color
            : `linear-gradient(135deg, var(--colors-cyan) 0%, var(--colors-green) 100%)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
        className="font-bold font-montserrat text-6xl md:text-6xl tracking-tight mb-8 text-center"
      >
        {title}
      </h2>
    </motion.div>
  );
};

export default TitleSectionPageContainer;
