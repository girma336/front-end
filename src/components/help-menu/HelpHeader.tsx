import React from "react";
import { roboto } from "@/atoms/fonts";

const HelpHeader = () => (
  <h1
    className={`mb-4 text-center text-2xl font-medium leading-7 tracking-[2.5%] text-section-header lg:mb-8 lg:text-3xl lg:font-medium xl:font-medium ${roboto.className}`}
  >
    How can we help?
  </h1>
);

export default HelpHeader;
