import React from "react";
import { randomColors } from "@/data/MatchingData";
import { MatchingDataType } from "./types";
import Chart from "./Chart";

interface CompanyInvestorProps {
  data: MatchingDataType[];
  title: string;
}

let counter = 0;
function CompanyInvestor({ data, title }: CompanyInvestorProps) {
  return (
    <div className="flex flex-col items-center rounded-lg bg-[#113160] p-4">
      <h3 className="mb-2 w-[90%] border-b-[0.5px] border-[#A0B4AF] py-2 text-center text-xl font-medium text-white sm:text-2xl">
        {title}
      </h3>
      <ul className="mb-4 flex w-full flex-col items-center justify-center rounded-lg p-4">
        {data.map((item) => {
          counter += 1;
          const colorIndex = counter % randomColors.length;
          const color = randomColors[colorIndex];
          return (
            <li
              key={item.name}
              className="m-1 flex w-full items-center justify-center gap-2 md:gap-4"
            >
              <span className="w-[40px] rounded-full bg-white p-1 text-center text-xs text-black md:text-sm  lg:w-[35px] lg:text-base">
                {item.total}
              </span>

              <h2 className="text-white-500 mb-2 text-lg font-medium">
                {item.name}
              </h2>
              <Chart percentage={item.percentage} color={color} />
            </li>
          );
        })}
      </ul>
      <div className="flex w-full justify-center">
        <button
          className="rounded-lg bg-custom-blue-primary px-6 py-2 font-semibold"
          type="button"
        >
          Total = $20,000
        </button>
      </div>
    </div>
  );
}

export default CompanyInvestor;
