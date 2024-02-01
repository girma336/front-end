import React from "react";
import ImageWrapper from "@/atoms/ImageWrapper";
import SelectCheckIcon from "@public/icons/select-check-icon.svg";
import style from "./style.module.css";

export interface ProfileItemProps {
  profile: {
    id: number;
    name: string;
    description: string;
    value: string;
    icon: string;
  };
  isSelected: boolean;
  handleSelection: Function;
  disabled: boolean;
}

const ProfileItem = ({
  profile,
  isSelected,
  handleSelection,
  disabled,
}: ProfileItemProps) => {
  const selectedStyle = isSelected
    ? "bg-custom-profile-selection-bg text-white border-custom-profile-selection-border border-[5px]"
    : `bg-white text-black ${style["profile-item-border"]}`;

  return (
    <button
      className={`flex w-[276px] flex-col items-center rounded-md p-1 hover:scale-105 md:w-[308px] ${selectedStyle}`}
      type="button"
      onClick={() => handleSelection(profile.value)}
      disabled={disabled}
    >
      <div
        className={`${style["bg-gradient-percent"]} relative h-[50px] w-full rounded-md md:h-[117px]`}
      >
        <div className="absolute -bottom-1/2 flex w-full justify-center">
          <ImageWrapper
            imageSizes={`h-[51px] w-[51px] md:h-[102px] md:w-[102px] ${
              isSelected ? "border-8 border-custom-profile-selection-bg" : ""
            } rounded-full`}
            src={profile.icon}
            alt={profile.name}
          />
        </div>
        {isSelected && (
          <ImageWrapper
            src={SelectCheckIcon}
            alt="Selection Check Icon"
            imageSizes="left-[85%] top-2 absolute h-[24px] w-[24px] md:h-[36px] md:w-[36px] xl:h-[42px] xl:w-[42px]"
          />
        )}
      </div>
      <div className="mb-4 mt-8 w-full text-center md:mt-20">
        <h2 className="mb-2 text-base font-normal md:mb-3 md:text-xl lg:text-2xl">
          {profile.name}
        </h2>
        <p className="px-4 text-center text-sm md:text-base">
          {profile.description}
        </p>
      </div>
    </button>
  );
};

export default ProfileItem;
