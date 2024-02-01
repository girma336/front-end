import React from "react";
import SubInterestItem from "./SubInterestItem";
import { SelectedSubInterestType, SubInterestType } from "../types";

interface SubInterestItemsContainerProps {
  subInterestItems: SubInterestType[];
  limitReached: boolean;
  setSelectedSubinterests: Function;
  selectedSubinterests: SelectedSubInterestType;
  storedSubinterests: SelectedSubInterestType;
}

const SubInterestItemsContainer = ({
  subInterestItems,
  limitReached,
  setSelectedSubinterests,
  storedSubinterests,
  selectedSubinterests,
}: SubInterestItemsContainerProps) => {
  const findPrimaryItem = (subInterest: SubInterestType) =>
    selectedSubinterests.primary[0]?._id === subInterest._id;

  return (
    <ul className="m-4 grid max-h-[35vh] grid-cols-1 gap-4 overflow-auto p-6 md:max-h-[45vh] lg:grid-cols-2">
      {subInterestItems.map((subInterest) => (
        <SubInterestItem
          key={subInterest._id}
          subInterestItem={subInterest}
          limitReached={limitReached}
          setSelectedSubinterests={setSelectedSubinterests}
          isPrimarySubinterest={findPrimaryItem(subInterest)}
          storedSubinterests={storedSubinterests}
        />
      ))}
    </ul>
  );
};

export default SubInterestItemsContainer;
