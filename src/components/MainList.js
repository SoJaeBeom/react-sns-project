import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { deletePosts } from '../redux/modules/postsSlice';
import Modals from './Modals';
import styled from 'styled-components';


function MainList({id, pw, title, username}) {

  const onDelete=(e)=>{
    e.preventDefault();
    //모달창 띄우기
  }
  

  return (
    <div>
      <Modals id={id} pw={pw}></Modals>
      <span>제목 : {title} | 작성자: {username} <button onClick={onDelete}>삭제</button></span>   
      <Button onClick={handleOpen}>Open modal</Button>
    </div>
  )
}

export default MainList