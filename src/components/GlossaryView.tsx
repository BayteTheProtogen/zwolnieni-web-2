import { motion } from 'motion/react';
import { BookOpen, Lock } from 'lucide-react';

const glossaryTerms = [
  { term: 'Phishing', definition: 'Oszustwo polegające na podszywaniu się pod zaufaną instytucję (np. bank) w celu wyłudzenia danych logowania lub pieniędzy.', lessonId: 'zagrozenia_1' },
  { term: 'VPN', definition: 'Wirtualna Sieć Prywatna. Tworzy bezpieczny "tunel" dla Twojego połączenia internetowego, chroniąc Twoje dane przed podglądaniem, zwłaszcza w publicznych sieciach Wi-Fi.', lessonId: 'surf_3' },
  { term: '2FA (Uwierzytelnianie Dwuskładnikowe)', definition: 'Dodatkowa warstwa zabezpieczeń. Oprócz hasła, do logowania potrzebny jest drugi element, np. jednorazowy kod z SMS-a.', lessonId: 'podstawy_5' },
  { term: 'HTTPS', definition: 'Bezpieczna wersja protokołu internetowego. Oznacza, że połączenie między Twoją przeglądarką a stroną jest szyfrowane (symbol zamkniętej kłódki).', lessonId: 'surf_1' },
  { term: 'Spam', definition: 'Niechciane, masowo wysyłane wiadomości e-mail lub SMS, często zawierające reklamy lub próby oszustwa.', lessonId: 'podstawy_6' },
  { term: 'Złośliwe oprogramowanie (Malware)', definition: 'Programy komputerowe stworzone w celu uszkodzenia sprzętu, kradzieży danych lub szpiegowania użytkownika (np. wirusy, trojany).', lessonId: 'zagrozenia_3' },
  { term: 'Firewall (Zapora sieciowa)', definition: 'System zabezpieczeń, który monitoruje i kontroluje ruch sieciowy, blokując nieautoryzowany dostęp.', lessonId: 'ochrona_1' },
  { term: 'Cookie (Ciasteczka)', definition: 'Małe pliki tekstowe zapisywane przez strony internetowe w przeglądarce, służące do zapamiętywania preferencji użytkownika.', lessonId: 'surf_1' },
  { term: 'Szyfrowanie', definition: 'Proces zamiany danych na postać nieczytelną dla osób nieuprawnionych, możliwą do odczytania tylko za pomocą odpowiedniego klucza.', lessonId: 'surf_1' },
  { term: 'Socjotechnika', definition: 'Metoda manipulacji, w której oszuści wykorzystują ludzkie emocje (strach, pośpiech, zaufanie), aby nakłonić ofiarę do ujawnienia danych lub przelania pieniędzy.', lessonId: 'surf_5' },
  { term: 'Smishing', definition: 'Oszustwo polegające na wysyłaniu fałszywych wiadomości SMS, które mają na celu wyłudzenie danych lub pieniędzy (np. "dopłata do paczki").', lessonId: 'zagrozenia_2' },
  { term: 'Uprawnienia aplikacji', definition: 'Zgody udzielane aplikacjom na dostęp do funkcji telefonu (np. aparatu, mikrofonu, kontaktów). Należy zawsze sprawdzać, czy są one uzasadnione.', lessonId: 'ochrona_1' },
  { term: 'BLIK', definition: 'Polski system płatności mobilnych, pozwalający na szybkie i bezpieczne płatności za pomocą 6-cyfrowego kodu z aplikacji bankowej.', lessonId: 'zakupy_1' },
  { term: 'Chargeback', definition: 'Procedura obciążenia zwrotnego. Pozwala na odzyskanie pieniędzy z banku, jeśli opłacony kartą towar nie dotarł lub sprzedawca okazał się oszustem.', lessonId: 'zakupy_1' },
  { term: 'Fałszywy sklep', definition: 'Strona internetowa udająca prawdziwy sklep, stworzona wyłącznie w celu wyłudzenia pieniędzy i danych od kupujących.', lessonId: 'zakupy_2' },
  { term: 'Scam', definition: 'Oszustwo internetowe, którego celem jest wyłudzenie pieniędzy lub danych osobowych przez wzbudzenie zaufania ofiary.', lessonId: 'zakupy_4' },
  { term: 'Ustawienia prywatności', definition: 'Opcje w mediach społecznościowych pozwalające kontrolować, kto może widzieć Twoje posty, zdjęcia i dane osobowe.', lessonId: 'social_1' },
  { term: 'Catfishing', definition: 'Tworzenie fałszywej tożsamości w internecie (często na portalach randkowych) w celu oszukania innej osoby, np. wyłudzenia pieniędzy.', lessonId: 'social_2' },
  { term: 'Troll internetowy', definition: 'Osoba, która celowo publikuje kontrowersyjne, obraźliwe lub nieprawdziwe komentarze, aby wywołać kłótnię i zdenerwować innych.', lessonId: 'social_3' },
  { term: 'Szyfrowanie End-to-End', definition: 'Metoda zabezpieczania wiadomości, w której tylko nadawca i odbiorca mogą je odczytać. Nikt po drodze nie ma do nich dostępu.', lessonId: 'social_5' },
  { term: 'Aktualizacja oprogramowania', definition: 'Pobranie i zainstalowanie nowszej wersji systemu lub aplikacji, często zawierającej ważne poprawki bezpieczeństwa.', lessonId: 'urzadzenia_1' },
  { term: 'Kopia zapasowa (Backup)', definition: 'Kopia ważnych danych (zdjęć, kontaktów) zapisana w bezpiecznym miejscu (np. w chmurze), pozwalająca na ich odzyskanie w razie awarii urządzenia.', lessonId: 'urzadzenia_4' },
  { term: 'Juice Jacking', definition: 'Atak hakerski polegający na kradzieży danych lub instalacji wirusa przez zmodyfikowane, publiczne gniazda USB do ładowania telefonów.', lessonId: 'urzadzenia_5' },
  { term: 'Sztuczna Inteligencja (AI)', definition: 'Programy komputerowe zdolne do uczenia się i wykonywania zadań wymagających ludzkiego myślenia, np. rozpoznawania obrazów czy generowania tekstów.', lessonId: 'ai_1' },
  { term: 'Deepfake', definition: 'Niezwykle realistyczny, fałszywy materiał wideo lub audio wygenerowany przez sztuczną inteligencję, np. podkładający czyjąś twarz lub głos.', lessonId: 'ai_2' },
  { term: 'Fake News', definition: 'Celowo spreparowana, fałszywa informacja, mająca na celu dezinformację, wywołanie emocji lub zysk finansowy z kliknięć.', lessonId: 'ai_3' },
  { term: 'Bańka informacyjna', definition: 'Zjawisko polegające na tym, że algorytmy pokazują nam w internecie tylko te informacje, które są zgodne z naszymi poglądami i zainteresowaniami.', lessonId: 'ai_4' },
  { term: 'Fact-checking', definition: 'Proces weryfikacji faktów i sprawdzania prawdziwości informacji, np. poprzez porównywanie ich w kilku niezależnych źródłach.', lessonId: 'ai_5' },
  { term: 'Oszustwo inwestycyjne', definition: 'Wyłudzanie pieniędzy pod pretekstem super opłacalnej, szybkiej inwestycji, często reklamowanej przez fałszywe wizerunki celebrytów.', lessonId: 'zakupy_5' },
  { term: 'Twardy reset', definition: 'Przywrócenie urządzenia do ustawień fabrycznych, co trwale usuwa z niego wszystkie prywatne dane użytkownika.', lessonId: 'ochrona_3' },
  { term: 'Menedżer haseł', definition: 'Aplikacja służąca do bezpiecznego przechowywania wszystkich Twoich haseł w jednym miejscu, chronionym hasłem głównym.', lessonId: 'hasla_5' }
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
                  : 'bg-stone-200 dark:bg-stone-800 border-stone-300 dark:border-stone-700'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <h2 className={`text-xl font-bold mb-2 ${isUnlocked ? 'text-blue-600 dark:text-blue-400' : 'text-stone-500 dark:text-stone-400'}`}>
                  {isUnlocked ? item.term : '???'}
                </h2>
                {!isUnlocked && (
                  <div className="p-2 bg-stone-300 dark:bg-stone-700 rounded-full text-stone-500 dark:text-stone-400">
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
