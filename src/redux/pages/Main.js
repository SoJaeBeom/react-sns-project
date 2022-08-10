import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { deletePosts, getPosts } from '../modules/postSlice';
import MainList from '../../components/MainList';


function Main() {
  const dispatch = useDispatch();

  const {posts}=useSelector((state)=>state.posts);
  console.log(posts)

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
  <div>
    {posts.map((post) => (
      <MainList key={post.id} id={post.id} pw={post.pw} username={post.username} title={post.title} />))}
  </div>)
}

export default Main