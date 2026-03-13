import { Shield, Zap, Award, Star, CheckCircle } from 'lucide-react';

export type Badge = {
  id: string;
  name: string;
  description: string;
  icon: any;
  color: string;
  check: (xp: number, streak: number, completedLessons: string[]) => boolean;
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
    id: 'xp_100',
    name: 'Pilny Uczeń',
    description: 'Zdobyto 100 gwiazdek.',
    icon: Award,
    color: 'text-blue-500 bg-blue-100',
    check: (xp) => xp >= 100,
  },
  {
    id: 'module_surf',
    name: 'Bezpieczny Surfer',
    description: 'Ukończono moduł "Bezpieczne Surfowanie".',
    icon: Shield,
    color: 'text-emerald-500 bg-emerald-100',
    check: (_, __, completed) => ['surf1', 'surf2', 'surf3', 'surf4', 'surf5'].every(id => completed.includes(id)),
  },
  {
    id: 'module_podstawy',
    name: 'Mistrz Haseł',
    description: 'Ukończono moduł "Bezpieczne Hasła".',
    icon: CheckCircle,
    color: 'text-purple-500 bg-purple-100',
    check: (_, __, completed) => ['l1', 'l2', 'l3'].every(id => completed.includes(id)),
  }
];
