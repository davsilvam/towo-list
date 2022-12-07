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

  const classLabel = 'text-sm text-neutral-100'
  const classInput =
    'cursor-pointer relative w-full h-10 flex-between text-neutral-100 px-2 rounded-md bg-neutral-800'
  const classInputText = 'w-full text-sm bg-transparent'
  const classDropbox =
    'absolute -bottom-28 z-10 w-full flex flex-col text-neutral-100 rounded-md bg-neutral-800'
  const classDropboxItem =
    'cursor-pointer text-sm py-2 px-2 rounded-md hover-bg'
</script>

<template>
  <div class="relative w-full flex flex-col gap-2 col-start-3 col-end-4">
    <label for="category" :class="classLabel">Categoria</label>
    <div :class="classInput" @click="toogleSelect">
      <p
        placeholder="Superiores"
        type="text"
        id="category"
        :class="[
          classInputText,
          {
            'text-neutral-500': categoryMessage === 'Selecionar',
          },
        ]"
      >
        {{ categoryMessage }}
      </p>
      <ChevronDownIcon class="hidden md:block absolute w-5 right-1" />
    </div>
    <ul :class="classDropbox" v-if="selectOpen">
      <li
        :class="classDropboxItem"
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
