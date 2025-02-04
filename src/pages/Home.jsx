import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return ( 
        <>
        <h1>home</h1>
        <Link to="/Dex"><button>포켓몬 도감 시작하기</button></Link>
        </>
     );
}
 
export default Home;