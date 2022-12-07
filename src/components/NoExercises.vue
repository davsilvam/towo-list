<script setup lang="ts">
  import { ExclamationCircleIcon } from '@heroicons/vue/24/solid'
</script>

<template>
  <div class="w-full flex-center">
    <div
      id="card"
      class="w-fit flex-between items-start gap-4 px-8 py-4 rounded-lg"
    >
      <ExclamationCircleIcon class="w-6 text-yellow-500 pt-1" />
      <div class="w-60 lg:w-96">
        <h3 class="font-semibold text-yellow-500">Ainda não há exercícios</h3>
        <p class="text-sm text-neutral-400">
          Adicione exercício e comece a registrar seus treinos.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  #card {
    background: rgba(38, 38, 38, 0.65);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(8.1px);
    -webkit-backdrop-filter: blur(8.1px);
    border: 1px solid rgba(38, 38, 38, 0.21);
  }
</style>
