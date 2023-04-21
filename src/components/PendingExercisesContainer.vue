<script lang="ts" setup>
  // components
  import ExerciseCard from './ExerciseCard.vue'

  // router
  import { RouterLink } from 'vue-router'

  // stores
  import { useExercises } from '../store'
  import { storeToRefs } from 'pinia'

  const { pendingExercises } = storeToRefs(useExercises())
</script>

<template>
  <section class="flex w-full flex-col">
    <header class="flex-between w-full">
      <h2 class="text-lg font-bold text-yellow-500">Exercícios pendentes</h2>

      <RouterLink
        class="text-xs font-semibold text-neutral-400"
        to="/pendentes"
      >
        Ver todos
      </RouterLink>
    </header>

    <div class="flex w-full flex-col gap-2 pt-4">
      <ExerciseCard
        v-for="exercise in pendingExercises"
        :exercise="exercise"
        :key="exercise.id"
      />
    </div>
  </section>
</template>
