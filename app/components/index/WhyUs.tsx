import React from "react";

// import section2Img from "../../../assets/images/sections/section2.png";
import propellerVid from "../../../assets/videos/propeller.mp4";
import arrowIcon from "../../../assets/images/right-arrow.png";

const WhyUs = () => {
  return (
    <section className="vidSection w-screen py-41 relative overflow-clip">
      <div
        className="vidWrapper absolute inset-0 after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-r after:from-[#1a2e45] after:from-30% after:via-[#1a2e45]/50 after:via-70% after:to-transparent
"
      >
        <video
          src={propellerVid}
          className="absolute ml-auto object-cover h-full w-full top-0 right-0"
          loop
          muted
          autoPlay
        ></video>
      </div>
      <div className="container mx-auto bg-transparent z-1 relative text-white text-xl">
        {/* <img src={section2Img} alt="" /> */}
        <h1
          className="text-4xl font-black underlineDecor"
          style={{ "--height": "6px", "--backgroundColor": "white" }}
        >
          Why Choose Us?
        </h1>
        <div className="grid lg:grid-cols-[auto_auto_1fr] gap-x-12">
          <p className="max-w-[45ch] mt-16 lg:my-18">
            We provide premium aircraft parts, private jet solutions, and
            end-to-end freight services to keep your operations flying smoothly.
          </p>
          <ul className=" list-disc ml-4 my-12 lg:mt-11 lg:mb-18">
            <li>Decades of aviation expertise</li>
            <li>Certified & trusted suppliers</li>
            <li>Global reach with personalized service</li>
            <li>B2B, B2C, and freight solutions under one roof</li>
          </ul>
        </div>
        <a className="flex gap-6 flex-wrap w-full ">
          <span>Learn More</span>{" "}
          <img
            src={arrowIcon}
            height={32}
            width={32}
            className=" brightness-0 invert-100 aspect-video my-auto"
          ></img>{" "}
        </a>
      </div>
    </section>
  );
};

export default WhyUs;
