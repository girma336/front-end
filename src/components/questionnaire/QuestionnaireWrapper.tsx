"use client";

import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { PersistGate } from "redux-persist/integration/react";
import { persistedStore } from "@/redux/store";
import {
  setQuestionnaire,
  setSavedResponses,
} from "@/redux/features/questionnaire/questionnaireSlice";
import { setUserSkillsInterests } from "@/redux/features/userInfo/userInfoSlice";
import LoadingSpinner from "@/atoms/loading-spinner/LoadingSpinner";
import {
  useGetQuestionnaireQuery,
  useGetUserSkillsInterestsQuery,
  useGetQuestionnaireResponseQuery,
} from "@/api";
import Stepper from "./Stepper";
import QuestionnaireSections from "./QuestionnaireSections";
import { QuestionSectionType } from "./types";

const QuestionnaireWrapper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const dispatch = useAppDispatch();

  // Fetch Questions and refactor data structure
  const {
    isLoading,
    isSuccess,
    isError: questionnaireError,
    data: questionData,
    refetch: refetchQuestions,
  } = useGetQuestionnaireQuery("");

  useEffect(() => {
    if (isSuccess) {
      const refinedData: any = [];
      const dataValues = Object.values(questionData.data);

      // Extracting Section names from API data and create new DS
      dataValues.forEach((item: any) => {
        if (
          !refinedData.find((section: any) => section?.section === item.section)
        )
          refinedData.push({ section: item.section, questions: [] });
      });

      // Categorize questions by sections
      questionData.data.forEach((question: any) => {
        const sectionIndex = refinedData.findIndex(
          (item: any) => item.section === question.section
        );
        if (sectionIndex !== -1)
          refinedData[sectionIndex].questions.push(question);
      });
      dispatch(setQuestionnaire(refinedData));
    }
  }, [isSuccess, questionData, dispatch]);

  const questions: QuestionSectionType[] = useAppSelector(
    (state) => state.questionnaire.questions
  );

  const {
    isLoading: isUserDataLoading,
    isSuccess: isUserDataSuccess,
    isError: userDataError,
    data: userData,
    refetch: userDataRefetch,
  } = useGetUserSkillsInterestsQuery("");

  useEffect(() => {
    if (isUserDataSuccess) {
      dispatch(setUserSkillsInterests(userData));
    }
  }, [isUserDataSuccess, dispatch, userData]);

  const {
    isSuccess: isUserAnswerSuccess,
    isLoading: isUserAnswerLoading,
    data: userAnswerData,
    refetch: userResponseRefetch,
  } = useGetQuestionnaireResponseQuery("");

  useEffect(() => {
    if (isUserAnswerSuccess && userAnswerData.length !== 0) {
      dispatch(setSavedResponses(userAnswerData));
    }
  }, [isUserAnswerSuccess, userAnswerData, dispatch]);

  // invalidating rtkquery cache whenver the page is loaded.
  useEffect(() => {
    refetchQuestions();
    userDataRefetch();
    userResponseRefetch();
  }, [refetchQuestions, userDataRefetch, userResponseRefetch]);

  useEffect(() => {
    if (questionnaireError || userDataError) {
      throw new Error("Network error please try again later");
    }
  }, [questionnaireError, userDataError]);

  if (isLoading || isUserDataLoading || isUserAnswerLoading)
    return <LoadingSpinner />;

  return (
    <PersistGate loading={<LoadingSpinner />} persistor={persistedStore}>
      <div className="h-full w-full rounded-lg bg-white text-black shadow-md md:rounded-2xl  ">
        <h2 className="py-4 text-center font-semibold text-custom-blue-primary md:hidden">
          {questions[activeStep]?.section}
        </h2>
        <div className="flex h-[75vh] min-h-[600px] p-2 md:p-6">
          <div className="m-2 h-[70%] w-[10%] border-e-0 md:m-3 md:h-[90%] md:w-max md:border-e-[1.3px] md:border-e-[#7B767B]">
            <Stepper titles={questions.map((item) => item.section)} />
          </div>
          <div className="relative h-full w-full">
            <QuestionnaireSections
              allQuestions={questions}
              setActiveStep={setActiveStep}
              activeStep={activeStep}
            />
          </div>
        </div>
      </div>
    </PersistGate>
  );
};

export default QuestionnaireWrapper;
