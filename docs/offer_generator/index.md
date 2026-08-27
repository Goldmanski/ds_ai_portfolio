# Offer Generator

## What happens when creating a business offer becomes a software problem?

A customer asks for an offer.

At first, the process sounds simple:

Choose some products.  
Add quantities.  
Calculate the total.  
Generate a PDF.

But once you start turning that process into an application, small details quickly become important.

What happens when the same product is added twice?

What if required customer information is missing?

When should the total be calculated?

Can the PDF be generated before the offer is complete?

And perhaps most importantly:

> **Where should the rules of the business actually live?**

That was the problem behind Offer Generator.

---

## Explore the application

<div class="hero-buttons">

<a href="https://offer-generator-app.streamlit.app" class="md-button md-button--primary">Live Demo</a>

<a href="https://github.com/Goldmanski/offer-generator" class="md-button">GitHub</a>

</div>

---

## From a shopping list to a real offer

The application lets the user prepare a customer quotation through an interactive interface.

Customer information and offer details are entered first.

Products can then be selected from a catalogue, grouped by category, with quantities adjusted before the final offer is reviewed.

The application keeps track of the quotation and calculates its total value automatically.

What looks like a simple shopping list therefore becomes a small business workflow.

---

## The moment the rules start to matter

Imagine adding the same product to an offer twice.

Should the application create two separate lines?

Or should it recognise that it is the same product and simply increase its quantity?

Offer Generator handles this as part of the business logic.

The same idea applies to quantities, totals and validation.

These are not just interface decisions.

They are **business rules**.

And that distinction became one of the most interesting parts of the project.

---

## What belongs in the interface?

One of the design decisions was to avoid putting all of the logic directly into the Streamlit interface.

The interface should let the user:

- enter information
- select products
- review the offer
- see validation messages
- download the finished document

But it should not be responsible for deciding what makes an offer valid or how its business rules work.

That responsibility belongs somewhere else.

This led to a layered structure where different parts of the application have different jobs.

---

## Thinking in terms of the business domain

Instead of treating the application as a collection of screens and buttons, the project models concepts that exist in the business itself.

There is a **Customer**.

There is a **Product**.

There is a **Quote**.

And there are **Quote Items** connecting the products with the quotation.

This way of thinking is inspired by **Domain-Driven Design** — an approach that starts by modelling the important concepts and rules of the business rather than starting with the user interface.

For a small application, this might seem like extra structure.

But it makes the underlying logic much easier to reason about.

---

## The PDF is the final step

The PDF is what the user ultimately wants.

But generating it is deliberately not the first thing the application does.

The offer needs to be complete and valid first.

Only after the required information has been confirmed and the quotation can be generated does the application create the final document.

That gives the workflow a clear direction:

**Input → Business rules → Validation → PDF**

The PDF is therefore not where the business logic lives.

It is the final representation of an already prepared offer.

---

## Where the business rules live

The project started from something that sounds almost trivial:

> *Create a quotation and turn it into a PDF.*

But implementing that idea exposed a much bigger software-engineering question.

Where should each responsibility live?

The interface should handle interaction.

The application layer should coordinate operations.

The domain should contain the business rules.

And the PDF generation should focus on producing the document.

Once those responsibilities are separated, the application becomes much easier to understand.

---

## Testing the rules

Business logic is especially valuable when it can be tested independently from the interface.

Offer Generator therefore includes unit tests for its business logic.

This matters because the important question is not only:

> *Does the application display the right thing?*

It is also:

> **Does the application behave correctly when the rules are applied?**

That distinction becomes increasingly important as a simple prototype grows into a real business application.

---

## From workflow to domain model

Offer Generator changed the way I think about software applications.

A business application is not just a user interface connected to a few functions.

Even a relatively small workflow can contain its own concepts, rules and constraints.

The project gave me practical experience with:

- domain modelling
- separation of responsibilities
- layered architecture
- validation
- automated testing
- PDF generation

More importantly, it showed me why software architecture exists in the first place.

> **Good architecture is not about adding more layers. It is about giving each part of the system a clear responsibility.**

---

## Explore the application

<div class="hero-buttons">

<a href="https://offer-generator-app.streamlit.app" class="md-button md-button--primary">Live Demo</a>

<a href="https://github.com/Goldmanski/offer-generator" class="md-button">GitHub</a>

</div>
