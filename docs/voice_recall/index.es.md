# Voice Recall

## ¿Y si pudieras buscar tus notas por significado?

A menudo recordamos **en qué estábamos pensando**, pero no las palabras exactas que utilizamos.

Esto se convierte en un problema cuando tus notas empiezan a crecer.

Puede que recuerdes haber escrito algo sobre la preparación para una carrera, pero encontrar la frase exacta que escribiste es otra historia.

Voice Recall explora una idea sencilla:

> **¿Y si buscar en tus notas funcionara más como recordar y menos como buscar palabras clave?**

La aplicación permite grabar una nota de voz, convertirla en texto y posteriormente buscar tus notas utilizando lenguaje natural.

---

## Explorar la aplicación

<div class="hero-buttons">

<a href="https://voice-recall.streamlit.app" class="md-button md-button--primary">Live Demo</a>

<a href="https://github.com/Goldmanski/voice-recall" class="md-button">GitHub</a>

</div>

---

## De la voz a una memoria que se puede buscar

El proyecto comienza con algo muy natural: hablar.

Grabas una nota en lugar de escribirla.

La aplicación transcribe tu voz y te permite revisar el resultado antes de guardarlo. Después, la nota se transforma en una representación de su significado y se almacena para poder buscarla más adelante.

La parte interesante aparece cuando intentas encontrar algo.

Imagina que una de tus notas dice:

> Debería aumentar gradualmente mi kilometraje semanal antes de la media maratón.

Meses después, podrías buscar:

> planes de entrenamiento para correr

No es necesario que esas palabras exactas aparezcan en la nota original.

El sistema busca **un significado similar**, no un vocabulario idéntico.

---

## La diferencia entre palabras y significado

Una búsqueda tradicional por palabras clave podría preguntar:

> ¿Contiene esta nota la palabra «entrenamiento»?

Voice Recall plantea una pregunta diferente:

> ¿Cuál de mis notas está más relacionada con «planes de entrenamiento para correr»?

Esta distinción es el corazón del proyecto.

El texto se convierte en representaciones numéricas llamadas **embeddings**. Las notas con significados similares tienden a quedar más cerca unas de otras dentro de esta representación.

Esto hace posible buscar en las notas utilizando conceptos en lugar de frases exactas.

---

## Un pequeño experimento con la memoria humana

Hay algo interesante en este enfoque.

Las personas rara vez recuerdan la información palabra por palabra.

Normalmente recordamos la **idea**.

Puedes recordar que tenías una nota sobre aumentar tu distancia de carrera, aunque la nota original nunca utilizara las palabras que estás utilizando ahora para buscarla.

Voice Recall intenta hacer que el ordenador funcione de una forma similar.

En lugar de obligar al usuario a recordar cómo estaba escrita una información, la aplicación permite buscar aquello **de lo que trataba**.

---

## ¿Por qué la voz?

El proyecto también explora una forma diferente de crear información.

Escribir una nota introduce cierta fricción.

Hablar suele ser más rápido, especialmente cuando una idea aparece de repente y no quieres interrumpir lo que estás haciendo para escribirla.

Esto crea un flujo sencillo:

**hablar → transcribir → revisar → recordar → buscar**

Por tanto, la interfaz de voz no es solo un método de entrada diferente. Forma parte de la idea del proyecto: **capturar pensamientos con la menor fricción posible.**

---

## Cómo funciona la búsqueda semántica

Hay varios pasos entre decir algo y encontrarlo de nuevo.

Primero, el audio grabado se convierte en texto.

Después, el usuario puede corregir o editar la transcripción antes de guardarla.

El texto final se convierte en un embedding y se almacena en una base de datos vectorial.

Cuando se realiza una búsqueda, la consulta pasa por el mismo proceso.

El sistema compara entonces la consulta con las notas almacenadas y devuelve las que presentan mayor similitud semántica.

La idea importante es que **la nota y la consulta de búsqueda están representadas en el mismo espacio semántico**.

---

## Por qué la búsqueda semántica cambia la experiencia

El proyecto hizo que la idea de búsqueda semántica resultara mucho más tangible.

Es fácil describir los embeddings como números que representan significado. Es mucho más interesante cuando puedes escribir una frase, buscar una frase completamente diferente y aun así recuperar la nota original porque ambas ideas están relacionadas.

Ese cambio — de buscar coincidencias entre palabras a comparar significados — es lo que hace que este proyecto me resulte especialmente interesante.

---

## De las notas de voz a la memoria semántica

Voice Recall reunió varias ideas que están adquiriendo cada vez más importancia en las aplicaciones de AI:

- convertir información humana no estructurada en datos utilizables,
- representar el texto según su significado semántico,
- buscar información mediante similitud,
- combinar varios componentes de AI en un único flujo de trabajo.

Más importante aún, el proyecto me mostró que una aplicación de AI no tiene necesariamente que generar algo nuevo.

A veces, lo más útil que puede hacer es ayudarte a **encontrar algo que ya sabías.**

---

## Explorar la aplicación

<div class="hero-buttons">

<a href="https://voice-recall.streamlit.app" class="md-button md-button--primary">Live Demo</a>

<a href="https://github.com/Goldmanski/voice-recall" class="md-button">GitHub</a>

</div>