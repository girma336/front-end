import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialStateType {
  userProfile: string;
  skills: any[];
  interests: any[];
}

const initialState: InitialStateType = {
  userProfile: "",
  skills: [],
  interests: [],
};

const userInfoSlice = createSlice({
  name: "userinfo",
  initialState,
  reducers: {
    setUserProfile: (state, action: PayloadAction<string>) => ({
      ...state,
      userProfile: action.payload,
    }),
    setUserSkillsInterests: (state, action: PayloadAction<any>) => ({
      ...state,
      skills: action.payload?.skills,
      interests: action.payload?.interests,
    }),
  },
});

export const { setUserProfile, setUserSkillsInterests } = userInfoSlice.actions;

export default userInfoSlice.reducer;
