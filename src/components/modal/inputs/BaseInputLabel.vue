<script lang="ts" setup>
  import { LabelHTMLAttributes } from 'vue'

  interface BaseInputLabelProps extends LabelHTMLAttributes {
    id: string
  }

  const props = defineProps<BaseInputLabelProps>()
</script>

<template>
  <label
    v-bind="props"
    :aria-label="id"
    class="cursor-pointer text-sm font-semibold text-neutral-100"
    :for="id"
  >
    <slot></slot>
  </label>
</template>
