<script setup lang="ts">
  import { ref, watchEffect } from 'vue'
  import type { Ref } from 'vue'
  import { useExercises, useModals, Exercise } from '../../store'
  import { XMarkIcon, PencilSquareIcon } from '@heroicons/vue/20/solid'
  import TextExerciseTitle from './inputs/TextExerciseTitleInput.vue'
  import NumberSeries from './inputs/NumberSeriesInput.vue'
  import NumberAmount from './inputs/NumberAmountInput.vue'
  import NumberWeight from './inputs/NumberWeightInput.vue'

  const exercises = useExercises()
  const modals = useModals()

  const id: Ref = ref<number>()
  const exercise: Ref = ref<Exercise>()

  const getEditingData = (): void => {
    const editingId = ref(exercises.editingId)
    const editingExercise = ref(exercises.editingExercise)
    id.value = editingId.value
    exercise.value = editingExercise.value
  }

  getEditingData()

  const setTitle = (title: string) => {
    exercise.value.title = title
    console.log(exercises.exercises)
  }

  const setSeries = (series: number) => {
    exercise.value.series = series
  }

  const setAmount = (amount: number) => {
    exercise.value.amount = amount
  }

  const setWeight = (weight: number) => {
    exercise.value.weight = weight
  }

  const emptyFields = ref<boolean>(true)

  watchEffect(() => {
    if (
      exercise.value.title &&
      exercise.value.series &&
      exercise.value.amount &&
      exercise.value.weight
    ) {
      emptyFields.value = false
      return
    }
    emptyFields.value = true
  })

  const editExercise = () => {
    if (emptyFields.value) {
      alert('⚠️ Preencha todos os campos!')
      console.log(exercise.value)
      return
    }

    const newExercise = exercise.value

    exercises.updateExercise(id.value, newExercise)
    modals.editModal.toogleModal()
  }
</script>

<template>
  <div class="modal-black" @click.self="editExercise()">
    <form class="modal" @submit.prevent="editExercise()">
      <div>
        <header class="py-4 flex-between border-b-2 border-neutral-800">
          <h3 class="flex gap-2 font-semibold text-neutral-100">
            Editar Exercício
            <PencilSquareIcon class="w-4" />
          </h3>
          <XMarkIcon
            class="w-5 text-neutral-100 cursor-pointer"
            @click="editExercise()"
          />
        </header>
        <div class="mt-4 flex flex-col gap-5">
          <div class="flex gap-4">
            <TextExerciseTitle @exerciseTitle="setTitle" :exercise="exercise" />
          </div>
          <div class="grid grid-cols-3 place-items-center">
            <NumberSeries @exerciseSeries="setSeries" :exercise="exercise" />
            <NumberAmount @exerciseAmount="setAmount" :exercise="exercise" />
            <NumberWeight @exerciseWeight="setWeight" :exercise="exercise" />
          </div>
        </div>
      </div>
      <input
        :class="[
          'font-semibold py-2 border-2 rounded-md border-yellow-500',
          emptyFields
            ? 'text-yellow-500 cursor-not-allowed'
            : 'bg-yellow-500 text-neutral-900 cursor-pointer',
        ]"
        type="submit"
        value="Adicionar"
      />
    </form>
  </div>
</template>
