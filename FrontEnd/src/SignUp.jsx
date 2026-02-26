import React, { useContext, useState } from "react";
import axios from 'axios'
import { BlogContext } from "./App";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  // const { signUp, setSignUp } = useContext(BlogContext);

  const navigate = useNavigate()

  const [fullName, setFullName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSignUp = async () => {
    if ([fullName, username, email, password, confirmPassword].some(field => field?.trim() === "")) {
      return alert("all fields are required")
    }

    if (password !== confirmPassword) {
      return alert("passwords do not match")
    }

    const res = await axios.post('http://localhost:8000/api/v1/users/register', {
      fullName,
      username,
      email,
      password
    })
    alert(res.data.message)
    console.log(res.data)
    // setSignUp(false)
    navigate('/')


  }


  function handleSignUpCloseOption() {
    // setSignUp(false)
    navigate('/')
  }

  // if (!signUp) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center  bg-opacity-40  z-50">
      <div className="relative bg-white p-8 rounded-xl shadow-lg w-full max-w-md">

        <button
          onClick={() => handleSignUpCloseOption()}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl"
        >
          ✖
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Create an Account
        </h2>

        <form className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-gray-700 mb-1">Full Name</label>
            <input
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
              type="text"
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 
              focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Username */}
          <div>
            <label className="block text-gray-700 mb-1">Username</label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              type="text"
              placeholder="Enter your username"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 
              focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 
              focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 
              focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-gray-700 mb-1">Confirm Password</label>
            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              type="text"
              placeholder="Re-enter your password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 
              focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            onClick={() => handleSignUp()}
            type="button"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
