# ChatLab

## Which model is worth the price?

There are more and more language models to choose from.

But once you start using them in practice, a simple question appears:

> **Which model gives me the right balance between quality and cost?**

The most powerful model is not necessarily the best choice for every task. Sometimes a cheaper model is more than enough. Sometimes a more capable model is worth paying for.

ChatLab started as a way to explore that trade-off in practice — by putting different models in the same environment and making their responses and costs visible.

<div class="hero-buttons">

<a href="https://chatlab-app.streamlit.app/" class="md-button md-button--primary">Live Demo</a>

<a href="https://github.com/Goldmanski/chatlab" class="md-button">GitHub</a>

</div>

---

## Experiment instead of guessing

It is easy to ask which language model is "the best".

In practice, that question is not very useful.

A model that is excellent at a difficult task may be unnecessary for a simple one. Paying more does not automatically make every answer more valuable.

ChatLab lets you experiment with different OpenAI models and observe how they respond to your prompts.

The idea is simple:

**same kind of task → different model → different response → different cost**

Instead of relying only on model comparisons found elsewhere, you can see the trade-off in the context of your own conversations.

---

## When does a conversation become an application?

A single prompt and response is easy.

But a useful chatbot quickly needs more.

What happens when you start another conversation? Can you come back to an earlier one? Can the chatbot behave differently depending on what you are trying to do?

ChatLab treats these as responsibilities of the application rather than something the language model should magically handle.

You can create separate conversations, switch between them, rename them and continue where you left off.

The chat window may look simple, but there is a surprising amount happening behind it.

---

## The hidden cost of a conversation

Once you start comparing models, another question becomes impossible to ignore:

> **How much did that answer actually cost?**

ChatLab tracks the token usage returned by the API and uses it to estimate the cost of a conversation.

The estimate is shown in both USD and PLN.

This makes the difference between models more tangible. A response is no longer just something that appears on the screen — it also has a measurable cost.

That makes model selection a more practical decision.

The question is no longer simply:

> *Which model is better?*

but:

> **Which model is good enough for what I need, at a cost that makes sense?**

---

## What about context?

Comparing individual answers is only part of the story.

A model response rarely exists in isolation. In a real conversation, every new message can depend on what came before it.

ChatLab keeps track of that context and allows multiple independent conversations to be continued over time.

It also lets the user customise the chatbot's personality, making the interaction more than a sequence of unrelated prompts.

This was an important lesson in building with LLMs: **the model is only one part of the conversation.**

---

## Looking behind the conversation

Once an LLM becomes part of an application, another question appears:

> **What is actually happening behind the chat window?**

ChatLab uses Langfuse to observe interactions with the language model.

This makes it possible to look beyond the final answer and understand the model interaction from the application's perspective.

It also reinforces an idea that became increasingly important while building the project:

> **If you want to build useful AI applications, you need to understand what happens when the model is not behaving as expected.**

---

## What I found interesting

ChatLab changed the way I think about choosing language models.

There is a natural tendency to look for the model with the highest capability and treat it as the obvious choice.

But real applications have constraints.

Sometimes the difference in quality matters. Sometimes it doesn't. Sometimes a faster or cheaper model is the more sensible option.

That makes model selection less about finding **the best model** and more about finding **the right model for the job**.

ChatLab became a small environment for exploring that idea firsthand.

---

## What this project taught me

The project started with a chatbot, but the more interesting lessons were around the chatbot itself.

I learned that an LLM application needs to think about more than generating a good answer.

It needs to manage context, give the user control over conversations, make usage visible and provide a way to understand what happens behind the scenes.

Most importantly, it showed me that working with multiple models is not simply a race to find the most capable one.

It is about understanding the trade-offs and making a deliberate choice.

> **The right model is not necessarily the most powerful one. It is the one that gives you the quality you need at a cost that makes sense.**

---

<div class="hero-buttons">

<a href="https://chatlab-app.streamlit.app/" class="md-button md-button--primary">Open Live Demo</a>

<a href="https://github.com/Goldmanski/chatlab" class="md-button">View Source Code</a>

</div>