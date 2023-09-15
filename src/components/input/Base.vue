<script lang="ts" setup>
import { computed } from 'vue'

interface InputProps {
  modelValue: string | number | null
}

interface InputEmits {
  (e: 'update:modelValue', value: string | number): void
}

const props = defineProps<InputProps>()
const emit = defineEmits<InputEmits>()

const modelValue = computed({
  get: () => props.modelValue,
  set: value => emit('update:modelValue', value ?? ' '),
})
</script>

<template>
  <input v-model="modelValue" class="rounded-lg border border-neutral-700 bg-neutral-900 p-2 placeholder:text-neutral-500">
</template>
