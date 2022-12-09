<script setup lang="ts">
  import { ref } from 'vue'
  import { useModals } from '../../../store'

  const modals = useModals()

  const props = defineProps(['exercise'])
  const emits = defineEmits(['exerciseTitle'])

  const exerciseTitle = ref<string>('')

  if (modals.editModal.status) {
    exerciseTitle.value = props.exercise.title
  }

  const inputTitle = () => {
    emits('exerciseTitle', exerciseTitle.value)
  }
</script>

<template>
  <div class="w-full flex flex-col gap-2 col-start-1 col-end-3">
    <label for="title" class="label">Nome do exercício</label>
    <input
      v-model="exerciseTitle"
      placeholder="Levantamento de peso..."
      type="text"
      id="title"
      class="large-input"
      @input="inputTitle"
    />
  </div>
</template>
