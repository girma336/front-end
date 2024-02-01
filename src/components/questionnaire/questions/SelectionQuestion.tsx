import React from "react";
import { useAppDispatch } from "@/redux/hooks";
import { addAnswers } from "@/redux/features/questionnaire/questionnaireSlice";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { QuestionType, AnswerType } from "../types";

interface OptionQuestionsProps {
  question: QuestionType;
  labelStyle: string;
  storedAnswer: AnswerType | undefined;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

const SelectionQuestion = ({
  question,
  labelStyle,
  storedAnswer,
  register,
  errors,
}: OptionQuestionsProps) => {
  const getStoredAnswerValue = () =>
    storedAnswer ? storedAnswer.options[0].value : "";

  // add or update answer for the question in redux store

  const dispatch = useAppDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const index = e.target.selectedIndex;
    const answerId = e.target.options[index].id;
    if (answerId !== "") {
      dispatch(
        addAnswers({
          _id: question._id,
          questionType: question.questionType,
          options: [
            {
              _id: answerId,
              value: e.target.value,
            },
          ],
        })
      );
    }
  };

  return (
    <div id={`question-${question._id}`} className="animate-fadein">
      <label className={`flex flex-col ${labelStyle}`} htmlFor="multi-select-1">
        {question.description}
      </label>
      <div className="border-#899899 min-w-[10rem] rounded-lg border-2 px-1 sm:min-w-[13rem] md:w-[20rem]">
        <select
          id={`multi-select-question${question._id}`}
          className="w-full whitespace-break-spaces bg-transparent p-2 text-sm text-[#323232] before:whitespace-break-spaces lg:text-base 2xl:text-lg"
          {...register(question.name, { required: true })}
          onChange={handleChange}
          value={getStoredAnswerValue()}
        >
          <option value="">Select an option</option>
          {question.options.map((option) => (
            <option key={option._id} id={`${option._id}`} value={option.value}>
              {option.description}
            </option>
          ))}
        </select>
      </div>
      {errors[`${question.name}`] && (
        <span className="cursor-default text-sm text-red-600">
          * This field is required
        </span>
      )}
    </div>
  );
};

export default SelectionQuestion;
