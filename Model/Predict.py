import joblib
import pandas as pd

# Load the saved model
model = joblib.load('decision_tree_model.pkl')

data = {
    'age' : [39],
'feeling.nervous' : [0],
'panic' : [0],
'breathing.rapidly' : [0],
'sweating' : [1],
'trouble.in.concentration' : [0],
'trouble.sleeping' : [0],
'trouble.with.work' : [1],
'hopelessness' : [0],
'anger' : [1],
'over.react' : [0],
'change.in.eating' : [1],
'suicidal.thought' : [0],
'feeling.tired' : [1],
'close.friend' : [1],
'social.media.addiction' : [1],
'weight.gain' : [1],
'introvert' : [0],
'popping.up.stressful.memory' : [1],		
'nightmares' : [0],
'avoids.people.or.activities' : [1],
'feeling.negative' : [0],
'trouble.concentrating' : [1],
'blamming.yourself' : [0],
'hallucinations' : [0],
'repetitive.behaviour' : [1],
'seasonally' : [0],
'increased.energy' : [1],
}


# Prepare new data
new_data = pd.DataFrame(data)

# Make predictions
predictions = model.predict(new_data)

# Define the list of disorder names in the same order as the binary digits
disorder_names = [
    'ADHD',
    'ASD',
    'Loneliness',
    'MDD',
    'OCD',
    'PDD',
    'PTSD',
    'anxiety',
    'bipolar',
    'eating disorder',
    'psychotic depression',
    'sleeping disorder'
]


# Map binary digit positions to disorder name
predicted_disorder = [disorder_names[i] for i, prediction in enumerate(predictions[0]) if prediction == 1]

# Combine the predicted disorders into a single string
predicted_disorder_string = ', '.join(predicted_disorder)

# Print the predicted disorders as a single string
print("Predicted Disorders:", predicted_disorder_string)