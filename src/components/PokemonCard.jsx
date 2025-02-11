import Button from "../styles/Button";
import Card from "../styles/Card";
import AddProvider from "../context/AddProvider";
import { useContext } from "react";
import { AddContext } from "../context/AddContext";

// 포켓몬 카드 형태 정하는 함수
const PokemonCard = ({ data }) => {
  const { AddPokemon } = useContext(AddContext);
  return (
    <>
      <AddProvider value={AddPokemon}>
        <Card>
          <div>
            <img src={data.img_url} />
          </div>
          <div className="card-name">{data.korean_name}</div>
          <div className="card-num">No.{data.id}</div>
          <Button onClick={AddPokemon}>추가</Button>
        </Card>
      </AddProvider>
    </>
  );
};

export default PokemonCard;
