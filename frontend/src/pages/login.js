import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import loginBg from "../assets/images/image.jpg";
import logo from "../assets/images/logos/logo5.png";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
      event.preventDefault();

      try {
          const response = await axios.post('http://localhost:5000/login', {
              email: email,
              password: password
          });

          if (response.status === 200) {
              // Handle successful login, maybe set a token or update app state
              navigate('/home');
          } else {
              // Handle any other status code or specific error messages from your server
              console.error('Login failed:', response.data.message);
          }
      } catch (error) {
          console.error('An error occurred:', error);
      }
  };

  return (
    <div className="App bg-cover bg-center min-h-screen"  style={{ backgroundImage: `url(${loginBg})` }}>
      <img
            className="mx-auto h-40 w-auto"
            src={logo}
            alt="Your Company"
          />
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
      

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white bg-opacity-50 px-6 py-6 shadow sm:rounded-lg sm:px-12 ">
          <div className="sm:mx-auto sm:w-full sm:max-w-md mb-6">
            <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
             Sign in to your account
            </h2>
        </div>
            <form className="space-y-6" action="#" method="POST"  onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

            

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>

            <div>
              <div className="relative mt-10">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-gray-200" />
                </div>
                
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}