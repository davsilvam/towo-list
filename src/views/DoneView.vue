<script setup lang="ts">
  import { useTask } from '../store'
  import Header from '../components/Header.vue'
  import ExerciseCard from '../components/ExerciseCard.vue'
  import NoExercises from '../components/NoExercises.vue'

  const tasks = useTask()
</script>

<template>
  <div id="view" class="min-h-screen w-full flex flex-col gap-9">
    <Header class="px-8"> Concluídos </Header>
    <main
      class="w-full px-8 grid place-items-center"
      v-if="tasks.exercises.length > 0"
    >
      <div class="w-full pt-4 flex flex-col items-center gap-2">
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
