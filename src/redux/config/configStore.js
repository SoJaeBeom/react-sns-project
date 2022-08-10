import { configureStore } from "@reduxjs/toolkit";
import posts from '../modules/postSlice';

const store = configureStore({
  reducer: {posts:posts},
});

export default store;