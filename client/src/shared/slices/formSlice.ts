import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type FormDataType = {
  name: string;
  phonenumber: string | null;
  message: string;
};

const initialState: FormDataType = {
  name: "",
  phonenumber: "",
  message: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<Partial<FormDataType>>) => {
      Object.assign(state, action.payload);
    },
  },
});

export const { setUserData } = formSlice.actions;
export default formSlice.reducer;
