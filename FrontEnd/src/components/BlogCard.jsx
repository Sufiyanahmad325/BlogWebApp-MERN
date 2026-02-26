import React, { useContext } from "react";
import { BlogContext } from "../App";
import { useNavigate } from "react-router-dom";

const BlogCards = () => {
  const { userAllBlog } = useContext(BlogContext);
  const navigate = useNavigate();

  const handleCardClick = (blogId) => {
    navigate(`/blogDetails/${blogId}`);
  };

  return (
    <div className="container mx-auto px-16 my-8 ">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {userAllBlog?.map((blog, i) => (
          <div
            key={i}
            onClick={() => handleCardClick(blog._id)} // 👈 navigate on click
            className="rounded-xl shadow-md p-4 bg-white hover:shadow-lg transition cursor-pointer"
          >
            <img
              src={blog.blogImage ||` https://picsum.photos/200/200?random=${i}`}
              alt="Blog"
              className="w-full h-40 object-cover rounded-md mb-3"
            />
            <h3 className="font-semibold text-lg">
              {blog.title || "Title Not Available"}
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Date • {new Date().toLocaleDateString()}
            </p>
            <p className="text-gray-600 text-sm mt-2">
              {blog.content.length > 100
                ? blog.content.slice(0, 100) + "..."
                : blog.content || "Content Not Available"}
            </p>
          </div>
        ))}
      </div>

     
    </div>
  );
};

export default BlogCards;
