import { computed, ComputedRef, reactive, toRefs } from 'vue';

import { Pokemon, getPokemons } from '../../data';

const useGetPokemons = () => {
  const state = reactive<{
    pokemons: Pokemon[];
    name: string;
    filteredPokemons: ComputedRef<Pokemon[]>;
  }>({
    pokemons: [] as Pokemon[],
    name: '',
    filteredPokemons: computed(() => searchPokemon()),
  });

  const { name, filteredPokemons } = toRefs(state);

  const getData = async () => {
    state.pokemons = await getPokemons();
  };

  function searchPokemon(): Pokemon[] {
    return state.pokemons.filter((pokemon: Pokemon) =>
      pokemon.name.toLowerCase().includes(state.name.toLowerCase())
    );
  }

  return { name, filteredPokemons, getData };
};

export default useGetPokemons;
