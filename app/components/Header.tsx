import { useState, useRef, useEffect } from "react";
import { Divide as Hamburger } from "hamburger-react";
import logo from "../../assets/images/Logo.png";
import { Link, useNavigate } from "react-router";
import Menu from "~/components/Menu";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
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
    return () => {
      window.removeEventListener("resize", headerSizeCalculator);
    };
  }, []);

  const handleQuoteClick = () => {
    navigate("/rfq");
  };

  return (
    <header
      className="container mx-auto flex items-center justify-between p-4 z-100"
      ref={headerRef}
    >
      {/* <button>
        <Hamburger toggled={isOpen} toggle={setOpen} color="white" />
      </button> */}
      <Menu></Menu>
      <Link to="/" prefetch="intent">
        <img loading="lazy" src={logo} />
      </Link>
      <button
        className="cursor-pointer bg-white rounded-full px-4 py-2 capitalize max-md:hidden"
        onClick={handleQuoteClick}
      >
        Request a Quote
      </button>
      <div className="invisible md:hidden"></div>
    </header>
  );
};

export default Header;
