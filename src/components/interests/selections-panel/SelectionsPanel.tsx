"use client";

import React, { useEffect, useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import { poppins } from "@/atoms/fonts";
import SelectedInterest from "./SelectedInterest";
import SelectedSubinterests from "./SelectedSubinterests";
import { SubInterestType } from "../types";

const SelectionsPanel = () => {
  const userInterests = useAppSelector(
    (state) => state.interests.selectedInterests
  );

  const selectedInterests = [...userInterests.primary, ...userInterests.other];
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [subInterests, setSubInterests] = useState<{
    other: SubInterestType[];
    primary: SubInterestType[];
  }>({ primary: [], other: [] });
  const [activeInterestId, setActiveInterestId] = useState(0);

  useEffect(() => {
    setActiveIndex(selectedInterests.length - 1);
  }, [selectedInterests.length]);

  return (
    <div className="w-full bg-transparent px-2 md:max-w-[30%] md:bg-custom-blue-light lg:max-w-[20%]">
      <div className="grid grid-cols-2 gap-2 md:m-4 md:grid-cols-1">
        <div className="mt-1 bg-custom-blue-light p-1 md:bg-transparent">
          <h3
            className={`my-2 text-xs md:text-xl xl:text-2xl ${poppins.className} md:border-b-[0.5px] md:border-b-[#8C9399] md:p-2`}
          >
            INTERESTS
          </h3>
          <ul className="my-2 flex w-full flex-row items-center gap-2 overflow-x-auto md:m-auto md:flex-col md:items-start md:gap-0 md:overflow-x-visible">
            {selectedInterests.map((category, index) => (
              <SelectedInterest
                key={category._id}
                category={category}
                setSubinterests={setSubInterests}
                setActiveIndex={setActiveIndex}
                setActiveInterestId={setActiveInterestId}
                isActiveItem={activeIndex === index}
                itemIndex={index}
                subInterests={category.subInterests}
              />
            ))}
          </ul>
        </div>
        <div className="mt-1 bg-custom-blue-light p-1 md:bg-transparent">
          <h3
            className={`my-2 text-xs md:text-xl xl:text-2xl ${poppins.className} md:border-b-[0.5px] md:border-b-[#8C9399] md:p-2`}
          >
            SUB-INTERESTS
          </h3>
          <SelectedSubinterests
            subInterests={subInterests}
            interestId={activeInterestId}
          />
        </div>
      </div>
    </div>
  );
};

export default SelectionsPanel;
