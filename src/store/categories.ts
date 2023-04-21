import { reactive } from 'vue'

// stores
import { defineStore } from 'pinia'

// types
import { Category, SubcategoriesSelector } from '../@types'

export const useCategories = defineStore('categories', () => {
  const categories: string[] = ['Superiores', 'Inferiores']

  const subcategoriesSelector: SubcategoriesSelector = {
    Superiores: ['Costas', 'Ombros', 'Tríceps', 'Bíceps', 'Tórax', 'Abdômen'],
    Inferiores: ['Coxas', 'Panturrilha', 'Glúteos'],
  }

  const currentCategory = reactive<Category>({
    name: '',
    subcategories: [],
  })

  function setSelectedCategory(categoryName: string) {
    currentCategory.name = categoryName
  }

  const isSubcategoryChecked = (subcategory: string) =>
    currentCategory.subcategories.some((checked) => checked === subcategory)

  function toogleSubcategory(subcategory: string) {
    if (isSubcategoryChecked(subcategory)) {
      return (currentCategory.subcategories =
        currentCategory.subcategories.filter(
          (checked) => checked !== subcategory
        ))
    }

    currentCategory.subcategories = [
      ...currentCategory.subcategories,
      subcategory,
    ]
  }

  function clearCurrentCategory() {
    currentCategory.name = ''
    currentCategory.subcategories = []
  }

  return {
    categories,
    subcategoriesSelector,
    currentCategory,
    setSelectedCategory,
    isSubcategoryChecked,
    toogleSubcategory,
    clearCurrentCategory,
  }
})
