import { lessons } from '../data/lessons';

export const migrateCompletedLessons = (savedCompleted: string | null): string[] => {
  if (!savedCompleted) return [];
  
  try {
    const completed = JSON.parse(savedCompleted);
    // Migration from old IDs to new IDs
    const migrationMap: Record<string, string> = {
      'l_internet': 'podstawy_1',
      'l_link': 'podstawy_2',
      'l1': 'podstawy_3',
      'l_managers': 'podstawy_4',
      'l3': 'podstawy_5',
      'l2': 'podstawy_6',
      'surf1': 'surf_1',
      'surf2': 'surf_2',
      'surf3': 'surf_3',
      'surf4': 'surf_4',
      'surf5': 'surf_5',
      'l_email_phishing': 'zagrozenia_1',
      'l_sms_phishing': 'zagrozenia_2',
      'l_fake_virus': 'zagrozenia_3',
      'l_app_permissions': 'ochrona_1',
      'l_social_login': 'ochrona_2'
    };
    
    const migrated = completed.map((id: string) => migrationMap[id] || id);
    // Filter out duplicates and ensure only valid IDs remain
    const validIds = lessons.map(l => l.id);
    const finalCompleted = [...new Set(migrated)].filter((id: any) => validIds.includes(id));
    
    return finalCompleted as string[];
  } catch (e) {
    console.error('Failed to parse completed lessons', e);
    return [];
  }
};
