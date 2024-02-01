import React from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
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

const SelectionQuestionSkill = ({
  question,
  labelStyle,
  storedAnswer,
  register,
  errors,
}: OptionQuestionsProps) => {
  const getStoredAnswerValue = (skillId: string) => {
    if (storedAnswer) {
      const skillAnswer = storedAnswer.options.find(
        (item) => item.skillId === skillId
      );

      return skillAnswer ? skillAnswer.value : "";
    }
    return "";
  };

  // add or update answer for the question in redux store

  const userSelectedSkills = useAppSelector((state) => state.userinfo.skills);

  const dispatch = useAppDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const index = e.target.selectedIndex;
    const answerId = e.target.options[index].id;
    const skillId = e.target.options[index].dataset.skillid;
    const skillName = e.target.options[index].dataset.skillname;
    if (answerId !== "") {
      dispatch(
        addAnswers({
          _id: question._id,
          questionType: question.questionType,
          options: [
            {
              _id: answerId,
              value: e.target.value,
              skillId,
              skillName,
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
      {userSelectedSkills?.map((skill) => (
        <div key={skill._id}>
          <div
            className=" my-2 flex flex-col justify-start md:flex-row"
            key={skill._id}
          >
            <p className="text-medium mb-2 w-[30%] text-sm text-[#323232] lg:text-base 2xl:text-lg">
              {skill.name}
            </p>
            <div className="border-#899899 min-w-[10rem] rounded-lg border-2 px-1 sm:min-w-[13rem] md:w-[20rem]">
              <select
                id={`multi-select-question${question._id}`}
                className="w-full whitespace-break-spaces bg-transparent p-2 text-sm text-[#323232] before:whitespace-break-spaces lg:text-base 2xl:text-lg"
                {...register(`${question.name}-${skill._id}`, {
                  required: true,
                })}
                onChange={handleChange}
                value={getStoredAnswerValue(skill._id)}
              >
                <option value="">Select an option</option>
                {question.options.map((option) => (
                  <option
                    key={option._id}
                    id={`${option._id}`}
                    value={option.value}
                    data-skillid={skill._id}
                    data-skillname={skill.name}
                  >
                    {option.description}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {errors[`${question.name}-${skill._id}`] && (
            <div className="ms-2 text-center text-sm text-red-600">
              * This field is required
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SelectionQuestionSkill;
