import React from "react";
import { FaFileContract, FaGavel, FaCheckCircle } from "react-icons/fa";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-10">

        {/* Header */}
        <div className="text-center mb-10">
          <FaFileContract className="mx-auto text-blue-600" size={50} />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4">
            Terms & Conditions
          </h1>
          <p className="text-gray-500 mt-2">
            Please read these terms carefully before using our services.
          </p>
        </div>

        {/* Section 1 */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-3">
            <FaGavel className="text-blue-600" />
            Acceptance of Terms
          </h2>
          <p className="text-gray-600 mt-3 leading-7">
            By accessing or using our website/app, you agree to comply with and
            be bound by these Terms & Conditions. If you do not agree, please do
            not use our services.
          </p>
        </div>

        {/* Section 2 */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800">
            User Responsibilities
          </h2>
          <p className="text-gray-600 mt-3 leading-7">
            As a user of this platform, you agree to:
          </p>

          <ul className="list-disc ml-8 mt-3 text-gray-600 leading-7">
            <li>Provide accurate and truthful information</li>
            <li>Respect copyright and intellectual property laws</li>
            <li>Not engage in harmful, illegal, or abusive activities</li>
            <li>Maintain confidentiality of your account information</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800">
            Content Ownership
          </h2>
          <p className="text-gray-600 mt-3 leading-7">
            All content, logos, graphics, and design elements belong to us unless
            otherwise stated. You may not copy, modify, or distribute our content
            without permission.
          </p>
        </div>

        {/* Section 4 */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800">
            User-Generated Content
          </h2>
          <p className="text-gray-600 mt-3 leading-7">
            You are solely responsible for the content you upload to the
            platform. By uploading content, you grant us permission to display
            and use it within the platform.
          </p>
        </div>

        {/* Section 5 */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800">
            Prohibited Activities
          </h2>
          <p className="text-gray-600 mt-3 leading-7">
            Users are strictly prohibited from:
          </p>

          <ul className="list-disc ml-8 mt-3 text-gray-600 leading-7">
            <li>Posting illegal, harmful, or offensive content</li>
            <li>Hacking, spamming, or trying to bypass security measures</li>
            <li>Impersonating other individuals or organizations</li>
            <li>Using our services for fraudulent activities</li>
          </ul>
        </div>

        {/* Section 6 */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800">
            Termination of Access
          </h2>
          <p className="text-gray-600 mt-3 leading-7">
            We reserve the right to suspend or terminate your account if we find
            suspicious or harmful activity that violates our policies.
          </p>
        </div>

        {/* Section 7 */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800">
            Limitation of Liability
          </h2>
          <p className="text-gray-600 mt-3 leading-7">
            We are not liable for any direct, indirect, or consequential damages
            that may occur through the use of our platform.
          </p>
        </div>

        {/* Section 8 */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800">
            Changes to Terms
          </h2>
          <p className="text-gray-600 mt-3 leading-7">
            We may update these Terms & Conditions as needed. Users will be
            notified if major changes occur.
          </p>
        </div>

        {/* Section 9 */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-3">
            <FaCheckCircle className="text-blue-600" />
            Contact Us
          </h2>
          <p className="text-gray-600 mt-3 leading-7">
            For any questions regarding these Terms & Conditions, please reach
            out to us:
          </p>

          <p className="text-gray-700 font-medium mt-2">
            📧 Email: support@example.com
          </p>
        </div>

      </div>
    </div>
  );
}
