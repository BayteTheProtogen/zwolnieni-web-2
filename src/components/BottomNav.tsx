import { Home, BookOpen, User } from 'lucide-react';

export type Tab = 'home' | 'glossary' | 'profile';

interface BottomNavProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-stone-900 border-t border-stone-200 dark:border-stone-800 z-50 pb-[env(safe-area-inset-bottom)] transition-colors duration-300">
      <div className="max-w-md mx-auto flex justify-around items-center h-16 px-4">
        <button
          onClick={() => onTabChange('home')}
          className={`flex flex-col items-center justify-center w-16 h-full space-y-1 transition-colors ${
            activeTab === 'home' ? 'text-blue-500 dark:text-blue-400' : 'text-stone-400 dark:text-stone-500 hover:text-stone-600 dark:hover:text-stone-300'
          }`}
        >
          <Home className={`w-6 h-6 ${activeTab === 'home' ? 'fill-blue-100 dark:fill-blue-900/50' : ''}`} />
          <span className="text-[10px] font-medium">Lekcje</span>
        </button>
        
        <button
          onClick={() => onTabChange('glossary')}
          className={`flex flex-col items-center justify-center w-16 h-full space-y-1 transition-colors ${
            activeTab === 'glossary' ? 'text-blue-500 dark:text-blue-400' : 'text-stone-400 dark:text-stone-500 hover:text-stone-600 dark:hover:text-stone-300'
          }`}
        >
          <BookOpen className={`w-6 h-6 ${activeTab === 'glossary' ? 'fill-blue-100 dark:fill-blue-900/50' : ''}`} />
          <span className="text-[10px] font-medium">Słowniczek</span>
        </button>
        
        <button
          onClick={() => onTabChange('profile')}
          className={`flex flex-col items-center justify-center w-16 h-full space-y-1 transition-colors ${
            activeTab === 'profile' ? 'text-blue-500 dark:text-blue-400' : 'text-stone-400 dark:text-stone-500 hover:text-stone-600 dark:hover:text-stone-300'
          }`}
        >
          <User className={`w-6 h-6 ${activeTab === 'profile' ? 'fill-blue-100 dark:fill-blue-900/50' : ''}`} />
          <span className="text-[10px] font-medium">Profil</span>
        </button>
      </div>
    </div>
  );
}
