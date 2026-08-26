# Voice Recall

## Overview

Voice Recall is a voice-first note-taking application that allows users to record notes, convert speech to text, and search their notes using semantic similarity.

Instead of relying only on exact keyword matching, the application uses embeddings to search for notes based on their meaning.

<div class="hero-buttons">

<a href="https://voice-recall.streamlit.app" class="md-button md-button--primary">Live Demo</a>

<a href="https://github.com/Goldmanski/voice-recall" class="md-button">GitHub</a>

</div>

---

## Problem

Traditional note search usually relies on keywords.

This creates a limitation: a search only works well when the query contains words that also appear in the original note.

Voice Recall explores a semantic approach.

Instead of asking:

> Does this note contain the exact words from my query?

the application asks:

> Which saved notes have a meaning most similar to my query?

---

## Solution

Voice Recall combines speech-to-text, embeddings and vector search into one workflow:

```text
User
  │
  ▼
Record Voice Note
  │
  ▼
Audio
  │
  ▼
OpenAI Whisper
  │
  ▼
Transcribed Text
  │
  ▼
User Edits Note
  │
  ▼
OpenAI Embeddings
  │
  ▼
Qdrant
  │
  ▼
Vector Storage
```

For searching saved notes:

```text
Search Query
  │
  ▼
OpenAI Embeddings
  │
  ▼
Qdrant Similarity Search
  │
  ▼
Ranked Notes
```

The application therefore uses the same embedding space for both stored notes and search queries.

---

## Architecture

The application is built around three main AI components.

### Speech-to-Text Layer

**OpenAI Whisper** converts recorded audio into text.

The transcription can then be reviewed and edited by the user before the note is saved.

### Embedding Layer

**OpenAI Embeddings** convert both notes and search queries into numerical vector representations.

These vectors represent the semantic meaning of the text and allow the application to compare notes based on similarity rather than exact keyword matches.

### Vector Search Layer

**Qdrant** stores the generated embeddings and performs vector similarity search.

The application uses cosine similarity to rank stored notes according to their semantic similarity to the user's query.

---

## How It Works

The complete note-taking workflow consists of the following steps:

1. The user records a voice note.
2. The audio is processed using OpenAI Whisper.
3. The generated transcription is displayed to the user.
4. The user can review and edit the transcription.
5. The note is converted into an embedding.
6. The embedding is stored in Qdrant.
7. The user enters a natural-language search query.
8. The query is converted into an embedding.
9. Qdrant performs a similarity search.
10. Notes are returned ranked by semantic similarity.

---

## Semantic Search

The main idea behind the project is semantic search.

For example, a stored note might contain information about:

> preparing for a half marathon and increasing weekly mileage.

A user could search for:

> running training plans

without using the exact words from the original note.

The embedding representation allows the system to compare the meaning of the query with the meaning of stored notes.

The results are ranked according to their semantic similarity.

---

## Technology Stack

<div class="tech-list">

<span>Python</span>
<span>Streamlit</span>
<span>OpenAI Whisper</span>
<span>OpenAI Embeddings</span>
<span>Qdrant</span>
<span>Pydub</span>
<span>python-dotenv</span>

</div>

---

## Project Structure

```text
voice-recall/
│
├── app.py
├── packages.txt
├── requirements.txt
├── .gitignore
├── README.md
│
└── screenshots/
    ├── main-application.png
    ├── voice-transcription.png
    └── semantic-search.png
```

The application logic is currently implemented in `app.py`.

---

## Deployment

The application is deployed using **Streamlit**.

Audio processing requires FFmpeg, which is specified through `packages.txt` for the deployment environment.

API credentials are provided through environment variables locally and Streamlit Secrets in the deployed application.

---

## What This Project Demonstrates

This project demonstrates how several AI components can be combined into a practical application.

The main concepts demonstrated are:

- speech-to-text processing,
- embeddings,
- semantic search,
- vector databases,
- cosine similarity,
- integration with external AI services,
- Streamlit application development,
- cloud deployment.

The central idea is:

> **Convert human language into vector representations and use those representations to search for meaning rather than exact words.**

---

## Possible Improvements

Potential future improvements include:

- note timestamps and metadata,
- user authentication,
- private note collections,
- persistent audio storage,
- search result filtering,
- configurable number of search results,
- improved note management,
- support for multiple languages.

---

<div class="hero-buttons">

<a href="https://voice-recall.streamlit.app" class="md-button md-button--primary">Open Live Demo</a>

<a href="https://github.com/Goldmanski/voice-recall" class="md-button">View Source Code</a>

</div>