import type { Route } from "./+types/_index";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import skyBgImg from "../../assets/images/Rectangle 1.png";
import planeImg from "../../assets/images/Plane.png";
import cloudBgImg from "../../assets/images/Clouds.png";
import cloud1Img from "../../assets/images/cloud1.png";
import cloud2Img from "../../assets/images/cloud2.png";
import cloud3Img from "../../assets/images/cloud3.png";
import cloud4Img from "../../assets/images/cloud4.png";
import cloud5Img from "../../assets/images/cloud5.png";
import company1Img from "../../assets/images/company1.png";
import company2Img from "../../assets/images/company2.png";
import company3Img from "../../assets/images/company3.png";
import company4Img from "../../assets/images/company4.png";
import company5Img from "../../assets/images/company5.png";
import company6Img from "../../assets/images/company6.png";
import company7Img from "../../assets/images/company7.png";
import company8Img from "../../assets/images/company8.png";
import company9Img from "../../assets/images/company9.png";
import company10Img from "../../assets/images/company10.png";
import company11Img from "../../assets/images/company11.png";
import company12Img from "../../assets/images/company12.png";
import company13Img from "../../assets/images/company13.png";
import company14Img from "../../assets/images/company14.png";
import "./_index/style.css";
import { useSafeSplide } from "~/components/SafeSplide";

import section1Img from "../../assets/images/sections/section1.png";
import section2Img from "../../assets/images/sections/section2.png";
import section3Img from "../../assets/images/sections/section3.png";
import section4Img from "../../assets/images/sections/section4.png";
import footerTopImg from "../../assets/images/sections/footerTop.png";
import footerBottomImg from "../../assets/images/sections/footerBottom.png";
import footerPlaneImg from "../../assets/images/sections/plane-transparent.png";
import propellerVid from "../../assets/videos/propeller.mp4";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home" },
    { name: "description", content: "Welcome to Aerospace!" },
  ];
}

gsap.registerPlugin(ScrollTrigger);

