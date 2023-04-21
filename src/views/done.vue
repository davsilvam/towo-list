<script lang="ts" setup>
  // components
  import Header from '../components/Header.vue'
  import ExerciseCard from '../components/ExerciseCard.vue'
  import NoExercises from '../components/NoExercises.vue'
  import { CheckIcon } from '@heroicons/vue/24/outline'

  // stores
  import { useExercises } from '../stores'

  const { doneExercises, exercises } = useExercises()
</script>

<template>
  <div class="flex min-h-screen w-full flex-col gap-9 pb-24">
    <Header class="px-8"> <CheckIcon class="w-5" /> Concluídos </Header>
    <main class="grid-center w-full px-8" v-if="exercises.length > 0">
      <div class="flex w-full flex-col items-center gap-2 pt-4">
        <ExerciseCard
          class="max-w-2xl"
          v-for="exercise in doneExercises"
          :key="exercise.id"
          :exercise="exercise"
        />
      </div>
    </main>

    <NoExercises v-else />
  </div>
</template>
