import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { __addComment } from "../redux/modules/commentsSlice";

export default function CommentForm({ postId }) {
  const date = new Date();

  const dispatch = useDispatch();
  const [content, setContent] = useState("");
  const [userName, setUserName] = useState("");

  function onSubmitHandler() {
    let createdAt = date.toLocaleString("ko-kr");

    if (content !== "" && userName !== "") {
      dispatch(
        __addComment({
          postId,
          content,
          userName,
          createdAt,
        })
      );
      setContent("");
      setUserName("");
    }
  }

  const onChangeHandler = (event) => {
    if (event.target.id === "content") {
      setContent(event.target.value);
    } else if (event.target.id === "userName") {
      setUserName(event.target.value);
    }
  };

  return (
    <CommentFormGroup>
      <UserNameInput
        type="text"
        id="userName"
        placeholder="이름(5자이내)"
        onChange={onChangeHandler}
        value={userName}
        maxLength="5"
      />
      <CommentInput
        type="text"
        id="content"
        placeholder="댓글(100자이내)"
        onChange={onChangeHandler}
        value={content}
        maxLength="100"
      />
      <AddBtn onClick={onSubmitHandler}>추가</AddBtn>
    </CommentFormGroup>
  );
}
const CommentFormGroup = styled.div`
  height: 35px;
  padding: 10px;
`;

const UserNameInput = styled.input`
  width: 80px;
  height: 30px;
  border: 1px solid black;
  border-radius: 5px;
  margin-right: 10px;
`;

const CommentInput = styled.input`
  width: 220px;
  height: 30px;
  border: 1px solid black;
  border-radius: 5px;
  margin-right: 10px;
`;

const AddBtn = styled.button`
  width: 48px;
  height: 35px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-color: #fff;
  border: 1px solid black;
`;
