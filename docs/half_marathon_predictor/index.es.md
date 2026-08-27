# Half Marathon Predictor

## Un modelo de predicción con una interfaz en lenguaje natural

¿Qué pasaría si pudieras pedir una predicción a un modelo de Machine Learning sin rellenar un formulario?

Esa fue la idea detrás de Half Marathon Predictor.

En lugar de pedir al usuario que introduzca su edad, sexo y tiempo en 5 km en campos separados, la aplicación le permite describirse de forma natural:

> Tengo 28 años, soy hombre y mi tiempo en 5 km es de 22 minutos.

La aplicación extrae la información relevante del mensaje y la utiliza como entrada para un modelo tradicional de regresión de Machine Learning.

---

## Explorar la aplicación

<div class="hero-buttons">

<a href="https://half-marathon-predictor.streamlit.app" class="md-button md-button--primary">Live Demo</a>

<a href="https://github.com/Goldmanski/half_marathon_predictor" class="md-button">GitHub</a>

</div>

---

## De los datos del corredor a la predicción

La parte de Machine Learning del proyecto se basa en datos de la Media Maratón de Wrocław.

El modelo aprende la relación entre la **edad, el sexo y el rendimiento en 5 km** de un corredor y su tiempo esperado de finalización de la media maratón.

La parte más interesante del proyecto llegó después.

Quería que la aplicación final se sintiera menos como un formulario de Machine Learning y más como una conversación.

Esto llevó a una separación sencilla pero útil:

**El LLM entiende al corredor.**

**Machine Learning realiza la predicción.**

El modelo de lenguaje no predice por sí mismo el tiempo de la carrera. Solo transforma una descripción informal en datos estructurados que el modelo de predicción puede interpretar.

---

## ¿Por qué utilizar un LLM?

Una aplicación tradicional de predicción podría tener este aspecto:

Edad:        [ 28 ]

Sexo:        [ M ]

Tiempo en 5 km: [ 22:00 ]

             ↓

         Predicción

Half Marathon Predictor utiliza un enfoque diferente:

«Tengo 28 años, soy hombre y corro 5 km en 22 minutos.»

                    ↓

              GPT-4.1 Mini

                    ↓

        Datos estructurados del corredor

                    ↓

          Modelo de regresión

                    ↓

        Estimación de la media maratón

De esta forma, el LLM actúa como una **interfaz en lenguaje natural**, no como el motor de predicción.

Esta distinción es una de las ideas principales del proyecto.

---

## Gestión de información incompleta

El lenguaje natural también introduce un nuevo problema: los usuarios no siempre proporcionan toda la información que el modelo necesita.

Por ejemplo:

> Tengo 28 años y soy hombre.

La aplicación puede reconocer que **falta el tiempo en 5 km** y pedirlo antes de intentar realizar la predicción.

Esto significa que el LLM no solo extrae valores — también ayuda a la aplicación a determinar si dispone de suficiente información para continuar.

---

## La frontera entre AI y Machine Learning

El proyecto combina dos enfoques que a menudo se presentan por separado:

**Machine Learning** se encarga de la predicción numérica.

**La tecnología LLM** se encarga de hacer más natural la interacción con ese modelo.

Ninguno de los dos componentes sustituye al otro.

El LLM aporta flexibilidad a nivel de interfaz, mientras que el modelo de regresión sigue siendo responsable de la predicción real.

Este proyecto fue un buen ejemplo de cómo se puede añadir un LLM a un flujo de trabajo de Machine Learning existente sin convertir todo el sistema en una aplicación basada en LLM.

---

## Observabilidad

Como la aplicación depende de un LLM, también quería poder ver qué estaba ocurriendo dentro de esa parte del sistema.

El proyecto utiliza **Langfuse** para rastrear las interacciones con el LLM e inspeccionar el proceso de extracción.

Esto permite distinguir entre los problemas que ocurren en la capa de procesamiento del lenguaje y los problemas relacionados con la propia predicción de Machine Learning.

---

## Diseñar con responsabilidades claras

La lección más importante no fue el propio modelo de predicción.

Fue aprender cómo diferentes componentes pueden tener responsabilidades claramente definidas dentro de una misma aplicación.

El proyecto reúne:

- Machine Learning,
- procesamiento del lenguaje natural,
- validación de datos estructurados,
- desarrollo de aplicaciones,
- observabilidad,
- despliegue.

El resultado es un pequeño ejemplo de una idea más amplia:

> **La AI no siempre tiene que sustituir a un modelo existente. A veces puede simplemente hacer que ese modelo sea más fácil de utilizar para las personas.**

---

## Explorar la aplicación

<div class="hero-buttons">

<a href="https://half-marathon-predictor.streamlit.app" class="md-button md-button--primary">Live Demo</a>

<a href="https://github.com/Goldmanski/half_marathon_predictor" class="md-button">GitHub</a>

</div>