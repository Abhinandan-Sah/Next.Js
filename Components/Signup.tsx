"use client";
import { ChangeEvent, useRef } from "react";
import axios from "axios";

const Signup = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (nameRef.current && usernameRef.current && passwordRef.current) {
      axios.post("https://localhost:3000/api/user", {
        name: nameRef.current.value,
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };

  return (
    <div className="h-screen w-full flex justify-center items-center bg-gray-100">
      <form className="p-8 w-4/12 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign in</h1>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
          <input ref={nameRef} type="text" id="name" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Enter Name" />
        </div>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">Username</label>
          <input ref={usernameRef} type="text" id="username" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Enter Username" />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
          <input ref={passwordRef} type="password" id="password" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Enter Password" />
        </div>
        <button onClick={handleSubmit} className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300">Sign in</button>
      </form>
    </div>
  );
};

export default Signup;
