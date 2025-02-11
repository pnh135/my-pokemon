import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import { BallProvider } from "../context/ContextProvider";

const Dex = () => {
  return (
    <>
      <BallProvider>
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
