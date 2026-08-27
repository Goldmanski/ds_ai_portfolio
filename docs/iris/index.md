# Iris — Exploratory Data Analysis

## Can four measurements tell us which iris species we're looking at?

The Iris dataset is small enough to understand at a glance.

And yet, it contains an interesting question:

> **Can a few simple measurements reveal the difference between three different species?**

Each flower in the dataset is described by just four measurements:

- sepal length
- sepal width
- petal length
- petal width

There is no image of the flower to look at.

Just numbers.

The goal of this project was to explore what those numbers can actually tell us.

---

## Explore the analysis

<div class="hero-buttons">

<a href="iris_report.html" class="md-button md-button--primary">Interactive Report</a>

<a href="iris_presentation.html" class="md-button">Presentation</a>

<a href="iris_report.pdf" download class="md-button">PDF Report</a>

<a href="iris_analysis.ipynb" download class="md-button">Notebook</a>

<a href="https://github.com/Goldmanski/ds_ai_portfolio/tree/main/docs/iris" class="md-button">GitHub</a>

</div>

---

## Small dataset, interesting patterns

Before looking for differences between species, the first step was understanding the data itself.

How are the measurements distributed?

Are some characteristics naturally more variable than others?

Do the measurements look similar across the entire dataset, or do certain patterns start to appear?

Exploratory Data Analysis makes it possible to answer these questions visually and statistically before trying to build any predictive model.

---

## When the flowers start separating

The interesting part begins when the four measurements are compared with one another.

Some combinations reveal much clearer differences between species than others.

A single measurement may not tell us very much.

But when several characteristics are considered together, patterns begin to emerge.

This is one of the most useful ideas behind EDA:

> **A variable that looks unremarkable on its own can become much more informative when you look at how it relates to other variables.**

---

## Which measurements matter most?

The four features do not separate the species equally well.

By looking at their distributions and relationships, we can see which measurements tend to overlap and which ones create clearer distinctions.

This turns a simple table of numbers into something much easier to reason about.

Instead of asking:

> *What values does this dataset contain?*

we can start asking:

> **Which characteristics actually help distinguish the flowers?**

---

## Seeing the structure

Tables are useful for inspecting individual values.

Visualisations are useful for seeing the bigger picture.

Plots of the feature distributions and relationships make it possible to spot clusters, overlaps and differences between the three species.

Some patterns are difficult to notice when looking at rows of numbers.

Once visualised, they become almost obvious.

That contrast is one of the reasons visualisation is such an important part of exploratory analysis.

---

## Not everything is perfectly separated

One of the interesting things about the Iris dataset is that the species do not behave identically across every feature.

Some measurements overlap considerably.

Others provide much clearer separation.

That means the dataset is not simply a collection of three perfectly isolated groups.

There are relationships and overlaps that are worth investigating.

And that is exactly where EDA becomes useful: **the goal is not to make the data look simpler than it is, but to understand its structure.**

---

## From exploration to a better question

Once the relationships between the features become visible, a natural next question appears:

> **Could these patterns be used to distinguish the species automatically?**

That question leads naturally from exploratory analysis towards Machine Learning.

But before building a model, it is useful to understand what the data already tells us.

EDA provides that foundation.

It helps reveal which variables might be useful, where the groups overlap and what kind of problem we are actually dealing with.

---

## What I found interesting

What makes Iris interesting is how much can be learned from such a small dataset.

There are only four measurements describing each flower.

Yet by comparing their distributions and relationships, we can begin to see a structure that is not obvious from the raw table.

It is a good example of how Data Science often starts.

Not with a complicated algorithm.

Just with curiosity about what the data is trying to show us.

---

## What this project taught me

Iris was an exercise in learning how to explore a dataset before trying to make predictions from it.

It reinforced the importance of understanding distributions, comparing groups and looking for relationships between variables.

Most importantly, it showed me why EDA comes before modelling.

Before asking a model to find patterns, it is worth taking the time to look for them yourself.

> **The better you understand the data, the better questions you can ask of it.**

---

## Explore the analysis

<div class="hero-buttons">

<a href="iris_report.html" class="md-button md-button--primary">Interactive Report</a>

<a href="iris_presentation.html" class="md-button">Presentation</a>

<a href="iris_report.pdf" download class="md-button">PDF Report</a>

<a href="iris_analysis.ipynb" download class="md-button">Notebook</a>

<a href="https://github.com/Goldmanski/ds_ai_portfolio/tree/main/docs/iris" class="md-button">GitHub</a>

</div>

---

## Interactive Report

<iframe
    src="iris_report.html"
    width="100%"
    height="1200"
    style="border:1px solid black;"
></iframe>