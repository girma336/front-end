import React, { useEffect } from "react";
import ImageWrapper from "@/atoms/ImageWrapper";
import { useAppDispatch } from "@/redux/hooks";
import { removeSelectedSkill } from "@/redux/features/skills/skillSlice";
import ToolTip from "@/atoms/ToolTip";
import CrossIcon from "../../../../public/icons/x-icon.svg";
import { SelectedSkillsType, SubSkillType } from "../types";

interface SelectedSkillProps {
  category: SelectedSkillsType;
  setSubskills: Function;
  setActiveIndex: Function;
  isActiveItem: boolean;
  itemIndex: number;
  setActiveSkillId: Function;
  subSkills: { primary: SubSkillType[]; other: SubSkillType[] };
}

const SelectedSkill = ({
  category,
  setSubskills,
  setActiveIndex,
  isActiveItem,
  itemIndex,
  setActiveSkillId,
  subSkills,
}: SelectedSkillProps) => {
  const dispatch = useAppDispatch();

  const handleSkillClick = (id: number) => {
    setActiveIndex(itemIndex);
    setActiveSkillId(id);
  };

  const handleRemoveSkill = (categoryId: number) => {
    dispatch(removeSelectedSkill(categoryId));
    setSubskills(() => []);
  };

  useEffect(() => {
    if (isActiveItem) {
      setSubskills(subSkills);
      setActiveSkillId(category._id);
    }
  }, [isActiveItem, subSkills, setSubskills, category._id, setActiveSkillId]);

  const activeBackground = isActiveItem ? "bg-custom-blue-primary" : "";

  return (
    <li key={category._id} className="relative w-max md:w-[10rem]">
      <ToolTip
        message={category.name}
        position={{ top: 0, left: "105%" }}
        className="z-50"
      >
        <div
          className={`mx-1 flex w-full flex-nowrap items-center justify-between rounded-full border-[0.70px] border-custom-white p-1 text-xs md:mx-1 md:my-1 md:whitespace-nowrap md:text-base ${activeBackground}`}
        >
          <button
            type="button"
            onClick={() => handleSkillClick(category._id)}
            className="whitespace-nowrap md:overflow-hidden md:text-ellipsis"
          >
            {category.name}
          </button>
          <button
            type="button"
            onClick={() => {
              handleRemoveSkill(category._id);
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

export default SelectedSkill;
