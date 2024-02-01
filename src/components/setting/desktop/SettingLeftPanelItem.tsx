import React from "react";
import ImageWrapper from "@/atoms/ImageWrapper";
import { PanelItemType } from "../types";

interface SettingLeftPanelItemProps {
  panelItem: PanelItemType;
  setActiveIndex: Function;
  isActive: boolean;
  index: number;
}

const SettingLeftPanelItem = ({
  panelItem,
  setActiveIndex,
  isActive,
  index,
}: SettingLeftPanelItemProps) => {
  const activeItemTextStyle = isActive
    ? "text-custom-white"
    : "text-custom-left-panel";

  const activeItemIconStyle = isActive
    ? "bg-custom-blue-primary opacity-100"
    : "bg-custom-gray-secondary opacity-30";

  return (
    <button
      type="button"
      onClick={() => setActiveIndex(index)}
      className={`flex w-full items-center font-bold ${activeItemTextStyle} my-2 gap-4`}
    >
      <div className={`rounded-full p-[2px] ${activeItemIconStyle}`}>
        <ImageWrapper
          src={panelItem.img}
          alt={panelItem.text}
          imageSizes="h-4 w-4 md:h-8 md:w-8 rounded-full"
          className="p-1"
        />
      </div>
      {panelItem.text}
    </button>
  );
};
export default SettingLeftPanelItem;
