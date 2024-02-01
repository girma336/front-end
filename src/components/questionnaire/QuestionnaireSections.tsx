import React, { useState } from "react";
import FormComponent from "./FormComponent";
import LoadingPopup from "./LoadingPopup";
import { QuestionSectionType } from "./types";

interface QuestionsWrapperProps {
  allQuestions: QuestionSectionType[];
  setActiveStep: Function;
  activeStep: number;
}

const QuestionnaireSections = ({
  allQuestions,
  setActiveStep,
  activeStep,
}: QuestionsWrapperProps) => {
  const [openLoadinPopup, setOpenLoadinPopup] = useState(false);

  const forms = allQuestions.map((section) => (
    <div className="flex h-5/6 flex-col items-center justify-center">
      <FormComponent
        questions={section.questions}
        currentSection={section.section}
        setActiveStep={setActiveStep}
        activeStep={activeStep}
        setOpenLoadinPopup={setOpenLoadinPopup}
      />
    </div>
  ));
  return (
    <>
      {forms[activeStep]}
      {openLoadinPopup && <LoadingPopup setOpenPopup={setOpenLoadinPopup} />}
    </>
  );
};

export default QuestionnaireSections;
