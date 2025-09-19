import type { Route } from "./+types/_index";
import gsap from "gsap";
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
import "./_index/style.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home" },
    { name: "description", content: "Welcome to Aerospace!" },
  ];
}

export default function Index() {
  const planeRef = useRef<HTMLImageElement>(null);
  const bgCloudsRef = useRef<HTMLImageElement>(null);
  const cloudsRef = useRef<HTMLImageElement>(null);
  useGSAP(() => {
    if (planeRef.current) {
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
  });

  useGSAP(
    () => {
      if (bgCloudsRef.current) {
        gsap.to("img", {
          xPercent: 100,
          repeat: -1,
          ease: "power1.out",
          duration: 500,
        });
      }
    },
    { scope: bgCloudsRef }
  );

  useGSAP(
    () => {
      // Use gsap.utils.toArray to get all the img elements within the scope
      const images = gsap.utils.toArray<HTMLImageElement>(
        "img",
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
    { scope: cloudsRef }
  );

  return (
    <>
      <section className="w-full min-h-dvh -mt-[var(--headerHeight,_100px)] relative overflow-clip flex">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-cover bg-center brightness-75">
          <img
            loading="lazy"
            src={skyBgImg}
            className="object-cover absolute inset-0 w-full h-full"
            alt=""
          ></img>
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

        <div className="planeWrapper w-[120%] h-auto mt-auto">
          <img
            loading="lazy"
            src={planeImg}
            className="w-[110%] object-scale-down"
            ref={planeRef}
          />
        </div>
        <div
          className="cloudWrapper w-full h-auto min-h-[max(30vh,_10rem)] mt-auto absolute bottom-0 left-0 opacity-80"
          ref={cloudsRef}
        >
          <img loading="lazy" src={cloud1Img} />
          <img loading="lazy" src={cloud2Img} />
          <img loading="lazy" src={cloud3Img} />
          <img loading="lazy" src={cloud4Img} />
          <img loading="lazy" src={cloud5Img} />
        </div>
      </section>
    </>
  );
}
