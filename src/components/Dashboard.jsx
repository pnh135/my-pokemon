import styled from "styled-components";

// 리셋한 p 태그의 스타일 정하기 
const StdP= styled.p`
    color: red;
`;

// 컨테이너의 스타일 정하기 
const StdContainer = styled.div`
    display: flex;
    gap: 10px;

`
// 컨테이너 안 박스 포켓몬 스타일 정하기 
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
        {/* 클릭한 포켓몬을 가져오는 컨테이너 */}
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