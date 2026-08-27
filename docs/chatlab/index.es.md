# ChatLab

## ¿Qué modelo merece la pena por su precio?

Cada vez hay más modelos de lenguaje entre los que elegir.

Pero cuando empiezas a utilizarlos en la práctica, aparece una pregunta sencilla:

> **¿Qué modelo ofrece el equilibrio adecuado entre calidad y coste?**

El modelo más potente no tiene por qué ser la mejor opción para todas las tareas. A veces un modelo más barato es más que suficiente. Otras veces merece la pena pagar por un modelo con mayores capacidades.

ChatLab comenzó como una forma de explorar este equilibrio en la práctica: poniendo diferentes modelos en el mismo entorno y haciendo visibles sus respuestas y sus costes.

---

## Explorar la aplicación

<div class="hero-buttons">

<a href="https://chatlab-app.streamlit.app/" class="md-button md-button--primary">Live Demo</a>

<a href="https://github.com/Goldmanski/chatlab" class="md-button">GitHub</a>

</div>

---

## Experimentar en lugar de adivinar

Es fácil preguntar qué modelo de lenguaje es «el mejor».

En la práctica, esa pregunta no resulta demasiado útil.

Un modelo excelente para una tarea difícil puede ser innecesario para una tarea sencilla. Pagar más no hace automáticamente que cada respuesta sea más valiosa.

ChatLab permite experimentar con diferentes modelos de OpenAI y observar cómo responden a tus prompts.

La idea es sencilla:

**mismo tipo de tarea → diferente modelo → diferente respuesta → diferente coste**

En lugar de depender únicamente de comparaciones de modelos encontradas en otros lugares, puedes observar el equilibrio en el contexto de tus propias conversaciones.

---

## ¿Cuándo una conversación se convierte en una aplicación?

Un único prompt y una respuesta son sencillos.

Pero un chatbot útil necesita rápidamente algo más.

¿Qué ocurre cuando empiezas otra conversación? ¿Puedes volver a una anterior? ¿Puede el chatbot comportarse de forma diferente dependiendo de lo que intentas hacer?

ChatLab considera estas funciones como responsabilidades de la aplicación, en lugar de algo que el modelo de lenguaje debería gestionar de forma mágica.

Puedes crear conversaciones independientes, cambiar entre ellas, renombrarlas y continuar donde lo dejaste.

La ventana del chat puede parecer sencilla, pero detrás de ella ocurre bastante más de lo que parece.

---

## El coste oculto de una conversación

Cuando empiezas a comparar modelos, otra pregunta se vuelve imposible de ignorar:

> **¿Cuánto costó realmente esa respuesta?**

ChatLab registra el uso de tokens devuelto por la API y lo utiliza para estimar el coste de una conversación.

La estimación se muestra tanto en USD como en PLN.

Esto hace que la diferencia entre modelos sea más tangible. Una respuesta ya no es simplemente algo que aparece en la pantalla: también tiene un coste medible.

Esto convierte la selección del modelo en una decisión más práctica.

La pregunta ya no es simplemente:

> *¿Qué modelo es mejor?*

sino:

> **¿Qué modelo es suficientemente bueno para lo que necesito, a un coste que tenga sentido?**

---

## ¿Y qué ocurre con el contexto?

Comparar respuestas individuales es solo una parte de la historia.

Una respuesta del modelo rara vez existe de forma aislada. En una conversación real, cada nuevo mensaje puede depender de lo que se ha dicho anteriormente.

ChatLab mantiene ese contexto y permite continuar varias conversaciones independientes a lo largo del tiempo.

También permite al usuario personalizar la personalidad del chatbot, haciendo que la interacción sea algo más que una secuencia de prompts sin relación.

Esta fue una lección importante al construir con LLMs: **el modelo es solo una parte de la conversación.**

---

## Mirar detrás de la conversación

Cuando un LLM se convierte en parte de una aplicación, aparece otra pregunta:

> **¿Qué está ocurriendo realmente detrás de la ventana del chat?**

ChatLab utiliza Langfuse para observar las interacciones con el modelo de lenguaje.

Esto permite mirar más allá de la respuesta final y comprender la interacción con el modelo desde la perspectiva de la aplicación.

También refuerza una idea que se volvió cada vez más importante mientras construía el proyecto:

> **Si quieres construir aplicaciones de AI útiles, necesitas entender qué ocurre cuando el modelo no se comporta como esperabas.**

---

## El equilibrio detrás de la selección del modelo

ChatLab cambió mi forma de pensar sobre la elección de modelos de lenguaje.

Existe una tendencia natural a buscar el modelo con mayores capacidades y considerarlo la opción obvia.

Pero las aplicaciones reales tienen limitaciones.

A veces la diferencia de calidad importa. A veces no. En otras ocasiones, un modelo más rápido o más barato es la opción más sensata.

Esto hace que la selección del modelo tenga menos que ver con encontrar **el mejor modelo** y más con encontrar **el modelo adecuado para el trabajo**.

ChatLab se convirtió en un pequeño entorno para explorar esta idea de primera mano.

---

## Construir alrededor del modelo

El proyecto comenzó con un chatbot, pero las lecciones más interesantes estaban relacionadas con todo lo que lo rodeaba.

Aprendí que una aplicación basada en LLM debe pensar en algo más que generar una buena respuesta.

Necesita gestionar el contexto, dar al usuario control sobre las conversaciones, hacer visible el uso y proporcionar una forma de entender qué ocurre detrás de escena.

Y, sobre todo, me mostró que trabajar con varios modelos no consiste simplemente en competir por encontrar el más potente.

Se trata de comprender los compromisos y tomar una decisión deliberada.

> **El modelo adecuado no tiene por qué ser el más potente. Es el que ofrece la calidad que necesitas a un coste que tenga sentido.**

---

## Explorar la aplicación

<div class="hero-buttons">

<a href="https://chatlab-app.streamlit.app/" class="md-button md-button--primary">Live Demo</a>

<a href="https://github.com/Goldmanski/chatlab" class="md-button">GitHub</a>

</div>