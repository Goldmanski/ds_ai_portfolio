# Half Marathon Predictor

## Overview

Half Marathon Predictor is an AI-powered application that predicts a runner's expected half marathon finish time.

The application combines a Large Language Model with a Machine Learning regression model. Instead of filling out a structured form, the user describes the runner in natural language.

The system then extracts the required information, validates it and passes the structured data to the prediction model.

<div class="hero-buttons">

<a href="https://half-marathon-predictor.streamlit.app" class="md-button md-button--primary">Live Demo</a>

<a href="https://github.com/Goldmanski/half_marathon_predictor" class="md-button">GitHub</a>

</div>

---

## Problem

Traditional prediction applications usually require users to provide data through predefined input fields.

This project explores a different approach:

> Can a Large Language Model act as a natural-language interface for a traditional Machine Learning model?

The user can describe a runner in a natural way, for example:

> I am a 28-year-old male and my 5 km time is 22 minutes.

The application extracts the required information automatically and uses it as input for the prediction model.

---

## Solution

The application combines several components into one end-to-end workflow:

```text
User
  │
  ▼
Natural Language Input
  │
  ▼
GPT-4.1 Mini
  +
Instructor
  │
  ▼
Structured Runner Data
  │
  ▼
Pydantic Validation
  │
  ▼
Regression Model
  │
  ▼
Half Marathon Prediction
  │
  ▼
Streamlit UI
```

The LLM is therefore not responsible for making the prediction itself.

Its role is to act as a **structured data extraction layer** between the user and the Machine Learning model.

---

## Architecture

The application is divided into several logical components.

### UI Layer

**Streamlit** provides the user interface and handles:

- natural-language input,
- validation messages,
- prediction requests,
- displaying the final result.

### LLM Layer

**OpenAI GPT-4.1 Mini** extracts the required runner information from natural language.

The extracted fields are:

- gender,
- age,
- 5 km time.

**Instructor** is used together with **Pydantic** to produce structured and validated output.

### Machine Learning Layer

The structured runner data is passed to a trained regression model.

The model predicts the expected half marathon finish time.

The trained model is stored as:

```text
models/halfmarathon_linear_regression.pkl
```

It is loaded with **Joblib** and cached using Streamlit's `st.cache_resource`.

### Observability Layer

**Langfuse** provides observability for the LLM component.

It allows individual LLM interactions to be traced and inspected independently from the Machine Learning prediction layer.

---

## How It Works

The complete workflow consists of the following steps:

1. The user enters a natural-language description of a runner.
2. The application sends the input to GPT-4.1 Mini.
3. Instructor converts the response into the structured `RunnerData` Pydantic model.
4. The application checks whether any required information is missing.
5. The structured runner data is passed to the regression model.
6. The model predicts the expected half marathon finish time.
7. The result is converted into a readable time format.
8. The prediction is displayed in the Streamlit application.
9. The LLM interaction is monitored through Langfuse.

---

## Example

### Complete Input

I am a 28-year-old male and my 5 km time is 22 minutes.

The LLM extracts:

Gender: M  
Age: 28  
5 km time: 1320 seconds

The structured data is then passed to the regression model.

### Missing Information

The application also handles incomplete input.

For example:

I am a 28-year-old male.

The application identifies that the 5 km time is missing and asks the user to provide it.

No prediction is performed until all required information is available.

---

## Machine Learning

The application uses a trained regression model to estimate the half marathon finish time.

The model receives structured runner information extracted from the natural-language input.

The prediction model is stored as a serialized artifact:

```text
halfmarathon_linear_regression.pkl
```

The project also contains the Machine Learning development notebook:

```text
half_marathon_predictor.ipynb
```

This separates the model development process from the application layer responsible for serving predictions.

---

## Observability

One of the goals of the project was to make the LLM component observable.

Langfuse is integrated into the application to provide visibility into individual LLM interactions.

The monitoring layer records information such as:

- input messages,
- LLM generations,
- model information,
- execution traces.

This makes it possible to inspect the LLM extraction layer independently from the Machine Learning prediction layer.

---

## Technology Stack

<div class="tech-list">

<span>Python</span>
<span>Streamlit</span>
<span>Scikit-learn</span>
<span>OpenAI</span>
<span>Instructor</span>
<span>Pydantic</span>
<span>Langfuse</span>
<span>Pandas</span>
<span>NumPy</span>
<span>Joblib</span>

</div>

---

## Project Structure

```text
half_marathon_predictor/
│
├── app.py
├── llm.py
├── predictor.py
├── utils.py
├── langfuse_client.py
├── requirements.txt
│
├── data/
│   ├── halfmarathon_wroclaw_2023_final.csv
│   └── halfmarathon_wroclaw_2024_final.csv
│
├── models/
│   └── halfmarathon_linear_regression.pkl
│
├── screenshots/
│   ├── app.png
│   └── langfuse.png
│
├── half_marathon_predictor.ipynb
├── .gitignore
└── README.md
```

---

## Deployment

The application is deployed using **Streamlit Community Cloud**.

The trained Machine Learning model is included in the project repository and loaded locally by the application.

Sensitive API configuration is provided through environment variables or Streamlit Secrets rather than being stored in the repository.

---

## What This Project Demonstrates

This project demonstrates how a traditional Machine Learning model can be integrated into an AI-powered application.

The main concepts demonstrated are:

- natural-language interfaces,
- structured LLM outputs,
- Pydantic validation,
- Machine Learning inference,
- model serving,
- LLM observability,
- Streamlit application development,
- cloud deployment.

The central design idea is:

> **Use the LLM to understand the user, and use the Machine Learning model to make the prediction.**

---

<div class="hero-buttons">

<a href="https://half-marathon-predictor.streamlit.app" class="md-button md-button--primary">Open Live Demo</a>

<a href="https://github.com/Goldmanski/half_marathon_predictor" class="md-button">View Source Code</a>

</div>