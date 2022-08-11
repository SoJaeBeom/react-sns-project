import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { __addPost } from "../redux/modules/postsSlice";
import { useNavigate } from 'react-router-dom';

export default function Post(postId) {

  let navigate = useNavigate();
  
  const dispatch = useDispatch();
  const [user, setUser] = useState("");
  const [pw, SetPw] = useState();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();

  //파일 미리볼 url을 저장해줄 state
  const [fileImage, setFileImage] = useState("");

  // 파일 저장
  const saveFileImage = (e) => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
  };

  // 파일 삭제
  const deleteFileImage = () => {
    URL.revokeObjectURL(fileImage);
    setFileImage("");
  };

  const handleAdd = (e) => {
    if (e.target.id === "user") {
      setUser(e.target.value);
    } else if (e.target.id === "pw") {
      SetPw(e.target.value);
    } else if (e.target.id === "title") {
      setTitle(e.target.value);
    } else if (e.target.id === "content") {
      setContent(e.target.value);
    }
  };

  const submitAdd = () => {
    if (user !== "" && pw !== "") {
      dispatch(
        __addPost({
          user,
          pw,
          title,
          content,
        })
      );
    }
    navigate('/')
  };

  return (
    <StLayout>
      <h2>
        <span>게시글 작성</span>
      </h2>
      <div>
        <input
          type="text"
          placeholder="닉네임"
          id="user"
          value={user}
          onChange={handleAdd}
        />
        <input
          type="password"
          placeholder="비밀번호"
          id="pw"
          value={pw}
          onChange={handleAdd}
        />
        <p>
          <input
            type="text"
            placeholder="제목"
            id="title"
            value={title}
            onChange={handleAdd}
          />
        </p>
        <p>
          <input
            type="text"
            placeholder="내용"
            id="content"
            value={content}
            onChange={handleAdd}
          />
        </p>

        <div>
          {fileImage && (
            <img alt="sample" src={fileImage} style={{ margin: "auto" }} />
          )}
          <div>
            <input
              name="imgUpload"
              type="file"
              accept="image/*"
              onChange={saveFileImage}
            />
            <button onClick={() => deleteFileImage()}>삭제</button>
          </div>
        </div>
      </div>
      <button onClick={submitAdd}>작성</button>
    </StLayout>
  );
}

const StLayout = styled.div`
  margin: 0 auto;
  max-width: 800px;
  min-width: 800px;
  border: 1px solid black;
  padding: 1em;
`;
