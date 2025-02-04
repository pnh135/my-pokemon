import PokemonList from "./PokemonList";
import styled from "styled-components";

const PokemonCard = () => {
    const StdBtn = styled.button`
        background-color: red;
        color: white;
    `
    return ( 
        <>
        카드 형태
        <PokemonList/>
        <div>
                <div>{card.img_url}</div>
                <div>{card.korean_name}</div>
                <div>{card.id}</div>
                <StdBtn>추가</StdBtn>
        </div>
            
        </>
     );
}
 
export default PokemonCard;