import React, { useContext, useState, useEffect } from "react";
import { BlogContext } from "../App";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoSettings, IoAddOutline } from "react-icons/io5";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import axios from "axios";

export default function ProfilePage() {
  const navigate = useNavigate();
  const [totalLikes, setTotalLikes] = useState(0);
  const { userAllBlog, userDetails, deleteBlog } = useContext(BlogContext);

  const deleteThisBlog = async (id) => {
    if(window.confirm("Delete this blog?")) await deleteBlog(id);
  };

  useEffect(() => {
    const findTotalLikes = async () => {
      try {
        let res = await axios.get('http://localhost:8000/api/v1/users/getTotalLike', {
          withCredentials: true
        });
        setTotalLikes(res.data.data?.totalLikes || res.data.data[0]?.totalLikes || 0);
      } catch (err) { console.log(err); }
    };
    findTotalLikes();
  }, []);

  return (
    <div className="container min-h-screen sm:h-[90vh] mx-auto px-6 py-5 bg-[#FDFCF0]"> 
      {/* FIX: sm:flex-row ka use kiya hai side-by-side laane ke liye */}
      <div className="flex flex-col sm:flex-row gap-8 h-full">
        
        {/* Left Profile Card (Width fixed at 1/3 on desktop) */}
        <div className="w-full sm:w-1/3">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center sticky top-5">
            <div className="relative p-1 border-2 border-blue-100 rounded-full mb-4">
               <img
                src={userDetails?.avatar || "https://i.ibb.co/2NfG6kK/avatar.png"}
                alt="Profile"
                className="w-28 h-28 rounded-full object-cover shadow-sm"
              />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">{userDetails?.fullName || "Name"}</h2>
            <p className="text-blue-500 text-sm font-medium mb-3">
              {userDetails?.email || userDetails?.username}
            </p>

            {/* Stats */}
            <div className="flex space-x-4 my-4">
              <div className="bg-gray-50 border border-gray-100 px-4 py-2 rounded-xl">
                <span className="block text-lg font-bold">✍️ {userAllBlog?.length}</span>
                <span className="text-[10px] uppercase text-gray-400 font-bold">Blogs</span>
              </div>
              <div className="bg-gray-50 border border-gray-100 px-4 py-2 rounded-xl">
                <span className="block text-lg font-bold">❤️ {totalLikes}</span>
                <span className="text-[10px] uppercase text-gray-400 font-bold">Likes</span>
              </div>
            </div>

            <p className="text-gray-500 text-sm leading-relaxed mb-6 italic line-clamp-3">
              {userDetails?.bio || "Frontend Developer skilled in React.js and building user-friendly apps."}
            </p>

            <div className="flex gap-3 w-full">
              <NavLink to={'/add-blog'} className="flex-1 bg-black text-white text-xs py-2.5 rounded-lg font-semibold hover:bg-gray-800 transition-all flex items-center justify-center gap-1">
                <IoAddOutline size={16}/> New Blog
              </NavLink>
              <Link to={"/biopage"} className="flex-1 bg-gray-100 text-gray-700 text-xs py-2.5 rounded-lg font-semibold hover:bg-gray-200 transition-all">
                Edit Profile
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side Blogs (Width fixed at 2/3 on desktop) */}
        <div className="w-full sm:w-2/3 flex flex-col">
          <div className="flex justify-between items-center mb-6 px-1">
            <h3 className="text-xl font-bold text-gray-800 tracking-tight">My Collections</h3>
            <button onClick={() => navigate("/settings")} className="p-2 hover:bg-white rounded-full transition-all shadow-sm border border-gray-50">
               <IoSettings size={22} className="text-gray-600 hover:rotate-90 duration-300" />
            </button>
          </div>

          {/* 👇 Height 550px preserved with custom layout */}
          <div className="h-[550px] overflow-y-auto pr-2 scroll-smooth custom-scrollbar">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {userAllBlog?.length > 0 ? (
                userAllBlog.map((blog) => (
                  <div key={blog._id} className="bg-white border border-gray-100 shadow-sm rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
                    <img
                      src={blog.blogImage || `https://picsum.photos/400/200?random=${blog._id}`}
                      alt={blog.title}
                      className="w-full h-36 object-cover"
                    />
                    <div className="p-4">
                      <h4 className="font-bold text-gray-800 text-md line-clamp-1">{blog.title}</h4>
                      <p className="text-gray-500 text-[11px] mt-2 leading-relaxed line-clamp-2">
                        {blog.content}
                      </p>
                      <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-50">
                        <button onClick={() => navigate(`/blogDetails/${blog._id}`)} className="text-[11px] font-bold text-blue-600 hover:underline">
                          Read More
                        </button>
                        <div className="flex gap-2">
                          <button onClick={() => navigate(`/edit-blog-form/${blog._id}`)} className="p-1.5 bg-blue-50 text-blue-600 rounded-md">
                            <FaRegEdit size={12}/>
                          </button>
                          <button onClick={() => deleteThisBlog(blog?._id)} className="p-1.5 bg-red-50 text-red-500 rounded-md">
                            <FaTrashAlt size={12}/>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-20 text-gray-400">No stories published.</div>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}