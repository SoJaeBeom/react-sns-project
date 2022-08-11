import { configureStore } from "@reduxjs/toolkit";

import postsSlice from "../modules/postsSlice";
import commentsSlice from "../modules/commentsSlice";
import detailSlice from "../modules/detailSlice";

const store = configureStore({
  reducer: {
    postsSlice,
    commentsSlice,
    detailSlice,
  },
});

export default store;
