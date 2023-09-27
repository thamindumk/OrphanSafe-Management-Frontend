import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  caseList: null
};

const caseSlice = createSlice({
  name: "case",
  initialState,
  reducers: {
    setCaseList: (state, action) => {
      state.caseList = action.payload;
      console.log(action.payload);
    },
  },
});

export const { setCaseList } = caseSlice.actions;
export default caseSlice.reducer;
