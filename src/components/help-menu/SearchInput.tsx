import React, { useState } from "react";
import ImageWrapper from "@/atoms/ImageWrapper";
import GuidesHelpData from "@/data/HelpMenuData";
import SearchIcon from "@public/icons/search-icon-light.svg";
import CloseIcon from "@public/icons/close-icon.svg";
import HelpGuidesList from "./help-section/HelpGuidesList";
import { QAType } from "./types";

interface SearchInputProps {
  isSearchEntered: boolean;
  setIsSearchEntered: Function;
}

const SearchInput = ({
  setIsSearchEntered,
  isSearchEntered,
}: SearchInputProps) => {
  const [filteredData, setFilteredData] = useState<QAType[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const allGuideItems: QAType[] = [];
    GuidesHelpData.forEach((section) => allGuideItems.push(...section.guides));

    const searchString = e.target.value.toLowerCase();
    setIsSearchEntered(true);
    if (searchString.length === 0) {
      setFilteredData([]);
      setIsSearchEntered((prevValue: boolean) => !prevValue);
    } else {
      const filteredQA = allGuideItems.filter((item) => {
        const titleString = item.title.toLowerCase();
        return titleString.includes(searchString);
      });
      setFilteredData(filteredQA);
    }
  };

  const handleReset = () => {
    const searchInputField = document.getElementById(
      "search-input-field"
    ) as HTMLInputElement;
    searchInputField.value = "";
    setIsSearchEntered(false);
    setFilteredData([]);
  };

  return (
    <div className="my-8 w-[100%]">
      <div className="relative mx-auto w-[90%] md:w-[75%] lg:w-[65%] ">
        <input
          placeholder="Type here"
          className="h-9 w-full rounded border border-search-border bg-custom-search-bar p-4 pl-10 text-sm md:text-base lg:h-14"
          onChange={handleInputChange}
          id="search-input-field"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <ImageWrapper
            src={SearchIcon}
            alt="Search icon"
            imageSizes="h-[16px] w-[16px] lg:h-[20px] w-[20px]"
          />
        </div>
        {isSearchEntered && (
          <button
            className="absolute inset-y-0 right-0 flex items-center pr-3"
            type="button"
            onClick={handleReset}
          >
            <ImageWrapper
              src={CloseIcon}
              alt="Close search icon"
              imageSizes="h-[16px] w-[16px] lg:h-[20px] w-[20px]"
            />
          </button>
        )}
      </div>
      {filteredData.length !== 0 && (
        <HelpGuidesList guidesData={filteredData} />
      )}
      {isSearchEntered && filteredData.length === 0 && (
        <h6 className="my-8 animate-fadein text-center text-xl font-bold lg:text-2xl">
          No result found
        </h6>
      )}
    </div>
  );
};

export default SearchInput;
