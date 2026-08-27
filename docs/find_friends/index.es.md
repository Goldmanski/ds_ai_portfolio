# Find Friends

## ¿Puede un modelo de Machine Learning encontrar personas similares a ti?

¿Qué hace que dos personas sean similares?

¿Es su edad?
¿Su educación?
¿Las cosas que les gustan?

¿O es una combinación de características que resulta difícil de detectar a primera vista?

Find Friends explora esta cuestión utilizando una sencilla encuesta inicial.

En lugar de decirle al modelo cómo deberían ser los grupos de personas «correctos», dejé que Machine Learning los descubriera.

---

## Explorar la aplicación

<div class="hero-buttons">

<a href="https://find-friends-app-goldmanski.streamlit.app" class="md-button md-button--primary">Live Demo</a>

<a href="https://github.com/Goldmanski/find_friends_app" class="md-button">GitHub</a>

</div>

---

## Dejar que los datos decidan

El conjunto de datos contiene 140 respuestas de la encuesta.

Cada persona está descrita mediante solo cinco características:

- edad
- educación
- animales favoritos
- lugar favorito
- género

A primera vista, estas preguntas pueden no parecer suficientes para decirnos mucho sobre una persona.

Pero juntas crean patrones.

Lo interesante es que no definí esos patrones de antemano.

En su lugar, se pidió al modelo de Machine Learning que encontrara grupos de personas que fueran similares según sus respuestas.

---

## No hay una respuesta correcta — solo patrones

Esto es lo que diferencia el proyecto de un problema de predicción típico.

No existe una columna que diga:

> «Esta persona pertenece al Grupo A».

No hay una respuesta correcta predefinida que el modelo deba aprender.

El modelo tiene que descubrir por sí mismo la estructura presente en los datos.

Esta es la idea detrás del **aprendizaje no supervisado (unsupervised learning)**.

En este proyecto, el clustering K-Means divide a los participantes en grupos basándose en las similitudes entre sus perfiles.

El resultado no es una predicción de algo cuya respuesta ya conocemos.

Es un intento de responder a una pregunta más abierta:

> **¿Qué grupos existen de forma natural en estos datos?**

---

## Entonces... ¿a quién te pareces más?

Una vez descubiertos los grupos, el modelo puede utilizarse con una persona nueva.

Respondes a las mismas cinco preguntas.

La aplicación encuentra entonces el grupo cuyas características son más similares a tu perfil.

Pero no se limita a mostrar un número de cluster.

También muestra cómo es ese grupo.

Puedes ver aspectos como:

- cuántas personas pertenecen al grupo,
- qué porcentaje de los participantes representan,
- su distribución de edad,
- educación,
- animales favoritos,
- lugares favoritos,
- y distribución por género.

De repente, un resultado de Machine Learning se convierte en algo que realmente puedes explorar.

---

## Cuando Machine Learning encuentra un grupo, ¿cómo lo llamas?

Un número de cluster es útil para un modelo, pero no resulta especialmente significativo para una persona.

Cluster 0 no dice demasiado.

Por eso el proyecto añade otro paso después del proceso de clustering.

Las características de cada grupo descubierto se envían a un LLM, que genera un nombre y una descripción del cluster comprensibles para una persona.

Esto crea una división interesante de responsabilidades:

**Machine Learning descubre los grupos.**

**El LLM ayuda a explicar cómo son esos grupos.**

La aplicación puede presentar entonces el resultado como algo que una persona puede entender realmente, en lugar de mostrar simplemente un número de cluster.

Es un pequeño ejemplo de dos enfoques diferentes de AI trabajando juntos: uno encuentra la estructura en los datos y el otro ayuda a convertir esa estructura en una explicación comprensible.

---

## De un notebook a una aplicación

El experimento de Machine Learning comenzó en un notebook.

Allí se podían explorar los datos, entrenar el modelo de clustering y analizar los grupos obtenidos.

Pero un experimento se vuelve más interesante cuando otra persona puede interactuar con él.

El pipeline entrenado se guarda y vuelve a utilizarse en la aplicación Streamlit.

Un usuario nuevo no vuelve a ejecutar el proceso de entrenamiento.

Simplemente proporciona sus respuestas y recibe un resultado basado en los grupos descubiertos durante el análisis original.

Esto crea un recorrido completo:

**datos de la encuesta → exploración → grupos descubiertos → modelo guardado → nuevo usuario → resultado interactivo**

---

## De los clusters a las explicaciones

La parte más interesante de este proyecto fue ver cómo dos modelos diferentes pueden desempeñar funciones completamente distintas.

El modelo de clustering no intenta explicar nada. Simplemente busca estructura en los datos.

El LLM hace algo completamente diferente. Toma las características de los grupos descubiertos y las convierte en descripciones que tienen más sentido para una persona.

Ninguno de estos pasos sería igual de útil por sí solo.

Un cluster sin explicación puede ser difícil de interpretar.

Un LLM describiendo grupos que nunca fueron descubiertos a partir de los datos no tendría nada significativo que explicar.

Juntos crean un flujo sencillo que va desde **encontrar patrones hasta hacerlos comprensibles**.

---

## Descubrir la estructura de los datos

Find Friends fue uno de mis pasos desde el análisis de datos hacia la construcción de sistemas de Machine Learning.

Me enseñó que Machine Learning no siempre tiene que responder a una pregunta con un único valor predicho.

A veces, el resultado interesante es la **estructura oculta dentro de los datos**.

También me mostró que encontrar un patrón es solo una parte del problema.

Si el resultado va a ser útil para una persona, necesitas entenderlo y encontrar una forma de comunicarlo.

En este proyecto, eso significó combinar dos enfoques diferentes:

**Machine Learning para descubrir los grupos.**

**Un LLM para ayudar a explicarlos.**

> **Encontrar un patrón solo es útil cuando puedes darle sentido.**

---

## Explorar la aplicación

<div class="hero-buttons">

<a href="https://find-friends-app-goldmanski.streamlit.app" class="md-button md-button--primary">Live Demo</a>

<a href="https://github.com/Goldmanski/find_friends_app" class="md-button">GitHub</a>

</div>