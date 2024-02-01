import React from "react";
import SettingDesktop from "./desktop/SettingDesktop";
import SettingMobile from "./mobile/SettingMobile";
import SettingHeader from "./SettingHeader";

const SettingsWrapper = () => (
  <div className="mx-4 pb-24 md:mx-8">
    <div className="my-6 mb-3 flex basis-auto flex-col border-b border-b-custom-divider-gray md:mx-0">
      <SettingHeader />
    </div>
    <div className="hidden md:block">
      <SettingDesktop />
    </div>
    <div className="block md:hidden">
      <SettingMobile />
    </div>
  </div>
);

export default SettingsWrapper;
