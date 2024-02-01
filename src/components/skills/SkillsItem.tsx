"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import ImageWrapper from "@/atoms/ImageWrapper";
import { SkillType } from "./types";
import SubSkillPopup from "./subskills/SubSkillPopup";

interface SkillsItemProps {
  skill: SkillType;
  skillLimitReached: boolean;
  isItemSelected: boolean;
  isPrimary: boolean;
}

const SkillsItem = ({
  skill,
  skillLimitReached,
  isItemSelected,
  isPrimary,
}: SkillsItemProps) => {
  const [openPopup, setOpenPopup] = useState(false);
  const backgroundColorClass = isItemSelected
    ? isPrimary
      ? "bg-white text-black"
      : "bg-custom-blue-primary"
    : "bg-custom-blue-light";

  const storedSkills = useAppSelector((state) => state.skills.selectedSkills);

  const storedSkill =
    storedSkills.primary.find((item) => item._id === skill._id) ||
    storedSkills.other.find((item) => item._id === skill._id);

  const storedSubSkills = useMemo(
    () => (storedSkill ? storedSkill.subSkills : { primary: [], other: [] }),
    [storedSkill]
  );

  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    if (storedSubSkills.primary.length + storedSubSkills.other.length === 2) {
      setOpenPopup(true);
      setIsEditMode(true);
    }
  }, [storedSubSkills]);

  const handleClick = () => {
    setOpenPopup((prevVal) => !prevVal);
  };

  return (
    <>
      <li
        className={`flex flex-col items-center justify-center ${backgroundColorClass} p-2 hover:animate-growOut`}
      >
        <button
          type="button"
          onClick={handleClick}
          disabled={skillLimitReached && !isItemSelected}
          className="flex h-full w-full flex-1 flex-col items-center justify-center"
        >
          <ImageWrapper
            src={skill.icon}
            imageSizes="h-[36px] w-[36px] md:h-[25px] md:h-[25px] lg:h-[30px] lg:w-[30px] xl:h-[55px] xl:w-[55px]"
            alt={`Icon for interest category ${skill.name}`}
          />
          <h4 className="my-4 break-all text-sm md:my-2 lg:break-normal lg:text-base">
            {skill.name}
          </h4>
        </button>
      </li>
      {openPopup && (
        <SubSkillPopup
          skillDetails={skill}
          setOpenPopup={setOpenPopup}
          isEditMode={isEditMode}
          storedSkill={storedSkill}
        />
      )}
    </>
  );
};
export default SkillsItem;
