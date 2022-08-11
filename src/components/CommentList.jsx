import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Comment from "../components/Comment";
import { __getComment } from "../redux/modules/commentsSlice";
import styled from "styled-components";

export default function CommentList({ postId }) {
  const dispatch = useDispatch();
  const { comments } = useSelector((state) => state.commentsSlice);
  console.log(comments);

  useEffect(() => {
    dispatch(__getComment(postId));
  }, [dispatch, postId]);

  let commentArray = comments.map((comment) => {
    return <Comment key={comment.id} comment={comment} />;
  });

  return <CommentListGroup>{commentArray}</CommentListGroup>;
}

const CommentListGroup = styled.div``;
