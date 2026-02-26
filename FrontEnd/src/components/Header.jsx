import { useContext, useState } from "react";
import { BlogContext } from "../App";
import { NavLink } from "react-router-dom";

export default function Header() {
  const { userDetails, handleLonginForm } = useContext(BlogContext);
  const [menuOpen, setMenuOpen] = useState(false);



  return (
    <header className="sm:h-[10vh] bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-16 py-4 flex items-center justify-between">

        <div className="text-2xl font-bold">
          <NavLink to="/">BLOG</NavLink>
        </div>

        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? "text-black font-bold border-b-2 border-black" : "hover:text-black border-b-2 border-transparent hover:border-black"}
          >
            Home
          </NavLink>
          <NavLink
            to="/all-blog"
            className={({ isActive }) => isActive ? "text-black font-bold border-b-2 border-black" : "hover:text-black border-b-2 border-transparent hover:border-black"}
          >
            All Blogs
          </NavLink>
          <NavLink
            to="/categories"
            className={({ isActive }) => isActive ? "text-black font-bold border-b-2 border-black" : "hover:text-black border-b-2 border-transparent hover:border-black"}
          >
            Categories
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) => isActive ? "text-black font-bold border-b-2 border-black" : "hover:text-black border-b-2 border-transparent hover:border-black"}
          >
            Profile
          </NavLink>
        </nav>

        {/* Profile + Login */}
        <div
          className="hidden md:flex items-center space-x-3 cursor-pointer"
          onClick={() => handleLonginForm()}
        >
          <img
            src={userDetails?.avatar || "https://i.pravatar.cc/306"}
            alt="profile"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-gray-700 font-medium">{userDetails != null ? 'Logout' : 'Logged in'}</span>
          <button className="text-gray-600 hover:text-black">🔒</button>
        </div>


        {/*  responsive design start from here */}
        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col justify-center bg-white shadow-md border-t px-6 py-4 space-y-4 text-gray-700 font-medium">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-black font-bold border-b-2 border-black" : "hover:text-black border-b-2 border-transparent hover:border-black"} onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/all-blog" className={({ isActive }) => isActive ? "text-black font-bold border-b-2 border-black" : "hover:text-black border-b-2 border-transparent hover:border-black"} onClick={() => setMenuOpen(false)}>All Blogs</NavLink>
          <NavLink to="/categories" className={({ isActive }) => isActive ? "text-black font-bold border-b-2 border-black" : "hover:text-black border-b-2 border-transparent hover:border-black"} onClick={() => setMenuOpen(false)}>Categories</NavLink>
          <NavLink to="/profile" className={({ isActive }) => isActive ? "text-black font-bold border-b-2 border-black" : "hover:text-black border-b-2 border-transparent hover:border-black"} onClick={() => setMenuOpen(false)}>Profile</NavLink>

          {/* Mobile Profile */}
          <div
            className="flex items-center space-x-3 pt-4 border-t cursor-pointer"
            onClick={() => {
              handleLonginForm();
              setMenuOpen(false);
            }}
          >
            <img
              src="https://i.pravatar.cc/306"
              alt="profile"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="text-gray-700 font-medium">{userDetails != null ? 'Logout' : 'Logged in'}</span>
            <button className="text-gray-600 hover:text-black">🔒</button>
          </div>
        </div>
      )}
    </header>
  );
}
