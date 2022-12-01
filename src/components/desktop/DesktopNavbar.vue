<script setup lang="ts">
  import { RouterLink } from 'vue-router'
</script>

<template>
  <ul class="w-full flex flex-col items-stretch gap-10 p-4 group">
    <div class="w-full h-px bg-neutral-100"></div>
    <li>
      <RouterLink
        class="flex h-10 min-w-fit justify-center items-center gap-3 text-neutral-100 font-semibold text-lg hover:bg-yellow-500 rounded-full px-3 py-4"
        to="/"
      >
        <i
          class="ri-home-line grid place-items-center rounded-full font-normal transition-colors duration-300"
        ></i>
        <span class="hidden group-hover:block text-base">Home</span>
      </RouterLink>
    </li>
    <li>
      <RouterLink
        class="flex h-10 min-w-fit justify-center items-center gap-3 text-neutral-100 font-semibold text-lg hover:bg-yellow-500 rounded-full px-3 py-4"
        to="/pesquisa"
      >
        <i
          class="ri-search-line grid place-items-center rounded-full font-normal transition-colors duration-300"
        ></i>
        <span class="hidden group-hover:block text-base">Pesquisa</span>
      </RouterLink>
    </li>
    <li>
      <RouterLink
         class="flex h-10 min-w-fit justify-center items-center gap-3 text-neutral-100 font-semibold text-lg hover:bg-yellow-500 rounded-full px-3 py-4"
        to="/pendentes"
      >
        <i
          class="ri-time-line grid place-items-center rounded-full font-normal transition-colors duration-300"
        ></i>
        <span class="hidden group-hover:block text-base">Pendentes</span>
      </RouterLink>
    </li>
    <li>
      <RouterLink
         class="flex h-10 min-w-fit justify-center items-center gap-3 text-neutral-100 font-semibold text-lg hover:bg-yellow-500 rounded-full px-3 py-4"
        to="/concluidos"
      >
        <i
          class="ri-check-double-line grid place-items-center rounded-full font-normal transition-colors duration-300"
        ></i>
        <span class="hidden group-hover:block text-base">Concluídos</span>
      </RouterLink>
    </li>
  </ul>
</template>
