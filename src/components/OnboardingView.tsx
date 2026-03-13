import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mascot } from './Mascot';
import { Moon, Sun, ArrowRight, Check } from 'lucide-react';

interface OnboardingViewProps {
  onComplete: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export function OnboardingView({ onComplete, isDarkMode, toggleDarkMode }: OnboardingViewProps) {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: "Cześć! Jestem Twoim przewodnikiem!",
      content: "Witaj w aplikacji, która pomoże Ci bezpiecznie poruszać się po cyfrowym świecie. Będę Ci towarzyszyć na każdym kroku!",
      mascotMood: 'happy' as const,
    },
    {
      title: "Jak to działa?",
      content: "Czekają na Ciebie krótkie lekcje, w których dowiesz się, jak chronić swoje dane, rozpoznawać oszustwa i dbać o prywatność w sieci.",
      mascotMood: 'thinking' as const,
    },
    {
      title: "Zdobywaj wiedzę i punkty!",
      content: "Za każdą ukończoną lekcję otrzymasz punkty XP. Utrzymuj codzienną aktywność (streak), aby zdobywać specjalne odznaki!",
      mascotMood: 'celebrating' as const,
    },
    {
      title: "Wybierz swój motyw",
      content: "Wolisz jasny czy ciemny wygląd aplikacji? Możesz to zmienić w dowolnej chwili w ustawieniach profilu.",
      mascotMood: 'neutral' as const,
      showThemeToggle: true,
    }
  ];

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };

  const currentStep = steps[step];

  return (
    <motion.div 
      className="fixed inset-0 bg-stone-100 dark:bg-stone-900 z-[200] flex flex-col items-center justify-center p-6 transition-colors duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-md flex flex-col items-center text-center"
        >
          <div className="h-48 flex items-center justify-center mb-8">
            <Mascot mood={currentStep.mascotMood} layoutId="onboarding-mascot" />
          </div>
          
          <h1 className="text-3xl font-bold text-stone-800 dark:text-stone-100 mb-4">
            {currentStep.title}
          </h1>
          
          <p className="text-xl text-stone-600 dark:text-stone-300 mb-12 leading-relaxed">
            {currentStep.content}
          </p>

          {currentStep.showThemeToggle && (
            <div className="flex gap-4 mb-12">
              <button
                onClick={() => !isDarkMode && toggleDarkMode()}
                className={`flex flex-col items-center gap-3 p-6 rounded-2xl border-2 transition-all ${
                  !isDarkMode 
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400' 
                    : 'border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-500 dark:text-stone-400'
                }`}
              >
                <Sun className="w-10 h-10" />
                <span className="font-medium">Jasny</span>
              </button>
              <button
                onClick={() => isDarkMode && toggleDarkMode()}
                className={`flex flex-col items-center gap-3 p-6 rounded-2xl border-2 transition-all ${
                  isDarkMode 
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400' 
                    : 'border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-500 dark:text-stone-400'
                }`}
              >
                <Moon className="w-10 h-10" />
                <span className="font-medium">Ciemny</span>
              </button>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="fixed bottom-12 w-full max-w-md px-6 flex flex-col items-center gap-6">
        <div className="flex gap-2">
          {steps.map((_, i) => (
            <div 
              key={i} 
              className={`h-2 rounded-full transition-all duration-300 ${
                i === step 
                  ? 'w-8 bg-blue-500' 
                  : 'w-2 bg-stone-300 dark:bg-stone-700'
              }`}
            />
          ))}
        </div>
        
        <button
          onClick={handleNext}
          className="w-full py-4 rounded-2xl bg-blue-500 hover:bg-blue-600 text-white text-xl font-bold shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-2"
        >
          {step === steps.length - 1 ? (
            <>Zaczynamy! <Check className="w-6 h-6" /></>
          ) : (
            <>Dalej <ArrowRight className="w-6 h-6" /></>
          )}
        </button>
      </div>
    </motion.div>
  );
}
