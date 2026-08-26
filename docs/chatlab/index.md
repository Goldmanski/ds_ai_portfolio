# ChatLab

## Overview

ChatLab is an LLM-powered chatbot application built with Streamlit.

The application allows users to interact with different OpenAI language models, manage multiple conversations, customize chatbot behavior and monitor LLM interactions with Langfuse.

It also tracks token usage and estimates conversation costs based on the selected model.

<div class="hero-buttons">

<a href="https://chatlab-app.streamlit.app/" class="md-button md-button--primary">Live Demo</a>

<a href="https://github.com/Goldmanski/chatlab" class="md-button">GitHub</a>

</div>

---

## Problem

Building a useful chatbot application involves more than sending a message to an LLM.

A user-facing application needs to handle:

- conversation context,
- multiple conversations,
- model selection,
- persistent state,
- usage tracking,
- cost visibility,
- observability.

ChatLab explores how these components can be combined into one interactive application.

---

## Solution

The application combines the Streamlit user interface with OpenAI language models, local conversation storage, cost tracking and Langfuse observability.

```text
User
  │
  ▼
Streamlit Application
  │
  ├── Model Selection
  ├── Chatbot Personality
  └── Conversation Management
           │
           ▼
     Chatbot Logic
           │
      ┌────┴────┐
      ▼         ▼
   OpenAI    Langfuse
     API    Observability
      │
      ▼
 Model Response
      │
      ├── Token Usage
      ├── Cost Calculation
      └── Conversation Storage
                    │
                    ▼
                 JSON Files
```

The application therefore combines the LLM itself with the state and monitoring components required by a practical chatbot application.

---

## Architecture

### UI Layer

**Streamlit** provides the user interface for:

- chatting with the selected model,
- selecting models,
- configuring chatbot personality,
- creating conversations,
- switching between conversations,
- renaming conversations,
- displaying usage and estimated costs.

### LLM Layer

The application uses **OpenAI language models** to generate chatbot responses.

The selected model processes:

- chatbot personality,
- recent conversation history,
- current user message.

The application also retrieves token usage information from the API response.

### Conversation Management

ChatLab supports multiple independent conversations.

Each conversation stores:

- conversation ID,
- conversation name,
- chatbot personality,
- message history.

Conversation data is stored locally as JSON files.

### Cost Tracking

The application uses token usage returned by the OpenAI API to estimate the cost of the current conversation.

Each available model has its own input and output token pricing.

The estimated cost is displayed in:

- USD,
- PLN.

### Observability

**Langfuse** is integrated into the application to monitor LLM interactions.

This provides visibility into model calls and makes it possible to inspect the interaction between the application and the selected OpenAI model.

---

## How It Works

The complete workflow consists of the following steps:

1. The user selects an available OpenAI language model.
2. The user enters a message in the chat interface.
3. The application builds the conversation context using the chatbot personality and recent messages.
4. The request is sent to the selected OpenAI model.
5. Langfuse records the LLM interaction.
6. The model returns the response together with token usage information.
7. The response is displayed in the chat interface.
8. The conversation is saved locally.
9. Token usage is used to calculate the estimated conversation cost.

---

## Conversation Management

ChatLab supports multiple independent conversations.

Users can:

- create new conversations,
- switch between saved conversations,
- rename conversations,
- continue existing conversations.

Local conversation data is stored in JSON files:

```text
db/
├── current.json
└── conversations/
    ├── 1.json
    ├── 2.json
    └── ...
```

The `db/` directory is excluded from the Git repository because it contains local application data.

---

## Cost Tracking

The application tracks token usage returned by the OpenAI API.

Each model has separate input and output token pricing.

The application uses this information to estimate the current conversation cost.

The estimated cost is presented in both USD and PLN.

This makes the cost of using different models visible directly from the chatbot interface.

---

## Langfuse Observability

Langfuse is integrated into the application to monitor LLM interactions.

The integration records model calls and provides visibility into interactions with OpenAI models.

This allows the LLM layer to be inspected independently from the rest of the application.

---

## Example Workflow

### User Input

The user selects a model and enters a message such as:

```text
Model: GPT-5.6

Message:
Explain how Python decorators work.
```

The application combines the current message with the selected chatbot personality and recent conversation history.

The request is then sent to the selected OpenAI model.

### Result

The application receives:

- generated response,
- token usage,
- estimated conversation cost,
- recorded LLM interaction in Langfuse.

The conversation is then saved locally and can be continued later.

---

## Technology Stack

<div class="tech-list">

<span>Python</span>
<span>Streamlit</span>
<span>OpenAI API</span>
<span>Langfuse</span>
<span>python-dotenv</span>
<span>JSON</span>

</div>

---

## Project Structure

```text
chatlab/
│
├── app.py
├── requirements.txt
├── README.md
└── .gitignore
```

The main application logic is contained in `app.py`, including:

- Streamlit interface,
- chatbot logic,
- conversation management,
- model selection,
- cost tracking,
- Langfuse integration.

Local conversation data is stored in the `db/` directory and excluded from Git.

---

## Deployment

The application is deployed using **Streamlit Community Cloud**.

API and Langfuse credentials are provided through environment variables or deployment secrets.

Local conversation data remains outside the Git repository.

---

## What This Project Demonstrates

ChatLab demonstrates how an LLM can be integrated into a user-facing application while maintaining conversation state and providing basic monitoring and cost visibility.

The main concepts demonstrated are:

- Large Language Model integration,
- conversational context management,
- multiple model support,
- conversation persistence,
- token usage tracking,
- cost estimation,
- LLM observability,
- Streamlit application development.

The central idea is:

> **An LLM application needs more than model calls — it also needs state, usage visibility and operational context.**

---

<div class="hero-buttons">

<a href="https://chatlab-app.streamlit.app/" class="md-button md-button--primary">Open Live Demo</a>

<a href="https://github.com/Goldmanski/chatlab" class="md-button">View Source Code</a>

</div>