import React from "react";
import { roboto } from "@/atoms/fonts";
import CloseIcon from "@public/icons/setting-close-icon.svg";
import ImageWrapper from "@/atoms/ImageWrapper";
import SearchBar from "./SearchBar";

interface PopupWindowProps {
  setIsPopupOpen: Function;
}

const PopupWindow = ({ setIsPopupOpen }: PopupWindowProps) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
    <div
      className="relative  z-50 w-4/5 rounded-lg bg-custom-blue-dark md:w-3/5 lg:w-2/5"
      style={{
        boxShadow: "1px 1px 15px 0px #0064BC",
      }}
    >
      <div className="mx-4 my-4 flex justify-between">
        <div
          className={`${roboto.className} text-lg font-bold tracking-wide text-white`}
        >
          Everyone Except
        </div>

        <button
          type="button"
          className="p-2"
          onClick={() => setIsPopupOpen((prevValue: boolean) => !prevValue)}
        >
          <ImageWrapper
            src={CloseIcon}
            alt="Close icon"
            imageSizes="h-4 w-4 lg:h-8 w-8"
          />
        </button>
      </div>
      <div>
        <SearchBar />
      </div>
    </div>
  </div>
);

export default PopupWindow;
