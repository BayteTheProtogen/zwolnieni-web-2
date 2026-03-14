import { motion } from 'motion/react';
import { BookOpen, Lock } from 'lucide-react';

const glossaryTerms = [
  { term: 'Phishing', definition: 'Oszustwo polegające na podszywaniu się pod zaufaną instytucję (np. bank) w celu wyłudzenia danych logowania lub pieniędzy.', lessonId: 'surf1' },
  { term: 'VPN', definition: 'Wirtualna Sieć Prywatna. Tworzy bezpieczny "tunel" dla Twojego połączenia internetowego, chroniąc Twoje dane przed podglądaniem, zwłaszcza w publicznych sieciach Wi-Fi.', lessonId: 'surf4' },
  { term: '2FA (Uwierzytelnianie Dwuskładnikowe)', definition: 'Dodatkowa warstwa zabezpieczeń. Oprócz hasła, do logowania potrzebny jest drugi element, np. jednorazowy kod z SMS-a.', lessonId: 'l3' },
  { term: 'HTTPS', definition: 'Bezpieczna wersja protokołu internetowego. Oznacza, że połączenie między Twoją przeglądarką a stroną jest szyfrowane (symbol zamkniętej kłódki).', lessonId: 'surf3' },
  { term: 'Spam', definition: 'Niechciane, masowo wysyłane wiadomości e-mail lub SMS, często zawierające reklamy lub próby oszustwa.', lessonId: 'l2' },
  { term: 'Złośliwe oprogramowanie (Malware)', definition: 'Programy komputerowe stworzone w celu uszkodzenia sprzętu, kradzieży danych lub szpiegowania użytkownika (np. wirusy, trojany).', lessonId: 'surf5' },
  { term: 'Firewall (Zapora sieciowa)', definition: 'System zabezpieczeń, który monitoruje i kontroluje ruch sieciowy, blokując nieautoryzowany dostęp.', lessonId: 'ochrona1' },
  { term: 'Cookie (Ciasteczka)', definition: 'Małe pliki tekstowe zapisywane przez strony internetowe w przeglądarce, służące do zapamiętywania preferencji użytkownika.', lessonId: 'surf2' },
  { term: 'Szyfrowanie', definition: 'Proces zamiany danych na postać nieczytelną dla osób nieuprawnionych, możliwą do odczytania tylko za pomocą odpowiedniego klucza.', lessonId: 'ochrona2' },
];

export function GlossaryView({ completedLessons }: { completedLessons: string[] }) {
  return (
    <motion.div
      className="min-h-screen bg-stone-100 dark:bg-stone-900 flex flex-col items-center pb-24 transition-colors duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <div className="w-full max-w-md bg-white dark:bg-stone-800 p-6 shadow-sm sticky top-0 z-20 flex items-center justify-center gap-3 transition-colors duration-300">
        <BookOpen className="w-8 h-8 text-blue-500 dark:text-blue-400" />
        <h1 className="text-2xl font-bold text-stone-800 dark:text-stone-100">Słowniczek</h1>
      </div>

      <div className="w-full max-w-md p-4 flex flex-col gap-4 mt-4">
        {glossaryTerms.map((item, index) => {
          const isUnlocked = completedLessons.includes(item.lessonId);
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-5 rounded-2xl shadow-sm border transition-all ${
                isUnlocked 
                  ? 'bg-white dark:bg-stone-800 border-stone-200 dark:border-stone-700' 
                  : 'bg-stone-200/50 dark:bg-stone-800/50 border-stone-300/50 dark:border-stone-700/50'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <h2 className={`text-xl font-bold mb-2 ${isUnlocked ? 'text-blue-600 dark:text-blue-400' : 'text-stone-500 dark:text-stone-400'}`}>
                  {isUnlocked ? item.term : '???'}
                </h2>
                {!isUnlocked && (
                  <div className="p-2 bg-stone-300/50 dark:bg-stone-700/50 rounded-full text-stone-500 dark:text-stone-400">
                    <Lock className="w-5 h-5" />
                  </div>
                )}
              </div>
              
              {isUnlocked ? (
                <p className="text-stone-600 dark:text-stone-300 leading-relaxed">{item.definition}</p>
              ) : (
                <p className="text-stone-500 dark:text-stone-400 italic text-sm">
                  Ukończ odpowiednią lekcję, aby odblokować to pojęcie.
                </p>
              )}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
