export interface Category {
  name: string
  subcategories: string[] | []
}

export interface SubcategoriesSelector {
  [category: string]: string[]
}

export interface Exercise {
  id: string
  title: string
  category: Category
  series: number
  amount: number
  weight: number
  count: number
  completed: boolean
}

export interface Modal {
  isOpen: boolean
  toogleModal: () => void
}
