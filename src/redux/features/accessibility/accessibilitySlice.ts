import { createSlice } from "@reduxjs/toolkit";

interface AccessibilityState {
  currentFontSize: number;
  grayScale: boolean;
  underlineLinks: boolean;
  highContrast: boolean;
  negativeContrast: boolean;
}

const initialState: AccessibilityState = {
  currentFontSize: 0,
  grayScale: false,
  underlineLinks: false,
  highContrast: false,
  negativeContrast: false,
};

const accessibilitySlice = createSlice({
  name: "accessibility",
  initialState,
  reducers: {
    setCurrentFontSize: (state, action) => ({
      ...state,
      currentFontSize: action.payload,
    }),
    setGrayScale: (state, action) => ({
      ...state,
      grayScale: action.payload,
    }),
    setUnderlineLinks: (state, action) => ({
      ...state,
      underlineLinks: action.payload,
    }),
    setHighContrast: (state, action) => ({
      ...state,
      highContrast: action.payload,
    }),
    setNegativeContrast: (state, action) => ({
      ...state,
      negativeContrast: action.payload,
    }),
    resetAllOptions: (state, action) => action.payload,
  },
});

export const {
  setCurrentFontSize,
  setGrayScale,
  setUnderlineLinks,
  setHighContrast,
  setNegativeContrast,
  resetAllOptions,
} = accessibilitySlice.actions;

export default accessibilitySlice.reducer;
