import styled from "styled-components";
import Button from "../styles/Button";
import Card from "../styles/Card";

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
