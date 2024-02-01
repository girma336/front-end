"use client";

import React, { useState } from "react";
import GuidesHelpData from "@/data/HelpMenuData";
import HelpHeader from "../HelpHeader";
import SearchInput from "../SearchInput";
import HelpGuidesList from "./HelpGuidesList";

interface HelpGuideSectionProps {
  sectionId: number;
}

const HelpGuideSection = ({ sectionId }: HelpGuideSectionProps) => {
  const [isSearchEntered, setIsSearchEntered] = useState<boolean>(false);
  const sectionData = GuidesHelpData[sectionId];
  return (
    <div className="min-h-[80vh] w-full py-12">
      <HelpHeader />
      <SearchInput
        setIsSearchEntered={setIsSearchEntered}
        isSearchEntered={isSearchEntered}
      />

      {!isSearchEntered && sectionData && (
        <>
          <h4 className="m-auto mb-6 w-[90%] text-center text-xl font-medium lg:text-2xl">
            {sectionData.description}
          </h4>
          <HelpGuidesList guidesData={sectionData.guides} />
        </>
      )}
    </div>
  );
};

export default HelpGuideSection;
