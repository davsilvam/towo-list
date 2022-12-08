<script setup lang="ts">
  import AddButton from '../components/AddButton.vue'

  const emits = defineEmits(['openModal'])

  const openModal = () => {
    emits('openModal')
  }
</script>

<template>
  <header
    class="w-full flex-between text-neutral-100 py-4 border-b-2 border-yellow-500 bg-neutral-900 bg-[url('../assets/img/topography-pattern.svg')]"
  >
    <h2 class="flex-center gap-2 font-semibold text-lg">
      <slot />
    </h2>
    <AddButton @click="openModal" />
  </header>
</template>
