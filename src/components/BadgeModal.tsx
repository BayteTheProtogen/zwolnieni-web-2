import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Badge } from '../data/badges';
import { playBadgeSound } from '../utils/sound';

interface BadgeModalProps {
  badge: Badge;
  onClose: () => void;
}

export function BadgeModal({ badge, onClose }: BadgeModalProps) {
  const Icon = badge.icon;
  
  useEffect(() => {
    playBadgeSound();
  }, [badge]);

  return (
    <motion.div 
      className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4" 
      initial={{opacity:0}} 
      animate={{opacity:1}} 
      exit={{opacity:0}}
    >
      <motion.div 
        className="bg-white dark:bg-stone-800 rounded-3xl p-8 max-w-sm w-full flex flex-col items-center text-center shadow-2xl transition-colors duration-300" 
        initial={{scale:0.8, y:50}} 
        animate={{scale:1, y:0}} 
        exit={{scale:0.8, y:50}}
      >
        <h2 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-6">Nowa Odznaka!</h2>
        <div className={`p-6 rounded-full mb-6 ${badge.color}`}>
          <Icon className="w-16 h-16" />
        </div>
        <h3 className="text-3xl font-bold text-stone-800 dark:text-stone-100 mb-2">{badge.name}</h3>
        <p className="text-lg text-stone-600 dark:text-stone-300 mb-8">{badge.description}</p>
        <button 
          onClick={onClose} 
          className="w-full py-4 rounded-2xl bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-xl font-bold shadow-sm transition-transform active:scale-95"
        >
          Super!
        </button>
      </motion.div>
    </motion.div>
  );
}
