import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BlogContext } from "../App";


export default function EditBlogForm() {


  // initial dummy data (edit karne ke liye default values)
  const [title, setTitle] = useState("My First Blog");
  const [content, setContent] = useState("This is my blog content...");
  const [category, setCategory] = useState("technology");
  const [image, setImage] = useState(null);
  const [isOpen, setIsOpen] = useState(true);

  const [currentFindData, setCurrentFindData] = useState()

  const navigator = useNavigate()


  const { id } = useParams();

  const { allBlogPost, editYourBlog } = useContext(BlogContext);


  const handleSave = async() => {
    let formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("category", category);
    formData.append("blogImage", image);
    formData.append("blogId" , id)

    await editYourBlog(formData)
  }

  //   Find the blog post by ID and set initial form values
  useEffect(() => {
    if (allBlogPost && id) {
      const foundBlog = allBlogPost.find((blog) => blog._id === id);
      if (foundBlog) {
        setCurrentFindData(foundBlog);
        setTitle(foundBlog.title || "");
        setContent(foundBlog.content || "");
        setCategory(foundBlog.category || "");
      }
    }
  }, [allBlogPost, id]);


  // Save blog handler





  const handleCancel = () => navigator(-1);

  if (!isOpen) return null;

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6 border border-gray-200 relative mt-10">
      {/* ❌ Cancel Button */}
      <button
        onClick={handleCancel}
        className="absolute top-3 right-3 text-gray-500 hover:text-red-600 text-lg"
        title="Close"
      >
        ✖
      </button>

      <h2 className="text-2xl font-semibold mb-5 text-gray-800 text-center">Edit Blog</h2>

      {/* Title */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Edit blog title"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
        />
      </div>

      {/* Content */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Content</label>
        <textarea
          rows="5"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Edit your content..."
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
        ></textarea>
      </div>

      {/* Category */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
        >
          <option value="">-- Select Category --</option>
          <option value="technology">Technology</option>
          <option value="travel">Travel</option>
          <option value="food">Food</option>
          <option value="lifestyle">Lifestyle</option>
          <option value="fashion">Fashion</option>
          <option value="health">Health</option>
          <option value="science">Science</option>
          <option value="art">Art</option>
          <option value="books">Books</option>
          <option value="movies">Movies</option>
          <option value="music">Music</option>
        </select>
      </div>

      {/* Image Upload */}
      <div className="mb-5">
        <label className="block text-gray-700 mb-1">Change Image (optional)</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="w-full text-sm border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-blue-300 focus:outline-none"
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3">
        <button
          onClick={handleCancel}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
