import { createContext, useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import {  Outlet, useNavigate } from 'react-router-dom'
import axios from 'axios'
import LodingPage from './components/LodingPage'


export const BlogContext = createContext()
function App() {

  // state is here
  const [openLoingForm, setOpenLoingForm] = useState(false) // default false
  const [signUp, setSignUp] = useState(false)
  const [userDetails, setUserDetails] = useState(null)
  const [allBlogPost, setAllBlogPost] = useState(null)
  const [userAllBlog, setUserAllBlog] = useState()
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  // cookies

  async function handleLonginForm() {

    if (userDetails != null) {
      try {
        const res = await axios.get('http://localhost:8000/api/v1/users/logout', {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
          },
          withCredentials: true
        })

        if (res.data.success) {
          setUserDetails(null)
          setUserAllBlog(null)
          setAllBlogPost(null)
          navigate('/')
          alert(res.data.message)
        }
      } catch (error) {
        alert(error.message)
      }
    } else {
      // setOpenLoingForm((prev) => !prev);
      navigate('/login')
    }
  }



  const uplodeBlog = async (formData) => {
    setIsLoading(true)
    const res = await axios.post("http://localhost:8000/api/v1/users/uploadBlog",
      formData,
      {
        withCredentials: true
      }
    )
    if (res.data.success) {
      setIsLoading(false)

      setAllBlogPost([res.data.data ,...allBlogPost, ])
      setUserAllBlog([ res.data.data , ...userAllBlog])
      setTimeout(() => {
        alert("Blog uploded successfully")
      }, 500);
      return res
    }
    else {
      setIsLoading(false)
      setTimeout(() => {
        alert("Failed to uplode blog")
      }, 500);
    }

  }



  const updateProfileDetails = async (formData) => {
    console.log('form data', formData)
    setIsLoading(true)
    let res = await axios.post("http://localhost:8000/api/v1/users/update-user-profile",
      formData,
      {
        withCredentials: true
      }

    )

    if (res.data.success) {
      setIsLoading(false)
      setUserDetails(res.data.data)
      console.log(res.data.data)
      navigate('/profile')
      setTimeout(() => {
        alert('apdated successfully')
      }, 500);
    }
    else {
      setIsLoading(false)
      setTimeout(() => {
        alert("Failed to update profile")
      }, 500);
    }

  }


  const LikeBlog = async (blogId) => {
    let res = await axios.post(
      "http://localhost:8000/api/v1/users/like-blog",
      { blogId }, 
      {
        withCredentials: true,
      }
    );

    if (res.data.success) {
      // Update the specific blog's likes in allBlogPost state
      setAllBlogPost((prevBlogs) =>
        prevBlogs.map((blog) =>
          blog._id === blogId ? { ...blog, likes: res.data.data.likes } : blog
        )
      );
    
    }
    return res
  };


  const commentOnBlog = async (data) => {
    const { blogId, commentText } = data;
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/users/comment-on-blog",
        { blogId, commentText },
        {withCredentials: true}
      );
      return res 
    } catch (error) {
      console.log(error.message);
    }
  };


  const editYourBlog = async (updatedData) => {
    setIsLoading(true)
    const res = await axios.post('http://localhost:8000/api/v1/users/edit-blog',
      updatedData,
      {
        withCredentials: true
      }
    )
    if (res.data.success) {
      console.log(res)
      let data = allBlogPost?.map(blog => blog._id == res.data.data._id ? { ...blog, ...res.data.data } : blog)
      setAllBlogPost(data)
      navigate(-1)
      setIsLoading(false)

    } else {
      setIsLoading(false)
      setTimeout(() => {
        alert('edit/Update failed')
      }, 500);
    }
  }
  



  const deleteBlog = async (blogId) => {
    setIsLoading(true)
    try {
      let res = await axios.post('http://localhost:8000/api/v1/users/delete-blog',
        { blogId: blogId },
        {
          withCredentials: true
        }
      )

      if (res.data.success) {
        console.log(res.data.data)
        setUserAllBlog(res.data.data)
        setIsLoading(false)
      }

    } catch (error) {
      console.log(error.message)
    }
  }


  const changeAccountPassowrd = async (oldPassword, newPassword) => {
    setIsLoading(true)
    try {
      const res = await axios.post('http://localhost:8000/api/v1/users/change-password', { oldPassword, newPassword },
        {
          withCredentials: true
        }
      )
      if (res.data.success) {
        setIsLoading(false)
        return res
      }
    } catch (error) {
      setIsLoading(false)
      setTimeout(() => {
        alert("Password change failed")
      }, 500);
    }
  }


  const deleteAccount = async (password) => {
    setIsLoading(true)
    try {
      let res = await axios.post('http://localhost:8000/api/v1/users/delete-account', { password },
        {
          withCredentials: true
        }
      )

      if (res.data.success) {
        setIsLoading(false)
        setUserDetails(null)
        setUserAllBlog(null)
        setAllBlogPost(null)
        navigate('/')
        removeCookie("accessToken", { path: "/" })
        alert(res.data.message)
        return res
      }
    } catch (error) {
      setIsLoading(false)
      setTimeout(() => {
        alert(error.message)
        console.log(error.message)
      }, 500);
    }
  }

  // restore user from cookie
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get('http://localhost:8000/api/v1/users/current-user-allUserBlog', {
          withCredentials: true,
        });

        if (res.data.success) {
          console.log('new data is => ', res)
          if (userDetails == null) {
            setUserDetails(res.data.data.user);
          }
          setAllBlogPost(res.data.data.allUserBlog || []);
        }
      } catch (err) {
        console.log("Error fetching user:", err);
        navigate('/login')
      }
    };

    fetchUserData();
  }, [userDetails]); // 👈 sirf ek baar page load hone par chale



  // filter user specific blogs
  useEffect(() => {
    const userBlog = allBlogPost?.filter((blog) => blog.author?._id === userDetails?._id) || [];
    setUserAllBlog(userBlog)
  }, [userDetails, allBlogPost]);




  return (
    <BlogContext.Provider value={{ openLoingForm, setOpenLoingForm, setSignUp, signUp, userDetails, setUserDetails, handleLonginForm, allBlogPost, uplodeBlog, userAllBlog, setUserAllBlog, updateProfileDetails, LikeBlog, editYourBlog, deleteBlog, isLoading, setIsLoading, changeAccountPassowrd, deleteAccount ,commentOnBlog }}>
      <div className="">
        <Header />
        <Outlet />
        {/* <LoginForm />
        <Signup /> */}
        <LodingPage />
      </div>
    </BlogContext.Provider>
  )
}

export default App
