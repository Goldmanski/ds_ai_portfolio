# Half Marathon Predictor

## Model predykcyjny z interfejsem w języku naturalnym

Co, gdyby można było poprosić model Machine Learning o predykcję bez wypełniania formularza?

Taki był pomysł stojący za Half Marathon Predictor.

Zamiast prosić użytkownika o podanie wieku, płci i czasu na 5 km w osobnych polach, aplikacja pozwala mu opisać siebie w naturalny sposób:

> Mam 28 lat, jestem mężczyzną i mój czas na 5 km to 22 minuty.

Aplikacja wyodrębnia odpowiednie informacje z wiadomości i wykorzystuje je jako dane wejściowe dla tradycyjnego modelu regresji Machine Learning.

---

## Poznaj aplikację

<div class="hero-buttons">

<a href="https://half-marathon-predictor.streamlit.app" class="md-button md-button--primary">Live Demo</a>

<a href="https://github.com/Goldmanski/half_marathon_predictor" class="md-button">GitHub</a>

</div>

---

## Od danych biegacza do predykcji

Część Machine Learning projektu opiera się na danych z Wrocławskiego Półmaratonu.

Model uczy się zależności pomiędzy **wiekiem, płcią i wynikiem na 5 km** biegacza a przewidywanym czasem ukończenia półmaratonu.

Ciekawsza część projektu pojawiła się później.

Chciałem, aby finalna aplikacja przypominała mniej formularz Machine Learning, a bardziej rozmowę.

Doprowadziło to do prostego, ale użytecznego podziału:

**LLM rozumie biegacza.**

**Machine Learning wykonuje predykcję.**

Model językowy nie przewiduje samodzielnie czasu biegu. Jego zadaniem jest jedynie przekształcenie nieformalnego opisu w uporządkowane dane, które może zrozumieć model predykcyjny.

---

## Po co w ogóle używać LLM?

Tradycyjna aplikacja predykcyjna mogłaby wyglądać tak:

=== "Tradycyjne podejście"

    <div class="diagram">
    <pre>
    Wiek:          [ 28 ]
    Płeć:          [ M ]
    Czas na 5 km:  [ 22:00 ]

                     ↓

                 Predykcja
    </pre>
    </div>

=== "Half Marathon Predictor"

    Half Marathon Predictor podchodzi do tego inaczej:

    <div class="diagram">
    <pre>
    „Mam 28 lat, jestem mężczyzną i biegam 5 km w 22 minuty.”

                         ↓

                   GPT-4.1 Mini

                         ↓

             Uporządkowane dane biegacza

                         ↓

                   Model regresji

                         ↓

             Szacowany czas półmaratonu
    </pre>
    </div>

Dzięki temu LLM pełni rolę **interfejsu w języku naturalnym**, a nie silnika predykcyjnego.

To rozróżnienie jest jedną z głównych idei stojących za projektem.

---

## Obsługa niepełnych informacji

Język naturalny wprowadza również nowy problem: użytkownicy nie zawsze podają wszystkie informacje potrzebne modelowi.

Na przykład:

> Mam 28 lat i jestem mężczyzną.

Aplikacja może rozpoznać, że **brakuje czasu na 5 km**, i poprosić o jego podanie przed wykonaniem predykcji.

Oznacza to, że LLM nie tylko wyodrębnia wartości — pomaga również aplikacji określić, czy posiada wystarczającą ilość informacji, aby kontynuować.

---

## Granica pomiędzy AI i Machine Learning

Projekt łączy dwa podejścia, które często przedstawia się osobno:

**Machine Learning** odpowiada za predykcję numeryczną.

**Technologia LLM** odpowiada za uczynienie interakcji z tym modelem bardziej naturalną.

Żaden z tych komponentów nie zastępuje drugiego.

LLM zapewnia elastyczność na poziomie interfejsu, podczas gdy model regresyjny pozostaje odpowiedzialny za właściwą predykcję.

Był to dobry przykład tego, jak LLM można dodać do istniejącego procesu Machine Learning bez przekształcania całego systemu w aplikację opartą na LLM.

---

## Obserwowalność

Ponieważ aplikacja wykorzystuje LLM, chciałem również mieć możliwość sprawdzania, co dzieje się wewnątrz tej części systemu.

Projekt wykorzystuje **Langfuse** do śledzenia interakcji z LLM i analizowania procesu ekstrakcji.

Dzięki temu można rozróżnić problemy występujące w warstwie przetwarzania języka od problemów związanych z samą predykcją Machine Learning.

---

## Projektowanie z jasno określonymi odpowiedzialnościami

Najważniejszą lekcją nie był sam model predykcyjny.

Była nią nauka tego, jak różne komponenty mogą mieć jasno określone odpowiedzialności w ramach jednej aplikacji.

Projekt połączył:

- Machine Learning,
- przetwarzanie języka naturalnego,
- walidację uporządkowanych danych,
- tworzenie aplikacji,
- obserwowalność,
- wdrożenie.

Rezultatem jest niewielki przykład szerszej idei:

> **AI nie zawsze musi zastępować istniejący model. Czasami może po prostu sprawić, że korzystanie z tego modelu będzie łatwiejsze dla ludzi.**

---

## Poznaj aplikację

<div class="hero-buttons">

<a href="https://half-marathon-predictor.streamlit.app" class="md-button md-button--primary">Live Demo</a>

<a href="https://github.com/Goldmanski/half_marathon_predictor" class="md-button">GitHub</a>

</div>