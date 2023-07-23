import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TInputValue = {
  value: string;
};

type InputValueState = {
  inputValue: TInputValue;
};

const initialState: InputValueState = {
  inputValue: { value: "" },
};

const inputSlice = createSlice({
  name: "inputValue",
  initialState,
  reducers: {
    addValueInput: (state, action: PayloadAction<string>) => {
      state.inputValue.value = action.payload;
    },
  },
});

export const { addValueInput } = inputSlice.actions;

export default inputSlice.reducer;
