import React from "react";
import { Link } from "react-router-dom";
import { FiUser, FiLock, FiShield, FiFileText, FiTrash2, FiLogOut } from "react-icons/fi";
import { useContext } from "react";
import { BlogContext } from "../App";

function Settings() {

    const { handleLonginForm } = useContext(BlogContext);

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center p-4">
            <div className="w-full max-w-lg bg-white shadow-lg rounded-xl p-6 mt-8">

                <h2 className="text-2xl font-semibold mb-6 text-gray-800">Settings</h2>

                <div className="space-y-4">

                    {/* Edit Profile */}
                    <Link
                        to="/biopage"
                        className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition shadow-sm"
                    >
                        <div className="flex items-center gap-3">
                            <FiUser size={22} className="text-blue-600" />
                            <span className="text-gray-700 font-medium">Edit Profile</span>
                        </div>
                    </Link>

                    {/* Change Password */}
                    <Link
                        to="/change-password"
                        className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition shadow-sm"
                    >
                        <div className="flex items-center gap-3">
                            <FiLock size={22} className="text-green-600" />
                            <span className="text-gray-700 font-medium">Change Password</span>
                        </div>
                    </Link>

                    {/* Privacy Policy */}
                    <Link
                        to="/privacy-policy"
                        className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition shadow-sm"
                    >
                        <div className="flex items-center gap-3">
                            <FiShield size={22} className="text-purple-600" />
                            <span className="text-gray-700 font-medium">Privacy Policy</span>
                        </div>
                    </Link>

                    {/* Terms & Conditions */}
                    <Link
                        to="/terms-conditions"
                        className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition shadow-sm"
                    >
                        <div className="flex items-center gap-3">
                            <FiFileText size={22} className="text-orange-600" />
                            <span className="text-gray-700 font-medium">Terms & Conditions</span>
                        </div>
                    </Link>

                    {/* Delete Account */}
                    <Link to={"/delete-account"}
                        className="flex items-center w-full justify-between p-4 bg-gray-50 hover:bg-red-50 rounded-lg transition shadow-sm"
                    >
                        <div className="flex items-center gap-3">
                            <FiTrash2 size={22} className="text-red-600" />
                            <span className="text-red-600 font-medium">Delete Account</span>
                        </div>
                    </Link>

                    {/* Logout */}
                    <button onClick={() => handleLonginForm()}
                        className="flex items-center w-full justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition shadow-sm"
                    >
                        <div className="flex items-center gap-3">
                            <FiLogOut size={22} className="text-gray-700" />
                            <span className="text-gray-700 font-medium">Logout</span>
                        </div>
                    </button>

                </div>
            </div>
        </div>
    );
}
export default Settings;