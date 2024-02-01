import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import QuestionsSwitch from "./QuestionsSwitch";
import ButtonControls from "./ButtonControls";
import SummaryPopup from "./SummaryPopup";
import { QuestionType } from "./types";

interface FormComponentProps {
  questions: QuestionType[];
  setActiveStep: Function;
  activeStep: number;
  currentSection: string;
  setOpenLoadinPopup: Function;
}

const FormComponent = ({
  questions,
  setActiveStep,
  activeStep,
  currentSection,
  setOpenLoadinPopup,
}: FormComponentProps) => {
  const [openSummaryPopup, setOpenSummaryPopup] = useState(false);
  const [scrollToQuestionId, setScrollToQuestionId] = useState("");

  const formContainerRef = useRef<HTMLFormElement>(null);

  // function to scroll to top of the container
  const scrollToTop = () => {
    if (formContainerRef.current) formContainerRef.current.scrollTo({ top: 0 });
  };

  // scroll to top of the form when rendered
  useEffect(() => {
    scrollToTop();
  }, [activeStep]);

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();

  // remove current step styling in the stepper component

  const handlePrevious = () => {
    setActiveStep((prevValue: number) => prevValue - 1);
    const stepperItem = document.getElementById(
      `questionnaire-section-${currentSection}`
    );
    stepperItem?.classList.remove("active-link");
  };

  React.useEffect(() => {
    const subscription = watch((value) => value);
    return () => subscription.unsubscribe();
  }, [watch]);

  const handleNext = () => {
    const isAtEnd = activeStep < 3;
    if (isAtEnd) {
      setActiveStep((prevValue: number) => prevValue + 1);
    } else {
      setOpenSummaryPopup((prevVal) => !prevVal);
    }
  };

  // add active styling to current section in the stepper

  useEffect(() => {
    const stepperItem = document.getElementById(
      `questionnaire-section-${currentSection}`
    );
    stepperItem?.classList.add("active-link");
  }, [currentSection]);

  useEffect(() => {
    if (scrollToQuestionId !== "") {
      const question = document.getElementById(scrollToQuestionId);
      question?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [scrollToQuestionId]);

  return (
    <>
      <form
        className="h-[90%] w-[90%] overflow-y-auto md:p-4 lg:p-8"
        onSubmit={handleSubmit(handleNext)}
        ref={formContainerRef}
        id={`form-${activeStep}`}
      >
        {questions.map((question: any, index) => (
          <div key={index} className="mb-4 md:mb-10">
            <QuestionsSwitch
              question={question}
              register={register}
              errors={errors}
            />
          </div>
        ))}
        <ButtonControls
          activeStep={activeStep}
          handlePrevious={handlePrevious}
          handleNext={handleSubmit}
        />
      </form>
      {openSummaryPopup && (
        <SummaryPopup
          setOpenSummaryPopup={setOpenSummaryPopup}
          setOpenLoadinPopup={setOpenLoadinPopup}
          setScrollToQuestionId={setScrollToQuestionId}
          setActiveStep={setActiveStep}
        />
      )}
    </>
  );
};

export default FormComponent;
