<script setup lang="ts">
  import { PlusCircleIcon } from '@heroicons/vue/20/solid'

  const classButton =
    'w-fit py-1.5 px-3 flex-center gap-1 rounded-md bg-yellow-500'
</script>

<template>
  <button :class="classButton">
    <span class="text-xs font-semibold text-neutral-100">Novo exercício</span>
    <PlusCircleIcon class="w-4 text-neutral-100" />
  </button>
</template>
