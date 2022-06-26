<script setup lang="ts">
import Header from './components/Header.vue';
</script>

<template>
  <Header />
  <transition
    ><div class="container mx-auto px-4"><router-view></router-view></div
  ></transition>
</template>
<style>
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 1.5s;
}
</style>
