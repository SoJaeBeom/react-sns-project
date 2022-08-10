import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { __deleteComment, __editComment } from "../redux/modules/commentsSlice";

export default function Comment({ comment }) {
  const dispatch = useDispatch();
  let id = comment.id;
  let postId = comment.postId;

  const [isEditable, setIsEditable] = useState(false);
  const [text, setText] = useState("");

  const onEditHandler = () => {
    if (isEditable) {
      setIsEditable(false);
      dispatch(__editComment({ postId, id, text }));
    } else {
      setIsEditable(true);
      setText(comment.content);
    }
  };

  const onChangeHandler = (e) => {
    setText(e.target.value);
  };

  const onDeleteHandler = () => {
    dispatch(__deleteComment({ postId, id }));
  };

  return (
    <Group>
      <CommentBox>
        {isEditable ? (
          <EditCommentInput
            type="text"
            value={text}
            onChange={onChangeHandler}
          />
        ) : (
          <CommentContent>댓글 : {comment.content}</CommentContent>
        )}
        <CommentUserName>작성자 : {comment.userName}</CommentUserName>
      </CommentBox>
      <CommentEditBtn onClick={onEditHandler}>수정</CommentEditBtn>
      <CommentDeleteBtn onClick={onDeleteHandler}>삭제</CommentDeleteBtn>
    </Group>
  );
}

const Group = styled.div`
  display: flex;
  padding: 10px;
`;

const CommentBox = styled.div`
  width: 300px;
`;

const CommentContent = styled.div`
  width: 300px;
  margin: auto;
`;

const CommentUserName = styled.div`
  width: 300px;
  font-size: 12px;
  margin: auto;
`;

const CommentEditBtn = styled.button`
  margin: auto;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  height: 40px;
  width: 50px;
  background-color: #fff;
  border: 2px solid royalblue;
`;

const CommentDeleteBtn = styled.button`
  margin: auto;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  height: 40px;
  width: 50px;
  background-color: #fff;
  border: 2px solid red;
`;

const EditCommentInput = styled.input`
  width: 250px;
  border: 1px solid black;
  border-radius: 6px;
`;
