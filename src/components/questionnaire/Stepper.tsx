import React from "react";

interface StepperProps {
  titles: string[];
}

function Stepper({ titles }: StepperProps) {
  const separatorHeight = "95%";

  return (
    <div className="relative flex h-full flex-col justify-between pe-4">
      <div
        className="absolute left-0 top-4 mx-4 border-s-2 border-custom-blue-primary opacity-30"
        style={{ height: separatorHeight }}
      />
      {titles.map((item, index) => (
        <div id={`questionnaire-section-${item}`} key={item}>
          <div className="flex items-center">
            <span className="me-3 flex h-[24px] w-[24px] items-center justify-center rounded-full bg-custom-blue-primary p-4 text-sm font-bold text-custom-white opacity-60">
              {index + 1}
            </span>
            <h5 className="hidden text-lg font-semibold text-custom-blue-primary opacity-60 md:inline">
              {item}
            </h5>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Stepper;
