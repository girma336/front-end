"use client";

import React, { useEffect, useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import { poppins } from "@/atoms/fonts";
import SelectedSkill from "./SelectedSkill";
import SelectedSubskills from "./SelectedSubskills";
import { SubSkillType } from "../types";

const SelectionsPanel = () => {
  const userSkills = useAppSelector((state) => state.skills.selectedSkills);

  const selectedSkills = [...userSkills.primary, ...userSkills.other];
  const [activeIndex, setActiveIndex] = useState<Number>(-1);
  const [subSkills, setSubSkills] = useState<{
    primary: SubSkillType[];
    other: SubSkillType[];
  }>({ primary: [], other: [] });
  const [activeSkillId, setActiveSkillId] = useState(0);

  useEffect(() => {
    setActiveIndex(selectedSkills.length - 1);
  }, [selectedSkills.length]);

  return (
    <div className="w-full bg-transparent px-2 md:max-w-[30%] md:bg-custom-blue-light lg:max-w-[20%]">
      <div className="grid grid-cols-2 gap-2 md:m-4 md:grid-cols-1">
        <div className="mt-1 bg-custom-blue-light p-1 md:bg-transparent">
          <h3
            className={`my-2 text-xs md:text-xl xl:text-2xl ${poppins.className} md:border-b-[0.5px] md:border-b-[#8C9399] md:p-2`}
          >
            SKILLS
          </h3>
          <ul className="my-2 flex w-full flex-row items-center gap-2 overflow-x-auto md:m-auto md:flex-col md:items-start md:gap-0 md:overflow-x-visible">
            {selectedSkills.map((category, index) => (
              <SelectedSkill
                key={category._id}
                category={category}
                setSubskills={setSubSkills}
                setActiveIndex={setActiveIndex}
                setActiveSkillId={setActiveSkillId}
                isActiveItem={activeIndex === index}
                itemIndex={index}
                subSkills={category.subSkills}
              />
            ))}
          </ul>
        </div>
        <div className="mt-1 bg-custom-blue-light p-1 md:bg-transparent">
          <h3
            className={`my-2 text-xs md:text-xl xl:text-2xl ${poppins.className} md:border-b-[0.5px] md:border-b-[#8C9399] md:p-2`}
          >
            SUB-SKILLS
          </h3>
          <SelectedSubskills subSkills={subSkills} skillId={activeSkillId} />
        </div>
      </div>
    </div>
  );
};

export default SelectionsPanel;
