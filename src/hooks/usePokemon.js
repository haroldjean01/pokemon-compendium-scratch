import { useEffect, useState } from 'react';
import { fetchInitialPokemon, fetchPokemon, fetchPokemonByName, fetchPokemonTypes } from '../services/fetchPokemon.js';

export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      // load our pokemon
      const data = await fetchInitialPokemon();
      // set our pokemon in state
      setPokemon(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      // load our types
      const data = await fetchPokemonTypes();
      // set our types in state
      setTypes(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleTypeChange = async (type) => {
    if (type === 'all') {
      const data = await fetchInitialPokemon();
      setPokemon(data);
    } else {
      const data = await fetchPokemon(type);
      setPokemon(data);
    }
  };

  const handleSearch = async (name) => {
    const data = await fetchPokemonByName(name);
    setPokemon(data);
  };

  return { pokemon, types, handleTypeChange, loading, handleSearch };
}
