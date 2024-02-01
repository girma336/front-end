import React from "react";
import MainLogo from "@public/logos/jubbix-main-logo.png";
import ImageWrapper from "../ImageWrapper";
import Spinner from "./Spinner";

interface LoadingSpinnerProps {
  message?: string;
  darkMode?: boolean;
}

const LoadingSpinner = ({
  message = "A moment please...",
  darkMode = true,
}: LoadingSpinnerProps) => {
  const textColor = darkMode ? "text-custom-white" : "text-custom-gray";
  const spinnerColor = darkMode ? "#fbfbfb" : "#006DCD";

  return (
    <div className="flex min-h-[60vh] w-full flex-col items-center justify-center">
      <div className="">
        <ImageWrapper
          src={MainLogo}
          alt="JUUBIX logo"
          imageSizes="h-[100px] w-[100px] lg:w-[120px] lg:h-[120px]"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <div className={`my-8 text-xl font-semibold lg:text-2xl ${textColor}`}>
          {message}
        </div>
        <Spinner spinnerColor={spinnerColor} />
      </div>
    </div>
  );
};

export default LoadingSpinner;
