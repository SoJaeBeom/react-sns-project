import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  comments: [],
  error: null,
};

export const __addComment = createAsyncThunk(
  "comments/__addComment",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post(
        `https://teamsparta.herokuapp.com/posts/${payload.postId}/comments`,
        payload
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getComment = createAsyncThunk(
  "comments/__getComment",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(
        `https://teamsparta.herokuapp.com/posts/${payload}/comments`
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteComment = createAsyncThunk(
  "comments/__deleteComment",
  async (payload, thunkAPI) => {
    try {
      await axios
        .delete(`https://teamsparta.herokuapp.com/comments/${payload.id}`)
        .then(thunkAPI.dispatch(__getComment(payload.postId)));
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __editComment = createAsyncThunk(
  "comments/__editComment",
  async (payload, thunkAPI) => {
    try {
      await axios
        .patch(`https://teamsparta.herokuapp.com/comments/${payload.id}`, {
          content: payload.text,
        })
        .then(thunkAPI.dispatch(__getComment(payload.postId)));
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    [__addComment.fulfilled]: (state, action) => {
      state.comments = [...state.comments, action.payload];
    },

    [__getComment.fulfilled]: (state, action) => {
      state.comments = action.payload;
    },

    [__getComment.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default commentsSlice.reducer;
