"use client";

import React, { useEffect } from "react";
import LoadingSpinner from "@/atoms/loading-spinner/LoadingSpinner";
import { useGetSkillsListQuery, useGetUserSkillsInterestsQuery } from "@/api";
import { setSkills, setSavedSkills } from "@/redux/features/skills/skillSlice";
import { useAppDispatch } from "@/redux/hooks";
import SelectionsPanel from "./selections-panel/SelectionsPanel";
import SkillsContainer from "./SkillsContainer";

const SkillsWrapper = () => {
  const {
    isLoading,
    isSuccess,
    data: skillData,
    isError: getSkillsError,
  } = useGetSkillsListQuery("");

  const {
    isLoading: isUserDataLoading,
    isSuccess: isUserDataSuccess,
    isError: skillsError,
    data: userData,
    refetch,
  } = useGetUserSkillsInterestsQuery("");

  const dispatch = useAppDispatch();

  // refetch userdata whenever the component mounts
  useEffect(() => {
    refetch();
  }, [refetch]);

  useEffect(() => {
    if (isSuccess) dispatch(setSkills(skillData.data));
  }, [isSuccess, dispatch, skillData?.data]);

  useEffect(() => {
    if (isUserDataSuccess && userData)
      dispatch(setSavedSkills(userData.skills));
  }, [userData, dispatch, isUserDataSuccess]);

  useEffect(() => {
    if (skillsError || getSkillsError) {
      throw new Error("Network error please try again later");
    }
  }, [skillsError, getSkillsError]);

  return (
    <div className="relative flex min-h-[75vh] w-full flex-col items-stretch justify-center p-2 md:flex-row lg:p-6 ">
      {(isLoading || isUserDataLoading) && <LoadingSpinner />}
      {isSuccess && isUserDataSuccess && (
        <>
          <SelectionsPanel />
          <SkillsContainer skills={skillData.data} />
        </>
      )}
    </div>
  );
};

export default SkillsWrapper;
