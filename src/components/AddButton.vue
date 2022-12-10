<script setup lang="ts">
  import { PlusIcon } from '@heroicons/vue/20/solid'
</script>

<template>
  <button
    class="flex-center w-fit gap-2 py-1 px-2 lg:py-2 lg:px-4 rounded-md bg-yellow-500"
  >
    <PlusIcon class="w-4 lg:w-6 text-neutral-900" />
    <span class="text-sm lg:text-base font-semibold text-neutral-900">Novo exercício</span>
  </button>
</template>
