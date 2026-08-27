# CVTailor

## Can AI tailor your CV without taking control of it?

A job application rarely starts with a blank page.

Most of us already have the experience, projects and skills. The difficult part is deciding **which parts matter most for a particular opportunity** and how to present them clearly.

CVTailor started with a simple idea: let AI help with that part.

But there was an important boundary I wanted to keep.

The language model could help decide **what to say** — but it shouldn't decide **how the final document is built**.

---

## Explore the application

<div class="hero-buttons">

<a href="https://cv-tailor-ai.streamlit.app" class="md-button md-button--primary">Live Demo</a>

<a href="https://github.com/Goldmanski/cv-tailor" class="md-button">GitHub</a>

</div>

---

## One CV, different opportunities

The same experience can be relevant in very different ways depending on the role.

A project that is important for a Data Science position might be much less important for a Software Engineering position.

Instead of manually rewriting the professional profile every time, CVTailor takes the candidate's information together with a target job offer and uses that context to create a more relevant version of the profile.

The goal isn't to invent experience.

It is to **change the emphasis**.

---

## Where should AI stop?

This became one of the most interesting parts of the project.

It would be possible to ask an LLM to generate the entire CV — including the structure and formatting.

But that would also mean giving a probabilistic system control over something that should behave predictably.

So I deliberately split the responsibilities.

**AI generates and adapts the content.**

**The application controls the document.**

The final PDF is produced by deterministic application logic rather than by the language model.

That means the same input should result in a document that follows the same rules every time.

---

## The one-page problem

Keeping a CV to one page sounds simple until the amount of information starts changing.

One person might have two projects and little professional experience.

Another might have several years of experience, multiple courses, projects, languages and additional activities.

The document still needs to fit.

This turned PDF generation into an interesting problem of its own.

The application has to deal with changing amounts of text, wrapping, spacing and available page space while keeping the final document readable.

The result is not just a static template with text inserted into predefined boxes.

It is a document that **adjusts to the content it receives**.

---

## What happens when the input is incomplete?

There is another practical problem with automating CV creation.

The application cannot create a meaningful document if important information is missing.

CVTailor therefore validates the information before generation.

This includes things such as contact details and the completeness of dynamically added sections.

The idea is simple:

> **Don't let the automation hide a problem that should be fixed first.**

Instead of producing a polished-looking but incomplete CV, the application stops and tells the user what needs attention.

---

## A small example of human + AI collaboration

The workflow can be thought of as three different responsibilities:

**The user** provides the experience and decides what is true.

**AI** helps adapt the message to the opportunity.

**The application** makes sure the final document follows predictable rules.

That division is more interesting to me than simply asking an LLM to "write a CV".

It shows how generative AI can be useful **inside a larger deterministic workflow** without having to control everything around it.

---

## Where AI adds the most value

The project made me think about where AI actually adds value.

The obvious answer would be:

> "Let AI generate the CV."

But the more interesting answer turned out to be:

> **"Let AI handle the part that requires interpretation, and keep the predictable parts under normal software control."**

The distinction is small, but it changes how the whole application is designed.

---

## Designing the boundary

CVTailor was an exercise in combining two very different types of software behaviour.

Generative AI is flexible and probabilistic.

Document generation needs to be structured and predictable.

Instead of treating those characteristics as a problem, I used them to divide the application into responsibilities.

The project therefore became less about generating a CV and more about exploring a broader question:

**Where should AI make decisions, and where should conventional software take over?**

---

## Explore the application

<div class="hero-buttons">

<a href="https://cv-tailor-ai.streamlit.app" class="md-button md-button--primary">Live Demo</a>

<a href="https://github.com/Goldmanski/cv-tailor" class="md-button">GitHub</a>

</div>