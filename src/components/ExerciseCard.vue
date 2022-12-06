<script setup lang="ts">
  import { useTask } from '../store'
  import { PencilIcon, TrashIcon, CheckIcon } from '@heroicons/vue/20/solid'

  const tasks = useTask()
  const props = defineProps(['exercise', 'id'])

  const incrementCounter = (id: number) => {
    tasks.incrementCounter(id)
  }

  const deleteExercise = (id: number) => {
    tasks.deleteExercise(id)
  }

  const classCard =
    'flex flex-col w-full lg:max-w-2xl border-l-2 border-yellow-500'
  const classHeader = 'w-full bg-neutral-800 rounded-tr-md px-4'
  const classHeaderComponents =
    'h-fit flex items-center justify-between border-neutral-900 border-b-2 py-2'
  const classHeaderIcon = 'w-3 cursor-pointer'
  const classData =
    'w-full bg-neutral-800 rounded-br-md px-4 flex justify-between items-center group'
  const classCheckAndTitle =
    'w-5 h-5 bg-neutral-900 rounded-md flex items-center justify-center cursor-pointer'
  const classTitle = 'text-sm font-semibold'
  const classCategory =
    'bg-neutral-900 text-yellow-500 text-center w-fit py-px px-2 rounded-md font-semibold text-[10px]'
  const classWeight = 'text-lg font-semibold text-neutral-100'
</script>

<template>
  <div :class="classCard">
    <header :class="classHeader">
      <div :class="classHeaderComponents">
        <p
          class="text-xs font-semibold"
          :class="{
            'text-yellow-500': props.exercise.completed,
            'text-neutral-100': !props.exercise.completed,
          }"
        >
          {{
            exercise.count == exercise.series
              ? 'Completo'
              : `Faltam ${props.exercise.series - props.exercise.count} séries.`
          }}
        </p>
        <nav class="flex gap-4">
          <PencilIcon :class="['text-yellow-500', classHeaderIcon]" />
          <TrashIcon
            :class="['text-rose-500', classHeaderIcon]"
            @click="deleteExercise(props.id)"
          />
        </nav>
      </div>
    </header>
    <div :class="classData">
      <div class="flex gap-3 items-center py-2">
        <div :class="classCheckAndTitle" @click="incrementCounter(props.id)">
          <CheckIcon
            class="w-4 text-yellow-500"
            :class="{ hidden: !props.exercise.completed }"
          />
          <span
            class="hidden text-sm text-neutral-700"
            :class="{ 'group-hover:block': !props.exercise.completed }"
            >+1</span
          >
        </div>
        <div class="flex flex-col gap-1">
          <h3
            :class="[
              classTitle,
              {
                'text-yellow-500': props.exercise.completed,
                'text-neutral-100': !props.exercise.completed,
                'line-through': props.exercise.completed,
              },
            ]"
          >
            {{ props.exercise.title }}
          </h3>
          <div class="flex items-center justify-center gap-2">
            <p v-for="category in exercise.categories" :key="exercise.categories.indexOf(category)" :class="classCategory">
              {{ category }}
            </p>
          </div>
        </div>
      </div>
      <h3 :class="classWeight">
        {{ props.exercise.weight + ' Kg' }}
      </h3>
      <i class="ri-close-line hidden text-lg absolute right-0 text-rose-500 group-hover:flex cursor-pointer"
      @click="deleteExercise(props.id)"
      ></i>
    </div>
  </div>
</template>
