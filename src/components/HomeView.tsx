import React, { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence, useInView } from 'motion/react';
import { Flame, Star, ShieldCheck, Lock, Navigation } from 'lucide-react';
import { lessons } from '../data/lessons';
import { Mascot } from './Mascot';

interface HomeViewProps {
  key?: string;
  xp: number;
  streak: number;
  completedLessons: string[];
  onStartLesson: (lessonId: string) => void;
  justCompletedLesson?: boolean;
  onScrolled?: () => void;
  isDeveloperMode?: boolean;
}

export function HomeView({ xp, streak, completedLessons, onStartLesson, justCompletedLesson, onScrolled, isDeveloperMode }: HomeViewProps) {
  const targetLessonRef = useRef<HTMLDivElement>(null);
  const isTargetInView = useInView(targetLessonRef, { margin: "-150px" });
  const { scrollY } = useScroll();
  const [showFloatingMascot, setShowFloatingMascot] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setShowFloatingMascot(latest > 250);
  });

  const nextLessonIndex = lessons.findIndex((l, i) => !completedLessons.includes(l.id) && (i === 0 || completedLessons.includes(lessons[i - 1].id)));
  const targetLessonId = nextLessonIndex !== -1 ? lessons[nextLessonIndex].id : lessons[lessons.length - 1].id;

  React.useEffect(() => {
    if (justCompletedLesson && targetLessonRef.current) {
      setTimeout(() => {
        targetLessonRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        if (onScrolled) onScrolled();
      }, 500);
    }
  }, [justCompletedLesson, onScrolled]);

  let currentModule = '';

  return (
    <motion.div
      className="min-h-screen bg-stone-100 dark:bg-stone-900 flex flex-col items-center pb-24 relative transition-colors duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <AnimatePresence>
        {showFloatingMascot && (
          <motion.div
            initial={{ y: -150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -150, opacity: 0 }}
            className="fixed top-24 right-4 z-40 pointer-events-none"
          >
            <div className="scale-75 origin-top-right drop-shadow-xl">
              <Mascot mood="happy" layoutId="floating-mascot" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isTargetInView && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => targetLessonRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
            className="fixed bottom-24 right-4 w-14 h-14 bg-blue-500 text-white rounded-full shadow-lg flex items-center justify-center z-40 hover:bg-blue-600 transition-colors active:scale-95"
            aria-label="Przejdź do aktualnej lekcji"
          >
            <Navigation className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Top Bar */}
      <motion.div 
        className="w-full max-w-md bg-white dark:bg-stone-800 p-4 flex justify-between items-center shadow-sm sticky top-0 z-20 transition-colors duration-300"
        layoutId="top-bar"
      >
        <div className="flex items-center gap-2 text-orange-500 font-bold text-xl">
          <Flame className="w-6 h-6 fill-orange-500" />
          <span>{streak}</span>
        </div>
        <div className="flex items-center gap-2 text-blue-500 font-bold text-xl">
          <Star className="w-6 h-6 fill-blue-500" />
          <span>{xp}</span>
        </div>
      </motion.div>

      {/* Header */}
      <div className="w-full max-w-md p-6 flex flex-col items-center text-center mt-4">
        <Mascot mood="happy" className="mb-4" />
        <h1 className="text-3xl font-bold text-stone-800 dark:text-stone-100 mb-2">Cyfrowy Przewodnik</h1>
        <p className="text-stone-600 dark:text-stone-300 text-lg">Ucz się jak być bezpiecznym w internecie!</p>
      </div>

      {/* Path */}
      <div className="w-full max-w-md flex flex-col items-center gap-20 mt-8 relative pb-12">
        {/* Path Line */}
        <div className="absolute top-0 bottom-0 w-4 bg-stone-200 dark:bg-stone-800 z-0 rounded-full transition-colors duration-300" />
        
        {lessons.map((lesson, index) => {
          const isCompleted = completedLessons.includes(lesson.id);
          const isNext = !isCompleted && (index === 0 || completedLessons.includes(lessons[index - 1].id));
          const isLocked = !isCompleted && !isNext && !isDeveloperMode;

          const offset = index % 2 === 0 ? -40 : 40;

          const moduleNames: Record<string, string> = {
            'podstawy': 'Moduł 1: Podstawy Internetu',
            'hasla': 'Moduł 2: Bezpieczne Hasła',
            'bezpieczne_surfowanie': 'Moduł 3: Bezpieczne Surfowanie',
            'zagrozenia': 'Moduł 4: Zagrożenia i Oszustwa',
            'ochrona': 'Moduł 5: Ochrona Urządzeń i Kont'
          };

          const moduleHeader = lesson.moduleId !== currentModule ? (
            <div className="w-full text-center z-20 my-2">
              <h2 className="text-xl font-bold text-stone-700 dark:text-stone-200 bg-white dark:bg-stone-800 px-6 py-3 rounded-full shadow-md inline-block border-2 border-stone-200 dark:border-stone-700 transition-colors duration-300">
                {moduleNames[lesson.moduleId] || `Moduł: ${lesson.moduleId}`}
              </h2>
            </div>
          ) : null;
          currentModule = lesson.moduleId;

          return (
            <React.Fragment key={lesson.id}>
              {moduleHeader}
              <motion.div
                ref={lesson.id === targetLessonId ? targetLessonRef : null}
                className="relative flex flex-col items-center z-10"
                style={{ x: offset }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1, type: 'spring' }}
              >
                <button
                  onClick={() => !isLocked && onStartLesson(lesson.id)}
                  disabled={isLocked}
                  className={`w-24 h-24 rounded-full flex items-center justify-center shadow-lg border-b-8 transition-transform active:scale-95 active:border-b-0 active:translate-y-2 ${
                    isCompleted
                      ? 'bg-emerald-500 border-emerald-700 text-white'
                      : isNext
                      ? 'bg-blue-500 border-blue-700 text-white ring-4 ring-blue-300 dark:ring-blue-900/50 ring-offset-2 dark:ring-offset-stone-900 animate-pulse'
                      : 'bg-stone-300 dark:bg-stone-700 border-stone-400 dark:border-stone-800 text-stone-500 dark:text-stone-400 cursor-not-allowed'
                  }`}
                >
                  {isCompleted ? (
                    <ShieldCheck className="w-12 h-12" />
                  ) : isLocked ? (
                    <Lock className="w-10 h-10" />
                  ) : (
                    <Star className="w-12 h-12 fill-white" />
                  )}
                </button>
                
                {/* Tooltip/Label */}
                <div className="absolute top-full mt-4 bg-white dark:bg-stone-800 px-4 py-2 rounded-xl shadow-md border border-stone-200 dark:border-stone-700 whitespace-nowrap z-10 pointer-events-none transition-colors duration-300">
                  <p className="font-bold text-stone-800 dark:text-stone-100 text-lg">{lesson.title}</p>
                </div>
              </motion.div>
            </React.Fragment>
          );
        })}
      </div>
    </motion.div>
  );
}
