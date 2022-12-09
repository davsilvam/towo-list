<script setup lang="ts">
  import { useExercises } from '../store'
  import { CheckIcon } from '@heroicons/vue/24/outline'
  import Header from '../components/Header.vue'
  import ExerciseCard from '../components/ExerciseCard.vue'
  import NoExercises from '../components/NoExercises.vue'

  const exercises = useExercises()
</script>

<template>
  <div class="w-full min-h-screen flex flex-col gap-9 pb-24">
    <Header class="px-8"> <CheckIcon class="w-5" /> Concluídos </Header>
    <main class="w-full grid-center px-8" v-if="exercises.exercises.length > 0">
      <div class="w-full flex flex-col items-center gap-2 pt-4">
        <ExerciseCard
          class="max-w-2xl"
          v-for="exercise in exercises.doneExercise"
          :key="exercises.exercises.indexOf(exercise)"
          :exercise="exercise"
          :id="exercises.exercises.indexOf(exercise)"
        />
      </div>
    </main>
    <NoExercises v-else />
  </div>
</template>
