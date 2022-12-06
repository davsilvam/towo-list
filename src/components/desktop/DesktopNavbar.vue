<script setup lang="ts">
  import { RouterLink } from 'vue-router'
  import {
    HomeIcon,
    MagnifyingGlassIcon,
    ClockIcon,
    CheckIcon,
  } from '@heroicons/vue/24/outline'

  const classLink =
    'flex h-10 min-w-fit justify-center items-center gap-3 text-neutral-100 font-semibold text-lg hover:bg-yellow-500 rounded-full px-3 py-4 transition-colors duration-300'
  const classIcon = 'grid place-items-center w-5'
  const classSpan = 'hidden group-hover:block text-base'
</script>

<template>
  <nav>
    <ul class="w-full flex flex-col items-stretch gap-10 p-4 group">
      <div class="w-full h-px bg-neutral-100"></div>
      <li>
        <RouterLink :class="classLink" to="/">
          <HomeIcon :class="classIcon" />
          <span :class="classSpan">Home</span>
        </RouterLink>
      </li>
      <li>
        <RouterLink :class="classLink" to="/pesquisa">
          <MagnifyingGlassIcon :class="classIcon" />
          <span :class="classSpan">Pesquisa</span>
        </RouterLink>
      </li>
      <li>
        <RouterLink :class="classLink" to="/pendentes">
          <ClockIcon :class="classIcon" />
          <span :class="classSpan">Pendentes</span>
        </RouterLink>
      </li>
      <li>
        <RouterLink :class="classLink" to="/concluidos">
          <CheckIcon :class="classIcon" />
          <span :class="classSpan">Concluídos</span>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>
