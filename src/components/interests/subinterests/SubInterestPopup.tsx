"use client";

import React, { useRef, useState } from "react";
import { useAppDispatch } from "@/redux/hooks";
import useClickOutside from "@/hooks/UseClickOutside";
import { addSelectedInterest } from "@/redux/features/interests/interestSlice";
import SubInterestItemsContainer from "./SubInterestItemsContainer";
import {
  InterestType,
  SelectedInterestsType,
  SelectedSubInterestType,
} from "../types";
import PopupActionButtons from "./PopupActionButtons";

interface SubInterestPopupProps {
  interestDetails: InterestType;
  setOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;
  isEditMode: boolean;
  storedInterest: SelectedInterestsType | undefined;
}

const SubInterestPopup = ({
  interestDetails,
  setOpenPopup,
  isEditMode,
  storedInterest,
}: SubInterestPopupProps) => {
  const storedSubinterests = storedInterest
    ? storedInterest.subInterests
    : { primary: [], other: [] };

  const [selectedSubinterests, setSelectedSubinterests] =
    useState<SelectedSubInterestType>({ primary: [], other: [] });

  const limitReached =
    selectedSubinterests.primary.length + selectedSubinterests.other.length ===
    3;

  const subInterestItems = interestDetails.subInterests;

  const dispatch = useAppDispatch();

  const onConfirm = () => {
    const payload = {
      ...interestDetails,
      subInterests: selectedSubinterests,
    };
    dispatch(addSelectedInterest(payload));
    setOpenPopup((prevValue) => !prevValue);
  };

  const onCancel = () => {
    setOpenPopup((prevValue) => !prevValue);
  };

  const popupContainerRef: React.RefObject<HTMLDivElement> = useRef(null);

  const higlightBorder = () => {
    if (popupContainerRef.current) {
      popupContainerRef.current.style.boxShadow = "0 0 10px 5px #00a6cb";
    }
  };

  useClickOutside(popupContainerRef, higlightBorder);

  return (
    <div className="fixed inset-0 z-50 flex animate-fadein flex-col items-center justify-center backdrop-blur-sm">
      <div
        className="relative w-[80vw] rounded-lg border-[#00a6cb] bg-[#031a3c] md:w-[60vw] lg:w-[50vw] xl:w-[40vw]"
        style={{ borderWidth: "1px" }}
        ref={popupContainerRef}
      >
        <h3 className="text-=lg my-2 text-center font-semibold md:text-xl">
          Please Select 3 Sub-interests
        </h3>
        <h5 className="mb-2 text-center ">{interestDetails.name}</h5>
        <hr
          style={{
            borderColor: "rgba(140, 147, 153, 1)",
            width: "90%",
            margin: "0 auto",
          }}
        />

        <SubInterestItemsContainer
          subInterestItems={subInterestItems}
          limitReached={limitReached}
          setSelectedSubinterests={setSelectedSubinterests}
          selectedSubinterests={selectedSubinterests}
          storedSubinterests={storedSubinterests}
        />

        <PopupActionButtons
          className="w-full"
          onConfirm={onConfirm}
          onCancel={onCancel}
          limitReached={limitReached}
          isEditMode={isEditMode}
          selectedSubInterests={selectedSubinterests}
        />
      </div>
    </div>
  );
};
export default SubInterestPopup;
