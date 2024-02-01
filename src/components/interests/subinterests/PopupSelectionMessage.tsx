import React from "react";
import { SelectedSubInterestType } from "../types";

interface PopupSelectionMessageProps {
  isLimitReached: boolean;
  selectedSubInterests: SelectedSubInterestType;
}

const PopupSelectionMessage = ({
  isLimitReached,
  selectedSubInterests,
}: PopupSelectionMessageProps) => {
  if (isLimitReached)
    return (
      <h5 className="my-4 text-sm font-bold text-green-500 md:my-0 md:text-base xl:text-lg">
        You have selected 3 sub-interests. Please, click Confirm.
      </h5>
    );
  if (selectedSubInterests.primary.length === 0)
    return (
      <h5 className="text-white-500 my-4 text-sm font-bold md:my-0 md:text-base xl:text-lg">
        Please, select a primary sub-interest.
      </h5>
    );

  if (selectedSubInterests.other.length === 0)
    return (
      <h5 className="text-white-500 my-4 text-sm font-bold md:my-0 md:text-base xl:text-lg">
        Please, select 2 secondary sub-interests.
      </h5>
    );

  if (selectedSubInterests.other.length === 1)
    return (
      <h5 className="text-white-500 my-4 text-sm font-bold md:my-0 md:text-base xl:text-lg">
        Please, select 1 more secondary sub-interest.
      </h5>
    );
  return (
    <h5 className="text-white-500 my-4 text-sm font-bold md:my-0 md:text-base xl:text-lg">
      Please, select 1 primary and 2 secondary sub-interests.
    </h5>
  );
};

export default PopupSelectionMessage;
