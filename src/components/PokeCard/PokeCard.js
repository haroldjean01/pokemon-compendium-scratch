import React from 'react';
import './PokeCard.css';

export default function PokeCard({ pokemon, url_image, type_1, pokedex, loading }) {
  if (loading) return <p>Loading...</p>;
  return (
    <div className="poke-card">
      <img className="poke-image" src={url_image} alt={`image of ${pokemon}`} />
      <h1 className="name">{pokemon.toUpperCase()}</h1>
      <h3 className="type">{type_1}</h3>
      <a className="pokedex" href={pokedex}>
        {pokedex}
      </a>
    </div>
  );
}
