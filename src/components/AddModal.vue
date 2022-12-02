<script setup lang="ts">
  import { useTask, Exercise } from '../store'
  import { ref, watchEffect } from 'vue'

  const tasks = useTask()
  const emptyFields = ref<boolean>(true)

  const exercise = ref<Exercise>({
    title: '',
    series: null,
    amount: null,
    count: 0,
    completed: false,
  })

  watchEffect(() => {
    if (
      exercise.value.title &&
      exercise.value.series &&
      exercise.value.amount
    ) {
      emptyFields.value = false
      return
    }
    emptyFields.value = true
  })

  const emits = defineEmits(['closeModal'])

  const closeModal = () => {
    emits('closeModal', false)
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
</script>

<template>
  <div
    class="w-screen h-screen grid place-items-center top-0 bg-neutral-800 bg-opacity-75 absolute"
    @click.self="closeModal"
  >
    <form
      class="w-10/12 px-4 pb-6 flex flex-col justify-between max-w-lg h-80 rounded-lg bg-neutral-900"
      @submit.prevent="addExercise()"
    >
      <div>
        <header
          class="py-3 flex justify-between items-center border-b-2 border-neutral-800"
        >
          <h3 class="font-semibold text-sm text-yellow-500">
            Adicionando exercício
          </h3>
          <i
            class="ri-close-line text-sm text-neutral-100"
            @click="closeModal"
          ></i>
        </header>
        <div class="mt-4 flex flex-col gap-4">
          <div class="flex flex-col gap-2">
            <label for="title" class="text-sm text-neutral-100"
              >Nome do exercício</label
            >
            <input
              class="w-full bg-neutral-800 text-neutral-100 text-sm p-2 placeholder:text-neutral-500 rounded-md outline-none"
              type="text"
              id="title"
              placeholder="Levantamento de peso..."
              v-model="exercise.title"
            />
          </div>
          <div class="grid grid-cols-2 place-items-center">
            <div class="flex flex-col gap-2 items-center">
              <label for="series" class="text-sm text-neutral-100"
                >Séries</label
              >
              <input
                class="w-16 bg-neutral-800 text-neutral-100 text-sm p-2 placeholder:text-neutral-500 rounded-md outline-none"
                type="number"
                id="series"
                placeholder="3"
                v-model="exercise.series"
              />
            </div>
            <div class="flex flex-col gap-2 items-center">
              <label for="amount" class="text-sm text-neutral-100"
                >Quantidade</label
              >
              <input
                class="w-16 bg-neutral-800 text-neutral-100 text-sm p-2 placeholder:text-neutral-500 rounded-md outline-none"
                type="number"
                id="amount"
                placeholder="3"
                v-model="exercise.amount"
              />
            </div>
          </div>
        </div>
      </div>
      <input
        class="border-2 py-2 rounded-lg border-yellow-500"
        :class="{
          'bg-yellow-500': !emptyFields,
          'text-neutral-100': !emptyFields,
          'text-yellow-500': emptyFields,
        }"
        type="submit"
        value="Adicionar"
      />
    </form>
  </div>
</template>
