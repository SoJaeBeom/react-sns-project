import { useDispatch, useSelector } from "react-redux";
import {deletePosts } from "../redux/modules/postsSlice";
import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import styled from 'styled-components';



function MainList({ id, title, user }) {

  let navigate = useNavigate();
  const dispatch=useDispatch();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onDelete=()=>{
  dispatch(deletePosts(id))
  }


  return (
    <>
    <PostBox>
      <div onClick={()=>{navigate(`/detail/${id}`)}}>
        <div> <h3>{title}</h3> </div>
        <div> <p> 작성자: {user} </p>       </div>
      </div>

      <div>
      <Button onClick={handleClickOpen}>
        삭제
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            삭제하시겠습니까?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>아니오</Button>
          <Button onClick={handleClose && onDelete} autoFocus>
            예
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    </PostBox>
    </>
  );
}

const PostBox = styled.div`
  width: 400px;
  border: 1px solid black;
  border-radius: 8px;
  margin: 10px auto 0px auto;
  text-align: center;
  line-height: 0;
`;


export default MainList;
