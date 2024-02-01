"use client";

import React from "react";
import Image from "next/image";
import ErrorImage from "../../../../public/icons/error-icon.svg";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex items-center justify-center max-sm:min-h-85vh">
      <div className="flex flex-col items-center justify-center gap-3 rounded-[20px] bg-custom-blue-dark p-6 text-custom-white md:mb-4 md:min-h-[70vh] md:w-[80vw] md:max-w-[1172px] md:p-6 lg:min-h-max 2xl:p-20">
        <Image src={ErrorImage} alt="error image" />
        <div className="mt-10 text-center">
          <h3 className="mb-2 text-custom-white md:text-lg md:font-bold lg:text-3xl">
            Oops! We’ve Lost This Page
          </h3>
          <h1>{error.message}</h1>
          <button
            type="button"
            className="mt-6 max-w-max gap-2 rounded-full bg-custom-blue-primary px-10 py-2 text-center text-sm text-custom-white max-sm:w-full md:text-lg"
            onClick={() => reset()}
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}
