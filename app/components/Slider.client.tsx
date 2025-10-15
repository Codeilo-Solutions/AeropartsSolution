import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";

const Slider = ({ companyLogos }: { companyLogos: string[] }) => {
  return (
    <Splide
      aria-label="My Favorite Images"
      options={{
        pagination: false,
        arrows: false,
        type: "loop",
        autoWidth: true,
        gap: "2rem",
        autoScroll: {
          speed: 0.5,
          pauseOnHover: true,
          pauseOnFocus: false,
        },
      }}
      extensions={{ AutoScroll }}
    >
      {companyLogos.map((logo, index) => (
        <SplideSlide key={logo + index} className="logoSlide">
          <img src={logo} alt={`Company Logo ${index + 1}`} />
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default Slider;
