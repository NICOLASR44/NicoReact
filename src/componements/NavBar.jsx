const NavBar = ({ pokemonIndex, pokemonList, handleNext, handlePrevious }) => {
  return (
    <div>
      {pokemonIndex > 0 && <button onClick={handlePrevious}>Précédent</button>}
      {pokemonIndex < pokemonList.length - 1 && <button onClick={handleNext}>Suivant</button>}
    </div>
  );
};

export default NavBar;
