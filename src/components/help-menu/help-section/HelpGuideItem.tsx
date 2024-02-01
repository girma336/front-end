import React from "react";
import ImageWrapper from "@/atoms/ImageWrapper";
import CollapseIcon from "@public/icons/collapse-icon.svg";

import { QAType } from "../types";

interface HelpGuideItemProps {
  guide: QAType;
  isOpen: boolean;
  onToggle: (guideId: number) => void;
}

const HelpGuideItem = ({ guide, isOpen, onToggle }: HelpGuideItemProps) => (
  <li
    key={guide.id}
    className="w-full animate-fadein rounded-lg bg-white px-4 py-2 text-[#085179]"
  >
    <div className="w-full">
      <button
        type="button"
        className="flex w-full items-center justify-between"
        onClick={() => onToggle(guide.id)}
      >
        <h2 className="text-left text-sm font-semibold lg:text-lg">
          {guide.title}
        </h2>
        <ImageWrapper
          src={CollapseIcon}
          alt="Collapse Icon"
          imageSizes="h-[18px] w-[18px]"
        />
      </button>
      {isOpen && (
        <p className="mt-2 animate-expand-slow border-t-2 py-2">
          {guide.description}
        </p>
      )}
    </div>
  </li>
);

export default HelpGuideItem;
