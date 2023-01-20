import React from 'react';
import { usePokemon } from '../../hooks/usePokemon.js';
import PokeCard from '../PokeCard/PokeCard.js';
import Select from '../Select/Select.js';
import './Main.css';

export default function Main() {
  const { pokemon, types, handleTypeChange, loading } = usePokemon();

  return (
    <>
      <Select types={types} handleTypeChange={handleTypeChange} />
      <div className="poke-card-container">
        {pokemon.map((poke) => (
          <PokeCard key={poke.id} {...poke} loading={loading} />
        ))}
      </div>
    </>
  );
}
