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
  <nav class="fixed bottom-6 lg:hidden w-full px-8">
    <ul
      class="w-full flex-between text-neutral-100 px-6 py-3 rounded-3xl bg-neutral-900"
    >
      <li class="flex-center">
        <RouterLink to="/">
          <HomeIcon class="w-5" />
        </RouterLink>
      </li>
      <li class="flex-center">
        <RouterLink to="/pesquisa">
          <MagnifyingGlassIcon class="w-5" />
        </RouterLink>
      </li>
      <li class="flex-center">
        <RouterLink to="/pendentes">
          <ClockIcon class="w-5" />
        </RouterLink>
      </li>
      <li class="flex-center">
        <RouterLink to="/concluidos">
          <CheckIcon class="w-5" />
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>
