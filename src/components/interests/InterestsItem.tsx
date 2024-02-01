"use client";

import React, { useEffect, useMemo, useState } from "react";
import ImageWrapper from "@/atoms/ImageWrapper";
import { useAppSelector } from "@/redux/hooks";
import { InterestType } from "./types";
import SubInterestPopup from "./subinterests/SubInterestPopup";

interface InterestsItemProps {
  interest: InterestType;
  interestLimitReached: boolean;
  isItemSelected: boolean;
  isPrimary: boolean;
}

const InterestsItem = ({
  interest,
  interestLimitReached,
  isItemSelected,
  isPrimary,
}: InterestsItemProps) => {
  const [openPopup, setOpenPopup] = useState(false);
  const backgroundColorClass = isItemSelected
    ? isPrimary
      ? "bg-white text-black"
      : "bg-custom-blue-primary"
    : "bg-custom-blue-light";

  const storedInterests = useAppSelector(
    (state) => state.interests.selectedInterests
  );

  const storedInterest =
    storedInterests.primary.find((item) => item._id === interest._id) ||
    storedInterests.other.find((item) => item._id === interest._id);

  const storedSubInterests = useMemo(
    () =>
      storedInterest ? storedInterest.subInterests : { primary: [], other: [] },
    [storedInterest]
  );

  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    if (
      storedSubInterests.primary.length + storedSubInterests.other.length ===
      2
    ) {
      setOpenPopup(true);
      setIsEditMode(true);
    }
  }, [storedSubInterests]);

  const handleClick = () => {
    setOpenPopup((prevVal) => !prevVal);
  };

  return (
    <>
      <li
        className={`flex flex-col items-center justify-center ${backgroundColorClass} p-2 hover:animate-growOut`}
      >
        <button
          className="flex h-full w-full flex-1 flex-col items-center justify-center"
          type="button"
          onClick={handleClick}
          disabled={interestLimitReached && !isItemSelected}
        >
          <ImageWrapper
            src={interest.icon}
            imageSizes="h-[36px] w-[36px] md:h-[30px] md:h-[30px] lg:h-[35px] lg:w-[35px]"
            alt={interest.alt_description}
          />
          <h4 className="my-4 break-all  text-sm md:my-2 lg:break-normal lg:text-base">
            {interest.name}
          </h4>
        </button>
      </li>
      {openPopup && (
        <SubInterestPopup
          interestDetails={interest}
          setOpenPopup={setOpenPopup}
          isEditMode={isEditMode}
          storedInterest={storedInterest}
        />
      )}
    </>
  );
};
export default InterestsItem;
