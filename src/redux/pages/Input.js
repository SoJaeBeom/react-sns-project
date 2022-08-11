import React, { useEffect, useState} from "react";
import { useDispatch,useSelector } from "react-redux";
import { addPosts } from '../modules/postsSlice';

function Input() {

  const dispatch=useDispatch();

  //리스트 추가하는거
  const [newPost, setPost] = useState({
    username: "",
    pw: "",
    title:"",
    content:"",
  });

  const{username, pw, title, content}=newPost;

  const onChange = (e) => {
    const { value, name } = e.target; 
    setPost({
      ...newPost,
      [name]: value});
  };


    const onClick=()=>{
      dispatch(addPosts(newPost))
    }

    return (
    <div>
      <input placeholder="닉네임" value={username} name="username" onChange={onChange}></input>
      <input placeholder="비밀번호" value={pw} name="pw" onChange={onChange}></input>
      <input placeholder="제목" value={title} name="title" onChange={onChange}></input>
      <input placeholder="내용" value={content} name="content" onChange={onChange}></input>

      <button onClick={onClick}>입력</button>

    </div>

  )
}

export default Input