<script setup lang="ts">
  import { useTask } from '../store'
  import { HomeIcon } from '@heroicons/vue/24/outline'
  import Header from '../components/Header.vue'
  import Pending from '../components/Pending.vue'
  import Done from '../components/Done.vue'
  import NoExercises from '../components/NoExercises.vue'

  const tasks = useTask()
</script>

<template>
  <div class="relative w-full min-h-screen flex flex-col gap-9 pb-24">
    <Header class="px-8"> <HomeIcon class="w-5" /> Início </Header>
    <main
      class="w-full flex flex-col lg:grid lg:grid-cols-2 lg:gap-20 gap-9 px-8 lg:px-28"
      v-if="tasks.exercises.length > 0"
    >
      <Pending />
      <Done />
    </main>
    <NoExercises v-else />
  </div>
</template>
