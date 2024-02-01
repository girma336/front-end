import React from "react";
import { ibmPlexSans, poppins } from "@/atoms/fonts";
import ImageWrapper from "./ImageWrapper";
import MainLogo from "../../public/logos/jubbix-main-logo.png";

function LoadingSkeleton() {
  return (
    <div className="flex h-[85vh] w-[95vw] flex-col items-center justify-center rounded-[7px] bg-custom-blue-dark md:w-[80vw] md:rounded-[20px]">
      <ImageWrapper
        src={MainLogo}
        alt="Juubix sphere main logo"
        imageSizes="h-[175px] w-[175px] lg:h-[225px] lg:w-[225px] my-4"
      />
      <h2
        className={`${ibmPlexSans.className} my-4 text-2xl text-white md:text-4xl xl:text-5xl`}
      >
        JUUBIX
      </h2>
      <h5
        className={`${poppins.className} text-center text-xl font-bold text-white md:text-2xl xl:text-3xl`}
      >
        Please Wait a Moment...
      </h5>
    </div>
  );
}

export default LoadingSkeleton;
