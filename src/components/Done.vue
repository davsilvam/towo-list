<script setup lang="ts">
  import { useTask } from '../store'
  import { RouterLink } from 'vue-router'
  import ExerciseCard from './ExerciseCard.vue'

  const tasks = useTask()
</script>

<template>
  <section class="w-full flex flex-col">
    <header class="w-full flex-between">
      <h3 class="text-lg font-bold text-neutral-100">Exercícios concluídos</h3>
      <RouterLink class="all-link" to="/concluidos">Ver todos</RouterLink>
    </header>
    <div class="pt-4 flex flex-col gap-2">
      <ExerciseCard
        v-for="exercise in tasks.doneExercise"
        :key="tasks.exercises.indexOf(exercise)"
        :exercise="exercise"
        :id="tasks.exercises.indexOf(exercise)"
      />
    </div>
  </section>
</template>
