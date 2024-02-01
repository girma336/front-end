import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  InterestType,
  SelectedInterestsType,
  InterestApiDataType,
} from "@/components/interests/types";

interface InitialStateType {
  interests: InterestType[];
  selectedInterests: {
    primary: SelectedInterestsType[];
    other: SelectedInterestsType[];
  };
}

const initialState: InitialStateType = {
  interests: [],
  selectedInterests: { primary: [], other: [] },
};

const interestsSlice = createSlice({
  name: "interests",
  initialState,
  reducers: {
    setInterests: (state, action: PayloadAction<InterestType[]>) => ({
      ...state,
      interests: [...action.payload],
    }),
    setSavedInterests: (
      state,
      action: PayloadAction<InterestApiDataType[]>
    ) => {
      const savedInterests: SelectedInterestsType[] = [];
      const newState = { ...state };
      if (action.payload.length !== 0) {
        action.payload.forEach((interest) => {
          const newSubinterests = {
            primary: [interest.subInterests[0]],
            other: interest.subInterests.slice(1),
          };
          const newInterest = {
            ...interest,
            subInterests: newSubinterests,
          };
          savedInterests.push(newInterest);
        });
        newState.selectedInterests = {
          primary: [savedInterests[0]],
          other: savedInterests.slice(1),
        };
      }

      return newState;
    },
    addSelectedInterest: (
      state,
      action: PayloadAction<SelectedInterestsType>
    ) => {
      const existingInterests = { ...state.selectedInterests };
      const existingPrimary = [...existingInterests.primary];
      const existingOther = [...existingInterests.other];

      const isExistingPrimary = existingPrimary.find(
        (item) => item._id === action.payload._id
      );
      const isExistingOther = existingOther.find(
        (item) => item._id === action.payload._id
      );

      if (existingInterests.primary.length === 0 || isExistingPrimary) {
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
        selectedInterests: { primary: existingPrimary, other: existingOther },
      };
      return newState;
    },

    removeSelectedInterest: (state, action: PayloadAction<number>) => {
      const filteredPrimary = state.selectedInterests.primary.filter(
        (item) => item._id !== action.payload
      );
      const filteredOther = state.selectedInterests.other.filter(
        (item) => item._id !== action.payload
      );

      return {
        ...state,
        selectedInterests: {
          primary: filteredPrimary,
          other: filteredOther,
        },
      };
    },

    removeSelectedSubinterest: (
      state,
      action: PayloadAction<{ _id: number; subInterestId: number }>
    ) => {
      const isPrimaryInterest = state.selectedInterests.primary.find(
        (item) => item._id === action.payload._id
      );
      const findInterest = () =>
        isPrimaryInterest
          ? state.selectedInterests.primary
          : state.selectedInterests.other;

      const filteredSelectedInterests = findInterest().map((interest) => {
        const newInterest = { ...interest };
        if (newInterest._id === action.payload._id) {
          const newSubinterestsPrimary =
            newInterest.subInterests.primary.filter(
              (item) => item._id !== action.payload.subInterestId
            );
          const newSubinterestsOther = newInterest.subInterests.other.filter(
            (subInterest) => subInterest._id !== action.payload.subInterestId
          );

          return {
            ...newInterest,
            subInterests: {
              primary: newSubinterestsPrimary,
              other: newSubinterestsOther,
            },
          };
        }
        return newInterest;
      });

      const key = isPrimaryInterest
        ? {
            primary: filteredSelectedInterests,
            other: [...state.selectedInterests.other],
          }
        : {
            other: filteredSelectedInterests,
            primary: [...state.selectedInterests.primary],
          };
      return { ...state, selectedInterests: key };
    },
  },
});

export const {
  setInterests,
  setSavedInterests,
  addSelectedInterest,
  removeSelectedInterest,
  removeSelectedSubinterest,
} = interestsSlice.actions;

export default interestsSlice.reducer;
