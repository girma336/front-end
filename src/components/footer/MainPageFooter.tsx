import React from "react";
import { poppins } from "@/atoms/fonts";

function MainPageFooter() {
  return (
    <p
      className={`absolute bottom-4 w-full text-center text-xs font-medium text-custom-white md:text-lg ${poppins.className}`}
    >
      All rights reserved JUUBIX @2023
    </p>
  );
}

export default MainPageFooter;
