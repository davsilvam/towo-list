<script setup lang="ts">
  import { ExclamationCircleIcon } from '@heroicons/vue/24/solid'

  const classCard =
    'w-fit flex justify-between items-start gap-4 px-8 py-4 rounded-lg'
  const classAlertIcon = 'w-6 pt-1 text-yellow-500'
  const classAlertTitle = 'text-yellow-500 font-semibold'
  const classAlertDescription = 'text-neutral-400 text-sm'
</script>

<template>
  <div class="w-full flex items-center justify-center">
    <div id="card" :class="classCard">
      <ExclamationCircleIcon :class="classAlertIcon" />
      <div class="w-60 lg:w-96">
        <h3 :class="classAlertTitle">Ainda não há exercícios</h3>
        <p :class="classAlertDescription">
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
