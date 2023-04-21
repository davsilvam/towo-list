<script lang="ts" setup>
  import { ExclamationCircleIcon } from '@heroicons/vue/24/solid'
</script>

<template>
  <div class="flex-center w-full">
    <div
      class="flex-between bg-topography w-fit items-start gap-4 rounded-lg border border-yellow-500 px-8 py-4"
    >
      <ExclamationCircleIcon class="w-6 pt-1 text-yellow-500" />

      <div class="w-60 lg:w-96">
        <strong class="font-semibold text-yellow-500">
          Ainda não há exercícios
        </strong>

        <p class="text-sm text-neutral-300">
          Adicione exercício e comece a registrar seus treinos.
        </p>
      </div>
    </div>
  </div>
</template>
