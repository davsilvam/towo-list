<script setup lang="ts">
  import { RouterLink } from 'vue-router'
  import { useTask } from '../store'
  import ExerciseCard from './ExerciseCard.vue'

  const tasks = useTask()
</script>

<template>
  <div class="w-full flex flex-col">
    <div class="w-full flex justify-between items-center">
      <h3 class="font-bold text-neutral-100 text-lg">Exercícios pendentes</h3>
      <RouterLink class="text-xs text-neutral-400 font-semibold" to="/pendentes">Ver todos</RouterLink>
    </div>
    <div class="w-full pt-4 flex flex-col gap-2">
      <ExerciseCard
        v-for="exercise in tasks.pendingExercises"
        :key="tasks.exercises.indexOf(exercise)"
        :exercise="exercise"
        :id="tasks.exercises.indexOf(exercise)"
      />
    </div>
  </div>
</template>
