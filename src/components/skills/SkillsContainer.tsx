"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";
import { usePostUserSkillsMutation } from "@/api";
import SkillsItem from "./SkillsItem";
import SelectionMessage from "./SelectionMessage";
import { SkillType, SelectedSkillsType, SkillApiDataType } from "./types";

const SkillsContainer = ({ skills }: { skills: SkillType[] }) => {
  const [postUserSkills, response] = usePostUserSkillsMutation();
  const router = useRouter();
  const selectedSkills = useAppSelector((state) => state.skills.selectedSkills);

  const combineSubskills = (skill: SelectedSkillsType) => {
    const skillItem = {
      ...skill,
      subSkills: [...skill.subSkills.primary, ...skill.subSkills.other],
    };
    return skillItem;
  };

  const handleContinue = () => {
    const cleanData: SkillApiDataType[] = [];
    selectedSkills.primary.forEach((item: SelectedSkillsType) => {
      cleanData.push(combineSubskills(item));
    });
    selectedSkills.other.forEach((item: SelectedSkillsType) => {
      cleanData.push(combineSubskills(item));
    });
    postUserSkills(cleanData);
  };

  useEffect(() => {
    if (response.isSuccess) {
      router.push("/questionnaire");
    }
  }, [router, response.isSuccess]);

  const findItemInSelectedList = (itemId: number) =>
    selectedSkills.primary.findIndex((skill) => skill._id === itemId) !== -1 ||
    selectedSkills.other.findIndex((skill) => skill._id === itemId) !== -1;

  const findPrimaryItem = (itemId: number) => {
    if (selectedSkills.primary.length !== 0)
      return selectedSkills.primary[0]._id === itemId;
    return false;
  };

  const skillLimitReached =
    selectedSkills.primary.length + selectedSkills.other.length === 3;

  return (
    <div className="min-h-full w-full p-2 md:w-[80%] md:p-6 lg:w-[85%]">
      <ul
        className={`grid h-[90%] w-full grid-cols-3 gap-3 md:h-[90%] md:grid-cols-5 md:gap-4 xl:grid-cols-7 `}
      >
        {skills.map((skill) => (
          <SkillsItem
            key={skill._id}
            skill={skill}
            isItemSelected={findItemInSelectedList(skill._id)}
            isPrimary={findPrimaryItem(skill._id)}
            skillLimitReached={skillLimitReached}
          />
        ))}
      </ul>
      <div className="mx-auto my-4 flex w-full flex-col items-center justify-between p-2 md:flex-row">
        <div className="w-full text-center">
          <SelectionMessage
            isLimitReached={skillLimitReached}
            selectedSkills={selectedSkills}
          />
        </div>

        <button
          className={`w-[8rem] rounded-xl bg-custom-blue-primary p-2 md:w-[10rem] ${
            skillLimitReached ? "opacity-100" : "opacity-20"
          }`}
          disabled={!skillLimitReached}
          onClick={handleContinue}
          type="button"
        >
          Continue{" "}
        </button>
      </div>
    </div>
  );
};
export default SkillsContainer;
