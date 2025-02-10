import { useState, useEffect } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import BallProvider from "../context/ContextProvider";

const Dex = () => {
  // 선택한 포켓몬을 새 배열로 작성
  const [ball, setBall] = useState([]);

  // 포켓몬을 선택하는 함수
  const AddPokemon = (item) => {
    // 배열의 길이(선택된 포켓몬)이 6개가 되지 않을 때 추가
    if (ball.length < 6) {
      ball.push(item);
    } else {
      alert("포켓몬은 6마리가 최대입니다.");
    }
    setBall([...ball]);
  };

  useEffect(() => {
    // 상태가 변경될 때마다 로컬 스토리지에 저장
    window.localStorage.setItem("ball", JSON.stringify(ball));
  }, [ball]);

  return (
    <>
      <BallProvider value={{ ball, setBall }}>
        <section>
          <Dashboard />
        </section>
        <section>
          <PokemonList AddPokemon={AddPokemon} />
        </section>
      </BallProvider>
    </>
  );
};

export default Dex;
