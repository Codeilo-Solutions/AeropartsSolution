import React from "react";
import type { Route } from "./+types/_index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home" },
    { name: "description", content: "Welcome to Aerospace!" },
  ];
}

const RFQ = () => {
  return <div>RFQ</div>;
};

export default RFQ;
