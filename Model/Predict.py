import joblib
import pandas as pd
import psycopg2

# Load the saved model
model = joblib.load('decision_tree_model.pkl')

# Function to fetch user responses from the database
def fetch_user_responses(user_response_id):
    # Define your PostgreSQL database connection parameters
    db_params = {
        'dbname': 'mental',
        'user': 'postgres',
        'password': 'Chimwemwe',
        'host': 'localhost',
        'port': '5432'
    }

    # Connect to the database
    conn = psycopg2.connect(**db_params)
    cursor = conn.cursor()

    # Query the userResponses table to fetch responses by ID
    query = "SELECT responseArray FROM userresponses WHERE responseID = %s"
    cursor.execute(query, (user_response_id,))
    response_data = cursor.fetchone()

    # Close the database connection
    cursor.close()
    conn.close()

    return response_data[0] if response_data else None

# Get the user_response_id you want to use for prediction
user_response_id = 1  # Change this to the ID you want to use

# Fetch user responses from the database
user_responses = fetch_user_responses(user_response_id)

data = {
    'age': [user_responses [0]],
    'feeling.nervous': [user_responses [1]],
    'panic': [user_responses [2]],
    'breathing.rapidly': [user_responses [3]],
    'sweating': [user_responses [4]],
    'trouble.in.concentration': [user_responses [5]],
    'trouble.sleeping': [user_responses [6]],
    'trouble.with.work': [user_responses [7]],
    'hopelessness': [user_responses [8]],
    'anger': [user_responses [9]],
    'over.react': [user_responses [10]],
    'change.in.eating': [user_responses [11]],
    'suicidal.thought': [user_responses [12]],
    'feeling.tired': [user_responses [13]],
    'close.friend': [user_responses [14]],
    'social.media.addiction': [user_responses [15]],
    'weight.gain': [user_responses [16]],
    'introvert': [user_responses [17]],
    'popping.up.stressful.memory': [user_responses [18]],
    'nightmares': [user_responses [19]],
    'avoids.people.or.activities': [user_responses [20]],
    'feeling.negative': [user_responses [21]],
    'trouble.concentrating': [user_responses [22]],
    'blamming.yourself': [user_responses [23]],
    'hallucinations': [user_responses [24]],
    'repetitive.behaviour': [user_responses [25]],
    'seasonally': [user_responses [26]],
    'increased.energy': [user_responses [27]]
}


if user_responses:
    # Prepare new data using the fetched user responses
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
else:
    print("User responses not found for the specified user_response_id.")
