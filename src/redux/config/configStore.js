import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "../modules/postsSlice";
import commentsSlice from "../modules/commentsSlice";

const store = configureStore({
  reducer: {
    postsSlice,
    commentsSlice,
  },
});

export default store;
