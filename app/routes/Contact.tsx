import type { Route } from "./+types/Contact";
import Banner from "~/components/Banner";
import BannerImg from "~/../assets/images/Rectangle 1.png";
import ContactForm from "~/components/contact/ContactForm";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact" },
    { name: "description", content: "Request a quote or contact us." },
  ];
}

const Contact = () => {
  return (
    <>
      <Banner
        bgImgUrl={BannerImg}
        title="Contact us"
        desc="We’re Here to Support You — Anytime, Anywhere"
      />

      <section className="bg-white">
        <div className="container mx-auto grid lg:grid-cols-2 py-20 gap-y-10">
          <div className="formDetails text-[#494949] max-w-max max-h-max  rounded-r-[30px] relative ">
            <p className="grid gap-6 mt-8">
              <span>
                <strong className="font-bold">Head Office</strong>
                <br />
                Aeroparts Solutions <br />
                Dubai Airport Freezone (DAFZA), Dubai, UAE
              </span>
              <span>
                <strong className=""> Phone:</strong>
                +971 50 219 3737 <br />
                +971 50 536 3659
              </span>
              <span>
                <strong className="font-bold">Email</strong> <br />
                info@aeropartssolution.com
              </span>

              <span>
                <strong className="font-bold">Working Hours</strong> <br />
                Monday – Friday: 9:00 AM – 6:00 PM (UAE Time) <br />
                AOG Support: 24/7
              </span>
            </p>
          </div>
          <ContactForm></ContactForm>
        </div>
      </section>
    </>
  );
};
export default Contact;
