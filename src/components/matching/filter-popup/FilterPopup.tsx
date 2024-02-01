import React, { useRef } from "react";
import useClickOutside from "@/hooks/UseClickOutside";
import { UserData } from "@/data/UserData";
import SkillItem from "./SkillItem";

interface FilterPopupProps {
  closeFilterPopup: Function;
  setSelectedFilters: Function;
  selectedFilters: number[];
}

const FilterPopup = ({
  closeFilterPopup,
  selectedFilters,
  setSelectedFilters,
}: FilterPopupProps) => {
  const userSkills = UserData.skills;
  const popupContainerRef: React.RefObject<HTMLDivElement> = useRef(null);
  useClickOutside(popupContainerRef, closeFilterPopup);

  const storeSelectedFilters = () => {
    closeFilterPopup();
  };

  const resetSelectedFilters = () => {
    setSelectedFilters([]);
  };

  return (
    <div className="fixed inset-0 z-50 flex animate-fadein flex-col items-center justify-center backdrop-blur-sm">
      <div
        className="relative min-h-[60vh] w-[80vw] rounded-lg bg-white px-6 md:w-[70vw] lg:w-[60vw] xl:w-[50vw]"
        ref={popupContainerRef}
      >
        <div className="relative border-b-[0.5px] p-3 text-center">
          <h3 className="m-auto w-[80%] text-lg font-semibold text-custom-gray-primary">
            Please select your skills
          </h3>
        </div>
        <div className="h-[50vh] overflow-auto">
          {userSkills.map((skill) => (
            <SkillItem
              skill={skill}
              key={skill.id}
              setSelectedFilters={setSelectedFilters}
              selectedFilters={selectedFilters}
            />
          ))}
        </div>
        <div className="my-4 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            className="w-[8rem] rounded-full bg-custom-blue-primary p-1 text-white"
            type="button"
            onClick={storeSelectedFilters}
          >
            Filter
          </button>
          <button
            className="w-[8rem] rounded-full bg-custom-search-bar p-1 text-white"
            type="button"
            onClick={resetSelectedFilters}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterPopup;
