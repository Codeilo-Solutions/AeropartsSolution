import type { Route } from "./+types/_index";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import "./_index/style.css";

import section4Img from "../../assets/images/sections/section4.png";
import footerTopImg from "../../assets/images/sections/footerTop.png";
import footerBottomImg from "../../assets/images/sections/footerBottom.png";
import footerPlaneImg from "../../assets/images/sections/plane-transparent.png";

import Banner from "~/components/index/Banner";
import SolutionSection from "~/components/index/SolutionSection";
import WhyUs from "~/components/index/WhyUs";
import OurFeatures from "~/components/index/OurFeatures";
import OurLocation from "~/components/index/OurLocation";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home" },
    { name: "description", content: "Welcome to Aerospace!" },
  ];
}

gsap.registerPlugin(ScrollTrigger);

export default function Index() {
  // Add this ref to your component's top section
  const footerRef = useRef<HTMLDivElement>(null);

  const mainContainerRef = useRef<HTMLDivElement>(null);
  const planeHolderRef = useRef<HTMLDivElement>(null);
  const footerTopImgRef = useRef<HTMLImageElement>(null);
  const footerBottomImgRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      if (planeHolderRef.current && mainContainerRef.current) {
        console.log("GSAP Footer Animation Init");

        // Set initial states
        gsap.set(planeHolderRef.current, {
          scale: 0.1,
        });

        // Create the animation timeline
        const footerTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: mainContainerRef.current,
            start: "80%", // When bottom of content hits bottom of viewport
            end: "top", // When bottom of content hits top of viewport
            scrub: 1, // Smooth scroll-linked animation
            onUpdate: (self) => {
              // Optional: log progress for debugging
              console.log("Footer animation progress:", self.progress);
            },
            // markers: true,       // Uncomment for debugging
          },
        });

        // Animate the plane holder scale
        footerTimeline.to(planeHolderRef.current, {
          scale: 1,
          duration: 1,
          ease: "linear",
        });
      }
    },
    {
      scope: mainContainerRef,
      dependencies: [planeHolderRef, mainContainerRef],
    }
  );

  return (
    <div ref={mainContainerRef}>
      <Banner></Banner>
      <SolutionSection />
      <WhyUs />
      <OurFeatures />
      <OurLocation />
      {/* <section
        className="imgSection bg-[#0a0a0a] w-screen pt-21 pb-4 -z-1 sticky bottom-0"
        ref={footerRef}
      >
        <div className="container mx-auto bg-transparent flex flex-col place-content-center">
          <img src={footerTopImg} alt="" className="max-w-[590px] mx-auto" />
          <div className="planeHolder">
            <img src={footerPlaneImg} alt="" />
          </div>
          <img src={footerBottomImg} alt="" />
        </div>
      </section> */}
      <section
        className="imgSection bg-[#0a0a0a] w-screen pt-21 pb-4 -z-1 sticky bottom-0"
        ref={footerRef}
      >
        <div className="container mx-auto bg-transparent flex flex-col place-content-center">
          <img
            src={footerTopImg}
            alt=""
            className="max-w-[590px] mx-auto"
            ref={footerTopImgRef}
          />
          <div className="planeHolder" ref={planeHolderRef}>
            <img src={footerPlaneImg} alt="" />
          </div>
        </div>
        <img src={footerBottomImg} alt="" ref={footerBottomImgRef} />
      </section>
    </div>
  );
}
