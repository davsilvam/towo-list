<script setup lang="ts">
  import { useTask } from '../store'
  import { ClockIcon } from '@heroicons/vue/24/outline'
  import Header from '../components/Header.vue'
  import ExerciseCard from '../components/ExerciseCard.vue'
  import NoExercises from '../components/NoExercises.vue'

  const tasks = useTask()
</script>

<template>
  <div class="min-h-screen w-full flex flex-col gap-9 pb-6">
    <Header class="px-8"> <ClockIcon class="text-yellow-500 w-5" /> Pendentes </Header>
    <main class="w-full grid-center px-8" v-if="tasks.exercises.length > 0">
      <div class="w-full flex flex-col items-center gap-2 pt-4">
        <ExerciseCard
          v-for="exercise in tasks.pendingExercises"
          :key="tasks.exercises.indexOf(exercise)"
          :exercise="exercise"
          :id="tasks.exercises.indexOf(exercise)"
        />
      </div>
    </main>
    <NoExercises v-else />
  </div>
</template>
