<script setup lang="ts">
  import { ref } from 'vue'

  const emits = defineEmits(['exerciseTitle'])

  const exerciseTitle = ref<string>('')

  const inputTitle= () => {
    emits('exerciseTitle', exerciseTitle.value)
  }

  const classLargeInput =
    'w-full h-10 text-neutral-100 text-sm placeholder:text-neutral-500 p-2 rounded-md focus-border bg-neutral-800'
</script>

<template>
  <div class="w-full flex flex-col gap-2 col-start-1 col-end-3">
    <label for="title" class="text-sm text-neutral-100"
      >Nome do exercício</label
    >
    <input
      v-model="exerciseTitle"
      placeholder="Levantamento de peso..."
      type="text"
      id="title"
      :class="classLargeInput"
      @input="inputTitle"
    />
  </div>
</template>
