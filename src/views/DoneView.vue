<script setup lang="ts">
  import { useTask } from '../store'
  import { CheckIcon } from '@heroicons/vue/24/outline'
  import Header from '../components/Header.vue'
  import ExerciseCard from '../components/ExerciseCard.vue'
  import NoExercises from '../components/NoExercises.vue'

  const tasks = useTask()
</script>

<template>
  <div class="w-full min-h-screen flex flex-col gap-9 pb-6">
    <Header class="px-8">
      <CheckIcon class="text-yellow-500 w-5" /> Concluídos
    </Header>
    <main class="w-full grid-center px-8" v-if="tasks.exercises.length > 0">
      <div class="w-full flex flex-col items-center gap-2 pt-4">
        <ExerciseCard
          class="max-w-2xl"
          v-for="exercise in tasks.doneExercise"
          :key="tasks.exercises.indexOf(exercise)"
          :exercise="exercise"
          :id="tasks.exercises.indexOf(exercise)"
        />
      </div>
    </main>
    <NoExercises v-else />
  </div>
</template>
