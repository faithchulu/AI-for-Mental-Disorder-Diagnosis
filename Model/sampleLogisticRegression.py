import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report

# Generate mock data
np.random.seed(42)
n_samples = 40960
n_features = 24  # Number of binary features you provided

# Random binary data
data = np.random.randint(2, size=(n_samples, n_features))

# Random labels: Anxiety, Depression, Loneliness, Stress, Normal
labels = np.random.choice(['Anxiety', 'Depression', 'Loneliness', 'Stress', 'Normal'], size=n_samples)

# Create a DataFrame
df = pd.DataFrame(data, columns=[
    'feeling.nervous', 'panic', 'breathing.rapidly', 'sweating', 'trouble.in.concentration', 
    'having.trouble.in.sleeping', 'having.trouble.with.work', 'hopelessness', 'anger', 'over.react',
    'change.in.eating', 'suicidal.thought', 'feeling.tired', 'close.friend', 'social.media.addiction',
    'weight.gain', 'material.possessions', 'introvert', 'popping.up.stressful.memory', 
    'having.nightmares', 'avoids.people.or.activities', 'feeling.negative', 'trouble.concentrating', 
    'blamming.yourself'
])
df['label'] = labels

# Split data into training and testing sets
X = df.drop('label', axis=1)
y = df['label']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42, stratify=y)

# Train a Logistic Regression model
clf = LogisticRegression(max_iter=5000, multi_class='auto', solver='lbfgs')  # Adjust max_iter if needed
clf.fit(X_train, y_train)

# Predictions
y_pred = clf.predict(X_test)

# Evaluate model
accuracy = accuracy_score(y_test, y_pred)
print(f"Accuracy: {accuracy:.4f}")
print(classification_report(y_test, y_pred))
