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

export type Question = QuestionInfo | QuestionMultipleChoice | QuestionFillBlank | QuestionMatch | QuestionScenario | QuestionClickElement;

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
    id: 'l_internet',
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
    id: 'l_link',
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
      }
    ]
  },
  {
    id: 'l1',
    moduleId: 'podstawy',
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
    id: 'l_managers',
    moduleId: 'podstawy',
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
    id: 'l3',
    moduleId: 'podstawy',
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
    id: 'l2',
    moduleId: 'podstawy',
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

  // MODULE: BEZPIECZNE SURFOWANIE
  {
    id: 'surf1',
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
        content: 'HTTPS to początek adresu bezpiecznej strony (np. https://www.bank.pl). Litera "S" na końcu oznacza "Secure" (Bezpieczny). Oznacza to, że nikt w internecie nie może podsłuchać tego, co wpisujesz na tej stronie. Jeśli strona ma samo "http://" (bez S), nie wpisuj tam żadnych haseł!'
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
    id: 'surf2',
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
      }
    ]
  },
  {
    id: 'surf3',
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
    id: 'surf4',
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
    id: 'surf5',
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
    id: 'l_email_phishing',
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
      }
    ]
  },
  {
    id: 'l_sms_phishing',
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
      }
    ]
  },
  {
    id: 'l_fake_virus',
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
    id: 'l_app_permissions',
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
      }
    ]
  },
  {
    id: 'l_social_login',
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
  }
];
