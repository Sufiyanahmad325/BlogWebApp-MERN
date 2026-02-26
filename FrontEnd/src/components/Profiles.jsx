import React, { useContext, useState } from "react";
import { BlogContext } from "../App";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoSettings } from "react-icons/io5";

export default function ProfilePage() {
  const navigate = useNavigate();

 

  // access of context
  const {userAllBlog, userDetails, deleteBlog } = useContext(BlogContext);

  const deleteThisBlog = async (id) => {
    await deleteBlog(id)
  }

  return (
    <div className="container sm:h-[90vh] mx-auto px-6 py-5 bg-amber-50 ">
      <div className="flex flex-col sm:flex-row gap-8">
        {/* Left Profile Card */}
        <div className="w-full sm:w-1/3 bg-white rounded-2xl shadow-lg p-6">
          <div className="flex flex-col items-center">
            <img
              src={userDetails?.avatar || "https://i.ibb.co/2NfG6kK/avatar.png"}
              alt="Profile"
              className="w-28 h-28 rounded-full object-cover mb-4"
            />
            <h2 className="text-2xl font-bold">{userDetails?.fullName || "Name"}</h2>
            <p className="text-gray-500 text-sm mb-3">
              {userDetails?.email || userDetails?.username}
            </p>

            {/* Blog Count */}
            <div className="flex space-x-6 text-gray-600 my-4">
              <span>✍️ {userAllBlog?.length} Blogs</span>
            </div>

            <p className="text-center text-gray-600 text-sm">
              {userDetails?.bio ||
                "Frontend Developer skilled in React.js, Tailwind CSS, and building user-friendly web apps."}
            </p>

            {/* Buttons: Add Blog + Edit Profile */}
            <div className="flex space-x-4 mt-5">
              <NavLink to={'/add-blog'}
                onClick={() => handleAddBlogOpenOption()}
                className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
              >
                ➕ Add Blog
              </NavLink>
              <Link
                to={"/biopage"}
                className="bg-gray-200 text-gray-700 px-5 py-2 rounded-lg hover:bg-gray-300"
              >
                ✏️ Edit Profile
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side Blogs with Scroll */}
        <div className="w-full md:w-2/3">

          <div className="flex justify-between items-center mb-6 mr-2.5">
            <h3 className="text-xl font-semibold">My Blogs</h3>
            <IoSettings
              size={26}
              onClick={() => navigate("/settings")}
              className="cursor-pointer hover:text-blue-900 transition-transform duration-300 hover:rotate-90"
              title="Settings"
            />

          </div>


          {/* 👇 Fixed Height + Scroll Only in Blog Section */}
          <div className="h-[550px] overflow-y-scroll scroll-smooth pr-2">
            {/* Cards Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
              {userAllBlog?.length > 0 ? (
                userAllBlog.map((blog) => (
                  <div
                    key={blog._id}
                    className="bg-white shadow-md rounded-xl overflow-hidden "
                  >
                    <img
                      src={blog.blogImage || `https://picsum.photos/400/200?random=${blog._id}`}
                      alt={blog.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <h4 className="font-bold text-lg">{blog.title}</h4>
                      <p className="text-gray-600 text-sm mt-2">
                        {blog.content.length > 120 ? blog.content.slice(0, 120) + "..." : blog.content}
                      </p>
                      <div className="flex justify-between items-center mt-3">
                        <button
                          onClick={() => navigate(`/blogDetails/${blog._id}`)}
                          className="text-sm text-blue-600 hover:underline"
                        >
                          Read More →
                        </button>
                        <div className="flex gap-2">
                          <button
                            onClick={() => navigate(`/edit-blog-form/${blog._id}`)}
                            className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-md text-sm font-medium transition">
                            ✏️ Edit
                          </button>
                          <button
                            onClick={() => deleteThisBlog(blog?._id)}
                            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm font-medium transition">
                            🗑️ Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex justify-center">There are no blogs</div>
              )}
            </div>
          </div>
        </div>
      </div>

     </div>
     );
    }
