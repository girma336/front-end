import React, { useState } from "react";
import { inter, roboto } from "@/atoms/fonts";
import Image from "next/image";
import ImageWrapper from "@/atoms/ImageWrapper";
import PopupWindow from "@/components/setting/PopupWindow";
import SwitchToggle from "@/atoms/Toggle/SwitchToggle";
import EditIcon from "@public/icons/setting-edit-icon.svg";
import CloseIcon from "@public/icons/setting-close-icon.svg";
import DropDownContainer from "@/components/setting/DropDownContainer";
import { PrivacyProps } from "./types";

const SettingItems = ({
  id,
  title,
  question,
  chosenMenu,
  answer,
}: PrivacyProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded((prevValue) => !prevValue);
  };

  const togglePopup = () => {
    setIsPopupOpen((prevValue) => !prevValue);
  };

  return (
    <>
      <div
        key={id}
        className={`my-2 flex flex-col items-start py-2 md:flex-row md:justify-between md:border-b md:border-custom-divider-gray ${
          !isExpanded ? "md:items-center" : "items-start"
        } `}
      >
        <h4
          className={`text-base font-semibold tracking-wide text-custom-white lg:text-lg ${inter.className}`}
        >
          {title}
        </h4>
        {!isExpanded ? (
          <div className="flex w-full justify-between md:w-[65%] lg:w-[75%]">
            <p
              className={`text-left text-base font-medium tracking-wide text-custom-white md:w-[58%] md:text-xs lg:text-sm xl:text-xl ${roboto.className}`}
            >
              {question}
            </p>
            <div className="flex justify-between md:w-[37%] lg:w-[30%]">
              <h4
                className={` xl:text-md hidden h-5 text-base font-bold tracking-tight text-custom-white md:block md:text-xs lg:text-sm ${inter.className}`}
              >
                {chosenMenu}
              </h4>
              <div className="flex items-center">
                {answer === null ? (
                  <div>
                    <SwitchToggle />
                  </div>
                ) : (
                  <button type="button" onClick={toggleExpanded}>
                    <ImageWrapper
                      src={EditIcon}
                      alt="Edit Icon"
                      imageSizes="h-4 w-4 lg:h-6 lg:w-6"
                      className={`${
                        isExpanded ? "hidden" : ""
                      } text-2xl text-custom-white`}
                    />
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-between bg-custom-popup p-4 md:w-[75%]">
            <div className="flex flex-col items-start">
              <h5 className="mb-1 text-left text-xs font-semibold text-custom-popup-question md:text-sm  lg:text-xl">
                {question}
              </h5>
              <div className="text-left text-xs text-custom-popup-answer md:text-xs lg:text-xl">
                {answer}
              </div>
              <DropDownContainer onClickLastItem={togglePopup} />
            </div>
            <div>
              <Image
                src={CloseIcon}
                alt="Close icon"
                width={30}
                height={30}
                className={`${
                  !isExpanded ? "hidden" : ""
                } cursor-pointer text-custom-white`}
                onClick={toggleExpanded}
              />
            </div>
          </div>
        )}
      </div>
      {isPopupOpen && <PopupWindow setIsPopupOpen={setIsPopupOpen} />}
    </>
  );
};

export default SettingItems;
