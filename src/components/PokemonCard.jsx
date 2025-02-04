import PokemonList from "./PokemonList";

const PokemonCard = () => {
    return ( 
        <>
        카드 뿌리기
        <PokemonList/>
        {/* {data.map((data) =>{
            <div>
                <div>{data.img}</div>
                <div>{data.name}</div>
                <div>{data.img}</div>
            </div>
        })} */}
        </>
     );
}
 
export default PokemonCard;