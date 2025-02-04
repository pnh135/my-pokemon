import PokemonList from "./PokemonList";

const PokemonCard = () => {
    return ( 
        <>
        카드 뿌리기
        <PokemonList/>
        {/* {data.map((card) =>{
            <div key={card.id}>
                <div>{card.img_url}</div>
                <div>{card.korean_name}</div>
                <div>{card.id}</div>
            </div>
        })} */}
        </>
     );
}
 
export default PokemonCard;