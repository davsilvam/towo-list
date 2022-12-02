<script setup lang="ts">
  import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="w-full px-8 fixed bottom-6">
    <ul
      class="w-full bg-neutral-900 flex justify-between px-6 py-3 rounded-3xl text-neutral-100"
    >
      <li>
        <RouterLink to="/">
          <i class="ri-home-line text-xl"></i>
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/pesquisa">
          <i class="ri-search-line text-xl"></i>
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/pendentes">
          <i class="ri-time-line text-xl"></i>
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/concluidos">
          <i class="ri-check-double-line text-xl"></i>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>
