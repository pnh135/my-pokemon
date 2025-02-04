import styled from "styled-components";
import MOCK_DATA from "../data/MOCK_DATA";

const PokemonCard = (data) => {
    const StdBtn = styled.button`
        background-color: red;
        color: white;
    `
    return ( 
        <>
        <div>
            <div>카드 형태</div>
                <div>{MOCK_DATA.img_url}</div>
                <div>{MOCK_DATA.korean_name}</div>
                <div>{MOCK_DATA.id}</div>
                <StdBtn>추가</StdBtn>
        </div>    
        </>
     );
}
 
export default PokemonCard;