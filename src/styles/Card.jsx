import styled from "styled-components";

// 포켓몬 카드 스타일 정하기
const StyledCard = styled.div`
  max-width: 120px;
  margin-top: 6px;
  border: 3px;
  padding: 5px;
  border-radius: 10px;
  box-shadow: 5px 5px 10px grey;
  background-color: white;
  background-position: center;
  flex: 0 0 14%;
`;

const Card = ({ children }) => {
  return (
    <>
      <StyledCard>{children}</StyledCard>
    </>
  );
};

export default Card;
