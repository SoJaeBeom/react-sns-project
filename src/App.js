import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getPosts } from './redux/modules/postSlice';
import Main from './redux/pages/Main';

const App = () => {
  return (
  <>
    <Main/>
  </>)
};

export default App;