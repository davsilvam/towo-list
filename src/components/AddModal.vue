<script setup lang="ts">
  import { ref, watchEffect } from 'vue'
  import { useTask, Exercise } from '../store'
  import { XMarkIcon, FolderPlusIcon } from '@heroicons/vue/20/solid'
  import SelectCategory from './inputs/SelectCategoryInput.vue'

  const tasks = useTask()
  const emits = defineEmits(['closeModal'])

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

  const emptyFields = ref<boolean>(true)

  const exercise = ref<Exercise>({
    title: '',
    category: '',
    series: null,
    amount: null,
    weight: null,
    count: 0,
    completed: false,
  })

  watchEffect(() => {
    if (
      exercise.value.title &&
      exercise.value.category &&
      exercise.value.series &&
      exercise.value.amount &&
      exercise.value.weight
    ) {
      emptyFields.value = false
      return
    }
    emptyFields.value = true
  })

  const closeModal = () => {
    emits('closeModal', false)
  }

  const setCategory = (category: string) => {
    exercise.value.category = category
    console.log(exercise.value)
  }

  const addExercise = () => {
    if (emptyFields.value) {
      alert('Preencha todos os campos!')
      return
    }

    const newExercise = exercise.value

    tasks.createExercise(newExercise)
    closeModal()
  }

  const classModalBack =
    'w-screen h-screen grid place-items-center top-0 bg-neutral-800 bg-opacity-75 absolute'
  const classModal =
    'w-10/12 h-96 px-4 pb-6 flex flex-col justify-between max-w-lg rounded-lg bg-neutral-900'
  const classModalTitle = 'flex gap-2 font-semibold text-neutral-100'
  const classLabel = 'text-sm text-neutral-100'
  const classHeader =
    'py-4 flex justify-between items-center border-b-2 border-neutral-800'
  const classLargeInput =
    'w-full h-10 bg-neutral-800 text-neutral-100 text-sm p-2 placeholder:text-neutral-500 rounded-md outline-none border-[2px] border-transparent focus:border-yellow-500'
  const classShortInputs =
    'w-16 h-10 bg-neutral-800 text-neutral-100 text-sm p-2 placeholder:text-neutral-500 rounded-md outline-none border-[2px] border-transparent focus:border-yellow-500'
  const classSubmitInput = 'border-2 py-2 rounded-md border-yellow-500'
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
            <div class="w-full flex flex-col gap-2 col-start-1 col-end-3">
              <label for="title" :class="classLabel">Nome do exercício</label>
              <input
                v-model="exercise.title"
                placeholder="Levantamento de peso..."
                type="text"
                id="title"
                :class="classLargeInput"
              />
            </div>
            <SelectCategory :categories="categories" @category="setCategory" />
          </div>
          <div class="grid grid-cols-3 place-items-center">
            <div class="flex flex-col gap-2 items-center">
              <label for="series" :class="classLabel">Séries</label>
              <input
                v-model="exercise.series"
                placeholder="3x"
                type="number"
                id="series"
                :class="classShortInputs"
              />
            </div>
            <div class="flex flex-col gap-2 items-center">
              <label for="amount" :class="classLabel">Quantidade</label>
              <input
                v-model="exercise.amount"
                placeholder="10"
                type="number"
                id="amount"
                :class="classShortInputs"
              />
            </div>
            <div class="flex flex-col gap-2 items-center">
              <label for="amount" :class="classLabel">Peso Inicial</label>
              <input
                v-model="exercise.weight"
                placeholder="10 Kg"
                type="number"
                id="amount"
                :class="classShortInputs"
              />
            </div>
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