"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { poppins } from "@/atoms/fonts";
import Image from "next/image";
import MainLogo from "../../../public/logos/jubbix-main-logo.png";

interface AnimatedLoadingSkeletonProps {
  onCancel: Function;
  navigateTo: string;
}

function AnimatedLoadingSkeleton({
  onCancel,
  navigateTo,
}: AnimatedLoadingSkeletonProps) {
  const [loadingProgress, setLoadingProgress] = useState("0");
  const router = useRouter();
  const timeout = 1000;

  useEffect(() => {
    setLoadingProgress("30%");
    const firstTimeout = setTimeout(() => {
      setLoadingProgress("80%");
    }, timeout * 2);
    const secondTimeout = setTimeout(() => {
      setLoadingProgress("100%");

      router.push(navigateTo);
    }, timeout * 4);
    return () => {
      clearTimeout(firstTimeout);
      clearTimeout(secondTimeout);
    };
  }, [router, navigateTo]);

  return (
    <div className="flex h-[70vh] w-[80vw] flex-col items-center justify-around rounded-lg bg-custom-blue-dark md:h-[80vh] md:w-[50vw] md:rounded-2xl">
      <Image
        src={MainLogo}
        alt="Juubix sphere main logo"
        height={140}
        width={140}
      />
      <h6 className={`${poppins.className} text-xl text-white`}>
        Loading Matches...
      </h6>
      <div className="h-3 w-[50%] rounded-full bg-blue-600 bg-opacity-30">
        <div
          className=" h-3 rounded-full bg-custom-blue-primary opacity-100"
          style={{
            width: `${loadingProgress}`,
            transition: "width 2s ease-in-out",
          }}
        />
      </div>
      <button
        type="button"
        onClick={() => onCancel()}
        className="h-[2.4rem] w-[12rem] rounded-full bg-custom-blue-primary text-sm font-semibold text-custom-white md:mb-10"
      >
        Cancel
      </button>
    </div>
  );
}

export default AnimatedLoadingSkeleton;
