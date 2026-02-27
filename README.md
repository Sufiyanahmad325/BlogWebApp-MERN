# 🚀 MERN Stack Blog Application

A fully-featured Blog Platform built using the MERN Stack (MongoDB, Express.js, React.js, Node.js).  
This application allows users to securely register, authenticate, create blogs, upload images, interact with posts, and manage their accounts with production-level backend structure.

The system follows real-world full-stack architecture including secure authentication, cloud media storage, structured MVC backend, and responsive frontend UI.

---

# 🌍 Project Overview

This Blog Application provides a complete user lifecycle:

- User Registration & Authentication
- Blog Creation & Management
- Image Upload with Cloudinary
- Like, Comment & Bookmark System
- Profile Management
- Password Change & Account Deletion
- Category Filtering & Search
- Responsive UI

This project demonstrates real-world MERN stack development practices.

---

# 🔥 Complete Feature List

## 🔐 Authentication & Security
- JWT-based authentication
- HTTP-Only secure cookies
- Password hashing using bcrypt
- Protected routes via custom middleware
- Secure logout
- Account deletion with password confirmation
- Ownership validation before blog edit/delete

## 👤 User Features
- User registration
- Login & logout
- Profile update (name, username, bio)
- Avatar upload
- Change password
- Delete account
- Bookmark blogs
- View own blogs dashboard

## 📝 Blog Features
- Create blog post
- Edit blog post
- Delete blog post
- Upload blog image
- Like / Unlike system
- Comment system
- View blog details
- Category-based filtering
- Frontend search functionality
- Display author information
- Timestamp tracking

## ☁️ Cloud & Media Handling
- Image upload using Multer
- Cloudinary integration
- Automatic local file cleanup
- Automatic Cloudinary image deletion when blog is removed

## 🗄️ Database & Backend Architecture
- MVC structure
- Mongoose schema relationships
- Custom error handling class
- Standard API response structure
- Async error wrapper
- JWT verification middleware
- Secure CORS configuration

## 🎨 Frontend Features
- React with Context API
- Axios API integration
- React Router navigation
- Global loading overlay
- Responsive UI (Tailwind CSS)
- Profile dashboard
- Settings panel
- Privacy Policy page
- Terms & Conditions page

---

# 🏗️ Tech Stack

## Frontend
- React.js
- React Router
- Context API
- Axios
- Tailwind CSS
- React Cookie

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Bcrypt
- Multer
- Cloudinary
- Cookie Parser
- CORS

---

# 🔐 Authentication Flow

1. User registers → Password hashed with bcrypt  
2. User logs in → JWT token generated  
3. Token stored in HTTP-Only cookie  
4. Protected routes verified using middleware  
5. Logout clears authentication cookie  
6. Account deletion requires password verification  

---

# 🗄️ Database Models

## User Model
- fullName
- username (unique)
- email (unique)
- password (hashed)
- avatar
- bio
- liked posts
- bookmarked posts
- timestamps

## Post Model
- title
- content
- category
- tags
- blogImage (Cloudinary URL)
- blogImagePublicId
- author reference
- likes (User references)
- comments (User reference + text + timestamp)
- timestamps

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/your-repository-name.git
```

---

## 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create `.env` file inside backend:

```
PORT=8000
MONGODB_URL=your_mongodb_connection_string
ACCESS_TOKEN_SECRET=your_secret_key
ACCESS_TOKEN_EXPIRY=7d
CORS_ORIGIN=http://localhost:5173
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Run backend:

```bash
npm run dev
```

---

## 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

# 📁 Project Structure

```
/backend
  /models
  /controllers
  /middleware
  /routes
  /utils
  server.js

/frontend
  /components
  App.jsx
  main.jsx
```

---

# 🔒 Security Practices Implemented

- Encrypted passwords
- JWT authentication
- HTTP-only cookies
- Protected API routes
- Ownership validation
- Secure CORS configuration
- Token expiration handling

---

# 🚀 Future Improvements

- Backend pagination
- Backend search API
- Refresh token system
- Rate limiting
- Joi/Zod validation
- Admin role
- Swagger documentation
- Unit testing
- Production deployment

---

# 📈 Project Evaluation

This project demonstrates:

- Strong full-stack architecture understanding
- Secure authentication implementation
- Real-world CRUD operations
- Cloud storage integration
- Proper database relationship management
- Clean state management in React
- Responsive UI development

This is a solid junior-level full-stack portfolio project and resume-ready.

---

# 👨‍💻 Author

**Sufiyan Ahmad**  
MERN Stack Developer  

📧 Email: sufiyanahmad325@gmail.com  
🌐 LinkedIn: https://linkedin.com/in/sufiyanahmad325  
🐙 GitHub: https://github.com/Sufiyanahmad325

---

# 📄 License

This project is licensed for educational and portfolio purposes.