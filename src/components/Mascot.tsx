import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export type Mood = 'neutral' | 'happy' | 'sad' | 'thinking' | 'celebrating';

interface MascotProps {
  mood: Mood;
  className?: string;
  layoutId?: string;
}

const faces: Record<Mood, string> = {
  neutral: '(・_・)',
  happy: '(^_^)',
  sad: '(;_;)',
  thinking: '(O_O)?',
  celebrating: '\\(^o^)/',
};

export function Mascot({ mood, className = '', layoutId = 'mascot' }: MascotProps) {
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 150);
    }, Math.random() * 3000 + 2000); // Random blink every 2-5 seconds

    return () => clearInterval(blinkInterval);
  }, []);

  const getFace = () => {
    if (isBlinking && (mood === 'neutral' || mood === 'thinking')) {
      return '(-_-)';
    }
    return faces[mood];
  };

  const animations = {
    neutral: {
      y: [0, -5, 0],
      rotate: [0, 2, -2, 0],
      transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
    },
    happy: {
      y: [0, -15, 0],
      rotate: [0, 5, -5, 0],
      transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
    },
    sad: {
      y: [0, 5, 0],
      rotate: [0, -2, 2, 0],
      transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' }
    },
    thinking: {
      x: [0, 5, -5, 0],
      rotate: [0, 10, 10, 0],
      transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
    },
    celebrating: {
      y: [0, -20, 0],
      scale: [1, 1.1, 1],
      rotate: [0, 10, -10, 0],
      transition: { duration: 1, repeat: Infinity, ease: 'easeInOut' }
    }
  };

  return (
    <motion.div
      className={`text-5xl sm:text-6xl font-mono font-bold text-emerald-600 dark:text-emerald-400 drop-shadow-md select-none transition-colors duration-300 ${className}`}
      animate={animations[mood]}
      layoutId={layoutId}
    >
      {getFace()}
    </motion.div>
  );
}
