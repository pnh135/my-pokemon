import styled from "styled-components";

const StdBtn = styled.button`
        background-color: red;
        color: white;
    `
const PokemonCard = ({dataProps}) => {

    return ( 
        <>
        <div>
            <div>카드 형태</div>
                <div>{dataProps.img_url}</div>
                <div>{dataProps.korean_name}</div>
                <div>{dataProps.id}</div>
                <StdBtn>추가</StdBtn>
        </div>    
        </>
     );
}
 
export default PokemonCard;