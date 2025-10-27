import type { Route } from "./+types/Contact";
import Banner from "~/components/Banner";
import BannerImg from "~/../assets/images/contact-bg.jpg";
import ContactForm from "~/components/contact/ContactForm";
import favIcon from "~/../assets/images/aero-icon.svg";
import parse from "html-react-parser";
import DOMPurify from "isomorphic-dompurify";
import FadeLeft from "~/components/ui/FadeLeft.client";
import FadeRight from "~/components/ui/FadeRight.client";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact" },
    { name: "description", content: "Request a quote or contact us." },
  ];
}

const Contact = () => {
  const contactData = {
    headOffice: {
      title: "Head Office",
      address:
        "Aeroparts Solutions, Dubai Airport Freezone (DAFZA), Dubai, UAE",
      phone: ["+971 50 219 3737", "+971 50 536 3659"],
      email: "info@aeropartssolution.com",
      workingHours:
        "Monday – Friday: 9:00 AM – 6:00 PM (UAE Time), AOG Support: 24/7",
    },
    urgentSupport: {
      title: "Need Urgent AOG Support?",
      hotline: `Call our <span className="text-secondary">24/7</span> hotline at <span className="text-secondary"> +971 50 219 3737 </span> for immediate assistance.`,
    },
  };

  return (
    <>
      <Banner
        bgImgUrl={BannerImg}
        title="Contact us"
        desc="We’re Here to Support You — Anytime, Anywhere"
      />

      <section className="bg-white">
        <div className="container mx-auto grid lg:grid-cols-2 py-20 gap-y-10">
          <FadeRight>
            <div className="formDetails text-[#494949] max-w-max max-h-max mx-auto  rounded-r-[30px] relative ">
              <p className="grid gap-6 mt-8">
                <span>
                  <strong className="font-bold">
                    {contactData.headOffice.title}
                  </strong>
                  <br />
                  {contactData.headOffice.address}
                </span>
                <span>
                  <strong className=""> Phone:</strong>
                  {contactData.headOffice.phone.join(" <br /> ")}
                </span>
                <span>
                  <strong className="font-bold">Email</strong> <br />
                  {contactData.headOffice.email}
                </span>
                <span>
                  <strong className="font-bold">Working Hours</strong> <br />
                  {contactData.headOffice.workingHours}
                </span>
              </p>
            </div>
          </FadeRight>
          <FadeLeft>
            <ContactForm></ContactForm>
          </FadeLeft>
        </div>
      </section>
      <section className="pt-20 bg-primary text-white">
        <div className="container mx-auto text-center space-y-4">
          <h1 className="font-bold text-5xl">
            {contactData.urgentSupport.title}
          </h1>
          <p className="text-2xl">
            {/* {parse(DOMPurify.sanitize(contactData.urgentSupport.hotline))} */}
            Call our <span className="text-secondary">24/7</span> hotline at{" "}
            <span className="text-secondary"> +971 50 219 3737 </span> for
            immediate assistance.
          </p>
          <img
            src={favIcon}
            alt=""
            height={200}
            width={200}
            className="h-[150px] w-[240px] object-cover object-top mx-auto"
          />
        </div>
      </section>
    </>
  );
};
export default Contact;
