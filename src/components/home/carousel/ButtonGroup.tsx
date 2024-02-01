import React from "react";
import ImageWrapper from "@/atoms/ImageWrapper";
import ArrowLeft from "@public/icons/arrow-left.svg";
import ArrowRight from "@public/icons/arrow-right.svg";

const ButtonGroup = ({ next, previous, ...rest }: any) => {
  // type not available for the parameters.
  const {
    carouselState: { currentSlide },
  } = rest;

  const disabledStyle = "opacity-10";
  const isAtStart = currentSlide === 0;
  const isAtEnd = currentSlide === 2;

  return (
    <div className="absolute inset-x-0 top-[50%] z-10 flex justify-between px-2">
      <button
        onClick={() => previous()}
        type="button"
        className={`${isAtStart ? disabledStyle : ""}`}
      >
        <ImageWrapper
          src={ArrowLeft}
          alt="Left Arrow"
          imageSizes="h-[20px] w-[20px]"
        />
      </button>

      <button
        onClick={() => next()}
        type="button"
        className={`${isAtEnd ? disabledStyle : ""}`}
      >
        <ImageWrapper
          src={ArrowRight}
          alt="Right Arrow"
          imageSizes="h-[24px] w-[24px]"
        />
      </button>
    </div>
  );
};

export default ButtonGroup;
