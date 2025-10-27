import propellerVid from "../../../assets/videos/propeller.mp4";
import arrowIcon from "../../../assets/images/SVGs/right-arrow.svg";
import FadeUp from "../ui/FadeUp.client";
import { Link } from "react-router";

type data = {
  videoSource: string;
  titleText: string;
  description: string;
  listText: string[];
  learnMoreText: string;
  LearnMoreIcon: string;
  LearnMoreHref: string;
};

const WhyUs = () => {
  const delayTimer = 0.3;
  const data: data = {
    videoSource: propellerVid,
    titleText: "Why Choose Us?",
    description:
      "We provide premium aircraft parts, private jet solutions, and end-to-end freight services to keep your operations flying smoothly.",
    listText: [
      "Decades of aviation expertise",
      "Certified & trusted suppliers",
      "Global reach with personalized service",
      "B2B, B2C, and freight solutions under one roof",
    ],
    learnMoreText: "Learn More",
    LearnMoreIcon: arrowIcon,
    LearnMoreHref: "/about",
  };
  return (
    <section className="vidSection w-screen py-41 relative overflow-clip">
      <div
        className="vidWrapper absolute inset-0 after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-r after:from-[#1a2e45] after:from-30% after:via-[#1a2e45]/50 after:via-70% after:to-transparent
"
      >
        <video
          src={data.videoSource}
          className="absolute ml-auto object-cover h-full w-full top-0 right-0"
          loop
          muted
          autoPlay
        ></video>
      </div>
      <div className="container mx-auto bg-transparent z-1 relative text-white text-xl">
        {/* <img src={section2Img} alt="" /> */}
        <FadeUp>
          <h1
            className="text-4xl font-black underlineDecor"
            style={{ "--height": "6px", "--backgroundColor": "white" }}
          >
            {data.titleText}
          </h1>
        </FadeUp>
        <div className="grid lg:grid-cols-[auto_auto_1fr] gap-x-12">
          <FadeUp delay={delayTimer}>
            <p className="max-w-[45ch] mt-16 lg:my-18">{data.description}</p>
          </FadeUp>
          <FadeUp delay={delayTimer * 2}>
            <ul className=" list-disc ml-4 my-12 lg:mt-11 lg:mb-18">
              {data.listText.map((text, index) => (
                <li key={index}>{text}</li>
              ))}
            </ul>
          </FadeUp>
        </div>
        <FadeUp delay={delayTimer * 3}>
          <Link
            className="flex gap-6 flex-wrap w-full"
            to="/about"
            prefetch="intent"
          >
            <span>{data.learnMoreText}</span>{" "}
            <img
              src={data.LearnMoreIcon}
              height={32}
              width={32}
              className=" brightness-0 invert-100 aspect-video my-auto"
            ></img>{" "}
          </Link>
        </FadeUp>
      </div>
    </section>
  );
};

export default WhyUs;
