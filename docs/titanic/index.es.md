# Titanic — Análisis exploratorio de datos

## ¿Qué puede contarnos un conjunto de datos sobre quién sobrevivió?

El conjunto de datos Titanic es uno de los más reconocibles de Data Science.

También es un recordatorio sorprendentemente bueno de que un conjunto de datos es mucho más que una colección de números.

Detrás de cada fila había una persona — con una edad, un género, una clase de billete y relaciones familiares. Estas características eran diferentes entre los pasajeros, y el análisis permite explorar cómo se relacionan con la supervivencia.

Este proyecto comenzó con una pregunta sencilla:

> **¿Qué podemos aprender sobre la supervivencia observando a las personas que estaban a bordo?**

---

## Explorar el análisis

<div class="hero-buttons">

<a href="titanic_report.html" class="md-button md-button--primary">Informe interactivo</a>

<a href="titanic_presentation.html" class="md-button">Presentación</a>

<a href="titanic_report.pdf" download class="md-button">Informe PDF</a>

<a href="titanic_analysis.ipynb" download class="md-button">Notebook</a>

<a href="https://github.com/Goldmanski/ds_ai_portfolio/tree/main/docs/titanic" class="md-button">GitHub</a>

</div>

---

## Empieza por las personas, no por los números

Antes de buscar patrones, el primer paso fue entender quién estaba realmente en el barco.

El conjunto de datos contiene información sobre los pasajeros, como su edad, género, clase del billete y relaciones familiares.

Observar estas características por separado es útil.

Observarlas juntas es donde la historia empieza a resultar interesante.

Un pasajero no era simplemente «hombre» o «mujer», «joven» o «mayor», o de «primera clase» o «tercera clase».

Estas características se superponen.

Y esto hace que la cuestión de la supervivencia sea mucho más interesante que un único porcentaje.

---

## ¿Quién tenía más posibilidades de sobrevivir?

Una de las primeras cosas que se pueden investigar es si la supervivencia estaba distribuida de forma uniforme entre los pasajeros.

No lo estaba.

El análisis estudia los patrones de supervivencia entre diferentes grupos demográficos y compara cómo características como el género, la edad y la clase del billete se relacionan con la supervivencia.

Esto convierte una historia histórica conocida en algo que se puede medir.

En lugar de saber simplemente que algunos grupos sobrevivieron con mayor frecuencia que otros, podemos ver **cómo aparecen esas diferencias en los datos**.

---

## ¿La clase del billete nos dice algo?

La clase del billete es una de las variables más interesantes del conjunto de datos.

Puede resultar tentador tratarla simplemente como un ranking:

**primera clase → segunda clase → tercera clase**

Pero los datos permiten plantear una pregunta más significativa:

> **¿Hasta qué punto está relacionada la clase del billete con la supervivencia?**

Comparar la supervivencia entre las diferentes clases muestra que los pasajeros del barco no vivieron el desastre de la misma manera.

Por tanto, el análisis deja de centrarse en una única variable y pasa a estudiar las relaciones entre varias características.

---

## ¿Y qué ocurre con las familias?

Los pasajeros podían viajar con hermanos, cónyuges, padres o hijos.

Esto permite plantear otra pregunta:

> **¿Viajar con la familia tuvo alguna relación visible con la supervivencia?**

Un simple recuento de familiares se vuelve más interesante cuando se compara con la supervivencia.

Es un buen ejemplo de lo que hace útil al análisis exploratorio: una variable que inicialmente parece sencilla puede revelar algo que merece la pena investigar cuando se coloca en un contexto más amplio.

---

## Buscar relaciones

El objetivo del análisis exploratorio de datos no es encontrar una única variable mágica que explique todo.

Es observar los datos desde diferentes perspectivas y descubrir qué relaciones merece la pena investigar más.

El proyecto utiliza filtrado, agrupación, estadísticas descriptivas y visualizaciones para explorar el conjunto de datos.

Las visualizaciones son especialmente útiles aquí porque algunas relaciones resultan mucho más fáciles de reconocer cuando se ven en lugar de leerse en una tabla.

Por eso, el análisis avanza entre:

**pregunta → datos → visualización → observación → siguiente pregunta**

Este proceso está en el centro del EDA.

---

## El peligro de sacar conclusiones demasiado rápido

Hay una lección importante escondida en un conjunto de datos como Titanic.

Encontrar una relación entre dos variables no nos dice automáticamente por qué existe esa relación.

Si un grupo presenta una tasa de supervivencia mayor que otro, esa observación es un punto de partida, no una explicación completa.

El análisis exploratorio ayuda a descubrir patrones.

Por sí solo, no demuestra causalidad.

Es fácil pasar por alto esta diferencia cuando un gráfico parece contar una historia convincente.

---

## De las preguntas a los patrones

Lo que hace especialmente útil al conjunto de datos Titanic para aprender es la rapidez con la que una pregunta sencilla se convierte en una cadena de preguntas.

¿Quién sobrevivió?

Después:

**¿La supervivencia estaba relacionada con el género?**

Luego:

**¿Y con la edad?**

Después:

**¿La clase del billete cambia la situación?**

Y:

**¿Qué ocurre cuando consideramos varias de estas características al mismo tiempo?**

El conjunto de datos continúa invitándote a formular otra pregunta.

Eso es lo que convirtió este proyecto en una introducción útil al análisis exploratorio de datos.

---

## Aprender a explorar antes de predecir

Titanic fue un ejercicio para aprender a abordar un conjunto de datos antes de intentar construir un modelo a partir de él.

Me enseñó a empezar con preguntas en lugar de recurrir inmediatamente a un algoritmo.

Entender los datos.

Buscar patrones.

Comparar grupos.

Visualizar relaciones.

Y, sobre todo, tener cuidado con lo que los datos realmente permiten concluir.

> **Un buen análisis no consiste en encontrar una respuesta rápida. Consiste en aprender qué preguntas merece la pena hacer a continuación.**

---

## Explorar el análisis

<div class="hero-buttons">

<a href="titanic_report.html" class="md-button md-button--primary">Informe interactivo</a>

<a href="titanic_presentation.html" class="md-button">Presentación</a>

<a href="titanic_report.pdf" download class="md-button">Informe PDF</a>

<a href="titanic_analysis.ipynb" download class="md-button">Notebook</a>

<a href="https://github.com/Goldmanski/ds_ai_portfolio/tree/main/docs/titanic" class="md-button">GitHub</a>

</div>

---

## Informe interactivo

<iframe
    src="titanic_report.html"
    width="100%"
    height="1200"
    style="border:1px solid black;">
</iframe>