# Half Marathon Predictor

## A prediction model with a natural-language interface

What if you could ask a Machine Learning model for a prediction without filling in a form?

That was the idea behind Half Marathon Predictor.

Instead of asking the user to enter their age, gender and 5 km time into separate fields, the application lets them describe themselves naturally:

> I am a 28-year-old male and my 5 km time is 22 minutes.

The application extracts the relevant information from the message and uses it as input for a traditional Machine Learning regression model.

---

## Explore the application

<div class="hero-buttons">

<a href="https://half-marathon-predictor.streamlit.app" class="md-button md-button--primary">Live Demo</a>

<a href="https://github.com/Goldmanski/half_marathon_predictor" class="md-button">GitHub</a>

</div>

---

## From running data to a prediction

The Machine Learning part of the project is based on race data from the Wrocław Half Marathon.

The model learns the relationship between a runner's **age, gender and 5 km performance** and their expected half marathon finish time.

The interesting part of the project came afterwards.

I wanted the final application to feel less like a Machine Learning form and more like a conversation.

This created a simple but useful separation:

**LLM understands the runner.**

**Machine Learning makes the prediction.**

The language model does not predict the race time itself. It only turns an informal description into structured data that the prediction model can understand.

---

## Why use an LLM at all?

A traditional prediction application might look like this:

Age:        [ 28 ]

Gender:     [ M ]

5 km time:  [ 22:00 ]

            ↓

        Prediction

Half Marathon Predictor takes a different approach:

"I am 28, male and run 5 km in 22 minutes."

                    ↓

              GPT-4.1 Mini

                    ↓

        Structured runner data

                    ↓

          Regression model

                    ↓

        Half marathon estimate

This makes the LLM a **natural-language interface**, rather than the prediction engine.

That distinction is one of the main ideas behind the project.

---

## Handling incomplete information

Natural language also introduces a new problem: users do not always provide everything the model needs.

For example:

> I am a 28-year-old male.

The application can recognise that the runner's **5 km time is missing** and ask for it before attempting the prediction.

This means the LLM is not simply extracting values — it is helping the application understand whether it has enough information to continue.

---

## The boundary between AI and Machine Learning

The project combines two approaches that are often presented separately:

**Machine Learning** is responsible for the numerical prediction.

**LLM technology** is responsible for making the interaction with that model more natural.

Neither component replaces the other.

The LLM provides flexibility at the interface level, while the regression model remains responsible for the actual prediction.

This was a useful example of how an LLM can be added to an existing Machine Learning workflow without turning the entire system into an LLM application.

---

## Observability

Because the application relies on an LLM, I also wanted to be able to see what was happening inside that part of the system.

The project uses **Langfuse** to trace the LLM interactions and inspect the extraction process.

This makes it possible to distinguish between problems occurring in the language-processing layer and problems related to the Machine Learning prediction itself.

---

## Designing with clear responsibilities

The most important lesson was not the prediction model itself.

It was learning how different components can have clearly defined responsibilities within one application.

The project brought together:

- Machine Learning,
- natural-language processing,
- structured data validation,
- application development,
- observability,
- deployment.

The result is a small example of a broader idea:

> **AI does not always need to replace an existing model. Sometimes it can make that model easier for people to use.**

---

## Explore the application

<div class="hero-buttons">

<a href="https://half-marathon-predictor.streamlit.app" class="md-button md-button--primary">Live Demo</a>

<a href="https://github.com/Goldmanski/half_marathon_predictor" class="md-button">GitHub</a>

</div>