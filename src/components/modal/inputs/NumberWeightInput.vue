<script setup lang="ts">
  import { ref } from 'vue'
  import { useModals } from '../../../store'

  const modals = useModals()

  const props = defineProps(['exercise'])
  const emits = defineEmits(['exerciseWeight'])

  const exerciseWeight = ref<number>()

  if (modals.editModal.status) {
    exerciseWeight.value = props.exercise.weight
  }

  const inputWeight = () => {
    emits('exerciseWeight', exerciseWeight.value)
  }
</script>

<template>
  <div class="flex flex-col gap-2 items-center">
    <label for="amount" class="label">Peso Atual</label>
    <input
      v-model="exerciseWeight"
      placeholder="10 Kg"
      type="number"
      id="amount"
      class="short-input"
      @input="inputWeight"
    />
  </div>
</template>
