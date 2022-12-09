<script setup lang="ts">
  import { useExercises } from '../store'
  import { ClockIcon } from '@heroicons/vue/24/outline'
  import Header from '../components/Header.vue'
  import ExerciseCard from '../components/ExerciseCard.vue'
  import NoExercises from '../components/NoExercises.vue'

  const exercises = useExercises()
</script>

<template>
  <div class="min-h-screen w-full flex flex-col gap-9 pb-24">
    <Header class="px-8"> <ClockIcon class="w-5" /> Pendentes </Header>
    <main class="w-full grid-center px-8" v-if="exercises.exercises.length > 0">
      <div class="w-full flex flex-col items-center gap-2 pt-4">
        <ExerciseCard
          v-for="exercise in exercises.pendingExercises"
          :key="exercises.exercises.indexOf(exercise)"
          :exercise="exercise"
          :id="exercises.exercises.indexOf(exercise)"
        />
      </div>
    </main>
    <NoExercises v-else />
  </div>
</template>
