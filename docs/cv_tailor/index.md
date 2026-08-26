# CVTailor

## Overview

CVTailor is an AI-powered Streamlit application for creating professional, job-tailored CVs and generating one-page PDF documents.

The application allows users to provide their professional information, target job offer and company details, and generate a tailored professional profile using the OpenAI API.

The project combines AI-generated content with deterministic PDF generation, input validation and dynamic document layout.

<div class="hero-buttons">

<a href="https://cv-tailor-ai.streamlit.app" class="md-button md-button--primary">Live Demo</a>

<a href="https://github.com/Goldmanski/cv-tailor" class="md-button">GitHub</a>

</div>

---

## Problem

Creating a CV for each individual job opportunity can require repeatedly adapting the same professional information to a specific role and employer.

CVTailor explores an AI-assisted approach where the candidate provides their professional background together with a target job offer and employer information.

The application uses that context to generate a tailored professional profile while keeping the final document generation deterministic.

---

## Solution

The application combines structured user input, validation, AI-generated content and deterministic PDF generation:

```text
User
  │
  ├── Personal Information
  ├── Professional Experience
  ├── Projects
  ├── Education
  ├── Skills
  └── Additional Information
  │
  ▼
Streamlit
  │
  ▼
Input Validation
  │
  ├── Missing Required Fields
  └── Invalid Input
  │
  ▼
OpenAI API
  │
  ▼
Tailored Professional Profile
  │
  ▼
CV Factory
  │
  ▼
PDF Generator
  │
  ├── Dynamic Layout
  ├── Custom Fonts
  └── One-Page Validation
  │
  ▼
Generated CV
  │
  ▼
PDF Download
```

The LLM is used for generating tailored professional content.

The final PDF is generated separately using deterministic application logic.

---

## Architecture

The project is divided into several logical components.

### Input and UI Layer

**Streamlit** provides:

- the user interface,
- form handling,
- validation feedback,
- CV preview,
- PDF download functionality.

Users can provide required information and optionally add:

- experience,
- education,
- courses,
- projects,
- skills,
- languages,
- portfolio information,
- additional activities.

### Validation Layer

The application validates the provided information before generating the CV.

Validation covers:

- missing required fields,
- invalid email addresses,
- invalid phone numbers,
- invalid URLs,
- incomplete dynamic sections,
- generated CV length.

CV generation is prevented when required information is missing or invalid.

### AI Layer

The application uses the **OpenAI API** to generate a short professional profile tailored to the candidate's background and target job offer.

The AI therefore focuses on generating and adapting content rather than directly constructing the PDF document.

### CV Factory

`cv_factory.py` is responsible for constructing the CV content and organizing individual sections.

It provides templates and helpers for sections such as:

- professional profile,
- projects,
- experience,
- education,
- courses,
- languages,
- additional information.

### PDF Generation Layer

`pdf_generator.py` generates the final PDF document using **ReportLab**.

The generator handles:

- document layout,
- custom fonts,
- section formatting,
- dynamic spacing,
- one-page layout validation.

This separation keeps AI-generated content independent from deterministic document generation.

---

## How It Works

The complete workflow consists of the following steps:

1. The user enters their personal and professional information.
2. The user provides the target job offer.
3. The user can optionally describe the employer and role.
4. Additional professional information can be added.
5. The application validates the provided data.
6. The OpenAI API generates a tailored professional profile.
7. CV Factory assembles the CV content.
8. The PDF Generator builds the final document.
9. The layout is adjusted to fit the available page space.
10. The generated CV is presented to the user.
11. The final PDF can be downloaded directly from the application.

---

## Dynamic PDF Generation

One of the main engineering aspects of the project is that the PDF is not generated from a static template with fixed content.

The amount of information in a CV can vary considerably between users.

The PDF generator therefore dynamically handles:

- content length,
- section spacing,
- text wrapping,
- page margins,
- section layout,
- available page space.

The application also validates whether the generated CV can fit into the intended one-page layout.

---

## Generated Documents

CVTailor can generate different CV structures depending on the candidate's background and the information provided.

The repository contains several examples of generated CVs:

```text
cv1.PNG
cv2.PNG
cv3.PNG
```

The generated document is available directly from the application as a PDF download.

---

## Technology Stack

<div class="tech-list">

<span>Python</span>
<span>Streamlit</span>
<span>OpenAI</span>
<span>ReportLab</span>
<span>python-dotenv</span>

</div>

---

## Project Structure

```text
cv-tailor/
│
├── app.py
├── cv_factory.py
├── pdf_generator.py
├── requirements.txt
├── .gitignore
├── README.md
│
├── fonts/
│   ├── DejaVuSans.ttf
│   └── DejaVuSans-Bold.ttf
│
└── screenshots/
    ├── cv1.PNG
    ├── cv2.PNG
    ├── cv3.PNG
    ├── workflow1.PNG
    ├── workflow2.PNG
    └── workflow3.PNG
```

---

## Example Workflow

1. Enter personal information.
2. Add a short professional description.
3. Provide the target job offer.
4. Add information about the employer and role.
5. Optionally add experience, education, skills, projects, languages and portfolio information.
6. Validate the provided data.
7. Generate the tailored CV.
8. Review the generated document.
9. Download the final PDF.

---

## Deployment

The application is deployed using **Streamlit**.

API credentials are provided through environment variables locally and Streamlit Secrets in the deployed application.

The OpenAI API key is not intended to be stored directly in the repository.

---

## What This Project Demonstrates

This project demonstrates how an LLM can be integrated into a practical document-generation workflow without making the document-generation process itself dependent on the model.

The main concepts demonstrated are:

- LLM integration,
- structured user input,
- input validation,
- AI-assisted content generation,
- separation of AI logic from deterministic processing,
- automated PDF generation,
- dynamic document layout,
- one-page document validation,
- Streamlit application development,
- cloud deployment.

The central design idea is:

> **Use AI to adapt the content, and deterministic software to control the final document.**

---

<div class="hero-buttons">

<a href="https://cv-tailor-ai.streamlit.app" class="md-button md-button--primary">Open Live Demo</a>

<a href="https://github.com/Goldmanski/cv-tailor" class="md-button">View Source Code</a>

</div>