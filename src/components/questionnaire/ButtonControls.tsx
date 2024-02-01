import React from "react";
import { UseFormHandleSubmit, FieldValues } from "react-hook-form";

interface StepperControlsProps {
  activeStep: number;
  handlePrevious: React.MouseEventHandler<HTMLButtonElement>;
  handleNext: UseFormHandleSubmit<FieldValues, undefined>;
}

const ButtonControls = ({
  activeStep,
  handlePrevious,
  handleNext,
}: StepperControlsProps) => {
  const isAtStart = activeStep === 0;
  const isAtEnd = activeStep === 3;

  const buttonStyle =
    "bg-custom-blue-primary text-white font-medium min-w-[5rem] min-w-[6rem] sm:min-w-[8rem] md:min-w-[10rem] p-1 rounded-full";

  return (
    <div className="absolute bottom-5 left-[5%] mb-4 flex w-[90%] justify-between">
      <button
        type="button"
        disabled={isAtStart}
        onClick={handlePrevious}
        className={`${buttonStyle} disabled:opacity-40`}
      >
        Previous
      </button>

      <button type="submit" onClick={() => handleNext} className={buttonStyle}>
        {isAtEnd ? "Submit" : "Next"}
      </button>
    </div>
  );
};

export default ButtonControls;
