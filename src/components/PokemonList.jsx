import PokemonCard from "./PokemonCard";
import MOCK_DATA from "../data/MOCK_DATA";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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

const PokemonList = ({ AddPokemon }) => {
  const navigate = useNavigate();
  return (
    <>
      {/* 받은 포켓몬 카드 함수로 map 작성해서 리스트 만들기 */}
      <Container>
        {MOCK_DATA.map((data) => (
          //  카드를 누르면 디테일 페이지로 가도록 navigate 처리
          <div
            key={data.id}
            onClick={() => {
              navigate(`/Details/?id=${data.id}`, {
                state: {
                  img_url: `${data.img_url}`,
                  korean_name: `${data.korean_name}`,
                  types: `${data.types}`,
                  description: `${data.description}`,
                },
              });
            }}
          >
            <PokemonCard
              key={data.id}
              data={data}
              onClick={() => AddPokemon(data)}
            />
          </div>
        ))}
      </Container>
    </>
  );
};

export default PokemonList;
