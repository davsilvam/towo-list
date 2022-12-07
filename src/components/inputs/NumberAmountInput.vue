<script setup lang="ts">
  import { ref } from 'vue'

  const emits = defineEmits(['exerciseAmount'])

  const exerciseAmount = ref<number>()

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
