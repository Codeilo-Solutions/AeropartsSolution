import React from "react";
import section3Img from "../../../assets/images/sections/section3.png";
import icon1 from "../../../assets/images/003-door.png";
import icon2 from "../../../assets/images/004-radar.png";
import icon3 from "../../../assets/images/002-airplane-propeller.png";
import icon4 from "../../../assets/images/005-wheel.png";
import icon5 from "../../../assets/images/001-plane-seats.png";
import icon6 from "../../../assets/images/006-gear.png";

const OurFeatures = () => {
  const featuresData = [
    {
      icon: icon1,
      title: "Airframe Components",
      desc: "Structural parts, doors, panels, control surfaces ; all certified and traceable.",
    },
    {
      icon: icon2,
      title: "Avionics & Instruments",
      desc: "Navigation systems, communication equipment, cockpit displays, and electronic modules.",
    },
    {
      icon: icon3,
      title: "Engine Parts & Accessories",
      desc: "Turbine engine components, APUs, nacelles, and associated accessories.",
    },
    {
      icon: icon4,
      title: "Landing Gear Systems",
      desc: "Main and nose landing gear, brakes, wheels, actuators, and hydraulics.",
    },
    {
      icon: icon5,
      title: "Cabin & Interior Equipment",
      desc: "Seats, overhead bins, lighting systems, lavatories, galleys, and safety equipment.",
    },
    {
      icon: icon6,
      title: "Consumables & Rotables",
      desc: "Filters, seals, bearings, and other regularly replaced items with certification.",
    },
  ];
  return (
    <section className="imgSection bg-light w-screen py-41">
      <div className="container mx-auto bg-transparent">
        {/* <img src={section3Img} alt="" /> */}
        <h1
          className="underlineDecor text-4xl font-light text-primary"
          style={{
            "--height": "4px",
            "--backgroundColor": "var(--color-primary)",
            // "--bottom": "-0.25lh",
          }}
        >
          Our Features
        </h1>
        <h2 className="text-4xl font-bold mt-12">
          Reliable and Fast Delivery of Certified Aircraft Parts
        </h2>
        <p>
          Aeroparts Solutions provides a wide range of certified aircraft parts
          and aviation components, with fast and efficient delivery from our
          Dubai hub to anywhere in the world.
        </p>
      </div>
      <div className="container mx-auto details grid lg:grid-cols-3 gap-10 mt-6">
        {featuresData.map((data) => (
          <div className="solutionCard bg-light flex flex-col gap-4 px-12 py-8">
            <img src={data.icon} alt="" height={60} width={60} />
            <h2 className="text-2xl font-normal">{data.title}</h2>
            <p className="text-sm font-normal">{data.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurFeatures;
