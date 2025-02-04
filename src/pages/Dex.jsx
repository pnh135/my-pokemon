import { react, useState } from "react";

import Dashboard from "../components/Dashboard";
import PokemonCard from "../components/PokemonCard";

const Dex = () => {

    return ( 
        <>
        <section>
            <Dashboard/>
        </section>
        <section>
            <PokemonCard/>
        </section>
        </>
     );
}
 
export default Dex;