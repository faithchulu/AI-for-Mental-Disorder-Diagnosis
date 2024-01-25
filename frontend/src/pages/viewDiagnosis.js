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
      recommendations: 'Treatment may include behavioral therapy, medication, and lifestyle changes.',
      url: "https://www.cdc.gov/ncbddd/adhd/index.html#:~:text=People%20with%20ADHD%20may%20have,improve%20as%20the%20child%20ages."
    },
    {
      name: 'ASD',
      description: 'Autism Spectrum Disorder (ASD) is a complex neurodevelopmental disorder that affects social interaction, communication, and behavior.',
      recommendations: 'Early intervention, therapy, and educational support can be helpful for individuals with ASD.',
      url: "https://www.cdc.gov/ncbddd/autism/signs.html#:~:text=Autism%20spectrum%20disorder%20(ASD)%20is,%2C%20moving%2C%20or%20paying%20attention."
    },
    {
      name: 'Loneliness',
      description: 'Loneliness is a subjective feeling of social isolation and a lack of meaningful connections with others.',
      recommendations: 'Building social connections, seeking support, and engaging in social activities can help alleviate loneliness.',
      url: "https://www.verywellmind.com/loneliness-causes-effects-and-treatments-2795749#:~:text=While%20common%20definitions%20of%20loneliness,to%20form%20connections%20with%20others."
    },
    {
      name: 'MDD',
      description: 'Major Depressive Disorder (MDD) is a mood disorder characterized by persistent feelings of sadness and a lack of interest or pleasure in daily activities.',
      recommendations: 'Treatment may include psychotherapy, medication, and lifestyle changes.',
      url: "https://en.wikipedia.org/wiki/Major_depressive_disorder#:~:text=Major%20depressive%20disorder%20(MDD)%2C,pleasure%20in%20normally%20enjoyable%20activities."
    },
    {
      name: 'OCD',
      description: 'Obsessive-Compulsive Disorder (OCD) is a mental health condition characterized by persistent, unwanted, and intrusive thoughts (obsessions) and repetitive behaviors (compulsions).',
      recommendations: 'Cognitive-behavioral therapy (CBT) and medication can be effective in managing OCD.',
      url: "https://www.nimh.nih.gov/health/topics/obsessive-compulsive-disorder-ocd#:~:text=Obsessive%2Dcompulsive%20disorder%20(OCD),or%20interfere%20with%20daily%20life."
    },
    {
      name: 'PDD',
      description: 'Pervasive Developmental Disorders (PDD) refer to a group of conditions that include autism and other developmental disorders.',
      recommendations: 'Individualized treatment plans and therapies can be beneficial for individuals with PDD.'
    },
    {
      name: 'PTSD',
      description: 'Post-Traumatic Stress Disorder (PTSD) is a mental health condition that can develop after exposure to a traumatic event.',
      recommendations: 'Treatment often involves psychotherapy, medication, and support from mental health professionals.',
      url: "https://www.nimh.nih.gov/health/topics/post-traumatic-stress-disorder-ptsd#:~:text=Post%2Dtraumatic%20stress%20disorder%20(PTSD)%20is%20a%20disorder%20that,or%20respond%20to%20potential%20danger."
    },
    {
      name: 'Anxiety',
      description: 'Anxiety disorders involve excessive worry, fear, or nervousness and can interfere with daily functioning.',
      recommendations: 'Therapies, lifestyle changes, and medication can be part of anxiety disorder treatment.',
      url: "https://my.clevelandclinic.org/health/diseases/9536-anxiety-disorders#:~:text=What%20is%20an%20anxiety%20disorder,normal%20to%20have%20some%20anxiety."

    },
    {
      name: 'Bipolar',
      description: 'Bipolar Disorder is a mood disorder characterized by episodes of depression and mania, or high energy and activity levels.',
      recommendations: 'Medication and psychotherapy are often used to manage bipolar disorder.',
      url: "https://www.nimh.nih.gov/health/topics/bipolar-disorder#:~:text=Bipolar%20disorder%20(formerly%20called%20manic,day%2Dto%2Dday%20tasks."
    },
    {
      name: 'Eating disorder',
      description: 'Eating disorders, such as anorexia and bulimia, involve unhealthy eating behaviors and attitudes about food and weight.',
      recommendations: 'Treatment may include nutritional counseling, therapy, and medical monitoring.',
      url: "https://www.nhs.uk/mental-health/feelings-symptoms-behaviours/behaviours/eating-disorders/overview/#:~:text=An%20eating%20disorder%20is%20a,your%20weight%20or%20body%20shape."
    },
    {
      name: 'Psychotic depression',
      description: 'Psychotic Depression is a severe form of depression with added psychotic symptoms like delusions and hallucinations.',
      recommendations: 'Antidepressant medication and antipsychotic medication are often used in treatment.',
      url: "https://www.nhs.uk/mental-health/conditions/psychotic-depression/"
    },
    {
      name: 'Sleeping disorder',
      description: 'Sleeping disorders include conditions like insomnia and sleep apnea that disrupt normal sleep patterns.',
      recommendations: 'Treatment may involve lifestyle changes, therapy, and in some cases, medication.',
      url: "https://www.psychiatry.org/patients-families/sleep-disorders/what-are-sleep-disorders#:~:text=Sleep%20disorders%20(or%20sleep%2Dwake,%2C%20anxiety%2C%20or%20cognitive%20disorders."
    }
  ];
  

  // Choose a random disorder
  const randomIndex = Math.floor(Math.random() * disorders.length);
  const randomDisorder = disorders[randomIndex];

  return (
    <div className="flex flex-col min-h-screen  space-y-4 App bg-cover bg-center p-6" style={{ backgroundImage: `url(${BG})`}}>
        <Link to='/home'>
          <FaArrowLeft/>
        </Link>
        <div className="text-center w-full flex flex-col justify-center items-center">
        <div className="bg-teal-900 bg-opacity-90 font-bold p-5 py-20 rounded-md w-3/4">
          
        <div className="text-center flex flex-col  items-center text-white">
          {/* <p className='text-blue-100'>Your diagnosis is </p> */}
          <div className="text-5xl text-pink-600 font-bold mb-4">{randomDisorder.name}</div>
          <div className="text-lg">{randomDisorder.description}</div>
          <div className="mt-4">
            <p className='text-blue-400'>Treatment Recommendations:</p>
            <p className='text-lg'>{randomDisorder.recommendations}</p>
          </div>

          <div className='mt-6'>
            <a href={randomDisorder.url} className='text-sm font-normal underline'>View More Infomation about this disorder here</a>
          </div>
        </div>
        </div>
        <Link to='/home'>
            <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded my-4">
              Go back Home
            </button>
        </Link> 
      </div>
    </div>
  );
};

export default viewDiagnosis;
