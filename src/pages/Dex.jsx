import { useContext } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import BallProvider from "../context/ContextProvider";
import { BallContext } from "../context/BallContext";

const Dex = () => {
  const { ball, setBall } = useContext(BallContext);
  // 포켓몬을 선택하는 함수

  // useEffect(() => {
  //   // 상태가 변경될 때마다 로컬 스토리지에 저장
  //   window.localStorage.setItem("ball", JSON.stringify(ball));
  // }, [ball]);
  // 모든 상태 변경을 감지

  return (
    <>
      <BallProvider value={{ ball, setBall }}>
        <section>
          <Dashboard />
        </section>
        <section>
          <PokemonList />
        </section>
      </BallProvider>
    </>
  );
};

export default Dex;
