import icon1 from "../../../assets/images/001-jet-plane.png";
import icon2 from "../../../assets/images/003-private.png";
import icon3 from "../../../assets/images/005-worldwide.png";
import arrowIcon from "../../../assets/images/right-arrow.png";

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
          {solutionData.map((data) => (
            <div className="solutionCard bg-white flex flex-col gap-4 px-12 py-8 text-primary">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
