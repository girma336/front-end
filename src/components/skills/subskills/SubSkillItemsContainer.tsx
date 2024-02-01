import React from "react";
import SubSkillItem from "./SubSkillItem";
import { SubSkillType, SelectedSubSkillType } from "../types";

interface SubSkillItemsContainerProps {
  subSkillItems: SubSkillType[];
  limitReached: boolean;
  setSelectedSubskills: Function;
  selectedSubskills: SelectedSubSkillType;
  storedSubskills: SelectedSubSkillType;
}

const SubSkillItemsContainer = ({
  subSkillItems,
  limitReached,
  setSelectedSubskills,
  storedSubskills,
  selectedSubskills,
}: SubSkillItemsContainerProps) => {
  const findPrimaryItem = (subInterest: SubSkillType) =>
    selectedSubskills.primary[0]?._id === subInterest._id;
  return (
    <ul className="m-4 grid max-h-[35vh] grid-cols-1 gap-4 overflow-auto p-6 md:max-h-[45vh] lg:grid-cols-2">
      {subSkillItems.map((subSkill) => (
        <SubSkillItem
          key={subSkill._id}
          subSkillItem={subSkill}
          limitReached={limitReached}
          setSelectedSubskills={setSelectedSubskills}
          isPrimarySubskill={findPrimaryItem(subSkill)}
          storedSubskills={storedSubskills}
        />
      ))}
    </ul>
  );
};

export default SubSkillItemsContainer;
