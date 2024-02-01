import React from "react";
import ImageWrapper from "@/atoms/ImageWrapper";
import ToolTip from "@/atoms/ToolTip";
import { useAppDispatch } from "@/redux/hooks";
import { removeSelectedSubskill } from "@/redux/features/skills/skillSlice";
import CrossIcon from "../../../../public/icons/x-icon.svg";

interface SelectedSubskillItemsProps {
  subskill: {
    _id: number;
    name: string;
  };
  skillId: number;
}

const SelectedSubskillItem = ({
  subskill,
  skillId,
}: SelectedSubskillItemsProps) => {
  const dispatch = useAppDispatch();
  const handleRemoveSubskill = (_id: number, subSkillId: number) => {
    dispatch(removeSelectedSubskill({ _id, subSkillId }));
  };

  return (
    <li className="relative w-max md:w-[10rem]">
      <ToolTip
        message={subskill.name}
        position={{ top: 0, left: "105%" }}
        className="z-50"
      >
        <div className="mx-1 flex w-full flex-nowrap items-center justify-between rounded-full border-[0.70px] border-custom-white p-1 text-xs md:mx-1 md:my-1 md:whitespace-nowrap md:text-base">
          <button
            type="button"
            className="whitespace-nowrap md:overflow-hidden md:text-ellipsis"
          >
            {subskill.name}
          </button>
          <button
            type="button"
            onClick={() => handleRemoveSubskill(skillId, subskill._id)}
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

export default SelectedSubskillItem;
