import React, { PropTypes } from 'react';
import Pokemon from './list-item-component';

export default function Pokemons({
  pokemons,
  selectPokemon,
  currentPokemon,
}) {
  return(
    <div>
      <div>Current Pokemon: {currentPokemon} </div>
      {pokemons.map(pokemon => <Pokemon Name={pokemon.name} selectPokemon={() => selectPokemon(pokemon.name)}/>)}
    </div>
  );
}
