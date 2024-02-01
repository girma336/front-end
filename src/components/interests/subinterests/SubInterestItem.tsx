"use client";

import React, { useEffect, useState } from "react";
import { SelectedSubInterestType, SubInterestType } from "../types";

interface SubInterestItemProps {
  subInterestItem: SubInterestType;
  limitReached: boolean;
  setSelectedSubinterests: Function;
  isPrimarySubinterest: boolean;
  storedSubinterests: SelectedSubInterestType;
}

const SubInterestItem = ({
  subInterestItem,
  limitReached,
  setSelectedSubinterests,
  isPrimarySubinterest,
  storedSubinterests,
}: SubInterestItemProps) => {
  const [isItemSelected, setIsItemSelected] = useState(false);

  const isStoredPrimary =
    storedSubinterests.primary.findIndex(
      (subItem) => subItem._id === subInterestItem._id
    ) !== -1;

  const isStoredOther =
    storedSubinterests.other.findIndex(
      (subItem) => subItem._id === subInterestItem._id
    ) !== -1;

  useEffect(() => {
    if (isStoredPrimary || isStoredOther) {
      setIsItemSelected((prevValue) => !prevValue);
    }
  }, [isStoredOther, isStoredPrimary]);

  useEffect(() => {
    if (isItemSelected) {
      // Selection logic, we handle both newly selected subinterests and existing stored interests

      setSelectedSubinterests((prevSubinterests: SelectedSubInterestType) => {
        // if no primary subinterest selected, add new primary subinterest

        if (prevSubinterests.primary.length === 0) {
          // if subinterest is a stored other subinterest, we add to other subinterest array

          if (isStoredOther) {
            return {
              ...prevSubinterests,
              other: [...prevSubinterests.other, subInterestItem],
            };
          }
          // if subinterest is not a stored other subinterest and selected primary is empty, this will be our new primart subinterest

          return { ...prevSubinterests, primary: [subInterestItem] };
        }

        // if we have primary selected subinterest, we add to other selected subinterest.

        const newOtherSubs = [...prevSubinterests.other];
        if (
          newOtherSubs.findIndex((item) => item._id === subInterestItem._id) ===
          -1
        ) {
          newOtherSubs.push(subInterestItem);
        }
        return {
          ...prevSubinterests,
          other: [...newOtherSubs],
        };
      });
    } else {
      // Unselection logic
      setSelectedSubinterests(
        (prevSubinterests: {
          primary: SubInterestType[];
          other: SubInterestType[];
        }) => {
          if (
            // if primary subinterest exist, remove the primary

            prevSubinterests.primary[0] &&
            prevSubinterests.primary[0]._id === subInterestItem._id
          ) {
            return { ...prevSubinterests, primary: [] };
          }

          // check if its other subinterest, remove the subinterest

          const newOtherSubs = prevSubinterests.other.filter(
            (subinterest) => subinterest._id !== subInterestItem._id
          );

          return { ...prevSubinterests, other: newOtherSubs };
        }
      );
    }
  }, [isItemSelected, setSelectedSubinterests, subInterestItem, isStoredOther]);

  const handleClick = () => {
    setIsItemSelected((previousValue) => !previousValue);
  };

  const backgroundColorClass = isItemSelected
    ? isPrimarySubinterest
      ? "bg-white text-black"
      : "bg-custom-blue-primary"
    : "bg-[#0b2b5a]";

  return (
    <button
      type="button"
      key={subInterestItem._id}
      className={`px-2 py-6 md:px-4 ${backgroundColorClass}`}
      onClick={handleClick}
      disabled={limitReached && !isItemSelected}
    >
      {subInterestItem.name}
    </button>
  );
};

export default SubInterestItem;
