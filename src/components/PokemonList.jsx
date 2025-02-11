import PokemonCard from "./PokemonCard";
import MOCK_DATA from "../data/MOCK_DATA";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 5%;
  display: flex;
  gap: 20px;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: transparent;
  justify-content: center;
  align-content: space-evenly;
`;

const PokemonList = () => {
  return (
    <>
      {/* 받은 포켓몬 카드 함수로 map 작성해서 리스트 만들기 */}
      <Container>
        {MOCK_DATA.map((data) => (
          //  카드를 누르면 디테일 페이지로 가도록 navigate 처리
          <div key={data.id}>
            <PokemonCard key={data.id} data={data} />
          </div>
        ))}
      </Container>
    </>
  );
};

export default PokemonList;
