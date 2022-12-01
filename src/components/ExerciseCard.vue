<script setup lang="ts">
  import { useTask } from '../store'

  const tasks = useTask()
  const props = defineProps(['exercise', 'id'])

  const incrementCounter = (id: number) => {
    tasks.incrementCounter(id)
  }
</script>

<template>
  <div
    class="w-full lg:max-w-md bg-neutral-800 rounded-r-md px-4 py-2 flex justify-between items-center border-yellow-500 border-l-2"
  >
    <div class="flex gap-3 items-center" @click="incrementCounter(props.id)">
      <div
        class="w-5 h-5 bg-neutral-900 rounded-md flex items-center justify-center"
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
    <h3 class="text-lg font-semibold"
    :class="{
            'text-yellow-500': props.exercise.completed,
            'text-neutral-100': !props.exercise.completed,
          }">
      {{ props.exercise.count + '/' + props.exercise.series }}
    </h3>
  </div>
</template>
