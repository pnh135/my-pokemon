import styled from "styled-components";

const StdBtn = styled.button`
        background-color: red;
        color: white;
    `
const PokemonCard = ({data}) => {

    return ( 
        <>
        <div>
                <div>{data.img_url}</div>
                <div>{data.korean_name}</div>
                <div>{data.id}</div>
                <StdBtn>추가</StdBtn>
        </div>    
        </>
     );
}
 
export default PokemonCard;