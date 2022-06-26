import { Pokemon, ApiResponse } from '..';

export const getPokemonsAdapter = (item: ApiResponse): Pokemon[] =>
  item.results.map((pokemon: Pokemon, index: number) => ({
    ...pokemon,
    id: index + 1,
  }));
