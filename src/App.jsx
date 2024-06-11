import PokemonCard from "./componements/PokemonCard";

const App = () => {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];

  return (
    <div>
      <PokemonCard pokemon={pokemonList[1]} />
      <PokemonCard pokemon={pokemonList[0]} />
    </div>
  );
};

export default App;
