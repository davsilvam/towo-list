<script setup lang="ts">
  import { ref } from 'vue'
  import { useModals } from '../../../store'

  const modals = useModals()

  const props = defineProps(['exercise'])
  const emits = defineEmits(['exerciseSeries'])

  const exerciseSeries = ref<number>()

  if (modals.editModal.status) {
    exerciseSeries.value = props.exercise.series
  }

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
