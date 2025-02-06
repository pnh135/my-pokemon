import React from "react";
import PokemonCard from "./PokemonCard";
import MOCK_DATA from "../data/MOCK_DATA";

const PokemonList = () => {

    return ( 
        <>
        <div>
           { MOCK_DATA.map((data)=> {
            <PokemonCard key={data.id} data={data} dataProps={MOCK_DATA}/>
           })
           } 
        </div>
        </>
     );
}
 
export default PokemonList;