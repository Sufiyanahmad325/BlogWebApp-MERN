import React, { useContext, useState } from "react";
import { FiEye, FiEyeOff, FiLock } from "react-icons/fi";
import { BlogContext } from "../App";
import { useNavigate } from "react-router-dom";

export default function ChangePassword() {
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const { changeAccountPassowrd } = useContext(BlogContext);


  // change password logic here
  const changeMyPassword = async () => {

    if (formData.newPassword !== formData.confirmNewPassword) {
      alert("New passwords do not match!");
      return;
    }
    let res = await changeAccountPassowrd(formData.oldPassword, formData.newPassword)
   .then((res)=>{
    if(res.data.success){
      setTimeout(() => {
        alert(res.data.message)
      }, 500);
      navigate(-1)
      // window.history.back()
    }
   })
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Change Password
        </h2>

        {/* Old Password */}
        <div className="mb-4">
          <label className="text-gray-700 font-medium">Old Password</label>
          <div className="mt-2 flex items-center px-3 py-2 bg-gray-50 border rounded-lg focus-within:border-blue-600">
            <FiLock className="text-gray-500" size={20} />
            <input
              onChange={(e) =>
                setFormData({ ...formData, oldPassword: e.target.value })
              }
              value={formData.oldPassword}
              type={showOld ? "text" : "password"}
              placeholder="Enter old password"
              className="w-full bg-transparent outline-none px-2"
            />
            <span
              className="cursor-pointer text-gray-600"
              onClick={() => setShowOld(!showOld)}
            >
              {showOld ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </span>
          </div>
        </div>

        {/* New Password */}
        <div className="mb-4">
          <label className="text-gray-700 font-medium">New Password</label>
          <div className="mt-2 flex items-center px-3 py-2 bg-gray-50 border rounded-lg focus-within:border-blue-600">
            <FiLock className="text-gray-500" size={20} />
            <input
              onChange={(e) =>
                setFormData({ ...formData, newPassword: e.target.value })
              }
              value={formData.newPassword}
              type={showNew ? "text" : "password"}
              placeholder="Enter new password"
              className="w-full bg-transparent outline-none px-2"
            />
            <span
              className="cursor-pointer text-gray-600"
              onClick={() => setShowNew(!showNew)}
            >
              {showNew ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </span>
          </div>
        </div>

        {/* Confirm New Password */}
        <div className="mb-6">
          <label className="text-gray-700 font-medium">Confirm New Password</label>
          <div className="mt-2 flex items-center px-3 py-2 bg-gray-50 border rounded-lg focus-within:border-blue-600">
            <FiLock className="text-gray-500" size={20} />
            <input
              onChange={(e) =>
                setFormData({ ...formData, confirmNewPassword: e.target.value })
              }
              value={formData.confirmNewPassword}
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm new password"
              className="w-full bg-transparent outline-none px-2"
            />
            <span
              className="cursor-pointer text-gray-600"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </span>
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={changeMyPassword}
          className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-lg text-lg font-medium"
        >
          Update Password
        </button>
      </div>
    </div>
  );
}
