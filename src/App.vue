<script setup lang="ts">
import { Plus } from 'lucide-vue-next'

import { ExerciseCard, ExerciseContainer, Input } from './components'
import { useExercises } from './composables'

const { exercise, exercises, isFormFilled, setExerciseCategory, createExercise, toogleExerciseSerie, deleteExercise } = useExercises()
</script>

<template>
  <main class="relative flex min-h-screen flex-col gap-10 bg-neutral-900 px-8 py-20 text-neutral-50 md:px-16 lg:px-20 xl:px-40">
    <div class="space-y-8">
      <h1 class="text-4xl font-semibold">
        ToWo List
      </h1>

      <form class="flex grid-cols-2 items-end justify-between gap-5 max-sm:grid" @submit.prevent="createExercise">
        <Input.Wrapper class="grow-[2]">
          <Input.Label id="name">
            Nome
          </Input.Label>
          <Input.Base id="name" v-model.trim="exercise.name" class="w-full" type="text" placeholder="Supino Reto" />
        </Input.Wrapper>

        <Input.Wrapper class="flex-1">
          <Input.Label id="series">
            Séries
          </Input.Label>

          <div class="flex items-center">
            <input id="series" v-model.number="exercise.series" type="number" class="w-full min-w-[60px] rounded-l-lg border border-neutral-700 bg-neutral-900 p-2 placeholder:text-neutral-500 md:min-w-[80px]" placeholder="2x">
            <input id="amount" v-model.number="exercise.amount" type="number" class="w-full min-w-[60px] rounded-r-lg border border-neutral-700 bg-neutral-900 p-2 placeholder:text-neutral-500 md:min-w-[80px]" placeholder="10">
          </div>
        </Input.Wrapper>

        <Input.Wrapper class="flex-1">
          <Input.Label id="weight">
            Peso
          </Input.Label>
          <Input.Base id="weight" v-model.number="exercise.weight" class="w-full min-w-[96px] md:min-w-[120px]" type="number" placeholder="10 Kg" />
        </Input.Wrapper>

        <Input.Wrapper>
          <Input.Label id="category">
            Categoria
          </Input.Label>
          <Input.Select @update:category="setExerciseCategory" />
        </Input.Wrapper>

        <button :disabled="!isFormFilled" class="col-span-2 flex items-center justify-center gap-2 rounded-md bg-yellow-400 px-6 py-3 font-semibold text-neutral-950 transition-colors active:hover:bg-yellow-300 disabled:opacity-50 max-sm:w-full">
          <span class="hidden max-sm:block xl:block">
            Novo Exercício
          </span>
          <Plus class="h-5 w-5 xl:h-4 xl:w-4" />
        </button>
      </form>
    </div>

    <ExerciseContainer>
      <ExerciseCard
        v-for="exercise in exercises" :key="exercise.id"
        :exercise="exercise"
        @update:serie="toogleExerciseSerie"
        @delete:exercise="deleteExercise"
      />
    </ExerciseContainer>
  </main>
</template>
