<script setup lang="ts">
  import { ref, watchEffect } from 'vue'
  import { useExercises, useModals, Exercise, CategoryType } from '../../store'
  import { XMarkIcon, FolderPlusIcon } from '@heroicons/vue/20/solid'
  import TextExerciseTitle from './inputs/TextExerciseTitleInput.vue'
  import SelectCategory from './inputs/SelectCategoryInput.vue'
  import NumberSeries from './inputs/NumberSeriesInput.vue'
  import NumberAmount from './inputs/NumberAmountInput.vue'
  import NumberWeight from './inputs/NumberWeightInput.vue'

  const exercises = useExercises()
  const modals = useModals()

  const exercise = ref<Exercise>({
    id: exercises.exercises.length,
    title: '',
    category: undefined,
    categories: [],
    series: undefined,
    amount: undefined,
    weight: undefined,
    count: 0,
    completed: false,
  })

  const setTitle = (title: string) => {
    exercise.value.title = title
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

  interface Category {
    title: string
    subcategories: string[]
  }

  const categories = ref<Category[]>([
    {
      title: 'Superiores',
      subcategories: [
        'Costas',
        'Ombros',
        'Tríceps',
        'Bíceps',
        'Tórax',
        'Abdômen',
      ],
    },
    {
      title: 'Inferiores',
      subcategories: ['Coxas', 'Panturrilha', 'Glúteos'],
    },
  ])

  const currentCategory = ref<Category>()

  const setCategory = (categoryName: CategoryType) => {
    exercise.value.category = categoryName
    currentCategory.value = categories.value.find(
      (category) => category.title === categoryName
    )
  }

  const emptyFields = ref<boolean>(true)

  watchEffect(() => {
    if (
      exercise.value.title &&
      exercise.value.category &&
      exercise.value.categories.length > 0 &&
      exercise.value.series &&
      exercise.value.amount &&
      exercise.value.weight
    ) {
      emptyFields.value = false
      return
    }
    emptyFields.value = true
  })

  const addExercise = () => {
    if (emptyFields.value) {
      alert('⚠️ Preencha todos os campos!')
      return
    }

    const newExercise = exercise.value

    exercises.createExercise(newExercise)
    modals.addModal.toogleModal()
  }
</script>

<template>
  <div class="modal-black" @click.self="modals.addModal.toogleModal()">
    <form class="modal" @submit.prevent="addExercise()">
      <div>
        <header class="py-4 flex-between border-b-2 border-neutral-800">
          <h3 class="flex gap-2 font-semibold text-neutral-100">
            Novo Exercício
            <FolderPlusIcon class="w-4" />
          </h3>
          <XMarkIcon
            class="w-5 text-neutral-100 cursor-pointer"
            @click="modals.addModal.toogleModal()"
          />
        </header>
        <div class="mt-4 flex flex-col gap-5">
          <div class="grid grid-cols-3 gap-4">
            <TextExerciseTitle @exerciseTitle="setTitle" />
            <SelectCategory :categories="categories" @category="setCategory" />
          </div>
          <div v-if="currentCategory" class="flex flex-col gap-2 items-center">
            <h3 class="label">Músculos Trabalhados</h3>
            <div
              class="flex flex-wrap items-center justify-center gap-y-2 gap-x-8"
            >
              <div
                class="flex items-center justify-center gap-2"
                v-for="category in currentCategory?.subcategories"
              >
                <input
                  :key="currentCategory?.subcategories.indexOf(category)"
                  :value="category"
                  :id="category"
                  v-model="exercise.categories"
                  type="checkbox"
                  class="peer appearance-none relative w-4 h-4 border border-neutral-700 rounded-sm focus:outline-none checked:bg-yellow-500 checked:border-yellow-500 hover-ring"
                />
                <label class="text-white text-sm" :for="category">{{
                  category
                }}</label>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-3 place-items-center">
            <NumberSeries @exerciseSeries="setSeries" />
            <NumberAmount @exerciseAmount="setAmount" />
            <NumberWeight @exerciseWeight="setWeight" />
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
