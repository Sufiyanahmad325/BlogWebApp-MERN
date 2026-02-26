// models/Post.js
import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true
  },
  tags: [String], // optional tags array

  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  authorName: {
    type: String,
    required: true
  },

  // isPublished: {
  //   type: Boolean,
  //   default: true // false भी कर सकते हो drafts के लिए
  // },


  blogImage: {
    type: String,
  },

  blogImagePublicId: {
    type: String,
  },

  category: {
    type: String,
    required: true
  },

  writerAvatar: {
    type: String,
  },


  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  ],

  comments: [
    {
      user:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    commentText: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,  
    },
    }
  ],

}, {
  timestamps: true // createdAt, updatedAt
});



const Post = mongoose.model("Post", postSchema);
export default Post;
