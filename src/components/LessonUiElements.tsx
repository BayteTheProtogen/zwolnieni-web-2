import React from 'react';
import { Smartphone, Shield, Key, Mail, Globe, AlertTriangle, Lock } from 'lucide-react';

export const getLessonIcon = (iconName?: string) => {
  switch (iconName) {
    case 'smartphone': return <Smartphone className="w-16 h-16 text-blue-500 mb-6 mx-auto" />;
    case 'shield': return <Shield className="w-16 h-16 text-emerald-500 mb-6 mx-auto" />;
    case 'key': return <Key className="w-16 h-16 text-amber-500 mb-6 mx-auto" />;
    case 'mail': return <Mail className="w-16 h-16 text-blue-500 mb-6 mx-auto" />;
    case 'globe': return <Globe className="w-16 h-16 text-blue-500 mb-6 mx-auto" />;
    case 'alert-triangle': return <AlertTriangle className="w-16 h-16 text-rose-500 mb-6 mx-auto" />;
    case 'lock': return <Lock className="w-16 h-16 text-emerald-500 mb-6 mx-auto" />;
    default: return null;
  }
};

export const getUiMockup = (mockupName?: string) => {
  if (!mockupName) return null;
  
  switch (mockupName) {
    case 'browser_address_bar':
      return (
        <div className="bg-stone-200 dark:bg-stone-800 rounded-t-xl p-2 flex items-center gap-2 mb-6 border border-stone-300 dark:border-stone-700 shadow-sm">
          <div className="flex gap-1.5 px-2">
            <div className="w-3 h-3 rounded-full bg-rose-400"></div>
            <div className="w-3 h-3 rounded-full bg-amber-400"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
          </div>
          <div className="flex-1 bg-white dark:bg-stone-900 rounded-md px-3 py-1.5 flex items-center gap-2 text-sm text-stone-600 dark:text-stone-300 border border-stone-300 dark:border-stone-700">
            <Lock className="w-4 h-4 text-emerald-500" />
            <span className="font-mono">https://www.mojbank.pl</span>
          </div>
        </div>
      );
    case 'browser_address_bar_unsafe':
      return (
        <div className="bg-stone-200 dark:bg-stone-800 rounded-t-xl p-2 flex items-center gap-2 mb-6 border border-stone-300 dark:border-stone-700 shadow-sm">
          <div className="flex gap-1.5 px-2">
            <div className="w-3 h-3 rounded-full bg-rose-400"></div>
            <div className="w-3 h-3 rounded-full bg-amber-400"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
          </div>
          <div className="flex-1 bg-white dark:bg-stone-900 rounded-md px-3 py-1.5 flex items-center gap-2 text-sm text-stone-600 dark:text-stone-300 border border-stone-300 dark:border-stone-700">
            <AlertTriangle className="w-4 h-4 text-rose-500" />
            <span className="font-mono">http://www.mojbank.pl</span>
          </div>
        </div>
      );
    case 'browser_address_bar_typo':
      return (
        <div className="bg-stone-200 dark:bg-stone-800 rounded-t-xl p-2 flex items-center gap-2 mb-6 border border-stone-300 dark:border-stone-700 shadow-sm">
          <div className="flex gap-1.5 px-2">
            <div className="w-3 h-3 rounded-full bg-rose-400"></div>
            <div className="w-3 h-3 rounded-full bg-amber-400"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
          </div>
          <div className="flex-1 bg-white dark:bg-stone-900 rounded-md px-3 py-1.5 flex items-center gap-2 text-sm text-stone-600 dark:text-stone-300 border border-stone-300 dark:border-stone-700">
            <Lock className="w-4 h-4 text-emerald-500" />
            <span className="font-mono">https://www.m0jbank.pl</span>
          </div>
        </div>
      );
    case 'authenticator_app':
      return (
        <div className="w-64 mx-auto bg-stone-900 rounded-3xl p-3 mb-6 shadow-xl border-4 border-stone-800 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-stone-800 rounded-b-xl"></div>
          <div className="bg-stone-950 h-full rounded-2xl p-4 text-white flex flex-col gap-4 pt-6">
            <div className="text-center font-bold text-lg border-b border-stone-800 pb-2">Authenticator</div>
            <div className="bg-stone-800 rounded-xl p-3">
              <div className="text-xs text-stone-400 mb-1">Moje Konto Bankowe</div>
              <div className="text-3xl font-mono tracking-widest text-blue-400 text-center">842 195</div>
              <div className="w-full bg-stone-700 h-1 mt-2 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-full w-2/3"></div>
              </div>
            </div>
          </div>
        </div>
      );
    case 'yubikey':
      return (
        <div className="flex justify-center mb-6">
          <div className="w-32 h-12 bg-stone-800 rounded-r-full rounded-l-md relative border-2 border-stone-700 shadow-lg flex items-center">
            <div className="w-8 h-8 rounded-full border-4 border-amber-500 absolute right-2 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-amber-500/20 animate-pulse"></div>
            </div>
            <div className="w-4 h-full bg-amber-500 absolute left-0 rounded-l-sm"></div>
            <div className="ml-6 text-stone-300 font-bold text-xs">YubiKey</div>
          </div>
        </div>
      );
    case 'notification':
      return (
        <div className="w-full max-w-sm mx-auto bg-white dark:bg-stone-800 rounded-2xl p-4 shadow-lg border border-stone-200 dark:border-stone-700 mb-6 flex gap-4 items-start">
          <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-xl">
            <Shield className="w-6 h-6 text-blue-500" />
          </div>
          <div className="flex-1 text-left">
            <div className="font-bold text-stone-800 dark:text-stone-100">Nowe logowanie</div>
            <div className="text-sm text-stone-500 dark:text-stone-400 mt-1">Wykryto logowanie z nowego urządzenia (Warszawa, Polska). Czy to Ty?</div>
            <div className="flex gap-2 mt-3">
              <button className="flex-1 bg-stone-100 dark:bg-stone-700 text-stone-700 dark:text-stone-300 py-1.5 rounded-lg text-sm font-medium">Nie, zablokuj</button>
              <button className="flex-1 bg-blue-500 text-white py-1.5 rounded-lg text-sm font-medium">Tak, to ja</button>
            </div>
          </div>
        </div>
      );
    case 'password_input':
      return (
        <div className="w-full max-w-sm mx-auto mb-6">
          <div className="bg-white dark:bg-stone-800 rounded-xl p-4 shadow-sm border border-stone-200 dark:border-stone-700">
            <div className="text-sm text-stone-500 dark:text-stone-400 mb-1 text-left">Hasło</div>
            <div className="flex items-center bg-stone-100 dark:bg-stone-900 rounded-lg p-3 border border-stone-200 dark:border-stone-700">
              <div className="flex-1 flex gap-1">
                {[...Array(8)].map((_, i) => <div key={i} className="w-2 h-2 rounded-full bg-stone-800 dark:bg-stone-200"></div>)}
              </div>
              <div className="text-xs font-bold text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-1 rounded">Silne</div>
            </div>
          </div>
        </div>
      );
    case 'email_phishing':
      return (
        <div className="w-full max-w-md mx-auto bg-white dark:bg-stone-800 rounded-xl shadow-sm border border-stone-200 dark:border-stone-700 mb-6 overflow-hidden text-left">
          <div className="bg-stone-100 dark:bg-stone-900 p-3 border-b border-stone-200 dark:border-stone-700">
            <div className="text-sm"><span className="text-stone-500">Od:</span> <span className="font-medium text-stone-800 dark:text-stone-200">Twój Bank &lt;bezpieczenstwo@bnk-pko.pl&gt;</span></div>
            <div className="text-sm mt-1"><span className="text-stone-500">Temat:</span> <span className="font-bold text-stone-800 dark:text-stone-200 text-rose-500">PILNE: Zablokowane konto!</span></div>
          </div>
          <div className="p-4 text-stone-700 dark:text-stone-300 text-sm">
            Drogi Kliencie,<br/><br/>Wykryliśmy podejrzane logowanie. Twoje konto zostało tymczasowo zablokowane. Kliknij poniższy link, aby je odblokować:<br/><br/>
            <div className="text-center mt-4 mb-2">
              <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg font-medium">Odblokuj konto teraz</span>
            </div>
          </div>
        </div>
      );
    case 'email_safe':
      return (
        <div className="w-full max-w-md mx-auto bg-white dark:bg-stone-800 rounded-xl shadow-sm border border-stone-200 dark:border-stone-700 mb-6 overflow-hidden text-left">
          <div className="bg-stone-100 dark:bg-stone-900 p-3 border-b border-stone-200 dark:border-stone-700">
            <div className="text-sm"><span className="text-stone-500">Od:</span> <span className="font-medium text-stone-800 dark:text-stone-200">Twój Bank &lt;powiadomienia@mojbank.pl&gt;</span></div>
            <div className="text-sm mt-1"><span className="text-stone-500">Temat:</span> <span className="font-medium text-stone-800 dark:text-stone-200">Wyciąg z konta za ubiegły miesiąc</span></div>
          </div>
          <div className="p-4 text-stone-700 dark:text-stone-300 text-sm">
            Drogi Kliencie,<br/><br/>Informujemy, że w systemie bankowości internetowej czeka na Ciebie wyciąg z konta za ubiegły miesiąc.<br/><br/>Zaloguj się na swoje konto na stronie <strong>www.mojbank.pl</strong>, aby go pobrać.<br/><br/>Pozdrawiamy,<br/>Zespół Twojego Banku
          </div>
        </div>
      );
    case 'sms_phishing':
      return (
        <div className="w-64 mx-auto bg-stone-100 dark:bg-stone-800 rounded-3xl p-4 mb-6 shadow-md border-4 border-stone-300 dark:border-stone-700 relative text-left">
          <div className="text-center text-xs text-stone-500 mb-4">Dzisiaj 14:30</div>
          <div className="bg-blue-500 text-white p-3 rounded-2xl rounded-tl-sm text-sm shadow-sm">
            Twoja paczka zostala wstrzymana z powodu niedoplaty 2,50 PLN. Prosimy o uregulowanie naleznosci: <span className="underline text-blue-200">https://poczta-polska-doplata.com/pay</span>
          </div>
        </div>
      );
    case 'sms_safe':
      return (
        <div className="w-64 mx-auto bg-stone-100 dark:bg-stone-800 rounded-3xl p-4 mb-6 shadow-md border-4 border-stone-300 dark:border-stone-700 relative text-left">
          <div className="text-center text-xs text-stone-500 mb-4">Dzisiaj 14:30</div>
          <div className="bg-blue-500 text-white p-3 rounded-2xl rounded-tl-sm text-sm shadow-sm">
            Twoja paczka od nadawcy SKLEP_XYZ zostala doreczona do paczkomatu WAW123. Kod odbioru: 123456. Paczka czeka 48h.
          </div>
        </div>
      );
    case 'sms_phishing_highlighted':
      return (
        <div className="w-64 mx-auto bg-stone-100 dark:bg-stone-800 rounded-3xl p-4 mb-6 shadow-md border-4 border-stone-300 dark:border-stone-700 relative text-left">
          <div className="text-center text-xs text-stone-500 mb-4">Dzisiaj 14:30</div>
          <div className="bg-blue-500 text-white p-3 rounded-2xl rounded-tl-sm text-sm shadow-sm">
            Twoja paczka zostala wstrzymana z powodu niedoplaty 2,50 PLN. Prosimy o uregulowanie naleznosci: <span className="underline text-rose-300 font-bold bg-rose-900/50 px-1 rounded ring-2 ring-rose-400 animate-pulse">https://poczta-polska-doplata.com/pay</span>
          </div>
        </div>
      );
    case 'social_media_post':
      return (
        <div className="w-full max-w-sm mx-auto bg-white dark:bg-stone-800 rounded-xl shadow-sm border border-stone-200 dark:border-stone-700 mb-6 overflow-hidden text-left">
          <div className="p-4 flex items-center gap-3 border-b border-stone-100 dark:border-stone-700">
            <div className="w-10 h-10 rounded-full bg-stone-200 dark:bg-stone-700 flex items-center justify-center overflow-hidden">
              <img src="https://picsum.photos/seed/influencer/100/100" alt="Profile" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div>
              <div className="font-bold text-stone-800 dark:text-stone-200 text-sm">Znany Influencer</div>
              <div className="text-xs text-stone-500 dark:text-stone-400">Sponsorowane</div>
            </div>
          </div>
          <div className="p-4 text-sm text-stone-700 dark:text-stone-300">
            <p className="mb-2">🎉 ROZDAJĘ 100 NAJNOWSZYCH IPHONE'ÓW! 🎉</p>
            <p className="mb-2">Z okazji moich urodzin przygotowałem dla Was niespodziankę! Pierwsze 100 osób, które kliknie w link i opłaci koszty wysyłki (tylko 9,99 zł), otrzyma najnowszego iPhone'a!</p>
            <p className="text-blue-500 dark:text-blue-400 font-medium">👉 kliknij-tutaj-aby-odebrac-nagrode.com/giveaway</p>
          </div>
          <div className="bg-stone-100 dark:bg-stone-900 p-3 flex justify-between text-stone-500 dark:text-stone-400 text-xs">
            <span>❤️ 12 tys.</span>
            <span>💬 4.5 tys. komentarzy</span>
          </div>
        </div>
      );
    case 'social_media_post_safe':
      return (
        <div className="w-full max-w-sm mx-auto bg-white dark:bg-stone-800 rounded-xl shadow-sm border border-stone-200 dark:border-stone-700 mb-6 overflow-hidden text-left">
          <div className="p-4 flex items-center gap-3 border-b border-stone-100 dark:border-stone-700">
            <div className="w-10 h-10 rounded-full bg-stone-200 dark:bg-stone-700 flex items-center justify-center overflow-hidden">
              <img src="https://picsum.photos/seed/techbrand/100/100" alt="Profile" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div>
              <div className="font-bold text-stone-800 dark:text-stone-200 text-sm">Oficjalny Sklep Tech</div>
              <div className="text-xs text-stone-500 dark:text-stone-400">2 godz. temu</div>
            </div>
          </div>
          <div className="p-4 text-sm text-stone-700 dark:text-stone-300">
            <p className="mb-2">Nowa kolekcja już dostępna! 🚀</p>
            <p className="mb-2">Sprawdź nasze najnowsze akcesoria do smartfonów. Dla pierwszych 50 klientów z kodem "NOWOSC" darmowa dostawa.</p>
            <p className="text-blue-500 dark:text-blue-400 font-medium">👉 oficjalnyskleptech.pl/nowosci</p>
          </div>
          <div className="bg-stone-100 dark:bg-stone-900 p-3 flex justify-between text-stone-500 dark:text-stone-400 text-xs">
            <span>❤️ 342</span>
            <span>💬 12 komentarzy</span>
          </div>
        </div>
      );
    case 'app_permissions_unsafe':
      return (
        <div className="w-64 mx-auto bg-white dark:bg-stone-800 rounded-3xl p-4 mb-6 shadow-xl border border-stone-200 dark:border-stone-700 relative text-left">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-stone-100 dark:bg-stone-700 rounded-xl flex items-center justify-center">
              <span className="text-2xl">🔦</span>
            </div>
            <div>
              <div className="font-bold text-stone-800 dark:text-stone-200">Super Latarka</div>
              <div className="text-xs text-stone-500 dark:text-stone-400">Prosi o dostęp</div>
            </div>
          </div>
          <div className="space-y-3 text-sm text-stone-700 dark:text-stone-300">
            <div className="flex items-center gap-2 text-rose-500 font-medium">
              <AlertTriangle className="w-4 h-4" />
              <span>Kontakty</span>
            </div>
            <div className="flex items-center gap-2 text-rose-500 font-medium">
              <AlertTriangle className="w-4 h-4" />
              <span>Lokalizacja</span>
            </div>
            <div className="flex items-center gap-2 text-rose-500 font-medium">
              <AlertTriangle className="w-4 h-4" />
              <span>Mikrofon</span>
            </div>
          </div>
          <div className="mt-6 flex gap-2">
            <button className="flex-1 py-2 bg-stone-200 dark:bg-stone-700 text-stone-800 dark:text-stone-200 rounded-lg font-medium text-sm">Odmów</button>
            <button className="flex-1 py-2 bg-blue-500 text-white rounded-lg font-medium text-sm">Zezwól</button>
          </div>
        </div>
      );
    case 'app_permissions_safe':
      return (
        <div className="w-64 mx-auto bg-white dark:bg-stone-800 rounded-3xl p-4 mb-6 shadow-xl border border-stone-200 dark:border-stone-700 relative text-left">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-stone-100 dark:bg-stone-700 rounded-xl flex items-center justify-center">
              <span className="text-2xl">🗺️</span>
            </div>
            <div>
              <div className="font-bold text-stone-800 dark:text-stone-200">Nawigacja GPS</div>
              <div className="text-xs text-stone-500 dark:text-stone-400">Prosi o dostęp</div>
            </div>
          </div>
          <div className="space-y-3 text-sm text-stone-700 dark:text-stone-300">
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 flex items-center justify-center">📍</span>
              <span>Lokalizacja (podczas używania)</span>
            </div>
          </div>
          <div className="mt-6 flex gap-2">
            <button className="flex-1 py-2 bg-stone-200 dark:bg-stone-700 text-stone-800 dark:text-stone-200 rounded-lg font-medium text-sm">Odmów</button>
            <button className="flex-1 py-2 bg-blue-500 text-white rounded-lg font-medium text-sm">Zezwól</button>
          </div>
        </div>
      );
    case 'wifi_network_unsafe':
      return (
        <div className="w-64 mx-auto bg-white dark:bg-stone-800 rounded-3xl p-4 mb-6 shadow-xl border border-stone-200 dark:border-stone-700 relative text-left">
          <div className="font-bold text-stone-800 dark:text-stone-200 mb-4">Wybierz sieć Wi-Fi</div>
          <div className="space-y-2">
            <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <span className="text-xl">📶</span>
                <div>
                  <div className="font-medium text-stone-800 dark:text-stone-200 text-sm">Darmowe_WiFi_Kawiarnia</div>
                  <div className="text-xs text-rose-500 font-medium">Niezabezpieczona sieć</div>
                </div>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 flex justify-between items-center opacity-50">
              <div className="flex items-center gap-3">
                <span className="text-xl">📶</span>
                <div>
                  <div className="font-medium text-stone-800 dark:text-stone-200 text-sm">Domowa_Siec_5G</div>
                  <div className="text-xs text-stone-500 dark:text-stone-400">Zabezpieczona</div>
                </div>
              </div>
              <Lock className="w-4 h-4 text-stone-400" />
            </div>
          </div>
        </div>
      );
    case 'wifi_network_safe':
      return (
        <div className="w-64 mx-auto bg-white dark:bg-stone-800 rounded-3xl p-4 mb-6 shadow-xl border border-stone-200 dark:border-stone-700 relative text-left">
          <div className="font-bold text-stone-800 dark:text-stone-200 mb-4">Wybierz sieć Wi-Fi</div>
          <div className="space-y-2">
            <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <span className="text-xl">📶</span>
                <div>
                  <div className="font-medium text-stone-800 dark:text-stone-200 text-sm">Domowa_Siec_5G</div>
                  <div className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">Zabezpieczona (WPA3)</div>
                </div>
              </div>
              <Lock className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="p-3 rounded-xl bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 flex justify-between items-center opacity-50">
              <div className="flex items-center gap-3">
                <span className="text-xl">📶</span>
                <div>
                  <div className="font-medium text-stone-800 dark:text-stone-200 text-sm">Darmowe_WiFi_Kawiarnia</div>
                  <div className="text-xs text-stone-500 dark:text-stone-400">Niezabezpieczona</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    default: return null;
  }
};
