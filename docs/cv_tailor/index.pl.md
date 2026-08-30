# CVTailor

## Czy AI może dopasować CV, jednocześnie pozostawiając Ci nad nim kontrolę?

Aplikacja o pracę rzadko zaczyna się od pustej kartki.

Większość z nas ma już doświadczenie, projekty i umiejętności. Trudniejszą częścią jest zdecydowanie, **które elementy są najważniejsze dla konkretnej oferty** i jak przedstawić je w przejrzysty sposób.

CVTailor powstał z prostego pomysłu: pozwolić AI pomóc Ci właśnie w tej części.

Ale chciałem zachować ważną granicę.

Model językowy może pomóc Ci zdecydować **co napisać** — ale nie powinien decydować **jak zbudowany jest końcowy dokument**.

---

## Poznaj aplikację

<div class="hero-buttons">

<a href="https://cv-tailor-ai.streamlit.app" class="md-button md-button--primary">Live Demo</a>

<a href="https://github.com/Goldmanski/cv-tailor" class="md-button">GitHub</a>

</div>

---

## Jedno CV, różne możliwości

To samo doświadczenie może być istotne na bardzo różne sposoby w zależności od stanowiska.

Projekt, który jest ważny na stanowisku Data Science, może mieć znacznie mniejsze znaczenie na stanowisku Software Engineering.

Zamiast ręcznie przepisywać profil zawodowy za każdym razem, CVTailor bierze informacje o kandydacie wraz z docelową ofertą pracy i wykorzystuje ten kontekst do stworzenia bardziej dopasowanej wersji profilu.

Celem nie jest wymyślanie doświadczenia.

Chodzi o **zmianę akcentów**.

---

## Gdzie AI powinno się zatrzymać?

To stało się jedną z najciekawszych części projektu.

Można byłoby poprosić LLM o wygenerowanie całego CV — łącznie ze strukturą i formatowaniem.

Oznaczałoby to jednak również oddanie probabilistycznemu systemowi kontroli nad czymś, co powinno zachowywać się w przewidywalny sposób.

Dlatego świadomie podzieliłem odpowiedzialności.

**AI generuje i dopasowuje treść.**

**Aplikacja kontroluje dokument.**

Końcowy PDF jest tworzony przez deterministyczną logikę aplikacji, a nie przez model językowy.

Oznacza to, że końcowy dokument za każdym razem przestrzega tych samych zasad dotyczących struktury i formatowania.

---

## Problem jednej strony

Utrzymanie CV na jednej stronie brzmi prosto, dopóki ilość informacji nie zaczyna się zmieniać.

Jedna osoba może mieć dwa projekty i niewielkie doświadczenie zawodowe.

Inna może mieć kilka lat doświadczenia, wiele kursów, projektów, języków i dodatkowych aktywności.

Dokument nadal musi się zmieścić.

To sprawiło, że generowanie PDF stało się interesującym problemem samym w sobie.

Aplikacja musi radzić sobie ze zmieniającą się ilością tekstu, zawijaniem wierszy, odstępami i dostępną przestrzenią na stronie, jednocześnie zachowując czytelność końcowego dokumentu.

Rezultatem nie jest po prostu statyczny szablon z tekstem wstawionym do wcześniej zdefiniowanych pól.

Jest to dokument, który **dostosowuje się do otrzymanej treści**.

---

## Co dzieje się, gdy dane wejściowe są niekompletne?

Automatyzacja tworzenia CV wiąże się z jeszcze jednym praktycznym problemem.

Aplikacja nie może stworzyć wartościowego dokumentu, jeśli brakuje ważnych informacji.

Dlatego CVTailor sprawdza informacje przed rozpoczęciem generowania.

Obejmuje to między innymi dane kontaktowe oraz kompletność dynamicznie dodawanych sekcji.

Idea jest prosta:

> **Dobra automatyzacja zaczyna się od kompletnych danych.**

Zamiast tworzyć wyglądające profesjonalnie, ale niekompletne CV, aplikacja zatrzymuje proces i informuje użytkownika, na co powinien zwrócić uwagę.

---

## Mały przykład współpracy człowieka i AI

Proces można postrzegać jako trzy różne odpowiedzialności:

**Użytkownik** dostarcza doświadczenie i decyduje, co jest prawdą.

**AI** pomaga dopasować przekaz do danej możliwości.

**Aplikacja** dba o to, aby końcowy dokument przestrzegał przewidywalnych zasad.

Ten podział jest dla mnie ciekawszy niż samo poproszenie LLM o „napisanie CV”.

Pokazuje, jak generatywna AI może być użyteczna **wewnątrz większego deterministycznego procesu**, bez konieczności kontrolowania wszystkiego wokół siebie.

---

## Gdzie AI wnosi największą wartość?

Projekt skłonił mnie do zastanowienia się, gdzie AI rzeczywiście wnosi wartość.

Oczywistą odpowiedzią byłoby:

> „Pozwól AI wygenerować CV.”

Ale ciekawsza odpowiedź okazała się następująca:

> **„Pozwól AI zająć się częścią wymagającą interpretacji, a przewidywalne elementy pozostaw pod kontrolą zwykłego oprogramowania.”**

Różnica jest niewielka, ale zmienia sposób projektowania całej aplikacji.

---

## Projektowanie granicy

CVTailor był ćwiczeniem w łączeniu dwóch bardzo różnych rodzajów zachowania oprogramowania.

Generatywna AI jest elastyczna i probabilistyczna.

Generowanie dokumentów musi być uporządkowane i przewidywalne.

Zamiast traktować te cechy jako problem, wykorzystałem je do podziału aplikacji na odpowiedzialności.

Projekt stał się więc mniej kwestią generowania CV, a bardziej próbą odpowiedzi na szersze pytanie:

**Gdzie AI powinno podejmować decyzje, a gdzie powinno przejąć kontrolę tradycyjne oprogramowanie?**

---

## Poznaj aplikację

<div class="hero-buttons">

<a href="https://cv-tailor-ai.streamlit.app" class="md-button md-button--primary">Live Demo</a>

<a href="https://github.com/Goldmanski/cv-tailor" class="md-button">GitHub</a>

</div>