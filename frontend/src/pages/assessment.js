import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import logo from "../assets/images/logos/logo5.png"
import BG from "../assets/images/image6.jpg"


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
  const [answers, setAnswers] = useState({
    'age': [0],
    'feeling.nervous': [0],
    'panic': [0],
    'breathing.rapidly': [0],
    'sweating': [0],
    'trouble.in.concentration': [0],
    'trouble.sleeping': [0],
    'trouble.with.work': [0],
    'hopelessness': [0],
    'anger': [0],
    'over.react': [0],
    'change.in.eating': [0],
    'suicidal.thought': [0],
    'feeling.tired': [0],
    'close.friend': [0],
    'social.media.addiction': [0],
    'weight.gain': [0],
    'introvert': [0],
    'popping.up.stressful.memory': [0],
    'nightmares': [0],
    'avoids.people.or.activities': [0],
    'feeling.negative': [0],
    'trouble.concentrating': [0],
    'blaming.yourself': [0],
    'hallucinations': [0],
    'repetitive.behavior': [0],
    'seasonally': [0],
    'increased.energy': [0],
  });
  

  const handleAnswer = (question, answer) => {
    if (step === 0) {
      // Handle the age question separately
      setAnswers((prevAnswers) => ({ ...prevAnswers, age: [parseInt(answer, 10)] }));
      setStep(step + 1); // Move to the next question
    } else {
      // Handle other questions as before
      const answerValue = answer === 'yes' ? 1 : 0;
      setAnswers((prevAnswers) => ({ ...prevAnswers, [question]: [answerValue] }));
      if (answer === 'yes' || answer === 'no') {
        setStep(step + 1);
      } else {
        setStep(step - 1);
      }
    }
  };
  
  
  const [age, setAge] = useState('');

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
        {step + 1}/{questionsList.length}
      </div>

      <div className="absolute top-0 center-0 m-4">
        <img className="mx-auto h-20 w-auto" src={logo} alt="Your Company" />
      </div>

      {/* Main Content */}
      <div className="text-center w-full flex flex-col items-center">
        {step === 0 ? ( // Render the age input field for the first question
           <div>
            <label htmlFor="age" className="textwhite text-2xl">
              {questionsList[step]}?
            </label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <button
              className="p-2 bg-blue-500 text-white"
              onClick={() => {
                // Store the age response and move to the next question
                handleAnswer(questionsList[step], age);
                setAge(''); // Clear the age input field
              }}
            >
              Next
            </button>
          </div>
        ) : (
          <div className="bg-black bg-opacity-50 font-bold p-5 rounded-md py-60 w-3/4">
            <p className="textwhite text-2xl">{questionsList[step]}?</p>
          </div>
  )}
  
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
    </div>
  
  );
};

export default Assessment;