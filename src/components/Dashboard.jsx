import { react, useState } from "react";
import styled from "styled-components";
import Button from "../styles/Button";

// 리셋한 p 태그의 스타일 정하기
const StdP = styled.p`
  color: red;
`;

// 컨테이너의 스타일 정하기
const StdContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-content: space-evenly;
`;

const Dashboard = ({ ball, setBall, GetEmptyBalls }) => {
  // 포켓몬 삭제 기능
  const removePokemon = (id) => {
    const updateMyPokemon = ball.filter((item) => {
      return item.id !== id;
    });
    setBall(updateMyPokemon);
  };
  return (
    <>
      <StdP>나만의 포켓몬</StdP>
      {/* 클릭한 포켓몬을 가져오는 컨테이너 */}
      <StdContainer>
        {ball.map((item) => (
          <div key={item.id}>
            <div>
              <img src={item.img_url} />
            </div>
            <div>{item.korean_name}</div>
            <div>No.{item.id}</div>
            <Button onClick={() => removePokemon(item.id)}>제거</Button>
          </div>
        ))}

        {GetEmptyBalls()}
      </StdContainer>
    </>
  );
};

export default Dashboard;
