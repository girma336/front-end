import React, { useState } from "react";
import HelpGuideItem from "./HelpGuideItem";
import { QAType } from "../types";

interface HelpMenuDetailsProps {
  guidesData: QAType[];
}

const HelpGuidesList = ({ guidesData }: HelpMenuDetailsProps) => {
  const [openGuideId, setOpenGuideId] = useState<number | null>(null);

  const handleToggleGuide = (guideId: number) => {
    setOpenGuideId((prevId) => (prevId === guideId ? null : guideId));
  };

  return (
    <ul className="mx-auto my-8 flex w-[90vw] flex-col items-center justify-start gap-4 md:w-[80vw] lg:w-[65vw]">
      {guidesData.map((guide) => (
        <HelpGuideItem
          key={guide.id}
          guide={guide}
          isOpen={openGuideId === guide.id}
          onToggle={handleToggleGuide}
        />
      ))}
    </ul>
  );
};

export default HelpGuidesList;
