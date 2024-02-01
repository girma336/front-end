import React from "react";
import { SelectedSubSkillType } from "../types";

interface PopupSelectionMessageProps {
  isLimitReached: boolean;
  selectedSubSkills: SelectedSubSkillType;
}

const PopupSelectionMessage = ({
  isLimitReached,
  selectedSubSkills,
}: PopupSelectionMessageProps) => {
  if (isLimitReached)
    return (
      <h5 className="my-4 text-sm font-bold text-green-500 md:my-0 md:text-base xl:text-lg">
        You have selected 3 sub-skills. Please, click Confirm.
      </h5>
    );
  if (selectedSubSkills.primary.length === 0)
    return (
      <h5 className="text-white-500 my-4 text-sm font-bold md:my-0 md:text-base xl:text-lg">
        Please, select a primary sub-skill.
      </h5>
    );

  if (selectedSubSkills.other.length === 0)
    return (
      <h5 className="text-white-500 my-4 text-sm font-bold md:my-0 md:text-base xl:text-lg">
        Please, select 2 secondary sub-skills.
      </h5>
    );

  if (selectedSubSkills.other.length === 1)
    return (
      <h5 className="text-white-500 my-4 text-sm font-bold md:my-0 md:text-base xl:text-lg">
        Please, select 1 more secondary sub-skill.
      </h5>
    );
  return (
    <h5 className="text-white-500 my-4 text-sm font-bold md:my-0 md:text-base xl:text-lg">
      Please, select 1 primary and 2 secondary sub-skills.
    </h5>
  );
};

export default PopupSelectionMessage;
