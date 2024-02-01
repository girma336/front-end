import React from "react";
import { panelLists } from "@/data/SettingPagesData";
import SettingLeftPanelItem from "./SettingLeftPanelItem";

interface SettingLeftPanelProps {
  setActiveIndex: Function;
  activeIndex: number;
}

const SettingLeftPanel = ({
  setActiveIndex,
  activeIndex,
}: SettingLeftPanelProps) => (
  <div className="flex shrink-0 grow basis-auto flex-col items-start text-lg">
    {panelLists.map((panelItem, index) => (
      <SettingLeftPanelItem
        key={panelItem.id}
        panelItem={panelItem}
        setActiveIndex={setActiveIndex}
        isActive={index === activeIndex}
        index={index}
      />
    ))}
  </div>
);

export default SettingLeftPanel;
