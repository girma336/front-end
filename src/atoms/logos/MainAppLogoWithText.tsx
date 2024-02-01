import React from "react";
import ImageWrapper from "../ImageWrapper";
import LogoImage from "../../../public/logos/juubix-logo-with-text.svg";

// JUUBIX sphere with Juubix text in logo. Please pass height and width in pixels
interface MainAppLogoWithTextProps {
  imageSizes: string;
  className?: string;
}

function MainAppLogoWithText({
  imageSizes,
  className = "",
}: MainAppLogoWithTextProps) {
  return (
    <ImageWrapper
      src={LogoImage}
      imageSizes={imageSizes}
      className={className}
      alt="Juubix's Sphere with Juubix Text next to it."
    />
  );
}

export default MainAppLogoWithText;
