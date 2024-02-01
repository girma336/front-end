"use client";

import React from "react";
import { roboto } from "@/atoms/fonts";
import { personal } from "@/data/SettingPagesData";
import SettingItems from "./SettingItems";

const PersonalSetting = () => (
  <div className="flex flex-col">
    <div
      className={`md:text-md mb-2 mt-6 hidden  border-spacing-2 border-b border-custom-divider-gray text-lg font-bold tracking-wide text-custom-white md:block lg:text-2xl ${roboto.className}`}
    >
      Personal
    </div>
    {personal.map((item) => (
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
export default PersonalSetting;
