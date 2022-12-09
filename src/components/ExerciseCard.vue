<script setup lang="ts">
  import { ref } from 'vue'
  import { useTask, useModals } from '../store'
  import { PencilIcon, TrashIcon, CheckIcon } from '@heroicons/vue/20/solid'

  const tasks = useTask()
  const modals = useModals()
  const props = defineProps(['exercise', 'id'])

  const id = ref<number>(props.id)

  const incrementCounter = (id: number) => {
    tasks.incrementCounter(id)
  }

  const deleteExercise = (id: number) => {
    tasks.deleteExercise(id)
  }

  const editExercise = () => {
    modals.editModal.toogleModal()
    tasks.editExercise(id.value)
  }
</script>

<template>
  <div
    class="flex flex-col w-full lg:max-w-2xl border-l-2 border-yellow-500 rounded-r-md bg-neutral-900"
  >
    <header
      class="w-full px-4 rounded-tr-md bg-[url('../assets/img/topography-pattern.svg')] bg-opacity-50"
    >
      <div
        class="h-fit flex-between py-2 border-b-2"
        :class="{
          'border-yellow-500': props.exercise.completed,
          'border-neutral-800': !props.exercise.completed,
        }"
      >
        <p
          class="text-xs font-semibold"
          :class="{
            'text-yellow-500': props.exercise.completed,
            'text-neutral-100': !props.exercise.completed,
          }"
        >
          {{
            exercise.count === exercise.series
              ? 'Completo'
              : exercise.series - exercise.count === 1
              ? `Faltam ${
                  props.exercise.series - props.exercise.count
                } série de ${props.exercise.amount}.`
              : `Faltam ${
                  props.exercise.series - props.exercise.count
                } séries de ${props.exercise.amount}.`
          }}
        </p>
        <nav class="flex gap-4">
          <PencilIcon
            class="header-icon text-yellow-500"
            @click="editExercise"
          />
          <TrashIcon
            class="header-icon text-rose-500"
            @click="deleteExercise(id)"
          />
        </nav>
      </div>
    </header>
    <div class="group w-full flex-between px-4 rounded-br-md">
      <div class="flex gap-4 items-center py-3">
        <div
          class="cursor-pointer w-5 h-5 flex-center rounded-md bg-neutral-800 hover-ring"
          @click="incrementCounter(id)"
        >
          <CheckIcon
            class="w-4 text-yellow-500"
            :class="{ hidden: !props.exercise.completed }"
          />
          <span
            class="hidden text-xs text-neutral-700"
            :class="{ 'group-hover:block': !props.exercise.completed }"
            >+1</span
          >
        </div>
        <div class="flex flex-col gap-1.5">
          <h3
            :class="[
              'text-sm font-semibold',
              {
                'text-yellow-500': props.exercise.completed,
                'text-neutral-100': !props.exercise.completed,
                'line-through': props.exercise.completed,
              },
            ]"
          >
            {{ props.exercise.title }}
          </h3>
          <div class="flex-center gap-2">
            <p
              v-for="category in exercise.categories"
              :key="exercise.categories.indexOf(category)"
              class="category"
            >
              {{ category }}
            </p>
          </div>
        </div>
      </div>
      <h3
        class="text-lg font-semibold text-neutral-100"
        :class="{
          'text-yellow-500': props.exercise.completed,
          'text-neutral-100': !props.exercise.completed,
        }"
      >
        {{ props.exercise.weight + ' Kg' }}
      </h3>
    </div>
  </div>
</template>

<style scoped>
  .header-icon {
    @apply w-3 cursor-pointer;
  }

  .category {
    @apply w-fit text-[10px] font-semibold text-center text-neutral-900 px-2 py-px rounded-md bg-yellow-500;
  }
</style>
