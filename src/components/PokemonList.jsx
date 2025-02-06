import React, { useState } from "react";
import PokemonCard from "./PokemonCard";
import MOCK_DATA from "../data/MOCK_DATA";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: transparent;
  justify-content: center;
  align-content: space-evenly;
`;

const PokemonList = ({ AddPokemon }) => {
  return (
    <>
      {/* 받은 포켓몬 카드 함수로 map 작성해서 리스트 만들기 */}
      <Container>
        {MOCK_DATA.map((data) => (
          <PokemonCard
            key={data.id}
            data={data}
            onClick={() => AddPokemon(data)}
          />
        ))}
      </Container>
    </>
  );
};

export default PokemonList;
