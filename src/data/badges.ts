import { Shield, Zap, Award, Star, CheckCircle, Flame, Trophy, Target, Crown, BookOpen, Navigation, Lock } from 'lucide-react';

export type Badge = {
  id: string;
  name: string;
  description: string;
  icon: any;
  color: string;
  check: (xp: number, streak: number, completedLessons: string[], totalCorrectAnswers?: number) => boolean;
};

export const badges: Badge[] = [
  {
    id: 'first_lesson',
    name: 'Pierwsze Kroki',
    description: 'Ukończono pierwszą lekcję.',
    icon: Star,
    color: 'text-yellow-500 bg-yellow-100',
    check: (_, __, completed) => completed.length > 0,
  },
  {
    id: 'streak_3',
    name: 'Początkujący Surfer',
    description: 'Utrzymano serię przez 3 dni.',
    icon: Zap,
    color: 'text-orange-500 bg-orange-100',
    check: (_, streak) => streak >= 3,
  },
  {
    id: 'streak_7',
    name: 'Tygodniowy Zapał',
    description: 'Utrzymano serię przez 7 dni.',
    icon: Flame,
    color: 'text-red-500 bg-red-100',
    check: (_, streak) => streak >= 7,
  },
  {
    id: 'streak_30',
    name: 'Miesięczny Weteran',
    description: 'Utrzymano serię przez 30 dni.',
    icon: Crown,
    color: 'text-yellow-600 bg-yellow-200',
    check: (_, streak) => streak >= 30,
  },
  {
    id: 'xp_100',
    name: 'Pilny Uczeń',
    description: 'Zdobyto 100 gwiazdek.',
    icon: Award,
    color: 'text-blue-500 bg-blue-100',
    check: (xp) => xp >= 100,
  },
  {
    id: 'xp_500',
    name: 'Kolekcjoner Gwiazdek',
    description: 'Zdobyto 500 gwiazdek.',
    icon: Trophy,
    color: 'text-indigo-500 bg-indigo-100',
    check: (xp) => xp >= 500,
  },
  {
    id: 'xp_1000',
    name: 'Mistrz Wiedzy',
    description: 'Zdobyto 1000 gwiazdek.',
    icon: Star,
    color: 'text-amber-500 bg-amber-100',
    check: (xp) => xp >= 1000,
  },
  {
    id: 'lessons_10',
    name: 'Dziesiątka',
    description: 'Ukończono 10 lekcji.',
    icon: BookOpen,
    color: 'text-teal-500 bg-teal-100',
    check: (_, __, completed) => completed.length >= 10,
  },
  {
    id: 'lessons_20',
    name: 'Półmetek',
    description: 'Ukończono 20 lekcji.',
    icon: Target,
    color: 'text-rose-500 bg-rose-100',
    check: (_, __, completed) => completed.length >= 20,
  },
  {
    id: 'module_surf',
    name: 'Bezpieczny Surfer',
    description: 'Ukończono moduł "Bezpieczne Surfowanie".',
    icon: Shield,
    color: 'text-emerald-500 bg-emerald-100',
    check: (_, __, completed) => ['surf_1', 'surf_2', 'surf_3', 'surf_4', 'surf_5', 'surf_6'].every(id => completed.includes(id)),
  },
  {
    id: 'module_podstawy',
    name: 'Mistrz Haseł',
    description: 'Ukończono moduł "Bezpieczne Hasła".',
    icon: CheckCircle,
    color: 'text-purple-500 bg-purple-100',
    check: (_, __, completed) => ['podstawy_3', 'podstawy_4', 'podstawy_5', 'podstawy_6', 'hasla_5'].every(id => completed.includes(id)),
  },
  {
    id: 'module_podstawy_internet',
    name: 'Odkrywca Internetu',
    description: 'Ukończono moduł "Podstawy Internetu".',
    icon: Navigation,
    color: 'text-blue-600 bg-blue-200',
    check: (_, __, completed) => ['podstawy_1', 'podstawy_2', 'podstawy_3_new'].every(id => completed.includes(id)),
  },
  {
    id: 'module_zagrozenia',
    name: 'Pogromca Oszustów',
    description: 'Ukończono moduł "Zagrożenia i Oszustwa".',
    icon: Shield,
    color: 'text-red-600 bg-red-200',
    check: (_, __, completed) => ['zagrozenia_1', 'zagrozenia_2', 'zagrozenia_3', 'zagrozenia_4'].every(id => completed.includes(id)),
  },
  {
    id: 'module_ochrona',
    name: 'Strażnik Urządzeń',
    description: 'Ukończono moduł "Ochrona Urządzeń i Kont".',
    icon: Lock,
    color: 'text-indigo-600 bg-indigo-200',
    check: (_, __, completed) => ['ochrona_1', 'ochrona_2', 'ochrona_3'].every(id => completed.includes(id)),
  },
  {
    id: 'module_zakupy',
    name: 'Świadomy Kupujący',
    description: 'Ukończono moduł "Zakupy Online".',
    icon: CheckCircle,
    color: 'text-green-600 bg-green-200',
    check: (_, __, completed) => ['zakupy_1', 'zakupy_2', 'zakupy_3', 'zakupy_4', 'zakupy_5', 'zakupy_6'].every(id => completed.includes(id)),
  },
  {
    id: 'module_social',
    name: 'Mistrz Społeczności',
    description: 'Ukończono moduł "Media Społecznościowe".',
    icon: Star,
    color: 'text-pink-600 bg-pink-200',
    check: (_, __, completed) => ['social_1', 'social_2', 'social_3', 'social_4', 'social_5', 'social_6'].every(id => completed.includes(id)),
  },
  {
    id: 'module_urzadzenia',
    name: 'Ekspert Sprzętowy',
    description: 'Ukończono moduł "Smartfony i Komputery".',
    icon: Zap,
    color: 'text-cyan-600 bg-cyan-200',
    check: (_, __, completed) => ['urzadzenia_1', 'urzadzenia_2', 'urzadzenia_3', 'urzadzenia_4', 'urzadzenia_5', 'urzadzenia_6'].every(id => completed.includes(id)),
  },
  {
    id: 'module_ai',
    name: 'Weryfikator Faktów',
    description: 'Ukończono moduł "AI i Fake News".',
    icon: Award,
    color: 'text-violet-600 bg-violet-200',
    check: (_, __, completed) => ['ai_1', 'ai_2', 'ai_3', 'ai_4', 'ai_5', 'ai_6'].every(id => completed.includes(id)),
  }
];
