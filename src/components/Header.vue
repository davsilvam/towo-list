<script setup lang="ts">
  import AddButton from '../components/AddButton.vue'

  const emits = defineEmits(['openModal'])

  const openModal = () => {
    emits('openModal')
  }

  const classHeader =
    'w-full flex-between text-neutral-100 py-4 border-b-2 border-yellow-500'
</script>

<template>
  <header :class="classHeader">
    <h2 class="flex-center gap-2 font-semibold text-lg">
      <slot />
    </h2>
    <AddButton @click="openModal" />
  </header>
</template>
