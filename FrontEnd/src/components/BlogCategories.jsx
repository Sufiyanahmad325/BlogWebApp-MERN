import React, { useContext, useEffect, useState } from "react";
import { BlogContext } from "../App";
import { useNavigate } from "react-router-dom";

const categories = [
  "Technology",
  "Travel",
  "Food",
  "Lifestyle",
  "Fashion",
  "Health",
  "Science",
  "Art",
  "Books",
  "Movies",
  "Music",
];

const BlogCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState("Technology");
  const [filteredData, setFilteredData] = useState([]);
  const { allBlogPost } = useContext(BlogContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!allBlogPost) return;
    const data = allBlogPost.filter(
      (blog) =>
        blog.category?.toLowerCase() === selectedCategory.toLowerCase()
    );
    setFilteredData(data);
  }, [selectedCategory, allBlogPost]);

  return (
    <div className="  flex-col sm:flex sm:flex-row sm:max-h-[90vh]  sm:max-w-7xl mx-auto pt-2 gap-6 px-4">
      {/* Sidebar */}
      <div className=" w-full sm:w-1/4 bg-white rounded-lg shadow p-4">
        <h2 className="text-lg font-semibold mb-3">Categories</h2>
        <ul className=" flex overflow-y-auto sm:space-y-1 sm:flex-col gap-2 ">
          {categories.map((cat) => (
            <li
              key={cat}
              onClick={() => setSelectedCategory(cat.toLowerCase())}
              className={`rounded-full px-6  cursor-pointer sm:px-3 py-2 sm:rounded ${selectedCategory.toLowerCase() === cat.toLowerCase()
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-100"
                }`}
            >
              {cat}
            </li>
          ))}
        </ul>
      </div>

      {/* Blog Grid */}
      <div className="flex-1">
        <h1 className=" mt-6 sm:mt-0 text-2xl font-bold mb-4 capitalize">
          {selectedCategory}
        </h1>
        <hr className="sm:hidden mb-4" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-h-[550px] overflow-y-auto">
          {filteredData.length > 0 ? (
            filteredData.map((blog) => (
              <div
                key={blog._id}
                onClick={() => navigate(`/blogDetails/${blog._id}`)}
                className="bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer overflow-hidden"
              >
                <img
                  src={blog.blogImage || `https://picsum.photos/800/300?random=${blog._id}`}
                  alt={blog.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-3">
                  <h2 className="text-base font-semibold">{blog.title}</h2>
                  <p className="text-gray-600 text-sm mt-1">
                    {blog.content.length > 80
                      ? blog.content.slice(0, 80) + "..."
                      : blog.content}
                  </p>
                  <p className="text-xs text-gray-400 mt-2">
                    {blog.createdAt?.slice(0, 10)}
                  </p>

                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center col-span-3">
              No blogs available in this category.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogCategories;
