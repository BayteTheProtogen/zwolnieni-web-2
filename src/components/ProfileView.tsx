import { motion } from 'motion/react';
import { User, Flame, Star, Target, Moon, Sun, RotateCcw, Type, Eye, Zap, Check } from 'lucide-react';
import { badges } from '../data/badges';
import { useAccessibility } from '../contexts/AccessibilityContext';

interface ProfileViewProps {
  xp: number;
  streak: number;
  accuracy: number;
  unlockedBadges: string[];
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  resetOnboarding: () => void;
}

export function ProfileView({ xp, streak, accuracy, unlockedBadges, isDarkMode, toggleDarkMode, resetOnboarding }: ProfileViewProps) {
  const { settings, updateSettings } = useAccessibility();

  return (
    <motion.div
      className="min-h-screen bg-stone-100 dark:bg-stone-900 flex flex-col items-center pb-24 transition-colors duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <div className="w-full max-w-md bg-white dark:bg-stone-800 p-6 shadow-sm sticky top-0 z-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <User className="w-8 h-8 text-blue-500" />
          <h1 className="text-2xl font-bold text-stone-800 dark:text-stone-100">Twój Profil</h1>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={resetOnboarding}
            className="p-2 rounded-full bg-stone-100 dark:bg-stone-700 text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-600 transition-colors"
            aria-label="Powtórz samouczek"
            title="Powtórz samouczek"
          >
            <RotateCcw className="w-6 h-6" />
          </button>
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-stone-100 dark:bg-stone-700 text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-600 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div className="w-full max-w-md p-4 flex flex-col gap-6 mt-4">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white dark:bg-stone-800 p-4 rounded-2xl shadow-sm border border-stone-200 dark:border-stone-700 flex flex-col items-center transition-colors duration-300">
            <Flame className="w-10 h-10 text-orange-500 mb-2" />
            <span className="text-2xl font-bold text-stone-800 dark:text-stone-100">{streak}</span>
            <span className="text-sm font-medium text-stone-500 dark:text-stone-400 uppercase tracking-wider">Dni z rzędu</span>
          </div>
          <div className="bg-white dark:bg-stone-800 p-4 rounded-2xl shadow-sm border border-stone-200 dark:border-stone-700 flex flex-col items-center transition-colors duration-300">
            <Star className="w-10 h-10 text-blue-500 mb-2" />
            <span className="text-2xl font-bold text-stone-800 dark:text-stone-100">{xp}</span>
            <span className="text-sm font-medium text-stone-500 dark:text-stone-400 uppercase tracking-wider">Gwiazdki</span>
          </div>
          <div className="bg-white dark:bg-stone-800 p-4 rounded-2xl shadow-sm border border-stone-200 dark:border-stone-700 flex flex-col items-center col-span-2 transition-colors duration-300">
            <Target className="w-10 h-10 text-emerald-500 mb-2" />
            <span className="text-3xl font-bold text-stone-800 dark:text-stone-100">{accuracy}%</span>
            <span className="text-sm font-medium text-stone-500 dark:text-stone-400 uppercase tracking-wider">Poprawność odpowiedzi</span>
          </div>
        </div>

        {/* Accessibility Settings */}
        <div className="bg-white dark:bg-stone-800 p-6 rounded-3xl shadow-sm border border-stone-200 dark:border-stone-700 mt-4 transition-colors duration-300">
          <h2 className="text-xl font-bold text-stone-800 dark:text-stone-100 mb-6 text-center">Ułatwienia dostępu</h2>
          <div className="flex flex-col gap-4">
            <button
              onClick={() => updateSettings({ largeText: !settings.largeText })}
              className={`flex items-center justify-between p-4 rounded-2xl border-2 transition-all ${
                settings.largeText
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400'
                  : 'border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <Type className="w-6 h-6" />
                <span className="font-medium">Duży tekst</span>
              </div>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${settings.largeText ? 'border-blue-500 bg-blue-500 text-white' : 'border-stone-300 dark:border-stone-600'}`}>
                {settings.largeText && <Check className="w-4 h-4" />}
              </div>
            </button>

            <button
              onClick={() => updateSettings({ highContrast: !settings.highContrast })}
              className={`flex items-center justify-between p-4 rounded-2xl border-2 transition-all ${
                settings.highContrast
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400'
                  : 'border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <Eye className="w-6 h-6" />
                <span className="font-medium">Wysoki kontrast</span>
              </div>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${settings.highContrast ? 'border-blue-500 bg-blue-500 text-white' : 'border-stone-300 dark:border-stone-600'}`}>
                {settings.highContrast && <Check className="w-4 h-4" />}
              </div>
            </button>

            <button
              onClick={() => updateSettings({ reduceMotion: !settings.reduceMotion })}
              className={`flex items-center justify-between p-4 rounded-2xl border-2 transition-all ${
                settings.reduceMotion
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400'
                  : 'border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <Zap className="w-6 h-6" />
                <span className="font-medium">Redukcja animacji</span>
              </div>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${settings.reduceMotion ? 'border-blue-500 bg-blue-500 text-white' : 'border-stone-300 dark:border-stone-600'}`}>
                {settings.reduceMotion && <Check className="w-4 h-4" />}
              </div>
            </button>
          </div>
        </div>

        {/* Badges Section */}
        <div className="bg-white dark:bg-stone-800 p-6 rounded-3xl shadow-sm border border-stone-200 dark:border-stone-700 mt-4 transition-colors duration-300">
          <h2 className="text-xl font-bold text-stone-800 dark:text-stone-100 mb-6 text-center">Twoje Odznaki</h2>
          <div className="grid grid-cols-2 gap-4">
            {badges.map(badge => {
              const isUnlocked = unlockedBadges.includes(badge.id);
              const Icon = badge.icon;
              return (
                <div key={badge.id} className={`p-4 rounded-2xl border-2 flex flex-col items-center text-center transition-all ${isUnlocked ? 'border-stone-200 dark:border-stone-600 bg-stone-50 dark:bg-stone-700/50' : 'border-stone-100 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/50 opacity-50 grayscale'}`}>
                  <div className={`p-3 rounded-full mb-3 ${isUnlocked ? badge.color : 'bg-stone-200 dark:bg-stone-700 text-stone-400 dark:text-stone-500'}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-stone-800 dark:text-stone-200 mb-1 break-words max-w-full">{badge.name}</h3>
                  <p className="text-xs text-stone-500 dark:text-stone-400 break-words max-w-full">{badge.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
