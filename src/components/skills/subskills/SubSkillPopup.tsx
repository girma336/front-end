"use client";

import React, { useRef, useState } from "react";
import { useAppDispatch } from "@/redux/hooks";
import useClickOutside from "@/hooks/UseClickOutside";
import { addSelectedSkill } from "@/redux/features/skills/skillSlice";
import SubSkillItemsContainer from "./SubSkillItemsContainer";
import { SkillType, SelectedSkillsType, SelectedSubSkillType } from "../types";
import PopupActionButtons from "./PopupActionButtons";

interface SubSkillPopupProps {
  skillDetails: SkillType;
  setOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;
  isEditMode: boolean;
  storedSkill: SelectedSkillsType | undefined;
}

const SubSkillPopup = ({
  skillDetails,
  setOpenPopup,
  isEditMode,
  storedSkill,
}: SubSkillPopupProps) => {
  const storedSubskills = storedSkill
    ? storedSkill.subSkills
    : { primary: [], other: [] };

  const [selectedSubskills, setSelectedSubskills] =
    useState<SelectedSubSkillType>({ primary: [], other: [] });

  const limitReached =
    selectedSubskills.primary.length + selectedSubskills.other.length === 3;

  const subSkillItems = skillDetails.subSkills;

  const dispatch = useAppDispatch();

  const onConfirm = () => {
    const payload = { ...skillDetails, subSkills: selectedSubskills };
    dispatch(addSelectedSkill(payload));
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
          Please, select 3 sub-skills.
        </h3>
        <h5 className="mb-2 text-center ">{skillDetails.name}</h5>
        <hr
          style={{
            borderColor: "rgba(140, 147, 153, 1)",
            width: "90%",
            margin: "0 auto",
          }}
        />

        <SubSkillItemsContainer
          subSkillItems={subSkillItems}
          limitReached={limitReached}
          setSelectedSubskills={setSelectedSubskills}
          selectedSubskills={selectedSubskills}
          storedSubskills={storedSubskills}
        />
        <PopupActionButtons
          className="w-full"
          onConfirm={onConfirm}
          onCancel={onCancel}
          limitReached={limitReached}
          isEditMode={isEditMode}
          selectedSubSkills={selectedSubskills}
        />
      </div>
    </div>
  );
};
export default SubSkillPopup;
