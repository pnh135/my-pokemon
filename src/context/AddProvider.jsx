import { useContext } from "react";
import { BallContext } from "./BallContext";
import { AddContext } from "./AddContext";
import BallProvider from "./ContextProvider";

const AddProvider = ({ Children }) => {
  const AddPokemon = (item) => {
    // 배열의 길이(선택된 포켓몬)이 6개가 되지 않을 때 추가
    if (ball.length < 6) {
      ball.push(item);
    } else {
      alert("포켓몬은 6마리가 최대입니다.");
    }
    setBall([...ball, item]);
  };
  const { ball, setBall } = useContext(BallContext);
  return (
    <>
      <BallProvider value={ball}>
        <AddContext.Provider value={AddPokemon}>{Children}</AddContext.Provider>
      </BallProvider>
    </>
  );
};

export default AddProvider;
