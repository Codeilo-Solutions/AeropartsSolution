import footerLogoImg from "../../assets/images/FooterLogo.png";
import footerPlaneImg from "../../assets/images/sections/plane-transparent.png";
import { useEffect } from "react";
import Socials from "./Socials";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

type propType = {
  footerRef: React.RefObject<HTMLElement | null>;
  planeHolderRef: React.RefObject<HTMLDivElement | null>;
  mainContainerRef: React.RefObject<HTMLDivElement | null>;
};

// gsap.registerPlugin(ScrollTrigger);

const Footer = ({ footerRef, planeHolderRef, mainContainerRef }: propType) => {
  const footerLocations = [
    "France: +33 (XXX) XXX XXXX",
    "KSA: +966 (XXX) XXX XXXX",
    "UAE: +971 6 526 3464",
    "Tunis: +71 (XXX) XXX XXXX",
  ];

  const footerLinks = [
    { link: "Home", url: "/" },
    { link: "About Us", url: "/about" },
    { link: "Careers", url: "/careers" },
    { link: "Contact Us", url: "/contact" },
    { link: "Solutions", url: "/solutions" },
    { link: "Terms of Service", url: "/terms-of-service" },
    { link: "Privacy Policy", url: "/privacy-policy" },
    { link: "Cookie Policy", url: "/cookie-policy" },
  ];

  useEffect(() => {
    const checkFooterHeight = () => {
      const footerEl = footerRef.current;
      if (footerEl) {
        const screenHeight = window.innerHeight;
        const footerHeight = footerEl.offsetHeight;
        if (footerHeight > screenHeight) {
          footerEl.classList.remove("lg:sticky", "lg:bottom-0");
        } else {
          footerEl.classList.add("lg:sticky", "lg:bottom-0");
        }
      }
    };

    checkFooterHeight();
    window.addEventListener("resize", checkFooterHeight);
    return () => {
      window.removeEventListener("resize", checkFooterHeight);
    };
  }, [footerRef]);

  useGSAP(
    () => {
      if (
        !planeHolderRef.current ||
        !mainContainerRef.current ||
        !footerRef.current
      )
        return;

      console.log("GSAP Footer Animation Init");

      const footerHeight = footerRef.current?.getBoundingClientRect().height;
      const mainContainerHeight =
        mainContainerRef.current?.getBoundingClientRect().height;
      const footerTriggerThreshold = Math.max(footerHeight, window.innerHeight);
      // Set initial states
      gsap.set(planeHolderRef.current, {
        scale: 0.1,
      });

      // Create the animation timeline
      const footerTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: mainContainerRef.current,
          start: () => `${mainContainerHeight - footerTriggerThreshold}px`, // When bottom of content hits bottom of viewport
          end: () => `${mainContainerHeight - footerTriggerThreshold}px`, // When bottom of content hits top of viewport
          scrub: 1, // Smooth scroll-linked animation
          markers: false,
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
      return () => {
        footerTimeline.scrollTrigger?.kill();
        footerTimeline.kill();
      };
    },
    {
      dependencies: [planeHolderRef.current, mainContainerRef.current],
    }
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      ScrollTrigger.refresh();
    }
  }, []);

  return (
    <footer
      className="imgSection bg-[#0a0a0a] w-screen pt-21 pb-4 lg:sticky lg:bottom-0"
      ref={footerRef}
    >
      <div className="container mx-auto bg-transparent flex flex-col place-content-center">
        <div className="footerTopSection text-white text-center">
          <h1 className="text-5xl lg:text-7xl font-black">Stay in the Loop</h1>
          <p className="text-lg font-light">
            Join our newsletter to keep up with Aeroparts’ latest news and
            insights.
          </p>
          <div className="inputHolder mt-6 flex gap-4 justify-center">
            <input
              type="text"
              placeholder="Email Address here"
              className="text-black bg-white px-4 py-2 rounded-full lg:w-64"
            />
            <button className="uppercase bg-[#1a2e45ce] px-4 py-2 rounded-full lg:w-32 cursor-pointer hover:bg-[#1a2e45]">
              Subscribe
            </button>
          </div>
        </div>

        <div className="planeHolder" ref={planeHolderRef}>
          <img src={footerPlaneImg} alt="" />
        </div>
        <img src={footerLogoImg} alt="" className="mx-auto max-h-[7rem]" />
        {/* <img src={footerBottomImg} alt="" /> */}
      </div>

      <hr className="text-white/10 text-lg my-6" />

      <div className="footerBottomSection text-white mt-10 container mx-auto">
        <div className="footerLinks sm:flex md:gap-x-12 gap-y-4 flex-wrap">
          <div className="footerLinkSection">
            <h2 className="text-lg text-secondary">AOG Desk:</h2>
            <ul className=" lg:grid lg:grid-cols-2 gap-x-4 gap-y-1 text-xs">
              {footerLocations.map((location) => (
                <li key={location}>{location}</li>
              ))}
            </ul>
          </div>
          <div className="footerLinkSection">
            <h2 className="text-lg text-secondary">Quick Links</h2>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
              {footerLinks.map((link) => (
                <li key={link.link}>
                  <a href={link.url}> - {link.link}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footerLinkSection">
            <h2 className="text-lg text-secondary">Follow Us</h2>
            <Socials />
          </div>
        </div>

        <div className="copyrights flex justify-between text-xs font-light">
          <p>
            &copy; {new Date().getFullYear()} Aeroparts. All rights reserved.
          </p>
          <p>
            Design with <span className=" text-red-600"> &#x2764; </span> by
            Fifth Design
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
