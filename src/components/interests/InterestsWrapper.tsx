"use client";

import React, { useEffect } from "react";
import LoadingSpinner from "@/atoms/loading-spinner/LoadingSpinner";
import {
  useGetInterestsListQuery,
  useGetUserSkillsInterestsQuery,
} from "@/api";
import {
  setInterests,
  setSavedInterests,
} from "@/redux/features/interests/interestSlice";
import { useAppDispatch } from "@/redux/hooks";
import SelectionsPanel from "./selections-panel/SelectionsPanel";
import InterestsContainer from "./InterestsContainer";

const InterestsWrapper = () => {
  const {
    isLoading,
    isSuccess,
    isError: interestsError,
    data: interestData,
  } = useGetInterestsListQuery("");

  const {
    isLoading: isUserDataLoading,
    isSuccess: isUserDataSuccess,
    isError: userDataError,
    data: userData,
    refetch,
  } = useGetUserSkillsInterestsQuery("");

  const dispatch = useAppDispatch();

  // refetch userdata whenever the component mounts
  useEffect(() => {
    refetch();
  }, [refetch]);

  useEffect(() => {
    if (isSuccess) dispatch(setInterests(interestData.data));
  }, [isSuccess, dispatch, interestData?.data]);

  useEffect(() => {
    if (isUserDataSuccess && userData)
      dispatch(setSavedInterests(userData.interests));
  }, [userData, dispatch, isUserDataSuccess]);

  useEffect(() => {
    if (interestsError || userDataError) {
      throw new Error("Network error please try again later");
    }
  }, [interestsError, userDataError]);

  return (
    <div className="relative flex min-h-[75vh] w-full flex-col items-stretch justify-center p-2 md:flex-row lg:p-6 ">
      {(isLoading || isUserDataLoading) && <LoadingSpinner />}
      {isSuccess && isUserDataSuccess && (
        <>
          <SelectionsPanel />
          <InterestsContainer interests={interestData.data} />
        </>
      )}
    </div>
  );
};

export default InterestsWrapper;
