import styled from "styled-components";

const StdP= styled.p`
    color: red;
`;

const StdContainer = styled.div`
    display: flex;
    gap: 10px;

`

const StdBox= styled.div`
    width: 100px;
    height: 100px;
    border: 5px dotted green;
    background-color: white;
    margin: 20px;
`

const Dashboard = () => {
    return ( 
        <>
        <StdP>나만의 포켓몬</StdP>
        <StdContainer>
            <StdBox>첫번째 박스</StdBox>
            <StdBox>두번째 박스</StdBox>
            <StdBox>세번째 박스</StdBox>
            <StdBox>네번째 박스</StdBox>
            <StdBox>다섯번째 박스</StdBox>
            <StdBox>여섯번째 박스</StdBox>
        </StdContainer>
        </>
     );
}
 
export default Dashboard;