<script lang="ts" setup>
  import { InputHTMLAttributes, computed } from 'vue'

  interface BaseInputProps extends InputHTMLAttributes {
    id: string
    modelValue: number | string
  }

  interface BaseInputEmits {
    (e: 'update:modelValue', value: number | string): void
  }

  const props = defineProps<BaseInputProps>()
  const emits = defineEmits<BaseInputEmits>()

  const modelValue = computed({
    get() {
      return props.modelValue
    },
    set(newValue) {
      emits('update:modelValue', newValue)
    },
  })
</script>

<template>
  <input
    v-bind="props"
    v-model="modelValue"
    :aria-labelledby="id"
    class="focus-ring hover-ring h-10 appearance-none rounded-md bg-neutral-800 p-2 text-sm text-neutral-100 placeholder:text-neutral-600"
  />
</template>
