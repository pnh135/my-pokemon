import styled from "styled-components";
import Button from "../styles/Button";

// 포켓몬 카드 스타일 정하기
const StyledCard = styled.div`
  margin-top: 6px;
  border-radius: 10px;
  box-shadow: 5px 5px 10px grey;
  background-color: white;
  background-position: center;
  flex: 0 0 14%;
`;
// 포켓몬 카드 형태 정하는 함수
const PokemonCard = ({ data, onClick }) => {
  return (
    <>
      <StyledCard>
        <div>
          <img src={data.img_url} />
        </div>
        <div>{data.korean_name}</div>
        <div>No.{data.id}</div>
        <Button onClick={onClick}>추가</Button>
      </StyledCard>
    </>
  );
};

export default PokemonCard;
