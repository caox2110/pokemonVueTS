import { Pokemon } from './pokemon.model';

export interface ApiResponse {
  count: number;
  results: Pokemon[];
}
