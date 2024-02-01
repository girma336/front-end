"use client";

import React from "react";
import { roboto } from "@/atoms/fonts";
import { privacy } from "@/data/SettingPagesData";
import SettingItems from "./SettingItems";

const PrivacySetting = () => (
  <div className="flex flex-col">
    <div
      className={`md:text-md mb-2 mt-6 hidden border-b border-custom-divider-gray text-lg font-bold tracking-wide text-custom-white md:block lg:text-2xl ${roboto.className}`}
    >
      Privacy
    </div>
    {privacy.map((item) => (
      <SettingItems
        key={item.id}
        id={item.id}
        title={item.title}
        question={item.question}
        chosenMenu={item.chosenMenu}
        answer={item.answer}
      />
    ))}
  </div>
);

export default PrivacySetting;
