import styled from "styled-components";
import CommentList from "../components/CommentList";
import CommentForm from "../components/CommentForm";
import { useParams } from "react-router-dom";

export default function CommentContainer() {
  let { id } = useParams();
  return (
    <CommentBox>
      <CommentForm postId={Number(id)} />
      <CommentList postId={Number(id)} />
    </CommentBox>
  );
}

const CommentBox = styled.div`
  width: 400px;
  border: 1px solid black;
  border-radius: 8px;
  margin: 10px auto 0px auto;
`;
