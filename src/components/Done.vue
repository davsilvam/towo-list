<script setup lang="ts">
  import { useExercises } from '../store'
  import { RouterLink } from 'vue-router'
  import ExerciseCard from './ExerciseCard.vue'

  const exercises = useExercises()
</script>

<template>
  <section class="w-full flex flex-col">
    <header class="w-full flex-between">
      <h2 class="text-lg font-bold text-yellow-500">Exercícios concluídos</h2>
      <RouterLink class="all-link" to="/concluidos">Ver todos</RouterLink>
    </header>
    <div class="pt-4 flex flex-col gap-2">
      <ExerciseCard
        v-for="exercise in exercises.doneExercise"
        :key="exercises.exercises.indexOf(exercise)"
        :exercise="exercise"
        :id="exercises.exercises.indexOf(exercise)"
      />
    </div>
  </section>
</template>
