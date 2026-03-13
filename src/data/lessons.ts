export type QuestionInfo = {
  id: string;
  type: 'info';
  title: string;
  content: string;
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

export type Question = QuestionInfo | QuestionMultipleChoice | QuestionFillBlank | QuestionMatch;

export type Lesson = {
  id: string;
  moduleId: string;
  title: string;
  description: string;
  questions: Question[];
};

export const lessons: Lesson[] = [
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
        content: 'Hasło to Twój wirtualny klucz do domu. Jeśli będzie zbyt proste, złodziej łatwo je odgadnie i wejdzie do środka. Wyobraź sobie, że używasz hasła "123456" - to tak, jakbyś zostawił klucz w zamku. Hakerzy używają specjalnych programów, które potrafią odgadnąć takie hasło w ułamek sekundy! Dlatego zawsze używaj trudnych haseł, które są długie i skomplikowane.'
      },
      {
        id: 'q1_info_2',
        type: 'info',
        title: 'Złota zasada tworzenia haseł',
        content: 'Najlepsze hasło to takie, które jest łatwe do zapamiętania dla Ciebie, ale trudne do odgadnięcia dla innych. Zamiast wymyślać skomplikowane ciągi znaków jak "xQ9#mP!2", spróbuj stworzyć zdanie, np. "MojPiesBurekLubiBiegacWParku!". Takie hasło jest bardzo długie, co czyni je niezwykle bezpiecznym, a jednocześnie łatwym do zapamiętania.'
      },
      {
        id: 'q1_info_3',
        type: 'info',
        title: 'Menedżery haseł',
        content: 'Pamiętanie wielu trudnych haseł jest niemożliwe. Dlatego warto korzystać z menedżerów haseł. To specjalne programy (często wbudowane w przeglądarkę lub telefon), które pamiętają wszystkie Twoje hasła za Ciebie. Ty musisz zapamiętać tylko jedno, główne hasło do menedżera.'
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
    id: 'l2',
    moduleId: 'podstawy',
    title: 'Podejrzane SMS-y',
    description: 'Jak rozpoznać oszustwo w wiadomości SMS.',
    questions: [
      {
        id: 'q2_info',
        type: 'info',
        title: 'Uwaga na linki w SMS-ach!',
        content: 'Oszuści często wysyłają SMS-y z linkami, udając kuriera, bank lub elektrownię. Wiadomości te często mają na celu wywołanie u Ciebie silnych emocji - strachu (np. "Twoje konto zostanie zablokowane") lub pośpiechu (np. "Dopłać 1,50 zł w ciągu 2 godzin, inaczej paczka wróci"). Kliknięcie w taki link może przenieść Cię na fałszywą stronę, która wygląda identycznie jak strona Twojego banku, i spowodować kradzież Twoich pieniędzy.'
      },
      {
        id: 'q2_info_2',
        type: 'info',
        title: 'Jak się bronić przed fałszywymi SMS-ami?',
        content: 'Złota zasada brzmi: nigdy nie klikaj w linki z podejrzanych SMS-ów! Jeśli dostaniesz wiadomość od "banku", nie używaj linku z SMS-a. Zamiast tego, samodzielnie wpisz adres strony banku w przeglądarce lub użyj oficjalnej aplikacji mobilnej. Pamiętaj też, że prawdziwe instytucje rzadko proszą o podanie hasła czy dopłatę drobnych kwot przez SMS.'
      },
      {
        id: 'q2_info_3',
        type: 'info',
        title: 'Zgłaszanie podejrzanych SMS-ów',
        content: 'W Polsce możesz zgłosić podejrzanego SMS-a, przesyłając go na darmowy numer 8080 (CERT Polska). Dzięki temu eksperci od cyberbezpieczeństwa mogą zablokować fałszywą stronę i uchronić innych przed oszustwem.'
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
          { left: 'Bank prosi o hasło', right: 'Dzwonię na infolinię' },
          { left: 'Znajomy prosi o BLIK', right: 'Dzwonię do niego' }
        ],
        explanation: 'Zawsze zachowuj ostrożność, gdy ktoś prosi Cię o pieniądze lub dane przez SMS.'
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
        content: 'Uwierzytelnianie dwuskładnikowe (w skrócie 2FA - Two-Factor Authentication) to jak drugi zamek w drzwiach. Nawet jeśli oszust pozna Twoje hasło (pierwszy zamek), nie wejdzie na Twoje konto, bo będzie potrzebował drugiego klucza (drugiego zamka) – np. jednorazowego kodu z SMS-a, potwierdzenia w aplikacji bankowej lub specjalnego klucza USB.'
      },
      {
        id: 'q3_info_2',
        type: 'info',
        title: 'Dlaczego samo hasło to za mało?',
        content: 'W dzisiejszych czasach wycieki danych z różnych serwisów internetowych zdarzają się bardzo często. Jeśli używasz tego samego hasła w wielu miejscach, wyciek z jednego portalu może dać hakerom dostęp do Twojej poczty czy konta w banku. 2FA sprawia, że skradzione hasło staje się bezużyteczne bez Twojego telefonu.'
      },
      {
        id: 'q3_info_3',
        type: 'info',
        title: 'Rodzaje 2FA',
        content: 'Najpopularniejsze metody 2FA to kody SMS, ale są one najmniej bezpieczne (można je przechwycić). Lepszym rozwiązaniem są aplikacje uwierzytelniające (np. Google Authenticator), które generują kody co 30 sekund. Najbezpieczniejsze są fizyczne klucze U2F (wyglądające jak pendrive), które trzeba włożyć do portu USB lub przybliżyć do telefonu (NFC).'
      },
      {
        id: 'q3_mc',
        type: 'multiple_choice',
        question: 'Dlaczego warto włączyć uwierzytelnianie dwuskładnikowe (2FA)?',
        options: ['Żeby szybciej logować się na konto', 'Żeby chronić konto, nawet gdy ktoś pozna moje hasło', 'Żeby nie musieć pamiętać hasła'],
        correctAnswerIndex: 1,
        explanation: '2FA to dodatkowa warstwa ochrony. Hasło może wyciec do internetu, ale Twój telefon (na który przychodzi kod) masz zawsze przy sobie.'
      },
      {
        id: 'q3_match',
        type: 'match',
        instruction: 'Dopasuj metodę 2FA do jej opisu:',
        pairs: [
          { left: 'Kod SMS', right: 'Wiadomość z kodem przychodzi na Twój telefon' },
          { left: 'Aplikacja (np. Google Authenticator)', right: 'Generuje nowy kod co 30 sekund na telefonie' },
          { left: 'Klucz U2F (np. YubiKey)', right: 'Małe urządzenie podłączane do portu USB' }
        ],
        explanation: 'Kody SMS są najpopularniejsze, ale aplikacje i klucze USB są jeszcze bezpieczniejsze!'
      },
      {
        id: 'q3_fill',
        type: 'fill_blank',
        textBefore: 'Uwierzytelnianie dwuskładnikowe to jak drugi',
        textAfter: 'w drzwiach do Twojego konta.',
        options: ['zamek', 'dzwonek', 'wizjer'],
        correctAnswer: 'zamek',
        explanation: 'Dwa zamki (hasło + kod) to zawsze więcej bezpieczeństwa niż jeden.'
      }
    ]
  },
  {
    id: 'surf1',
    moduleId: 'bezpieczne_surfowanie',
    title: 'Co to jest Phishing?',
    description: 'Dowiedz się, jak oszuści łowią w internecie.',
    questions: [
      {
        id: 's1_info',
        type: 'info',
        title: 'Phishing - łowienie naiwnych',
        content: 'Phishing (czyt. fiszing) to metoda oszustwa, w której przestępca podszywa się pod godną zaufania instytucję (np. bank, firmę kurierską, urząd), aby wyłudzić Twoje hasła, numery kart kredytowych lub inne poufne dane.'
      },
      {
        id: 's1_info_2',
        type: 'info',
        title: 'Jak wygląda phishing?',
        content: 'Oszuści najczęściej wysyłają fałszywe e-maile lub SMS-y. Wiadomość może wyglądać bardzo profesjonalnie – zawierać logo banku i oficjalny język. Zazwyczaj pojawia się w niej pilna prośba o zalogowanie się przez podany link (np. "Twoje konto zostało zablokowane, kliknij tutaj, aby je odblokować").'
      },
      {
        id: 's1_info_3',
        type: 'info',
        title: 'Fałszywe strony internetowe',
        content: 'Link z wiadomości phishingowej prowadzi do strony, która wygląda identycznie jak prawdziwa strona logowania do banku. Jednak adres w pasku przeglądarki jest inny (np. "mbank-logowanie.com" zamiast "mbank.pl"). Jeśli wpiszesz tam swoje dane, trafią one prosto w ręce oszustów.'
      },
      {
        id: 's1_fill',
        type: 'fill_blank',
        textBefore: 'Oszuści wysyłają fałszywe e-maile, aby',
        textAfter: 'Twoje poufne dane.',
        options: ['chronić', 'wyłudzić', 'zignorować'],
        correctAnswer: 'wyłudzić',
        explanation: 'Celem phishingu jest zawsze kradzież Twoich danych lub pieniędzy.'
      },
      {
        id: 's1_mc',
        type: 'multiple_choice',
        question: 'Jak sprawdzić, czy e-mail od banku jest prawdziwy?',
        options: ['Kliknąć w link i zobaczyć', 'Sprawdzić dokładnie adres e-mail nadawcy', 'Odpisać na e-mail z pytaniem'],
        correctAnswerIndex: 1,
        explanation: 'Oszuści często używają adresów podobnych do prawdziwych, np. "kontakt@mbank-pomoc.com" zamiast "kontakt@mbank.pl". Zawsze sprawdzaj adres nadawcy!'
      }
    ]
  },
  {
    id: 'surf2',
    moduleId: 'bezpieczne_surfowanie',
    title: 'Ochrona Danych Osobowych',
    description: 'Czym się dzielić, a co zachować dla siebie.',
    questions: [
      {
        id: 's2_info',
        type: 'info',
        title: 'Twoje dane są cenne',
        content: 'Numer PESEL, nazwisko panieńskie matki, numer dowodu osobistego czy dokładny adres zamieszkania to informacje, którymi nie należy bezmyślnie dzielić się w internecie. Oszuści mogą wykorzystać te dane do kradzieży tożsamości, np. wzięcia na Ciebie kredytu!'
      },
      {
        id: 's2_info_2',
        type: 'info',
        title: 'Uważaj, co publikujesz',
        content: 'Zastanów się dwa razy, zanim opublikujesz w mediach społecznościowych zdjęcie swojego nowego prawa jazdy, biletu lotniczego (z widocznym kodem kreskowym) czy świadectwa szkolnego. Nawet pozornie niegroźne informacje mogą posłużyć oszustom do uwiarygodnienia się podczas prób wyłudzenia.'
      },
      {
        id: 's2_info_3',
        type: 'info',
        title: 'Zasada ograniczonego zaufania',
        content: 'Jeśli jakaś strona internetowa lub aplikacja prosi Cię o podanie danych, zawsze zadaj sobie pytanie: "Czy oni naprawdę tego potrzebują?". Aplikacja latarki w telefonie nie potrzebuje dostępu do Twojej lokalizacji ani kontaktów. Podawaj tylko te dane, które są absolutnie niezbędne do wykonania danej usługi.'
      },
      {
        id: 's2_match',
        type: 'match',
        instruction: 'Co jest bezpieczne do podania w internecie, a co nie?',
        pairs: [
          { left: 'Imię', right: 'Można podać na zaufanej stronie' },
          { left: 'Numer PESEL', right: 'Nigdy nie podawaj bez potrzeby' },
          { left: 'Hasło do banku', right: 'NIGDY i NIKOMU nie podawaj' }
        ],
        explanation: 'Zawsze zastanów się dwa razy, zanim wpiszesz swoje dane w formularzu w internecie.'
      }
    ]
  },
  {
    id: 'surf3',
    moduleId: 'bezpieczne_surfowanie',
    title: 'Bezpieczne Strony',
    description: 'Jak rozpoznać bezpieczną stronę i unikać pułapek.',
    questions: [
      {
        id: 's3_info',
        type: 'info',
        title: 'Szukaj zamkniętej kłódki',
        content: 'Zanim podasz gdzieś swoje hasło lub dane karty płatniczej, spójrz na pasek adresu na samej górze ekranu. Jeśli widzisz tam małą, zamkniętą kłódkę, a adres zaczyna się od "https://", to znaczy, że połączenie między Twoim komputerem a serwerem jest szyfrowane. Dzięki temu nikt nie podsłucha przesyłanych danych.'
      },
      {
        id: 's3_info_2',
        type: 'info',
        title: 'Kłódka to nie wszystko!',
        content: 'Pamiętaj: zamknięta kłódka (HTTPS) oznacza tylko, że połączenie jest szyfrowane. Nie gwarantuje to, że sama strona jest uczciwa! Oszuści również mogą założyć szyfrowaną stronę dla swojego fałszywego sklepu. Zawsze sprawdzaj dokładnie adres strony i szukaj opinii o sklepie, zanim zrobisz w nim zakupy.'
      },
      {
        id: 's3_info_3',
        type: 'info',
        title: 'Uważaj na fałszywe sklepy',
        content: 'Zbyt piękne, aby było prawdziwe? Prawdopodobnie to oszustwo. Sklepy internetowe oferujące markowe buty czy telefony za ułamek ceny to najczęściej pułapki. Zwracaj uwagę na brak danych kontaktowych firmy (NIP, REGON, adres), błędy językowe na stronie oraz to, czy jedyną formą płatności jest przelew z góry.'
      },
      {
        id: 's3_mc',
        type: 'multiple_choice',
        question: 'Na ekranie nagle wyskakuje okienko: "Wygrałeś najnowszego smartfona! Kliknij tutaj!". Co robisz?',
        options: ['Klikam, żeby odebrać nagrodę', 'Zamykam okienko krzyżykiem', 'Podaję swój numer telefonu'],
        correctAnswerIndex: 1,
        explanation: 'Nikt nie rozdaje drogich telefonów za darmo w internecie. To popularna pułapka, która ma na celu kradzież Twoich danych lub pieniędzy.'
      },
      {
        id: 's3_fill',
        type: 'fill_blank',
        textBefore: 'Bezpieczna strona internetowa powinna mieć w adresie zamkniętą',
        textAfter: 'oraz zaczynać się od liter HTTPS.',
        options: ['kłódkę', 'kopertę', 'gwiazdkę'],
        correctAnswer: 'kłódkę',
        explanation: 'Kłódka oznacza, że Twoje dane (np. hasła) są przesyłane w bezpieczny sposób.'
      }
    ]
  },
  {
    id: 'surf4',
    moduleId: 'bezpieczne_surfowanie',
    title: 'Publiczne Wi-Fi i VPN',
    description: 'Dlaczego darmowy internet w kawiarni bywa groźny.',
    questions: [
      {
        id: 's4_info',
        type: 'info',
        title: 'Uwaga na darmowe Wi-Fi!',
        content: 'Darmowe, otwarte sieci Wi-Fi w kawiarniach, hotelach czy na lotniskach są bardzo wygodne, ale niosą ze sobą ogromne ryzyko. Ponieważ sieć nie jest zabezpieczona hasłem, każdy, kto jest do niej podłączony (w tym potencjalny haker siedzący stolik obok), może "podsłuchać" to, co robisz w internecie.'
      },
      {
        id: 's4_info_2',
        type: 'info',
        title: 'Czego unikać w publicznym Wi-Fi?',
        content: 'Korzystając z otwartej sieci Wi-Fi, nigdy nie loguj się do banku, nie rób zakupów online (nie podawaj danych karty) i unikaj logowania do ważnych kont (np. głównej poczty e-mail). Do takich czynności zawsze używaj bezpiecznego internetu mobilnego (LTE/5G) od swojego operatora.'
      },
      {
        id: 's4_info_3',
        type: 'info',
        title: 'Jak chronić się w publicznych sieciach? (VPN)',
        content: 'Jeśli musisz skorzystać z publicznego Wi-Fi, użyj sieci VPN (Virtual Private Network). VPN tworzy bezpieczny, szyfrowany "tunel" między Twoim urządzeniem a internetem. Dzięki temu, nawet jeśli ktoś podsłuchuje sieć Wi-Fi, zobaczy tylko niezrozumiały ciąg znaków, a Twoje dane pozostaną bezpieczne.'
      },
      {
        id: 's4_match',
        type: 'match',
        instruction: 'Dopasuj rodzaj sieci do bezpiecznej czynności:',
        pairs: [
          { left: 'Domowe, zabezpieczone Wi-Fi', right: 'Logowanie do banku' },
          { left: 'Darmowe Wi-Fi w kawiarni', right: 'Czytanie wiadomości' },
          { left: 'VPN (Wirtualna Sieć Prywatna)', right: 'Ukrywa Twoje dane w sieci' }
        ],
        explanation: 'Do ważnych spraw używaj tylko zaufanego internetu w domu lub internetu z telefonu komórkowego.'
      },
      {
        id: 's4_mc',
        type: 'multiple_choice',
        question: 'Czym jest VPN?',
        options: ['To program antywirusowy', 'To bezpieczny tunel, który ukrywa to, co robisz w internecie', 'To nowa gra na telefon'],
        correctAnswerIndex: 1,
        explanation: 'VPN (Wirtualna Sieć Prywatna) szyfruje Twoje połączenie. Dzięki temu, nawet w darmowej kawiarni, nikt nie widzi, jakie strony odwiedzasz.'
      }
    ]
  },
  {
    id: 'surf5',
    moduleId: 'bezpieczne_surfowanie',
    title: 'Sztuczki Oszustów',
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
        content: 'To klasyczne przykłady manipulacji. Oszust dzwoni, podając się za krewnego, który miał wypadek i pilnie potrzebuje gotówki, lub za policjanta prowadzącego tajną akcję, który prosi o przekazanie oszczędności w celu ich "ochrony". Pamiętaj: prawdziwa policja NIGDY nie prosi obywateli o przekazywanie pieniędzy!'
      },
      {
        id: 's5_info_3',
        type: 'info',
        title: 'Zasada 3 sekund',
        content: 'Zanim zareagujesz na alarmującą wiadomość lub telefon, weź głęboki oddech i odczekaj 3 sekundy. Zastanów się: "Czy to ma sens?". Jeśli ktoś podaje się za Twojego znajomego i prosi o przelew BLIK przez komunikator, zadzwoń do niego na numer telefonu, który znasz, aby potwierdzić, czy to naprawdę on.'
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
  }
];
