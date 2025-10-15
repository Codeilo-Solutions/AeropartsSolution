import mapImg from "../../../assets/images/map.png";
import { FadeLeft, FadeRight } from "../ui/FadeUtil.client";

const OurLocation = () => {
  return (
    <section className="imgSection bg-[#fff] w-screen py-41">
      <div className="container mx-auto bg-transparent grid lg:grid-cols-[2fr_5fr]">
        <FadeRight className="my-auto">
          <div className="txtWrapper my-auto">
            <h1
              className="underlineDecor text-4xl font-light text-primary"
              style={{
                "--height": "4px",
                "--backgroundColor": "var(--color-primary)",
                // "--bottom": "-0.25lh",
              }}
            >
              Our Location
            </h1>
            <h2 className="text-4xl font-bold mt-12 mb-2">
              Our Head Office, Other office around the world
            </h2>
            <p>
              We deliver world-class solutions worldwide, while keeping our
              focus on individual customer needs.
            </p>
          </div>
        </FadeRight>
        <FadeLeft>
          <img src={mapImg} alt="" />
        </FadeLeft>
      </div>
    </section>
  );
};

export default OurLocation;
