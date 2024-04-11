import React from 'react';
import PokemonCard from './PokemonCard';
import '../components/PokemonList.css';

function PokemonList({ pokemons }) {
  return (
    <div>
      {pokemons.map(pokemon => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  );
}

export default PokemonList;
