import React, { useEffect, useState} from "react";
import { useDispatch,useSelector } from "react-redux";
import { getPosts } from '../modules/postsSlice';
import MainList from '../../components/MainList';


function Main() {

  const dispatch = useDispatch();

  const {posts}=useSelector((state)=>state.postsSlice);

  useEffect(() => {
    dispatch(getPosts());
  },[dispatch]);

  return (
  <div>
    {posts.map((post) => (
      <MainList key={post.id} id={post.id} pw={post.pw} username={post.username} title={post.title}/>))}
  </div>)
};

export default Main