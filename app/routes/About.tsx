import type { Route } from "./+types/About";
import Banner from "~/components/Banner";
import BannerImg from "~/../assets/images/Rectangle 1.png";

import company1Img from "~/../assets/images/company1.png";
import company2Img from "~/../assets/images/company2.png";
import company3Img from "~/../assets/images/company3.png";
import company4Img from "~/../assets/images/company4.png";
import company5Img from "~/../assets/images/company5.png";
import company6Img from "~/../assets/images/company6.png";
import company7Img from "~/../assets/images/company7.png";
import company8Img from "~/../assets/images/company8.png";
import company9Img from "~/../assets/images/company9.png";
import company10Img from "~/../assets/images/company10.png";
import company11Img from "~/../assets/images/company11.png";
import company12Img from "~/../assets/images/company12.png";
import company13Img from "~/../assets/images/company13.png";
import company14Img from "~/../assets/images/company14.png";
import Slider from "~/components/Slider.client";

export function meta({}: Route.MetaArgs) {
  return [{ title: "About" }, { name: "description", content: "About Us" }];
}

export default function About() {
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
  return (
    <>
      <Banner
        bgImgUrl={BannerImg}
        title="Who are we?"
        desc="Trusted Aviation Partner for Certified Aircraft Components"
      />
      <section className="bg-white text-center">
        <div className="container mx-auto py-20 lg:py-40 max-w-[65ch]">
          <h1 className="max-w-[25ch] text-4xl text-primary font-black">
            Reliable and Fast Delivery of Certified Aircraft Parts
          </h1>
          <p className="mt-8 text-[#363636] text-lg">
            Aeroparts Solutions is a global aviation parts supplier
            headquartered in Dubai Airport Freezone (DAFZA), the heart of the
            Middle East’s aviation hub. We specialize in sourcing, distributing,
            and delivering certified aircraft components to airlines, MROs,
            leasing companies, and aviation professionals worldwide. <br />
            <br />
            Our commitment goes beyond parts supply — we deliver compliance,
            transparency, and reliability at every step. With a team of aviation
            specialists and a network of global partners, we help ensure your
            fleet stays in the sky with minimal downtime.
          </p>
        </div>
      </section>
      <section className="bg-primary text-white py-20 lg:py-40">
        <div className="container mx-auto grid lg:grid-cols-2 gap-4 gap-y-15 place-content-center">
          <div className="contentBlock max-w-[50ch] mx-auto">
            <h1
              className="text-4xl font-black underlineDecor"
              style={{ "--height": "4px", "--backgroundColor": "white" }}
            >
              Our Mission
            </h1>
            <p className="mt-16 text-lg">
              To provide fast, reliable, and fully traceable aircraft
              components, ensuring maximum safety and operational efficiency for
              our clients worldwide.
            </p>
          </div>
          <div className="contentBlock max-w-[50ch] mx-auto">
            <h1
              className="text-4xl font-black underlineDecor"
              style={{ "--height": "4px", "--backgroundColor": "white" }}
            >
              Our Vision
            </h1>
            <p className="mt-16 text-lg">
              To become the most trusted aviation supply partner in the
              industry, recognized for our commitment to compliance, customer
              service, and global reach.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white text-primary">
        <div className="container mx-auto py-20 lg:py-40 grid lg:grid-cols-3">
          <h1 className=" text-4xl font-black">What Sets Us Apart</h1>
          <div className="listWrapper lg:col-span-[2] w-full flex">
            <ul className="list-disc mt-16 lg:mt-0 space-y-4 text-lg max-w-[60ch] lg:mx-auto">
              <li>
                <strong>Global Reach</strong> – Based in Dubai, with connections
                to major aviation hubs across Europe, Asia, and North America.
              </li>
              <li>
                <strong>Compliance First</strong> – Every part we supply comes
                with FAA, EASA, and OEM certifications to ensure airworthiness
                and traceability.
              </li>
              <li>
                <strong>Customer-Centric Approach</strong> – From urgent AOG
                support to planned inventory supply, we adapt to your
                operational needs.
              </li>
              <li>
                <strong>Proven Reliability</strong> – Trusted by airlines, MROs,
                and aviation companies across multiple regions.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-white text-center pb-20">
        <Slider companyLogos={companyLogos}></Slider>
      </section>
    </>
  );
}
