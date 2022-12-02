<script setup lang="ts">
  import { useTask } from '../store'
  import { RouterLink } from 'vue-router'
  import ExerciseCard from './ExerciseCard.vue'

  const tasks = useTask()
</script>

<template>
  <div class="w-full flex flex-col">
    <div class="w-full flex justify-between items-center">
      <h3 class="font-bold text-neutral-100 text-lg">Exercícios concluídos</h3>
      <RouterLink class="text-xs text-neutral-400 font-semibold" to="/concluidos">Ver todos</RouterLink>
    </div>
    <div class="pt-4 flex flex-col gap-2">
      <ExerciseCard
        v-for="exercise in tasks.doneExercise"
        :key="tasks.exercises.indexOf(exercise)"
        :exercise="exercise"
        :id="tasks.exercises.indexOf(exercise)"
      />
    </div>
  </div>
</template>
