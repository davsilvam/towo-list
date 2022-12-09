<script setup lang="ts">
  import { ref } from 'vue'
  import { ChevronDownIcon } from '@heroicons/vue/20/solid'

  const emits = defineEmits(['category'])
  const props = defineProps(['categories'])

  const currentCategory = ref<string>('')
  const categoryMessage = ref<string>('Selecionar')
  const selectOpen = ref<boolean>(false)

  const toogleSelect = () => {
    selectOpen.value = !selectOpen.value
  }

  const selectCategory = (category: string) => {
    currentCategory.value = category
    categoryMessage.value = category
    emits('category', currentCategory.value)
    toogleSelect()
  }
</script>

<template>
  <div class="relative w-full flex flex-col gap-2 col-start-3 col-end-4">
    <label for="category" class="label">Categoria</label>
    <div class="select-input" @click="toogleSelect">
      <p
        placeholder="Superiores"
        type="text"
        id="category"
        :class="[
          'w-full text-sm bg-transparent',
          {
            'text-neutral-500': categoryMessage === 'Selecionar',
          },
        ]"
      >
        {{ categoryMessage }}
      </p>
      <ChevronDownIcon class="hidden md:block absolute w-5 right-1" />
    </div>
    <ul class="dropbox" v-if="selectOpen">
      <li
        class="cursor-pointer text-sm py-2 px-2 rounded-md hover-bg"
        v-for="category in props.categories"
        :key="categories.indexOf(category)"
      >
        <p @click="selectCategory(category.title)">
          {{ category.title }}
        </p>
      </li>
    </ul>
  </div>
</template>
