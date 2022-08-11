import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
  isLoading: false,
  isFinish: false,
  error: null,
};

export const __getTargetPosts = createAsyncThunk(
  "detail/__getTargetPosts",

  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(`REACT_APP_URL/posts/${payload}`);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __editPosts = createAsyncThunk(
  "detail/__editPosts",
  async (payload, thunkAPI) => {
    try {
      await axios.patch(`REACT_APP_URL/posts/${payload.id}`, {
        title: payload.title,
        content: payload.content,
      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const postsSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {},
  extraReducers: {
    [__getTargetPosts.pending]: (state, action) => {
      state.isLoading = true;
      state.isFinish = false;
    },

    [__getTargetPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isFinish = true;
      state.posts = action.payload;
    },

    [__getTargetPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.isFinish = true;
      state.error = action.payload;
    },
  },
});

export default postsSlice.reducer;
