# Offer Generator

## ¿Qué ocurre cuando crear una oferta comercial se convierte en un problema de software?

Un cliente solicita una oferta.

A primera vista, el proceso parece sencillo:

Elegir productos.  
Añadir cantidades.  
Calcular el total.  
Generar un PDF.

Pero cuando intentas convertir ese proceso en una aplicación, los pequeños detalles empiezan a importar rápidamente.

¿Qué ocurre cuando se añade el mismo producto dos veces?

¿Qué pasa si falta información obligatoria del cliente?

¿Cuándo debería calcularse el total?

¿Se puede generar el PDF antes de que la oferta esté completa?

Y, quizás lo más importante:

> **¿Dónde deberían vivir realmente las reglas del negocio?**

Ese era el problema detrás de Offer Generator.

---

## Explorar la aplicación

<div class="hero-buttons">

<a href="https://offer-generator-app.streamlit.app" class="md-button md-button--primary">Live Demo</a>

<a href="https://github.com/Goldmanski/offer-generator" class="md-button">GitHub</a>

</div>

---

## De una lista de compras a una oferta real

La aplicación permite al usuario preparar una oferta comercial mediante una interfaz interactiva.

Primero se introducen los datos del cliente y los detalles de la oferta.

Después se pueden seleccionar productos de un catálogo, agrupados por categoría, y ajustar las cantidades antes de revisar la oferta final.

La aplicación mantiene la información de la oferta y calcula automáticamente su valor total.

Lo que parece una simple lista de compras se convierte así en un pequeño flujo de trabajo empresarial.

---

## El momento en que las reglas empiezan a importar

Imagina que añades el mismo producto dos veces a una oferta.

¿Debería la aplicación crear dos líneas independientes?

¿O debería reconocer que se trata del mismo producto y simplemente aumentar su cantidad?

Offer Generator gestiona esto como parte de la lógica de negocio.

La misma idea se aplica a las cantidades, los totales y la validación.

No son simplemente decisiones de interfaz.

Son **reglas de negocio**.

Y esta distinción se convirtió en una de las partes más interesantes del proyecto.

---

## ¿Qué pertenece a la interfaz?

Una de las decisiones de diseño fue evitar colocar toda la lógica directamente en la interfaz de Streamlit.

La interfaz debe permitir al usuario:

- introducir información
- seleccionar productos
- revisar la oferta
- ver mensajes de validación
- descargar el documento final

Pero no debería ser responsable de decidir qué hace válida una oferta ni de cómo funcionan las reglas de negocio.

Esa responsabilidad debe estar en otro lugar.

Esto llevó a una estructura por capas en la que diferentes partes de la aplicación tienen diferentes responsabilidades.

---

## Pensar en términos del dominio del negocio

En lugar de tratar la aplicación como una colección de pantallas y botones, el proyecto modela conceptos que existen realmente en el negocio.

Existe un **Customer**.

Existe un **Product**.

Existe un **Quote**.

Y existen **Quote Items**, que conectan los productos con la oferta.

Esta forma de pensar está inspirada en **Domain-Driven Design** — un enfoque que comienza modelando los conceptos y reglas importantes del negocio en lugar de comenzar por la interfaz de usuario.

Para una aplicación pequeña, esta estructura puede parecer innecesaria.

Pero hace que la lógica subyacente sea mucho más fácil de comprender.

---

## El PDF es el último paso

El PDF es lo que el usuario quiere finalmente.

Pero generarlo no es deliberadamente lo primero que hace la aplicación.

La oferta primero tiene que estar completa y ser válida.

Solo después de confirmar la información necesaria y comprobar que la oferta puede generarse, la aplicación crea el documento final.

Esto proporciona al flujo una dirección clara:

**Input → Reglas de negocio → Validación → PDF**

Por tanto, el PDF no es donde vive la lógica de negocio.

Es la representación final de una oferta que ya ha sido preparada.

---

## Dónde viven las reglas de negocio

El proyecto comenzó con algo que parece casi trivial:

> *Crear una oferta y convertirla en un PDF.*

Pero implementar esa idea reveló una pregunta mucho más amplia de Software Engineering.

¿Dónde debería vivir cada responsabilidad?

La interfaz debe gestionar la interacción.

La capa de aplicación debe coordinar las operaciones.

El dominio debe contener las reglas de negocio.

Y la generación del PDF debe centrarse en producir el documento.

Una vez separadas estas responsabilidades, la aplicación resulta mucho más fácil de comprender.

---

## Probar las reglas

La lógica de negocio es especialmente valiosa cuando puede probarse de forma independiente de la interfaz.

Por eso Offer Generator incluye pruebas unitarias para su lógica de negocio.

Esto importa porque la pregunta importante no es solo:

> *¿La aplicación muestra lo correcto?*

También es:

> **¿La aplicación se comporta correctamente cuando se aplican las reglas?**

Esta distinción se vuelve cada vez más importante cuando un prototipo sencillo crece hasta convertirse en una aplicación empresarial real.

---

## Del flujo de trabajo al modelo de dominio

Offer Generator cambió mi forma de pensar sobre las aplicaciones de software.

Una aplicación empresarial no es simplemente una interfaz de usuario conectada a unas pocas funciones.

Incluso un flujo de trabajo relativamente pequeño puede contener sus propios conceptos, reglas y restricciones.

El proyecto me proporcionó experiencia práctica con:

- modelado del dominio
- separación de responsabilidades
- arquitectura por capas
- validación
- pruebas automatizadas
- generación de PDF

Más importante aún, me mostró por qué existe la arquitectura de software.

> **Una buena arquitectura no consiste en añadir más capas. Consiste en dar a cada parte del sistema una responsabilidad clara.**

---

## Explorar la aplicación

<div class="hero-buttons">

<a href="https://offer-generator-app.streamlit.app" class="md-button md-button--primary">Live Demo</a>

<a href="https://github.com/Goldmanski/offer-generator" class="md-button">GitHub</a>

</div>