<script lang="ts" setup>
  // components
  import { ExclamationTriangleIcon } from '@heroicons/vue/20/solid'

  // stores
  import { useExercises, useModals } from '../../store'

  const { deleteExercise, deletingExerciseId } = useExercises()
  const { deleteModal } = useModals()

  function handleDeleteExercise() {
    deleteExercise(deletingExerciseId)
    deleteModal.toogleModal()
  }
</script>

<template>
  <div class="overlay">
    <div class="short-modal gap-2 px-5 py-3">
      <header class="flex w-full flex-col gap-3 text-lg">
        <div class="w-fit rounded-full bg-red-500 p-2">
          <ExclamationTriangleIcon class="w-5 flex-grow text-red-900" />
        </div>

        <strong class="font-semibold text-neutral-100">
          Deletar Exercício
        </strong>
      </header>

      <p class="text-sm text-neutral-100">
        Após excluir a atividade, não poderá mais interagir com ela, deseja
        mesmo deletar?
      </p>

      <div class="flex-center mt-4 gap-5">
        <button
          @click="() => deleteModal.toogleModal()"
          class="w-full rounded-md border border-neutral-100 py-1 text-sm font-semibold text-neutral-100 transition-colors duration-300 hover:bg-neutral-100 hover:text-neutral-900"
        >
          Não, cancelar
        </button>

        <button
          @click="handleDeleteExercise"
          class="w-full rounded-md border border-red-600 bg-red-600 py-1 text-sm font-semibold text-neutral-100 transition-colors duration-300 hover:border-red-500 hover:bg-red-500"
        >
          Sim, deletar
        </button>
      </div>
    </div>
  </div>
</template>
