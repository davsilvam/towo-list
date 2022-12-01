<script setup lang="ts">
  import AddButton from '../components/AddButton.vue'

  const emits = defineEmits(['openModal'])

  const openModal = () => {
    emits('openModal')
  }
</script>

<template>
  <header
    class="w-full flex justify-between items-center py-4 text-neutral-100 border-b-2 border-yellow-500"
  >
    <h2 class="font-semibold text-lg">
      <slot />
    </h2>
    <AddButton @click="openModal" />
  </header>
</template>
