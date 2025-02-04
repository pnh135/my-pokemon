import React from "react";
import PokemonCard from "./PokemonCard";
import MOCK_DATA from "../data/MOCK_DATA";

const PokemonList = () => {
    const dataProps = MOCK_DATA

    return ( 
        <>
        <div>
           { dataProps.map((data)=> {
            <PokemonCard key={data.id} dataProps={dataProps}/>
           })
           } 
        </div>
        </>
     );
}
 
export default PokemonList;