import React, { useEffect } from "react";
import ImageWrapper from "@/atoms/ImageWrapper";
import { useAppDispatch } from "@/redux/hooks";
import { removeSelectedInterest } from "@/redux/features/interests/interestSlice";
import ToolTip from "@/atoms/ToolTip";
import CrossIcon from "../../../../public/icons/x-icon.svg";
import { SelectedInterestsType, SubInterestType } from "../types";

interface SelectedInterestProps {
  category: SelectedInterestsType;
  setSubinterests: Function;
  setActiveIndex: Function;
  isActiveItem: boolean;
  itemIndex: number;
  setActiveInterestId: Function;
  subInterests: { primary: SubInterestType[]; other: SubInterestType[] };
}

const SelectedInterest = ({
  category,
  setSubinterests,
  setActiveIndex,
  isActiveItem,
  itemIndex,
  setActiveInterestId,
  subInterests,
}: SelectedInterestProps) => {
  const dispatch = useAppDispatch();

  const handleInterestClick = (id: number) => {
    setActiveIndex(itemIndex);
    setActiveInterestId(id);
  };

  const handleRemoveInterest = (categoryId: number) => {
    dispatch(removeSelectedInterest(categoryId));
    setSubinterests(() => []);
  };

  useEffect(() => {
    if (isActiveItem) {
      setSubinterests(subInterests);
      setActiveInterestId(category._id);
    }
  }, [
    isActiveItem,
    subInterests,
    setSubinterests,
    category._id,
    setActiveInterestId,
  ]);

  const activeBackground = isActiveItem ? "bg-custom-blue-primary" : "";

  return (
    <li key={category._id} className="relative w-max md:w-[10rem]">
      <ToolTip
        message={category.name}
        position={{ top: 0, left: "105%" }}
        className="z-50"
      >
        <div
          className={`mx-1 flex w-full flex-nowrap items-center justify-between rounded-full border-[0.70px] border-custom-white p-1 text-xs md:mx-1 md:my-1 md:w-[90%] md:whitespace-nowrap md:text-base ${activeBackground}`}
        >
          <button
            type="button"
            onClick={() => handleInterestClick(category._id)}
            className="whitespace-nowrap md:overflow-hidden md:text-ellipsis"
          >
            {category.name}
          </button>
          <button
            type="button"
            onClick={() => {
              handleRemoveInterest(category._id);
            }}
          >
            <ImageWrapper
              src={CrossIcon}
              alt="white color cross icon to remove selected category"
              imageSizes="h-[18px] w-[18px] ms-1"
            />
          </button>
        </div>
      </ToolTip>
    </li>
  );
};

export default SelectedInterest;
