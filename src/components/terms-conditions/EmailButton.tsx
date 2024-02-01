import React from "react";
import ImageWrapper from "@/atoms/ImageWrapper";
import EmailImage from "../../../public/icons/email-1.svg";

function EmailButton() {
  return (
    <button
      className="my-4 flex font-semibold text-custom-blue-primary md:my-0"
      type="button"
    >
      <ImageWrapper
        src={EmailImage}
        imageSizes="h-[20px] w-[20px] md:h-[25px] md:w-[25px] mx-2"
        alt='Blue colored email folder icon"'
        className="inline"
      />
      Send a copy to Email
    </button>
  );
}
export default EmailButton;
