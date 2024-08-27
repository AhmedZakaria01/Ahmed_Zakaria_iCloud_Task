import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cardData: [
    {
      header: "Mobile Apps",
      middle: "get Your own mobile App",
      footer: "100 DTSU*",
      bgColor: "bg-blue-600",
    },
    {
      header: "Bl",
      middle: "Create Dashboards",
      footer: "100 DTSU*",
      bgColor: "bg-green-600",
    },
    {
      header: "HR",
      middle: "Talents",
      footer: "50 DTSU*",
      bgColor: "bg-red-500",
    },
    {
      header: "Operataions",
      middle: "ERP Management",
      footer: "100 DTSU*",
      bgColor: "bg-yellow-600",
      button: "PlusOutlined ",
    },
  ],
  pillarValues: [],
};
const homeCardSlice = createSlice({
  name: "homeCard",
  initialState,
  reducers: {
    setPillarValues: (state, action) => {
      state.pillarValues = action.payload;
    },
  },
});

export default homeCardSlice.reducer;

export const { setPillarValues } = homeCardSlice.actions;
