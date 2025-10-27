import type { Route } from "./+types/_index";
import "./_index/style.css";
import { lazy, Suspense, useEffect } from "react";
import Loader from "~/components/ui/Loader";
// import Banner from "~/components/index/Banner";
// import SolutionSection from "~/components/index/SolutionSection";
// import WhyUs from "~/components/index/WhyUs";
// import OurFeatures from "~/components/index/OurFeatures";
// import OurLocation from "~/components/index/OurLocation";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home" },
    { name: "description", content: "Welcome to Aerospace!" },
  ];
}

const Banner = lazy(() => import("~/components/index/Banner"));
const SolutionSection = lazy(
  () => import("~/components/index/SolutionSection")
);
const WhyUs = lazy(() => import("~/components/index/WhyUs"));
const OurFeatures = lazy(() => import("~/components/index/OurFeatures"));
const OurLocation = lazy(() => import("~/components/index/OurLocation"));
export default function Index() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Banner></Banner>
        <SolutionSection />
        <WhyUs />
        <OurFeatures />
        <OurLocation />
      </Suspense>
    </>
  );
}
