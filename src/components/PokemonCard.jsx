import { useContext } from "react";
import Button from "../styles/Button";
import Card from "../styles/Card";
import { BallContext } from "../context/ContextProvider";
import { useNavigate } from "react-router-dom";

// 포켓몬 카드 형태 정하는 함수
const PokemonCard = ({ data }) => {
  const navigate = useNavigate();
  const { ball, setBall } = useContext(BallContext);

  const addPokemon = (pokemon) => {
    // 최대 6개까지만 선택 가능하도록 제한
    if (ball.length > 5) {
      return alert("최대 6개의 포켓몬만 선택 할 수 있습니다.");
    }
    // 이미 선택된 포켓몬인지 확인
    if (ball.some((item) => item.id === pokemon.id)) {
      alert("해당 포켓몬이 이미 존재합니다.");
    } else {
      // 선택되지 않은 포켓몬이면 myPokemon 배열에 추가
      setBall([...ball, pokemon]);
    }
  };

  return (
    <>
      <Card>
        <div>
          {" "}
          <div
            onClick={() =>
              navigate(`/Details/?id=${data.id}`, {
                state: {
                  img_url: `${data.img_url}`,
                  korean_name: `${data.korean_name}`,
                  types: `${data.types}`,
                  description: `${data.description}`,
                },
              })
            }
          >
            <img src={data.img_url} />
          </div>
          <div className="card-name">{data.korean_name}</div>
          <div className="card-num">No.{data.id}</div>
        </div>

        <Button onClick={() => addPokemon(data)}>추가</Button>
      </Card>
    </>
  );
};

export default PokemonCard;
