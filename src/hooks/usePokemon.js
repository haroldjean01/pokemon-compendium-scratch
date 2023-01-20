import { useEffect, useState } from 'react';
import { fetchInitialPokemon, fetchPokemon, fetchPokemonTypes } from '../services/fetchPokemon.js';

export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      // load our pokemon
      const data = await fetchInitialPokemon();
      // set our pokemon in state
      setPokemon(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      // load our types
      const data = await fetchPokemonTypes();
      // set our types in state
      setTypes(data);
    };
    fetchData();
  }, []);

  const handleTypeChange = async (type) => {
    const data = await fetchPokemon(type);
    setPokemon(data);
  };


  return { pokemon, types, handleTypeChange };
}
