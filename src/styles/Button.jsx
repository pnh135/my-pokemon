import styled from "styled-components";
import "@kfonts/neodgm";

// 버튼 스타일 정하기
const StdBtn = styled.button`
  background-color: red;
  color: white;
  border-radius: 6px;
  padding: 5px;
  font-family: "Neo둥근모", "NeoDunggeunmo", cursive;

  &:hover {
    background: #f07833;
  }
`;
const Button = ({ onClick, children }) => {
  return (
    <>
      <StdBtn onClick={onClick}>{children}</StdBtn>
    </>
  );
};

export default Button;
