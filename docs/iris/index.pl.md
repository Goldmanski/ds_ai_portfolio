# Iris — Eksploracyjna analiza danych

## Czy cztery pomiary wystarczą, żeby rozpoznać gatunek irysa?

Zbiór danych Iris jest na tyle mały, że można go zrozumieć na pierwszy rzut oka.

A mimo to kryje się w nim ciekawe pytanie:

> **Czy kilka prostych pomiarów może ujawnić różnice pomiędzy trzema różnymi gatunkami?**

Każdy kwiat w zbiorze danych jest opisany za pomocą zaledwie czterech pomiarów:

- długości działki kielicha
- szerokości działki kielicha
- długości płatka
- szerokości płatka

Nie ma zdjęcia kwiatu, na które można spojrzeć.

Są tylko liczby.

Celem projektu było zbadanie, co te liczby rzeczywiście mogą nam powiedzieć.

---

## Poznaj analizę

<div class="hero-buttons">

<a href="../../iris/iris_report.html" class="md-button md-button--primary">Interaktywny raport</a>

<a href="../../iris/iris_presentation.html" class="md-button">Prezentacja</a>

<a href="../../iris/iris_report.pdf" download class="md-button">Raport PDF</a>

<a href="../../iris/iris_analysis.ipynb" download class="md-button">Notebook</a>

<a href="https://github.com/Goldmanski/ds_ai_portfolio/tree/main/docs/iris" class="md-button">GitHub</a>

</div>

---

## Mały zbiór danych, ciekawe wzorce

Przed rozpoczęciem poszukiwania różnic pomiędzy gatunkami pierwszym krokiem było zrozumienie samych danych.

Jak rozkładają się pomiary?

Czy niektóre cechy są naturalnie bardziej zmienne od innych?

Czy pomiary wyglądają podobnie w całym zbiorze, czy zaczynają pojawiać się określone wzorce?

Eksploracyjna analiza danych pozwala odpowiedzieć na te pytania wizualnie i statystycznie, zanim spróbujemy zbudować model predykcyjny.

---

## Kiedy kwiaty zaczynają się rozdzielać

Ciekawa część zaczyna się wtedy, gdy porównujemy ze sobą cztery pomiary.

Niektóre kombinacje ujawniają znacznie wyraźniejsze różnice pomiędzy gatunkami niż inne.

Pojedynczy pomiar może nie mówić zbyt wiele.

Kiedy jednak rozpatrujemy kilka cech jednocześnie, zaczynają pojawiać się wzorce.

To jedna z najbardziej użytecznych idei stojących za EDA:

> **Zmienna, która sama w sobie wydaje się niepozorna, może stać się znacznie bardziej informacyjna, gdy spojrzymy na jej zależność od innych zmiennych.**

---

## Które pomiary mają największe znaczenie?

Cztery cechy nie rozdzielają gatunków równie dobrze.

Analizując ich rozkłady i zależności, możemy zobaczyć, które pomiary znacznie się nakładają, a które tworzą wyraźniejsze rozróżnienia.

Dzięki temu prosta tabela liczb staje się znacznie łatwiejsza do interpretowania.

Zamiast pytać:

> *Jakie wartości zawiera ten zbiór danych?*

możemy zacząć pytać:

> **Które cechy rzeczywiście pomagają rozróżnić kwiaty?**

---

## Dostrzeganie struktury

Tabele są przydatne do analizowania pojedynczych wartości.

Wizualizacje pomagają zobaczyć szerszy obraz.

Wykresy przedstawiające rozkłady cech i zależności między nimi pozwalają zauważyć skupiska, nakładanie się danych i różnice pomiędzy trzema gatunkami.

Niektóre wzorce trudno dostrzec, patrząc na wiersze liczb.

Po ich zwizualizowaniu stają się niemal oczywiste.

Ten kontrast jest jednym z powodów, dla których wizualizacja jest tak ważną częścią eksploracyjnej analizy danych.

---

## Nie wszystko jest idealnie rozdzielone

Jedną z ciekawych cech zbioru danych Iris jest to, że gatunki nie zachowują się identycznie dla każdej cechy.

Niektóre pomiary w znacznym stopniu się nakładają.

Inne zapewniają znacznie wyraźniejsze rozdzielenie.

Oznacza to, że zbiór danych nie jest po prostu kolekcją trzech idealnie odizolowanych grup.

Występują w nim zależności i nakładanie się wartości, które warto dokładniej zbadać.

I właśnie tutaj EDA staje się użyteczne: **celem nie jest uproszczenie danych bardziej, niż pozwalają na to fakty, ale zrozumienie ich struktury.**

---

## Od eksploracji do lepszego pytania

Kiedy zależności pomiędzy cechami stają się widoczne, pojawia się naturalne kolejne pytanie:

> **Czy można wykorzystać te wzorce do automatycznego rozróżniania gatunków?**

To pytanie prowadzi naturalnie od eksploracyjnej analizy danych w stronę Machine Learning.

Zanim jednak zbudujemy model, warto zrozumieć, co dane już teraz mogą nam powiedzieć.

EDA stanowi tę podstawę.

Pomaga odkryć, które zmienne mogą być użyteczne, gdzie grupy się nakładają i z jakim rodzajem problemu rzeczywiście mamy do czynienia.

---

## Kiedy cztery pomiary opowiadają historię

To, co czyni Iris interesującym, to ilość informacji, jaką można uzyskać z tak małego zbioru danych.

Każdy kwiat opisują zaledwie cztery pomiary.

A jednak porównując ich rozkłady i zależności, możemy zacząć dostrzegać strukturę, która nie jest oczywista w surowej tabeli.

To dobry przykład tego, jak często zaczyna się Data Science.

Nie od skomplikowanego algorytmu.

Po prostu od ciekawości, co dane próbują nam pokazać.

---

## Od wzorców wizualnych do Machine Learning

Iris był ćwiczeniem w nauce eksplorowania zbioru danych przed próbą wykorzystania go do predykcji.

Utrwalił znaczenie rozumienia rozkładów, porównywania grup i szukania zależności pomiędzy zmiennymi.

Co najważniejsze, pokazał mi, dlaczego EDA poprzedza modelowanie.

Zanim poprosimy model o znalezienie wzorców, warto poświęcić czas na ich samodzielne dostrzeżenie.

> **Im lepiej rozumiesz dane, tym lepsze pytania możesz im zadawać.**

---

## Poznaj analizę

<div class="hero-buttons">

<a href="../../iris/iris_report.html" class="md-button md-button--primary">Interaktywny raport</a>

<a href="../../iris/iris_presentation.html" class="md-button">Prezentacja</a>

<a href="../../iris/iris_report.pdf" download class="md-button">Raport PDF</a>

<a href="../../iris/iris_analysis.ipynb" download class="md-button">Notebook</a>

<a href="https://github.com/Goldmanski/ds_ai_portfolio/tree/main/docs/iris" class="md-button">GitHub</a>

</div>

---

## Interaktywny raport

<iframe
    src="../../iris/iris_report.html"
    width="100%"
    height="1200"
    style="border:1px solid black;">
</iframe>