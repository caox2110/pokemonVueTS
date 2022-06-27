import { computed, ComputedRef, onMounted, reactive, ref, toRefs } from 'vue';

import { Pokemon, getPokemon } from '../../data';

const useGetPokemonDetail = () => {
  const state = reactive<{
    pokemon: Pokemon;
    stats: ComputedRef<number[]>;
    types: ComputedRef<string[]>;
  }>({
    pokemon: null as unknown as Pokemon,
    stats: computed<number[]>(() => pokemonStats()),
    types: computed<string[]>(() => pokemonTypes()),
  });

  const { pokemon, stats, types } = toRefs(state);
  const isBarChart = ref(true);

  const getData = async (id: string) => {
    state.pokemon = await getPokemon(id);
  };

  function pokemonStats(): number[] {
    if (state.pokemon) {
      return state.pokemon.stats?.map((stat) => stat.base_stat) ?? [];
    }
    return [];
  }

  function pokemonTypes(): string[] {
    if (state.pokemon) {
      return state.pokemon.types?.map((type) => type.type.name) ?? [];
    }
    return [];
  }

  function changeChart() {
    isBarChart.value = !isBarChart.value;
  }

  return { pokemon, stats, types, isBarChart, getData, changeChart };
};

export default useGetPokemonDetail;
