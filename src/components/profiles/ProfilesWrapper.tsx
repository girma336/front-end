"use client";

import React, { useEffect, useState } from "react";
import profilesData from "@/data/ProfilesData";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { PersistGate } from "redux-persist/integration/react";
import { persistedStore } from "@/redux/store";
import { setUserProfile } from "@/redux/features/userInfo/userInfoSlice";
import { usePostUserRoleMutation } from "@/api";
import LoadingSpinner from "@/atoms/loading-spinner/LoadingSpinner";
import ProfileItem from "./ProfileItem";

const ProfilesWrapper = () => {
  const [postUserRole, response] = usePostUserRoleMutation();

  const appRouter = useRouter();
  const dispatch = useAppDispatch();
  const storedUserRole = useAppSelector((state) => state.userinfo.userProfile);

  const [activeSelection, setActiveSelection] = useState(storedUserRole);

  const handleSelection = (role: string) => {
    setActiveSelection(role);
  };

  const handlePostUserProfile = () => {
    if (activeSelection !== "") {
      postUserRole(activeSelection);
    } else {
      appRouter.push("/interests");
    }
  };

  useEffect(() => {
    if (response.isSuccess) {
      dispatch(setUserProfile(activeSelection));
      appRouter.push("/interests");
    }
  }, [appRouter, response.isSuccess, dispatch, activeSelection]);

  useEffect(() => {
    if (response.error) {
      throw new Error("500 server internal error please try again later");
    }
  }, [response.error]);

  const buttonDisabled = activeSelection === "";
  const buttonDisabledStyle = buttonDisabled ? "opacity-30" : "opacity-100";

  return (
    <PersistGate loading={<LoadingSpinner />} persistor={persistedStore}>
      <div className="h-max w-full p-8">
        <h1 className="my-4 text-center text-lg font-semibold lg:my-6 lg:text-3xl lg:font-medium">
          Choose your profile
        </h1>
        <div className="my-4 flex flex-wrap items-stretch justify-center gap-6 md:gap-14 lg:my-16">
          {profilesData.map((profile) => (
            <ProfileItem
              key={profile.id}
              profile={profile}
              isSelected={activeSelection === profile.value}
              disabled={storedUserRole !== ""}
              handleSelection={handleSelection}
            />
          ))}
        </div>
        <div className="my-12 flex justify-center">
          <button
            type="button"
            className={`h-[34px] w-[200px] rounded-full bg-custom-blue-primary text-center text-base lg:h-[44px] lg:w-[226px] lg:text-lg ${buttonDisabledStyle}`}
            disabled={buttonDisabled}
            onClick={handlePostUserProfile}
          >
            Next
          </button>
        </div>
      </div>
    </PersistGate>
  );
};

export default ProfilesWrapper;
