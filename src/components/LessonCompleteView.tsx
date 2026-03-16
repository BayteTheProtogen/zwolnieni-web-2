import { motion } from 'motion/react';
import { Mascot } from './Mascot';
import { Star, Flame } from 'lucide-react';

interface LessonCompleteViewProps {
  xpEarned: number;
  newStreak: number;
  passed: boolean;
  onContinue: () => void;
}

export function LessonCompleteView({ xpEarned, newStreak, passed, onContinue }: LessonCompleteViewProps) {
  return (
    <motion.div 
      className={`min-h-screen ${passed ? 'bg-emerald-50 dark:bg-stone-950' : 'bg-red-50 dark:bg-stone-950'} flex flex-col items-center p-6 transition-colors duration-300`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ type: 'spring', bounce: 0.4, duration: 0.8 }}
    >
      <motion.div 
        className="w-full max-w-2xl mx-auto p-4 flex justify-center items-center gap-4 bg-transparent mb-12"
        layoutId="top-bar"
      />

      <Mascot mood={passed ? "celebrating" : "sad"} className="mb-12 scale-150" />
      
      <motion.h1 
        className={`text-4xl font-bold ${passed ? 'text-emerald-800 dark:text-emerald-400' : 'text-red-800 dark:text-red-400'} mb-8 text-center`}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {passed ? 'Lekcja Zakończona!' : 'Lekcja Niezaliczona'}
      </motion.h1>

      <div className="flex gap-6 mb-12">
        <motion.div 
          className="bg-white dark:bg-stone-900 p-6 rounded-3xl shadow-lg border-2 border-orange-200 dark:border-orange-900 flex flex-col items-center min-w-[140px] transition-colors duration-300"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, type: 'spring' }}
        >
          <Flame className="w-12 h-12 fill-orange-500 text-orange-500 mb-2" />
          <span className="text-3xl font-bold text-orange-600 dark:text-orange-400">{newStreak}</span>
          <span className="text-orange-800 dark:text-orange-300 font-medium">Dni z rzędu</span>
        </motion.div>

        <motion.div 
          className="bg-white dark:bg-stone-900 p-6 rounded-3xl shadow-lg border-2 border-blue-200 dark:border-blue-900 flex flex-col items-center min-w-[140px] transition-colors duration-300"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7, type: 'spring' }}
        >
          <Star className="w-12 h-12 fill-blue-500 text-blue-500 mb-2" />
          <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">+{xpEarned}</span>
          <span className="text-blue-800 dark:text-blue-300 font-medium">Zdobyte gwiazdki</span>
        </motion.div>
      </div>

      <motion.button
        onClick={onContinue}
        className={`w-full max-w-md py-4 rounded-2xl ${passed ? 'bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-700' : 'bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700'} text-white text-2xl font-bold shadow-lg`}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        whileTap={{ scale: 0.95 }}
      >
        Dalej
      </motion.button>
    </motion.div>
  );
}
