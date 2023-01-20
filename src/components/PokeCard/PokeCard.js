import React from 'react';
import './PokeCard.css';

export default function PokeCard({ pokemon, url_image, type_1, pokedex, loading }) {
  if (loading) return <span className='loader'></span>;
  return (
    <div className={`poke-card-${type_1}`}>
      <img className="poke-image" src={url_image} alt={`image of ${pokemon}`} />
      <h1 className="name">{pokemon.toUpperCase()}</h1>
      <h3 className="type">{type_1}</h3>
      <div className='pokedex-div'>
        <a className="pokedex" href={pokedex} target='_blank' rel='noreferrer'>
          See the Pokedex Entry!
        </a>
      </div>
    </div>
  );
}