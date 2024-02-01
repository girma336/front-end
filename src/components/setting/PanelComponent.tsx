import React, { useState } from "react";
import Image from "next/image";
import ArrowForward from "@public/icons/mobile-arrow-forward.svg";
import PersonalSetting from "./PersonalSetting";
import PrivacySetting from "./PrivacySetting";
import NotificationSetting from "./NotificationSetting";
import { PanelItemType } from "./types";

interface PanelComponentProps {
  panelItem: PanelItemType;
  setActiveIndex: Function;
  isActive: boolean;
  index: number;
}

const PanelComponent = ({
  panelItem,
  setActiveIndex,
  isActive,
  index,
}: PanelComponentProps) => {
  const panels = [
    <PersonalSetting />,
    <PrivacySetting />,
    <NotificationSetting />,
  ];
  const [toggle, setToggle] = useState(false);
  const [rotate, setRotate] = useState(false);

  const activeItemStyle = isActive
    ? "text-custom-white"
    : "text-custom-left-panel";

  return (
    <button
      type="button"
      onClick={() => setActiveIndex(index)}
      className="w-full"
    >
      <div className="mb-6 flex w-full cursor-pointer items-center gap-2.5 border-2">
        <div
          className={`rounded-full p-2 ${
            isActive
              ? "bg-custom-blue-primary text-custom-white"
              : "bg-custom-left-panel text-custom-left-panel"
          } `}
        >
          <Image src={panelItem.img} alt={panelItem.text} />
        </div>
        <div className="flex w-full items-center justify-between">
          <h4
            className={`text-xl font-bold tracking-widest hover:text-custom-white md:text-sm lg:text-xl ${activeItemStyle}`}
          >
            {panelItem.text}
          </h4>
          <Image
            src={ArrowForward}
            alt="Forward Icon"
            className={`block transform md:hidden ${rotate ? "rotate-90" : ""}`}
            onClick={() => {
              setRotate(!rotate);
              setActiveIndex(index);
              setToggle(!toggle);
            }}
          />
        </div>
      </div>
      {toggle && panels[index]}
    </button>
  );
};

export default PanelComponent;
