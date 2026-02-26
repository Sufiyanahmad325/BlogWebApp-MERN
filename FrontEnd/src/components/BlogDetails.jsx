// BlogDetails.jsx
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BlogContext } from "../App";
import axios from "axios";

export default function BlogDetails() {
    const { id } = useParams();
    const { LikeBlog, userDetails, commentOnBlog , setIsLoading } = useContext(BlogContext);


    const [blog, setBlog] = useState(null);
    const [commentText, setCommentText] = useState('')



    useEffect(() => {
        setIsLoading(true)
        const findMyBlog = async () => {
            const res = await axios.post("http://localhost:8000/api/v1/users/read-blog", { blogId: id },
                {
                    withCredentials: true
                }
            )
            if (res.data.success) {
                setBlog(res.data.data)
                setIsLoading(false)
            } else {
                setIsLoading(false)
            }
        }
        findMyBlog()
    }, [id]);


    const postCommentOnTheBlog = async () => {
        try {
            const res = await commentOnBlog({ blogId: blog._id, commentText: commentText });
            if (res.data.success) {
                setBlog(res.data.data)
                setCommentText('')
                alert(res.data.message)
            }
        } catch (error) {
            console.log(error)
        }
    };



    // ✅ Like toggle handler

    const handleLike = async () => {
        try {
            let res = await LikeBlog(blog._id);
            if (res.data.success) {
                setBlog(res.data.data)
            }

        } catch (error) {
            console.log(error)

        }
    };



    if (!blog) {
        return (
            <div className="text-center mt-20 text-gray-600 text-lg">
                Blog not found 😕
            </div>
        );
    }



    return (
        <div className="max-w-4xl mx-auto px-6 py-12">

            {/* Blog Image */}
            <img
                src={blog.blogImage || `https://picsum.photos/900/400?random=${id}`}
                alt="Blog Cover"
                className="w-full h-72 object-cover rounded-2xl shadow-md mb-8"
            />

            {/* Title */}
            <h1 className="text-4xl font-bold mb-3 leading-tight">
                {blog.title}
            </h1>

            {/* Meta */}
            <div className="flex items-center justify-between text-gray-500 text-sm mb-6">
                <div className="flex items-center gap-3">
                    <img src={blog?.author?.avatar || 'https://i.pravatar.cc/150?img=6'} alt="" className=" h-9 w-9 sm:h-12 sm:w-12  rounded-full " />
                    {new Date(blog.createdAt).toLocaleDateString()} • By{" "}
                    <span className="font-medium text-gray-700">
                        {blog.author?.fullName || "Unknown"}
                    </span>
                </div>

            </div>

            {/* Content */}
            <p className="text-gray-700 leading-relaxed text-lg mb-8 whitespace-pre-line">
                {blog.content}
            </p>

            {/* Like Button */}
            <div className="mb-10">
                <button
                    onClick={handleLike}
                    className={`px-6 py-2 rounded-full font-medium transition ${blog?.likes?.includes(userDetails?._id)
                        ? "bg-red-500 text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                        }`}
                >
                    {blog?.likes?.includes(userDetails?._id)
                        ? "❤️ Liked"
                        : "🤍 Like"}
                </button>
                <span>{blog.likes?.length || 0} Likes</span>
            </div>

            {/*  COMMENT BOX */}

            <div className="bg-white border rounded-2xl shadow-sm p-6 mb-12">
                <h3 className="text-xl font-semibold mb-4">Leave a Comment</h3>

                <div className="flex gap-4">
                    <img
                        src={userDetails?.avatar || "https://i.pravatar.cc/150?img=5"}
                        alt="User"
                        className="w-11 h-11 rounded-full object-cover"
                    />

                    <div className="flex-1">
                        <textarea
                            placeholder="Write your thoughts..."
                            value={commentText}
                            onChange={(e) => setCommentText(e.target.value)}
                            rows="3"
                            className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        />

                        <div className="flex justify-end mt-3">
                            <button
                                onClick={postCommentOnTheBlog}
                                className="px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                                Post Comment
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/*  COMMENTS LIST */}

            <div>
                <h2 className="text-2xl font-bold mb-6 border-b pb-2">
                    Comments ({blog?.comments?.length || 0})
                </h2>

                {blog?.comments?.length > 0 ? (
                    <div className="space-y-6">
                        {blog.comments.map((comment, index) => (
                            <div
                                key={index}
                                className="flex gap-4 bg-gray-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition"
                            >
                                <img
                                    src={comment.user?.avatar || "https://i.pravatar.cc/150?img=3"}
                                    alt="User Avatar"
                                    className="w-12 h-12 rounded-full object-cover"
                                />

                                <div className="flex-1">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="font-semibold text-gray-800">
                                            {comment.user?.fullName}
                                        </span>

                                        <span className="text-xs text-gray-400">
                                            {new Date(comment.createdAt).toLocaleString()}
                                        </span>
                                    </div>

                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {comment.commentText}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center text-gray-500 py-10">
                        No comments yet. Be the first to comment!
                    </div>
                )}
            </div>
        </div>
    );
}
