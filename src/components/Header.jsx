import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderGroup>
      <HeaderHome>
        <StyledLink to={"/"}>홈</StyledLink>
      </HeaderHome>
      <HeaderEdit>
        {/* 임시로 홈으로 가도록 해놓았습니다. */}
        <StyledLink to={"/"}>수정</StyledLink>
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
