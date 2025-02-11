import styled from "styled-components";
import Button from "../styles/Button";
import Card from "../styles/Card";
import PokemonBall from "./PokemonBall";
import { useContext } from "react";
import { BallContext } from "../context/BallContext";

// 리셋한 p 태그의 스타일 정하기
const StdP = styled.p`
  color: red;
  font-size: 2.5em;
  margin: 2% 0 2% 0;
`;

// 컨테이너의 스타일 정하기
const StdContainer = styled.div`
  display: flex;
  gap: 5%;
  margin: 2% 0 7% 0;
  justify-content: center;
  align-content: space-evenly;
`;

// 컨테이너 안 박스 포켓볼 스타일 정하기
const StdBox = styled.div`
  width: 100px;
  height: 100px;
  border: 5px dashed #949494;
  background-color: white;
  margin: 20px;
`;

const Dashboard = () => {
  const { ball, setBall } = useContext(BallContext);

  // 선택한 포켓몬이 없을 때 포켓볼 이미지가 보이도록 하는 함수
  const GetEmptyBalls = () => {
    const EmptyBall = [];
    const MyBalls = ball.length;

    // for문을 돌면서 하나씩 rendering
    for (let i = 0; i < 6 - MyBalls; i++) {
      EmptyBall.push(
        <StdBox key={i} className="empty-card">
          <PokemonBall />
        </StdBox>
      );
    }
    return EmptyBall;
  };
  // 포켓몬 삭제 기능
  const removePokemon = (id) => {
    const removedPokemon = ball.filter((item) => {
      return item.id !== id;
    });
    setBall(removedPokemon);
  };

  console.log(ball);
  return (
    <>
      <StdP>나만의 포켓몬</StdP>
      {/* 클릭한 포켓몬을 가져오는 컨테이너 */}
      <StdContainer>
        {ball.map((item) => (
          <Card key={item.id}>
            <div>
              <img src={item.img_url} />
            </div>
            <div className="card-name">{item.korean_name}</div>
            <div className="card-num">No.{item.id}</div>
            <Button onClick={() => removePokemon(item.id)}>제거</Button>
          </Card>
        ))}

        {GetEmptyBalls()}
      </StdContainer>
    </>
  );
};

export default Dashboard;
