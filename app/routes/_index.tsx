import type { Route } from "./+types/_index";
import "./_index/style.css";

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

export default function Index() {
  return (
    <>
      <Banner></Banner>
      <SolutionSection />
      <WhyUs />
      <OurFeatures />
      <OurLocation />
    </>
  );
}
