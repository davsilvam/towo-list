<script setup lang="ts">
  import { ref } from 'vue'

  const emits = defineEmits(['exerciseWeight'])

  const exerciseWeight = ref<number>()

  const inputWeight = () => {
    emits('exerciseWeight', exerciseWeight.value)
  }

  const classLabel = 'text-sm text-neutral-100'
  const classShortInputs =
    'w-16 h-10 bg-neutral-800 text-sm text-neutral-100 placeholder:text-neutral-500 p-2 rounded-md focus-border'
</script>

<template>
  <div class="flex flex-col gap-2 items-center">
    <label for="amount" :class="classLabel">Peso Inicial</label>
    <input
      v-model="exerciseWeight"
      placeholder="10 Kg"
      type="number"
      id="amount"
      :class="classShortInputs"
      @input="inputWeight"
    />
  </div>
</template>
