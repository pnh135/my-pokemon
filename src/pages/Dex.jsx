import React, { useReducer, useContext, createContext } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import BallProvider from "../context/ContextProvider";
import AddProvider from "../context/AddProvider";
import { BallContext } from "../context/BallContext";

export const BallDispatch = React.createContext(BallContext);

const Dex = () => {
  const [ball, dispatch] = useReducer(reducer, INITTIAL_STATE);
  const { AddPokemon } = AddProvider(AddPokemon);
  return (
    <>
      <BallDispatch.Provider value={dispatch}>
        <section>
          <Dashboard />
        </section>
      </BallDispatch.Provider>
      <AddProvider value={{ AddPokemon }}>
        {" "}
        <section>
          <PokemonList />
        </section>
      </AddProvider>
    </>
  );
};

export default Dex;
