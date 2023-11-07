import React from 'react'
import logo from '../assets/images/logos/logo5.png'
import BG from '../assets/images/image6.jpg'
// import { Link } from 'react-router-dom'

export default function LandingPage(){
    return(
        <div className="App bg-cover bg-center min-h-screen"  style={{ backgroundImage: `url(${BG})` }}>
            <div className='bg-black bg-opacity-50 min-h-screen'>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <img
                        className="absolute top-0 mx-auto h-20 w-auto"
                        src={logo}
                        alt="Your Company"
                    />
                
                <h2 className="  text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    MindSight
                </h2>
            
                </div>

            <div className="">
                <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Hello Faith!
                        <br />
                        Check your mental health status today.
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white">
                    Please note that this app is intended for informational purposes only and should not be used as a substitute for professional medical advice, diagnosis, or treatment. Always consult with a healthcare provider for any concerns regarding your mental well-being.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                        href="/assessment"
                        className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                        Take Assessment
                        </a>
                        <a href="/diagnosis/:id" className="text-sm font-semibold leading-6 text-white">
                        Past Diagnoses <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>

    )
}