import { apiUrl } from '../../helper';
import { Pokemon, getPokemonsAdapter } from '..';

export const getPokemons = async (): Promise<Pokemon[]> => {
  return await fetch(`${apiUrl.baseURL}?limit=154`)
    .then((response) => response.json())
    .then((data) => getPokemonsAdapter(data))
    .catch(() => []);
};

export const getPokemon = async (id: string): Promise<Pokemon> => {
  return await fetch(`${apiUrl.baseURL}${id}`)
    .then((response) => response.json())
    .then((data) => data);
};
