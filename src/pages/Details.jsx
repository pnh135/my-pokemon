import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../styles/Button";

// 제목 박스 스타일 정하기
const StdName = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 50%;
  height: 30%;
  border: 5px solid black;
  margin: 0 auto;
  padding: 8px;
  background-color: #dedede;
`;

// 하이라이트 머리글 스타일 정하기
const StdColor = styled.div`
  border-radius: 8px;
  background-color: blue;
  color: white;
  width: 10%;
  margin: 0 auto 10px auto;
  padding: 2px;
`;

// 박스 안 텍스트 스타일 정하기
const StdNameTag = styled.span`
  margin: 20px;
  font-size: 1.3em;
`;

const Details = () => {
  // navigate로 받아온 state를 꺼내오기
  const { state } = useLocation();
  const navigate = useNavigate();
  return (
    <>
      <StdName>
        <StdNameTag>앗! 야생의 {state.korean_name}(이)가 나타났다!!</StdNameTag>
      </StdName>
      <div>
        <div>
          <img src={state.img_url} width={300} />
        </div>
        <StdNameTag>
          <StdColor>이름</StdColor>
          <div>{state.korean_name}</div>
        </StdNameTag>
        <StdNameTag>
          <StdColor>타입</StdColor>
          <div>{state.types}</div>
        </StdNameTag>
        <StdNameTag>
          <StdColor>설명</StdColor>
          {state.description}
        </StdNameTag>
        <div>
          {" "}
          <Button
            onClick={() => {
              navigate("/Dex");
            }}
          >
            뒤로가기
          </Button>{" "}
        </div>
      </div>
    </>
  );
};

export default Details;
