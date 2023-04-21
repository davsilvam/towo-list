<script lang="ts" setup>
  import { computed, reactive, ref, watchEffect } from 'vue'

  // components
  import BaseInput from './inputs/BaseInput.vue'
  import BaseInputLabel from './inputs/BaseInputLabel.vue'
  import BaseInputWrapper from './inputs/BaseInputWrapper.vue'
  import { Cog6ToothIcon, XMarkIcon } from '@heroicons/vue/20/solid'

  // stores
  import { useExercises, useModals } from '../../store'

  // types
  import { Exercise } from '../../@types'

  const { editingExercise, updateExercise } = useExercises()
  const { editModal } = useModals()

  const exercise = reactive<Exercise>({
    ...editingExercise,
  })

  const hasEmptyFields = ref<boolean>(true)

  const areAllFieldsFilledIn = computed(() => {
    if (exercise)
      return Boolean(
        exercise.title && exercise.series && exercise.amount && exercise.weight
      )
  })

  watchEffect(() => {
    if (areAllFieldsFilledIn) {
      hasEmptyFields.value = false
      return
    }

    hasEmptyFields.value = true
  })

  function handleEditExercise() {
    const newExercise = exercise

    updateExercise(newExercise)
    editModal.toogleModal()
  }
</script>

<template>
  <div class="overlay" @click.self="() => editModal.toogleModal()">
    <form class="modal" @submit.prevent="handleEditExercise">
      <div>
        <header class="flex-between border-b-2 border-neutral-800 py-4">
          <strong class="flex gap-2 font-semibold text-neutral-100">
            <Cog6ToothIcon class="w-4" />
            Editar Exercício
          </strong>

          <button
            @click="() => editModal.toogleModal()"
            aria-label="fechar modal"
            class="rounded p-1 transition-colors hover:bg-neutral-800"
          >
            <XMarkIcon class="w-5 cursor-pointer text-neutral-100" />
          </button>
        </header>

        <div class="mt-4 flex flex-col gap-5">
          <div class="flex w-full flex-wrap items-center justify-between gap-8">
            <BaseInputWrapper class="w-full">
              <BaseInputLabel id="title">Nome do exercício</BaseInputLabel>
              <BaseInput
                v-model="exercise.title"
                class="w-full"
                id="title"
                placeholder="Supino inclinado"
                type="text"
              />
            </BaseInputWrapper>

            <BaseInputWrapper>
              <BaseInputLabel id="series">Séries</BaseInputLabel>
              <BaseInput
                v-model="exercise.series"
                class="w-32 max-sm:w-20"
                id="series"
                placeholder="4x"
                type="number"
              />
            </BaseInputWrapper>

            <BaseInputWrapper>
              <BaseInputLabel id="amount">Quantidade</BaseInputLabel>
              <BaseInput
                v-model="editingExercise.amount"
                class="w-32 max-sm:w-20"
                id="amount"
                placeholder="10"
                type="number"
              />
            </BaseInputWrapper>

            <BaseInputWrapper>
              <BaseInputLabel id="weight">Peso</BaseInputLabel>
              <BaseInput
                v-model="editingExercise.weight"
                class="w-32 max-sm:w-20"
                id="weight"
                placeholder="20kg"
                type="number"
              />
            </BaseInputWrapper>
          </div>
        </div>
      </div>

      <button
        aria-label="adicionar exercício"
        class="cursor-pointer rounded-md border-2 border-yellow-500 bg-yellow-500 py-2 text-sm font-bold text-neutral-900 disabled:cursor-not-allowed disabled:bg-neutral-900 disabled:text-yellow-500 disabled:opacity-50"
        :disabled="hasEmptyFields"
      >
        Atualizar Exercício
      </button>
    </form>
  </div>
</template>
