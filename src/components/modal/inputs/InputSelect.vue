<script lang="ts" setup>
  import { ref, watchEffect } from 'vue'

  // primitives
  import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
  } from '@headlessui/vue'

  // stores
  import { useCategories } from '../../../stores'
  import { ChevronDownIcon } from '@heroicons/vue/24/outline'

  const { categories, setSelectedCategory } = useCategories()

  const selectedCategory = ref<string>('')

  watchEffect(() => {
    if (selectedCategory.value) {
      setSelectedCategory(selectedCategory.value)
    }
  })
</script>

<template>
  <div class="relative col-span-1 h-full w-full">
    <Listbox v-model="selectedCategory">
      <ListboxButton
        class="flex-between hover-ring relative h-full w-full cursor-pointer rounded-md bg-neutral-800 px-2 text-sm max-sm:text-xs"
        :class="[
          selectedCategory === '' ? 'text-neutral-600' : 'text-neutral-100',
        ]"
      >
        {{ selectedCategory === '' ? 'Selecionar' : selectedCategory }}
        <ChevronDownIcon class="w-4" />
      </ListboxButton>

      <ListboxOptions
        class="absolute mt-3 w-full divide-y divide-neutral-700 overflow-hidden rounded-md border border-neutral-700 bg-neutral-800"
      >
        <ListboxOption
          v-for="category in categories"
          class="hover-bg cursor-pointer py-2 px-2 text-sm text-neutral-100"
          :key="categories.indexOf(category)"
          :value="category"
        >
          {{ category }}
        </ListboxOption>
      </ListboxOptions>
    </Listbox>
  </div>
</template>
