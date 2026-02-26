import React, { useContext, useState } from "react";
import { BlogContext } from "../App";

export default function DeleteAccount() {
  const [password, setPassword] = useState("");
  const [showConfirmBox, setShowConfirmBox] = useState(false);

  const {deleteAccount} = useContext(BlogContext);

  const handleDeleteClick = () => {
    if (!password.trim()) {
      alert("Please enter your password.");
      return;
    }
    setShowConfirmBox(true);
  };

  const finalDelete = () => {
    deleteAccount(password)
    setShowConfirmBox(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 p-4 relative">
      <div className="w-full max-w-md bg-white/70 backdrop-blur-xl shadow-2xl rounded-2xl p-8 border border-white/40">
        <h2 className="text-3xl font-extrabold text-center text-red-600 drop-shadow-sm">
          Delete Account
        </h2>

        <p className="text-center text-gray-700 mt-2 mb-6">
          This will permanently delete your account.{" "}
          <span className="font-semibold">This action cannot be undone.</span>
        </p>

        {/* Input Box */}
        <div className="mb-6">
          <label className="font-semibold text-gray-800 mb-1 block">
            Enter Password
          </label>
          <input
            type="password"
            placeholder="Your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-400 focus:outline-none shadow-sm"
          />
        </div>

        {/* Delete Button */}
        <button
          onClick={handleDeleteClick}
          className="w-full py-3 text-lg font-semibold bg-red-600 text-white rounded-xl shadow-lg hover:bg-red-700 hover:shadow-2xl transition-all duration-300"
        >
          Delete Account
        </button>

        <div className="text-center mt-6">
          <button
            onClick={() => window.history.back()}
            className="text-gray-600 hover:text-gray-800 text-sm underline"
          >
            Cancel
          </button>
        </div>
      </div>

      {/* Confirm Popup */}
      {showConfirmBox && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-sm rounded-xl shadow-xl p-6 text-center">
            <h3 className="text-xl font-bold text-red-600">
              Are you sure?
            </h3>
            <p className="text-gray-700 mt-2">
              This action cannot be undone.  
              Your account will be deleted permanently.
            </p>

            <div className="flex justify-between mt-6 gap-4">
              <button
                onClick={() => setShowConfirmBox(false)}
                className="w-1/2 py-2 bg-gray-300 rounded-lg font-semibold hover:bg-gray-400"
              >
                No
              </button>

              <button
                onClick={finalDelete}
                className="w-1/2 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
