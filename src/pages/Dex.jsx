import { react, useState } from "react";

import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";

const Dex = () => {
  // 선택한 포켓몬을 새 배열로 작성
  const [ball, setBall] = useState([]);
  // 포켓몬을 선택하는 함수
  const AddPokemon = (item) => {
    // if (ball.some(item)===true) {
    //    alert("이미 추가된 포켓몬입니다.")
    // }else if (ball.length >= 6) {
    //    alert("포켓몬은 최대 6개입니다.")
    // } else {
    //   setBall([...ball,item]);
    // }
    setBall([...ball, item]);
    // return console.log(ball);

    // item을 그대로 추가
    // length가 6 이상일 때 alert
    // return으로 함수 빠져나오기
    // ball에 some으로 중복 확인 > 그대로 추가 > 아닐시 alert
    //
  };

  return (
    <>
      <section>
        <Dashboard AddPokemon={AddPokemon} />
      </section>
      <section>
        <PokemonList AddPokemon={AddPokemon} />
      </section>
    </>
  );
};

export default Dex;
