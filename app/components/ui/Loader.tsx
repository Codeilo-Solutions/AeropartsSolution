import React from "react";

const Loader = () => {
  return (
    <div className="loaderContainer fixed inset-0 z-[500] bg-black grid place-content-center">
      <div className="loader z-20"></div>
    </div>
  );
};

export default Loader;
