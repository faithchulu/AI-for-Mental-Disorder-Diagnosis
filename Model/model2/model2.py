import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report

# Load the data
data = pd.read_csv('../DataSet/dataset.csv')

# Convert 'yes'/'no' to 1/0
for column in data.columns:
    data[column] = data[column].map({'yes': 1, 'no': 0})

# Drop rows with missing 'Disorder' values
data.dropna(subset=['Disorder'], inplace=True)
data.dropna(inplace=True)

# Split data into features and target

y = data['Disorder']

# Split data into training and test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Initialize a Random Forest Classifier
clf = RandomForestClassifier(n_estimators=100, random_state=42)

# Train the model
clf.fit(X_train, y_train)

# Predict on the test set
y_pred = clf.predict(X_test)

# Evaluate the model
accuracy = accuracy_score(y_test, y_pred)
print(f"Accuracy: {accuracy*100:.2f}%")
print(classification_report(y_test, y_pred))

