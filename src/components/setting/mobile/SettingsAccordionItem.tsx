import React from "react";
import ImageWrapper from "@/atoms/ImageWrapper";
import ArrowForward from "@public/icons/mobile-arrow-forward.svg";
import { PanelItemType } from "../types";
import PersonalSetting from "../PersonalSetting";
import PrivacySetting from "../PrivacySetting";
import NotificationSetting from "../NotificationSetting";

interface SettingsAccordionItemProps {
  menuItem: PanelItemType;
  isActive: boolean;
  setActiveIndex: Function;
  index: number;
}

const SettingsAccordionItem = ({
  menuItem,
  isActive,
  setActiveIndex,
  index,
}: SettingsAccordionItemProps) => {
  const settingMenus = [
    <PersonalSetting />,
    <PrivacySetting />,
    <NotificationSetting />,
  ];
  const activeItemIconStyle = isActive
    ? "bg-custom-blue-primary opacity-100"
    : "opacity-20 bg-custom-gray-secondary";

  const handleItemClick = () => {
    setActiveIndex((prevIndex: number) => (prevIndex === index ? -1 : index));
  };

  return (
    <div className="mx-auto w-11/12 border-b border-b-custom-divider-gray py-4">
      <button
        className="relative mb-4 flex w-full flex-row items-center justify-between"
        type="button"
        onClick={handleItemClick}
      >
        <div className="flex w-11/12 items-center gap-4">
          <ImageWrapper
            src={menuItem.img}
            alt={menuItem.text}
            imageSizes={`h-8 w-8 rounded-full ${activeItemIconStyle}`}
            className="p-1"
          />
          <h3 className="text-lg font-bold">{menuItem.text}</h3>
        </div>

        <ImageWrapper
          src={ArrowForward}
          alt="Forward Icon"
          imageSizes={`h-6 w-6 transform ${isActive ? "rotate-90" : ""}`}
        />
      </button>

      {isActive && (
        <div className="min-h-0 animate-expand-slow overflow-hidden">
          {settingMenus[index]}
        </div>
      )}
    </div>
  );
};

export default SettingsAccordionItem;
