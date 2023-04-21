<script lang="ts" setup>
  import { computed, reactive, ref, watchEffect } from 'vue'

  // components
  import BaseInput from './inputs/BaseInput.vue'
  import BaseInputLabel from './inputs/BaseInputLabel.vue'
  import BaseInputWrapper from './inputs/BaseInputWrapper.vue'
  import InputCheckbox from './inputs/InputCheckbox.vue'
  import InputCheckboxWrapper from './inputs/InputCheckboxWrapper.vue'
  import InputSelect from './inputs/InputSelect.vue'
  import { DocumentPlusIcon, XMarkIcon } from '@heroicons/vue/20/solid'

  // stores
  import { useCategories, useExercises, useModals } from '../../store'
  import { storeToRefs } from 'pinia'

  // uuid
  import { v4 as uuidv4 } from 'uuid'

  // types
  import { Exercise } from '../../@types'

  const { clearCurrentCategory, subcategoriesSelector } = useCategories()
  const { currentCategory } = storeToRefs(useCategories())
  const { createExercise } = useExercises()
  const { addModal } = useModals()

  const exercise = reactive<Exercise>({
    id: uuidv4(),
    title: '',
    category: currentCategory.value,
    series: 0,
    amount: 0,
    weight: 0,
    count: 0,
    completed: false,
  })

  const hasEmptyFields = ref<boolean>(true)

  const areAllFieldsFilledIn = computed(() =>
    Boolean(
      exercise.title &&
        exercise.category.name &&
        exercise.category.subcategories.length > 0 &&
        exercise.series &&
        exercise.amount &&
        exercise.weight
    )
  )

  watchEffect(() => {
    if (areAllFieldsFilledIn.value) {
      hasEmptyFields.value = false
      return
    }

    hasEmptyFields.value = true
  })

  function closeAddExerciseModal() {
    addModal.toogleModal()
    clearCurrentCategory()
  }

  function addExercise() {
    createExercise(exercise)
    closeAddExerciseModal()
  }
</script>

<template>
  <div class="overlay" @click.self="closeAddExerciseModal">
    <form class="modal" @submit.prevent="addExercise">
      <div>
        <header class="flex-between border-b-2 border-neutral-800 py-4">
          <strong class="flex gap-2 font-semibold text-neutral-100">
            <DocumentPlusIcon class="w-4" />
            Novo Exercício
          </strong>

          <button
            @click="closeAddExerciseModal"
            aria-label="fechar modal"
            class="rounded p-1 transition-colors hover:bg-neutral-800"
          >
            <XMarkIcon class="w-5 cursor-pointer text-neutral-100" />
          </button>
        </header>

        <div class="mt-4 flex flex-col gap-5">
          <div class="grid grid-cols-3 gap-4">
            <BaseInputWrapper class="col-span-2">
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
              <BaseInputLabel id="title">Categorias</BaseInputLabel>
              <InputSelect />
            </BaseInputWrapper>
          </div>

          <div
            v-if="currentCategory.name"
            class="flex flex-col items-center gap-2"
          >
            <strong class="text-sm text-neutral-100">
              Músculos Trabalhados
            </strong>

            <InputCheckboxWrapper>
              <InputCheckbox
                v-for="subcategory in subcategoriesSelector[
                  currentCategory.name
                ]"
                :subcategory="subcategory"
                :key="subcategory"
              >
                {{ subcategory }}
              </InputCheckbox>
            </InputCheckboxWrapper>
          </div>

          <div
            class="flex w-full items-center justify-between gap-8 max-sm:gap-3"
          >
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
                v-model="exercise.amount"
                class="w-32 max-sm:w-20"
                id="amount"
                placeholder="10"
                type="number"
              />
            </BaseInputWrapper>

            <BaseInputWrapper>
              <BaseInputLabel id="weight">Peso</BaseInputLabel>
              <BaseInput
                v-model="exercise.weight"
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
        Adicionar Exercício
      </button>
    </form>
  </div>
</template>
