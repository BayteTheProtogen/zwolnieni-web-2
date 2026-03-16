export type QuestionInfo = {
  id: string;
  type: 'info';
  title: string;
  content: string;
  icon?: 'smartphone' | 'shield' | 'key' | 'mail' | 'globe' | 'alert-triangle' | 'lock';
  uiMockup?: 'browser_address_bar' | 'authenticator_app' | 'yubikey' | 'notification' | 'password_input' | 'email_phishing' | 'sms_phishing' | 'sms_phishing_highlighted';
};

export type QuestionMultipleChoice = {
  id: string;
  type: 'multiple_choice';
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
};

export type QuestionFillBlank = {
  id: string;
  type: 'fill_blank';
  textBefore: string;
  textAfter: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
};

export type QuestionMatch = {
  id: string;
  type: 'match';
  instruction: string;
  pairs: { left: string; right: string }[];
  explanation: string;
};

export type QuestionScenario = {
  id: string;
  type: 'scenario';
  title: string;
  scenarioText: string;
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
    feedback: string;
  }[];
  explanation: string;
};

export type QuestionClickElement = {
  id: string;
  type: 'click_element';
  title: string;
  instruction: string;
  uiType: 'email' | 'sms' | 'browser_warning';
  uiData: {
    sender?: string;
    subject?: string;
    body?: string;
    linkText?: string;
    linkUrl?: string;
    warningTitle?: string;
    warningText?: string;
    buttonAccept?: string;
    buttonDecline?: string;
  };
  correctElementId: string;
  elementsFeedback: Record<string, string>; // e.g. { 'sender': 'To zły nadawca!', 'link': 'Ten link jest podejrzany' }
  explanation: string;
};

export type QuestionOrder = {
  id: string;
  type: 'order';
  instruction: string;
  items: string[]; // The items in the correct order
  explanation: string;
};

export type QuestionTrueFalse = {
  id: string;
  type: 'true_false';
  statement: string;
  isTrue: boolean;
  explanation: string;
};

export type QuestionVisualChoice = {
  id: string;
  type: 'visual_choice';
  question: string;
  options: {
    id: string;
    uiMockup: string;
    isCorrect: boolean;
    feedback?: string;
  }[];
  explanation: string;
};

export type Question = QuestionInfo | QuestionMultipleChoice | QuestionFillBlank | QuestionMatch | QuestionScenario | QuestionClickElement | QuestionOrder | QuestionTrueFalse | QuestionVisualChoice;

export type Lesson = {
  id: string;
  moduleId: string;
  title: string;
  description: string;
  questions: Question[];
};

