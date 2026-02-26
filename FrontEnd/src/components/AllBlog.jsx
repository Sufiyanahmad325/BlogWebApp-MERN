import React, { useContext, useEffect, useState } from "react";
import { BlogContext } from "../App";
import { useNavigate } from "react-router-dom";


const AllBlog = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [searchBlog, setSearchBlog] = useState([])

  const { allBlogPost } = useContext(BlogContext)
  const navigate = useNavigate();


  useEffect(() => {
    if (allBlogPost && searchTerm) {
      const filteredBlogs = allBlogPost.filter(blog => {
        return blog.title.toLowerCase().includes(searchTerm.toLowerCase())
      })
      setSearchBlog(filteredBlogs)
    } else {
      setSearchBlog(allBlogPost)
    }
  }, [searchTerm, allBlogPost])




  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        📝 Explore Inspiring Blogs
      </h1>

      {/* Search Box */}
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="🔍 Search a Single User..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 border border-gray-300 bg-white shadow-sm rounded-full px-5 py-3 text-center text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
        />
      </div>

      {/* Blog Cards */}
      {searchBlog?.length > 0 ? (
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {searchBlog?.map((blog) => (
            <div

              key={blog.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-3"
            >
              <img
                src={blog.blogImage || "https://i.ibb.co/2NfG6kK/avatar.png"}
                alt={blog.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-800 mb-1">
                  {blog.title}
                </h2>
                <div className="flex justify-between">
                  <p className="text-sm text-gray-500 mb-3">✍️ {blog?.author?.fullName || 'unknown'}</p>
                  <p className="text-sm text-gray-500 mb-3">{blog.createdAt?.slice(0, 10)}</p>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {blog.content.length > 120
                    ? blog.content.slice(0, 120) + "..."
                    : blog.content}
                </p>
                <div className="mt-5 flex justify-between">
                  <button
                    onClick={() => navigate(`/blogDetails/${blog._id}`)}
                    className="px-4 py-2 text-sm rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-all">
                    Read More
                  </button>

                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10 text-lg">
          No blogs found for “{searchTerm}”
        </p>
      )}
    </div>
  );
};

export default AllBlog;
