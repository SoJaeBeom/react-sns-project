import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
  isLoading: false,
  isFinish: false,
  error: null,
};

export const __getPosts = createAsyncThunk(
  "posts/__getPosts",

  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(`http://localhost:3001/posts/${payload}`);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [__getPosts.pending]: (state, action) => {
      state.isLoading = true;
      state.isFinish = false;
    },

    [__getPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isFinish = true;
      state.posts = action.payload;
    },

    [__getPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.isFinish = true;
      state.error = action.payload;
    },
  },
});

export const {} = postsSlice.actions;

export default postsSlice.reducer;
