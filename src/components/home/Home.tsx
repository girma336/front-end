import React from "react";
import Image from "next/image";
import Link from "next/link";
import { poppins } from "@/atoms/fonts";
import MobileCarousel from "./carousel/MobileCarousel";
import JuubixLogo from "../../../public/home-juubix-logo.svg";
import GameImg from "../../../public/assets/gameover-image.svg";
import JuubixMainImg from "../../../public/assets/main-image.svg";
import JumeetImg from "../../../public/assets/Jumeet-image.svg";

const appsData = [
  { title: "Juubix Main App", imageSrc: JuubixMainImg, linkto: "/matching" },
  { title: "Ju-Meet App", imageSrc: JumeetImg, linkto: "" },
  { title: "Juubix Game App", imageSrc: GameImg, linkto: "" },
];

const appsDataDesktop = [
  { title: "Juubix Game App", imageSrc: GameImg, linkto: "" },
  { title: "Juubix Main App", imageSrc: JuubixMainImg, linkto: "/video-intro" },
  { title: "Ju-Meet App", imageSrc: JumeetImg, linkto: "" },
];

const Home = () => (
  <div className="flex w-full flex-col items-center">
    <div className="pt-6">
      <Image
        src={JuubixLogo}
        alt="Juubix Logo"
        className="m-auto w-[160px] sm:w-[200px]"
      />
      <p
        className={`text-white ${poppins.className} mt-[20px] text-center tracking-[0.15em] lg:text-[23px]`}
      >
        Connects the world..
      </p>
    </div>
    <div className="m-auto h-[70vh] w-[80vw] md:hidden">
      <MobileCarousel appsData={appsData} />
    </div>

    <div className="m-auto hidden h-[75vh] gap-4 text-white md:mx-6 md:grid md:grid-cols-3 md:items-center md:justify-items-center lg:w-4/5 xl:w-3/4">
      {appsDataDesktop.map((item) => (
        <div className="transition-all hover:scale-110" key={item.title}>
          <Link href={item.linkto}>
            <Image
              src={item.imageSrc}
              alt={`${item.title}-link`}
              className="h-[60vh]"
              sizes="40vw"
            />
          </Link>
        </div>
      ))}
    </div>
  </div>
);

export default Home;
