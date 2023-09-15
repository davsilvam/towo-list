<script lang="ts" setup>
import { Dumbbell, Trash } from 'lucide-vue-next'
import { Exercise } from '../../entities'
import { Input } from '../'

const { exercise } = defineProps<{
  exercise: Exercise
}>()

const emit = defineEmits<ExerciseCardEmits>()

interface ExerciseCardEmits {
  (e: 'update:serie', value: [boolean, string, number]): void
  (e: 'delete:exercise', value: string): void
}
</script>

<template>
  <li
    class="flex w-full flex-col gap-2 rounded border border-neutral-700 bg-neutral-800 px-7 py-5"
    :class="[exercise.series.some((serie) => serie === false) ? '' : 'opacity-50']"
  >
    <header class="flex w-full items-center justify-between">
      <div class="w-fit rounded-2xl bg-green-500/20 px-4 py-1.5 text-xs font-semibold text-green-400">
        {{ exercise.category }}
      </div>

      <button class="rounded-md p-2 transition-colors hover:bg-neutral-700" @click="() => emit('delete:exercise', exercise.id)">
        <Trash class="h-4 w-4" />
      </button>
    </header>

    <div class="mt-2 flex items-end justify-between">
      <div class="space-y-2">
        <strong class="text-xl font-semibold">
          {{ exercise.name }}
        </strong>

        <span class="flex items-center gap-2 font-medium text-neutral-500">
          <Dumbbell class="h-4 w-4" /> {{ exercise.weight }} Kg
        </span>
      </div>

      <div class="flex flex-col items-end gap-3">
        <p class="text-xs text-neutral-500">
          Séries de
          <span class="font-semibold text-neutral-300">{{ exercise.amount }}x</span>
        </p>

        <div class="flex items-center gap-3">
          <Input.Checkbox
            v-for="(serie, index) in exercise.series"
            :key="index"
            :is-checked="serie"
            :disabled="!serie && exercise.series[index - 1] === false"
            @update:checked="(value) => emit('update:serie', [value, exercise.id, index])"
          />
        </div>
      </div>
    </div>
  </li>
</template>
