import PokemonCard from "./componements/PokemonCard";
import "./App.css";
import { useState } from "react";
import NavBar from "./componements/NavBar";

const App = () => {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

  const [pokemonIndex, setPokemonIndex] = useState(0);
  const handlePrevious = () => {
    setPokemonIndex(pokemonIndex - 1);
  };
  const handleNext = () => {
    setPokemonIndex(pokemonIndex + 1);
  };

  return (
    <div>
      <NavBar
        pokemonIndex={pokemonIndex}
        pokemonList={pokemonList}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
      />
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    </div>
  );
};

export default App;