export const lessons: Lesson[] = [
  // MODULE: PODSTAWY
  {
    id: 'podstawy_1',
    moduleId: 'podstawy',
    title: 'Czym jest Internet i Przeglądarka?',
    description: 'Zrozum podstawowe pojęcia, bez których nie da się korzystać z sieci.',
    questions: [
      {
        id: 'i1_info',
        type: 'info',
        title: 'Co to jest Internet?',
        content: 'Internet to ogromna, ogólnoświatowa sieć połączonych ze sobą komputerów. Wyobraź sobie to jako gigantyczną sieć dróg, po których zamiast samochodów podróżują informacje: teksty, zdjęcia, filmy i wiadomości. Dzięki temu Twój telefon lub komputer może "rozmawiać" z komputerami na drugim końcu świata.'
      },
      {
        id: 'i1_info_2',
        type: 'info',
        title: 'Czym jest Przeglądarka?',
        content: 'Przeglądarka internetowa to specjalny program w Twoim telefonie lub komputerze, który służy do przeglądania stron w internecie. To tak jakby okno, przez które patrzysz na internet. Najpopularniejsze przeglądarki to Google Chrome, Safari (na iPhone), Firefox czy Microsoft Edge.'
      },
      {
        id: 'i1_info_3',
        type: 'info',
        title: 'Adres strony internetowej',
        content: 'Każda strona w internecie ma swój unikalny adres, podobnie jak każdy dom ma swój adres pocztowy. Adres ten wpisujemy na samej górze przeglądarki, w tak zwanym "pasku adresu". Przykładem adresu jest "www.google.pl" albo "www.onet.pl".',
        uiMockup: 'browser_address_bar'
      },
      {
        id: 'i1_mc',
        type: 'multiple_choice',
        question: 'Do czego służy przeglądarka internetowa?',
        options: ['Do robienia zdjęć', 'Do przeglądania stron internetowych', 'Do dzwonienia do znajomych'],
        correctAnswerIndex: 1,
        explanation: 'Przeglądarka (np. Chrome, Safari) to program, który pozwala Ci otwierać i czytać strony w internecie.'
      },
      {
        id: 'i1_fill',
        type: 'fill_blank',
        textBefore: 'Aby wejść na konkretną stronę, musisz wpisać jej',
        textAfter: 'w pasku na samej górze przeglądarki.',
        options: ['adres', 'hasło', 'numer telefonu'],
        correctAnswer: 'adres',
        explanation: 'Każda strona ma swój unikalny adres (np. www.wp.pl), który wpisujemy w pasek adresu.'
      }
    ]
  },
  {
    id: 'podstawy_2',
    moduleId: 'podstawy',
    title: 'Co to jest Link (Odnośnik)?',
    description: 'Dowiedz się, czym są linki i jak bezpiecznie w nie klikać.',
    questions: [
      {
        id: 'lk1_info',
        type: 'info',
        title: 'Czym jest Link?',
        content: 'Link (inaczej odnośnik) to specjalny, zazwyczaj podkreślony lub pokolorowany na niebiesko tekst, w który można kliknąć. Kliknięcie w link to jak wejście przez drzwi do innego pokoju - natychmiast przenosi Cię na inną stronę internetową, do innego artykułu lub obrazka.'
      },
      {
        id: 'lk1_info_2',
        type: 'info',
        title: 'Jak wygląda link?',
        content: 'Link może wyglądać jak zwykły tekst, np. "Kliknij tutaj, aby przeczytać więcej", ale pod spodem ukryty jest dokładny adres strony internetowej (np. https://www.przyklad.pl). Linkiem może być też obrazek lub przycisk.'
      },
      {
        id: 'lk1_info_3',
        type: 'info',
        title: 'Dlaczego linki bywają niebezpieczne?',
        content: 'Oszuści często wysyłają fałszywe linki w SMS-ach lub e-mailach. Tekst linku może mówić "Strona Twojego Banku", ale po kliknięciu przeniesie Cię na stronę stworzoną przez złodzieja, która tylko udaje Twój bank. Dlatego zawsze trzeba uważać, w co się klika!',
        uiMockup: 'sms_phishing'
      },
      {
        id: 'lk1_mc',
        type: 'multiple_choice',
        question: 'Co się stanie, gdy klikniesz w link (odnośnik)?',
        options: ['Mój komputer się wyłączy', 'Zostanę przeniesiony na inną stronę internetową', 'Zostanie wysłany SMS'],
        correctAnswerIndex: 1,
        explanation: 'Link to po prostu skrót, który po kliknięciu otwiera nową stronę w Twojej przeglądarce.'
      },
      {
        id: 'lk1_fill',
        type: 'fill_blank',
        textBefore: 'Nigdy nie klikaj w',
        textAfter: 'od nieznajomych osób w SMS-ach lub e-mailach.',
        options: ['linki', 'zdjęcia', 'przyciski'],
        correctAnswer: 'linki',
        explanation: 'Fałszywe linki to najczęstszy sposób, w jaki oszuści kradną dane. Zawsze zachowuj ostrożność!'
      },
      {
        id: 'lk1_vc',
        type: 'visual_choice',
        question: 'Który adres strony banku wygląda na bezpieczny i prawdziwy?',
        options: [
          {
            id: 'opt1',
            uiMockup: 'browser_address_bar_unsafe',
            isCorrect: false,
            feedback: 'Zwróć uwagę na brak kłódki i "http" zamiast "https". To połączenie nie jest szyfrowane!'
          },
          {
            id: 'opt2',
            uiMockup: 'browser_address_bar_typo',
            isCorrect: false,
            feedback: 'Zauważ literówkę w nazwie banku ("m0jbank" zamiast "mojbank"). To częsta sztuczka oszustów!'
          },
          {
            id: 'opt3',
            uiMockup: 'browser_address_bar',
            isCorrect: true,
            feedback: 'Świetnie! Adres zaczyna się od "https" (jest kłódka), a nazwa banku jest napisana poprawnie.'
          }
        ],
        explanation: 'Zawsze sprawdzaj dokładnie adres strony, na której podajesz swoje dane. Szukaj kłódki (https) i uważaj na literówki.'
      }
    ]
  },
  {
    id: 'podstawy_3_new',
    moduleId: 'podstawy',
    title: 'Aplikacje i Programy',
    description: 'Czym różni się strona internetowa od aplikacji na telefonie?',
    questions: [
      {
        id: 'app1_info',
        type: 'info',
        title: 'Strona vs Aplikacja',
        content: 'Stronę internetową (np. onet.pl) otwierasz w przeglądarce. Aplikacja to osobny program, który instalujesz na swoim telefonie (np. aplikacja banku, WhatsApp, YouTube). Aplikacje są często szybsze i wygodniejsze w użyciu na małym ekranie.',
        icon: 'smartphone'
      },
      {
        id: 'app1_tf',
        type: 'true_false',
        statement: 'Aplikacje na telefon można bezpiecznie pobierać z dowolnej strony internetowej, którą znajdziemy w Google.',
        isTrue: false,
        explanation: 'Aplikacje należy pobierać TYLKO z oficjalnych sklepów: Google Play (dla Androida) lub App Store (dla iPhone). Pobieranie ich z innych stron to ogromne ryzyko zainstalowania wirusa!'
      }
    ]
  },
  {
    id: 'podstawy_3',
    moduleId: 'hasla',
    title: 'Bezpieczne Hasła',
    description: 'Jak tworzyć silne hasła i dlaczego to ważne.',
    questions: [
      {
        id: 'q1_info',
        type: 'info',
        title: 'Dlaczego hasło jest ważne?',
        content: 'Hasło to Twój wirtualny klucz do domu. Jeśli będzie zbyt proste, złodziej łatwo je odgadnie i wejdzie do środka. Wyobraź sobie, że używasz hasła "123456" - to tak, jakbyś zostawił klucz w zamku. Hakerzy używają specjalnych programów, które potrafią odgadnąć takie hasło w ułamek sekundy!'
      },
      {
        id: 'q1_info_2',
        type: 'info',
        title: 'Złota zasada tworzenia haseł',
        content: 'Najlepsze hasło to takie, które jest łatwe do zapamiętania dla Ciebie, ale trudne do odgadnięcia dla innych. Zamiast wymyślać skomplikowane ciągi znaków jak "xQ9#mP!2", spróbuj stworzyć zdanie, np. "MojPiesBurekLubiBiegacWParku!". Takie hasło jest bardzo długie, co czyni je niezwykle bezpiecznym.',
        uiMockup: 'password_input'
      },
      {
        id: 'q1',
        type: 'multiple_choice',
        question: 'Które z tych haseł jest najbezpieczniejsze?',
        options: ['123456', 'imie123', 'Mruczek!2024#', 'haslo'],
        correctAnswerIndex: 2,
        explanation: 'Dobre hasło powinno zawierać duże i małe litery, cyfry oraz znaki specjalne (np. !, #, ?).'
      },
      {
        id: 'q1_fill',
        type: 'fill_blank',
        textBefore: 'Dobre hasło powinno być',
        textAfter: 'oraz zawierać znaki specjalne.',
        options: ['krótkie', 'długie', 'łatwe'],
        correctAnswer: 'długie',
        explanation: 'Im dłuższe hasło, tym trudniej je złamać oszustom.'
      }
    ]
  },
  {
    id: 'podstawy_4',
    moduleId: 'hasla',
    title: 'Menedżery Haseł',
    description: 'Jak zapamiętać dziesiątki trudnych haseł? Użyj menedżera!',
    questions: [
      {
        id: 'm1_info',
        type: 'info',
        title: 'Problem z wieloma hasłami',
        content: 'Eksperci radzą, aby do każdej strony w internecie mieć INNE hasło. Jeśli używasz tego samego hasła wszędzie, wyciek danych z jednej strony sprawi, że oszuści wejdą na wszystkie Twoje konta. Ale jak zapamiętać 50 różnych, trudnych haseł? To niemożliwe dla ludzkiego mózgu.',
        icon: 'lock'
      },
      {
        id: 'm1_info_2',
        type: 'info',
        title: 'Rozwiązanie: Menedżer Haseł',
        content: 'Menedżer haseł to specjalny, bardzo bezpieczny program (często wbudowany w Twój telefon lub przeglądarkę Google Chrome/Apple Safari), który działa jak cyfrowy sejf. Zapisuje on wszystkie Twoje hasła i automatycznie wpisuje je na stronach.',
        uiMockup: 'password_input'
      },
      {
        id: 'm1_info_3',
        type: 'info',
        title: 'Tylko jedno hasło do zapamiętania',
        content: 'Korzystając z menedżera haseł, musisz zapamiętać tylko JEDNO, główne hasło (tzw. hasło główne), które otwiera Twój sejf. Resztę haseł menedżer wymyśli i zapamięta za Ciebie. Często zamiast hasła głównego możesz użyć odcisku palca lub skanowania twarzy w telefonie.'
      },
      {
        id: 'm1_mc',
        type: 'multiple_choice',
        question: 'Do czego służy menedżer haseł?',
        options: ['Do usuwania wirusów z komputera', 'Do bezpiecznego przechowywania i wymyślania haseł', 'Do przyspieszania działania internetu'],
        correctAnswerIndex: 1,
        explanation: 'Menedżer haseł to cyfrowy sejf, który pamięta wszystkie Twoje hasła, więc Ty nie musisz.'
      },
      {
        id: 'm1_match',
        type: 'match',
        instruction: 'Dopasuj pojęcia związane z hasłami:',
        pairs: [
          { left: 'Jedno hasło do wszystkiego', right: 'Bardzo niebezpieczne' },
          { left: 'Różne hasła do każdej strony', right: 'Bardzo bezpieczne' },
          { left: 'Menedżer haseł', right: 'Program, który pamięta hasła za Ciebie' }
        ],
        explanation: 'Menedżer haseł to najlepszy sposób na posiadanie różnych, trudnych haseł bez konieczności ich pamiętania.'
      }
    ]
  },
  {
    id: 'podstawy_5',
    moduleId: 'hasla',
    title: 'Uwierzytelnianie Dwuskładnikowe (2FA)',
    description: 'Dodatkowa kłódka na Twoim koncie. Dowiedz się, jak działa 2FA.',
    questions: [
      {
        id: 'q3_info',
        type: 'info',
        title: 'Co to jest 2FA?',
        content: 'Uwierzytelnianie dwuskładnikowe (w skrócie 2FA) to jak drugi zamek w drzwiach. Nawet jeśli oszust pozna Twoje hasło (pierwszy zamek), nie wejdzie na Twoje konto, bo będzie potrzebował drugiego klucza (drugiego zamka) – np. jednorazowego kodu z SMS-a, który przyjdzie tylko na Twój telefon.',
        uiMockup: 'authenticator_app'
      },
      {
        id: 'q3_info_2',
        type: 'info',
        title: 'Dlaczego samo hasło to za mało?',
        content: 'W dzisiejszych czasach wycieki danych z różnych serwisów zdarzają się bardzo często. 2FA sprawia, że skradzione hasło staje się bezużyteczne dla oszusta, ponieważ nie ma on Twojego telefonu w ręku.',
        uiMockup: 'yubikey'
      },
      {
        id: 'q3_mc',
        type: 'multiple_choice',
        question: 'Dlaczego warto włączyć uwierzytelnianie dwuskładnikowe (2FA)?',
        options: ['Żeby szybciej logować się na konto', 'Żeby chronić konto, nawet gdy ktoś pozna moje hasło', 'Żeby nie musieć pamiętać hasła'],
        correctAnswerIndex: 1,
        explanation: '2FA to dodatkowa warstwa ochrony. Hasło może wyciec, ale Twój telefon masz zawsze przy sobie.'
      },
      {
        id: 'q3_fill',
        type: 'fill_blank',
        textBefore: 'Uwierzytelnianie dwuskładnikowe to jak drugi',
        textAfter: 'w drzwiach do Twojego konta.',
        options: ['zamek', 'dzwonek', 'wizjer'],
        correctAnswer: 'zamek',
        explanation: 'Dwa zamki (hasło + kod z telefonu) to zawsze więcej bezpieczeństwa niż jeden.'
      }
    ]
  },
  {
    id: 'podstawy_6',
    moduleId: 'hasla',
    title: 'Podejrzane SMS-y',
    description: 'Jak rozpoznać oszustwo w wiadomości SMS.',
    questions: [
      {
        id: 'q2_info',
        type: 'info',
        title: 'Uwaga na linki w SMS-ach!',
        content: 'Oszuści często wysyłają SMS-y z linkami, udając kuriera, bank lub elektrownię. Wiadomości te często mają na celu wywołanie u Ciebie strachu (np. "Twoje konto zostanie zablokowane") lub pośpiechu (np. "Dopłać 1,50 zł w ciągu 2 godzin, inaczej paczka wróci").',
        uiMockup: 'sms_phishing'
      },
      {
        id: 'q2_info_2',
        type: 'info',
        title: 'Jak się bronić przed fałszywymi SMS-ami?',
        content: 'Złota zasada brzmi: NIGDY nie klikaj w linki z podejrzanych SMS-ów! Jeśli dostaniesz wiadomość od "banku", nie używaj linku z SMS-a. Zamiast tego, samodzielnie wpisz adres strony banku w przeglądarce lub użyj oficjalnej aplikacji na telefonie.'
      },
      {
        id: 'q3',
        type: 'multiple_choice',
        question: 'Dostajesz SMS: "Twoja paczka została wstrzymana. Dopłać 1,50 zł przez ten link...". Co robisz?',
        options: ['Klikam w link i płacę', 'Ignoruję i kasuję wiadomość', 'Odpisuję, że to pomyłka'],
        correctAnswerIndex: 1,
        explanation: 'To popularne oszustwo "na paczkę". Oszuści chcą wyłudzić dane Twojej karty płatniczej.'
      },
      {
        id: 'q2_match',
        type: 'match',
        instruction: 'Dopasuj nadawcę SMS-a do właściwej reakcji:',
        pairs: [
          { left: 'Nieznany numer z linkiem', right: 'Kasuję wiadomość' },
          { left: 'Bank prosi o hasło w SMS', right: 'To oszustwo, bank nigdy o to nie prosi' },
          { left: 'Znajomy prosi o BLIK', right: 'Dzwonię do niego, by potwierdzić' }
        ],
        explanation: 'Zawsze zachowuj ostrożność, gdy ktoś prosi Cię o pieniądze lub dane przez SMS.'
      }
    ]
  },

  {
    id: 'hasla_5',
    moduleId: 'hasla',
    title: 'Odzyskiwanie hasła',
    description: 'Co zrobić, gdy zapomnisz hasła do swojego konta.',
    questions: [
      {
        id: 'h5_info',
        type: 'info',
        title: 'Nie panikuj!',
        content: 'Każdemu zdarza się zapomnieć hasła. Prawie każdy serwis internetowy (poczta, bank, sklep) posiada funkcję "Zapomniałem hasła" lub "Odzyskaj hasło". Zazwyczaj znajduje się ona tuż pod polem do wpisywania hasła.',
        icon: 'key'
      },
      {
        id: 'h5_order',
        type: 'order',
        instruction: 'Wybierz w odpowiedniej kolejności kroki odzyskiwania zapomnianego hasła:',
        items: [
          'Klikam w link "Zapomniałem hasła" na stronie logowania',
          'Wpisuję swój adres e-mail (lub numer telefonu) powiązany z kontem',
          'Odbieram wiadomość e-mail z linkiem do resetowania hasła',
          'Klikam w link z wiadomości e-mail',
          'Wpisuję nowe, bezpieczne hasło dwukrotnie',
          'Loguję się na konto używając nowego hasła'
        ],
        explanation: 'Proces odzyskiwania hasła zawsze opiera się na potwierdzeniu Twojej tożsamości poprzez e-mail lub SMS, do którego tylko Ty masz dostęp.'
      }
    ]
  },
  // MODULE: BEZPIECZNE SURFOWANIE
  {
    id: 'surf_1',
    moduleId: 'bezpieczne_surfowanie',
    title: 'Bezpieczne Strony (Kłódka i HTTPS)',
    description: 'Jak sprawdzić, czy strona internetowa jest bezpieczna.',
    questions: [
      {
        id: 's1_info',
        type: 'info',
        title: 'Szukaj zamkniętej kłódki',
        content: 'Zanim podasz gdzieś swoje hasło, imię, nazwisko lub dane karty płatniczej, spójrz na pasek adresu na samej górze ekranu (tam, gdzie wpisujesz www...). Jeśli widzisz tam małą, zamkniętą kłódkę, oznacza to, że połączenie jest szyfrowane.',
        uiMockup: 'browser_address_bar'
      },
      {
        id: 's1_info_2',
        type: 'info',
        title: 'Co oznacza HTTPS?',
        content: 'HTTPS to początek adresu bezpiecznej strony (np. https://www.bank.pl). Litera "S" na końcu oznacza "Secure" (Bezpieczny). Oznacza to, że nikt w internecie nie może podsłuchać tego, co wpisujesz na tej stronie ani ukraść Twoich "ciasteczek" (plików cookie), które służą do logowania. Jeśli strona ma samo "http://" (bez S), nie wpisuj tam żadnych haseł!'
      },
      {
        id: 's1_info_3',
        type: 'info',
        title: 'Kłódka to nie wszystko!',
        content: 'Pamiętaj: zamknięta kłódka oznacza tylko, że nikt nie podsłuchuje. Nie gwarantuje to, że sama strona jest uczciwa! Oszuści również mogą założyć szyfrowaną stronę dla swojego fałszywego sklepu. Zawsze sprawdzaj dokładnie adres strony.'
      },
      {
        id: 's1_fill',
        type: 'fill_blank',
        textBefore: 'Bezpieczna strona internetowa powinna mieć w adresie zamkniętą',
        textAfter: 'oraz zaczynać się od liter HTTPS.',
        options: ['kłódkę', 'kopertę', 'gwiazdkę'],
        correctAnswer: 'kłódkę',
        explanation: 'Kłódka oznacza, że Twoje dane (np. hasła) są przesyłane w bezpieczny, zaszyfrowany sposób.'
      },
      {
        id: 's1_mc',
        type: 'multiple_choice',
        question: 'Co oznacza litera "S" w adresie HTTPS?',
        options: ['Szybki (Speed)', 'Bezpieczny (Secure)', 'Specjalny (Special)'],
        correctAnswerIndex: 1,
        explanation: 'S oznacza Secure, czyli bezpieczne, szyfrowane połączenie.'
      }
    ]
  },
  {
    id: 'surf_2',
    moduleId: 'bezpieczne_surfowanie',
    title: 'Publiczne Wi-Fi',
    description: 'Dlaczego darmowy internet w kawiarni bywa groźny.',
    questions: [
      {
        id: 's2_info',
        type: 'info',
        title: 'Uwaga na darmowe Wi-Fi!',
        content: 'Darmowe, otwarte sieci Wi-Fi w kawiarniach, pociągach czy na lotniskach są bardzo wygodne, ale niosą ze sobą ryzyko. Ponieważ sieć nie jest zabezpieczona hasłem, każdy, kto jest do niej podłączony (w tym potencjalny oszust siedzący stolik obok), może "podsłuchać" to, co robisz w internecie.'
      },
      {
        id: 's2_info_2',
        type: 'info',
        title: 'Czego unikać w publicznym Wi-Fi?',
        content: 'Korzystając z otwartej sieci Wi-Fi, nigdy nie loguj się do banku, nie rób zakupów online (nie podawaj danych karty) i unikaj logowania do ważnych kont (np. głównej poczty e-mail). Do czytania wiadomości czy oglądania filmów darmowe Wi-Fi jest w porządku.'
      },
      {
        id: 's2_info_3',
        type: 'info',
        title: 'Jak bezpiecznie korzystać z banku poza domem?',
        content: 'Jeśli musisz sprawdzić konto w banku będąc w kawiarni, wyłącz Wi-Fi w telefonie i skorzystaj z internetu od swojego operatora komórkowego (LTE/5G). Jest on znacznie bezpieczniejszy niż darmowe Wi-Fi.'
      },
      {
        id: 's2_mc',
        type: 'multiple_choice',
        question: 'Czego NIE POWINNO się robić, korzystając z darmowego Wi-Fi w kawiarni?',
        options: ['Czytać wiadomości ze świata', 'Oglądać śmiesznych kotów na YouTube', 'Logować się do swojego banku'],
        correctAnswerIndex: 2,
        explanation: 'Darmowe Wi-Fi może być podsłuchiwane przez oszustów. Nigdy nie loguj się do banku w takich sieciach.'
      },
      {
        id: 's2_match',
        type: 'match',
        instruction: 'Dopasuj rodzaj sieci do bezpiecznej czynności:',
        pairs: [
          { left: 'Domowe, zabezpieczone Wi-Fi', right: 'Logowanie do banku i zakupy' },
          { left: 'Darmowe Wi-Fi w kawiarni', right: 'Czytanie wiadomości, oglądanie filmów' },
          { left: 'Internet z telefonu (LTE/5G)', right: 'Bezpieczny poza domem' }
        ],
        explanation: 'Do ważnych spraw używaj tylko zaufanego internetu w domu lub internetu z telefonu komórkowego.'
      },
      {
        id: 's2_vc',
        type: 'visual_choice',
        question: 'Którą sieć Wi-Fi powinieneś wybrać, jeśli chcesz zalogować się do banku?',
        options: [
          {
            id: 'opt1',
            uiMockup: 'wifi_network_unsafe',
            isCorrect: false,
            feedback: 'Nigdy nie loguj się do banku przez niezabezpieczoną, publiczną sieć Wi-Fi! Ktoś może przechwycić Twoje hasło.'
          },
          {
            id: 'opt2',
            uiMockup: 'wifi_network_safe',
            isCorrect: true,
            feedback: 'Świetnie! Domowa, zabezpieczona hasłem sieć Wi-Fi to bezpieczny wybór do logowania się do banku.'
          }
        ],
        explanation: 'Do ważnych operacji (bank, e-mail) używaj tylko zabezpieczonych sieci Wi-Fi lub internetu komórkowego (LTE/5G).'
      }
    ]
  },
  {
    id: 'surf_3',
    moduleId: 'bezpieczne_surfowanie',
    title: 'Co to jest VPN?',
    description: 'Twój prywatny tunel w internecie.',
    questions: [
      {
        id: 's3_info',
        type: 'info',
        title: 'Czym jest VPN?',
        content: 'VPN (z angielskiego Virtual Private Network, czyli Wirtualna Sieć Prywatna) to specjalny program lub aplikacja na telefon. Działa on jak ochronny tunel dla Twoich danych w internecie.'
      },
      {
        id: 's3_info_2',
        type: 'info',
        title: 'Jak działa VPN?',
        content: 'Wyobraź sobie, że wysyłasz list pocztą na zwykłej pocztówce - każdy listonosz może go przeczytać. To tak jak korzystanie z darmowego Wi-Fi. VPN działa tak, jakbyś włożył tę pocztówkę do pancernego, zamkniętego na kłódkę sejfu i dopiero wtedy wysłał. Nawet jeśli ktoś przechwyci sejf, nie przeczyta zawartości.'
      },
      {
        id: 's3_info_3',
        type: 'info',
        title: 'Kiedy warto używać VPN?',
        content: 'VPN jest niezwykle przydatny, gdy musisz skorzystać z publicznego, darmowego Wi-Fi (np. w hotelu za granicą), a chcesz bezpiecznie zalogować się do poczty lub banku. VPN szyfruje Twoje połączenie, ukrywając je przed oszustami.'
      },
      {
        id: 's3_mc',
        type: 'multiple_choice',
        question: 'Do czego służy VPN?',
        options: ['Do przyspieszania komputera', 'Do tworzenia bezpiecznego, szyfrowanego tunelu w internecie', 'Do robienia kopii zapasowych zdjęć'],
        correctAnswerIndex: 1,
        explanation: 'VPN szyfruje Twoje dane, chroniąc je przed podsłuchaniem, zwłaszcza w publicznych sieciach Wi-Fi.'
      },
      {
        id: 's3_fill',
        type: 'fill_blank',
        textBefore: 'VPN działa jak bezpieczny, szyfrowany',
        textAfter: 'przez który przesyłane są Twoje dane w internecie.',
        options: ['tunel', 'most', 'samolot'],
        correctAnswer: 'tunel',
        explanation: 'VPN tworzy niewidzialny tunel, który chroni Twoje dane przed wzrokiem innych.'
      }
    ]
  },
  {
    id: 'surf_4',
    moduleId: 'bezpieczne_surfowanie',
    title: 'Ochrona Danych Osobowych',
    description: 'Czym się dzielić, a co zachować dla siebie.',
    questions: [
      {
        id: 's4_info',
        type: 'info',
        title: 'Twoje dane są cenne',
        content: 'Numer PESEL, nazwisko panieńskie matki, numer dowodu osobistego czy dokładny adres zamieszkania to informacje, którymi nie należy bezmyślnie dzielić się w internecie. Oszuści mogą wykorzystać te dane do kradzieży tożsamości, np. wzięcia na Ciebie kredytu!'
      },
      {
        id: 's4_info_2',
        type: 'info',
        title: 'Zasada ograniczonego zaufania',
        content: 'Jeśli jakaś strona internetowa prosi Cię o podanie danych, zawsze zadaj sobie pytanie: "Czy oni naprawdę tego potrzebują?". Sklep internetowy potrzebuje Twojego adresu, by wysłać paczkę, ale nie potrzebuje Twojego numeru PESEL ani nazwiska panieńskiego matki!'
      },
      {
        id: 's4_match',
        type: 'match',
        instruction: 'Co jest bezpieczne do podania w internecie, a co nie?',
        pairs: [
          { left: 'Imię i adres do wysyłki', right: 'Można podać w zaufanym sklepie' },
          { left: 'Numer PESEL', right: 'Nigdy nie podawaj bez wyraźnej, urzędowej potrzeby' },
          { left: 'Hasło do banku', right: 'NIGDY i NIKOMU nie podawaj' }
        ],
        explanation: 'Zawsze zastanów się dwa razy, zanim wpiszesz swoje dane w formularzu w internecie.'
      }
    ]
  },
  {
    id: 'surf_5',
    moduleId: 'bezpieczne_surfowanie',
    title: 'Sztuczki Oszustów (Socjotechnika)',
    description: 'Jak oszuści manipulują naszymi emocjami.',
    questions: [
      {
        id: 's5_info',
        type: 'info',
        title: 'Oszustwa na litość i strach',
        content: 'Oszuści często dzwonią lub piszą, udając policjanta, pracownika banku lub kogoś z rodziny w potrzebie. Próbują wywołać w Tobie silny strach lub pośpiech, abyś przelał im pieniądze bez zastanowienia.'
      },
      {
        id: 's5_info_2',
        type: 'info',
        title: 'Metoda "na wnuczka" lub "na policjanta"',
        content: 'Oszust dzwoni, podając się za krewnego, który miał wypadek i pilnie potrzebuje gotówki, lub za policjanta prowadzącego tajną akcję. Pamiętaj: prawdziwa policja NIGDY nie prosi obywateli o przekazywanie pieniędzy!'
      },
      {
        id: 's5_info_3',
        type: 'info',
        title: 'Zasada 3 sekund',
        content: 'Zanim zareagujesz na alarmującą wiadomość lub telefon, weź głęboki oddech i odczekaj 3 sekundy. Zastanów się: "Czy to ma sens?". Jeśli ktoś podaje się za Twojego znajomego i prosi o przelew BLIK, zadzwoń do niego na numer telefonu, który znasz, aby to potwierdzić.',
        uiMockup: 'notification'
      },
      {
        id: 's5_fill',
        type: 'fill_blank',
        textBefore: 'Oszuści często próbują wywołać w nas',
        textAfter: ', abyśmy działali szybko i bez zastanowienia.',
        options: ['radość', 'strach', 'spokój'],
        correctAnswer: 'strach',
        explanation: 'Gdy się boimy lub spieszymy, łatwiej podejmujemy złe decyzje. Zawsze weź głęboki oddech i daj sobie czas na pomyślenie.'
      },
      {
        id: 's5_mc',
        type: 'multiple_choice',
        question: 'Dzwoni do Ciebie miły pan, podaje się za pracownika banku i prosi o podanie hasła, bo "Twoje konto zostało zablokowane". Co robisz?',
        options: ['Podaję hasło, żeby odblokować konto', 'Rozłączam się i sam dzwonię na oficjalny numer banku', 'Pytam go, jak ma na imię'],
        correctAnswerIndex: 1,
        explanation: 'Prawdziwy pracownik banku NIGDY nie zapyta Cię o Twoje hasło! Jeśli masz wątpliwości, zawsze rozłącz się i zadzwoń na numer podany na Twojej karcie płatniczej.'
      }
    ]
  },
  {
    id: 'surf_6',
    moduleId: 'bezpieczne_surfowanie',
    title: 'Pobieranie plików z internetu',
    description: 'Jak bezpiecznie ściągać programy i dokumenty.',
    questions: [
      {
        id: 's6_info',
        type: 'info',
        title: 'Uwaga na to, co pobierasz',
        content: 'Pobieranie plików z internetu to jak wpuszczanie nieznajomego do domu. Jeśli nie wiesz, skąd pochodzi plik, może on zawierać złośliwe oprogramowanie (wirusa), które uszkodzi Twój komputer lub ukradnie Twoje dane.',
        icon: 'alert-triangle'
      },
      {
        id: 's6_order',
        type: 'order',
        instruction: 'Wybierz w odpowiedniej kolejności kroki bezpiecznego pobierania programu:',
        items: [
          'Szukam oficjalnej strony twórcy programu (np. wpisując jego nazwę w Google)',
          'Sprawdzam, czy adres strony jest poprawny i ma kłódkę (HTTPS)',
          'Znajduję przycisk "Pobierz" na oficjalnej stronie',
          'Pobieram plik instalacyjny na swój komputer',
          'Przed uruchomieniem skanuję pobrany plik programem antywirusowym'
        ],
        explanation: 'Najważniejsze to pobierać programy tylko z ich oficjalnych stron, a nie z podejrzanych portali oferujących "darmowe programy".'
      },
      {
        id: 's6_tf',
        type: 'true_false',
        statement: 'Jeśli znajomy prześle Ci na Messengerze plik o nazwie "smieszny_kotek.exe", powinieneś go od razu otworzyć.',
        isTrue: false,
        explanation: 'Pliki z rozszerzeniem ".exe" to programy. Otwieranie nieznanych programów, nawet od znajomych (których konta mogły zostać przejęte), to najprostsza droga do zainfekowania komputera wirusem!'
      }
    ]
  },
  {
    id: 'zagrozenia_1',
    moduleId: 'zagrozenia',
    title: 'Weryfikacja nadawcy e-mail',
    description: 'Dowiedz się, jak rozpoznać fałszywe e-maile od oszustów podszywających się pod banki.',
    questions: [
      {
        id: 'ep1_info',
        type: 'info',
        title: 'Fałszywe e-maile (Phishing)',
        content: 'Oszuści często wysyłają e-maile, które wyglądają identycznie jak wiadomości od Twojego banku, poczty czy firmy kurierskiej. Ich celem jest nakłonienie Cię do kliknięcia w link i podania hasła. To zjawisko nazywa się "phishingiem" (łowieniem haseł).',
        uiMockup: 'email_phishing'
      },
      {
        id: 'ep1_info_2',
        type: 'info',
        title: 'Jak sprawdzić nadawcę?',
        content: 'Najważniejszą rzeczą do sprawdzenia jest DOKŁADNY adres e-mail nadawcy, a nie tylko jego nazwa. Oszust może nazwać się "Bank PKO", ale jego adres e-mail to np. "admin@bnk-pko.pl" zamiast prawdziwego "kontakt@pko.pl". Zwracaj uwagę na literówki w adresie!',
        uiMockup: 'email_phishing'
      },
      {
        id: 'ep1_click',
        type: 'click_element',
        title: 'Znajdź podejrzany element',
        instruction: 'Otrzymałeś poniższego e-maila. Kliknij w element, który zdradza, że to oszustwo.',
        uiType: 'email',
        uiData: {
          sender: 'Bank PKO <bezpieczenstwo@bnk-pko.pl>',
          subject: 'Twoje konto zostało zablokowane!',
          body: 'Drogi Kliencie, ze względów bezpieczeństwa zablokowaliśmy Twoje konto. Aby je odblokować, musisz natychmiast zweryfikować swoje dane.',
          linkText: 'Odblokuj konto teraz'
        },
        correctElementId: 'sender',
        elementsFeedback: {
          'sender': 'Dokładnie! Adres "bnk-pko.pl" to literówka. Prawdziwy bank użyłby "pko.pl".',
          'subject': 'Temat jest straszny, ale to adres nadawcy zdradza oszusta.',
          'body': 'Treść ma wywołać panikę, ale to adres nadawcy jest ostatecznym dowodem oszustwa.',
          'link': 'Link prowadzi do fałszywej strony, ale najpierw powinieneś sprawdzić nadawcę!'
        },
        explanation: 'Zawsze sprawdzaj dokładny adres e-mail nadawcy. Oszuści często używają adresów z drobnymi błędami (np. mbank-pomoc.pl zamiast mbank.pl).'
      },
      {
        id: 'ep1_click_2',
        type: 'click_element',
        title: 'Kolejny fałszywy e-mail',
        instruction: 'Tym razem oszust udaje firmę kurierską. Co jest najbardziej podejrzane?',
        uiType: 'email',
        uiData: {
          sender: 'InPost <paczki@inpost.pl>',
          subject: 'Niedopłata za przesyłkę 1,50 zł',
          body: 'Twoja paczka czeka w sortowni. Z powodu przekroczenia wagi, prosimy o dopłatę w wysokości 1,50 PLN. W przeciwnym razie paczka wróci do nadawcy.',
          linkText: 'Opłać brakującą kwotę: http://inpost-doplata-24.com'
        },
        correctElementId: 'link',
        elementsFeedback: {
          'sender': 'Adres nadawcy wygląda poprawnie, ale oszuści potrafią go sfałszować (tzw. spoofing). Szukaj dalej!',
          'subject': 'Temat o dopłacie jest typowy dla oszustów, ale to inny element jest bezpośrednim zagrożeniem.',
          'body': 'Treść brzmi groźnie, ale to inny element służy do kradzieży danych.',
          'link': 'Świetnie! Link prowadzi do dziwnej strony "inpost-doplata-24.com", a nie do oficjalnej strony inpost.pl. Dodatkowo nie ma "https" (kłódeczki).'
        },
        explanation: 'Nawet jeśli adres nadawcy wygląda na prawdziwy, oszuści mogą go sfałszować. Zawsze sprawdzaj, dokąd prowadzi link, zanim w niego klikniesz!'
      },
      {
        id: 'ep1_scenario',
        type: 'scenario',
        title: 'Co zrobisz?',
        scenarioText: 'Dostajesz e-mail od "Netflix" z informacją, że Twoja płatność nie przeszła i musisz zaktualizować kartę. Adres nadawcy to "support@netflix-billing.com". Co robisz?',
        options: [
          {
            id: 'opt1',
            text: 'Klikam w link w e-mailu i podaję dane karty, żeby nie stracić dostępu.',
            isCorrect: false,
            feedback: 'Nigdy nie klikaj w linki w podejrzanych e-mailach. Adres "netflix-billing.com" jest fałszywy.'
          },
          {
            id: 'opt2',
            text: 'Ignoruję e-mail, wchodzę samodzielnie na stronę Netflixa (wpisując adres w przeglądarce) i sprawdzam stan konta.',
            isCorrect: true,
            feedback: 'Świetnie! To najbezpieczniejsze rozwiązanie. Zawsze loguj się wpisując adres samodzielnie.'
          }
        ],
        explanation: 'Jeśli dostaniesz niepokojącą wiadomość, nie klikaj w linki. Zaloguj się na swoje konto wpisując adres strony samodzielnie w przeglądarce.'
      },
      {
        id: 'ep1_vc',
        type: 'visual_choice',
        question: 'Który e-mail wygląda na prawdziwą wiadomość od banku?',
        options: [
          {
            id: 'opt1',
            uiMockup: 'email_phishing',
            isCorrect: false,
            feedback: 'Zwróć uwagę na adres nadawcy (bnk-pko.pl) i próbę wywołania paniki ("PILNE: Zablokowane konto!").'
          },
          {
            id: 'opt2',
            uiMockup: 'email_safe',
            isCorrect: true,
            feedback: 'Świetnie! Adres nadawcy jest poprawny, a treść ma charakter informacyjny i nie zmusza do natychmiastowego kliknięcia w link.'
          }
        ],
        explanation: 'Prawdziwe e-maile od banków zazwyczaj mają charakter informacyjny i nie wywołują sztucznej presji czasu.'
      }
    ]
  },
  {
    id: 'zagrozenia_2',
    moduleId: 'zagrozenia',
    title: 'Fałszywe SMS-y (Smishing)',
    description: 'Naucz się rozpoznawać oszukańcze SMS-y o dopłatach do paczek lub rachunków.',
    questions: [
      {
        id: 'sp1_info',
        type: 'info',
        title: 'Oszustwa SMS-owe',
        content: 'Oszuści masowo wysyłają SMS-y podszywając się pod firmy kurierskie (InPost, DPD), dostawców prądu (PGE) lub policję. Zazwyczaj proszą o małą dopłatę (np. 1,50 zł) do paczki lub grożą odłączeniem prądu.',
        uiMockup: 'sms_phishing'
      },
      {
        id: 'sp1_info_2',
        type: 'info',
        title: 'Cel oszustów',
        content: 'Oszustom nie zależy na 1,50 zł. Link w SMS-ie prowadzi do fałszywej strony banku. Jeśli spróbujesz zapłacić tę małą kwotę, oszuści przejmą Twoje dane logowania i ukradną wszystkie pieniądze z konta.',
        uiMockup: 'sms_phishing_highlighted'
      },
      {
        id: 'sp1_click',
        type: 'click_element',
        title: 'Znajdź podejrzany element',
        instruction: 'Otrzymałeś poniższego SMS-a. Kliknij w element, który jest najbardziej niebezpieczny.',
        uiType: 'sms',
        uiData: {
          sender: 'InPost',
          body: 'Twoja paczka zostala wstrzymana z powodu niedoplaty 1,49 PLN. Prosimy o uregulowanie naleznosci aby uniknac zwrotu do nadawcy.',
          linkText: 'https://inpost-doplata-paczka.pl/oplaty'
        },
        correctElementId: 'link',
        elementsFeedback: {
          'sender': 'Oszuści potrafią sfałszować nazwę nadawcy tak, by Twój telefon myślał, że to prawdziwy InPost.',
          'body': 'Treść ma wywołać presję czasu, ale to link jest narzędziem kradzieży.',
          'link': 'Dokładnie! Nigdy nie klikaj w linki w SMS-ach z prośbą o dopłatę. Prawdziwe firmy nie wysyłają takich linków.'
        },
        explanation: 'Największym zagrożeniem w fałszywych SMS-ach jest link. Prowadzi on do strony, która ukradnie Twoje dane bankowe.'
      },
      {
        id: 'sp1_scenario',
        type: 'scenario',
        title: 'Co zrobisz?',
        scenarioText: 'Dostajesz SMS-a od PGE: "Na Twoim koncie widnieje zadłużenie 2,50 zł. Dziś nastąpi odłączenie prądu. Opłać zadłużenie tutaj: [link]". Co robisz?',
        options: [
          {
            id: 'opt1',
            text: 'Szybko płacę, żeby nie odłączyli mi prądu.',
            isCorrect: false,
            feedback: 'To oszustwo! PGE nie odłącza prądu za 2,50 zł i nie wysyła linków do płatności w ten sposób.'
          },
          {
            id: 'opt2',
            text: 'Ignoruję SMS-a i usuwam go. Jeśli mam wątpliwości, dzwonię na oficjalną infolinię PGE.',
            isCorrect: true,
            feedback: 'Bardzo dobrze! To klasyczne oszustwo na "odłączenie prądu".'
          }
        ],
        explanation: 'Prawdziwe firmy nie grożą natychmiastowym odłączeniem usług przez SMS i nie wysyłają linków do szybkich płatności.'
      },
      {
        id: 'sp1_vc',
        type: 'visual_choice',
        question: 'Który SMS o paczce wygląda na bezpieczny?',
        options: [
          {
            id: 'opt1',
            uiMockup: 'sms_phishing',
            isCorrect: false,
            feedback: 'Ten SMS zawiera link i prosi o dopłatę. To klasyczne oszustwo!'
          },
          {
            id: 'opt2',
            uiMockup: 'sms_safe',
            isCorrect: true,
            feedback: 'Świetnie! Prawdziwe SMS-y od firm kurierskich zazwyczaj zawierają tylko kod odbioru i informacje o paczce, bez linków do płatności.'
          }
        ],
        explanation: 'Prawdziwe firmy kurierskie nie wysyłają SMS-ów z linkami do dopłat za paczki.'
      }
    ]
  },
  {
    id: 'zagrozenia_3',
    moduleId: 'zagrozenia',
    title: 'Fałszywe alarmy o wirusach',
    description: 'Co zrobić, gdy strona internetowa krzyczy, że Twój telefon jest zainfekowany?',
    questions: [
      {
        id: 'fv1_info',
        type: 'info',
        title: 'Straszące komunikaty',
        content: 'Czasami podczas przeglądania internetu nagle wyskakuje okienko z informacją: "Twój telefon ma 13 wirusów! Bateria została uszkodzona! Kliknij tutaj, aby naprawić". Często telefon przy tym wibruje lub wydaje dźwięki.',
        icon: 'alert-triangle'
      },
      {
        id: 'fv1_info_2',
        type: 'info',
        title: 'To tylko reklama!',
        content: 'Pamiętaj: STRONY INTERNETOWE NIE MOGĄ SKANOWAĆ TWOJEGO TELEFONU. Te komunikaty to zwykłe, kłamliwe reklamy. Oszuści chcą Cię przestraszyć, abyś kliknął przycisk i pobrał prawdziwego wirusa lub zapłacił za fałszywy program antywirusowy.'
      },
      {
        id: 'fv1_click',
        type: 'click_element',
        title: 'Jak zareagujesz?',
        instruction: 'Przeglądasz internet i nagle wyskakuje taki komunikat. Co powinieneś kliknąć?',
        uiType: 'browser_warning',
        uiData: {
          warningTitle: '⚠️ UWAGA! ZNALEZIONO WIRUSY! ⚠️',
          warningText: 'Twój system jest poważnie uszkodzony przez 4 wirusy. Jeśli nie usuniesz ich natychmiast, stracisz wszystkie zdjęcia i kontakty!',
          buttonDecline: 'Zamknij kartę (X)',
          buttonAccept: 'Usuń wirusy teraz'
        },
        correctElementId: 'buttonDecline',
        elementsFeedback: {
          'warningTitle': 'Ten tytuł ma Cię tylko przestraszyć.',
          'warningText': 'To kłamstwo. Strona internetowa nie wie, co masz na telefonie.',
          'buttonDecline': 'Brawo! Najlepsze co możesz zrobić, to po prostu zamknąć tę stronę lub kartę w przeglądarce.',
          'buttonAccept': 'Błąd! Kliknięcie tego przycisku może spowodować pobranie prawdziwego wirusa.'
        },
        explanation: 'Nigdy nie klikaj "Usuń wirusy" na takich stronach. Po prostu zamknij kartę w przeglądarce.'
      }
    ]
  },
  {
    id: 'zagrozenia_4',
    moduleId: 'zagrozenia',
    title: 'Oszustwa na portalach ogłoszeniowych',
    description: 'Jak sprzedawać i kupować w internecie bez ryzyka.',
    questions: [
      {
        id: 'z4_info',
        type: 'info',
        title: 'Sprzedajesz coś w internecie?',
        content: 'Wystawiasz przedmiot na OLX lub Vinted. Nagle odzywa się kupujący przez WhatsApp: "Kupiłem przedmiot, kliknij w ten link, aby odebrać pieniądze". To najczęstsze oszustwo na sprzedających!',
        icon: 'alert-triangle'
      },
      {
        id: 'z4_order',
        type: 'order',
        instruction: 'Wybierz w odpowiedniej kolejności bezpieczny proces sprzedaży na portalu ogłoszeniowym:',
        items: [
          'Wystawiam przedmiot z opcją "Kup z przesyłką" na portalu',
          'Kupujący klika "Kup" i płaci bezpośrednio przez portal',
          'Dostaję powiadomienie W APLIKACJI portalu, że przedmiot został kupiony',
          'Pakuję przedmiot i zanoszę do paczkomatu/na pocztę',
          'Pieniądze trafiają na moje konto bankowe automatycznie od operatora portalu'
        ],
        explanation: 'Pamiętaj: jako sprzedający NIGDY nie musisz klikać w żadne linki od kupujących, aby "odebrać pieniądze". Cały proces odbywa się automatycznie wewnątrz portalu.'
      },
      {
        id: 'z4_tf',
        type: 'true_false',
        statement: 'Kupujący pisze do Ciebie na WhatsAppie, że zapłacił za przedmiot i wysyła link do strony firmy kurierskiej, gdzie musisz podać numer swojej karty, by odebrać przelew. Powinieneś to zrobić.',
        isTrue: false,
        explanation: 'To klasyczne oszustwo! Nigdy nie podawaj danych swojej karty płatniczej, aby OTRZYMAĆ pieniądze. Karta służy do płacenia, a nie do odbierania przelewów.'
      }
    ]
  },
  {
    id: 'ochrona_1',
    moduleId: 'ochrona',
    title: 'Uprawnienia aplikacji',
    description: 'Dlaczego latarka potrzebuje dostępu do Twoich kontaktów? Zrozum uprawnienia.',
    questions: [
      {
        id: 'ap1_info',
        type: 'info',
        title: 'Czym są uprawnienia?',
        content: 'Kiedy instalujesz nową aplikację na telefonie (np. grę, kalkulator, latarkę), często prosi ona o "uprawnienia" - czyli zgodę na dostęp do różnych części Twojego telefonu, np. aparatu, mikrofonu, kontaktów czy lokalizacji.',
        icon: 'smartphone'
      },
      {
        id: 'ap1_info_2',
        type: 'info',
        title: 'Zasada ograniczonego zaufania',
        content: 'Zawsze zastanów się, czy aplikacja naprawdę tego potrzebuje. Aplikacja do robienia zdjęć potrzebuje dostępu do aparatu. Ale jeśli zwykły kalkulator lub prosta gra prosi o dostęp do Twoich kontaktów, SMS-ów i mikrofonu - to bardzo podejrzane! Może to być aplikacja szpiegująca.'
      },
      {
        id: 'ap1_scenario',
        type: 'scenario',
        title: 'Podejrzana aplikacja',
        scenarioText: 'Instalujesz nową, darmową aplikację "Super Latarka". Przy pierwszym uruchomieniu aplikacja wyświetla komunikat: "Zezwól aplikacji Super Latarka na dostęp do Twoich kontaktów i historii połączeń". Co robisz?',
        options: [
          {
            id: 'opt1',
            text: 'Klikam "Zezwól", bo inaczej aplikacja może nie działać.',
            isCorrect: false,
            feedback: 'Błąd! Latarka nie potrzebuje Twoich kontaktów do świecenia. Ta aplikacja prawdopodobnie chce wykraść Twoje dane.'
          },
          {
            id: 'opt2',
            text: 'Klikam "Odmów" i odinstalowuję aplikację. Szukam innej, bezpieczniejszej latarki.',
            isCorrect: true,
            feedback: 'Świetnie! To bardzo mądra decyzja. Zawsze odmawiaj dostępu, jeśli nie ma on sensu dla działania aplikacji.'
          }
        ],
        explanation: 'Zawsze czytaj, o jakie uprawnienia prosi aplikacja. Jeśli żądania są nielogiczne (np. gra chce czytać Twoje SMS-y), nie zgadzaj się na to.'
      },
      {
        id: 'ap1_vc',
        type: 'visual_choice',
        question: 'Która prośba o uprawnienia wydaje się uzasadniona i bezpieczna?',
        options: [
          {
            id: 'opt1',
            uiMockup: 'app_permissions_unsafe',
            isCorrect: false,
            feedback: 'Latarka nie potrzebuje dostępu do kontaktów, lokalizacji ani mikrofonu! To bardzo podejrzane.'
          },
          {
            id: 'opt2',
            uiMockup: 'app_permissions_safe',
            isCorrect: true,
            feedback: 'Świetnie! Aplikacja do nawigacji (np. Google Maps) naturalnie potrzebuje dostępu do Twojej lokalizacji, aby działać poprawnie.'
          }
        ],
        explanation: 'Zawsze zadawaj sobie pytanie: "Czy ta aplikacja naprawdę potrzebuje tego dostępu do działania?".'
      }
    ]
  },
  {
    id: 'ochrona_2',
    moduleId: 'ochrona',
    title: 'Logowanie przez Facebook/Google',
    description: 'Uważaj, na co pozwalasz aplikacjom, gdy logujesz się przez inne konta.',
    questions: [
      {
        id: 'sl1_info',
        type: 'info',
        title: 'Szybkie logowanie',
        content: 'Wiele stron i gier oferuje przycisk "Zaloguj się przez Facebook" lub "Zaloguj się przez Google". To bardzo wygodne, bo nie musisz wymyślać nowego hasła. Ale uwaga! Często wiąże się to z przekazaniem Twoich danych.',
        icon: 'shield'
      },
      {
        id: 'sl1_info_2',
        type: 'info',
        title: 'Czytanie uprawnień',
        content: 'Kiedy klikniesz taki przycisk, pojawi się okienko z informacją, do czego ta nowa gra lub aplikacja będzie miała dostęp. Często proszą o dostęp do Twojego imienia i zdjęcia, co jest normalne. Ale czasem proszą o prawo do WYSYŁANIA WIADOMOŚCI w Twoim imieniu lub czytania Twoich e-maili!'
      },
      {
        id: 'sl1_scenario',
        type: 'scenario',
        title: 'Quiz na Facebooku',
        scenarioText: 'Chcesz rozwiązać popularny quiz "Jakim zwierzęciem jesteś?" na Facebooku. Klikasz "Rozwiąż", a aplikacja prosi o dostęp do: "Twojego profilu publicznego, listy znajomych oraz publikowania postów w Twoim imieniu". Co robisz?',
        options: [
          {
            id: 'opt1',
            text: 'Zgadzam się, bo bardzo chcę rozwiązać ten quiz.',
            isCorrect: false,
            feedback: 'Błąd! Ta aplikacja będzie mogła wysyłać spam do Twoich znajomych z Twojego konta!'
          },
          {
            id: 'opt2',
            text: 'Nie zgadzam się. Quiz nie potrzebuje prawa do publikowania postów w moim imieniu.',
            isCorrect: true,
            feedback: 'Doskonale! Zawsze chroń swoje konto przed aplikacjami, które chcą pisać w Twoim imieniu.'
          }
        ],
        explanation: 'Nigdy nie pozwalaj nieznanym aplikacjom i quizom na publikowanie postów w Twoim imieniu ani na dostęp do listy znajomych.'
      }
    ]
  },
  {
    id: 'ochrona_3',
    moduleId: 'ochrona',
    title: 'Bezpieczne czyszczenie telefonu',
    description: 'Co zrobić z telefonem przed jego sprzedażą lub oddaniem.',
    questions: [
      {
        id: 'o3_info',
        type: 'info',
        title: 'Twoje życie w małym pudełku',
        content: 'Twój smartfon zawiera mnóstwo prywatnych danych: zdjęcia, wiadomości, hasła do banku, historię przeglądania. Zanim oddasz go wnukowi lub sprzedasz, musisz go całkowicie i bezpiecznie wyczyścić.',
        icon: 'smartphone'
      },
      {
        id: 'o3_order',
        type: 'order',
        instruction: 'Wybierz w odpowiedniej kolejności kroki bezpiecznego przygotowania telefonu do oddania/sprzedaży:',
        items: [
          'Wykonanie kopii zapasowej (backupu) wszystkich ważnych danych (zdjęć, kontaktów)',
          'Wylogowanie się ze wszystkich kont (Google, Apple ID, aplikacje bankowe)',
          'Wyjęcie karty SIM oraz karty pamięci (jeśli jest)',
          'Przywrócenie telefonu do ustawień fabrycznych (tzw. twardy reset w ustawieniach)'
        ],
        explanation: 'Samo usunięcie zdjęć do kosza nie wystarczy! Tylko "Przywrócenie do ustawień fabrycznych" gwarantuje, że nikt nie odzyska Twoich prywatnych danych.'
      },
      {
        id: 'o3_tf',
        type: 'true_false',
        statement: 'Ręczne usunięcie wszystkich zdjęć i odinstalowanie aplikacji bankowej wystarczy, aby bezpiecznie sprzedać telefon obcej osobie.',
        isTrue: false,
        explanation: 'To zdecydowanie za mało! Ręcznie usunięte pliki można łatwo odzyskać za pomocą specjalnych programów. Ponadto w systemie zostają ukryte pliki z hasłami. ZAWSZE używaj opcji "Przywróć ustawienia fabryczne".'
      }
    ]
  },
  // MODULE: ZAKUPY ONLINE
  {
    id: 'zakupy_1',
    moduleId: 'zakupy_online',
    title: 'Bezpieczne płatności w sieci',
    description: 'Jak płacić w internecie, żeby nie stracić pieniędzy.',
    questions: [
      {
        id: 'zo1_info',
        type: 'info',
        title: 'Metody płatności',
        content: 'Najbezpieczniejsze metody płatności w internecie to BLIK, szybkie przelewy (np. PayU, Przelewy24) oraz karty płatnicze. Unikaj płacenia zwykłym przelewem na konto podane w e-mailu, ponieważ w razie oszustwa bardzo trudno odzyskać pieniądze.',
        icon: 'smartphone'
      },
      {
        id: 'zo1_info_2',
        type: 'info',
        title: 'Magia Chargeback',
        content: 'Płacąc kartą płatniczą (kredytową lub debetową), chroni Cię procedura "Chargeback" (obciążenie zwrotne). Jeśli sklep nie wyśle towaru i zniknie, Twój bank może cofnąć transakcję i oddać Ci pieniądze. To najbezpieczniejsza forma płatności za granicą!',
        icon: 'shield'
      },
      {
        id: 'zo1_mc',
        type: 'multiple_choice',
        question: 'Która metoda płatności oferuje ochronę "Chargeback" w razie oszustwa?',
        options: ['Zwykły przelew bankowy', 'Płatność kartą płatniczą', 'Wysyłka gotówki w kopercie'],
        correctAnswerIndex: 1,
        explanation: 'Płatność kartą daje Ci dodatkową ochronę ze strony banku, jeśli sprzedawca okaże się oszustem.'
      }
    ]
  },
  {
    id: 'zakupy_2',
    moduleId: 'zakupy_online',
    title: 'Fałszywe sklepy internetowe',
    description: 'Jak rozpoznać sklep, który istnieje tylko po to, by kraść.',
    questions: [
      {
        id: 'zo2_info',
        type: 'info',
        title: 'Zbyt piękne, by było prawdziwe',
        content: 'Oszuści tworzą fałszywe sklepy, w których oferują markowe produkty (np. buty, telefony) za ułamek ich prawdziwej ceny (np. -80%). Pamiętaj: jeśli oferta wydaje się zbyt dobra, by była prawdziwa, to zazwyczaj jest to oszustwo!',
        icon: 'alert-triangle'
      },
      {
        id: 'zo2_info_2',
        type: 'info',
        title: 'Brak danych kontaktowych',
        content: 'Prawdziwy sklep musi podać na stronie swój adres, numer telefonu, NIP lub REGON. Fałszywe sklepy często mają tylko formularz kontaktowy i brak jakichkolwiek danych firmy. Zawsze sprawdzaj zakładkę "Kontakt" lub "O nas"!',
        icon: 'globe'
      },
      {
        id: 'zo2_scenario',
        type: 'scenario',
        title: 'Super Okazja',
        scenarioText: 'Widzisz reklamę na Facebooku: "Wyprzedaż magazynu! Nowy iPhone za 500 zł!". Strona wygląda ładnie, ale nie ma na niej adresu firmy, a jedyna metoda płatności to przelew na konto. Co robisz?',
        options: [
          {
            id: 'opt1',
            text: 'Kupuję natychmiast, zanim inni wykupią!',
            isCorrect: false,
            feedback: 'Błąd! Brak danych firmy i nienaturalnie niska cena to pewne oznaki fałszywego sklepu.'
          },
          {
            id: 'opt2',
            text: 'Ignoruję ofertę. To klasyczne oszustwo na fałszywy sklep.',
            isCorrect: true,
            feedback: 'Świetnie! Zawsze sprawdzaj wiarygodność sklepu przed zakupem.'
          }
        ],
        explanation: 'Nigdy nie kupuj w sklepach, które kuszą nierealnymi cenami i ukrywają swoje dane kontaktowe.'
      }
    ]
  },
  {
    id: 'zakupy_3',
    moduleId: 'zakupy_online',
    title: 'Prawa konsumenta w sieci',
    description: 'Masz prawo do zwrotu! Poznaj swoje przywileje.',
    questions: [
      {
        id: 'zo3_info',
        type: 'info',
        title: 'Prawo do zwrotu (14 dni)',
        content: 'Kupując przez internet od firmy (sklepu) na terenie Unii Europejskiej, masz prawo zwrócić towar bez podawania przyczyny w ciągu 14 dni od jego otrzymania. To Twoje święte prawo konsumenta!',
        icon: 'shield'
      },
      {
        id: 'zo3_info_2',
        type: 'info',
        title: 'Wyjątki od reguły',
        content: 'Pamiętaj, że prawo do zwrotu nie dotyczy rzeczy robionych na specjalne zamówienie (np. koszulka z Twoim imieniem), biletów na koncerty, czy rozpakowanych płyt CD/DVD i programów komputerowych.'
      },
      {
        id: 'zo3_fill',
        type: 'fill_blank',
        textBefore: 'Kupując w sklepie internetowym, masz',
        textAfter: 'dni na zwrot towaru bez podawania przyczyny.',
        options: ['7', '14', '30'],
        correctAnswer: '14',
        explanation: 'Polskie i europejskie prawo gwarantuje Ci 14 dni na odstąpienie od umowy zawartej na odległość.'
      }
    ]
  },
  {
    id: 'zakupy_4',
    moduleId: 'zakupy_online',
    title: 'Oszustwa na Vinted i OLX',
    description: 'Sprzedajesz ubrania? Uważaj na fałszywych kupujących.',
    questions: [
      {
        id: 'zo4_info',
        type: 'info',
        title: 'Oszustwo na kupującego',
        content: 'Wystawiasz przedmiot na sprzedaż. Szybko odzywa się "kupujący" przez WhatsApp i pisze: "Kupiłem przedmiot, kliknij w ten link, aby odebrać pieniądze". To oszustwo (scam)!',
        icon: 'smartphone'
      },
      {
        id: 'zo4_info_2',
        type: 'info',
        title: 'Nigdy nie podawaj danych karty!',
        content: 'Link od oszusta prowadzi do fałszywej strony, która prosi o podanie danych Twojej karty płatniczej, rzekomo po to, by "przelać Ci pieniądze". Pamiętaj: karta służy do PŁACENIA, a nie do ODBIERANIA pieniędzy. Jeśli podasz jej dane, oszust wyczyści Twoje konto!',
        icon: 'alert-triangle'
      },
      {
        id: 'zo4_mc',
        type: 'multiple_choice',
        question: 'Sprzedajesz buty na portalu ogłoszeniowym. Kupujący wysyła Ci link do "odbioru pieniędzy", gdzie musisz wpisać numer swojej karty. Co robisz?',
        options: ['Wpisuję numer karty, żeby dostać pieniądze', 'Ignoruję wiadomość i zgłaszam użytkownika', 'Podaję mu moje hasło do banku'],
        correctAnswerIndex: 1,
        explanation: 'Nigdy nie klikaj w linki od kupujących. Prawdziwe płatności odbywają się wewnątrz portalu (np. Vinted, OLX), bez podawania danych karty do "odbioru".'
      }
    ]
  },
  {
    id: 'zakupy_5',
    moduleId: 'zakupy_online',
    title: 'Uważaj na super okazje i reklamy',
    description: 'Nie wszystko, co widzisz w reklamie, jest prawdziwe.',
    questions: [
      {
        id: 'zo5_info',
        type: 'info',
        title: 'Fałszywe reklamy z celebrytami',
        content: 'Oszuści często kradną zdjęcia znanych osób (aktorów, polityków) i tworzą fałszywe artykuły: "Znany aktor zdradza sekret na szybkie bogactwo! Zainwestuj 1000 zł". To zawsze jest oszustwo inwestycyjne.',
        icon: 'globe'
      },
      {
        id: 'zo5_info_2',
        type: 'info',
        title: 'Magiczne leki',
        content: 'Podobnie działają reklamy "magicznych" leków na odchudzanie czy ból stawów, rzekomo polecanych przez znanych lekarzy. Zazwyczaj to bezwartościowe suplementy sprzedawane za ogromne pieniądze. Zawsze konsultuj się ze swoim prawdziwym lekarzem!',
        icon: 'alert-triangle'
      },
      {
        id: 'zo5_match',
        type: 'match',
        instruction: 'Dopasuj rodzaj reklamy do jej prawdziwego celu:',
        pairs: [
          { left: 'Inwestycja polecana przez celebrytę', right: 'Próba kradzieży Twoich oszczędności' },
          { left: 'Magiczny lek na wszystkie choroby', right: 'Sprzedaż drogiego, bezwartościowego proszku' },
          { left: 'Zwykła reklama butów w znanym sklepie', right: 'Normalna oferta handlowa' }
        ],
        explanation: 'Bądź sceptyczny wobec reklam obiecujących szybki zysk lub cudowne uzdrowienie.'
      }
    ]
  },
  {
    id: 'zakupy_6',
    moduleId: 'zakupy_online',
    title: 'Bezpieczne metody płatności',
    description: 'Jak płacić w internecie, żeby nie stracić pieniędzy.',
    questions: [
      {
        id: 'zo6_info',
        type: 'info',
        title: 'Karta kredytowa vs przelew',
        content: 'Płacenie kartą kredytową (lub debetową) w internecie jest często bezpieczniejsze niż zwykły przelew, ponieważ oferuje usługę "chargeback". Jeśli sklep Cię oszuka i nie wyśle towaru, Twój bank może cofnąć transakcję i oddać Ci pieniądze.',
        icon: 'shield'
      },
      {
        id: 'zo6_info_2',
        type: 'info',
        title: 'BLIK - szybko i bezpiecznie',
        content: 'BLIK to polski system płatności, który jest bardzo bezpieczny. Generujesz 6-cyfrowy kod w aplikacji banku, wpisujesz go na stronie sklepu, a następnie ZAWSZE musisz potwierdzić płatność w swojej aplikacji, widząc kwotę i nazwę sklepu.',
        icon: 'smartphone'
      },
      {
        id: 'zo6_order',
        type: 'order',
        instruction: 'Wybierz w odpowiedniej kolejności kroki bezpiecznej płatności BLIKiem:',
        items: [
          'Wybieram BLIK jako metodę płatności w sklepie',
          'Otwieram aplikację mojego banku na telefonie',
          'Generuję 6-cyfrowy kod BLIK',
          'Wpisuję kod na stronie sklepu',
          'Sprawdzam kwotę i nazwę sklepu w aplikacji banku',
          'Zatwierdzam płatność PINem w aplikacji banku'
        ],
        explanation: 'Kluczowym momentem jest przedostatni krok: ZAWSZE czytaj, co zatwierdzasz w aplikacji banku (kwotę i odbiorcę)!'
      },
      {
        id: 'zo6_tf',
        type: 'true_false',
        statement: 'Jeśli ktoś dzwoni do Ciebie podając się za pracownika banku i prosi o podanie kodu BLIK, aby "zabezpieczyć Twoje środki", powinieneś mu go podać.',
        isTrue: false,
        explanation: 'Prawdziwy pracownik banku NIGDY nie poprosi Cię o podanie kodu BLIK, hasła ani PINu. To najczęstsza metoda oszustów na wyłudzenie pieniędzy!'
      }
    ]
  },
  // MODULE: SOCIAL MEDIA
  {
    id: 'social_1',
    moduleId: 'social_media',
    title: 'Prywatność na Facebooku',
    description: 'Kto naprawdę widzi Twoje zdjęcia?',
    questions: [
      {
        id: 'sm1_info',
        type: 'info',
        title: 'Publiczne vs Znajomi',
        content: 'Kiedy dodajesz post lub zdjęcie na Facebooku, możesz wybrać, kto je zobaczy. Ustawienie "Publiczne" oznacza, że każdy człowiek na świecie (nawet oszust) może to zobaczyć. Ustawienie "Znajomi" ogranicza widoczność tylko do osób, które zaakceptowałeś.',
        icon: 'lock'
      },
      {
        id: 'sm1_info_2',
        type: 'info',
        title: 'Dlaczego to ważne?',
        content: 'Oszuści przeglądają publiczne profile, by zebrać informacje. Jeśli widzą, że jesteś na wakacjach, wiedzą, że Twój dom jest pusty. Jeśli znają imiona Twoich wnuków, mogą łatwiej oszukać Cię metodą "na wnuczka".',
        icon: 'shield'
      },
      {
        id: 'sm1_mc',
        type: 'multiple_choice',
        question: 'Jak najlepiej ustawić widoczność swoich prywatnych zdjęć z wakacji na Facebooku?',
        options: ['Publiczne (dla wszystkich)', 'Tylko dla znajomych', 'Dla znajomych znajomych'],
        correctAnswerIndex: 1,
        explanation: 'Twoje prywatne zdjęcia powinny być widoczne tylko dla osób, które znasz i którym ufasz.'
      },
      {
        id: 'sm1_vc',
        type: 'visual_choice',
        question: 'Który post na Facebooku wygląda na bezpieczny?',
        options: [
          {
            id: 'opt1',
            uiMockup: 'social_media_post',
            isCorrect: false,
            feedback: 'To typowe oszustwo na "darmowe rozdawnictwo". Oszuści chcą wyłudzić opłatę za wysyłkę lub Twoje dane.'
          },
          {
            id: 'opt2',
            uiMockup: 'social_media_post_safe',
            isCorrect: true,
            feedback: 'Świetnie! To zwykły post reklamowy oficjalnego sklepu. Nie obiecuje darmowych, drogich nagród za kliknięcie.'
          }
        ],
        explanation: 'Pamiętaj: jeśli coś w internecie brzmi zbyt dobrze, by było prawdziwe (np. darmowy iPhone), to na 99% jest to oszustwo.'
      }
    ]
  },
  {
    id: 'social_2',
    moduleId: 'social_media',
    title: 'Oszustwo romantyczne (Catfishing)',
    description: 'Uważaj na nieznajomych wyznających miłość w sieci.',
    questions: [
      {
        id: 'sm2_info',
        type: 'info',
        title: 'Amerykański żołnierz',
        content: 'Oszustwo romantyczne (tzw. catfishing) polega na tworzeniu fałszywego profilu. Oszust podaje się np. za amerykańskiego żołnierza, lekarza na misji lub inżyniera. Pisze do Ciebie, szybko wyznaje miłość i buduje zaufanie.',
        icon: 'alert-triangle'
      },
      {
        id: 'sm2_info_2',
        type: 'info',
        title: 'Prośba o pieniądze',
        content: 'Po kilku tygodniach "znajomości" oszust nagle ma problem: wypadek, zablokowane konto, opłata za paczkę z prezentem dla Ciebie. Prosi o pilny przelew. Gdy wyślesz pieniądze, oszust znika lub prosi o więcej. Nigdy nie wysyłaj pieniędzy osobom poznanym tylko w internecie!',
        icon: 'smartphone'
      },
      {
        id: 'sm2_scenario',
        type: 'scenario',
        title: 'Nowy znajomy',
        scenarioText: 'Pisze do Ciebie przystojny lekarz pracujący w Syrii. Po miesiącu miłych rozmów prosi o 2000 zł na bilet lotniczy, by móc do Ciebie przylecieć. Co robisz?',
        options: [
          {
            id: 'opt1',
            text: 'Wysyłam pieniądze, bo bardzo chcę go poznać.',
            isCorrect: false,
            feedback: 'Błąd! To klasyczne oszustwo romantyczne. Stracisz pieniądze, a "lekarz" nigdy nie przyleci.'
          },
          {
            id: 'opt2',
            text: 'Odmawiam i blokuję kontakt. Zgłaszam profil jako fałszywy.',
            isCorrect: true,
            feedback: 'Doskonale! Nigdy nie wysyłaj pieniędzy osobom, których nie znasz osobiście.'
          }
        ],
        explanation: 'Oszuści potrafią miesiącami budować zaufanie, by na koniec wyłudzić oszczędności życia.'
      }
    ]
  },
  {
    id: 'social_3',
    moduleId: 'social_media',
    title: 'Hejt i trolle w internecie',
    description: 'Nie daj się sprowokować do kłótni.',
    questions: [
      {
        id: 'sm3_info',
        type: 'info',
        title: 'Kim jest Troll?',
        content: 'Troll internetowy to osoba, która celowo pisze obraźliwe, kłamliwe lub kontrowersyjne komentarze, by wywołać kłótnię i zdenerwować innych. Robią to dla własnej, złośliwej rozrywki.',
        icon: 'alert-triangle'
      },
      {
        id: 'sm3_info_2',
        type: 'info',
        title: 'Nie karm trolla!',
        content: 'Najlepszą obroną przed trollem jest ignorowanie go ("nie karm trolla"). Odpowiadanie na jego zaczepki tylko daje mu satysfakcję. Jeśli komentarz jest bardzo obraźliwy, użyj opcji "Zgłoś" lub "Zablokuj użytkownika".',
        icon: 'shield'
      },
      {
        id: 'sm3_fill',
        type: 'fill_blank',
        textBefore: 'Osobę, która celowo wywołuje kłótnie w internecie, nazywamy',
        textAfter: '.',
        options: ['hakerem', 'trollem', 'adminem'],
        correctAnswer: 'trollem',
        explanation: 'Trolle żywią się Twoją złością. Najlepiej ich ignorować.'
      }
    ]
  },
  {
    id: 'social_4',
    moduleId: 'social_media',
    title: 'Bezpieczne udostępnianie zdjęć',
    description: 'Zanim wrzucisz zdjęcie wnuka, pomyśl dwa razy.',
    questions: [
      {
        id: 'sm4_info',
        type: 'info',
        title: 'Zdjęcia w internecie zostają na zawsze',
        content: 'Kiedy opublikujesz zdjęcie w internecie, tracisz nad nim kontrolę. Ktoś może je skopiować i wykorzystać do złych celów. Szczególnie uważaj na zdjęcia dzieci i wnuków – zawsze pytaj ich rodziców o zgodę przed publikacją!',
        icon: 'smartphone'
      },
      {
        id: 'sm4_info_2',
        type: 'info',
        title: 'Co widać w tle?',
        content: 'Zanim dodasz zdjęcie, sprawdź, co widać w tle. Czy nie ma tam Twojego adresu, numeru rejestracyjnego samochodu, dokumentów leżących na stole lub cennych przedmiotów? Oszuści analizują takie szczegóły.',
        icon: 'globe'
      },
      {
        id: 'sm4_mc',
        type: 'multiple_choice',
        question: 'Chcesz dodać na Facebooka zdjęcie z wnukiem. Co powinieneś zrobić najpierw?',
        options: ['Dodać zdjęcie jako publiczne, by wszyscy widzieli', 'Zapytać rodziców wnuka o zgodę', 'Wysłać zdjęcie do nieznajomych'],
        correctAnswerIndex: 1,
        explanation: 'Zawsze szanuj prywatność innych, zwłaszcza dzieci. Zgoda rodziców jest kluczowa.'
      }
    ]
  },
  {
    id: 'social_5',
    moduleId: 'social_media',
    title: 'Komunikatory i Szyfrowanie',
    description: 'Czy ktoś czyta Twoje wiadomości na WhatsAppie?',
    questions: [
      {
        id: 'sm5_info',
        type: 'info',
        title: 'Szyfrowanie End-to-End',
        content: 'Dobre komunikatory (jak WhatsApp czy Signal) używają szyfrowania "End-to-End" (od końca do końca). Oznacza to, że wiadomość jest zamykana w sejfie na Twoim telefonie i otwierana dopiero na telefonie odbiorcy. Nikt po drodze (nawet twórcy aplikacji) nie może jej przeczytać.',
        icon: 'lock'
      },
      {
        id: 'sm5_info_2',
        type: 'info',
        title: 'Oszustwa na komunikatorach',
        content: 'Mimo że wiadomości są szyfrowane, oszuści mogą przejąć konto Twojego znajomego (jeśli miał słabe hasło) i napisać do Ciebie z jego numeru z prośbą o szybką pożyczkę BLIK. Zawsze weryfikuj takie prośby dzwoniąc do tej osoby!',
        icon: 'alert-triangle'
      },
      {
        id: 'sm5_match',
        type: 'match',
        instruction: 'Dopasuj pojęcia:',
        pairs: [
          { left: 'Szyfrowanie End-to-End', right: 'Nikt nie podsłucha Twoich wiadomości' },
          { left: 'Wiadomość z prośbą o BLIK od znajomego', right: 'Zadzwoń do niego, by potwierdzić' },
          { left: 'Słabe hasło do komunikatora', right: 'Ryzyko przejęcia konta przez oszusta' }
        ],
        explanation: 'Szyfrowanie chroni treść wiadomości, ale Ty musisz chronić dostęp do swojego konta.'
      }
    ]
  },
  {
    id: 'social_6',
    moduleId: 'social_media',
    title: 'Oszustwo na "Znajomego w potrzebie"',
    description: 'Jak rozpoznać, że ktoś przejął konto Twojego znajomego.',
    questions: [
      {
        id: 'sm6_info',
        type: 'info',
        title: 'Przejęcie konta',
        content: 'Oszuści często włamują się na konta na Facebooku lub Messengerze. Następnie wysyłają do wszystkich znajomych tej osoby wiadomość z prośbą o szybką pożyczkę (zazwyczaj kodem BLIK), tłumacząc to nagłą awarią lub zgubionym portfelem.',
        icon: 'alert-triangle'
      },
      {
        id: 'sm6_order',
        type: 'order',
        instruction: 'Wybierz w odpowiedniej kolejności kroki, które powinieneś podjąć, gdy znajomy na Messengerze prosi Cię o pilną pożyczkę BLIKiem:',
        items: [
          'Nie wysyłam od razu żadnego kodu ani pieniędzy',
          'Dzwonię do tego znajomego na jego numer telefonu (nie przez Messengera)',
          'Pytam go bezpośrednio, czy to on do mnie pisał',
          'Jeśli potwierdzi, że to oszustwo - ignoruję wiadomość na Messengerze',
          'Ostrzegam innych wspólnych znajomych o włamaniu na jego konto'
        ],
        explanation: 'Najważniejsze to zachować spokój i zweryfikować prośbę innym kanałem komunikacji (najlepiej dzwoniąc na zwykły numer telefonu).'
      }
    ]
  },
  // MODULE: URZĄDZENIA
  {
    id: 'urzadzenia_1',
    moduleId: 'urzadzenia',
    title: 'Aktualizacje systemu',
    description: 'Dlaczego telefon ciągle prosi o aktualizację?',
    questions: [
      {
        id: 'ur1_info',
        type: 'info',
        title: 'Łatanie dziur',
        content: 'Aktualizacje oprogramowania (systemu w telefonie lub aplikacji) to nie tylko nowe funkcje. To przede wszystkim "łatanie dziur" w zabezpieczeniach. Hakerzy ciągle szukają nowych sposobów na włamanie, a twórcy programów ciągle je naprawiają.',
        icon: 'shield'
      },
      {
        id: 'ur1_info_2',
        type: 'info',
        title: 'Nie ignoruj aktualizacji',
        content: 'Ignorowanie powiadomień o aktualizacji to jak zostawienie otwartych drzwi do domu, gdy wiesz, że w okolicy kręcą się złodzieje. Zawsze zgadzaj się na aktualizacje systemu i aplikacji (najlepiej robić to w domu, przez Wi-Fi).',
        icon: 'smartphone'
      },
      {
        id: 'ur1_mc',
        type: 'multiple_choice',
        question: 'Co jest głównym celem aktualizacji oprogramowania w telefonie?',
        options: ['Zmiana wyglądu ikon', 'Naprawianie błędów i łatanie luk w zabezpieczeniach', 'Zajmowanie miejsca w pamięci'],
        correctAnswerIndex: 1,
        explanation: 'Aktualizacje są kluczowe dla bezpieczeństwa Twojego urządzenia.'
      }
    ]
  },
  {
    id: 'urzadzenia_2',
    moduleId: 'urzadzenia',
    title: 'Antywirus na telefonie',
    description: 'Czy smartfon potrzebuje antywirusa?',
    questions: [
      {
        id: 'ur2_info',
        type: 'info',
        title: 'Wbudowana ochrona',
        content: 'Współczesne smartfony (zarówno z systemem Android, jak i iPhone) mają wbudowane bardzo dobre zabezpieczenia. Najważniejszą zasadą jest instalowanie aplikacji TYLKO z oficjalnych sklepów (Google Play lub App Store).',
        icon: 'shield'
      },
      {
        id: 'ur2_info_2',
        type: 'info',
        title: 'Fałszywe antywirusy',
        content: 'Uważaj na darmowe aplikacje "antywirusowe" lub "przyspieszające telefon" z nieznanych źródeł. Często to one same są wirusami, które wyświetlają reklamy lub kradną dane!',
        icon: 'alert-triangle'
      },
      {
        id: 'ur2_fill',
        type: 'fill_blank',
        textBefore: 'Aplikacje na telefon należy pobierać TYLKO z',
        textAfter: 'sklepów, takich jak Google Play lub App Store.',
        options: ['oficjalnych', 'nieznanych', 'darmowych'],
        correctAnswer: 'oficjalnych',
        explanation: 'Oficjalne sklepy sprawdzają aplikacje przed ich udostępnieniem, co znacznie zmniejsza ryzyko pobrania wirusa.'
      }
    ]
  },
  {
    id: 'urzadzenia_3',
    moduleId: 'urzadzenia',
    title: 'Zgubiony telefon',
    description: 'Co zrobić, gdy zgubisz smartfona.',
    questions: [
      {
        id: 'ur3_info',
        type: 'info',
        title: 'Blokada ekranu to podstawa',
        content: 'Jeśli zgubisz telefon, a nie miałeś ustawionej blokady ekranu (PIN, wzór, odcisk palca), znalazca ma natychmiastowy dostęp do Twoich e-maili, zdjęć i aplikacji bankowych. Zawsze miej włączoną blokadę!',
        icon: 'lock'
      },
      {
        id: 'ur3_info_2',
        type: 'info',
        title: 'Zdalne blokowanie',
        content: 'Zarówno Google (Android), jak i Apple (iPhone) oferują darmowe usługi "Znajdź mój telefon". Pozwalają one na zlokalizowanie zgubionego urządzenia na mapie, zdalne zablokowanie go, a nawet wykasowanie wszystkich danych.',
        icon: 'globe'
      },
      {
        id: 'ur3_scenario',
        type: 'scenario',
        title: 'Kradzież w autobusie',
        scenarioText: 'Wysiadasz z autobusu i orientujesz się, że ukradziono Ci telefon. Co robisz w pierwszej kolejności?',
        options: [
          {
            id: 'opt1',
            text: 'Dzwonię do banku, aby zablokować aplikację i karty, a potem loguję się na komputerze, by zdalnie zablokować telefon.',
            isCorrect: true,
            feedback: 'Doskonale! Szybka reakcja i blokada dostępu do pieniędzy to priorytet.'
          },
          {
            id: 'opt2',
            text: 'Czekam, może złodziej sam odda telefon.',
            isCorrect: false,
            feedback: 'Błąd! Każda minuta zwłoki to ryzyko utraty pieniędzy i danych.'
          }
        ],
        explanation: 'W przypadku kradzieży telefonu, natychmiastowe zablokowanie dostępu do banku i zdalne wyczyszczenie urządzenia to najważniejsze kroki.'
      }
    ]
  },
  {
    id: 'urzadzenia_4',
    moduleId: 'urzadzenia',
    title: 'Kopie zapasowe (Backup)',
    description: 'Jak nie stracić cennych zdjęć i kontaktów.',
    questions: [
      {
        id: 'ur4_info',
        type: 'info',
        title: 'Telefony się psują',
        content: 'Telefon może wpaść do wody, zepsuć się lub zostać skradziony. Jeśli wszystkie Twoje zdjęcia wnuków i ważne kontakty były tylko na tym jednym urządzeniu – stracisz je bezpowrotnie.',
        icon: 'alert-triangle'
      },
      {
        id: 'ur4_info_2',
        type: 'info',
        title: 'Chmura ratuje sytuację',
        content: 'Rozwiązaniem jest "Kopia zapasowa w chmurze" (np. Google Drive, iCloud). To znaczy, że kopia Twoich danych jest bezpiecznie przechowywana na serwerach w internecie. Gdy kupisz nowy telefon, po prostu wpisujesz hasło i wszystko wraca!',
        icon: 'smartphone'
      },
      {
        id: 'ur4_mc',
        type: 'multiple_choice',
        question: 'Co to jest kopia zapasowa (backup) w chmurze?',
        options: ['Bezpieczne zapisanie kopii danych (np. zdjęć) na serwerach w internecie', 'Wydrukowanie wszystkich zdjęć na papierze', 'Wysłanie telefonu do naprawy'],
        correctAnswerIndex: 0,
        explanation: 'Kopia w chmurze pozwala odzyskać dane nawet po całkowitym zniszczeniu lub kradzieży telefonu.'
      }
    ]
  },
  {
    id: 'urzadzenia_5',
    moduleId: 'urzadzenia',
    title: 'Publiczne ładowarki (Juice Jacking)',
    description: 'Dlaczego ładowanie telefonu na lotnisku może być groźne.',
    questions: [
      {
        id: 'ur5_info',
        type: 'info',
        title: 'Kabel to nie tylko prąd',
        content: 'Kabel do ładowania telefonu (USB) służy nie tylko do przesyłania prądu, ale też do przesyłania DANYCH (np. gdy podłączasz telefon do komputera, by zgrać zdjęcia).',
        icon: 'smartphone'
      },
      {
        id: 'ur5_info_2',
        type: 'info',
        title: 'Złośliwe gniazdka',
        content: 'Oszuści potrafią przerobić publiczne gniazdka USB (np. na lotniskach, w pociągach) tak, aby po podłączeniu telefonu instalowały na nim wirusa lub kradły dane. To zjawisko nazywa się "Juice Jacking".',
        icon: 'alert-triangle'
      },
      {
        id: 'ur5_match',
        type: 'match',
        instruction: 'Jak bezpiecznie ładować telefon poza domem?',
        pairs: [
          { left: 'Własna ładowarka do zwykłego gniazdka (230V)', right: 'W 100% bezpieczne' },
          { left: 'Własny Powerbank', right: 'Bardzo bezpieczne' },
          { left: 'Kabel wpięty bezpośrednio w publiczne gniazdo USB', right: 'Ryzyko kradzieży danych' }
        ],
        explanation: 'Najbezpieczniej jest używać własnej ładowarki wpinanej do tradycyjnego gniazdka elektrycznego lub korzystać z powerbanka.'
      }
    ]
  },
  {
    id: 'urzadzenia_6',
    moduleId: 'urzadzenia',
    title: 'Zabezpieczanie nowego telefonu',
    description: 'Krok po kroku: co zrobić po wyjęciu nowego smartfona z pudełka.',
    questions: [
      {
        id: 'ur6_info',
        type: 'info',
        title: 'Pierwsze kroki z nowym urządzeniem',
        content: 'Kupiłeś nowy telefon? Zanim zaczniesz z niego w pełni korzystać, warto zadbać o jego podstawowe bezpieczeństwo. Odpowiednia konfiguracja na samym początku uchroni Cię przed wieloma problemami w przyszłości.',
        icon: 'smartphone'
      },
      {
        id: 'ur6_order',
        type: 'order',
        instruction: 'Wybierz w odpowiedniej kolejności czynności, które należy wykonać po zakupie nowego telefonu (od najważniejszej/pierwszej):',
        items: [
          'Ustawienie trudnego do odgadnięcia kodu PIN lub wzoru blokady ekranu',
          'Dodanie odcisku palca lub skanu twarzy (biometria)',
          'Zalogowanie się na swoje konto Google lub Apple ID',
          'Pobranie i zainstalowanie wszystkich dostępnych aktualizacji systemu',
          'Instalacja ulubionych aplikacji z oficjalnego sklepu'
        ],
        explanation: 'Najpierw zawsze zabezpieczamy dostęp do samego urządzenia (PIN, biometria). Następnie logujemy się na konto, aby móc pobrać aktualizacje systemu (łatające luki w zabezpieczeniach), a dopiero na końcu instalujemy dodatkowe aplikacje.'
      },
      {
        id: 'ur6_tf',
        type: 'true_false',
        statement: 'Nowy telefon prosto ze sklepu jest całkowicie bezpieczny i nie wymaga instalowania żadnych aktualizacji systemu.',
        isTrue: false,
        explanation: 'Telefony leżą w pudełkach w magazynach miesiącami. W tym czasie twórcy systemu wydają wiele poprawek bezpieczeństwa. Dlatego pierwszą rzeczą po uruchomieniu i zabezpieczeniu telefonu powinno być pobranie aktualizacji!'
      }
    ]
  },
  // MODULE: AI I FAKE NEWS
  {
    id: 'ai_1',
    moduleId: 'ai_fake_news',
    title: 'Co to jest Sztuczna Inteligencja (AI)?',
    description: 'Krótkie wprowadzenie do świata AI.',
    questions: [
      {
        id: 'ai1_info',
        type: 'info',
        title: 'Czym jest AI?',
        content: 'Sztuczna Inteligencja (AI) to programy komputerowe, które potrafią uczyć się, analizować dane i wykonywać zadania, które do tej pory wymagały ludzkiego myślenia (np. pisanie tekstów, rozpoznawanie twarzy na zdjęciach, tłumaczenie języków).',
        icon: 'globe'
      },
      {
        id: 'ai1_info_2',
        type: 'info',
        title: 'AI w codziennym życiu',
        content: 'Już teraz korzystasz z AI! Kiedy nawigacja w telefonie wyznacza najszybszą trasę omijając korki, albo gdy Netflix poleca Ci film, który może Ci się spodobać – to wszystko zasługa algorytmów sztucznej inteligencji.',
        icon: 'smartphone'
      },
      {
        id: 'ai1_fill',
        type: 'fill_blank',
        textBefore: 'Sztuczna inteligencja to programy, które potrafią się',
        textAfter: 'i wykonywać skomplikowane zadania.',
        options: ['psuć', 'uczyć', 'wyłączać'],
        correctAnswer: 'uczyć',
        explanation: 'Zdolność do "uczenia się" na podstawie danych to główna cecha sztucznej inteligencji.'
      }
    ]
  },
  {
    id: 'ai_2',
    moduleId: 'ai_fake_news',
    title: 'Deepfake - fałszywe filmy',
    description: 'Nie wierz we wszystko, co widzisz na wideo.',
    questions: [
      {
        id: 'ai2_info',
        type: 'info',
        title: 'Co to jest Deepfake?',
        content: 'Deepfake to technologia AI, która pozwala na stworzenie niezwykle realistycznego, ale całkowicie fałszywego filmu lub nagrania głosowego. Można wziąć twarz znanej osoby (np. polityka lub aktora) i nałożyć ją na ciało kogoś innego, sprawiając, że mówi rzeczy, których nigdy nie powiedziała.',
        icon: 'alert-triangle'
      },
      {
        id: 'ai2_info_2',
        type: 'info',
        title: 'Oszustwa na głos',
        content: 'Oszuści potrafią sklonować głos Twojego bliskiego (np. wnuka) na podstawie krótkiego nagrania z internetu. Następnie dzwonią do Ciebie, a Ty słyszysz w słuchawce głos wnuka proszącego o pilną pomoc finansową!',
        icon: 'smartphone'
      },
      {
        id: 'ai2_scenario',
        type: 'scenario',
        title: 'Dziwny telefon',
        scenarioText: 'Odbierasz telefon. Słyszysz głos swojej córki, która płacze i mówi, że miała wypadek i pilnie potrzebuje 5000 zł przelewem BLIK na podany numer. Co robisz?',
        options: [
          {
            id: 'opt1',
            text: 'Rozłączam się i natychmiast dzwonię do córki na jej znany mi numer telefonu, aby to zweryfikować.',
            isCorrect: true,
            feedback: 'Doskonale! To najlepszy sposób na obronę przed sklonowanym głosem. Zawsze weryfikuj takie prośby.'
          },
          {
            id: 'opt2',
            text: 'Wysyłam pieniądze, bo to przecież jej głos.',
            isCorrect: false,
            feedback: 'Błąd! Głos można dziś łatwo podrobić za pomocą AI. Zawsze weryfikuj takie sytuacje.'
          }
        ],
        explanation: 'Jeśli ktoś przez telefon prosi o pieniądze, nawet jeśli brzmi jak bliska osoba, zawsze rozłącz się i oddzwoń na znany Ci numer tej osoby.'
      }
    ]
  },
  {
    id: 'ai_3',
    moduleId: 'ai_fake_news',
    title: 'Fake News',
    description: 'Jak rozpoznawać fałszywe informacje w internecie.',
    questions: [
      {
        id: 'ai3_info',
        type: 'info',
        title: 'Czym jest Fake News?',
        content: 'Fake News to celowo stworzona, fałszywa informacja, która ma udawać prawdziwego newsa. Jej celem jest wywołanie silnych emocji (strachu, złości), zmanipulowanie opinii publicznej lub po prostu zarobienie na kliknięciach.',
        icon: 'globe'
      },
      {
        id: 'ai3_info_2',
        type: 'info',
        title: 'Krzyczące nagłówki',
        content: 'Fake Newsy często mają bardzo emocjonalne, "krzykliwe" nagłówki (tzw. clickbaity), np. "SZOK! Zobacz co zrobili, nie uwierzysz!". Jeśli nagłówek wywołuje w Tobie silne emocje, bądź podwójnie ostrożny.',
        icon: 'alert-triangle'
      },
      {
        id: 'ai3_mc',
        type: 'multiple_choice',
        question: 'Widzisz na Facebooku artykuł o tytule: "PILNE: Od jutra chleb po 50 zł! Rząd ukrywa prawdę!". Co powinieneś zrobić?',
        options: ['Udostępnić to wszystkim znajomym, żeby ich ostrzec', 'Sprawdzić tę informację w innych, wiarygodnych źródłach (np. znanych portalach informacyjnych)', 'Uwierzyć i iść kupić zapas chleba'],
        correctAnswerIndex: 1,
        explanation: 'Zawsze weryfikuj szokujące informacje w kilku różnych, zaufanych źródłach, zanim w nie uwierzysz lub podasz dalej.'
      }
    ]
  },
  {
    id: 'ai_4',
    moduleId: 'ai_fake_news',
    title: 'Bańka informacyjna',
    description: 'Dlaczego w internecie widzisz tylko to, co lubisz?',
    questions: [
      {
        id: 'ai4_info',
        type: 'info',
        title: 'Algorytmy śledzą Twoje ruchy',
        content: 'Portale takie jak Facebook czy YouTube używają algorytmów (AI), które analizują, w co klikasz i co czytasz. Ich celem jest zatrzymanie Cię na stronie jak najdłużej, dlatego pokazują Ci tylko takie treści, które Ci się spodobają i z którymi się zgadzasz.',
        icon: 'smartphone'
      },
      {
        id: 'ai4_info_2',
        type: 'info',
        title: 'Zamknięcie w bańce',
        content: 'Przez to zjawisko wpadasz w tzw. "bańkę informacyjną". Przestajesz widzieć opinie inne niż Twoje własne. Może Ci się wydawać, że "wszyscy myślą tak jak ja", podczas gdy algorytm po prostu ukrywa przed Tobą inne punkty widzenia.',
        icon: 'globe'
      },
      {
        id: 'ai4_fill',
        type: 'fill_blank',
        textBefore: 'Zjawisko, w którym internet pokazuje Ci tylko informacje zgodne z Twoimi poglądami, nazywamy',
        textAfter: 'informacyjną.',
        options: ['bańką', 'chmurą', 'siecią'],
        correctAnswer: 'bańką',
        explanation: 'Bańka informacyjna sprawia, że nasz obraz świata w internecie staje się jednostronny.'
      }
    ]
  },
  {
    id: 'ai_5',
    moduleId: 'ai_fake_news',
    title: 'Weryfikacja źródeł (Fact-checking)',
    description: 'Jak sprawdzić, czy informacja jest prawdziwa.',
    questions: [
      {
        id: 'ai5_info',
        type: 'info',
        title: 'Zasada 3 źródeł',
        content: 'Zanim uwierzysz w szokującą informację przeczytaną w internecie, sprawdź, czy piszą o tym inne, duże i znane portale informacyjne. Jeśli o "końcu świata" pisze tylko jeden nieznany blog, to na pewno jest to Fake News.',
        icon: 'shield'
      },
      {
        id: 'ai5_info_2',
        type: 'info',
        title: 'Kto jest autorem?',
        content: 'Zwróć uwagę, kto napisał dany artykuł. Czy jest podpisany imieniem i nazwiskiem dziennikarza? Czy strona ma zakładkę "O nas" i "Kontakt"? Anonimowe portale często rozsiewają dezinformację.',
        icon: 'globe'
      },
      {
        id: 'ai5_match',
        type: 'match',
        instruction: 'Dopasuj cechy do rodzaju informacji:',
        pairs: [
          { left: 'Krzykliwy tytuł, brak autora, silne emocje', right: 'Prawdopodobnie Fake News' },
          { left: 'Spokojny ton, podane źródła, znany portal', right: 'Wiarygodna informacja' },
          { left: 'Szokujące zdjęcie wygenerowane przez AI', right: 'Deepfake / Manipulacja' }
        ],
        explanation: 'Krytyczne myślenie to Twoja najlepsza broń w walce z dezinformacją w internecie.'
      }
    ]
  },
  {
    id: 'ai_6',
    moduleId: 'ai_fake_news',
    title: 'Podsumowanie wiedzy o AI',
    description: 'Sprawdź, co zapamiętałeś z modułu o sztucznej inteligencji i dezinformacji.',
    questions: [
      {
        id: 'ai6_info',
        type: 'info',
        title: 'Czas na test!',
        content: 'Przeszedłeś przez najważniejsze zagadnienia związane ze sztuczną inteligencją, deepfake\'ami i bańkami informacyjnymi. Zobaczmy, jak poradzisz sobie z kilkoma pytaniami podsumowującymi.',
        icon: 'shield'
      },
      {
        id: 'ai6_tf',
        type: 'true_false',
        statement: 'Sztuczna inteligencja (AI) potrafi generować obrazy i filmy, które wyglądają niezwykle realistycznie, ale w rzeczywistości nigdy się nie wydarzyły.',
        isTrue: true,
        explanation: 'To prawda! Technologia ta nazywa się Deepfake i jest często używana do tworzenia fałszywych wiadomości lub oszustw.'
      }
    ]
  }
];
