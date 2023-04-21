<script lang="ts" setup>
  // components
  import {
    HomeIcon,
    MagnifyingGlassIcon,
    ClockIcon,
    CheckIcon,
  } from '@heroicons/vue/24/outline'

  // router
  import { RouterLink } from 'vue-router'
</script>

<template>
  <div>
    <nav class="flex w-full flex-col items-stretch gap-8 p-4">
      <RouterLink
        class="flex-center group flex-col gap-3 p-1 text-xs font-semibold"
        to="/"
      >
        <HomeIcon class="grid-center w-5 text-yellow-500" />
        <span
          class="text-transparent transition-colors duration-300 group-hover:text-yellow-500"
        >
          Início
        </span>
      </RouterLink>

      <RouterLink
        class="flex-center group flex-col gap-3 p-1 text-xs font-semibold"
        to="/pesquisa"
      >
        <MagnifyingGlassIcon class="grid-center w-5 text-yellow-500" />
        <span
          class="text-transparent transition-colors duration-300 group-hover:text-yellow-500"
        >
          Pesquisa
        </span>
      </RouterLink>

      <RouterLink
        class="flex-center group flex-col gap-3 p-1 text-xs font-semibold"
        to="/pendentes"
      >
        <ClockIcon class="grid-center w-5 text-yellow-500" />
        <span
          class="text-transparent transition-colors duration-300 group-hover:text-yellow-500"
        >
          Pendentes
        </span>
      </RouterLink>

      <RouterLink
        class="flex-center group flex-col gap-3 p-1 text-xs font-semibold"
        to="/concluidos"
      >
        <CheckIcon class="grid-center w-5 text-yellow-500" />
        <span
          class="text-transparent transition-colors duration-300 group-hover:text-yellow-500"
        >
          Concluídos
        </span>
      </RouterLink>
    </nav>
  </div>
</template>
