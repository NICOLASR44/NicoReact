const NavBar = ({ pokemonIndex, pokemonList, handleClick }) => {
  const handlePokemonSelect = (index) => {
    const selectedPokemon = pokemonList[index].name;
    if (selectedPokemon === "pikachu") {
      alert("pika pikachu !!!");
    }
    handleClick(index);
  };

  return (
    <div className="Button">
      {pokemonList.map((pokemon, index) => (
        <button key={pokemon.name} onClick={() => handlePokemonSelect(index)}>
          {" "}
          {pokemon.name}{" "}
        </button>
      ))}
    </div>
  );
};

export default NavBar;
