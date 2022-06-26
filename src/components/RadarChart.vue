<template>
  <div>
    <apexchart width="500" type="radar" :options="options" :series="series"></apexchart>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  series:Array<number>,
});

const options = computed(() => ({
  chart: {
    id: 'vuechart-example',
  },
  xaxis: {
    categories: ['Life Points', 'Attack', 'Defense', 'Special Attack', 'Special Defense', 'Speed'],
  },
}));

const series = computed(() => [
  {
    name: 'Stat',
    data: props.series,
  },
]);
</script>
