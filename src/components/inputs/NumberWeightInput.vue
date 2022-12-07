<script setup lang="ts">
  import { ref } from 'vue'

  const emits = defineEmits(['exerciseWeight'])

  const exerciseWeight = ref<number>()

  const inputWeight = () => {
    emits('exerciseWeight', exerciseWeight.value)
  }
</script>

<template>
  <div class="flex flex-col gap-2 items-center">
    <label for="amount" class="label">Peso Inicial</label>
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
