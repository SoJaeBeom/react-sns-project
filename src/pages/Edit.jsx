import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import { __getPosts, __editPosts } from "../redux/modules/postsSlice";

export default function Edit() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { posts, isFinish } = useSelector((state) => state.postsSlice);

  const [isEditable, setIsEditable] = useState(true);
  const [title, setTitle] = useState(posts.title);
  const [content, setContent] = useState(posts.content);

  const onChangeHandler = (event) => {
    if (event.target.id === "title") {
      setTitle(event.target.value);
    } else if (event.target.id === "content") {
      setContent(event.target.value);
    }
  };

  const onEditHandler = () => {
    setIsEditable(false);
    dispatch(
      __editPosts({
        id,
        title,
        content,
      })
    );
  };

  useEffect(() => {
    dispatch(__getPosts(Number(id)));
  }, [dispatch, id]);

  if (isFinish) {
    return (
      <EditBox>
        <Header postId={id} btnId="edit" />
        <EditInputWrapper>
          {isEditable ? (
            <EditTitleInput
              type="text"
              id="title"
              value={title}
              onChange={onChangeHandler}
            />
          ) : (
            <EditTitle>{posts.title}</EditTitle>
          )}
        </EditInputWrapper>

        <EditImageWrapper>
          <EditImage src={posts.image}></EditImage>
        </EditImageWrapper>
        <EditInputWrapper>
          {isEditable ? (
            <EditContentInput
              type="text"
              id="content"
              value={content}
              onChange={onChangeHandler}
            />
          ) : (
            <EditContent>{posts.content}</EditContent>
          )}
        </EditInputWrapper>

        <EditOkBtnWrapper>
          <EditOkBtn to={`/detail/${id}`} onClick={onEditHandler}>
            확인
          </EditOkBtn>
        </EditOkBtnWrapper>
      </EditBox>
    );
  }
}

const EditBox = styled.div`
  width: 500px;
  border: 1px solid black;
  padding: 20px;
  margin: auto;
`;

const EditTitle = styled.div`
  width: 400px;
  font-size: 20px;
  font-weight: bold;
  margin: 10px auto;
`;

const EditImageWrapper = styled.div`
  width: 400px;
  margin: 10px auto;
`;

const EditImage = styled.img`
  width: 400px;
  height: 200px;
  border-radius: 8px;
  margin: 10px auto;
`;

const EditContent = styled.div`
  width: 400px;
  margin: 10px auto;
`;

const EditOkBtnWrapper = styled.div`
  width: 400px;
  margin: auto;
  text-align: center;
`;

const EditOkBtn = styled(Link)`
  display: block;
  text-decoration: none;
  color: black;
  font-size: 14px;
  width: 50%;
  text-align: center;
  padding: 10px;
  margin: auto;
  border: 1px solid black;
  border-radius: 8px;
`;

const EditTitleInput = styled.input`
  width: 300px;
  height: 30px;
  border: 1px solid black;
  border-radius: 5px;
`;

const EditContentInput = styled.input`
  width: 300px;
  height: 30px;
  border: 1px solid black;
  border-radius: 5px;
`;

const EditInputWrapper = styled.div`
  width: 400px;
  margin: auto;
  padding: 15px;
`;
