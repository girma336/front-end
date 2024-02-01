import React from "react";
import ImageWrapper from "../ImageWrapper";
import LogoImage from "../../../public/logos/logos/jubbix-main-logo.svg";

// JUUBIX sphere logo component. Please pass height and width in pixels

interface MainAppLogoProps {
  imageSizes: string;
  className?: string;
}

function MainAppLogo({ imageSizes, className = "" }: MainAppLogoProps) {
  return (
    <ImageWrapper
      src={LogoImage}
      imageSizes={imageSizes}
      className={className}
      alt="Juubix's Sphere with Juubix Text next to it."
    />
  );
}

export default MainAppLogo;
