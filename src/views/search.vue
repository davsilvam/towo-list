<script lang="ts" setup>
  import { onMounted, ref } from 'vue'

  // components
  import Header from '../components/Header.vue'
  import ExerciseCard from '../components/ExerciseCard.vue'
  import NoExercises from '../components/NoExercises.vue'
  import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'

  // stores
  import { useExercises } from '../stores'

  // types
  import { Exercise } from '../@types'

  const { exercises, filterExercise } = useExercises()

  const search = ref<string>('')
  const filteredExercises = ref<Exercise[] | undefined>([])

  const filterExercises = () => {
    filteredExercises.value = filterExercise(search.value)
  }

  onMounted(() => {
    filterExercises()
  })
</script>

<template>
  <div class="flex min-h-screen w-full flex-col gap-9 pb-24">
    <Header class="px-8"> <MagnifyingGlassIcon class="w-5" /> Pesquisa </Header>

    <main class="grid-center w-full px-8" v-if="exercises.length > 0">
      <div
        class="flex w-full gap-2 rounded-md border border-neutral-600 bg-neutral-800 px-4 py-2 text-neutral-100 lg:w-1/2"
      >
        <MagnifyingGlassIcon class="w-5 text-neutral-600" />

        <input
          @input="filterExercises"
          v-model="search"
          class="w-full bg-transparent outline-none placeholder:text-neutral-600"
          placeholder="Leg press..."
          type="text"
        />
      </div>

      <div
        class="flex w-full flex-col items-stretch gap-2 pt-4 lg:items-center"
        v-if="exercises.length > 0"
      >
        <ExerciseCard
          v-for="exercise in filteredExercises"
          :exercise="exercise"
          :key="exercise.id"
        />
      </div>
    </main>

    <NoExercises v-else />
  </div>
</template>
