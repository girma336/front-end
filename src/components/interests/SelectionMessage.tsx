import React from "react";
import { SelectedInterestsType } from "./types";

interface SelectionMessageProps {
  selectedInterests: {
    primary: SelectedInterestsType[];
    other: SelectedInterestsType[];
  };
  isLimitReached: boolean;
}

const SelectionMessage = ({
  selectedInterests,
  isLimitReached,
}: SelectionMessageProps) => {
  if (isLimitReached)
    return (
      <h5 className="my-4 text-sm font-bold text-green-500 md:my-0 md:text-base xl:text-lg">
        You have selected 3 interests. Please click Continue.
      </h5>
    );
  if (selectedInterests.primary.length === 0)
    return (
      <h5 className="text-white-500 my-4 text-sm font-bold md:my-0 md:text-base xl:text-lg">
        Please select a primary interest.
      </h5>
    );

  if (selectedInterests.other.length === 0)
    return (
      <h5 className="text-white-500 my-4 text-sm font-bold md:my-0 md:text-base xl:text-lg">
        Please select 2 secondary interests.
      </h5>
    );

  if (selectedInterests.other.length === 1)
    return (
      <h5 className="text-white-500 my-4 text-sm font-bold md:my-0 md:text-base xl:text-lg">
        Please select 1 more secondary interest.
      </h5>
    );
  return (
    <h5 className="text-white-500 my-4 text-sm font-bold md:my-0 md:text-base xl:text-lg">
      Please select 1 primary and 2 secondary interests.
    </h5>
  );
};

export default SelectionMessage;
