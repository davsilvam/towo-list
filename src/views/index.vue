<script lang="ts" setup>
  // components
  import Header from '../components/Header.vue'
  import PendingExercisesContainer from '../components/PendingExercisesContainer.vue'
  import DoneExercisesContainer from '../components/DoneExercisesContainer.vue'
  import NoExercises from '../components/NoExercises.vue'
  import { HomeIcon } from '@heroicons/vue/24/outline'

  // stores
  import { useExercises } from '../store'

  const { exercises } = useExercises()
</script>

<template>
  <div class="relative flex min-h-screen w-full flex-col gap-9 pb-24">
    <Header class="px-8">
      <span class="flex items-center gap-2">
        <HomeIcon class="w-5" /> Início
      </span>
    </Header>

    <main
      class="flex w-full flex-col gap-9 px-8 lg:grid lg:grid-cols-2 lg:gap-20 lg:px-20"
      v-if="exercises.length > 0"
    >
      <PendingExercisesContainer />

      <DoneExercisesContainer />
    </main>

    <NoExercises v-else />
  </div>
</template>