export default function Index() {
  const { Splide, SplideSlide, AutoScroll } = useSafeSplide();
  const sectionRef = useRef<HTMLDivElement>(null);
  const planeRef = useRef<HTMLImageElement>(null);
  const bgCloudsRef = useRef<HTMLImageElement>(null);
  const cloudsRef = useRef<HTMLImageElement>(null);
  // Add this ref to your component's top section
  const footerRef = useRef<HTMLDivElement>(null);

  const mainContainerRef = useRef<HTMLDivElement>(null);
  const planeHolderRef = useRef<HTMLDivElement>(null);
  const footerTopImgRef = useRef<HTMLImageElement>(null);
  const footerBottomImgRef = useRef<HTMLImageElement>(null);
  useGSAP(
    () => {
      if (planeRef.current) {
        console.log("GSAP planeRef Init");
        const tlPlane = gsap.timeline();
        tlPlane
          .from(planeRef.current, {
            xPercent: 50,
            scale: 0.3,
            ease: "power1.inOut",
            duration: 2,
          })
          .to(planeRef.current, {
            xPercent: 0,
            scale: 1,
            ease: "power1.inOut",
            duration: 1,
          })
          .to(planeRef.current, {
            yPercent: -5,
            yoyo: true,
            repeat: -1,
            ease: "power1.inOut",
            duration: 3,
          });
      }
    },
    { dependencies: [planeRef] }
  );

  useGSAP(
    () => {
      if (bgCloudsRef.current) {
        console.log("GSAP bgCloud Init");
        gsap.to("img", {
          xPercent: 100,
          repeat: -1,
          ease: "power1.out",
          duration: 500,
        });
      }
    },
    { scope: bgCloudsRef, dependencies: [bgCloudsRef] }
  );

  useGSAP(
    () => {
      // Use gsap.utils.toArray to get all the img elements within the scope
      const images = gsap.utils.toArray<HTMLImageElement>(
        "img.cloud",
        cloudsRef.current
      );

      // Loop through the array and apply a unique duration to each image
      images.forEach((img, index) => {
        gsap.from(img, {
          xPercent: -100,
          ease: "linear",
          duration: 8 * (index + 1),
        }); // initial position
        gsap.to(img, {
          xPercent: 100,
          repeat: -1,
          ease: "linear",
          duration: 8 * (index + 1), // duration = 8 * (order + 1)
        });
      });
    },
    { scope: cloudsRef, dependencies: [cloudsRef] }
  );

  useGSAP(
    () => {
      if (planeHolderRef.current && mainContainerRef.current) {
        console.log("GSAP Footer Animation Init");

        // Set initial states
        gsap.set(planeHolderRef.current, {
          scale: 0.2,
        });

        // Create the animation timeline
        const footerTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: mainContainerRef.current,
            start: "bottom bottom", // When bottom of content hits bottom of viewport
            end: "bottom top", // When bottom of content hits top of viewport
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
          ease: "back.out(1.7)",
        });
      }
    },
    {
      scope: mainContainerRef,
      dependencies: [planeHolderRef, mainContainerRef],
    }
  );

  const companyLogos = Object.values({
    company1Img,
    company2Img,
    company3Img,
    company4Img,
    company5Img,
    company6Img,
    company7Img,
    company8Img,
    company9Img,
    company10Img,
    company11Img,
    company12Img,
    company13Img,
    company14Img,
  });
  const cloudImges = Object.values({
    cloud1Img,
    cloud2Img,
    cloud3Img,
    cloud4Img,
    cloud5Img,
  });

  return (
    <div ref={mainContainerRef}>
      <section className="w-full min-h-dvh -mt-[var(--headerHeight,_100px)] relative max-w-screen overflow-clip flex flex-col bg-[#f1f1f1]">
        <div
          className="absolute top-0 left-0 w-full h-full pointer-events-none bg-cover bg-center brightness-75"
          style={{
            maskImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 1.0) 60%, transparent 100%)",
            backgroundImage: `url(${skyBgImg})`,
          }}
        >
          {/* <img
            loading="lazy"
            src={skyBgImg}
            className="object-cover absolute inset-0 w-full h-full"
            alt=""
          /> */}
          <div className="bgClouds" ref={bgCloudsRef}>
            <img
              loading="lazy"
              src={cloudBgImg}
              className="absolute top-[30%]"
              alt=""
            ></img>
            <img
              loading="lazy"
              src={cloudBgImg}
              className="absolute -left-[100%] top-[30%]"
              alt=""
            ></img>
          </div>
        </div>

        <div className="planeWrapper w-full h-dvh mt-auto flex flex-col">
          <div className="searchContainer w-screen relative text-center my-auto 2xl:mb-0 text-white flex flex-col gap-2 container mx-auto ">
            <h1 className="text-7xl font-bold">
              Trusted parts for global skies.
            </h1>
            <p className="font-medium ">
              Supplying premium aircraft components for private and commercial
              fleets worldwide.
            </p>
            <div className="flex items-center bg-white/20 backdrop-blur-md rounded-full p-1 w-full max-w-xl shadow mx-auto mt-4">
              <input
                type="text"
                placeholder="Enter parts number or name here.."
                className="flex-1 bg-transparent placeholder-gray-300 text-white px-4 py-2 rounded-full focus:outline-none"
              />
              <button className="rounded-full bg-[#52bcd6] max-w-max px-6 py-2 mx-1 text-white font-medium shadow">
                Search Now
              </button>
            </div>
          </div>
          <img
            loading="lazy"
            src={planeImg}
            className="w-[110%] object-scale-down"
            ref={planeRef}
          />
        </div>
        <div
          className="cloudWrapper w-full h-auto min-h-[max(30vh,_10rem)] mt-auto absolute bottom-0 left-0 opacity-60"
          ref={cloudsRef}
        >
          {!Splide || !SplideSlide ? (
            <div>Loading slider…</div>
          ) : (
            <Splide
              aria-label="My Favorite Images"
              options={{
                pagination: false,
                arrows: false,
                type: "loop",
                autoWidth: true,
                gap: "2rem",
                autoScroll: {
                  speed: 0.5,
                  pauseOnHover: true,
                  pauseOnFocus: false,
                },
              }}
              extensions={{ AutoScroll }}
            >
              {companyLogos.map((logo, index) => (
                <SplideSlide key={logo + index} className="logoSlide">
                  <img src={logo} alt={`Company Logo ${index + 1}`} />
                </SplideSlide>
              ))}
            </Splide>
          )}
          {cloudImges.map((img, index) => (
            <img
              className="cloud"
              src={img}
              alt={`Company Logo ${index + 1}`}
              key={index}
            />
          ))}
        </div>
      </section>
      <section className="imgSection bg-[#f1f1f1] w-screen py-41">
        <div className="container mx-auto bg-transparent">
          <img src={section1Img} alt="" />
        </div>
      </section>
      <section className="imgSection w-screen py-41 relative overflow-clip">
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
        <div className="container mx-auto bg-transparent z-1 relative">
          <img src={section2Img} alt="" />
        </div>
      </section>
      <section className="imgSection bg-[#f1f1f1] w-screen py-41">
        <div className="container mx-auto bg-transparent">
          <img src={section3Img} alt="" />
        </div>
      </section>
      <section className="imgSection bg-[#fff] w-screen py-41">
        <div className="container mx-auto bg-transparent">
          <img src={section4Img} alt="" />
        </div>
      </section>
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
