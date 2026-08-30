# ChatLab

## Który model jest wart swojej ceny?

Liczba dostępnych modeli językowych stale rośnie.

Kiedy jednak zaczynasz korzystać z nich w praktyce, pojawia się proste pytanie:

> **Który model zapewnia odpowiednią równowagę pomiędzy jakością a kosztem?**

Najbardziej zaawansowany model nie zawsze jest najlepszym wyborem do każdego zadania. Czasami tańszy model jest w zupełności wystarczający. W innych przypadkach warto jednak dopłacić za model flagowy.

ChatLab powstał jako sposób na praktyczne zbadanie tego kompromisu — poprzez umieszczenie różnych modeli w tym samym środowisku i pokazanie ich odpowiedzi oraz kosztów.

---

## Poznaj aplikację

<div class="hero-buttons">

<a href="https://chatlab-app.streamlit.app/" class="md-button md-button--primary">Live Demo</a>

<a href="https://github.com/Goldmanski/chatlab" class="md-button">GitHub</a>

</div>

---

## Eksperymentuj zamiast zgadywać

Łatwo zapytać, który model językowy jest „najlepszy”.

W praktyce to pytanie nie jest zbyt użyteczne.

Model świetny w trudnym zadaniu może być niepotrzebny przy zadaniu znacznie prostszym. Wyższa cena nie oznacza automatycznie, że każda odpowiedź będzie bardziej wartościowa.

ChatLab pozwala eksperymentować z różnymi modelami OpenAI i obserwować, jak odpowiadają na Twoje prompty.

Idea jest prosta:

**ten sam rodzaj zadania → różny model → różna odpowiedź → różny koszt**

Zamiast polegać wyłącznie na porównaniach modeli znalezionych gdzie indziej, możesz zobaczyć ten kompromis w kontekście własnych rozmów.

---

## Kiedy rozmowa staje się aplikacją?

Pojedynczy prompt i odpowiedź są banalnie proste.

Ale użyteczny chatbot szybko potrzebuje czegoś więcej.

Co dzieje się, gdy rozpoczynasz kolejną rozmowę? Czy możesz wrócić do wcześniejszej konwersacji? Czy chatbot może zachowywać się inaczej w zależności od tego, co próbujesz osiągnąć?

ChatLab traktuje te elementy jako odpowiedzialność aplikacji, a nie coś, czym model językowy powinien magicznie się zajmować.

Możesz tworzyć osobne rozmowy, przełączać się między nimi, zmieniać ich nazwy i kontynuować pracę od miejsca, w którym ją zakończyłeś.

Okno czatu może wyglądać prosto, ale dzieje się za nim zaskakująco dużo.

---

## Ukryty koszt rozmowy

Kiedy zaczynasz porównywać modele, pojawia się kolejne pytanie, którego nie sposób ignorować:

> **Ile tak naprawdę kosztowała ta odpowiedź?**

ChatLab śledzi wykorzystanie tokenów zwracane przez API i wykorzystuje je do oszacowania kosztu rozmowy.

Szacowany koszt jest pokazywany zarówno w USD, jak i PLN.

Dzięki temu różnica pomiędzy modelami staje się bardziej namacalna. Odpowiedź nie jest już tylko czymś, co pojawia się na ekranie — ma również mierzalny koszt.

To sprawia, że wybór modelu staje się bardziej praktyczną decyzją.

Pytanie nie brzmi już tylko:

> *Który model jest lepszy?*

ale:

> **Który model jest wystarczająco dobry do tego, czego potrzebuję, przy koszcie, który ma sens?**

---

## A co z kontekstem?

Porównywanie pojedynczych odpowiedzi to tylko część historii.

Odpowiedź modelu rzadko istnieje w izolacji. W prawdziwej rozmowie każda nowa wiadomość może zależeć od tego, co pojawiło się wcześniej.

ChatLab przechowuje ten kontekst i pozwala kontynuować wiele niezależnych rozmów w czasie.

Pozwala również użytkownikowi dostosować osobowość chatbota, dzięki czemu interakcja staje się czymś więcej niż serią niezależnych promptów.

Była to ważna lekcja budowania aplikacji z LLM: **model jest tylko jedną częścią rozmowy.**

---

## Zaglądanie za kulisy rozmowy

Kiedy LLM staje się częścią aplikacji, pojawia się kolejne pytanie:

> **Co tak naprawdę dzieje się za oknem czatu?**

ChatLab wykorzystuje Langfuse do obserwowania interakcji z modelem językowym.

Dzięki temu można spojrzeć poza końcową odpowiedź i zrozumieć interakcję z modelem z perspektywy aplikacji.

Wzmacnia to również ideę, która stawała się coraz ważniejsza podczas budowania projektu:

> **Jeśli chcesz budować użyteczne aplikacje AI, musisz rozumieć, co dzieje się wtedy, gdy model nie zachowuje się zgodnie z oczekiwaniami.**

---

## Kompromis stojący za wyborem modelu

ChatLab zmienił mój sposób myślenia o wyborze modeli językowych.

Naturalną tendencją jest szukanie modelu o największych możliwościach i traktowanie go jako oczywistego wyboru.

Ale rzeczywiste aplikacje mają ograniczenia.

Czasami różnica w jakości ma znaczenie. Czasami nie. Innym razem szybszy lub tańszy model jest bardziej rozsądnym wyborem.

To sprawia, że wybór modelu jest mniej kwestią znalezienia **najlepszego modelu**, a bardziej znalezienia **właściwego modelu do konkretnego zadania**.

ChatLab stał się niewielkim środowiskiem do praktycznego badania tej idei.

---

## Budowanie wokół modelu

Projekt rozpoczął się od chatbota, ale ciekawsze lekcje dotyczyły tego, co znajduje się wokół niego.

Nauczyłem się, że aplikacja wykorzystująca LLM musi brać pod uwagę więcej niż tylko generowanie dobrej odpowiedzi.

Musi zarządzać kontekstem, dawać użytkownikowi kontrolę nad rozmowami, pokazywać wykorzystanie zasobów i zapewniać możliwość zrozumienia tego, co dzieje się za kulisami.

Co najważniejsze, projekt pokazał mi, że praca z wieloma modelami nie polega po prostu na wyścigu w poszukiwaniu najbardziej zaawansowanego z nich.

Chodzi o zrozumienie kompromisów i podjęcie świadomej decyzji.

> **Właściwy model nie musi być najbardziej zaawansowanym modelem. To ten, który zapewnia potrzebną jakość przy koszcie, który ma sens.**

---

## Poznaj aplikację

<div class="hero-buttons">

<a href="https://chatlab-app.streamlit.app/" class="md-button md-button--primary">Live Demo</a>

<a href="https://github.com/Goldmanski/chatlab" class="md-button">GitHub</a>

</div>