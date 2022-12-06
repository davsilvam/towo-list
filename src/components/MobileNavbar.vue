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
  <nav class="w-full px-8 fixed bottom-6">
    <ul
      class="w-full bg-neutral-900 flex justify-between px-6 py-3 rounded-3xl text-neutral-100"
    >
      <li class="flex items-center">
        <RouterLink to="/">
          <HomeIcon class="w-5" />
        </RouterLink>
      </li>
      <li class="flex items-center">
        <RouterLink to="/pesquisa">
          <MagnifyingGlassIcon class="w-5" />
        </RouterLink>
      </li>
      <li class="flex items-center">
        <RouterLink to="/pendentes">
            <i
          class="ri-time-line text-xl"
        ></i>
        </RouterLink>
      </li>
      <li class="flex items-center">
        <RouterLink to="/concluidos">
            <i
          class="ri-check-double-line text-xl"
        ></i>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>
