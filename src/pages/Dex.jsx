import { react, useState, useEffect } from "react";

import styled from "styled-components";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import PokemonBall from "../components/PokemonBall";

// 컨테이너 안 박스 포켓볼 스타일 정하기
const StdBox = styled.div`
  width: 100px;
  height: 100px;
  border: 5px dashed #949494;
  background-color: white;
  margin: 20px;
`;

const Dex = () => {
  // 선택한 포켓몬을 새 배열로 작성
  const [ball, setBall] = useState([]);

  // 선택한 포켓몬이 없을 때 이미지가 보이도록 하는 함수
  const GetEmptyBalls = () => {
    const EmptyBall = [];
    const MyBalls = 6 - ball.length;

    for (let i = 0; i < MyBalls; i++) {
      EmptyBall.push(
        <StdBox key={i} className="empty-card">
          <PokemonBall />
        </StdBox>
      );
    }
    return EmptyBall;
  };

  // 포켓몬을 선택하는 함수
  const AddPokemon = (item) => {
    if (ball.length < 6) {
      ball.push(item);
    } else {
      alert("포켓몬은 6마리가 최대입니다.");
    }
    setBall([...ball]);
  };

  // useEffect(() => {
  //   // 상태가 변경될 때마다 로컬 스토리지에 저장
  //   let balls = window.localStorage.getItem("balls")
  //   window.localStorage.setItem("balls", JSON.stringify(balls));
  // }, [balls]);

  return (
    <>
      <section>
        <Dashboard
          ball={ball}
          setBall={setBall}
          GetEmptyBalls={GetEmptyBalls}
          s
        />
      </section>
      <section>
        <PokemonList AddPokemon={AddPokemon} />
      </section>
    </>
  );
};

export default Dex;
