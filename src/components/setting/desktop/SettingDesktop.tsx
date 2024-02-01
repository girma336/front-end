"use client";

import React, { useState } from "react";
import PersonalSetting from "@/components/setting/PersonalSetting";
import PrivacySetting from "@/components/setting/PrivacySetting";
import NotificationSetting from "@/components/setting/NotificationSetting";
import SettingLeftPanel from "./SettingLeftPanel";

const SettingDesktop = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = [
    <PersonalSetting />,
    <PrivacySetting />,
    <NotificationSetting />,
  ];

  return (
    <div className="flex min-h-[600px] md:justify-between md:gap-8">
      <div className="mx-4 w-full md:mx-0 md:w-1/4">
        <SettingLeftPanel
          setActiveIndex={setActiveIndex}
          activeIndex={activeIndex}
        />
      </div>
      <main className="w-3/4">{settings[activeIndex]}</main>
    </div>
  );
};
export default SettingDesktop;
