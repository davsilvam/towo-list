<script setup lang="ts">
  import { ref } from 'vue'

  const emits = defineEmits(['exerciseSeries'])

  const exerciseSeries = ref<number>()

  const inputSeries = () => {
    emits('exerciseSeries', exerciseSeries.value)
  }
</script>

<template>
  <div class="flex flex-col gap-2 items-center">
    <label for="series" class="label">Séries</label>
    <input
      v-model="exerciseSeries"
      placeholder="3x"
      type="number"
      id="series"
      class="short-input"
      @input="inputSeries"
    />
  </div>
</template>
