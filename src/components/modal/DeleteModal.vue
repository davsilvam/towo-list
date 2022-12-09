<script setup lang="ts">
  import { useExercises, useModals } from '../../store'
  import { ExclamationTriangleIcon } from '@heroicons/vue/20/solid'

  const exercises = useExercises()
  const modals = useModals()

  const deleteExercise = () => {
    exercises.deleteExercise(exercises.deletingExercise)
    modals.deleteModal.toogleModal()
  }
</script>

<template>
  <div class="modal-black">
    <div class="short-modal gap-2 px-5 py-3">
      <header class="w-full flex flex-col gap-3 text-lg">
        <div class="bg-red-500 w-fit p-2 rounded-full">
          <ExclamationTriangleIcon class="w-5 flex-grow text-red-900" />
        </div>
        <h3 class="font-semibold text-neutral-100">Deletar Exercício</h3>
      </header>

      <p class="text-sm text-neutral-100">
        Após excluir a atividade, não poderá mais interagir com ela, deseja
        mesmo deletar?
      </p>

      <div class="flex-center gap-5 mt-4">
        <button
          class="w-full py-1 rounded-md font-semibold text-neutral-100 border border-neutral-100 hover:text-neutral-900 hover:bg-neutral-100 transition-colors duration-300"
          @click="modals.deleteModal.toogleModal()"
        >
          Cancelar
        </button>
        <button
          class="w-full py-1 rounded-md font-semibold text-neutral-100 border border-red-600 bg-red-600 hover:bg-red-800 hover:border-red-800 transition-colors duration-300"
          @click="deleteExercise"
        >
          Deletar
        </button>
      </div>
    </div>
  </div>
</template>
