import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import helena from "../assets/helena-removebg-preview.png";

export const HomePage = () => {
  return (
    <div id="home" className="w-full h-screen bg-[#fff1f2]">
      <div className="max-w-[1000 px] mx-auto px-20 flex flex-row justify-center h-full flex-wrap">
        <div className="max-w-[1000 px] mx-auto px-18 flex flex-col justify-center h-full">
          <p className="text-[#8c1c3e]">Hi, my name is</p>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#8c1c3e]">
            Helena Dypvik Skants
          </h1>
          <h2 className="text-3xl sm:text-6xl font-bold text-[#bf5f7c]">
            I´m a developer.
          </h2>
          <p className="text-[#8c1c3e] py-4 max-w-[700px]">
            Thanks for visiting my page, feel free to check out my portifolio
          </p>
          <div>
            <button className="text-[#8c1c3e] px-6 py-3 my-2 flex items-center hover:bg-[#bf5f7c] hover:border-[#bf5f7c] hover:text-white">
              <Link to="projects" smooth={true} duration={500}>
                View work
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-3" />
                </span>
              </Link>
            </button>
          </div>
        </div>
        <img src={helena} alt="Logo" style={{ width: "240px", height: "240px", marginTop: "15%" }} />
      </div>
    </div>
  );
};
