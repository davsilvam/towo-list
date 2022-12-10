<script setup lang="ts">
  import { RouterLink } from 'vue-router'
  import {
    HomeIcon,
    MagnifyingGlassIcon,
    ClockIcon,
    CheckIcon,
  } from '@heroicons/vue/24/outline'
</script>

<template>
  <nav>
    <ul class="w-full flex flex-col items-stretch gap-10 p-4">
      <li>
        <RouterLink class="link group" to="/">
          <HomeIcon class="icon" />
          <span class="span">Início</span>
        </RouterLink>
      </li>
      <li>
        <RouterLink class="link group" to="/pesquisa">
          <MagnifyingGlassIcon class="icon" />
          <span class="span">Pesquisa</span>
        </RouterLink>
      </li>
      <li>
        <RouterLink class="link group" to="/pendentes">
          <ClockIcon class="icon" />
          <span class="span">Pendentes</span>
        </RouterLink>
      </li>
      <li>
        <RouterLink class="link group" to="/concluidos">
          <CheckIcon class="icon" />
          <span class="span">Concluídos</span>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
  .link {
    @apply flex-center flex-col p-1 gap-3 font-semibold text-lg;
  }

  .icon {
    @apply grid-center w-5 text-yellow-500;
  }
  .span {
    @apply text-transparent group-hover:text-yellow-500 text-xs transition-colors duration-300;
  }
</style>
