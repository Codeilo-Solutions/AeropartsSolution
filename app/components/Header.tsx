import { useRef, useEffect, useState } from "react";
// import { Divide as Hamburger } from "hamburger-react";
import logo from "../../assets/images/SVGs/Logo-aeroparts.svg";
import { Link, useNavigate } from "react-router";
import Menu from "~/components/Menu";

const Header = () => {
  // const [isOpen, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const headerSizeCalculator = () => {
      if (headerRef.current) {
        document.body.style.setProperty(
          "--headerHeight",
          `${headerRef.current.offsetHeight}px`
        );
      }
    };
    headerSizeCalculator();
    window.addEventListener("resize", headerSizeCalculator);
    // Scroll listener
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", headerSizeCalculator);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleQuoteClick = () => {
    navigate("/rfq");
  };

  return (
    <header
      className={` z-100 sticky top-0  ${scrolled ? "bg-[rgb(24,50,70)]" : "bg-transparent"} transition-colors`}
      ref={headerRef}
    >
      {/* <button>
        <Hamburger toggled={isOpen} toggle={setOpen} color="white" />
      </button> */}
      <div className="container mx-auto flex items-center justify-between p-4">
        <Menu></Menu>
        <Link to="/" prefetch="intent">
          <img loading="lazy" src={logo} height={67} width={203} />
        </Link>
        <Link to={"/rfq"} prefetch="intent" className="contents">
          <button
            className="cursor-pointer bg-white hover:bg-secondary hover:text-white rounded-full px-4 py-2 capitalize max-md:hidden transition-colors"
            onClick={handleQuoteClick}
          >
            Request a Quote
          </button>
        </Link>
        <div className="invisible md:hidden"></div>
      </div>
    </header>
  );
};

export default Header;
