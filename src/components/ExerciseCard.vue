<script lang="ts" setup>
  // components
  import { PencilIcon, TrashIcon, CheckIcon } from '@heroicons/vue/20/solid'

  // stores
  import { useExercises, useModals } from '../stores'
  import { storeToRefs } from 'pinia'

  // types
  import { Exercise } from '../@types'

  interface ExerciseCardProps {
    exercise: Exercise
  }

  const props = defineProps<ExerciseCardProps>()

  const { editExercise, incrementExerciseSerieCounter } = useExercises()
  const { deletingExerciseId } = storeToRefs(useExercises())
  const { deleteModal, editModal } = useModals()

  function openDeleteExerciseModal() {
    deleteModal.toogleModal()
    deletingExerciseId.value = props.exercise.id
  }

  function openEditExerciseModal() {
    editModal.toogleModal()
    editExercise(props.exercise.id)
  }
</script>

<template>
  <div
    class="flex w-full flex-col rounded-r-md border-l-2 border-yellow-500 bg-neutral-800 lg:max-w-2xl"
  >
    <header class="w-full rounded-tr-md px-4">
      <div
        class="flex-between h-fit border-b-2 py-2"
        :class="[
          exercise.completed ? 'border-yellow-500' : 'border-neutral-900',
        ]"
      >
        <p
          class="rounded-md px-1.5 py-0.5 text-xs font-semibold"
          :class="[
            exercise.completed
              ? 'bg-yellow-500 text-neutral-900'
              : 'bg-neutral-100 text-neutral-900',
          ]"
        >
          {{
            exercise.count === exercise.series
              ? 'Concluído'
              : exercise.series - exercise.count === 1
              ? `Faltam ${exercise.series - exercise.count} série de ${
                  exercise.amount
                }`
              : `Faltam ${exercise.series - exercise.count} séries de ${
                  exercise.amount
                }`
          }}
        </p>

        <div class="flex gap-5">
          <PencilIcon
            @click="openEditExerciseModal"
            class="w-6 cursor-pointer p-1 text-neutral-100"
          />

          <TrashIcon
            @click="openDeleteExerciseModal"
            class="w-6 cursor-pointer p-1 text-red-600"
          />
        </div>
      </div>
    </header>

    <div class="flex-between group w-full rounded-br-md px-4">
      <div class="flex items-center gap-4 py-3">
        <div
          class="flex-center hover-ring h-5 w-5 cursor-pointer rounded-md bg-neutral-900"
          @click="() => incrementExerciseSerieCounter(exercise.id)"
        >
          <CheckIcon
            class="w-4 text-yellow-500"
            :class="{ hidden: !exercise.completed }"
          />
        </div>

        <div class="flex flex-col gap-1.5">
          <strong
            :class="[
              'text-sm font-semibold',
              {
                'text-yellow-500': exercise.completed,
                'text-neutral-100': !exercise.completed,
                'line-through': exercise.completed,
              },
            ]"
          >
            {{ exercise.title }}
          </strong>

          <div class="flex w-52 flex-wrap gap-2 xl:w-80">
            <p
              v-for="category in exercise.category.subcategories"
              class="w-fit rounded-md bg-yellow-500 px-2 py-px text-center text-[10px] font-semibold text-neutral-900"
              :key="category"
            >
              {{ category }}
            </p>
          </div>
        </div>
      </div>
      <h4
        class="text-lg font-semibold text-neutral-100"
        :class="{
          'text-yellow-500': exercise.completed,
          'text-neutral-100': !exercise.completed,
        }"
      >
        {{ exercise.weight + ' Kg' }}
      </h4>
    </div>
  </div>
</template>
