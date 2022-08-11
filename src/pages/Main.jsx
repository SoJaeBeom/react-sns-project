import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../redux/modules/postsSlice";
import MainList from "../components/MainList";

function Main() {
  const dispatch = useDispatch();

  const { posts, isFinish } = useSelector((state) => state.postsSlice);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  if (isFinish) {
    return (
      <div>
        {posts.map((post) => (
          <MainList
            key={post.id}
            id={post.id}
            pw={post.pw}
            username={post.user}
            title={post.title}
          />
        ))}
      </div>
    );
  }
}

export default Main;
