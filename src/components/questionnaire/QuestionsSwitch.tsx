import React from "react";
import { useAppSelector } from "@/redux/hooks";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import SelectionQuestion from "./questions/SelectionQuestion";
import SelectionQuestionSkill from "./questions/SelectionQuestionSkill";
import CheckBoxQuestion from "./questions/CheckBoxQuestion";
import RadioQuestion from "./questions/RadioQuestion";
import DateQuestion from "./questions/DateQuestion";
import { QuestionType } from "./types";

interface QuestionsProps {
  question: QuestionType;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

const QuestionsSwitch = ({ question, register, errors }: QuestionsProps) => {
  const storedAnswers = useAppSelector((state) => state.questionnaire.answers);
  const answerItem = storedAnswers.find((item) => item._id === question._id);

  const labelStyle =
    "text-base lg:text-lg 2xl:text-xl text-[#323232] font-medium mb-2";

  switch (question.questionType) {
    case "date":
      return (
        <DateQuestion
          question={question}
          labelStyle={labelStyle}
          storedAnswer={answerItem}
          register={register}
          errors={errors}
        />
      );
    case "selection":
      return (
        <SelectionQuestion
          question={question}
          labelStyle={labelStyle}
          storedAnswer={answerItem}
          register={register}
          errors={errors}
        />
      );
    case "selectionskill":
      return (
        <SelectionQuestionSkill
          question={question}
          labelStyle={labelStyle}
          storedAnswer={answerItem}
          register={register}
          errors={errors}
        />
      );
    case "checkbox":
      return (
        <CheckBoxQuestion
          question={question}
          labelStyle={labelStyle}
          storedAnswer={answerItem}
          register={register}
          errors={errors}
        />
      );
    case "radio":
      return (
        <RadioQuestion
          question={question}
          labelStyle={labelStyle}
          storedAnswer={answerItem}
          register={register}
          errors={errors}
        />
      );
    default:
      return (
        <div className={labelStyle}>
          Unsupported question type: {question.questionType}
        </div>
      );
  }
};

export default QuestionsSwitch;
