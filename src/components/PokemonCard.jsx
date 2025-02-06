import styled from "styled-components";

const StdBtn = styled.button`
        background-color: red;
        color: white;
    `

const StyledCard = styled.div`
    margin-top: 6px;
    border-radius: 10px;
    box-shadow: 5px 5px 10px grey;
    background-color: white;
    background-position: center;
    overflow: hidden;
`

const PokemonCard = ({data}) => {

    return ( 
        <>
        <StyledCard>
                <div><image src={data.img_url}/></div>
                <div>{data.korean_name}</div>
                <div>{data.id}</div>
                <StdBtn>추가</StdBtn>
        </StyledCard>    
        </>
     );
}
 
export default PokemonCard;