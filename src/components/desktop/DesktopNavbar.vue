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
      <hr class="w-full h-px bg-neutral-100" />
      <li>
        <RouterLink class="link" to="/">
          <HomeIcon class="icon" />
          <span class="span">Início</span>
        </RouterLink>
      </li>
      <li>
        <RouterLink class="link" to="/pesquisa">
          <MagnifyingGlassIcon class="icon" />
          <span class="span">Pesquisa</span>
        </RouterLink>
      </li>
      <li>
        <RouterLink class="link" to="/pendentes">
          <ClockIcon class="icon" />
          <span class="span">Pendentes</span>
        </RouterLink>
      </li>
      <li>
        <RouterLink class="link" to="/concluidos">
          <CheckIcon class="icon" />
          <span class="span">Concluídos</span>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
  .link {
    @apply min-w-fit h-10 flex-center gap-3 text-neutral-100 font-semibold text-lg rounded-full px-3 py-4 hover-bg hover:text-neutral-900 ;
  }

  .icon {
    @apply grid-center w-5;
  }
  .span {
    @apply hidden group-hover:block text-base;
  }
</style>
