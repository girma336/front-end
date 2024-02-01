import React from "react";
import Image from "next/image";

// imageSizes are Tailwind classes -- eg "h-[20px] w-[20px] md:h-[25px] md:w-[25px] xl:h-[32px] xl:w-[32px]"

interface ImageWrapperProps {
  src: any;
  alt: string;
  imageSizes: string;
  className?: string;
  sizes?: string;
}

function ImageWrapper({
  src,
  alt,
  className = "",
  imageSizes,
  sizes = "",
}: ImageWrapperProps) {
  return (
    <div className={`relative ${imageSizes}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className={`${className}`}
        sizes={sizes}
      />
    </div>
  );
}

export default ImageWrapper;
