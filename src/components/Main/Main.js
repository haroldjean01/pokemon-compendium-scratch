import React from 'react';
import { usePokemon } from '../../hooks/usePokemon.js';

export default function Main() {
  const pokemon = usePokemon();

  return (
    <div>
      {pokemon.map((poke) => (
        <p key={poke.id}>
          {poke.pokemon}
        </p>
      ))}
    </div>
  );
}
