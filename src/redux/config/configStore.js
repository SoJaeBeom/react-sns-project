import { configureStore } from "@reduxjs/toolkit";
import postSlice from '../modules/postSlice';

import postsSlice from '../modules/postsSlice';

const store = configureStore({
  reducer: {
    postsSlice, postSlice
  },

});

export default store;