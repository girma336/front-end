import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";
import { usePostUserInterestsMutation } from "@/api";
import InterestsItem from "./InterestsItem";
import SelectionMessage from "./SelectionMessage";
import {
  InterestType,
  SelectedInterestsType,
  InterestApiDataType,
} from "./types";

const InterestsContainer = ({ interests }: { interests: InterestType[] }) => {
  const [postUserInterests, response] = usePostUserInterestsMutation();
  const router = useRouter();
  const selectedInterests = useAppSelector(
    (state) => state.interests.selectedInterests
  );

  const combineSubinterests = (interest: SelectedInterestsType) => {
    const interestItem = {
      ...interest,
      subInterests: [
        ...interest.subInterests.primary,
        ...interest.subInterests.other,
      ],
    };
    return interestItem;
  };

  const handleContinue = () => {
    const cleanData: InterestApiDataType[] = [];
    selectedInterests.primary.forEach((item: SelectedInterestsType) => {
      cleanData.push(combineSubinterests(item));
    });
    selectedInterests.other.forEach((item: SelectedInterestsType) => {
      cleanData.push(combineSubinterests(item));
    });
    postUserInterests(cleanData);
  };

  useEffect(() => {
    if (response.isSuccess) {
      router.push("/skills");
    }
  }, [router, response.isSuccess]);

  const findItemInSelectedList = (itemId: number) =>
    selectedInterests.primary.findIndex(
      (interest) => interest._id === itemId
    ) !== -1 ||
    selectedInterests.other.findIndex((interest) => interest._id === itemId) !==
      -1;

  const findPrimaryItem = (itemId: number) => {
    if (selectedInterests.primary.length !== 0)
      return selectedInterests.primary[0]._id === itemId;
    return false;
  };

  const interestLimitReached =
    selectedInterests.primary.length + selectedInterests.other.length === 3;

  return (
    <div className="min-h-full w-full p-2 md:w-[80%] md:p-6 lg:w-[85%]">
      <ul
        className={`grid h-[90%] w-full grid-cols-3 gap-3 md:h-[90%] md:grid-cols-5 md:gap-4 xl:grid-cols-7 `}
      >
        {interests.map((interest) => (
          <InterestsItem
            key={interest._id}
            interest={interest}
            isItemSelected={findItemInSelectedList(interest._id)}
            isPrimary={findPrimaryItem(interest._id)}
            interestLimitReached={interestLimitReached}
          />
        ))}
      </ul>
      <div className="mx-auto my-4 flex w-full flex-col items-center justify-between p-2 md:flex-row">
        <div className="w-full text-center">
          <SelectionMessage
            isLimitReached={interestLimitReached}
            selectedInterests={selectedInterests}
          />
        </div>

        <button
          className={`w-[8rem] rounded-xl bg-custom-blue-primary p-2 md:w-[10rem] ${
            interestLimitReached ? "opacity-100" : "opacity-20"
          }`}
          disabled={!interestLimitReached}
          onClick={handleContinue}
          type="button"
        >
          Continue{" "}
        </button>
      </div>
    </div>
  );
};
export default InterestsContainer;
