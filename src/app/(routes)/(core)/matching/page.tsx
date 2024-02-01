"use client";

import React, { useCallback, useMemo, useState } from "react";
import Image from "next/image";
import { Popup, CompanyInvestor } from "@/components";
import { companies, investors } from "@/data/MatchingData";
import { MatchingDataType } from "@/components/matching/types";
import DownArrowIcon from "@public/icons/down-arrow-light.svg";
import FilterIcon from "@public/icons/mi_filter.svg";
import FilterPopup from "@/components/matching/filter-popup/FilterPopup";

function MatchingPage() {
  const [popupVisible, setPopupVisible] = useState(true);
  const [selectedFilters, setSelectedFilters] = useState<number[]>([]);
  const [openFilterPopup, setOpenFilterPopup] = useState<boolean>(false);

  const filterMatchingData = useCallback(
    (matchingData: MatchingDataType[]) => {
      if (selectedFilters.length === 0) return matchingData;
      const filteredData = matchingData.filter((item) =>
        selectedFilters.includes(item.skills[0].subskills[0].id)
      );
      return filteredData;
    },
    [selectedFilters]
  );

  const handleFilterClick = () => {
    setOpenFilterPopup((prevValue) => !prevValue);
  };

  const closeFilterPopup = () => {
    setOpenFilterPopup(false);
  };

  const filteredCompanies = useMemo(
    () => filterMatchingData(companies),
    [filterMatchingData]
  );

  const filteredInvestors = useMemo(
    () => filterMatchingData(investors),
    [filterMatchingData]
  );

  return (
    <div className="m-auto flex h-full w-[90%] flex-col lg:flex-row">
      <div className="relative flex min-h-full w-full flex-col items-center justify-center">
        <div className="flex w-full flex-row items-center justify-center lg:pt-14">
          <hr className="mb-1 h-1 w-[30%] border-t-[0.5px] border-custom-divider-gray md:w-[45%]" />
          <div className="mx-2 flex items-center md:mx-4">
            <h1 className="mr-1 text-xl font-semibold text-white md:mr-2 md:text-2xl">
              Matches
            </h1>
            <Image
              src={DownArrowIcon}
              alt="down arrow icon svg"
              width={14}
              height={14}
            />
          </div>
          <hr className="mb-1 h-1 w-[30%] border-t-[0.5px] border-custom-divider-gray md:w-[45%]" />
        </div>
        <div className="my-4 flex min-h-[80%] w-full flex-col items-center">
          <div className="flex w-full justify-end">
            <button
              className="text-white-500 flex text-sm lg:text-base"
              type="button"
              onClick={handleFilterClick}
            >
              <Image
                src={FilterIcon}
                alt="filter icon"
                width={22}
                height={22}
                className="mx-1"
              />
              Filter
            </button>
          </div>

          <div className="m-2 grid w-full grid-cols-1 gap-2 p-4 lg:grid-cols-2 lg:gap-6">
            <CompanyInvestor
              // data={filterMatchingData(companies)}
              data={filteredCompanies}
              title="Company"
            />
            <CompanyInvestor
              // data={filterMatchingData(investors)}
              data={filteredInvestors}
              title="Investor"
            />
          </div>
          <div className="flex w-full justify-center">
            <button
              className="rounded-lg bg-custom-blue-primary px-6 py-2 font-semibold"
              type="button"
            >
              Balance = $20,000
            </button>
          </div>
        </div>
        {popupVisible && <Popup onClose={() => setPopupVisible(false)} />}
        {openFilterPopup && (
          <FilterPopup
            closeFilterPopup={closeFilterPopup}
            setSelectedFilters={setSelectedFilters}
            selectedFilters={selectedFilters}
          />
        )}
      </div>
    </div>
  );
}

export default MatchingPage;
