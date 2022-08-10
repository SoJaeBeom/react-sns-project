import styled from "styled-components";
import CommentContainer from "../components/CommentContainer";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { __getPosts } from "../redux/modules/postsSlice";
import { useParams } from "react-router-dom";

export default function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { posts, isFinish } = useSelector((state) => state.postsSlice);

  useEffect(() => {
    dispatch(__getPosts(Number(id)));
  }, [dispatch, id]);

  if (isFinish) {
    return (
      <DetailBox>
        <Header />
        <DetailTitle>{posts.title}</DetailTitle>
        <DetailImage>{posts.image}</DetailImage>
        <DetailContent>{posts.content}</DetailContent>
        <CommentContainer />
      </DetailBox>
    );
  }
}

const DetailBox = styled.div`
  width: 500px;
  border: 1px solid black;
  padding: 20px;
  margin: auto;
`;

const DetailTitle = styled.div`
  width: 400px;
  font-size: 20px;
  font-weight: bold;
  margin: 10px auto;
`;

const DetailImage = styled.div`
  width: 400px;
  height: 200px;
  border-radius: 8px;
  border: 1px solid black;
  margin: 10px auto;
`;

const DetailContent = styled.div`
  width: 400px;
  margin: 10px auto;
`;
