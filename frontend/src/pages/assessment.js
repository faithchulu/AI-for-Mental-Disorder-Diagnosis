import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import logo from "../assets/images/logos/logo5.png"
import BG from "../assets/images/image6.jpg"
import { Link } from 'react-router-dom';


const questionsList = [
  "How old are you?",
  "Do you feel often nervous?",
  "Do you feel often panic?",
  "Do you get sudden bursts of rapid breathing?",
  "Do you get sudden bursts of excessive Sweating?",
  "Do you have trouble concentrating?",
  "Do you have trouble in sleeping?",
  "Are you having trouble with work?",
  "Do you feel hopeless?",
  "Do you feel angry?",
  "Do you overeact?",
  "Have you changed your eating pattern?",
  "Do you ever get suicidal thoughts?",
  "Are you always tired?",
  "Do you have a close friend(s)?",
  "Are you addicted to social media?",
  "Have you gained weight of recently?",
  "Are you an introvert?",
  "Do you ever get pop ups of a stressful memory?",
  "Do you frequently experience nighmares?",
  "Do you often avoid people or activities?",
  "Do you often find yourself feeling negative?",
  "Do you have trouble focusing on a task?",
  "Do you often blame yourself for an unfortunate event?",
  "Do you ever get halluciations?",
  "Do you exhibit repetitive behavior?",
  "Do you get seasonal depression?",
  "Have you recently experience an increase in energy?"

];


const Assessment = () => {
  const [step, setStep] = useState(0);
  const [age, setAge] = useState('');
  const [userResponses, setUserResponses] = useState([]);

  const handleAnswer = (question, answer) => {
    if (step === 0) {
      // Handle the age question separately
      const ageValue = parseInt(answer, 10); 
      setAge(ageValue);
      setUserResponses((prevResponses) => [ageValue, ...prevResponses]);
      setStep(step + 1); // Move to the next question
    } else {
      // Handle other questions as before
      const answerValue = answer === 'yes' ? 1 : 0;
      setUserResponses((prevResponses) => [...prevResponses, answerValue]);
      if (answer === 'yes' || answer === 'no') {
        setStep(step + 1);
      } else {
        setStep(step - 1);
      }
    }
    if (step === questionsList.length - 1) {
      console.log('Sending userResponses:', userResponses);

      // If this is the last question, post userResponses to the server
      fetch('http://localhost:5000/userresponses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          responseArray: userResponses,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data); // You can handle the response as needed
        })
        .catch((error) => {
          console.error('Error posting user responses:', error);
        });
    }
  };

  

  return (
    <div className="flex flex-col h-screen justify-center items-center space-y-4 App bg-cover bg-center" style={{ backgroundImage: `url(${BG})` }}>
      {/* Top navigation section */}
      {step >= 0 && (
        <div className="absolute top-0 left-0 m-4">
          <FaArrowLeft onClick={() => handleAnswer(questionsList[step], 'back')} />
        </div>
      )}

      <div className="w-full flex justify-center items-center mt-4">
        {/* Progress bar */}
        <div className="h-1 bg-gray-300 w-2/3 relative">
          <div className="h-1 bg-green-500" style={{ width: `${(step / questionsList.length) * 100}%` }}></div>
        </div>
      </div>

      <div className="absolute top-0 right-0 m-4">
        {step + 1}/{questionsList.length}
      </div>

      <div className="absolute top-0 center-0 m-4">
        <img className="mx-auto h-20 w-auto" src={logo} alt="Your Company" />
      </div>

      {/* Main Content */}
      {step === questionsList.length ? (
        <div className="text-center">
          <h1 className='font-bold my-4'>Thank you for taking the assessment!</h1>
          
          <Link to='/diagnosis'>
            <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded my-4">
              View Results
            </button>
          </Link>  

          {/* Display user responses */}
          <div className="user-responses">
            {/* <h2>User Responses:</h2> */}
            <ul>
              {/* <li>Age: {age}</li> */}
              {questionsList.map((question, index) => (
                <li key={index}>
                  {/* {question}: {userResponses[index]} */}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="text-center w-full flex flex-col items-center">
          {step === 0 ? (
            <div className="bg-black bg-opacity-50 font-bold p-5 rounded-md py-60 w-3/4">
            <div className='flex flex-col items-center'> 
              <label htmlFor="age" className="textwhite text-2xl mb-2">
                {questionsList[step]}?
              </label>
              <input
                type="number"
                id="age"
                className='mb-2'
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
              <button
                className="p-2 bg-green-500 text-white"
                onClick={() => {
                  // Store the age response and move to the next question
                  handleAnswer(questionsList[step], age);
                  setAge(''); // Clear the age input field
                }}
              >
                Next
              </button>
              </div>

            </div>
          ) : (
            <div className="bg-black bg-opacity-50 font-bold p-5 rounded-md py-60 w-3/4">
              <p className="text-white text-2xl">{questionsList[step]}?</p>
            </div>
          )}
          {step !== 0 && (
            <div className="mt-4">
              <button
                className="p-2 mr-2 bg-green-500 text-white"
                onClick={() => handleAnswer(questionsList[step], 'yes')}
              >
                Yes
              </button>
              <button
                className="p-2 bg-red-500 text-white"
                onClick={() => handleAnswer(questionsList[step], 'no')}
              >
                No
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Assessment;