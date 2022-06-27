<template>
  <div class="grid grid-cols-6 gap-1">
    <div class="col-span-1">
      <input
        type="text"
        class="mb-3 p-2 border-black-500 border-2 w-100"
        placeholder="Pokemon name"
        v-model="name"
      />
      <ul class="overflow-y-auto max-h-96">
        <li
          v-for="pokemon in filteredPokemons"
          :key="pokemon.id"
          class="p-2 rounded hover:text-blue-500 hover:bg-gray-100"
        >
          <span class="text-sm font-normal text-gray-500 mr-3">#{{ pokemon.id }}</span>
          <router-link :to="`/details/${pokemon.id}`" class="cursor-pointer">{{
            pokemon.name
          }}</router-link>
        </li>
      </ul>
    </div>
    <div class="col-span-5">
      <transition><router-view></router-view></transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

import { useGetPokemons } from '../helper';

const { name, filteredPokemons, getData } = useGetPokemons();

onMounted(() => getData());
</script>
