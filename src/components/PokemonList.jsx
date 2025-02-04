import {React, useState} from "react";
import MOCK_DATA from "../data/MOCK_DATA";

const PokemonList = () => {
    const [data, setData] = useState(MOCK_DATA)
    
    return ( 
        <>
        <div>리스트</div>
        </>
     );
}
 
export default PokemonList;