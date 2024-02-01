import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ToastPayloadType {
  toastMessage: string;
  type: string;
}

const initialState: ToastPayloadType = {
  toastMessage: "",
  type: "",
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    setToastMessage: (state, action: PayloadAction<ToastPayloadType>) =>
      action.payload,
  },
});

export const { setToastMessage } = toastSlice.actions;

export default toastSlice.reducer;
