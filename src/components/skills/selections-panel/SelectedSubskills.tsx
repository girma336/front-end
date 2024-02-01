import React from "react";
import { poppins } from "@/atoms/fonts";
import SelectedSubskillItem from "./SelectedSubskillItem";
import { SubSkillType } from "../types";

interface SelectedSubskillsProps {
  subSkills: { primary: SubSkillType[]; other: SubSkillType[] };
  skillId: number;
}

const SelectedSubskills = ({ subSkills, skillId }: SelectedSubskillsProps) => (
  <ul className="my-2 flex w-full flex-row items-center gap-2 overflow-x-auto md:m-auto md:flex-col md:items-start md:gap-0 md:overflow-x-visible">
    {subSkills.primary?.length !== 0 && (
      <h5 className={`text-sm md:my-2 md:text-base ${poppins.className}md:p-2`}>
        PRIMARY
      </h5>
    )}
    {subSkills.primary?.map((subskill) => (
      <SelectedSubskillItem
        key={subskill._id}
        subskill={subskill}
        skillId={skillId}
      />
    ))}
    {subSkills.other?.length !== 0 && (
      <h5 className={`text-sm md:my-2 md:text-base ${poppins.className}md:p-2`}>
        SECONDARY
      </h5>
    )}
    {subSkills.other?.map((subskill) => (
      <SelectedSubskillItem
        key={subskill._id}
        subskill={subskill}
        skillId={skillId}
      />
    ))}
  </ul>
);

export default SelectedSubskills;
