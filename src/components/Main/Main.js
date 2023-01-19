import React from 'react';
import { usePokemon } from '../../hooks/usePokemon.js';
import PokeCard from '../PokeCard/PokeCard.js';
import './Main.css';

export default function Main() {
  const pokemon = usePokemon();

  return (
    <div className='poke-card-container'>
      {pokemon.map((poke) => (
        <PokeCard key={poke.id} {...poke} />
      ))}
    </div>
  );
}
