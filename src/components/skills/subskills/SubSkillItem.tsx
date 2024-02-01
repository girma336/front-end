"use client";

import React, { useEffect, useState } from "react";
import { SelectedSubSkillType, SubSkillType } from "../types";

interface SubSkillItemProps {
  subSkillItem: SubSkillType;
  limitReached: boolean;
  setSelectedSubskills: Function;
  isPrimarySubskill: boolean;
  storedSubskills: SelectedSubSkillType;
}

const SubSkillItem = ({
  subSkillItem,
  limitReached,
  setSelectedSubskills,
  isPrimarySubskill,
  storedSubskills,
}: SubSkillItemProps) => {
  const [isItemSelected, setIsItemSelected] = useState(false);

  const isStoredPrimary =
    storedSubskills.primary.findIndex(
      (subItem) => subItem._id === subSkillItem._id
    ) !== -1;

  const isStoredOther =
    storedSubskills.other.findIndex(
      (subItem) => subItem._id === subSkillItem._id
    ) !== -1;

  useEffect(() => {
    if (isStoredPrimary || isStoredOther) {
      setIsItemSelected((prevValue) => !prevValue);
    }
  }, [isStoredOther, isStoredPrimary]);

  useEffect(() => {
    if (isItemSelected) {
      // Selection logic, we handle both newly selected subskills and existing stored skills

      setSelectedSubskills((prevSubskills: SelectedSubSkillType) => {
        // if no primary subskill selected, add new primary subskill

        if (prevSubskills.primary.length === 0) {
          // if subskill is a stored other subskill, we add to other subskill array

          if (isStoredOther) {
            return {
              ...prevSubskills,
              other: [...prevSubskills.other, subSkillItem],
            };
          }
          // if subskill is not a stored other subskill and selected primary is empty, this will be our new primart subskill

          return { ...prevSubskills, primary: [subSkillItem] };
        }

        // if we have primary selected subskill, we add to other selected subskill.

        const newOtherSubs = [...prevSubskills.other];
        if (
          newOtherSubs.findIndex((item) => item._id === subSkillItem._id) === -1
        ) {
          newOtherSubs.push(subSkillItem);
        }
        return {
          ...prevSubskills,
          other: [...newOtherSubs],
        };
      });
    } else {
      // Unselection login
      setSelectedSubskills(
        (prevSubskills: { primary: SubSkillType[]; other: SubSkillType[] }) => {
          if (
            // if primary subskill exist, remove the primary

            prevSubskills.primary[0] &&
            prevSubskills.primary[0]._id === subSkillItem._id
          ) {
            return { ...prevSubskills, primary: [] };
          }

          // check if its other subskill, remove the subskill

          const newOtherSubs = prevSubskills.other.filter(
            (subskill) => subskill._id !== subSkillItem._id
          );

          return { ...prevSubskills, other: newOtherSubs };
        }
      );
    }
  }, [isItemSelected, setSelectedSubskills, subSkillItem, isStoredOther]);

  const handleClick = () => {
    setIsItemSelected((previousValue) => !previousValue);
  };

  const backgroundColorClass = isItemSelected
    ? isPrimarySubskill
      ? "bg-white text-black"
      : "bg-custom-blue-primary"
    : "bg-[#0b2b5a]";

  return (
    <button
      type="button"
      key={subSkillItem._id}
      className={`px-2 py-6 md:px-4 ${backgroundColorClass}`}
      onClick={handleClick}
      disabled={limitReached && !isItemSelected}
    >
      {subSkillItem.name}
    </button>
  );
};

export default SubSkillItem;
