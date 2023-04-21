<script lang="ts" setup>
  import { ButtonHTMLAttributes } from 'vue'

  interface AddButtonProps extends ButtonHTMLAttributes {}

  const props = defineProps<AddButtonProps>()
</script>

<template>
  <button
    class="flex-center w-fit gap-2 rounded-md py-1 px-2 transition-colors lg:py-2 lg:px-4"
    v-bind="props"
  >
    <slot></slot>
  </button>
</template>
