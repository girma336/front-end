import React from "react";
import SubSkillItem from "./SubSkillItem";

interface SkillItemProps {
  skill: {
    id: number;
    description: string;
    subskills: { id: number; description: string }[];
  };
  setSelectedFilters: Function;
  selectedFilters: number[];
}

const SkillItem = ({
  skill,
  setSelectedFilters,
  selectedFilters,
}: SkillItemProps) => (
  <div className="text-custom-gray-primary">
    <h4 className="font-semibold">{skill.description}</h4>
    <ul className="flex flex-wrap">
      {skill.subskills.map((subskill) => (
        <SubSkillItem
          subSkill={subskill}
          setSelectedFilters={setSelectedFilters}
          selectedFilters={selectedFilters}
          key={subskill.id}
        />
      ))}
    </ul>
  </div>
);

export default SkillItem;
