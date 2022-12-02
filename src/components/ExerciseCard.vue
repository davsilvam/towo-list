<script setup lang="ts">
  import { useTask } from '../store'

  const tasks = useTask()
  const props = defineProps(['exercise', 'id'])

  const incrementCounter = (id: number) => {
    tasks.incrementCounter(id)
  }

  const deleteExercise = (id: number) => {
    tasks.deleteExercise(id)
  }
</script>

<template>
  <div
    class="w-full bg-neutral-800 rounded-r-md px-4 flex justify-between items-center border-yellow-500 border-l-2 group"
  >
    <div class="flex gap-3 items-center py-2">
      <div
        class="w-5 h-5 bg-neutral-900 rounded-md flex items-center justify-center cursor-pointer"
        @click="incrementCounter(props.id)"
      >
        <i
          class="ri-check-line text-yellow-500"
          :class="{ hidden: !props.exercise.completed }"
        ></i>
        <span
          class="hidden text-sm text-neutral-700"
          :class="{ 'group-hover:block': !props.exercise.completed }"
          >+1</span
        >
      </div>
      <div>
        <h3
          class="text-sm font-semibold"
          :class="{
            'text-yellow-500': props.exercise.completed,
            'text-neutral-100': !props.exercise.completed,
            'line-through': props.exercise.completed,
          }"
        >
          {{ props.exercise.title }}
        </h3>
        <p class="text-neutral-400 font-normal text-xs">
          {{ props.exercise.series + 'x' }} de {{ props.exercise.amount }}
        </p>
      </div>
    </div>
    <div class="relative h-full flex items-center justify-center">
      <h3
        class="text-lg font-semibold pr-8"
        :class="{
          'text-yellow-500': props.exercise.completed,
          'text-neutral-100': !props.exercise.completed,
        }"
      >
        {{ props.exercise.count + '/' + props.exercise.series }}
      </h3>
      <i
        class="ri-close-line hidden text-lg absolute right-0 text-rose-500 group-hover:flex cursor-pointer"
        @click="deleteExercise(props.id)"
      ></i>
    </div>
  </div>
</template>
