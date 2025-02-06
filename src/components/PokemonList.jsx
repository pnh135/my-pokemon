import React, { useState } from "react";
import PokemonCard from "./PokemonCard";
import MOCK_DATA from "../data/MOCK_DATA";
import styled from "styled-components";

const Container=styled.div`
    display: flex;
    gap: 20px;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: transparent;
    justify-content: center ;
    align-content: space-evenly;
`

const PokemonList = () => {
   // 선택한 포켓몬을 새 배열로 작성
   const [ball, setBall] = useState([])
   // 포켓몬을 선택하는 함수
   const AddPokemon = (item) => {

      setBall([...ball,item]);
     
      // item을 그대로 추가 
      // length가 6 이상일 때 alert 
      // return으로 함수 빠져나오기 
      // ball에 some으로 중복 확인 > 그대로 추가 > 아닐시 alert 
      // 

      console.log(ball)
   }

    return ( 
        <>
        {/* 받은 포켓몬 카드 함수로 map 작성해서 리스트 만들기 */}
        <Container>
           { MOCK_DATA.map((data)=> 
            <PokemonCard key={data.id} data={data} onClick={()=>AddPokemon(data)}/>
           )
           } 
        </Container>
        </>
     );
}
 
export default PokemonList;