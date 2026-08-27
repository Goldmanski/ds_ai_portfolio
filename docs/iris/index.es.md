# Iris — Análisis exploratorio de datos

## ¿Pueden cuatro mediciones decirnos qué especie de iris estamos observando?

El conjunto de datos Iris es lo suficientemente pequeño como para entenderlo de un vistazo.

Y, aun así, contiene una pregunta interesante:

> **¿Pueden unas pocas mediciones sencillas revelar la diferencia entre tres especies diferentes?**

Cada flor del conjunto de datos se describe mediante solo cuatro mediciones:

- longitud del sépalo
- anchura del sépalo
- longitud del pétalo
- anchura del pétalo

No hay una imagen de la flor que podamos observar.

Solo números.

El objetivo de este proyecto fue explorar qué pueden contarnos realmente esos números.

---

## Explorar el análisis

<div class="hero-buttons">

<a href="../../iris/iris_report.html" class="md-button md-button--primary">Informe interactivo</a>

<a href="../../iris/iris_presentation.html" class="md-button">Presentación</a>

<a href="../../iris/iris_report.pdf" download class="md-button">Informe PDF</a>

<a href="../../iris/iris_analysis.ipynb" download class="md-button">Notebook</a>

<a href="https://github.com/Goldmanski/ds_ai_portfolio/tree/main/docs/iris" class="md-button">GitHub</a>

</div>

---

## Un conjunto de datos pequeño, patrones interesantes

Antes de buscar diferencias entre las especies, el primer paso fue comprender los propios datos.

¿Cómo se distribuyen las mediciones?

¿Son algunas características naturalmente más variables que otras?

¿Las mediciones parecen similares en todo el conjunto de datos o empiezan a aparecer determinados patrones?

El Análisis Exploratorio de Datos permite responder a estas preguntas de forma visual y estadística antes de intentar construir un modelo predictivo.

---

## Cuando las flores empiezan a separarse

La parte interesante comienza cuando comparamos las cuatro mediciones entre sí.

Algunas combinaciones revelan diferencias mucho más claras entre las especies que otras.

Una sola medición puede no decirnos demasiado.

Pero cuando consideramos varias características al mismo tiempo, empiezan a aparecer patrones.

Esta es una de las ideas más útiles detrás del EDA:

> **Una variable que parece poco relevante por sí sola puede resultar mucho más informativa cuando observamos cómo se relaciona con otras variables.**

---

## ¿Qué mediciones son más importantes?

Las cuatro características no separan las especies con la misma eficacia.

Al observar sus distribuciones y relaciones, podemos ver qué mediciones presentan mayor solapamiento y cuáles crean diferencias más claras.

Esto convierte una simple tabla de números en algo mucho más fácil de interpretar.

En lugar de preguntar:

> *¿Qué valores contiene este conjunto de datos?*

podemos empezar a preguntar:

> **¿Qué características ayudan realmente a distinguir las flores?**

---

## Ver la estructura

Las tablas son útiles para examinar valores individuales.

Las visualizaciones ayudan a ver el panorama general.

Los gráficos de las distribuciones y relaciones entre las características permiten detectar agrupaciones, solapamientos y diferencias entre las tres especies.

Algunos patrones son difíciles de detectar al observar filas de números.

Una vez visualizados, resultan casi evidentes.

Ese contraste es una de las razones por las que la visualización es una parte tan importante del análisis exploratorio.

---

## No todo está perfectamente separado

Una de las características interesantes del conjunto de datos Iris es que las especies no se comportan de forma idéntica en todas las características.

Algunas mediciones presentan un solapamiento considerable.

Otras ofrecen una separación mucho más clara.

Esto significa que el conjunto de datos no es simplemente una colección de tres grupos perfectamente aislados.

Existen relaciones y solapamientos que merece la pena investigar.

Y precisamente ahí es donde el EDA resulta útil: **el objetivo no es hacer que los datos parezcan más sencillos de lo que son, sino comprender su estructura.**

---

## De la exploración a una mejor pregunta

Una vez que las relaciones entre las características se hacen visibles, aparece una pregunta natural:

> **¿Podrían utilizarse estos patrones para distinguir automáticamente las especies?**

Esta pregunta lleva de forma natural desde el análisis exploratorio hacia Machine Learning.

Pero antes de construir un modelo, es útil comprender lo que los datos ya nos están diciendo.

El EDA proporciona esa base.

Ayuda a descubrir qué variables pueden ser útiles, dónde se solapan los grupos y con qué tipo de problema estamos tratando realmente.

---

## Cuando cuatro mediciones cuentan una historia

Lo que hace interesante a Iris es cuánto podemos aprender de un conjunto de datos tan pequeño.

Solo hay cuatro mediciones para describir cada flor.

Y, sin embargo, al comparar sus distribuciones y relaciones, podemos empezar a ver una estructura que no resulta evidente en la tabla original.

Es un buen ejemplo de cómo suele comenzar Data Science.

No con un algoritmo complicado.

Simplemente con curiosidad por descubrir qué intentan mostrarnos los datos.

---

## De los patrones visuales a Machine Learning

Iris fue un ejercicio para aprender a explorar un conjunto de datos antes de intentar utilizarlo para hacer predicciones.

Reforzó la importancia de comprender las distribuciones, comparar grupos y buscar relaciones entre variables.

Sobre todo, me mostró por qué el EDA precede al modelado.

Antes de pedirle a un modelo que encuentre patrones, merece la pena dedicar tiempo a buscarlos nosotros mismos.

> **Cuanto mejor entiendes los datos, mejores preguntas puedes hacerles.**

---

## Explorar el análisis

<div class="hero-buttons">

<a href="../../iris/iris_report.html" class="md-button md-button--primary">Informe interactivo</a>

<a href="../../iris/iris_presentation.html" class="md-button">Presentación</a>

<a href="../../iris/iris_report.pdf" download class="md-button">Informe PDF</a>

<a href="../../iris/iris_analysis.ipynb" download class="md-button">Notebook</a>

<a href="https://github.com/Goldmanski/ds_ai_portfolio/tree/main/docs/iris" class="md-button">GitHub</a>

</div>

---

## Informe interactivo

<iframe
    src="../../iris/iris_report.html"
    width="100%"
    height="1200"
    style="border:1px solid black;">
</iframe>