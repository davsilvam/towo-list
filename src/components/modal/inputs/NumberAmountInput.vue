<script setup lang="ts">
  import { ref } from 'vue'
  import { useModals } from '../../../store'

  const modals = useModals()

  const props = defineProps(['exercise'])
  const emits = defineEmits(['exerciseAmount'])

  const exerciseAmount = ref<number>()

  if (modals.editModal.status) {
    exerciseAmount.value = props.exercise.amount
  }

  const inputAmount = () => {
    emits('exerciseAmount', exerciseAmount.value)
  }
</script>

<template>
  <div class="flex flex-col gap-2 items-center">
    <label for="amount" class="label">Quantidade</label>
    <input
      v-model="exerciseAmount"
      placeholder="10"
      type="number"
      id="amount"
      class="short-input"
      @input="inputAmount"
    />
  </div>
</template>
