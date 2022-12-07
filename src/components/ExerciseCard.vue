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
  const classHeader = 'w-full px-4 rounded-tr-md bg-neutral-800'
  const classHeaderComponents =
    'h-fit flex-between py-2 border-b-2 border-neutral-900'
  const classHeaderIcon = 'w-3 cursor-pointer'
  const classData =
    'group w-full flex-between px-4 rounded-br-md bg-neutral-800'
  const classCheckAndTitle =
    'cursor-pointer w-5 h-5 flex-center rounded-md bg-neutral-900'
  const classTitle = 'text-sm font-semibold'
  const classCategory =
    'w-fit text-[10px] font-semibold text-center text-yellow-500 px-2 py-px rounded-md bg-neutral-900'
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
          <div class="flex-center gap-2">
            <p
              v-for="category in exercise.categories"
              :key="exercise.categories.indexOf(category)"
              :class="classCategory"
            >
              {{ category }}
            </p>
          </div>
        </div>
      </div>
      <h3 :class="classWeight">
        {{ props.exercise.weight + ' Kg' }}
      </h3>
    </div>
  </div>
</template>
