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
    class="w-full bg-neutral-800 rounded-r-md pl-4 flex justify-between items-center border-yellow-500 border-l-2"
  >
    <div class="flex gap-3 items-center py-2">
      <div
        class="w-5 h-5 bg-neutral-900 rounded-md flex items-center justify-center"
        @click="incrementCounter(props.id)"
      >
        <i
          class="ri-check-line text-yellow-500"
          :class="{ hidden: !props.exercise.completed }"
        ></i>
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
    <div class="relative h-full flex items-center justify-center group">
      <h3 class="text-lg font-semibold pr-4"
      :class="{
              'text-yellow-500': props.exercise.completed,
              'text-neutral-100': !props.exercise.completed,
            }">
        {{ props.exercise.count + '/' + props.exercise.series }}
      </h3>
      <div class="hidden absolute right-0 group-hover:flex items-center justify-center bg-yellow-500 h-full py-[26px] w-16 rounded-r-lg cursor-pointer"
      @click="deleteExercise(props.id)"
      >
        <i class="ri-delete-bin-line"></i>
      </div>
    </div>
  </div>
</template>
