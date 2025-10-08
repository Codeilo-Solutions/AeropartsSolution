import { useRef } from "react";
import footerTopImg from "../../assets/images/sections/footerTop.png";
import footerBottomImg from "../../assets/images/sections/footerBottom.png";
import footerPlaneImg from "../../assets/images/sections/plane-transparent.png";

const Footer = () => {
  const footerTopImgRef = useRef<HTMLImageElement>(null);
  const footerBottomImgRef = useRef<HTMLImageElement>(null);
  return (
    <footer></footer>
    // <section
    //     className="imgSection bg-[#0a0a0a] w-screen pt-21 pb-4 -z-1 sticky bottom-0"
    //     ref={footerRef}
    //   >
    //     <div className="container mx-auto bg-transparent flex flex-col place-content-center">
    //       <img
    //         src={footerTopImg}
    //         alt=""
    //         className="max-w-[590px] mx-auto"
    //         ref={footerTopImgRef}
    //       />
    //       <div className="planeHolder" ref={planeHolderRef}>
    //         <img src={footerPlaneImg} alt="" />
    //       </div>
    //     </div>
    //     <img src={footerBottomImg} alt="" ref={footerBottomImgRef} />
    //   </section>
  );
};

export default Footer;
