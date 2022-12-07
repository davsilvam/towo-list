<script setup lang="ts">
  import { RouterLink } from 'vue-router'
  import { useTask } from '../store'
  import ExerciseCard from './ExerciseCard.vue'

  const tasks = useTask()

  const classAllLink = 'text-xs font-semibold text-neutral-400'
</script>

<template>
  <section class="w-full flex flex-col">
    <header class="w-full flex-between">
      <h3 class="text-lg font-bold text-neutral-100">Exercícios pendentes</h3>
      <RouterLink :class="classAllLink" to="/pendentes">Ver todos</RouterLink>
    </header>
    <div class="w-full pt-4 flex flex-col gap-2">
      <ExerciseCard
        v-for="exercise in tasks.pendingExercises"
        :key="tasks.exercises.indexOf(exercise)"
        :exercise="exercise"
        :id="tasks.exercises.indexOf(exercise)"
      />
    </div>
  </section>
</template>
