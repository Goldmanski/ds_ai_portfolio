# Titanic — Eksploracyjna analiza danych

## Co możemy wyczytać z danych o pasażerach Titanica?

Zbiór danych Titanic jest jednym z najbardziej rozpoznawalnych zbiorów danych w Data Science.

Jest również zaskakująco dobrym przypomnieniem, że zbiór danych to coś więcej niż kolekcja liczb.

Za każdym wierszem znajdowała się osoba — z określonym wiekiem, płcią, klasą biletu i członkami rodziny. Cechy te różniły się między pasażerami, a analiza pozwala zbadać, jak wiążą się one z przeżyciem katastrofy.

Ten projekt rozpoczął się od prostego pytania:

> **Czego możemy dowiedzieć się o przeżyciu, patrząc na osoby znajdujące się na pokładzie?**

---

## Poznaj analizę

<div class="hero-buttons">

<a href="../../titanic/titanic_report.html" class="md-button md-button--primary">Interaktywny raport</a>

<a href="../../titanic/titanic_presentation.html" class="md-button">Prezentacja</a>

<a href="../../titanic/titanic_report.pdf" download class="md-button">Raport PDF</a>

<a href="../../titanic/titanic_analysis.ipynb" download class="md-button">Notebook</a>

<a href="https://github.com/Goldmanski/ds_ai_portfolio/tree/main/docs/titanic" class="md-button">GitHub</a>

</div>

---

## Zacznij od ludzi, nie od liczb

Zanim zaczniemy szukać wzorców, pierwszym krokiem było zrozumienie, kto właściwie znajdował się na statku.

Zbiór danych zawiera informacje o pasażerach, takie jak ich wiek, płeć, klasa biletu i powiązania rodzinne.

Analizowanie tych cech osobno jest przydatne.

Patrzenie na nie razem sprawia, że historia zaczyna być naprawdę interesująca.

Pasażer nie był po prostu „mężczyzną” lub „kobietą”, „młodym” lub „starszym”, albo pasażerem „pierwszej” czy „trzeciej klasy”.

Te cechy nakładają się na siebie.

To sprawia, że pytanie o przeżycie jest znacznie ciekawsze niż pojedynczy procent.

---

## Kto miał większą szansę na przeżycie?

Jedną z pierwszych rzeczy do zbadania jest to, czy przeżycie było równomiernie rozłożone pomiędzy pasażerami.

Nie było.

Analiza bada wzorce przeżycia w różnych grupach demograficznych i porównuje, jak takie cechy jak płeć, wiek i klasa biletu wiążą się z przeżyciem.

Dzięki temu znana historia staje się czymś, co można zmierzyć.

Zamiast wiedzieć jedynie, że niektóre grupy przeżywały częściej niż inne, możemy zobaczyć **jak te różnice pojawiają się w danych**.

---

## Czy klasa biletu coś nam mówi?

Klasa biletu jest jedną z najciekawszych zmiennych w tym zbiorze danych.

Można potraktować ją po prostu jako ranking:

**pierwsza klasa → druga klasa → trzecia klasa**

Dane pozwalają jednak zadać bardziej znaczące pytanie:

> **Jak silnie klasa biletu wiąże się z przeżyciem?**

Porównanie przeżywalności pomiędzy klasami pokazuje, że pasażerowie statku nie doświadczyli katastrofy w taki sam sposób.

Analiza staje się więc mniej kwestią jednej zmiennej, a bardziej badaniem zależności pomiędzy wieloma cechami.

---

## A co z rodzinami?

Pasażerowie mogli podróżować z rodzeństwem, małżonkami, rodzicami lub dziećmi.

Pozwala to zadać kolejne pytanie:

> **Czy podróżowanie z rodziną miało widoczny związek z przeżyciem?**

Prosta liczba członków rodziny staje się ciekawsza, gdy zestawimy ją z przeżyciem.

To dobry przykład tego, co sprawia, że eksploracyjna analiza danych jest użyteczna: zmienna, która początkowo wydaje się prosta, może ujawnić coś wartego zbadania, gdy umieścimy ją w szerszym kontekście.

---

## Poszukiwanie zależności

Celem eksploracyjnej analizy danych nie jest znalezienie jednej magicznej zmiennej, która wyjaśnia wszystko.

Chodzi o spojrzenie na dane z różnych perspektyw i sprawdzenie, które zależności warto zbadać dokładniej.

Projekt wykorzystuje filtrowanie, grupowanie, statystyki opisowe i wizualizacje do eksploracji zbioru danych.

Wizualizacje są tutaj szczególnie przydatne, ponieważ niektóre zależności znacznie łatwiej rozpoznać, gdy można je zobaczyć, zamiast czytać o nich w tabeli.

Analiza porusza się więc pomiędzy:

**pytanie → dane → wizualizacja → obserwacja → kolejne pytanie**

Ten proces stanowi sedno EDA.

---

## Niebezpieczeństwo wyciągania zbyt szybkich wniosków

W zbiorze danych takim jak Titanic kryje się ważna lekcja.

Znalezienie zależności pomiędzy dwiema zmiennymi nie mówi automatycznie, dlaczego ta zależność występuje.

Jeśli jedna grupa ma wyższy wskaźnik przeżycia niż inna, jest to punkt wyjścia — a nie pełne wyjaśnienie.

Eksploracyjna analiza pomaga odkrywać wzorce.

Sama w sobie nie udowadnia związku przyczynowo-skutkowego.

Łatwo o tym zapomnieć, gdy wykres wydaje się przedstawiać przekonującą historię.

---

## Od pytań do wzorców

To, co czyni zbiór Titanic szczególnie użytecznym do nauki, to sposób, w jaki proste pytanie szybko prowadzi do kolejnych pytań.

Kto przeżył?

Następnie:

**Czy przeżycie było związane z płcią?**

Potem:

**A co z wiekiem?**

Następnie:

**Czy klasa biletu zmienia ten obraz?**

I:

**Co się dzieje, gdy weźmiemy pod uwagę kilka tych cech jednocześnie?**

Zbiór danych nieustannie zachęca do zadania kolejnego pytania.

To właśnie sprawiło, że projekt był dobrym wprowadzeniem do eksploracyjnej analizy danych.

---

## Nauka eksplorowania przed przewidywaniem

Titanic był ćwiczeniem w nauce podejścia do zbioru danych przed próbą zbudowania na jego podstawie modelu.

Nauczył mnie zaczynać od pytań, zamiast od razu sięgać po algorytm.

Zrozum dane.

Szukaj wzorców.

Porównuj grupy.

Wizualizuj zależności.

A przede wszystkim uważaj na to, co dane rzeczywiście pozwalają Ci stwierdzić.

> **Dobra analiza nie polega na znalezieniu szybkiej odpowiedzi. Polega na nauczeniu się, które pytania warto zadać jako następne.**

---

## Poznaj analizę

<div class="hero-buttons">

<a href="../../titanic/titanic_report.html" class="md-button md-button--primary">Interaktywny raport</a>

<a href="titanic_presentation.html" class="md-button">Prezentacja</a>

<a href="../../titanic/titanic_report.pdf" download class="md-button">Raport PDF</a>

<a href="../../titanic/titanic_analysis.ipynb" download class="md-button">Notebook</a>

<a href="https://github.com/Goldmanski/ds_ai_portfolio/tree/main/docs/titanic" class="md-button">GitHub</a>

</div>

---

## Interaktywny raport

<iframe
    src="titanic_report.html"
    width="100%"
    height="1200"
    style="border:1px solid black;">
</iframe>