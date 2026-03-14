import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { HomeView } from './components/HomeView';
import { LessonView } from './components/LessonView';
import { LessonCompleteView } from './components/LessonCompleteView';
import { GlossaryView } from './components/GlossaryView';
import { ProfileView } from './components/ProfileView';
import { OnboardingView } from './components/OnboardingView';
import { BottomNav, Tab } from './components/BottomNav';
import { badges, Badge } from './data/badges';
import { playCompleteSound, playBadgeSound, playIncorrectSound, playFailSound } from './utils/sound';

type ViewState = 'home' | 'lesson' | 'lesson_complete' | 'glossary' | 'profile';

function BadgeModal({ badge, onClose }: { key?: string, badge: Badge, onClose: () => void }) {
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

export default function App() {
  const [view, setView] = useState<ViewState>('home');
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [currentLessonId, setCurrentLessonId] = useState<string | null>(null);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [xp, setXp] = useState(0);
  const [streak, setStreak] = useState(0);
  const [lastPlayedDate, setLastPlayedDate] = useState<string | null>(null);
  const [recentXpEarned, setRecentXpEarned] = useState(0);
  const [recentPassed, setRecentPassed] = useState(true);
  const [unlockedBadges, setUnlockedBadges] = useState<string[]>([]);
  const [badgeQueue, setBadgeQueue] = useState<Badge[]>([]);
  const [totalQuestionsAnswered, setTotalQuestionsAnswered] = useState(0);
  const [totalCorrectAnswers, setTotalCorrectAnswers] = useState(0);
  const [justCompletedLesson, setJustCompletedLesson] = useState(false);
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(() => {
    const saved = localStorage.getItem('hasCompletedOnboarding_v2');
    return saved === 'true';
  });
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDeveloperMode, setIsDeveloperMode] = useState(false);
  const [devModeKeys, setDevModeKeys] = useState<string[]>([]);

  // Developer mode listener
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.altKey && event.shiftKey && event.key === 'D') {
        setDevModeKeys(prev => {
          const next = [...prev, 'D'];
          if (next.length === 4) {
            setIsDeveloperMode(true);
            alert('Developer Mode Enabled! All lessons unlocked.');
            return [];
          }
          return next;
        });
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Load from localStorage
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('isDarkMode');
    if (savedDarkMode === 'true') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else if (savedDarkMode === 'false') {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
    const savedCompleted = localStorage.getItem('completedLessons');
    if (savedCompleted) setCompletedLessons(JSON.parse(savedCompleted));
    
    const savedXp = localStorage.getItem('xp');
    if (savedXp) setXp(parseInt(savedXp, 10));
    
    const savedStreak = localStorage.getItem('streak');
    if (savedStreak) setStreak(parseInt(savedStreak, 10));

    const savedDate = localStorage.getItem('lastPlayedDate');
    if (savedDate) setLastPlayedDate(savedDate);

    const savedBadges = localStorage.getItem('unlockedBadges');
    if (savedBadges) setUnlockedBadges(JSON.parse(savedBadges));

    const savedTotalQuestions = localStorage.getItem('totalQuestionsAnswered');
    if (savedTotalQuestions) setTotalQuestionsAnswered(parseInt(savedTotalQuestions, 10));

    const savedCorrectAnswers = localStorage.getItem('totalCorrectAnswers');
    if (savedCorrectAnswers) setTotalCorrectAnswers(parseInt(savedCorrectAnswers, 10));
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('hasCompletedOnboarding_v2', hasCompletedOnboarding.toString());
    localStorage.setItem('isDarkMode', isDarkMode.toString());
    localStorage.setItem('completedLessons', JSON.stringify(completedLessons));
    localStorage.setItem('xp', xp.toString());
    localStorage.setItem('streak', streak.toString());
    localStorage.setItem('unlockedBadges', JSON.stringify(unlockedBadges));
    localStorage.setItem('totalQuestionsAnswered', totalQuestionsAnswered.toString());
    localStorage.setItem('totalCorrectAnswers', totalCorrectAnswers.toString());
    if (lastPlayedDate) {
      localStorage.setItem('lastPlayedDate', lastPlayedDate);
    }
  }, [completedLessons, xp, streak, lastPlayedDate, unlockedBadges, totalQuestionsAnswered, totalCorrectAnswers]);

  // Check badges
  useEffect(() => {
    const newBadges = badges.filter(b => !unlockedBadges.includes(b.id) && b.check(xp, streak, completedLessons));
    if (newBadges.length > 0) {
      setUnlockedBadges(prev => [...prev, ...newBadges.map(b => b.id)]);
      setBadgeQueue(prev => [...prev, ...newBadges]);
    }
  }, [xp, streak, completedLessons, unlockedBadges]);

  const handleStartLesson = (lessonId: string) => {
    setCurrentLessonId(lessonId);
    setView('lesson');
  };

  const handleLessonComplete = (xpEarned: number, correctAnswers: number, totalQuestions: number, passed: boolean) => {
    if (passed) {
      playCompleteSound();
    } else {
      playFailSound();
    }
    
    setRecentXpEarned(xpEarned);
    setRecentPassed(passed);
    setXp(prev => prev + xpEarned);
    setTotalCorrectAnswers(prev => prev + correctAnswers);
    setTotalQuestionsAnswered(prev => prev + totalQuestions);
    
    if (passed && currentLessonId && !completedLessons.includes(currentLessonId)) {
      setCompletedLessons(prev => [...prev, currentLessonId]);
    }

    // Streak logic
    const today = new Date().toISOString().split('T')[0];
    if (lastPlayedDate !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().split('T')[0];
      
      if (lastPlayedDate === yesterdayStr) {
        setStreak(prev => prev + 1);
      } else {
        setStreak(1);
      }
      setLastPlayedDate(today);
    }

    setView('lesson_complete');
  };

  const handleCloseLesson = () => {
    setCurrentLessonId(null);
    setView(activeTab);
  };

  const handleContinueFromComplete = () => {
    setCurrentLessonId(null);
    setJustCompletedLesson(true);
    setView(activeTab);
  };

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    setView(tab);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(prev => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return next;
    });
  };

  const accuracy = totalQuestionsAnswered > 0 
    ? Math.round((totalCorrectAnswers / totalQuestionsAnswered) * 100) 
    : 100;

  const resetOnboarding = () => {
    setHasCompletedOnboarding(false);
    localStorage.setItem('hasCompletedOnboarding_v2', 'false');
  };

  if (!hasCompletedOnboarding) {
    return (
      <OnboardingView 
        onComplete={() => {
          setHasCompletedOnboarding(true);
          localStorage.setItem('hasCompletedOnboarding_v2', 'true');
        }} 
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
    );
  }

  return (
    <div className="overflow-hidden bg-stone-100 dark:bg-stone-900 min-h-screen font-sans text-stone-800 dark:text-stone-100 transition-colors duration-300">
      <AnimatePresence mode="wait">
        {view === 'home' && (
          <HomeView 
            key="home"
            xp={xp} 
            streak={streak} 
            completedLessons={completedLessons} 
            onStartLesson={handleStartLesson} 
            justCompletedLesson={justCompletedLesson}
            onScrolled={() => setJustCompletedLesson(false)}
            isDeveloperMode={isDeveloperMode}
          />
        )}
        {view === 'glossary' && (
          <GlossaryView completedLessons={completedLessons} />
        )}
        {view === 'profile' && (
          <ProfileView 
            xp={xp}
            streak={streak}
            accuracy={accuracy}
            unlockedBadges={unlockedBadges}
            isDarkMode={isDarkMode}
            toggleDarkMode={toggleDarkMode}
            resetOnboarding={resetOnboarding}
          />
        )}
        {view === 'lesson' && currentLessonId && (
          <LessonView 
            lessonId={currentLessonId} 
            onComplete={handleLessonComplete} 
            onClose={handleCloseLesson} 
          />
        )}
        {view === 'lesson_complete' && (
          <LessonCompleteView 
            xpEarned={recentXpEarned} 
            newStreak={streak} 
            passed={recentPassed}
            onContinue={handleContinueFromComplete} 
          />
        )}
      </AnimatePresence>

      {(view === 'home' || view === 'glossary' || view === 'profile') && (
        <BottomNav activeTab={activeTab} onTabChange={handleTabChange} />
      )}

      <AnimatePresence>
        {view === 'home' && badgeQueue.length > 0 && (
          <BadgeModal 
            key="badge-modal" 
            badge={badgeQueue[0]} 
            onClose={() => setBadgeQueue(prev => prev.slice(1))} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
