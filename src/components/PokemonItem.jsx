import React from "react";
import styled from "styled-components";

const PokemonItem = () => {
    const StdBtn = styled.button`
        background-color: red;
        color: white;
    `
    return ( 
        <>
        <div>
            <div>{data.img_url}</div>
        <div>{data.korea_name}</div>
        <div>{data.id}</div>
        <StdBtn>추가</StdBtn>
        </div>
        
        </>
     );
}
 
export default PokemonItem;