import React from "react";

type bannerProps = {
  bgImgUrl: string;
  title?: string;
  desc?: string;
};

const Banner = ({ bgImgUrl, title, desc }: bannerProps) => {
  return (
    <section
      className="banner min-h-[90vh] flex -mt-[var(--headerHeight,_100px)] relative"
      style={{ backgroundImage: `url(${bgImgUrl})` }}
    >
      {/* bg-blue-800/20 */}
      <div className="overlay absolute h-full w-full "></div>
      <div className="container mx-auto mt-auto py-24 text-white isolate">
        <h1 className="text-5xl lg:text-7xl font-black mb-2">{title}</h1>
        <p className="text-lg">{desc}</p>
      </div>
    </section>
  );
};

export default Banner;
