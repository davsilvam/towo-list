<script lang="ts" setup>
  // components
  import { CheckIcon } from '@heroicons/vue/20/solid'

  // stores
  import { useCategories } from '../../../stores'

  const props = defineProps<{ subcategory: string }>()

  const { isSubcategoryChecked, toogleSubcategory } = useCategories()
</script>

<template>
  <div
    @click="() => toogleSubcategory(subcategory)"
    class="flex cursor-pointer items-center gap-2 text-neutral-100"
  >
    <div
      class="h-4 w-4 rounded-sm border"
      :class="[
        isSubcategoryChecked(props.subcategory)
          ? 'border-yellow-700 bg-yellow-500'
          : ' border-neutral-700 bg-neutral-800',
      ]"
      role="checkbox"
    >
      <CheckIcon
        v-if="isSubcategoryChecked(props.subcategory)"
        class="w-fit text-neutral-900"
      />
    </div>

    <span class="text-sm">
      {{ subcategory }}
    </span>
  </div>
</template>
