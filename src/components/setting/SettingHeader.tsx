import React from "react";
import { roboto, inter } from "@/atoms/fonts";

const SettingHeader = () => (
  <div className="pb-4">
    <h1
      className={`pt-12 text-2xl font-medium tracking-wide text-custom-white md:font-semibold ${roboto.className}`}
    >
      Account Settings
    </h1>

    <p
      className={`hidden py-2 text-xs  font-normal tracking-wide text-custom-white md:block ${inter.className}`}
    >
      Change your profile and account settings.
    </p>
  </div>
);

export default SettingHeader;
