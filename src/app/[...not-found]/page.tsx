"use client";

import React from "react";

import { useRouter } from "next/navigation";
import ImageWrapper from "@/atoms/ImageWrapper";
import MainLogo from "../../../public/logos/jubbix-main-logo.png";

function NotFoundPage() {
  const router = useRouter();
  function handleRedirect() {
    router.back();
  }
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex h-[70vh] w-[80vw] flex-col items-center justify-around rounded-lg bg-custom-blue-dark md:h-[80vh] md:w-[50vw] md:rounded-2xl">
        <ImageWrapper
          src={MainLogo}
          alt="Juubix sphere logo"
          imageSizes="h-[140px] w-[140px] lg:h-[180px] lg:w-[180px]"
          sizes="50vw"
        />

        <h2 className="text-center text-2xl text-custom-white">
          <span className="mb-5 block text-center text-5xl font-bold tracking-wider lg:text-8xl">
            404
          </span>
          Oops! Page not found
        </h2>
        <button
          type="button"
          onClick={handleRedirect}
          className="h-[2.4rem] w-[12rem] rounded-full bg-custom-blue-primary text-sm font-semibold text-custom-white md:mb-10"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default NotFoundPage;
