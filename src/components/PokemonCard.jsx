import { useContext } from "react";
import Button from "../styles/Button";
import Card from "../styles/Card";
import { BallContext } from "../context/ContextProvider";

// 포켓몬 카드 형태 정하는 함수
const PokemonCard = ({ data }) => {
  const { ball, setBall } = useContext(BallContext);

  const AddPokemon = (item) => {
    // 배열의 길이(선택된 포켓몬)이 6개가 되지 않을 때 추가
    if (ball.length < 6) {
      ball.push(item);
    } else {
      alert("포켓몬은 6마리가 최대입니다.");
    }
    setBall([...ball, item]);
  };

  return (
    <>
      <Card>
        <div>
          <img src={data.img_url} />
        </div>
        <div className="card-name">{data.korean_name}</div>
        <div className="card-num">No.{data.id}</div>
        <Button onClick={AddPokemon}>추가</Button>
      </Card>
    </>
  );
};

export default PokemonCard;
