import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
  isLoading: false,
  isFinish: false,
  error: null,
};

//리스트 가져오기
export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/posts");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//삭제하기
export const deletePosts = createAsyncThunk(
  "posts/deletetPosts",
  async (id) => {
    const res = await axios.delete(`http://localhost:3001/posts/${id}`);
    return { id };
  }
);

export const __getTargetPosts = createAsyncThunk(
  "posts/__getTargetPosts",

  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(`http://localhost:3001/posts/${payload}`);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __editPosts = createAsyncThunk(
  "posts/__editPosts",
  async (payload, thunkAPI) => {
    try {
      await axios.patch(`http://localhost:3001/posts/${payload.id}`, {
        title: payload.title,
        content: payload.content,
      });
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
    [getPosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.isFinish = true;
    },

    [deletePosts.fulfilled]: (state, action) => {
      let index = current(state.posts).findIndex(
        ({ id }) => id === action.payload.id
      );
      state.posts.splice(index, 1);
    },

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
