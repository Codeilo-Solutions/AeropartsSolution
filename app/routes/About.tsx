import type { Route } from "./+types/About";
import Banner from "~/components/Banner";
import DOMPurify from "isomorphic-dompurify";
import parse from "html-react-parser";
import BannerImg from "~/../assets/images/aboutus-bg.jpg";

// import company1Img from "~/../assets/images/company1.png";
// import company2Img from "~/../assets/images/company2.png";
// import company3Img from "~/../assets/images/company3.png";
// import company4Img from "~/../assets/images/company4.png";
// import company5Img from "~/../assets/images/company5.png";
// import company6Img from "~/../assets/images/company6.png";
// import company7Img from "~/../assets/images/company7.png";
// import company8Img from "~/../assets/images/company8.png";
// import company9Img from "~/../assets/images/company9.png";
// import company10Img from "~/../assets/images/company10.png";
// import company11Img from "~/../assets/images/company11.png";
// import company12Img from "~/../assets/images/company12.png";
// import company13Img from "~/../assets/images/company13.png";
// import company14Img from "~/../assets/images/company14.png";
import company1Img from "~/../assets/images/company1_new.png";
import company2Img from "~/../assets/images/company2_new.png";

import Slider from "~/components/Slider.client";
import { Suspense } from "react";
import FadeLeft from "~/components/ui/FadeLeft.client";
import FadeRight from "~/components/ui/FadeRight.client";
import FadeUp from "~/components/ui/FadeUp.client";

export function meta({}: Route.MetaArgs) {
  return [{ title: "About" }, { name: "description", content: "About Us" }];
}

export default function About() {
  const companyLogos = Object.values({
    company1Img,
    company2Img,
    // company3Img,
    // company4Img,
    // company5Img,
    // company6Img,
    // company7Img,
    // company8Img,
    // company9Img,
    // company10Img,
    // company11Img,
    // company12Img,
    // company13Img,
    // company14Img,
  });

  const data = {
    banner: {
      title: "Who are we?",
      desc: "Trusted Aviation Partner for Certified Aircraft Components",
    },
    intro: {
      heading: "Reliable and Fast Delivery of Certified Aircraft Parts",
      paragraph: `Aeroparts Solutions is a global aviation parts supplier headquartered in Dubai Airport Freezone (DAFZA), the heart of the Middle East’s aviation hub. We specialize in sourcing, distributing, and delivering certified aircraft components to airlines, MROs, leasing companies, and aviation professionals worldwide. <br /><br />Our commitment goes beyond parts supply — we deliver compliance, transparency, and reliability at every step. With a team of aviation specialists and a network of global partners, we help ensure your fleet stays in the sky with minimal downtime.`,
    },
    mission: {
      title: "Our Mission",
      paragraph:
        "To provide fast, reliable, and fully traceable aircraft components, ensuring maximum safety and operational efficiency for our clients worldwide.",
    },
    vision: {
      title: "Our Vision",
      paragraph:
        "To become the most trusted aviation supply partner in the industry, recognized for our commitment to compliance, customer service, and global reach.",
    },
    whatSetsApart: {
      heading: "What Sets Us Apart",
      list: [
        `
          <strong>Global Reach</strong> – Based in Dubai, with connections to major aviation hubs across Europe, Asia, and North America.
        `,
        `
          <strong>Compliance First</strong> – Every part we supply comes with FAA, EASA, and OEM certifications to ensure airworthiness and traceability.
        `,
        `
          <strong>Customer-Centric Approach</strong> – From urgent AOG support to planned inventory supply, we adapt to your operational needs.
        `,
        `
          <strong>Proven Reliability</strong> – Trusted by airlines, MROs, and aviation companies across multiple regions.
        `,
      ],
    },
  } as const;

  // Use DOMPurify + html-react-parser to safely sanitize and parse HTML-like strings
  // const DOMPurify = createDOMPurify(
  //   typeof window === "undefined" ? (globalThis as any).window : window
  // );
  function safeParseHtml(html: string) {
    const clean = DOMPurify.sanitize(html, {
      ALLOWED_TAGS: ["strong", "span", "br", "em", "b", "i", "u", "a"],
      ALLOWED_ATTR: ["class", "href", "target", "rel"],
    });
    return parse(clean, {
      replace: (domNode: any) => {
        // Optionally, normalize tags or add props here. Returning undefined uses default behavior.
        return undefined;
      },
    });
  }

  return (
    <>
      <Banner
        bgImgUrl={BannerImg}
        title={data.banner.title}
        desc={data.banner.desc}
      />
      <section className="bg-white text-center">
        <div className="container mx-auto py-20 lg:py-40 max-w-[65ch]">
          <FadeUp>
            <h1 className="max-w-[25ch] text-4xl text-primary font-black">
              {data.intro.heading}
            </h1>
          </FadeUp>
          <FadeUp delay={0.3}>
            <p className="mt-8 text-[#363636] text-lg">
              {safeParseHtml(data.intro.paragraph)}
            </p>
          </FadeUp>
        </div>
      </section>
      <section className="bg-primary text-white py-20 lg:py-40">
        <div className="container mx-auto grid lg:grid-cols-2 gap-4 gap-y-15 place-content-center">
          <FadeRight>
            <div className="contentBlock max-w-[50ch] mx-auto">
              <h1
                className="text-4xl font-black underlineDecor"
                style={{ "--height": "4px", "--backgroundColor": "white" }}
              >
                {data.mission.title}
              </h1>
              <p className="mt-16 text-lg">{data.mission.paragraph}</p>
            </div>
          </FadeRight>
          <FadeLeft>
            <div className="contentBlock max-w-[50ch] mx-auto">
              <h1
                className="text-4xl font-black underlineDecor"
                style={{ "--height": "4px", "--backgroundColor": "white" }}
              >
                {data.vision.title}
              </h1>
              <p className="mt-16 text-lg">{data.vision.paragraph}</p>
            </div>
          </FadeLeft>
        </div>
      </section>

      <section className="bg-white text-primary">
        <div className="container mx-auto py-20 lg:py-40 grid lg:grid-cols-3">
          <FadeUp>
            <h1 className=" text-4xl font-black">
              {data.whatSetsApart.heading}
            </h1>
          </FadeUp>
          <div className="listWrapper lg:col-span-[2] w-full flex">
            <FadeUp delay={0.3} className="lg:mx-auto">
              <ul className="list-disc mt-16 lg:mt-0 space-y-4 text-lg max-w-[60ch] lg:mx-auto max-lg:ms-6">
                {data.whatSetsApart.list.map((item, idx) => (
                  <li key={idx}>{safeParseHtml(item)}</li>
                ))}
              </ul>
            </FadeUp>
          </div>
        </div>
      </section>
      <section className="bg-white text-center pb-20">
        <Suspense fallback={null}>
          {/* RE-ADDED Suspense wrapper */}
          <Slider companyLogos={companyLogos}></Slider>
        </Suspense>
      </section>
    </>
  );
}
