<script setup lang="ts">
  import { ref } from 'vue'

  const emits = defineEmits(['exerciseSeries'])

  const exerciseSeries = ref<number>()

  const inputSeries = () => {
    emits('exerciseSeries', exerciseSeries.value)
  }

  const classLabel = 'text-sm text-neutral-100'
  const classShortInputs =
    'w-16 h-10 bg-neutral-800 text-sm text-neutral-100 placeholder:text-neutral-500 p-2 rounded-md focus-border'
</script>

<template>
  <div class="flex flex-col gap-2 items-center">
    <label for="series" :class="classLabel">Séries</label>
    <input
      v-model="exerciseSeries"
      placeholder="3x"
      type="number"
      id="series"
      :class="classShortInputs"
      @input="inputSeries"
    />
  </div>
</template>
