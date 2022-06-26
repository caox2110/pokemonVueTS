<template>
  <div>
    <div v-if="pokemon">
      <div class="w-4/6 mx-auto rounded-xl p-10 shadow-lg">
        <h1 class="font-black md:text-3xl text-xl text-sky-700 mb-2">{{ pokemon.name }}</h1>
        <span
          v-for="type in types"
          :key="type"
          class="py-1 px-2 mt-3 mr-2 shadow-md rounded-full bg-sky-400 text-white font-semibold"
          >{{ type }}</span
        >

        <div class="flex flex-wrap">
          <div class="flex-1 grid place-items-center">
            <img
              :src="pokemon.sprites.front_default"
              :alt="`image for ${pokemon.name}`"
              class="w-48 h-48"
            />
          </div>
          <div class="flex-1">
            <button type="button" @click="changeChart()">{{ isBarChart ? 'Radar' : 'Bar' }}</button>
            <component :is="isBarChart ? BarChart : RadarChart" :series="stats" />
          </div>
        </div>
      </div>
    </div>
    <div v-else><p>No data available</p></div>
  </div>
</template>

<script setup lang="ts">
import { computed, ComputedRef, onMounted, reactive, ref, toRefs, watch } from 'vue';
import { useRoute } from 'vue-router';

import BarChart from '../components/BarChart.vue';
import RadarChart from '../components/RadarChart.vue';

import { Pokemon, getPokemon } from '../data';

const route = useRoute();
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

onMounted(() => getData());

watch(route, () => getData());

const getData = async () => {
  state.pokemon = await getPokemon(String(route.params.id));
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
</script>

<style scope>

</style>
