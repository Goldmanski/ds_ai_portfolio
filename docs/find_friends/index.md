# Find Friends

## Can a Machine Learning model find people who are similar to you?

What makes two people similar?

Is it their age?
Their education?
The things they like?

Or is it some combination of characteristics that is difficult to notice at first glance?

Find Friends explores this question using a simple welcome survey.

Instead of telling the model what the "right" groups of people should look like, I let Machine Learning discover them.

<div class="hero-buttons">

<a href="https://find-friends-app-goldmanski.streamlit.app" class="md-button md-button--primary">Live Demo</a>

<a href="https://github.com/Goldmanski/find_friends_app" class="md-button">GitHub</a>

</div>

---

## Let the data decide

The dataset contains 140 survey responses.

Each person is described by just five things:

- age
- education
- favorite animals
- favorite place
- gender

At first glance, these questions might not seem like enough to tell us much about a person.

But together they create patterns.

The interesting part is that I did not define those patterns beforehand.

Instead, the Machine Learning model was asked to find groups of people who look similar based on their answers.

---

## No correct answer — just patterns

This is what makes the project different from a typical prediction problem.

There is no column saying:

> "This person belongs to Group A."

There is no predefined correct answer for the model to learn.

The model has to discover its own structure in the data.

This is the idea behind **unsupervised learning**.

In this project, K-Means clustering divides the participants into groups based on similarities between their profiles.

The result is not a prediction of something that already has a known answer.

It is an attempt to answer a more open question:

> **What groups naturally exist in this data?**

---

## So... who are you most similar to?

Once the groups have been discovered, the model can be used with a new person.

You answer the same five questions.

The application then finds the group whose characteristics are most similar to your profile.

But it doesn't stop at giving you a cluster number.

It also shows you what that group looks like.

You can see things such as:

- how many people belong to the group,
- what percentage of participants they represent,
- their age distribution,
- education,
- favorite animals,
- favorite places,
- and gender distribution.

Suddenly, a Machine Learning result becomes something you can actually explore.

---

## When Machine Learning finds a group, what do you call it?

A cluster number is useful to a model, but not particularly meaningful to a person.

Cluster 0 doesn't tell you much.

So the project adds another step after the clustering process.

The characteristics of each discovered group are passed to an LLM, which generates a human-readable name and description for the cluster.

This creates an interesting division of responsibilities:

**Machine Learning discovers the groups.**

**The LLM helps explain what those groups look like.**

The application can then present the result as something a person can actually understand, rather than simply showing a cluster number.

It is a small example of two different AI approaches working together: one finds structure in the data, while the other helps turn that structure into a human-readable explanation.

---

## From a notebook to an application

The Machine Learning experiment started in a notebook.

There, the data could be explored, the clustering model trained and the resulting groups analysed.

But an experiment becomes more interesting when someone else can actually interact with it.

The trained pipeline is saved and reused by the Streamlit application.

A new user does not trigger the training process again.

They simply provide their answers and receive a result based on the groups discovered during the original analysis.

This creates a complete path from:

**survey data → exploration → discovered groups → saved model → new user → interactive result**

---

## What I found interesting

The most interesting part of this project was seeing how two different models can play completely different roles.

The clustering model is not trying to explain anything. It simply looks for structure in the data.

The LLM does something very different. It takes the characteristics of those discovered groups and turns them into descriptions that make more sense to a human.

Neither step would be as useful on its own.

A cluster without an explanation can be difficult to interpret.

An LLM describing groups that were never discovered from the data would have nothing meaningful to explain.

Together, they create a simple pipeline from **finding patterns to making them understandable**.

---

## What this project taught me

Find Friends was one of my steps from analysing data towards building Machine Learning systems.

It taught me that Machine Learning does not always have to answer a question with a single predicted value.

Sometimes the interesting result is the **structure hidden inside the data**.

It also showed me that finding a pattern is only part of the problem.

If the result is going to be useful to a person, you need to understand it and find a way to communicate it.

In this project, that meant combining two different approaches:

**Machine Learning to discover the groups.**

**An LLM to help explain them.**

> **Finding a pattern is only useful when you can make sense of it.**

---

<div class="hero-buttons">

<a href="https://find-friends-app-goldmanski.streamlit.app" class="md-button md-button--primary">Open Live Demo</a>

<a href="https://github.com/Goldmanski/find_friends_app" class="md-button">View Source Code</a>

</div>