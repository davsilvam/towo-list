<script setup lang="ts">
  import { RouterLink } from 'vue-router'
  import {
    HomeIcon,
    MagnifyingGlassIcon,
    ClockIcon,
    CheckIcon,
  } from '@heroicons/vue/24/outline'

  const classLink =
    'min-w-fit h-10 flex-center gap-3 text-neutral-100 font-semibold text-lg rounded-full px-3 py-4 hover-bg'
  const classIcon = 'grid-center w-5'
  const classSpan = 'hidden group-hover:block text-base'
</script>

<template>
  <nav>
    <ul class="w-full flex flex-col items-stretch gap-10 p-4 group">
      <hr class="w-full h-px bg-neutral-100" />
      <li>
        <RouterLink :class="classLink" to="/">
          <HomeIcon :class="classIcon" />
          <span :class="classSpan">Início</span>
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
