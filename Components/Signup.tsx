"use client";

import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const Signup = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [isClient, setIsClient] = useState(false);
  // const [router, setRouter] = useState<any>(null);

  const router = useRouter();

  // useEffect(() => {
  //   setIsClient(true);
  //   setRouter(useRouter());
  // }, []);

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/user", {
        name, 
        username, 
        password
      });
      // if (isClient) {
        router.push("/");
      // }
    } catch (error) {
      console.error("Error during signup", error);
    }
  };

  return (
    <div className="h-screen w-full flex justify-center items-center bg-gray-100">
      <form className="p-8 w-4/12 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign up</h1>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
          <input 
            onChange={handleNameChange} 
            type="text" 
            id="name" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" 
            placeholder="Enter Name" 
          />
        </div>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">Username</label>
          <input 
            onChange={handleUsernameChange} 
            type="text" 
            id="username" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" 
            placeholder="Enter Username" 
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
          <input 
            onChange={handlePasswordChange} 
            type="password" 
            id="password" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" 
            placeholder="Enter Password" 
          />
        </div>
        <button 
          onClick={handleSubmit} 
          className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Signup;
