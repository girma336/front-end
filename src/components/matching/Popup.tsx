"use client";

import React, { useRef } from "react";
import { satisfy, roboto } from "@/atoms/fonts";
import Image from "next/image";
import useClickOutside from "@/hooks/UseClickOutside";
import { PopupProps } from "./types";
import elipse1 from "../../../public/assets/green-shapes.svg";
import elipse2 from "../../../public/assets/red-shapes.svg";
import talentPhoto from "../../../public/assets/talent.svg";
import companyPhoto from "../../../public/assets/company.svg";
import Background from "../../../public/assets/EllipseBackground.svg";

function Popup({ onClose }: PopupProps) {
  // Dummy data for totalCompanies and totalInvestors
  const totalCompanies = 15;
  const totalInvestors = 37;

  const popupContainerRef: React.RefObject<HTMLDivElement> = useRef(null);

  const higlightBorder = () => {
    if (popupContainerRef.current) {
      popupContainerRef.current.style.boxShadow = "0 0 10px 5px #00a6cb";
    }
  };

  useClickOutside(popupContainerRef, higlightBorder);

  return (
    <div className="fixed inset-0  flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative h-auto w-72 rounded-xl bg-custom-white lg:h-auto lg:w-96">
        <div className="relative">
          <Image
            src={Background}
            alt="ellipse image"
            layout="responsive"
            className="top-28"
          />
        </div>
        <div className=" left-[112px] top-[30px] h-[280px] w-[277px] ">
          <div className="absolute left-28 top-10 h-40 w-44 lg:left-36 lg:top-20  lg:h-52 lg:w-52">
            <Image
              src={elipse1}
              alt="ellipse image"
              layout="responsive"
              className="animate-spinslow"
            />{" "}
            <Image
              src={companyPhoto}
              alt="company photo"
              className="relative -top-36 left-8 lg:hidden"
            />{" "}
          </div>
        </div>

        <div className="absolute left-3 top-3 h-52 w-44 sm:left-4 sm:top-3 lg:h-52 lg:w-52">
          <Image
            src={elipse2}
            alt="ellipse"
            layout="responsive"
            className="animate-spinslow"
          />{" "}
          <Image
            src={talentPhoto}
            alt="talent photo"
            className="relative -top-36 left-8 lg:hidden"
          />{" "}
        </div>
        <h2
          className={`absolute left-20 top-80 h-16 w-64 text-3xl font-normal tracking-wide text-black lg:left-32 lg:top-96 ${satisfy.className}`}
        >
          It's A Match!
        </h2>
        <div className="absolute left-40 top-96 inline-flex h-[32.20px] w-[122px] items-center justify-between rounded-3xl bg-red-600 py-[9.10px] lg:left-52 lg:top-[484px]">
          <button
            type="button"
            onClick={onClose}
            className="w-[150px] self-center rounded-3xl bg-red-600 px-4 py-2 text-white hover:bg-blue-600"
          >
            Decline
          </button>
        </div>
        <div className="absolute left-4 top-96 inline-flex h-[32.20px] w-[122px] items-center justify-between rounded-3xl bg-sky-600 py-[9.10px] lg:left-10 lg:top-[484px]">
          <button
            type="button"
            onClick={onClose}
            className="w-[150px] self-center rounded-3xl bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            Accept
          </button>
        </div>
        <div
          className={`absolute left-7 top-44 text-[21.13px] font-medium tracking-wider text-white lg:left-20 lg:top-52 ${roboto.className}`}
        >
          {" "}
          <span className="m-2 lg:hidden">{totalInvestors}K</span>
          Talent
        </div>
        <div
          className={`absolute left-20 top-52 text-[21.13px] font-medium tracking-wider text-white lg:left-44 lg:top-72 ${roboto.className}`}
        >
          <span className="m-2 lg:hidden">{totalCompanies}K</span>
          Companies
        </div>
        <div className="absolute left-[97px] top-[114px] text-center font-['Roboto'] text-3xl font-normal leading-[30px] tracking-tight text-black">
          <span className="invisible lg:visible">{totalInvestors}K</span>
        </div>
        <div className="absolute left-[229px] top-[170px] text-center font-['Roboto'] text-3xl font-normal leading-[30px] tracking-tight text-black">
          <span className="invisible lg:visible">{totalCompanies}K</span>
        </div>
      </div>{" "}
    </div>
  );
}

export default Popup;
