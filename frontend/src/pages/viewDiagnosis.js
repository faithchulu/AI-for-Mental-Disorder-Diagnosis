import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import BG from "../assets/images/image6.jpg"
import { Link } from 'react-router-dom';


const viewDiagnosis = () => {

  // Define the disorder data within the component
  const disorders = [
    {
      name: 'ADHD',
      description: 'Attention Deficit Hyperactivity Disorder (ADHD) is a neurodevelopmental disorder characterized by persistent patterns of inattention, hyperactivity, and impulsivity.',
      recommendations: 'Treatment may include behavioral therapy, medication, and lifestyle changes.'
    },
    {
      name: 'ASD',
      description: 'Autism Spectrum Disorder (ASD) is a complex neurodevelopmental disorder that affects social interaction, communication, and behavior.',
      recommendations: 'Early intervention, therapy, and educational support can be helpful for individuals with ASD.'
    },
    {
      name: 'Loneliness',
      description: 'Loneliness is a subjective feeling of social isolation and a lack of meaningful connections with others.',
      recommendations: 'Building social connections, seeking support, and engaging in social activities can help alleviate loneliness.'
    },
    {
      name: 'MDD',
      description: 'Major Depressive Disorder (MDD) is a mood disorder characterized by persistent feelings of sadness and a lack of interest or pleasure in daily activities.',
      recommendations: 'Treatment may include psychotherapy, medication, and lifestyle changes.'
    },
    {
      name: 'OCD',
      description: 'Obsessive-Compulsive Disorder (OCD) is a mental health condition characterized by persistent, unwanted, and intrusive thoughts (obsessions) and repetitive behaviors (compulsions).',
      recommendations: 'Cognitive-behavioral therapy (CBT) and medication can be effective in managing OCD.'
    },
    {
      name: 'PDD',
      description: 'Pervasive Developmental Disorders (PDD) refer to a group of conditions that include autism and other developmental disorders.',
      recommendations: 'Individualized treatment plans and therapies can be beneficial for individuals with PDD.'
    },
    {
      name: 'PTSD',
      description: 'Post-Traumatic Stress Disorder (PTSD) is a mental health condition that can develop after exposure to a traumatic event.',
      recommendations: 'Treatment often involves psychotherapy, medication, and support from mental health professionals.'
    },
    {
      name: 'Anxiety',
      description: 'Anxiety disorders involve excessive worry, fear, or nervousness and can interfere with daily functioning.',
      recommendations: 'Therapies, lifestyle changes, and medication can be part of anxiety disorder treatment.'
    },
    {
      name: 'Bipolar',
      description: 'Bipolar Disorder is a mood disorder characterized by episodes of depression and mania, or high energy and activity levels.',
      recommendations: 'Medication and psychotherapy are often used to manage bipolar disorder.'
    },
    {
      name: 'Eating disorder',
      description: 'Eating disorders, such as anorexia and bulimia, involve unhealthy eating behaviors and attitudes about food and weight.',
      recommendations: 'Treatment may include nutritional counseling, therapy, and medical monitoring.'
    },
    {
      name: 'Psychotic depression',
      description: 'Psychotic Depression is a severe form of depression with added psychotic symptoms like delusions and hallucinations.',
      recommendations: 'Antidepressant medication and antipsychotic medication are often used in treatment.'
    },
    {
      name: 'Sleeping disorder',
      description: 'Sleeping disorders include conditions like insomnia and sleep apnea that disrupt normal sleep patterns.',
      recommendations: 'Treatment may involve lifestyle changes, therapy, and in some cases, medication.'
    }
  ];
  

  // Choose a random disorder
  const randomIndex = Math.floor(Math.random() * disorders.length);
  const randomDisorder = disorders[randomIndex];

  return (
    <div className="flex flex-col h-screen  space-y-4 App bg-cover bg-center p-6" style={{ backgroundImage: `url(${BG})`}}>
        <Link to='/home'>
          <FaArrowLeft/>
        </Link>
        <div className="text-center w-full flex flex-col justify-center items-center">
        <div className="bg-teal-900 bg-opacity-90 font-bold p-5 py-40 rounded-md w-3/4">
          
        <div className="text-center flex flex-col  items-center text-white">
          {/* <p className='text-blue-100'>Your diagnosis is </p> */}
          <div className="text-5xl text-pink-600 font-bold mb-4">{randomDisorder.name}</div>
          <div className="text-lg">{randomDisorder.description}</div>
          <div className="mt-4">
            <p className='text-blue-400'>Treatment Recommendations:</p>
            <p className='text-lg'>{randomDisorder.recommendations}</p>
          </div>
        </div>
        </div>
        <Link to='/diagnosis'>
            <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded my-4">
              Go back Home
            </button>
        </Link> 
      </div>
    </div>
  );
};

export default viewDiagnosis;
