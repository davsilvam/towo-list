<script lang="ts" setup>
defineProps<{
  id: string
}>()
</script>

<template>
  <label class="font-medium text-neutral-300" :for="id">
    <slot />
  </label>
</template>
