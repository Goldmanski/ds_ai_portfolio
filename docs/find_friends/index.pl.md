# Find Friends

## Czy model Machine Learning może znaleźć osoby podobne do Ciebie?

Co sprawia, że dwie osoby są do siebie podobne?

Czy jest to ich wiek?
Wykształcenie?
To, co lubią?

A może kombinacja cech, którą trudno zauważyć na pierwszy rzut oka?

Find Friends bada to pytanie za pomocą prostej ankiety powitalnej.

Zamiast mówić modelowi, jak powinny wyglądać „właściwe” grupy osób, pozwoliłem Machine Learning odkryć je samodzielnie.

---

## Poznaj aplikację

<div class="hero-buttons">

<a href="https://find-friends-app-goldmanski.streamlit.app" class="md-button md-button--primary">Live Demo</a>

<a href="https://github.com/Goldmanski/find_friends_app" class="md-button">GitHub</a>

</div>

---

## Pozwól danym zdecydować

Zbiór danych zawiera 140 odpowiedzi z ankiety.

Każda osoba jest opisana za pomocą zaledwie pięciu informacji:

- wieku
- wykształcenia
- ulubionych zwierząt
- ulubionego miejsca
- płci

Na pierwszy rzut oka te pytania mogą nie wydawać się wystarczające, aby powiedzieć o człowieku zbyt wiele.

Razem tworzą jednak pewne wzorce.

Interesujące jest to, że nie zdefiniowałem tych wzorców wcześniej.

Zamiast tego model Machine Learning otrzymał zadanie znalezienia grup osób, które są do siebie podobne na podstawie udzielonych odpowiedzi.

---

## Nie ma poprawnej odpowiedzi — są tylko wzorce

To właśnie odróżnia ten projekt od typowego problemu predykcyjnego.

Nie ma kolumny mówiącej:

> „Ta osoba należy do Grupy A”.

Nie ma z góry określonej poprawnej odpowiedzi, której model ma się nauczyć.

Model musi samodzielnie odkryć strukturę znajdującą się w danych.

To właśnie idea **uczenia nienadzorowanego (unsupervised learning)**.

W tym projekcie grupowanie K-Means dzieli uczestników na grupy na podstawie podobieństw pomiędzy ich profilami.

Rezultatem nie jest predykcja czegoś, na co znamy już poprawną odpowiedź.

Jest to próba odpowiedzi na bardziej otwarte pytanie:

> **Jakie grupy naturalnie występują w tych danych?**

---

## Więc... do kogo jesteś najbardziej podobny?

Po odkryciu grup model może zostać wykorzystany dla nowej osoby.

Odpowiadasz na te same pięć pytań.

Aplikacja znajduje następnie grupę, której charakterystyka jest najbardziej podobna do Twojego profilu.

Nie kończy się jednak na podaniu numeru klastra.

Aplikacja pokazuje również, jak wygląda dana grupa.

Możesz zobaczyć między innymi:

- ile osób należy do grupy,
- jaki procent uczestników reprezentuje,
- rozkład wieku,
- wykształcenie,
- ulubione zwierzęta,
- ulubione miejsca,
- oraz rozkład płci.

Nagle wynik Machine Learning staje się czymś, co można rzeczywiście eksplorować.

---

## Kiedy Machine Learning znajduje grupę, jak ją nazwać?

Numer klastra jest użyteczny dla modelu, ale niezbyt znaczący dla człowieka.

Klaster 0 niewiele mówi.

Dlatego projekt dodaje kolejny krok po procesie grupowania.

Charakterystyki każdej odkrytej grupy są przekazywane do LLM, który generuje zrozumiałą dla człowieka nazwę i opis klastra.

Tworzy to interesujący podział odpowiedzialności:

**Machine Learning odkrywa grupy.**

**LLM pomaga wyjaśnić, jak te grupy wyglądają.**

Aplikacja może następnie przedstawić wynik w formie, którą człowiek może rzeczywiście zrozumieć, zamiast po prostu wyświetlać numer klastra.

To niewielki przykład współpracy dwóch różnych podejść do AI: jedno znajduje strukturę w danych, a drugie pomaga przełożyć tę strukturę na zrozumiałe wyjaśnienie.

---

## Od notebooka do aplikacji

Eksperyment Machine Learning rozpoczął się w notebooku.

Tam można było eksplorować dane, trenować model grupowania i analizować powstałe grupy.

Eksperyment staje się jednak ciekawszy, gdy ktoś inny może rzeczywiście z nim wejść w interakcję.

Wytrenowany pipeline jest zapisywany i ponownie wykorzystywany przez aplikację Streamlit.

Nowy użytkownik nie uruchamia procesu trenowania ponownie.

Po prostu podaje swoje odpowiedzi i otrzymuje wynik oparty na grupach odkrytych podczas pierwotnej analizy.

Tworzy to kompletną ścieżkę:

**dane z ankiety → eksploracja → odkryte grupy → zapisany model → nowy użytkownik → interaktywny wynik**

---

## Od klastrów do wyjaśnień

Najciekawszą częścią tego projektu było zobaczenie, jak dwa różne modele mogą pełnić zupełnie różne role.

Model grupowania nie próbuje niczego wyjaśniać. Po prostu szuka struktury w danych.

LLM robi coś zupełnie innego. Bierze charakterystykę odkrytych grup i zamienia ją w opisy, które mają więcej sensu dla człowieka.

Żaden z tych kroków nie byłby równie użyteczny samodzielnie.

Klaster bez wyjaśnienia może być trudny do zinterpretowania.

LLM opisujący grupy, które nigdy nie zostały odkryte na podstawie danych, nie miałby niczego wartościowego do wyjaśnienia.

Razem tworzą prosty proces przechodzący od **odnajdywania wzorców do czynienia ich zrozumiałymi**.

---

## Odkrywanie struktury w danych

Find Friends był jednym z moich kroków od analizowania danych w kierunku budowania systemów Machine Learning.

Nauczył mnie, że Machine Learning nie zawsze musi odpowiadać na pytanie pojedynczą przewidywaną wartością.

Czasami interesującym rezultatem jest **struktura ukryta w danych**.

Pokazał mi również, że znalezienie wzorca to tylko część problemu.

Jeśli wynik ma być użyteczny dla człowieka, trzeba go zrozumieć i znaleźć sposób, aby go przekazać.

W tym projekcie oznaczało to połączenie dwóch różnych podejść:

**Machine Learning do odkrywania grup.**

**LLM do pomocy w ich wyjaśnianiu.**

> **Znalezienie wzorca jest użyteczne dopiero wtedy, gdy można go zrozumieć.**

---

## Poznaj aplikację

<div class="hero-buttons">

<a href="https://find-friends-app-goldmanski.streamlit.app" class="md-button md-button--primary">Live Demo</a>

<a href="https://github.com/Goldmanski/find_friends_app" class="md-button">GitHub</a>

</div>