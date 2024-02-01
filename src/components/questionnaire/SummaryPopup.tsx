import React, { useEffect, useRef } from "react";
import useClickOutside from "@/hooks/UseClickOutside";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { usePostQuestionnaireAnswerMutation } from "@/api";
import { clearQuestionnaireData } from "@/redux/features/questionnaire/questionnaireSlice";
import ImageWrapper from "@/atoms/ImageWrapper";
import { QuestionType } from "./types";
import PenIcon from "../../../public/icons/edit-pen-icon.svg";

interface SummaryPopupProps {
  setOpenSummaryPopup: Function;
  setOpenLoadinPopup: Function;
  setScrollToQuestionId: Function;
  setActiveStep: Function;
}

const SummaryPopup = ({
  setOpenSummaryPopup,
  setOpenLoadinPopup,
  setScrollToQuestionId,
  setActiveStep,
}: SummaryPopupProps) => {
  const [postQuestionnaireAnswer, response] =
    usePostQuestionnaireAnswerMutation();

  const storedAnswers = useAppSelector((state) => state.questionnaire.answers);
  const questionData = useAppSelector((state) => state.questionnaire.questions);
  let allQuestions: QuestionType[] = [];

  questionData.forEach((section) => {
    allQuestions = [...allQuestions, ...section.questions];
  });

  const handleCancel = () =>
    setOpenSummaryPopup((prevVal: boolean) => !prevVal);

  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    postQuestionnaireAnswer(storedAnswers);
  };

  useEffect(() => {
    if (response.isSuccess) {
      dispatch(clearQuestionnaireData());
      setOpenLoadinPopup((prevVal: boolean) => !prevVal);
    }
  }, [response, dispatch, setOpenLoadinPopup]);

  const handleEditClick = (questionId: string) => {
    setOpenSummaryPopup((prevVal: boolean) => !prevVal);
    const currentSection = questionData.findIndex((section) => {
      const question = section.questions.find(
        (item) => item._id === questionId
      );
      return !!question;
    });

    setActiveStep(currentSection);
    setScrollToQuestionId(`question-${questionId}`);
  };

  const popupContainerRef: React.RefObject<HTMLDivElement> = useRef(null);

  const higlightBorder = () => {
    if (popupContainerRef.current) {
      popupContainerRef.current.style.boxShadow = "0 0 5px 5px #031a3c";
    }
  };

  useClickOutside(popupContainerRef, higlightBorder);

  const getQuestion = (questionId: string) =>
    allQuestions.find((question) => question._id === questionId);

  const getAnswerDescription = (questionId: string, answer: any) => {
    const question = getQuestion(questionId);
    const answerDescription = question?.options.find(
      (option) => option._id === answer._id
    )?.description;
    return answerDescription || answer.value;
  };

  return (
    <div className="fixed inset-0 z-50 flex animate-fadein flex-col items-center justify-center backdrop-blur-lg">
      <div
        className="relative flex h-[80vh] w-[90vw] flex-col items-center rounded-lg border-[#00a6cb] bg-white p-4 md:w-[90vw] lg:w-[70vw] xl:w-[60vw]"
        style={{ borderWidth: "1px" }}
        ref={popupContainerRef}
      >
        <div className="w-[95%] border-b-[0.5px] border-b-custom-divider-gray p-2">
          <h3 className="text-md text-center font-bold text-[#323232] lg:text-2xl lg:font-medium">
            Summary
          </h3>
        </div>
        <ol className="h-[85%] w-[95%] overflow-y-auto p-4 lg:h-[80%]">
          {storedAnswers.map((item) => (
            <li
              className="m-1 my-2 flex list-decimal items-start justify-around border-b-[1px] border-b-custom-divider-gray py-4 md:m-4"
              key={item._id}
            >
              <div className="w-[90%] md:w-[95%]">
                <h5 className="mb-2 text-base font-semibold text-[#323232] lg:text-lg 2xl:text-xl">
                  {getQuestion(item._id)?.description}
                </h5>
                <ol className="ms-4">
                  {item.options.map((answerItem) => (
                    <li
                      key={
                        answerItem.skillId
                          ? `${answerItem._id}-${answerItem.skillId}`
                          : `${answerItem._id}`
                      }
                    >
                      <div className="my-2 flex w-[full] flex-row">
                        {answerItem.skillId && (
                          <p className="w-[50%] list-disc font-medium text-[#323232]">
                            {answerItem.skillName}
                          </p>
                        )}
                        <p className="list-disc font-bold text-custom-blue-primary">
                          {getAnswerDescription(item._id, answerItem)}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
              <button
                className="flex h-full w-[10%] items-center justify-center md:w-[5%]"
                onClick={() => handleEditClick(item._id)}
                type="button"
              >
                <ImageWrapper
                  src={PenIcon}
                  alt="pen icon, click to edit the answer in the questionnaire"
                  imageSizes="h-[18px] w-[18px]"
                />
              </button>
            </li>
          ))}
        </ol>
        <div className="absolute bottom-5 flex w-full justify-around">
          <button
            className="min-w-[6rem] rounded-full bg-custom-blue-primary p-1 font-medium text-white sm:min-w-[8rem] md:min-w-[10rem]"
            onClick={handleCancel}
            type="button"
          >
            Cancel
          </button>
          <button
            className="min-w-[6rem] rounded-full bg-custom-blue-primary p-1 font-medium text-white sm:min-w-[8rem] md:min-w-[10rem]"
            onClick={handleSubmit}
            type="button"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default SummaryPopup;
