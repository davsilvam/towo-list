<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
import { Check, ChevronDown } from 'lucide-vue-next'

import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/vue'

const emit = defineEmits<{
  (e: 'update:category', value: string): void
}>()

const options = ['Abdômen', 'Tórax', 'Costas', 'Ombros', 'Tríceps', 'Bíceps', 'Coxas', 'Panturrilhas', 'Glúteos']

const category = ref(options[0])

watchEffect(() => {
  emit('update:category', category.value)
})
</script>

<template>
  <div class="relative">
    <Listbox v-model="category">
      <ListboxButton v-slot="{ value }" class="flex w-full items-center justify-between gap-5 rounded-lg border border-neutral-700 bg-neutral-900 p-2 text-neutral-50 lg:w-40 xl:w-[200px]">
        {{ value }} <ChevronDown class="h-5 w-5" />
      </ListboxButton>

      <ListboxOptions
        class="absolute top-12 z-10 w-[200px] rounded-lg border border-neutral-700 bg-neutral-900 p-2 text-sm"
      >
        <ListboxOption
          v-for="(option, index) in options"
          v-slot="{ selected }"
          :key="index"
          :value="option"
          class="flex items-center justify-between rounded p-2 outline-none hover:bg-neutral-800 hover:text-neutral-50 focus:bg-neutral-800"
          :class="[category === option ? 'text-neutral-50' : 'text-neutral-400']"
        >
          <p>{{ option }}</p>
          <Check v-if="selected" class="h-4 w-4" />
        </ListboxOption>
      </ListboxOptions>
    </Listbox>
  </div>
</template>
