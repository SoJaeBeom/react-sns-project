import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header({ postId, btnId }) {
  let path = "";
  let btn = "";

  if (btnId === "edit") {
    path = `/detail/${postId}`;
    btn = "뒤로가기";
  } else {
    path = `/edit/${postId}`;
    btn = "수정";
  }

  return (
    <HeaderGroup>
      <HeaderHome>
        <StyledLink to={"/"}>홈</StyledLink>
      </HeaderHome>
      <HeaderEdit>
        <StyledLink to={path}>{btn}</StyledLink>
      </HeaderEdit>
    </HeaderGroup>
  );
}

const HeaderGroup = styled.div`
  width: 400px;
  height: 50px;
  display: flex;
  align-items: center;
  margin: auto;
  border-bottom: 1px solid rgb(221, 221, 221);
  justify-content: space-between;
`;

const HeaderHome = styled.div``;

const HeaderEdit = styled.div``;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 14px;
  width: 30px;
  text-align: center;
  padding: 10px;
`;
