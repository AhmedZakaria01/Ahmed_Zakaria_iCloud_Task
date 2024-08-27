import { configureStore } from "@reduxjs/toolkit";
import homeCardSlice from "./Redux/HomeCardSlice";

const store = configureStore({
  reducer: {
    card: homeCardSlice,
  },
});

export default store;
