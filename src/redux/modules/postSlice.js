import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from 'axios';

//리스트 가져오기
export const getPosts=createAsyncThunk(
  'posts/getPosts',
  async()=>{
    const res=await axios.get('http://localhost:3001/posts')
    return res.data;
  }
)

//삭제하기
export const deletePosts = createAsyncThunk(
  'posts/deletetPosts',
    async(id)=>{
    const res=await axios.delete(`http://localhost:3001/posts/${id}`)
    return {id};
  }
)


//추가하기




//수정하기




const initialState={
  posts:[],
}

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers:{
    [getPosts.fulfilled]:(state,action)=>{
      state.posts=action.payload
    },

    [deletePosts.fulfilled]: (state, action) =>{
      let index = current(state.posts).findIndex(({ id }) => id === action.payload.id);
      state.posts.splice(index, 1);
    }}})


export default postsSlice.reducer;