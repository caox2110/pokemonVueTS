<template>
  <nav class="bg-sky-500 py-2 md:py-4 mb-4">
    <div class="container px-4 mx-auto md:flex md:items-center">
      <div class="flex justify-between items-center">
        <router-link to="/" class="font-bold text-xl text-white">Pokemons Vue</router-link>
        <button
          class="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
          id="navbar-toggle"
        >
          <i class="fas fa-bars"></i>
        </button>
      </div>
    </div>
  </nav>
</template>
