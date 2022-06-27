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
          <div class="flex-1 grid place-items-end">
            <button
              type="button"
              @click="changeChart()"
              class="inline-block px-6 py-2.5 my-4 self-end bg-sky-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-sky-700 hover:shadow-lg focus:bg-sky-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Change Chart to {{ isBarChart ? 'Radar' : 'Bar' }}
            </button>
            <component :is="isBarChart ? BarChart : RadarChart" :series="stats" />
          </div>
        </div>
      </div>
    </div>
    <div v-else><p>No data available</p></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

import BarChart from '../components/BarChart.vue';
import RadarChart from '../components/RadarChart.vue';

import { useGetPokemonDetail } from '../helper';

const route = useRoute();

const { pokemon, stats, types, isBarChart, getData, changeChart } = useGetPokemonDetail();

onMounted(() => getData(String(route.params.id)));

watch(route, () => getData(String(route.params.id)));

</script>
