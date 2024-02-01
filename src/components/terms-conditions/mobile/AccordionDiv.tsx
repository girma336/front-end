import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import { TermsDataType } from "../types";

function AccordionDiv({ termsData }: TermsDataType) {
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const toggleShow = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <div
      className="max-h-80 min-h-40vh w-full overflow-auto px-2"
      id="accordion-container"
    >
      {Object.entries(termsData).map(([key, value], index) => (
        <AccordionItem
          key={key}
          header={key}
          content={value}
          isActive={activeIndex === index}
          onShow={() => {
            toggleShow(index);
          }}
        />
      ))}
    </div>
  );
}
export default AccordionDiv;
