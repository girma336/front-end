import React from "react";
import Image from "next/image";
import logo from "@public/logos/juubix-logo-with-text-light.svg";
import RecorderLogic from "./RecorderLogic";

const VideoRecorder = () => (
  <div className="flex min-h-screen items-center justify-center">
    <Image
      src={logo}
      alt="logo"
      width={100}
      height={100}
      className="absolute left-2 top-0 block md:hidden"
    />
    <div className="relative flex min-h-[90vh] w-[95vw] flex-col rounded-[20px] bg-custom-blue-dark text-custom-white md:mb-12 md:min-h-[70vh] md:w-[80vw] md:max-w-[1172px] md:justify-center lg:min-h-[80vh]">
      <Image
        src={logo}
        alt="logo"
        className="absolute left-4 top-2 hidden h-auto w-24 md:block lg:w-32 2xl:top-3 2xl:w-40"
      />
      <RecorderLogic />
    </div>
  </div>
);

export default VideoRecorder;
