"use client";

import React, { useState } from "react";
import { panelLists } from "@/data/SettingPagesData";
import SettingsAccordionItem from "./SettingsAccordionItem";

const SettingMobile = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <main className="min-h-[70vh]">
      {panelLists.map((item, index) => (
        <SettingsAccordionItem
          menuItem={item}
          key={item.id}
          setActiveIndex={setActiveIndex}
          isActive={activeIndex === index}
          index={index}
        />
      ))}
    </main>
  );
};

export default SettingMobile;
