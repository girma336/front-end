import React from "react";
import { SelectedSkillsType } from "./types";

interface SelectionMessageProps {
  selectedSkills: {
    primary: SelectedSkillsType[];
    other: SelectedSkillsType[];
  };
  isLimitReached: boolean;
}

const SelectionMessage = ({
  selectedSkills,
  isLimitReached,
}: SelectionMessageProps) => {
  if (isLimitReached)
    return (
      <h5 className="my-4 text-sm font-bold text-green-500 md:my-0 md:text-base xl:text-lg">
        You have selected 3 skills. Please click Continue.
      </h5>
    );
  if (selectedSkills.primary.length === 0)
    return (
      <h5 className="text-white-500 my-4 text-sm font-bold md:my-0 md:text-base xl:text-lg">
        Please select a primary skill.
      </h5>
    );

  if (selectedSkills.other.length === 0)
    return (
      <h5 className="text-white-500 my-4 text-sm font-bold md:my-0 md:text-base xl:text-lg">
        Please select 2 secondary skills.
      </h5>
    );

  if (selectedSkills.other.length === 1)
    return (
      <h5 className="text-white-500 my-4 text-sm font-bold md:my-0 md:text-base xl:text-lg">
        Please select 1 more secondary skill.
      </h5>
    );
  return (
    <h5 className="text-white-500 my-4 text-sm font-bold md:my-0 md:text-base xl:text-lg">
      Please select 1 primary and 2 secondary skills.
    </h5>
  );
};

export default SelectionMessage;
