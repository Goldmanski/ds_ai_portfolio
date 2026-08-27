# CVTailor

## ¿Puede la AI adaptar tu CV sin tomar el control?

Una candidatura de trabajo rara vez empieza desde una página en blanco.

La mayoría ya tenemos experiencia, proyectos y habilidades. La parte difícil es decidir **qué elementos son más relevantes para una oportunidad concreta** y cómo presentarlos de forma clara.

CVTailor nació de una idea sencilla: dejar que la AI ayude precisamente con esa parte.

Pero había un límite importante que quería mantener.

El modelo de lenguaje podía ayudar a decidir **qué decir**, pero no debería decidir **cómo se construye el documento final**.

---

## Explorar la aplicación

<div class="hero-buttons">

<a href="https://cv-tailor-ai.streamlit.app" class="md-button md-button--primary">Live Demo</a>

<a href="https://github.com/Goldmanski/cv-tailor" class="md-button">GitHub</a>

</div>

---

## Un CV, diferentes oportunidades

La misma experiencia puede ser relevante de formas muy diferentes dependiendo del puesto.

Un proyecto importante para una posición de Data Science puede ser mucho menos relevante para una posición de Software Engineering.

En lugar de reescribir manualmente el perfil profesional cada vez, CVTailor utiliza la información del candidato junto con una oferta de trabajo objetivo para crear una versión del perfil más relevante para ese contexto.

El objetivo no es inventar experiencia.

Es **cambiar el énfasis**.

---

## ¿Dónde debería detenerse la AI?

Esta se convirtió en una de las partes más interesantes del proyecto.

Sería posible pedir a un LLM que generara el CV completo, incluyendo la estructura y el formato.

Pero eso también significaría dar a un sistema probabilístico el control sobre algo que debería comportarse de forma predecible.

Por eso dividí deliberadamente las responsabilidades.

**La AI genera y adapta el contenido.**

**La aplicación controla el documento.**

El PDF final se genera mediante lógica determinista de la aplicación y no mediante el modelo de lenguaje.

Esto significa que el documento final sigue las mismas reglas estructurales y de formato cada vez.

---

## El problema de una sola página

Mantener un CV en una sola página parece sencillo hasta que empieza a cambiar la cantidad de información.

Una persona puede tener dos proyectos y poca experiencia profesional.

Otra puede tener varios años de experiencia, múltiples cursos, proyectos, idiomas y actividades adicionales.

El documento sigue teniendo que caber en una página.

Esto convirtió la generación de PDF en un problema interesante por sí mismo.

La aplicación tiene que gestionar diferentes cantidades de texto, saltos de línea, espaciado y espacio disponible en la página, manteniendo al mismo tiempo la legibilidad del documento final.

El resultado no es simplemente una plantilla estática con texto insertado en campos predefinidos.

Es un documento que **se adapta al contenido que recibe**.

---

## ¿Qué ocurre cuando la información de entrada está incompleta?

Existe otro problema práctico relacionado con la automatización de la creación de CV.

La aplicación no puede crear un documento útil si falta información importante.

Por eso CVTailor valida la información antes de generar el documento.

Esto incluye elementos como los datos de contacto y la integridad de las secciones añadidas dinámicamente.

La idea es sencilla:

> **No permitas que la automatización oculte un problema que debería solucionarse primero.**

En lugar de producir un CV con un aspecto profesional pero incompleto, la aplicación detiene el proceso e indica al usuario qué debe revisar.

---

## Un pequeño ejemplo de colaboración entre una persona y la AI

El flujo de trabajo puede entenderse como tres responsabilidades diferentes:

**El usuario** proporciona la experiencia y decide qué es verdad.

**La AI** ayuda a adaptar el mensaje a la oportunidad.

**La aplicación** garantiza que el documento final siga unas reglas predecibles.

Esta división me resulta más interesante que simplemente pedirle a un LLM que «escriba un CV».

Muestra cómo la AI generativa puede ser útil **dentro de un flujo de trabajo determinista más amplio** sin tener que controlar todo lo que la rodea.

---

## Dónde aporta más valor la AI

El proyecto me hizo pensar en dónde aporta realmente valor la AI.

La respuesta obvia sería:

> «Deja que la AI genere el CV.»

Pero la respuesta más interesante resultó ser:

> **«Deja que la AI se encargue de la parte que requiere interpretación y mantén las partes predecibles bajo el control del software tradicional.»**

La diferencia es pequeña, pero cambia la forma en que se diseña toda la aplicación.

---

## Diseñar el límite

CVTailor fue un ejercicio para combinar dos tipos de comportamiento de software muy diferentes.

La AI generativa es flexible y probabilística.

La generación de documentos necesita ser estructurada y predecible.

En lugar de tratar estas características como un problema, las utilicé para dividir la aplicación en diferentes responsabilidades.

Por eso, el proyecto terminó siendo menos una cuestión de generar un CV y más una exploración de una pregunta más amplia:

**¿Dónde debería tomar decisiones la AI y dónde debería hacerse cargo el software convencional?**

---

## Explorar la aplicación

<div class="hero-buttons">

<a href="https://cv-tailor-ai.streamlit.app" class="md-button md-button--primary">Live Demo</a>

<a href="https://github.com/Goldmanski/cv-tailor" class="md-button">GitHub</a>

</div>