<script setup lang="ts">
  import { useModals } from '../store'
  import AddButton from '../components/AddButton.vue'

  const modals = useModals()
</script>

<template>
  <header
    class="w-full flex-between text-neutral-100 py-6 border-b-2 border-neutral-800 bg-topography lg:bg-neutral-900"
  >
    <h1 class="flex-center gap-2 font-bold text-lg text-yellow-500">
      <slot />
    </h1>
    <AddButton @click="modals.addModal.toogleModal()" />
  </header>
</template>
