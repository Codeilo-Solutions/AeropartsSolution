import icon1 from "~/../assets/images/SVGs/b2b.svg";
import icon2 from "~/../assets/images/SVGs/b2c.svg";
import icon3 from "~/../assets/images/SVGs/freight-solutions.svg";
import arrowIcon from "~/../assets/images/SVGs/right-arrow.svg";
import { FadeUp } from "~/components/ui/FadeUtil.client";

const SolutionSection = () => {
  const solutionData = [
    {
      icon: icon1,
      title: "B2B Solutions",
      desc: "Our B2B division caters to airlines and aviation operators worldwide, delivering certified aircraft parts, rotable components, and technical support.",
      redirectUrl: "#",
    },
    {
      icon: icon2,
      title: "B2C Solutions",
      desc: "For private jet owners, we offer a premium range of parts, upgrades, and personalized support.",
      redirectUrl: "#",
    },
    {
      icon: icon3,
      title: "Freight Solutions",
      desc: "Our in-house freight division provides end-to-end logistics for aviation parts and equipment.",
      redirectUrl: "#",
    },
  ];
  return (
    <section className="imgSection bg-light w-screen py-41">
      <div className="container mx-auto bg-transparent">
        <div className="grid lg:grid-cols-3 gap-10">
          {solutionData.map((data, index) => (
            <FadeUp
              key={data.title}
              delay={index * 0.3}
              className="h-full flex"
            >
              <div className="solutionCard bg-white flex flex-col gap-4 px-12 py-8 text-primary hover:shadow-lg transition-all">
                <img src={data.icon} alt="" height={42} width={42} />
                <h1 className="text-2xl font-normal">{data.title}</h1>
                <p className="text-sm font-normal">{data.desc}</p>
                <a className="contents" href={data.redirectUrl}>
                  <img
                    src={arrowIcon}
                    width={32}
                    height={32}
                    className="mt-auto pt-8"
                  ></img>
                </a>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
