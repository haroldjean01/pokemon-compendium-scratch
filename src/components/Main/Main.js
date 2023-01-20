import React from 'react';
import { usePokemon } from '../../hooks/usePokemon.js';
import PokeCard from '../PokeCard/PokeCard.js';
import Select from '../Select/Select.js';
import './Main.css';
import background from './background.jpg';
import Query from '../Query/Query.js';

export default function Main() {
  const { pokemon, types, handleTypeChange, loading, handleSearch } = usePokemon();

  return (
    <div style={{ backgroundImage: `url(${background})`, backgroundSize: '50%', backgroundRepeat: 'repeat', width: '100%', height: '100%' }}>
      <Select types={types} handleTypeChange={handleTypeChange} />
      <Query handleSearch={handleSearch} />
      <div className="poke-card-container">
        {pokemon.map((poke) => (
          <PokeCard key={poke.id} {...poke} loading={loading} />
        ))}
      </div>
    </div>

  );
}
