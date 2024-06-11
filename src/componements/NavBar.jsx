const NavBar = ({ pokemonIndex, pokemonList, handleClick }) => {
  return (
    <div className="Button">
      {pokemonList.map((pokemon, index) => (
        <button key={pokemon.name} onClick={() => handleClick(index)}>
          {" "}
          {pokemon.name}{" "}
        </button>
      ))}
    </div>
  );
};

export default NavBar;
