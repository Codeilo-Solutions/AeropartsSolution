import type { Route } from "./+types/RFQ";
import Banner from "~/components/Banner";
import BannerImg from "~/../assets/images/rfq-bg.jpg";
import RFQForm from "~/components/rfq/RFQForm";
import { FadeRight, FadeUp } from "~/components/ui/FadeUtil.client";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Request for Quote" },
    { name: "description", content: "Request a quote or contact us." },
  ];
}

const RFQ = () => {
  return (
    <>
      <Banner
        bgImgUrl={BannerImg}
        title="Request a Quote"
        desc="Fast, Reliable Quotes for Certified Aircraft Parts"
      />

      <section className="min-h-screen bg-white">
        <div className="container mx-auto grid lg:grid-cols-2 py-20 gap-y-10">
          <FadeRight>
            <div className="formDetails bg-grey text-[#494949] lg:w-[85%] max-h-max p-20 pr-24 pl-0 rounded-r-[30px] relative after:content-[''] after:absolute after:w-full after:h-full after:top-0 after:left-1 after:-z-1 after:bg-grey after:-translate-x-full">
              <h1 className="text-primary font-black text-5xl">
                Contact Our Team
              </h1>
              <p className="grid gap-6 mt-12">
                <span>
                  No stress, just support 24/7/365. How can we help you today?
                </span>
                <span className="font-bold">Aeroparts Solutions</span>
                <span className="max-w-[35ch]">
                  Third Floor, 6 East A, Dubai Airport Freezone Dubai, United
                  Arab Emirates
                </span>
                <span>
                  +971 50 219 3737 <br />
                  +971 50 536 3659
                </span>
                <span>contact@aeropartssolution.com</span>
              </p>
            </div>
          </FadeRight>

          <div className="w-full">
            <FadeUp delay={0.3}>
              <div className="mr-auto">
                <RFQForm formClass="mx-auto"></RFQForm>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
};

export default RFQ;
