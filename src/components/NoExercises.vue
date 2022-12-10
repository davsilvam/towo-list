<script setup lang="ts">
  import { ExclamationCircleIcon } from '@heroicons/vue/24/solid'
</script>

<template>
  <div class="w-full flex-center">
    <div
      class="w-fit flex-between items-start gap-4 px-8 py-4 rounded-lg bg-topography border border-yellow-500"
    >
      <ExclamationCircleIcon class="w-6 text-yellow-500 pt-1" />
      <div class="w-60 lg:w-96">
        <h3 class="font-semibold text-yellow-500">Ainda não há exercícios</h3>
        <p class="text-sm text-neutral-300">
          Adicione exercício e comece a registrar seus treinos.
        </p>
      </div>
    </div>
  </div>
</template>
