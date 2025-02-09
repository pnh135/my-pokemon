import React from "react";
import { Link } from "react-router-dom";
import Button from "../styles/Button";

const Home = () => {
  return (
    <>
      <img src="https://i.imgur.com/QUcU9Xi.png" width="500" alt="..." />
      <br />
      <Link to="/Dex">
        <Button>포켓몬 도감 시작하기</Button>
      </Link>
    </>
  );
};

export default Home;
