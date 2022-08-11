import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../redux/modules/postsSlice";
import MainList from "../components/MainList";
import Header from "../components/Header";

function Main() {
  const dispatch = useDispatch();

  const { posts, isFinish } = useSelector((state) => state.postsSlice);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  if (isFinish) {
    return (
      <div>
        <Header btnId="Home"/>
        {posts.map((post) => (
          <MainList
            key={post.id}
            id={post.id}
            pw={post.pw}
            user={post.user}
            title={post.title}
          />
        ))}
      </div>
    );
  }
}

export default Main;
