# Titanic — Exploratory Data Analysis

## What can a dataset tell us about who survived?

The Titanic dataset is one of the most recognisable datasets in Data Science.

It is also a surprisingly good reminder that a dataset is more than a collection of numbers.

Behind every row there was a person — with an age, a gender, a ticket class and family connections. These characteristics were very different from passenger to passenger, and the analysis makes it possible to explore how they relate to survival.

This project started with a simple question:

> **What can we learn about survival by looking at the people on board?**

---

## Explore the analysis

<div class="hero-buttons">

<a href="titanic_report.html" class="md-button md-button--primary">Interactive Report</a>

<a href="titanic_presentation.html" class="md-button">Presentation</a>

<a href="titanic_report.pdf" download class="md-button">PDF Report</a>

<a href="titanic_analysis.ipynb" download class="md-button">Notebook</a>

<a href="https://github.com/Goldmanski/ds_ai_portfolio/tree/main/docs/titanic" class="md-button">GitHub</a>

</div>

---

## Start with the people, not the numbers

Before looking for patterns, the first step was understanding who was actually on the ship.

The dataset contains information about passengers such as their age, gender, ticket class and family connections.

Looking at these characteristics separately is useful.

Looking at them together is where the story starts to become interesting.

A passenger was not simply "male" or "female", "young" or "old", or "first class" or "third class".

These characteristics overlap.

And that makes the question of survival much more interesting than a single percentage.

---

## Who had the better chance of surviving?

One of the first things to investigate is whether survival was evenly distributed across the passengers.

It wasn't.

The analysis looks at survival patterns across different demographic groups and compares how characteristics such as gender, age and ticket class relate to survival.

This turns a familiar historical story into something measurable.

Instead of simply knowing that some groups survived more often than others, we can see **how those differences appear in the data**.

---

## Does ticket class tell us something?

Ticket class is one of the most interesting variables in the dataset.

It can be tempting to treat it as a simple ranking:

**first class → second class → third class**

But the data allows us to ask a more meaningful question:

> **How strongly is ticket class associated with survival?**

Comparing survival across classes reveals that passengers on the ship did not experience the disaster in the same way.

The analysis therefore becomes less about one variable and more about the relationships between several characteristics.

---

## What about families?

Passengers could travel with siblings, spouses, parents or children.

That makes it possible to ask another question:

> **Did travelling with family have any visible relationship with survival?**

A simple count of family members becomes more interesting once it is compared with survival.

This is a good example of what makes exploratory analysis useful: a variable that initially looks simple can reveal something worth investigating when placed in a wider context.

---

## Looking for relationships

The goal of exploratory data analysis is not to find one magical variable that explains everything.

It is to look at the data from different angles and see which relationships are worth investigating further.

The project uses filtering, grouping, descriptive statistics and visualisations to explore the dataset.

Visualisations are particularly useful here because some relationships become much easier to recognise when they are seen rather than read in a table.

The analysis therefore moves back and forth between:

**question → data → visualisation → observation → next question**

That process is at the heart of EDA.

---

## The danger of jumping to conclusions

There is an important lesson hidden in a dataset like Titanic.

Finding that two variables are related does not automatically tell us why they are related.

If one group has a higher survival rate than another, that observation is a starting point — not a complete explanation.

Exploratory analysis helps uncover patterns.

It does not, by itself, prove causation.

That distinction is easy to overlook when a chart appears to tell a convincing story.

---

## From questions to patterns

What makes the Titanic dataset particularly useful for learning is how quickly a simple question becomes a chain of questions.

Who survived?

Then:

**Was survival related to gender?**

Then:

**What about age?**

Then:

**Does ticket class change the picture?**

And:

**What happens when several of these characteristics are considered together?**

The dataset keeps encouraging you to ask another question.

That is what made this project a useful introduction to exploratory data analysis.

---

## Learning to explore before predicting

Titanic was an exercise in learning how to approach a dataset before trying to build a model from it.

It taught me to start with questions rather than immediately reaching for an algorithm.

Understand the data.

Look for patterns.

Compare groups.

Visualise relationships.

And, most importantly, be careful about what the data actually allows you to conclude.

> **Good analysis is not about finding a quick answer. It is about learning which questions are worth asking next.**

---

## Explore the analysis

<div class="hero-buttons">

<a href="titanic_report.html" class="md-button md-button--primary">Interactive Report</a>

<a href="titanic_presentation.html" class="md-button">Presentation</a>

<a href="titanic_report.pdf" download class="md-button">PDF Report</a>

<a href="titanic_analysis.ipynb" download class="md-button">Notebook</a>

<a href="https://github.com/Goldmanski/ds_ai_portfolio/tree/main/docs/titanic" class="md-button">GitHub</a>

</div>

---

## Interactive Report

<iframe
    src="titanic_report.html"
    width="100%"
    height="1200"
    style="border:1px solid black;"
></iframe>