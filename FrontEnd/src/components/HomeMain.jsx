import React from "react";
import { NavLink } from "react-router-dom";

const HomeMain = () => {
    return (
        <div
            className="h-screen sm:h-[90vh] text-white flex items-center bg-cover bg-center relative"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee')",
            }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/65" />

            <section className="relative w-full px-10 md:px-24">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    {/* LEFT CONTENT */}
                    <div>
                        <div className="w-16 h-[2px] bg-white/70 mb-8" />

                        <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-tight">
                            Stories, Ideas <br />
                            <span className="text-gray-300">& Everyday Inspiration</span>
                        </h1>

                        <p className="text-gray-400 mt-6 text-lg max-w-xl leading-relaxed">
                            Discover blogs on technology, travel, food, lifestyle, fashion,
                            science, art, books, movies and more — all in one place.
                        </p>

                        <NavLink to="/all-blog"
                            className="group mt-12 inline-flex items-center gap-3
                         border border-white/70 px-8 py-3 text-sm tracking-wide rounded-md
                         hover:bg-white hover:text-black transition-all duration-300"
                        >
                            Start Reading
                            <span className="group-hover:translate-x-1 transition-transform">
                                →
                            </span>
                        </NavLink>
                    </div>



                </div>
            </section>
        </div>
    );
};

export default HomeMain;
