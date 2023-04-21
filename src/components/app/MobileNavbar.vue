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
  <div class="fixed bottom-6 w-full px-8 lg:hidden">
    <nav
      class="flex-between bg-topography w-full rounded-3xl border border-yellow-500 bg-opacity-80 px-6 py-3 text-neutral-100"
    >
      <RouterLink to="/">
        <HomeIcon class="w-5 text-yellow-500" />
      </RouterLink>

      <RouterLink to="/pesquisa">
        <MagnifyingGlassIcon class="w-5 text-yellow-500" />
      </RouterLink>

      <RouterLink to="/pendentes">
        <ClockIcon class="w-5 text-yellow-500" />
      </RouterLink>

      <RouterLink to="/concluidos">
        <CheckIcon class="w-5 text-yellow-500" />
      </RouterLink>
    </nav>
  </div>
</template>
