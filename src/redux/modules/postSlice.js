// src/redux/modules/todosSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
  post: [],
  isLoading: false,
  error: null,
};


export const __addPost = createAsyncThunk(
  "post/__addPost",
  async (payload, thunkAPI) => {
    console.log(payload)
    try {
      const data = await axios.post('http://localhost:3001/posts',
      payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    } 
  }
);

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    [__addPost.pending]: (state) => {
      state.isLoading = true; 
    },
    [__addPost.fulfilled]: (state, action) => {
      state.isLoading = false; 
      state.todos = action.payload; 
    },
    [__addPost.rejected]: (state, action) => {
      state.isLoading = false; 
      state.error = action.payload; 
    },
  },
});

export const {} = postSlice.actions;
export default postSlice.reducer;