import React from "react";
import { useAppDispatch } from "@/redux/hooks";
import {
  addAnswers,
  removeAnswer,
} from "@/redux/features/questionnaire/questionnaireSlice";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { QuestionType, AnswerType } from "../types";

interface CheckBoxQuestionProps {
  question: QuestionType;
  labelStyle: string;
  storedAnswer: AnswerType | undefined;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

const CheckBoxQuestion = ({
  question,
  labelStyle,
  storedAnswer,
  register,
  errors,
}: CheckBoxQuestionProps) => {
  const isStoredValue = (id: string) =>
    storedAnswer
      ? !!storedAnswer.options.find((item) => item._id === id)
      : false;

  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const payload = {
      _id: question._id,
      questionType: question.questionType,
      options: [
        {
          _id: e.target.id,
        },
      ],
    };
    if (e.target.checked) {
      dispatch(addAnswers(payload));
    } else {
      dispatch(removeAnswer(payload));
    }
  };

  return (
    <div id={`question-${question._id}`} className="animate-fadein">
      <p className={labelStyle}>{question.description}</p>
      <ul>
        {question.options.map((option, index) => (
          <li key={index} className="my-2 w-max">
            <label
              htmlFor={option.description}
              className="flex max-w-[60vw] gap-2 break-words md:max-w-[50vw]"
            >
              <input
                type="checkbox"
                id={`${option._id}`}
                data-description={option.description}
                value={option.value}
                {...register(option.name, { required: true })}
                onChange={handleChange}
                checked={isStoredValue(option._id)}
                className="m-2 h-[15px] w-[15px]"
              />
              {option.description}
            </label>
          </li>
        ))}
      </ul>
      {errors[`${question.name}`] && (
        <span className="cursor-default text-sm text-red-600">
          * This field is required
        </span>
      )}
    </div>
  );
};

export default CheckBoxQuestion;
