import React from 'react';
import { usePokemon } from '../../hooks/usePokemon.js';
import PokeCard from '../PokeCard/PokeCard.js';
import Select from '../Select/Select.js';
import './Main.css';

export default function Main() {
  const { pokemon, types } = usePokemon();

  return (
    <>
      <Select types={types} />
      <div className="poke-card-container">
        {pokemon.map((poke) => (
          <PokeCard key={poke.id} {...poke} />
        ))}
      </div>
    </>
  );
}
