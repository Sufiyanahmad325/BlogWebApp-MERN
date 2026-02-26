import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeMain from './components/HomeMain.jsx'
import AllBlog from './components/AllBlog.jsx'
import BlogCategories from './components/BlogCategories.jsx'
import ProfilePage from './components/Profiles.jsx'
import { CookiesProvider } from 'react-cookie'
import BioPage from './components/BioPage.jsx'
import EditBlogForm from './components/EditBlogForm.jsx'
import LoginForm from './components/LoginForm.jsx'
import Signup from './SignUp.jsx'
import Settings from './components/Settings.jsx'
import ChangePassword from './components/ChangePassword.jsx'
import PrivacyPolicy from './components/PrivacyPolicy.jsx'
import TermsAndConditions from './components/TermsAndConditions.jsx'
import DeleteAccount from './components/DeleteAccount.jsx'
import AddBlogByUser from './components/AddBlogByUser.jsx'
import BlogDetails from './Components/BlogDetails.jsx'


createRoot(document.getElementById('root')).render(
  <CookiesProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route index element={<HomeMain />} />
          <Route path='/all-blog' element={<AllBlog />} />
          <Route path='/categories' element={<BlogCategories />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path="/edit-blog-form/:id" element={<EditBlogForm />} />
          <Route path="/blogDetails/:id" element={<BlogDetails />} />
          <Route path='/biopage' element={<BioPage />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/signUp' element={<Signup />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/biopage' element={<BioPage />} />
          <Route path='/change-Password' element={<ChangePassword />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsAndConditions />} />
          <Route path="/delete-account" element={<DeleteAccount />} />
          <Route path="/add-blog" element={<AddBlogByUser />} />


        </Route>
      </Routes>
    </BrowserRouter>
  </CookiesProvider>
)
