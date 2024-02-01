"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";
import ImageWrapper from "@/atoms/ImageWrapper";
import ButtonGroup from "./ButtonGroup";
import CustomDots from "./CustomDots";

interface AppsDataProps {
  appsData: {
    title: string;
    imageSrc: string;
    linkto: string;
  }[];
}

const responsive = {
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const MobileCarousel = ({ appsData }: AppsDataProps) => {
  const carouseItems = appsData.map((item) => (
    <div className="flex items-center justify-center" key={item.title}>
      <Link href={item.linkto}>
        <ImageWrapper
          src={item.imageSrc}
          alt={`${item.title} Link`}
          imageSizes=" h-[50vh] w-[75vw]"
        />
      </Link>
    </div>
  ));

  return (
    <Carousel
      responsive={responsive}
      showDots
      customDot={<CustomDots />}
      swipeable
      draggable={false}
      className="h-full w-full"
      arrows={false}
      renderButtonGroupOutside
      customButtonGroup={<ButtonGroup />}
      containerClass="z-50"
    >
      {carouseItems}
    </Carousel>
  );
};

export default MobileCarousel;
