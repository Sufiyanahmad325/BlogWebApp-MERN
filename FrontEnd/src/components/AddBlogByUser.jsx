import React, { useContext, useState } from 'react'
import { BlogContext } from '../App';
import { useNavigate } from 'react-router-dom';

function AddBlogByUser() {

     // form state
      const [title, settitle] = useState('');
      const [content, setContent] = useState('');
      const [category, setCategory] = useState('');
      const [imageFile, setImageFile] = useState(null);

      const { uplodeBlog } = useContext(BlogContext);
      const navigate = useNavigate()

    const handleAddBlog = () => {
        if (!title || !content || !category || !imageFile) {
            alert("Please fill all the fields");
            return;
        }

        const formData = new FormData();
        formData.append("title", title);
        formData.append("content", content);
        formData.append("category", category);
        formData.append("blogImage", imageFile);

        uplodeBlog(formData).then((res) => {
            if (res.data.success) {
                settitle('');
                setContent('');
                setCategory('');
                setImageFile(null);
                navigate('/profile')
            }
        });
    };
    return (
        <div className="max-w-3xl mx-auto mt-10 p-8 rounded-xl shadow-lg bg-gray-100 relative">
            {/* ❌ Cut Button */}
            <button
                onClick={() => navigate(-1)}
                className="absolute top-4 right-4 text-gray-600 hover:text-red-600 text-xl font-bold"
                title="Close"
            >
                ✖
            </button>

            <h1 className="text-2xl font-bold mb-6 text-center">Add New Blog</h1>

            <form className="flex flex-col gap-2">
                {/* Title */}
                <div>
                    <label className="block font-medium mb-1">Title</label>
                    <input
                        onChange={(e) => settitle(e.target.value)}
                        value={title}
                        type="text"
                        placeholder="Enter blog title"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Content */}
                <div>
                    <label className="block font-medium mb-1">Content</label>
                    <textarea
                        onChange={(e) => setContent(e.target.value)}
                        value={content}
                        placeholder="Write your blog content..."
                        rows="6"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                </div>

                {/* Category */}
                <div>
                    <label className="block font-medium mb-1">Category</label>
                    <select
                        onChange={(e) => setCategory(e.target.value)}
                        value={category}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                <div>
                    <label className="block font-medium mb-1">Upload Image</label>
                    <input
                        onChange={(e) => setImageFile(e.target.files[0])}
                        type="file"
                        accept="image/*"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Submit Button */}
                <button
                    onClick={() => handleAddBlog()}
                    type="button"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                    Add Blog
                </button>
            </form>
        </div>
    )
}
 

export default AddBlogByUser