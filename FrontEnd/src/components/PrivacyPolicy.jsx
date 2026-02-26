import React from "react";
import { FaShieldAlt, FaUserSecret, FaUserLock } from "react-icons/fa";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-10">

        {/* Header Section */}
        <div className="text-center mb-10">
          <FaShieldAlt className="mx-auto text-blue-600" size={50} />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4">
            Privacy Policy
          </h1>
          <p className="text-gray-500 mt-2">
            Our commitment to keeping your data safe and secure.
          </p>
        </div>

        {/* Section 1 */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-3">
            <FaUserSecret className="text-blue-600" />  
            Introduction
          </h2>
          <p className="text-gray-600 mt-3 leading-7">
            Welcome to our Privacy Policy page. Your privacy is very important to us.
            This policy explains how we collect, use, and protect your personal
            information when you use our website or application.
          </p>
        </div>

        {/* Section 2 */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-3">
            <FaUserLock className="text-blue-600" />
            Information We Collect
          </h2>
          <p className="text-gray-600 mt-3 leading-7">
            We may collect the following types of information from our users:
          </p>

          <ul className="list-disc ml-8 text-gray-600 leading-7 mt-3">
            <li>Name, Email address, Phone number</li>
            <li>Account login information</li>
            <li>Device info – IP address, browser type, location</li>
            <li>Usage data – pages visited, time spent</li>
            <li>Uploaded content (profile picture, blog images, posts)</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800">
            How We Use Your Information
          </h2>
          <p className="text-gray-600 mt-3 leading-7">
            Your information is used to improve your experience and ensure platform
            security. We use your data for:
          </p>

          <ul className="list-disc ml-8 text-gray-600 leading-7 mt-3">
            <li>Creating and managing your account</li>
            <li>Sending notifications & updates</li>
            <li>Improving our platform and features</li>
            <li>Personalizing content for better recommendations</li>
            <li>Ensuring user safety and security</li>
          </ul>
        </div>

        {/* Section 4 */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800">
            Sharing of Personal Information
          </h2>
          <p className="text-gray-600 mt-3 leading-7">
            We do <b>NOT</b> sell or share your personal data with any unauthorized third parties.
            We may share limited information with:
          </p>

          <ul className="list-disc ml-8 text-gray-600 leading-7 mt-3">
            <li>Service providers (cloud hosting, security)</li>
            <li>Law enforcement (only when legally required)</li>
            <li>Analytics tools to improve app performance</li>
          </ul>
        </div>

        {/* Section 5 */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800">
            Security of Your Information
          </h2>
          <p className="text-gray-600 mt-3 leading-7">
            We use strong security measures to protect your data including:
          </p>

          <ul className="list-disc ml-8 text-gray-600 leading-7 mt-3">
            <li>Encrypted passwords</li>
            <li>Secure database storage</li>
            <li>Regular security audits</li>
            <li>Token-based authentication</li>
          </ul>
        </div>

        {/* Section 6 */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800">
            Your Rights
          </h2>
          <p className="text-gray-600 mt-3 leading-7">
            As a user, you have full control over your personal data. You can:
          </p>

          <ul className="list-disc ml-8 text-gray-600 leading-7 mt-3">
            <li>Update your profile information anytime</li>
            <li>Request deletion of your account</li>
            <li>Change your password</li>
            <li>Opt-out of notifications</li>
          </ul>
        </div>

        {/* Section 7 */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            Contact Us
          </h2>
          <p className="text-gray-600 mt-3 leading-7">
            If you have any questions about this Privacy Policy, feel free to contact us:
          </p>

          <p className="text-gray-700 font-medium mt-2">
            📧 Email: support@example.com
          </p>
        </div>

      </div>
    </div>
  );
}
