import React, { useState } from 'react'
import { useDispatch,useSelector } from "react-redux";
import { deletePosts } from '../redux/modules/postsSlice';

export default function Modals({pw, id}) {

  const [input, setInput] = useState('');

  const dispatch=useDispatch();

  let inputPassword='';

  const password=Object.values({pw});

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const onClick=()=>{
    inputPassword=input;
    if(inputPassword==password[0]){
      dispatch(deletePosts(id))
    }else return
  }


  return (
    <div className='modal'>
      <p>비밀번호를 입력하세요</p>
      <input type="password" name="pw" onChange={onChange}></input>
      <button onClick={onClick}>입력</button>
    </div>
  )
}
