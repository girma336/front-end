import React from "react";
import { poppins } from "@/atoms/fonts";
import SelectedSubinterestItem from "./SelectedSubinterestItem";
import { SubInterestType } from "../types";

interface SelectedSubinterestsProps {
  subInterests: { primary: SubInterestType[]; other: SubInterestType[] };
  interestId: number;
}

const SelectedSubinterests = ({
  subInterests,
  interestId,
}: SelectedSubinterestsProps) => (
  <ul className="my-2 flex w-full flex-row items-center gap-2 overflow-x-auto md:m-auto md:flex-col md:items-start md:gap-0 md:overflow-x-visible">
    {subInterests.primary?.length !== 0 && (
      <h5 className={`text-sm md:my-2 md:text-base ${poppins.className}md:p-2`}>
        PRIMARY
      </h5>
    )}
    {subInterests.primary?.map((subinterest) => (
      <SelectedSubinterestItem
        key={subinterest._id}
        subinterest={subinterest}
        interestId={interestId}
      />
    ))}
    {subInterests.other?.length !== 0 && (
      <h5 className={`text-sm md:my-2 md:text-base ${poppins.className}md:p-2`}>
        SECONDARY
      </h5>
    )}
    {subInterests.other?.map((subinterest) => (
      <SelectedSubinterestItem
        key={subinterest._id}
        subinterest={subinterest}
        interestId={interestId}
      />
    ))}
  </ul>
);

export default SelectedSubinterests;
