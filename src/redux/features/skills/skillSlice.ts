import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  SkillType,
  SelectedSkillsType,
  SkillApiDataType,
} from "@/components/skills/types";

interface InitialStateType {
  skills: SkillType[];
  selectedSkills: {
    primary: SelectedSkillsType[];
    other: SelectedSkillsType[];
  };
}

const initialState: InitialStateType = {
  skills: [],
  selectedSkills: { primary: [], other: [] },
};

const skillsSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {
    setSkills: (state, action: PayloadAction<SkillType[]>) => ({
      ...state,
      skills: [...action.payload],
    }),
    setSavedSkills: (state, action: PayloadAction<SkillApiDataType[]>) => {
      const savedSkills: SelectedSkillsType[] = [];
      const newState = { ...state };
      if (action.payload.length !== 0) {
        action.payload.forEach((skill) => {
          const newSubskills = {
            primary: [skill.subSkills[0]],
            other: skill.subSkills.slice(1),
          };
          const newSkill = {
            ...skill,
            subSkills: newSubskills,
          };
          savedSkills.push(newSkill);
        });
        newState.selectedSkills = {
          primary: [savedSkills[0]],
          other: savedSkills.slice(1),
        };
      }

      return newState;
    },
    addSelectedSkill: (state, action: PayloadAction<SelectedSkillsType>) => {
      const existingSkills = { ...state.selectedSkills };
      const existingPrimary = [...existingSkills.primary];
      const existingOther = [...existingSkills.other];

      const isExistingPrimary = existingPrimary.find(
        (item) => item._id === action.payload._id
      );
      const isExistingOther = existingOther.find(
        (item) => item._id === action.payload._id
      );

      if (existingSkills.primary.length === 0 || isExistingPrimary) {
        if (isExistingPrimary) {
          existingPrimary[0] = action.payload;
        } else existingPrimary.push(action.payload);
      } else if (isExistingOther) {
        const index = existingOther.findIndex(
          (item) => item._id === action.payload._id
        );
        existingOther[index] = action.payload;
      } else existingOther.push(action.payload);

      const newState = {
        ...state,
        selectedSkills: { primary: existingPrimary, other: existingOther },
      };
      return newState;
    },

    removeSelectedSkill: (state, action: PayloadAction<number>) => {
      const filteredPrimary = state.selectedSkills.primary.filter(
        (item) => item._id !== action.payload
      );
      const filteredOther = state.selectedSkills.other.filter(
        (item) => item._id !== action.payload
      );

      return {
        ...state,
        selectedSkills: {
          primary: filteredPrimary,
          other: filteredOther,
        },
      };
    },

    removeSelectedSubskill: (
      state,
      action: PayloadAction<{ _id: number; subSkillId: number }>
    ) => {
      const isPrimarySkill = state.selectedSkills.primary.find(
        (item) => item._id === action.payload._id
      );
      const findSkill = () =>
        isPrimarySkill
          ? state.selectedSkills.primary
          : state.selectedSkills.other;

      const filteredSelectedSkills = findSkill().map((skill) => {
        const newSkill = { ...skill };
        if (newSkill._id === action.payload._id) {
          const newSubskillsPrimary = newSkill.subSkills.primary.filter(
            (item) => item._id !== action.payload.subSkillId
          );
          const newSubskillsOther = newSkill.subSkills.other.filter(
            (subSkill) => subSkill._id !== action.payload.subSkillId
          );

          return {
            ...newSkill,
            subSkills: {
              primary: newSubskillsPrimary,
              other: newSubskillsOther,
            },
          };
        }
        return newSkill;
      });

      const key = isPrimarySkill
        ? {
            primary: filteredSelectedSkills,
            other: [...state.selectedSkills.other],
          }
        : {
            other: filteredSelectedSkills,
            primary: [...state.selectedSkills.primary],
          };
      return { ...state, selectedSkills: key };
    },
  },
});

export const {
  setSkills,
  setSavedSkills,
  addSelectedSkill,
  removeSelectedSkill,
  removeSelectedSubskill,
} = skillsSlice.actions;

export default skillsSlice.reducer;
