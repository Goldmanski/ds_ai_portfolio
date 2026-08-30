# Voice Recall

## Co, gdyby można było przeszukiwać notatki według ich znaczenia?

Często pamiętamy **o czym myśleliśmy**, ale nie pamiętamy dokładnych słów, których użyliśmy.

Staje się to problemem, gdy liczba notatek zaczyna rosnąć.

Możesz pamiętać, że zapisałeś coś o przygotowaniach do biegu, ale znalezienie dokładnego zdania, które napisałeś, to już zupełnie inna historia.

Voice Recall bada prosty pomysł:

> **Co, gdyby wyszukiwanie notatek działało bardziej jak przypominanie sobie, a mniej jak szukanie słów kluczowych?**

Aplikacja pozwala nagrać notatkę głosową, zamienić ją na tekst, a następnie wyszukiwać notatki za pomocą języka naturalnego.

---

## Poznaj aplikację

<div class="hero-buttons">

<a href="https://voice-recall.streamlit.app" class="md-button md-button--primary">Live Demo</a>

<a href="https://github.com/Goldmanski/voice-recall" class="md-button">GitHub</a>

</div>

---

## Od głosu do przeszukiwalnej pamięci

Projekt zaczyna się od czegoś bardzo naturalnego: mówienia.

Nagrywasz notatkę zamiast ją pisać.

Aplikacja transkrybuje głos i pozwala sprawdzić wynik przed zapisaniem. Następnie notatka jest przekształcana w reprezentację jej znaczenia i przechowywana tak, aby można było ją później wyszukać.

Ciekawa część pojawia się, gdy próbujesz coś znaleźć.

Wyobraź sobie, że jedna z Twoich notatek brzmi:

> Powinienem co tydzień stopniowo zwiększać dystans przed półmaratonem.

Kilka miesięcy później możesz wyszukać:

> plany treningowe

Nie ma potrzeby, aby te dokładne słowa występowały w oryginalnej notatce.

System szuka **podobnego znaczenia**, a nie identycznego słownictwa.

---

## Różnica między słowami a znaczeniem

Tradycyjne wyszukiwanie słów kluczowych mogłoby wyglądać następująco:

> Czy ta notatka zawiera słowo „trening”?

Voice Recall zadaje inne pytanie:

> Która z moich notatek jest najbardziej związana z „planami treningowymi dotyczącymi biegania”?

To rozróżnienie jest sednem projektu.

Tekst zamieniany jest na liczbową reprezentację zwaną **embeddings**. Dzięki temu system może porównywać znaczenie notatek i znajdować te, które są do siebie najbardziej podobne.

W praktyce oznacza to, że wyszukiwanie nie musi opierać się na dokładnym dopasowaniu słów — może uwzględniać również znaczenie całego zapytania.

---

## Mały eksperyment z ludzką pamięcią

To podejście ma w sobie coś interesującego.

Ludzie rzadko pamiętają informacje słowo w słowo.

Zazwyczaj pamiętamy **ideę**.

Możesz pamiętać, że miałeś notatkę o zwiększaniu dystansu biegowego, nawet jeśli sama notatka nigdy nie zawierała słów, których obecnie używasz podczas wyszukiwania.

Voice Recall próbuje sprawić, aby komputer działał w podobny sposób.

Zamiast zmuszać użytkownika do pamiętania, jak coś zostało zapisane, aplikacja pozwala mu szukać tego, **czego dotyczyła** dana informacja.

---

## Dlaczego głos?

Projekt bada również inny sposób tworzenia informacji.

Pisanie notatki wprowadza pewne tarcie.

Mówienie jest często szybsze — szczególnie gdy pomysł pojawia się nagle i nie chcesz przerywać tego, co robisz, żeby go zapisać.

Powstaje prosty przepływ:

**mów → transkrybuj → sprawdź → zapamiętaj → wyszukaj**

Interfejs głosowy nie jest więc tylko innym sposobem wprowadzania danych. Jest częścią idei projektu: **przechwytywania myśli przy możliwie małym tarciu.**

---

## Jak działa wyszukiwanie semantyczne

Pomiędzy wypowiedzeniem czegoś a późniejszym znalezieniem tej informacji zachodzi kilka kroków.

Najpierw nagrany dźwięk jest zamieniany na tekst.

Następnie użytkownik może poprawić lub edytować transkrypcję przed zapisaniem.

Końcowy tekst jest przekształcany w embedding i przechowywany w bazie wektorowej.

Podczas wyszukiwania zapytanie przechodzi przez ten sam proces.

System porównuje następnie zapytanie z zapisanymi notatkami i zwraca te, które są najbardziej podobne semantycznie.

Najważniejsza idea polega na tym, że **notatka i zapytanie są reprezentowane w tej samej przestrzeni semantycznej**.

---

## Dlaczego wyszukiwanie semantyczne zmienia sposób korzystania z aplikacji

Projekt sprawił, że idea wyszukiwania semantycznego stała się znacznie bardziej namacalna.

Łatwo jest opisać embeddings jako liczby reprezentujące znaczenie. O wiele ciekawiej robi się wtedy, gdy możesz napisać jedno zdanie, wyszukać zupełnie inne zdanie, a mimo to odnaleźć oryginalną notatkę, ponieważ obie idee są ze sobą powiązane.

To przejście — od dopasowywania słów do porównywania znaczenia — sprawia, że ten projekt jest dla mnie szczególnie interesujący.

---

## Od notatek głosowych do pamięci semantycznej

Voice Recall połączył kilka idei, które stają się coraz ważniejsze w aplikacjach AI:

- przekształcanie nieustrukturyzowanego ludzkiego inputu w użyteczne dane,
- reprezentowanie tekstu poprzez jego znaczenie semantyczne,
- wyszukiwanie informacji na podstawie podobieństwa,
- łączenie kilku komponentów AI w jeden proces.

Co ważniejsze, projekt pokazał mi, że aplikacja AI nie musi koniecznie generować czegoś nowego.

Czasami najbardziej użyteczną rzeczą, jaką może zrobić, jest pomóc Ci **znaleźć coś, co już wiedziałeś.**

---

## Poznaj aplikację

<div class="hero-buttons">

<a href="https://voice-recall.streamlit.app" class="md-button md-button--primary">Live Demo</a>

<a href="https://github.com/Goldmanski/voice-recall" class="md-button">GitHub</a>

</div>