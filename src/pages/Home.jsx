import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return ( 
        <>
        <h1>home</h1>
        <img src="https://i.imgur.com/QUcU9Xi.png" width="500" alt="..."/>
        <Link to="/Dex"><button>포켓몬 도감 시작하기</button></Link>
        </>
     );
}
 
export default Home;