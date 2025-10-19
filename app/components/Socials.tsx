import React, { type ProviderProps } from "react";
import {
  FaFacebookF,
  FaXTwitter,
  FaTiktok,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6";
import { IconContext } from "react-icons";

type socialProps = {
  liClass?: string;
  contextValue?: {
    color?: string;
    size?: string;
    className?: string;
    style?: React.CSSProperties;
    attr?: any;
  };
};

const Socials = ({ liClass, contextValue }: socialProps) => {
  const footerSocials = [
    { icon: <FaFacebookF />, url: "https://facebook.com/" },
    { icon: <FaXTwitter />, url: "https://twitter.com/" },
    { icon: <FaTiktok />, url: "https://tiktok.com/" },
    { icon: <FaLinkedinIn />, url: "https://linkedin.com/" },
    { icon: <FaInstagram />, url: "https://instagram.com/" },
  ];
  return (
    <>
      <ul className="flex flex-wrap gap-x-4 gap-y-1 text-xs">
        <IconContext.Provider
          value={contextValue ?? { color: "black", size: "1em" }}
        >
          {footerSocials.map((social, index) => (
            <li
              key={index}
              className={`p-1 rounded-full bg-white cursor-pointer hover:scale-[1.1] transition-all ${liClass}`}
            >
              <a href={social.url} className="contents" target="_blank">
                {social.icon}
              </a>
            </li>
          ))}
        </IconContext.Provider>
      </ul>
    </>
  );
};

export default Socials;
