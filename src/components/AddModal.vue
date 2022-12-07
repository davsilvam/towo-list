<script setup lang="ts">
  import { ref, watchEffect } from 'vue'
  import { useTask, Exercise } from '../store'
  import { XMarkIcon, FolderPlusIcon } from '@heroicons/vue/20/solid'
  import TextExerciseTitle from './inputs/TextExerciseTitleInput.vue'
  import SelectCategory from './inputs/SelectCategoryInput.vue'
  import NumberSeries from './inputs/NumberSeriesInput.vue'
  import NumberAmount from './inputs/NumberAmountInput.vue'
  import NumberWeight from './inputs/NumberWeightInput.vue'

  const tasks = useTask()
  const emits = defineEmits(['closeModal'])

  const exercise = ref<Exercise>({
    title: '',
    category: '',
    categories: [],
    series: null,
    amount: null,
    weight: null,
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
      subcategories: ['Costas', 'Ombros', 'Tríceps', 'Bíceps'],
    },
    {
      title: 'Inferiores',
      subcategories: ['Coxas', 'Gêmeos (Panturrilha)', 'Glúteos'],
    },
    {
      title: 'Outros',
      subcategories: ['Tórax', 'Abdômen'],
    },
  ])

  const currentCategory = ref<Category>()

  const setCategory = (categoryName: string) => {
    exercise.value.category = categoryName
    currentCategory.value = categories.value.find(
      (category) => category.title === categoryName
    )
    console.log(exercise.value)
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

    console.log(newExercise)

    tasks.createExercise(newExercise)
    closeModal()
  }

  const closeModal = () => {
    emits('closeModal', false)
  }

  const classModalBack =
    'absolute top-0 w-screen h-screen grid-center bg-neutral-800 bg-opacity-75'
  const classModal =
    'max-w-lg w-10/12 h-[450px] flex flex-col justify-between px-4 pb-6 rounded-lg bg-neutral-900'
  const classModalTitle = 'flex gap-2 font-semibold text-neutral-100'
  const classLabel = 'text-sm text-neutral-100'
  const classHeader = 'py-4 flex-between border-b-2 border-neutral-800'
  const classSubmitInput = 'py-2 border-2 rounded-md border-yellow-500'
</script>

<template>
  <div :class="classModalBack" @click.self="closeModal">
    <form :class="classModal" @submit.prevent="addExercise()">
      <div>
        <header :class="classHeader">
          <h3 :class="classModalTitle">
            Novo Exercício
            <FolderPlusIcon class="w-4" />
          </h3>
          <XMarkIcon
            class="w-4 text-neutral-100 cursor-pointer"
            @click="closeModal"
          />
        </header>
        <div class="mt-4 flex flex-col gap-5">
          <div class="grid grid-cols-3 gap-4">
            <TextExerciseTitle @exerciseTitle="setTitle" />
            <SelectCategory :categories="categories" @category="setCategory" />
          </div>
          <div v-if="currentCategory" class="flex flex-col gap-2 items-center">
            <h3 :class="classLabel">Músculos Trabalhados</h3>
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
                  class="outline-none accent-yellow-500"
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
          classSubmitInput,
          emptyFields
            ? 'text-yellow-500 cursor-not-allowed'
            : 'bg-yellow-500 text-neutral-100 cursor-pointer',
        ]"
        type="submit"
        value="Adicionar"
      />
    </form>
  </div>
</template>
