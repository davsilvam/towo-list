<script setup lang="ts">
  import { ref } from 'vue'
  import { useTask, Exercise } from '../store'
  import Header from '../components/Header.vue'
  import ExerciseCard from '../components/ExerciseCard.vue'
  import NoExercises from '../components/NoExercises.vue'

  const tasks = useTask()

  const search = ref<string>('')
  const filteredTasks = ref<Exercise[]>([])

  const filterExercises = (search: string) => {
    filteredTasks.value = tasks.filterExercise(search)
  }
</script>

<template>
  <div id="view" class="min-h-screen w-full flex flex-col gap-9">
    <Header class="px-8"> Pesquisa </Header>
    <main
      class="w-full px-8 grid place-items-center"
      v-if="tasks.exercises.length > 0"
    >
      <div
        class="w-full lg:w-1/2 flex gap-2 py-2 px-4 rounded-md text-neutral-100 bg-neutral-800"
      >
        <i class="ri-search-line"></i
        ><input
          class="w-full outline-none bg-transparent placeholder:text-neutral-500"
          type="text"
          placeholder="Leg press..."
          v-model="search"
          @input="filterExercises(search)"
        />
      </div>
      <div
        class="w-full pt-4 flex flex-col items-center gap-2"
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

<style scoped>
  #view {
    background: #232526;
    background: -webkit-linear-gradient(to right, #414345, #232526);
    background: linear-gradient(225deg, #414345, #232526);
  }
</style>
