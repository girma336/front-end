import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  QuestionSectionType,
  AnswerType,
} from "@/components/questionnaire/types";

interface InitialStateType {
  questions: QuestionSectionType[];
  answers: AnswerType[];
}
const initialState: InitialStateType = {
  questions: [],
  answers: [],
};

const questionnaireSlice = createSlice({
  name: "questionnaire",
  initialState,
  reducers: {
    setQuestionnaire: (
      state,
      action: PayloadAction<QuestionSectionType[]>
    ) => ({ ...state, questions: action.payload }),

    clearQuestionnaireData: () => ({ questions: [], answers: [] }),

    setSavedResponses: (state, action: PayloadAction<AnswerType[]>) => ({
      ...state,
      answers: action.payload,
    }),

    addAnswers: (state, action: PayloadAction<AnswerType>) => {
      const newQASet = [...state.answers];

      const modifiedQuestionIndex = newQASet.findIndex(
        (item) => item._id === action.payload._id
      );

      // check if QA item exists using index value

      if (modifiedQuestionIndex !== -1) {
        // if checkbox question type, add multiple answers to same question

        if (action.payload.questionType === "checkbox") {
          const modifiedAnswerArray = [
            // add new checkbox answer to existing answers for that particular question
            ...newQASet[modifiedQuestionIndex].options,
            ...action.payload.options,
          ];
          newQASet[modifiedQuestionIndex] = {
            ...newQASet[modifiedQuestionIndex],
            options: [...modifiedAnswerArray],
          };
        } else if (action.payload.questionType === "selectionskill") {
          const modifiedAnswerArray = [
            ...newQASet[modifiedQuestionIndex].options,
          ];
          // check if answer exists for a given skill id, using index

          const skillAnswerIndex = modifiedAnswerArray.findIndex(
            (item) => item.skillId === action.payload.options[0].skillId
          );
          if (skillAnswerIndex !== -1) {
            modifiedAnswerArray[skillAnswerIndex] = {
              ...action.payload.options[0],
            };
          } else {
            modifiedAnswerArray.push(action.payload.options[0]);
          }

          newQASet[modifiedQuestionIndex] = {
            ...newQASet[modifiedQuestionIndex],
            options: modifiedAnswerArray,
          };
        }

        // replace existing answer with new modified answer for other question types
        else {
          newQASet[modifiedQuestionIndex] = {
            ...newQASet[modifiedQuestionIndex],
            options: action.payload.options,
          };
        }
      }
      // add as new QA item
      else {
        newQASet.push({
          _id: action.payload._id,
          questionType: action.payload.questionType,
          options: action.payload.options,
        });
      }
      return { ...state, answers: [...newQASet] };
    },

    removeAnswer: (state, action: PayloadAction<AnswerType>) => {
      const newQASet = [...state.answers];

      // find the index of QA Item using question's index
      const modifiedQuestionIndex = newQASet.findIndex(
        (item) => item._id === action.payload._id
      );

      const modifiedQuestionItem = newQASet[modifiedQuestionIndex];

      // filter all answers except the answer to be removed
      const oldSelectedAnswers = modifiedQuestionItem.options.filter(
        (item) => item.value !== action.payload.options[0].value
      );

      // if no answers exist for QA item, remove the QA item

      if (oldSelectedAnswers.length === 0) {
        newQASet.splice(modifiedQuestionIndex, 1);
      } else {
        newQASet[modifiedQuestionIndex] = {
          ...modifiedQuestionItem,
          options: [...oldSelectedAnswers],
        };
      }

      return { ...state, answers: newQASet };
    },
  },
});

export const {
  setQuestionnaire,
  clearQuestionnaireData,
  setSavedResponses,
  addAnswers,
  removeAnswer,
} = questionnaireSlice.actions;
export default questionnaireSlice.reducer;
