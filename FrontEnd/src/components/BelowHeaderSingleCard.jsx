import React from "react";
import { Link } from "react-router-dom";

const BelowHeaderSingleCard = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 mt-10">
      <div className="relative rounded-2xl overflow-hidden shadow-md">
        {/* Background Image */}
        <img
          src="https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg"
          alt="Featured"
          className="w-full h-72 md:h-96 object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-6 md:px-10 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Featured Post
          </h2>
          <p className="text-gray-200 max-w-lg mb-5">
            This is a sample description for the featured post section. You can
            replace it with your latest or highlighted blog post.
          </p>
          <button className="bg-white text-gray-900 font-semibold px-5 py-2 rounded-md hover:bg-gray-100 transition w-fit">
            <Link to={'/readMore'} >
              Read More
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BelowHeaderSingleCard;
