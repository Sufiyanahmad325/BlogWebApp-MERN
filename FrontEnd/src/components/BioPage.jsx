import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { BlogContext } from "../App";

export default function BioPage() {
  const [formData, setFormData] = useState({
    name: "Sufiyan Ahmad",
    username: "sufiyan_ahmad",
    email: "sufiyan@example.com",
    bio: "Frontend Developer skilled in React.js, Tailwind CSS, and building user-friendly web apps.",
    avatar: "https://i.ibb.co/2NfG6kK/avatar.png",
  });

  const { userDetails ,updateProfileDetails} = useContext(BlogContext);
  useEffect(() => {
    if (userDetails) {
      setName(userDetails.fullName || "");
      setUsername(userDetails.username || "");
      setEmail(userDetails.email || "");
      setImageFile(userDetails.avatar || "https://i.ibb.co/2NfG6kK/avatar.png");
      setBio(
        userDetails.bio ||
          "Frontend Developer skilled in React.js, Tailwind CSS, and building user-friendly web apps."
      );
    }
  }, [userDetails]); 

  const [imageFile, setImageFile] = useState(userDetails?.avatar )
  const [name, setName] = useState(userDetails?.fullName || "");
  const [username, setUsername] = useState(userDetails?.username || "");
  const [email, setEmail] = useState(userDetails?.email || "");
  const [bio, setBio] = useState(userDetails?.bio || "Frontend Developer skilled in React.js, Tailwind CSS, and building user-friendly web apps.");

  // ✅ handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("fullName", name);
    formData.append("username", username);
    formData.append('bio', bio);
    if (imageFile instanceof File) {
        formData.append("avatar", imageFile);
    }

    updateProfileDetails(formData);
   
  };

  return (
    <div className="sm:h-[90vh] from-blue-50 to-gray-100 flex items-center justify-center px-4 mt-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-lg w-full max-w-lg p-8"
      >
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          ✏️ Update Your Profile
        </h1>

        {/* Profile Image */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={imageFile ||  "https://i.ibb.co/2NfG6kK/avatar.png" }
            alt="Profile Preview"
            className="w-28 h-28 rounded-full object-cover border-4 border-blue-500 shadow-md mb-3"
          />
          <label className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700 transition">
            Change Photo
            <input
              type="file"
              accept="image/*"
              name="avatar"
              onChange={(e) => setImageFile(e.target.files[0])}
              className="hidden"
            />
          </label>
        </div>

        {/* Name */}
        <div className="mb-2">
          <label className="block text-gray-700 font-medium mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Username */}
        <div className="mb-2">
          <label className="block text-gray-700 font-medium mb-1">Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
        <div className="mb-2">
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input
            disabled
            type="email"
            name="email"
            value={email}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-200 cursor-not-allowed"
          />
        </div>

        {/* Bio */}
        <div className="mb-2">
          <label className="block text-gray-700 font-medium mb-1">Bio</label>
          <textarea
            name="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            maxLength={150}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
}
