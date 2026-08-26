# 👥 Find Friends App

A Machine Learning application that groups users with similar profiles using unsupervised learning and presents statistics describing the resulting group.

The project combines a clustering model developed with PyCaret with an interactive Streamlit application.

## 🚀 Live Demo

[https://find-friends-app-goldmanski.streamlit.app](https://find-friends-app-goldmanski.streamlit.app)

The application allows users to complete a short survey and find the group that is most similar to their profile.

---

## 📸 Screenshots

### Main Application

The main screen allows users to provide information about themselves and receive a cluster assignment together with information describing the group.

![Main Application](screenshots/screenshot_main.png)

### Group Statistics

The application presents interactive visualizations showing the age and education distribution of users belonging to the assigned cluster.

![Group Statistics](screenshots/screenshot_statistics.png)

### Additional Group Statistics

Additional visualizations show the distribution of favorite animals, favorite places, and gender within the assigned cluster.

![Additional Group Statistics](screenshots/screenshot_statistics_2.png)

---

## 🎯 Project Goal

The goal of the project is to demonstrate how an unsupervised Machine Learning model can be developed, analysed, saved and integrated into an interactive application.

The project follows the complete workflow:

```text
Survey Data
    │
    ▼
Data Preparation
    │
    ▼
Clustering Model
    │
    ▼
Cluster Analysis
    │
    ▼
Model Persistence
    │
    ▼
Streamlit Application
    │
    ▼
New User
    │
    ▼
Cluster Prediction
    │
    ▼
Group Statistics
```

The clustering model does not predict a predefined target.

Instead, it discovers groups of users with similar characteristics based on their survey responses.

---

## 📊 Dataset

The project uses a welcome survey dataset containing information about:

- age
- education level
- favorite animals
- favorite place
- gender

The dataset contains **140 observations and 5 original features**.

The clustering workflow transforms the original categorical variables into a feature representation used by the Machine Learning model.

The resulting transformed dataset contains **21 features**.

The dataset also contains missing values, which are handled during the preprocessing stage.

---

## 🤖 Machine Learning

### Clustering

The project uses **K-Means clustering** implemented through **PyCaret**.

The model groups users based on similarities in the transformed feature space.

The clustering experiment uses:

- 8 clusters
- preprocessing enabled
- numerical missing-value imputation using the mean
- categorical missing-value imputation using the mode
- categorical feature transformation

The trained clustering pipeline is saved as:

```text
welcome_survey_clustering_pipeline_v1.pkl
```

---

## 🔬 Model Development

The Machine Learning development process is documented in:

```text
find_friends_clustering.ipynb
```

The notebook contains the complete development workflow:

```text
Data Loading
     ↓
Data Preparation
     ↓
Clustering Model
     ↓
Cluster Analysis
     ↓
Cluster Visualization
     ↓
Model Persistence
     ↓
Prediction on New Data
```

The notebook demonstrates both the training process and the use of the saved clustering pipeline for inference on new user data.

---

## 📈 Cluster Analysis

After training the clustering model, the observations are assigned to clusters and analysed.

The resulting clusters are examined using:

- cluster sizes
- cluster distributions
- visualizations
- characteristics of users belonging to each cluster

The project uses the resulting cluster assignments as the basis for the user-facing application.

Each cluster is given a human-readable name and description stored in:

```text
welcome_survey_cluster_names_and_descriptions_v1.json
```

This allows the application to present the Machine Learning result in a more understandable form.

---

## 🏗️ Architecture

The application combines a Streamlit user interface with the trained clustering pipeline.

```text
User
  │
  ▼
Streamlit Application
  │
  ▼
Survey Responses
  │
  ▼
Pandas DataFrame
  │
  ▼
Trained PyCaret Pipeline
  │
  ▼
Predicted Cluster
  │
  ├──► Cluster Name & Description
  │
  └──► Users from the Same Cluster
                 │
                 ▼
           Group Statistics
                 │
                 ▼
        Plotly Visualizations
```

The application uses the saved model for inference rather than retraining the model when a user interacts with the application.

---

## ⚙️ How It Works

1. The user completes the survey in the Streamlit sidebar.
2. The responses are converted into a Pandas DataFrame.
3. The saved clustering pipeline predicts the user's cluster.
4. The application retrieves the corresponding cluster name and description.
5. The complete dataset is processed using the same clustering pipeline.
6. Users belonging to the predicted cluster are selected.
7. The application calculates the number of users in the same cluster.
8. The percentage of participants belonging to the cluster is calculated.
9. The total number of participants is displayed.
10. Plotly visualizations present the characteristics of the group.
11. The user can optionally save their survey responses to the dataset.

---

## 💾 Model Persistence

The trained clustering pipeline is stored directly in the repository:

```text
welcome_survey_clustering_pipeline_v1.pkl
```

The application loads the saved pipeline using PyCaret:

```python
load_model()
```

The loaded model is cached with Streamlit's `st.cache_data` to avoid repeatedly loading the model during application execution.

The same saved pipeline is also used in the Machine Learning notebook to demonstrate prediction on new data.

---

## 💡 User Experience

The user provides five pieces of information:

```text
Age
Education
Favorite animals
Favorite place
Gender
```

The application then identifies the cluster assigned to that profile.

The result contains:

- cluster name
- cluster description
- number of similar users
- percentage of participants in the cluster
- total number of participants
- age distribution
- education distribution
- favorite animals distribution
- favorite place distribution
- gender distribution

The user can also save their responses directly to the dataset.

---

## 📊 Visualizations

The application uses **Plotly** to display the characteristics of the assigned group.

The following distributions are visualized:

- age
- education level
- favorite animals
- favorite place
- gender

These visualizations allow the user to explore the characteristics of the group identified by the clustering model.

---

## 🛠️ Tech Stack

- Python
- PyCaret
- Scikit-learn
- Pandas
- Plotly
- Streamlit

---

## 📁 Project Structure

```text
find_friends_app/
│
├── screenshots/
│   ├── screenshot_main.png
│   ├── screenshot_statistics.png
│   └── screenshot_statistics_2.png
│
├── app.py
├── find_friends_clustering.ipynb
├── welcome_survey_simple_v1.csv
├── welcome_survey_clustering_pipeline_v1.pkl
├── welcome_survey_cluster_names_and_descriptions_v1.json
├── requirements.txt
├── README.md
└── .gitignore
```

### Main Components

- `app.py` — Streamlit application and inference logic
- `find_friends_clustering.ipynb` — Machine Learning development and clustering analysis
- `welcome_survey_simple_v1.csv` — survey dataset
- `welcome_survey_clustering_pipeline_v1.pkl` — trained clustering pipeline
- `welcome_survey_cluster_names_and_descriptions_v1.json` — cluster names and descriptions
- `requirements.txt` — Python dependencies
- `screenshots/` — application screenshots
- `.gitignore` — files excluded from version control

---

## 🔍 Example

### User Input

```text
Age: 45-54
Education: Wyższe
Favorite animals: Psy
Favorite place: W górach
Gender: Mężczyzna
```

### Result

The application assigns the user to the cluster that best matches the provided profile.

The application then displays the characteristics of that group, including its size, percentage of participants and visual distributions of the survey attributes.

---

## 🚀 Installation

Clone the repository:

```
git clone https://github.com/Goldmanski/find_friends_app.git
cd find_friends_app
```

Create a virtual environment:

```
python -m venv .venv
```

### Windows

```
.venv\Scripts\activate
```

### Linux / macOS

```
source .venv/bin/activate
```

Install dependencies:

```
pip install -r requirements.txt
```

---

## ▶️ Run

Start the application with:

```
streamlit run app.py
```

The application will then be available through the Streamlit interface.

---

## ☁️ Deployment

The application is deployed using **Streamlit Community Cloud**.

The trained clustering pipeline and supporting project files are included directly in the GitHub repository and loaded by the application at runtime.

---

## 🎓 What This Project Demonstrates

This project demonstrates the complete process of integrating an unsupervised Machine Learning model into an interactive application.

The main concepts demonstrated are:

- unsupervised Machine Learning
- K-Means clustering
- data preprocessing
- categorical feature transformation
- cluster analysis
- model persistence
- inference on new data
- Machine Learning application development
- interactive data visualization
- Streamlit deployment

The project connects the experimental Machine Learning workflow documented in the notebook with a production-style interactive application.

---

## 🔮 Possible Future Improvements

- similarity search between individual users
- recommendation system
- database integration
- automated model retraining
- dataset management
- additional user attributes
- more advanced cluster analysis
- improved cluster descriptions
- user authentication
- REST API

---

## 👤 Author

Created by Eliasz Nowicki as a Machine Learning and Streamlit portfolio project.