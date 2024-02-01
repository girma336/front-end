"use client";

import React from "react";
import Link from "next/link";
import { poppins, ibmPlexSans } from "@/atoms/fonts";
import AnimatedMainLogo from "@/components/splash/AnimatedMainLogo";
import Particles from "@/components/splash/Particles";

function LandingPage() {
  return (
    <section className="relative flex h-screen flex-col items-center justify-center overflow-hidden bg-desktop  bg-left bg-no-repeat md:bg-cover md:bg-center">
      <div className="z-50 -mt-8 h-36 w-36 md:mt-3 md:h-52 md:w-52">
        <AnimatedMainLogo autoRotate animationEnabled={false} />
      </div>
      <div className="z-50 flex flex-col items-center">
        <h1
          className={`mt-3 text-6xl font-medium tracking-widest text-white md:mt-7 md:text-7xl ${ibmPlexSans.className}`}
        >
          JUUBIX
        </h1>

        <p
          className={`text-base tracking-widest text-white md:mt-3 md:text-3xl md:tracking-widest ${poppins.className}`}
        >
          Unlock Unlimited Opportunities...
        </p>
        <Link href="/login" className="z-60">
          <button
            type="button"
            className={`mt-9 rounded-3xl bg-white px-16 py-1.5 text-sm font-extrabold text-blue-600 md:mt-6 md:px-24 md:py-2.5 ${poppins.className} `}
          >
            GET STARTED
          </button>
        </Link>
      </div>
      <div className="h-[25%] w-full bg-transparent">
        <Particles />
      </div>
    </section>
  );
}

export default LandingPage;
