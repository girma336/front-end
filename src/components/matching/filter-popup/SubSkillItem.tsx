import React from "react";
import ImageWrapper from "@/atoms/ImageWrapper";
import FilterCrossIcon from "@public/icons/filter-cross-icon.svg";
import FilterCheckMarkIcon from "@public/icons/filter-checkmark-icon.svg";

interface SubSkillItemProps {
  subSkill: { id: number; description: string };
  setSelectedFilters: Function;
  selectedFilters: number[];
}

const SubSkillItem = ({
  subSkill,
  setSelectedFilters,
  selectedFilters,
}: SubSkillItemProps) => {
  const isStoredValue = (id: number) => {
    if (selectedFilters) return !!selectedFilters.find((item) => item === id);
    return false;
  };

  const handleClick = () => {
    const subskillId = subSkill.id;

    const isSelected = isStoredValue(subskillId);

    setSelectedFilters((prevValue: number[]) => {
      if (isSelected) {
        return prevValue.filter((item) => item !== subskillId);
      }
      return [...prevValue, subskillId];
    });
  };

  return (
    <li className="my-2 text-custom-gray-primary">
      <button
        type="button"
        key={subSkill.id}
        className={`mr-4 flex items-center justify-center gap-5 border-[0.5px] border-gray-300 p-3 px-6 ${
          isStoredValue(subSkill.id)
            ? "bg-custom-search-bar text-white hover:bg-custom-search-bar"
            : "bg-white text-black"
        } rounded-full text-sm hover:bg-[#D6E7FF] lg:text-base`}
        onClick={handleClick}
      >
        {subSkill.description}
        <div>
          {isStoredValue(subSkill.id) ? (
            <ImageWrapper
              src={FilterCheckMarkIcon}
              alt="Filter Check Mark Icon"
              imageSizes="h-[12px] w-[12px] lg:h-[16px] lg:w-[16px]"
            />
          ) : (
            <ImageWrapper
              src={FilterCrossIcon}
              alt="Filter Cross Icon"
              imageSizes="h-[12px] w-[12px] lg:h-[16px] lg:w-[16px]"
            />
          )}
        </div>
      </button>
    </li>
  );
};

export default SubSkillItem;
