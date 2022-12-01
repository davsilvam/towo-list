<script setup lang="ts">
  import { ref } from 'vue'
  import { useTask } from '../store'
  import Header from '../components/Header.vue'
  import Pending from '../components/Pending.vue'
  import Done from '../components/Done.vue'
  import AddModal from '../components/AddModal.vue'
  import NoExercises from '../components/NoExercises.vue'

  const tasks = useTask()

  const modalOpen = ref(false)

  const openModal = () => {
    modalOpen.value = true
  }

  const closeModal = (value: boolean) => {
    modalOpen.value = value
  }
</script>

<template>
  <div id="view" class="min-h-screen w-full flex flex-col gap-9 relative">
    <Header class="px-8" @openModal="openModal"> Início </Header>
    <main
      class="w-full px-8 flex flex-col lg:grid lg:grid-cols-2 lg:gap-20 gap-9 lg:px-20"
      v-if="tasks.exercises.length > 0"
    >
      <Pending />
      <Done />
    </main>
    <NoExercises v-else />
    <Teleport to="body">
      <AddModal v-if="modalOpen" @closeModal="closeModal" />
    </Teleport>
  </div>
</template>

<style scoped>
  #view {
    background: #232526;
    background: -webkit-linear-gradient(to right, #414345, #232526);
    background: linear-gradient(225deg, #414345, #232526);
  }
</style>
