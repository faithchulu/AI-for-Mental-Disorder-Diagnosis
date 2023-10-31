import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import logo from "../assets/images/logos/logo5.png"
import BG from "../assets/images/image6.jpg"


const questionsList = [
  "Do you feel often nervous?",
  "Do you feel often panic",
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
  "Are you attached to your material possessions?",
  "Are you an introvert?",
  "Do you ever get pop ups of a stressful memory?",
  "Do you frequently experience nighmares?",
  "Do you often avoid people or activities?",
  "Do you often find yourself feeling negative?",
  "Do you have trouble focusing on a task?",
  "Do you often blame yourself for an unfortunate event?"
];


const Assessment = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleAnswer = (question, answer) => {
    setAnswers((prev) => ({ ...prev, [questionsList[step]]: answer }));
    if (answer === 'yes' || answer === 'no') {
      setStep(step + 1);
    } else {
      setStep(step - 1);
    }
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center space-y-4 App bg-cover bg-center" style={{ backgroundImage: `url(${BG})` }}>
      
      {/* Top navigation section */}
      <div className="absolute top-0 left-0 m-4">
        {step >= 0 && <FaArrowLeft onClick={() => handleAnswer(questionsList[step], 'back')} />}
      </div>
      
      <div className=" w-full flex justify-center items-center mt-4">
        {/* Progress bar */}
        <div className="h-1 bg-gray-300 w-2/3 relative">
          <div className="h-1 bg-green-500" style={{ width: `${(step / questionsList.length) * 100}%` }}></div>
        </div>
      </div>

      <div className="absolute top-0 right-0 m-4">
        {step + 1}/24
      </div>

      <div className="absolute top-0 center-0 m-4">
        <img className="mx-auto h-20 w-auto" src={logo} alt="Your Company" />
      </div>

      {/* Main Content */}
      {step < questionsList.length ? (
        <div className="text-center w-full flex flex-col items-center">
          <div className="bg-black bg-opacity-50 font-bold p-5 rounded-md py-60 w-3/4">
            <p className="text-white text-2xl">{questionsList[step]}?</p>
          </div>
          
          <div className="mt-4">
            <button
              className="p-2 mr-2 bg-blue-500 text-white"
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
        </div>
      ) : (<div>
        <div>
          <p>Thanks for completing the assessment!</p>
          <a href='/diagnosis/:id'> View Results</a>
        </div>
        <div>
        {Object.entries(answers).map(([question, answer]) => (
            <div key={question}>
                <strong>{question}:</strong> {answer}
            </div>
        ))}
          </div></div>
      )}
    </div>
  
  );
};

export default Assessment;