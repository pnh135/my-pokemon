import React from "react";
import PokemonCard from "./PokemonCard";
import MOCK_DATA from "../data/MOCK_DATA";
import styled from "styled-components";

const Container=styled.div`
    margin: 20px 8.5% 0 8.5%;
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(6, 1fr);
    background-color: transparent;
    justify-content: center ;
`

const PokemonList = () => {

    return ( 
        <>
        <Container>
           { MOCK_DATA.map((data)=> 
            <PokemonCard key={data.id} data={data}/>
           )
           } 
        </Container>
        </>
     );
}
 
export default PokemonList;