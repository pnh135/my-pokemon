import react from "react";

import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";

const Dex = () => {

    return ( 
        <>
        <section>
            <Dashboard/>
        </section>
        <section>
            <PokemonList/>
        </section>
        </>
     );
}
 
export default Dex;