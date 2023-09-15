<script lang="ts" setup>
import { CheckboxIndicator, CheckboxRoot } from 'radix-vue'
import { Check } from 'lucide-vue-next'

defineProps<{
  isChecked: boolean
}>()
</script>

<template>
  <CheckboxRoot
    :checked="isChecked"
    class="flex h-7 w-7 items-center justify-center rounded-full border border-neutral-400 bg-neutral-700 disabled:border-neutral-700 disabled:bg-neutral-900 data-[state=checked]:border-green-400 data-[state=checked]:bg-green-400"
  >
    <CheckboxIndicator>
      <Check class="h-4 w-4 text-neutral-800" />
    </CheckboxIndicator>
  </CheckboxRoot>
</template>
