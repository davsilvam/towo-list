<script lang="ts" setup>
  import { useExercises } from '../stores'
  import { ClockIcon } from '@heroicons/vue/24/outline'
  import Header from '../components/Header.vue'
  import ExerciseCard from '../components/ExerciseCard.vue'
  import NoExercises from '../components/NoExercises.vue'

  const { exercises, pendingExercises } = useExercises()
</script>

<template>
  <div class="flex min-h-screen w-full flex-col gap-9 pb-24">
    <Header class="px-8"> <ClockIcon class="w-5" /> Pendentes </Header>
    <main class="grid-center w-full px-8" v-if="exercises.length > 0">
      <div class="flex w-full flex-col items-center gap-2 pt-4">
        <ExerciseCard
          v-for="exercise in pendingExercises"
          :exercise="exercise"
          :key="exercise.id"
        />
      </div>
    </main>

    <NoExercises v-else />
  </div>
</template>
