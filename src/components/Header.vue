<script lang="ts" setup>
  // components
  import BaseButton from './BaseButton.vue'
  import { PlusIcon } from '@heroicons/vue/20/solid'

  // stores
  import { useModals } from '../store'

  const { addModal } = useModals()
</script>

<template>
  <header
    class="flex-between bg-topography w-full border-b-2 border-neutral-800 py-6 text-neutral-100 lg:bg-neutral-900"
  >
    <strong class="flex-center gap-2 text-lg font-bold text-yellow-500">
      <slot></slot>
    </strong>

    <BaseButton
      @click="() => addModal.toogleModal()"
      aria-label="adicionar novo exercício"
      class="bg-yellow-500 hover:bg-yellow-600"
    >
      <PlusIcon class="w-4 text-neutral-900 lg:w-5" />

      <span class="text-sm font-semibold text-neutral-900">
        Novo exercício
      </span>
    </BaseButton>
  </header>
</template>
