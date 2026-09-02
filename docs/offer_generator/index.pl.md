# Offer Generator

## Jak odwzorować rzeczywisty proces biznesowy w strukturze aplikacji?

Klient prosi o ofertę.

Na pierwszy rzut oka proces wydaje się prosty:

Wybierz produkty.  
Dodaj ilości.  
Oblicz sumę.  
Wygeneruj PDF.

Kiedy jednak próbujesz przekształcić ten proces w aplikację, drobne szczegóły szybko zaczynają mieć znaczenie.

Co się stanie, gdy ten sam produkt zostanie dodany dwa razy?

Co, jeśli brakuje wymaganych informacji o kliencie?

Kiedy należy obliczyć sumę?

Czy PDF można wygenerować, zanim oferta będzie kompletna?

A przede wszystkim:

> **Gdzie właściwie powinny znajdować się reguły biznesowe?**

To właśnie był problem stojący za Offer Generator.

---

## Poznaj aplikację

<div class="hero-buttons">

<a href="https://offer-generator-app.streamlit.app" class="md-button md-button--primary">Live Demo</a>

<a href="https://github.com/Goldmanski/offer-generator" class="md-button">GitHub</a>

</div>

---

## Od listy zakupów do prawdziwej oferty

Aplikacja pozwala użytkownikowi przygotować ofertę dla klienta za pomocą interaktywnego interfejsu.

Najpierw wprowadzane są informacje o kliencie i szczegóły oferty.

Następnie można wybierać produkty z katalogu, pogrupowane według kategorii, oraz zmieniać ich ilości przed ostatecznym przejrzeniem oferty.

Aplikacja przechowuje informacje o ofercie i automatycznie oblicza jej wartość.

To, co wygląda jak prosta lista zakupów, staje się więc niewielkim procesem biznesowym.

---

## Moment, w którym reguły zaczynają mieć znaczenie

Wyobraź sobie, że dodajesz ten sam produkt do oferty dwa razy.

Czy aplikacja powinna utworzyć dwa osobne wiersze?

Czy powinna rozpoznać, że to ten sam produkt, i po prostu zwiększyć jego ilość?

Offer Generator obsługuje to jako część logiki biznesowej.

Ta sama idea dotyczy ilości, sum i walidacji.

To nie są tylko decyzje dotyczące interfejsu.

To **reguły biznesowe**.

I właśnie to rozróżnienie stało się jedną z najciekawszych części projektu.

---

## Co powinno należeć do interfejsu?

Jedną z decyzji projektowych było unikanie umieszczania całej logiki bezpośrednio w interfejsie Streamlit.

Interfejs powinien pozwalać użytkownikowi:

- wprowadzać informacje
- wybierać produkty
- przeglądać ofertę
- wyświetlać komunikaty walidacyjne
- pobierać gotowy dokument

Nie powinien jednak odpowiadać za decydowanie, co sprawia, że oferta jest poprawna, ani za sposób działania reguł biznesowych.

Ta odpowiedzialność powinna znajdować się gdzie indziej.

Doprowadziło to do warstwowej struktury, w której różne części aplikacji mają różne zadania.

---

## Myślenie w kategoriach domeny biznesowej

Zamiast traktować aplikację jako zbiór ekranów i przycisków, projekt modeluje pojęcia, które rzeczywiście występują w biznesie.

Jest **Customer**.

Jest **Product**.

Jest **Quote**.

Są również **Quote Items**, które łączą produkty z ofertą.

Ten sposób myślenia jest inspirowany **Domain-Driven Design** — podejściem, które zaczyna od modelowania ważnych pojęć i reguł biznesowych, zamiast rozpoczynać od interfejsu użytkownika.

W przypadku małej aplikacji taka struktura może wydawać się przerostem formy nad treścią.

Ułatwia jednak znacznie rozumienie znajdującej się pod spodem logiki.

---

## PDF jest ostatnim krokiem

PDF jest tym, czego użytkownik ostatecznie potrzebuje.

Jego generowanie nie jest jednak celowo pierwszą rzeczą, którą robi aplikacja.

Oferta musi najpierw być kompletna i poprawnie zbudowana.

Dopiero po potwierdzeniu wymaganych informacji i możliwości wygenerowania oferty aplikacja tworzy końcowy dokument.

Daje to procesowi jasny kierunek:

**Input → Reguły biznesowe → Walidacja → PDF**

PDF nie jest więc miejscem, w którym znajduje się logika biznesowa.

Jest końcową reprezentacją wcześniej przygotowanej oferty.

---

## Gdzie znajdują się reguły biznesowe?

Projekt rozpoczął się od czegoś, co brzmi niemal banalnie:

> *Utwórz ofertę i zamień ją w PDF.*

Implementacja tego pomysłu ujawniła jednak znacznie większe pytanie związane z Software Engineering.

Gdzie powinna znajdować się każda odpowiedzialność?

Interfejs powinien obsługiwać interakcję.

Warstwa aplikacji powinna koordynować operacje.

Domena powinna zawierać reguły biznesowe.

A generowanie PDF powinno koncentrować się na tworzeniu dokumentu.

Kiedy te odpowiedzialności zostają rozdzielone, aplikacja staje się znacznie łatwiejsza do zrozumienia.

---

## Testowanie reguł

Logika biznesowa jest szczególnie wartościowa, gdy można ją testować niezależnie od interfejsu.

Dlatego Offer Generator zawiera testy jednostkowe dla swojej logiki biznesowej.

Ma to znaczenie, ponieważ ważne pytanie brzmi nie tylko:

> *Czy aplikacja wyświetla właściwą rzecz?*

Ale również:

> **Czy aplikacja zachowuje się poprawnie, gdy zastosujemy reguły?**

To rozróżnienie staje się coraz ważniejsze, gdy prosty prototyp rozwija się w rzeczywistą aplikację biznesową.

---

## Od procesu do modelu domeny

Offer Generator zmienił mój sposób myślenia o aplikacjach.

Aplikacja biznesowa nie jest tylko interfejsem użytkownika połączonym z kilkoma funkcjami.

Nawet stosunkowo niewielki proces może posiadać własne pojęcia, reguły i ograniczenia.

Projekt dał mi praktyczne doświadczenie w:

- modelowaniu domeny
- rozdzielaniu odpowiedzialności
- architekturze warstwowej
- walidacji
- automatycznym testowaniu
- generowaniu PDF

Co ważniejsze, pokazał mi, dlaczego w ogóle istnieje architektura oprogramowania.

> **Dobra architektura nie polega na dodawaniu kolejnych warstw. Polega na przypisaniu każdej części systemu jasnej odpowiedzialności.**

---

## Poznaj aplikację

<div class="hero-buttons">

<a href="https://offer-generator-app.streamlit.app" class="md-button md-button--primary">Live Demo</a>

<a href="https://github.com/Goldmanski/offer-generator" class="md-button">GitHub</a>

</div>