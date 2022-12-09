<script setup lang="ts">
  import { RouterLink } from 'vue-router'
  import { useExercises } from '../store'
  import ExerciseCard from './ExerciseCard.vue'

  const exercises = useExercises()
</script>

<template>
  <section class="w-full flex flex-col">
    <header class="w-full flex-between">
      <h2 class="text-lg font-bold text-yellow-500">Exercícios pendentes</h2>
      <RouterLink class="all-link" to="/pendentes">Ver todos</RouterLink>
    </header>
    <div class="w-full pt-4 flex flex-col gap-2">
      <ExerciseCard
        v-for="exercise in exercises.pendingExercises"
        :key="exercises.exercises.indexOf(exercise)"
        :exercise="exercise"
        :id="exercises.exercises.indexOf(exercise)"
      />
    </div>
  </section>
</template>
