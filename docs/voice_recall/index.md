# Voice Recall

## What if you could search your notes by meaning?

We often remember **what we were thinking about**, but not the exact words we used.

That becomes a problem when your notes start to grow.

You might remember writing something about preparing for a race, but searching for the exact sentence you wrote is another story.

Voice Recall explores a simple idea:

> **What if searching your notes worked more like remembering, and less like looking for keywords?**

The application lets you record a voice note, turn it into text, and later search your notes using natural language.

---

## Explore the application

<div class="hero-buttons">

<a href="https://voice-recall.streamlit.app" class="md-button md-button--primary">Live Demo</a>

<a href="https://github.com/Goldmanski/voice-recall" class="md-button">GitHub</a>

</div>

---

## From voice to searchable memory

The project starts with something very natural: speaking.

You record a note instead of typing it.

The application transcribes your voice and lets you review the result before saving it. The note is then transformed into a representation of its meaning and stored so it can be searched later.

The interesting part comes when you try to find something.

Imagine that one of your notes says:

> I should gradually increase my weekly mileage before the half marathon.

Months later, you might search for:

> running training plans

There is no need for those exact words to appear in the original note.

The system is looking for **similar meaning**, not identical vocabulary.

---

## The difference between words and meaning

Traditional keyword search might ask:

> Does this note contain the word "training"?

Voice Recall asks a different question:

> Which of my notes is most closely related to "running training plans"?

This distinction is the heart of the project.

Text is converted into numerical representations called **embeddings**. Notes with similar meanings tend to end up closer together in this representation.

That makes it possible to search through notes using concepts rather than exact phrases.

---

## A small experiment in human memory

There is something interesting about this approach.

People rarely remember information word for word.

We usually remember the **idea**.

You might remember that you had a note about increasing your running distance, even if the note itself never used the words you are currently searching for.

Voice Recall tries to make the computer work in a similar way.

Instead of forcing the user to remember how something was written, the application lets them search for what they remember it being **about**.

---

## Why voice?

The project also explores a different way of creating information.

Typing a note introduces friction.

Speaking is often faster — especially when the idea appears suddenly and you don't want to stop what you're doing to write it down.

That creates a simple workflow:

**speak → transcribe → review → remember → search**

The voice interface is therefore not just a different input method. It is part of the idea behind the project: **capturing thoughts with as little friction as possible.**

---

## How semantic search works

There are several steps between saying something and finding it again.

First, the recorded audio is converted into text.

The user can then correct or edit the transcription before saving it.

The final text is converted into an embedding and stored in a vector database.

When a search is performed, the query goes through the same process.

The system then compares the query with the stored notes and returns the most semantically similar ones.

The important idea is that **the note and the search query are represented in the same semantic space**.

---

## Why semantic search changes the experience

The project made the idea of semantic search much more tangible.

It is easy to describe embeddings as numbers representing meaning. It becomes much more interesting when you can actually write one sentence, search for a completely different sentence, and still retrieve the original note because the two ideas are related.

That shift — from matching words to comparing meaning — is what makes this project particularly interesting to me.

---

## From voice notes to semantic memory

Voice Recall brought together several ideas that are becoming increasingly important in AI applications:

- turning unstructured human input into usable data,
- representing text by its semantic meaning,
- searching information by similarity,
- combining several AI components into one workflow.

More importantly, it showed me that an AI application does not necessarily have to generate something new.

Sometimes the most useful thing it can do is help you **find something you already knew.**

---

## Explore the application

<div class="hero-buttons">

<a href="https://voice-recall.streamlit.app" class="md-button md-button--primary">Live Demo</a>

<a href="https://github.com/Goldmanski/voice-recall" class="md-button">GitHub</a>

</div>