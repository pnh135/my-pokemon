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
            <StdBox><img src="https://i.imgur.com/sJ5KcxJ.png" width="100"alt="..."/>
            </StdBox>
            <StdBox><img src="https://i.imgur.com/sJ5KcxJ.png" width="100"alt="..."/></StdBox>
            <StdBox><img src="https://i.imgur.com/sJ5KcxJ.png" width="100"alt="..."/></StdBox>
            <StdBox><img src="https://i.imgur.com/sJ5KcxJ.png" width="100"alt="..."/></StdBox>
            <StdBox><img src="https://i.imgur.com/sJ5KcxJ.png" width="100"alt="..."/></StdBox>
            <StdBox><img src="https://i.imgur.com/sJ5KcxJ.png" width="100"alt="..."/></StdBox>
        </StdContainer>
        </>
     );
}
 
export default Dashboard;