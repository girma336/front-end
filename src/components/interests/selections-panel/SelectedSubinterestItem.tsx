import React from "react";
import ImageWrapper from "@/atoms/ImageWrapper";
import ToolTip from "@/atoms/ToolTip";
import { useAppDispatch } from "@/redux/hooks";
import { removeSelectedSubinterest } from "@/redux/features/interests/interestSlice";
import CrossIcon from "@public/icons/x-icon.svg";

interface SelectedSubinterestItemsProps {
  subinterest: {
    _id: number;
    name: string;
  };
  interestId: number;
}

const SelectedSubinterestItem = ({
  subinterest,
  interestId,
}: SelectedSubinterestItemsProps) => {
  const dispatch = useAppDispatch();
  const handleRemoveSubinterest = (_id: number, subInterestId: number) => {
    dispatch(removeSelectedSubinterest({ _id, subInterestId }));
  };

  return (
    <li className="relative w-max md:w-[10rem]">
      <ToolTip
        message={subinterest.name}
        position={{ top: 0, left: "105%" }}
        className="z-50"
      >
        <div className="mx-1 flex w-full flex-nowrap items-center justify-between rounded-full border-[0.70px] border-custom-white p-1 text-xs md:mx-1 md:my-1 md:w-[90%] md:whitespace-nowrap md:text-base">
          <button
            type="button"
            className="whitespace-nowrap md:overflow-hidden md:text-ellipsis"
          >
            {subinterest.name}
          </button>
          <button
            type="button"
            onClick={() => handleRemoveSubinterest(interestId, subinterest._id)}
          >
            <ImageWrapper
              src={CrossIcon}
              alt="white color cross icon to remove category from filters"
              imageSizes="h-[18px] w-[18px] ms-1"
            />
          </button>
        </div>
      </ToolTip>
    </li>
  );
};

export default SelectedSubinterestItem;
