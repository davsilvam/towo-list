<script setup lang="ts">
  import { ref } from 'vue'
  import { useTask, Exercise } from '../store'
  import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
  import Header from '../components/Header.vue'
  import ExerciseCard from '../components/ExerciseCard.vue'
  import NoExercises from '../components/NoExercises.vue'

  const tasks = useTask()

  const search = ref<string>('')
  const filteredTasks = ref<Exercise[] | undefined>([])

  const filterExercises = (search: string) => {
    filteredTasks.value = tasks.filterExercise(search)
  }
</script>

<template>
  <div class="w-full min-h-screen flex flex-col gap-9 pb-6">
    <Header class="px-8">
      <MagnifyingGlassIcon class="text-yellow-500 w-5" /> Pesquisa
    </Header>
    <main class="w-full grid-center px-8" v-if="tasks.exercises.length > 0">
      <div
        class="w-full lg:w-1/2 flex gap-2 text-neutral-100 px-4 py-2 rounded-md bg-neutral-900"
      >
        <MagnifyingGlassIcon class="w-5" />
        <input
          class="w-full placeholder:text-neutral-500 outline-none bg-transparent"
          type="text"
          placeholder="Leg press..."
          v-model="search"
          @input="filterExercises(search)"
        />
      </div>
      <div
        class="w-full flex flex-col items-stretch lg:items-center gap-2 pt-4"
        v-if="tasks.exercises.length > 0"
      >
        <ExerciseCard
          v-for="exercise in filteredTasks"
          :key="tasks.exercises.indexOf(exercise)"
          :exercise="exercise"
          :id="tasks.exercises.indexOf(exercise)"
        />
      </div>
    </main>
    <NoExercises v-else />
  </div>
</template>
