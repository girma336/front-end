import React from "react";
import Image from "next/image";
import Arrow from "../../../../public/icons/double-arrow-down.svg";

function DownArrow({ height, width }: { height: number; width: number }) {
  return (
    <Image
      src={Arrow}
      height={height}
      width={width}
      alt="a double arrow in orange color pointing downwards"
      className="mx-4 inline"
    />
  );
}
export default DownArrow;
