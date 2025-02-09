import Button from "../styles/Button";
import Card from "../styles/Card";

// 포켓몬 카드 형태 정하는 함수
const PokemonCard = ({ data, onClick }) => {
  return (
    <>
      <Card>
        <div>
          <img src={data.img_url} />
        </div>
        <div className="card-name">{data.korean_name}</div>
        <div className="card-num">No.{data.id}</div>
        <Button onClick={onClick}>추가</Button>
      </Card>
    </>
  );
};

export default PokemonCard;
