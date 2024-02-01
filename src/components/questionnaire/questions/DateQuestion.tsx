import React from "react";
import { useAppDispatch } from "@/redux/hooks";
import { addAnswers } from "@/redux/features/questionnaire/questionnaireSlice";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { AnswerType, QuestionType } from "../types";

interface DateQuestionProps {
  question: QuestionType;
  labelStyle: string;
  storedAnswer: AnswerType | undefined;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

const DateQuestion = ({
  question,
  labelStyle,
  storedAnswer,
  register,
  errors,
}: DateQuestionProps) => {
  // set maximum date selectable. currently maximum date is present date

  const maxDate = new Date().toISOString().split("T")[0];
  const dispatch = useAppDispatch();

  const storedValue = () => (storedAnswer ? storedAnswer.options[0].value : "");

  // add or update answer for the question in redux store
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      addAnswers({
        _id: question._id,
        questionType: question.questionType,
        options: [{ value: e.target.value, _id: "0" }],
      })
    );
  };

  return (
    <div id={`question-${question._id}`} className="animate-fadein">
      <label className={`flex flex-col ${labelStyle}`} htmlFor="date-picker">
        {question.description}
      </label>
      <div className="border-#899899 min-w-[10rem] rounded-lg border-2 px-1 sm:min-w-[13rem] md:w-[20rem]">
        <input
          type="date"
          id={`date-picker-${question.name}`}
          className="w-full p-2 text-sm text-[#323232] lg:text-base 2xl:text-lg"
          max={maxDate}
          {...register(question.name, {
            required: true,
          })}
          onChange={handleChange}
          value={storedValue()}
        />
      </div>
      {errors[`${question.name}`] && (
        <p className="cursor-default text-sm text-red-600">
          * This field is required
        </p>
      )}
    </div>
  );
};

export default DateQuestion;
