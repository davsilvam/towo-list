import { defineStore } from 'pinia'
import { ref, watchEffect } from 'vue'

export type CategoryType = 'Superiores' | 'Inferiores' | unknown

export interface Exercise {
  id: number | unknown
  title: string
  category: CategoryType
  categories: string[]
  series: number | unknown
  amount: number | unknown
  weight: number | unknown
  count: number
  completed: boolean
}

export const useExercises = defineStore('exercises', () => {
  const exercises = ref<Exercise[]>(
    JSON.parse(localStorage.getItem('exercises') || '[]')
  )
  const pendingExercises = ref<Exercise[]>([])
  const doneExercise = ref<Exercise[]>([])
  const editingExercise = ref<Exercise>()
  const editingId = ref<number | unknown>()
  const deletingExercise = ref<number>(0)

  watchEffect(() => {
    pendingExercises.value = exercises.value.filter(
      (exercise: Exercise) => exercise.completed === false
    )

    doneExercise.value = exercises.value.filter(
      (exercise: Exercise) => exercise.completed === true
    )

    return {
      pendingExercises,
      doneExercise,
    }
  })

  const updateExercises = (): void => {
    pendingExercises.value = exercises.value.filter(
      (exercise: Exercise) => exercise.completed === false
    )

    doneExercise.value = exercises.value.filter(
      (exercise: Exercise) => exercise.completed === true
    )
  }

  const incrementCounter = (index: number): void => {
    const exercise: Exercise = exercises.value[index]

    if (exercise.completed) {
      exercise.count = 0
      changeStatus(index)
      localStorage.setItem('exercises', JSON.stringify(exercises.value))
      updateExercises()
      return
    }

    exercise.count++
    localStorage.setItem('exercises', JSON.stringify(exercises.value))

    if (exercise.count === exercise.series) {
      changeStatus(index)
      localStorage.setItem('exercises', JSON.stringify(exercises.value))
      updateExercises()
      return
    }
  }

  const changeStatus = (index: number): void => {
    const exercise: Exercise = exercises.value[index]
    exercise.completed = !exercise.completed
    updateExercises()
  }

  const createExercise = (exercise: Exercise): void => {
    exercises.value.push(exercise)
    localStorage.setItem('exercises', JSON.stringify(exercises.value))
    updateExercises()
  }

  const filterExercise = (search: string): Exercise[] | undefined => {
    if (!search) {
      return
    }

    const filteredExercises = exercises.value.filter((exercise: Exercise) =>
      exercise.title.includes(search)
    )

    return filteredExercises
  }

  const deleteExercise = (index: number): void => {
    const task = ref<Exercise>(exercises.value[index])
    const filteredExercises = exercises.value.filter(
      (exercise: Exercise) => exercise != task.value
    )

    exercises.value = filteredExercises
    localStorage.setItem('exercises', JSON.stringify(exercises.value))
    deletingExercise.value = 0
  }

  const editExercise = (index: number): void => {
    const task = ref<Exercise>(exercises.value[index])
    editingId.value = index
    editingExercise.value = task.value
  }

  const updateExercise = (index: number, exercise: Exercise): void => {
    const task = ref<Exercise>(exercises.value[index])
    task.value = exercise
    localStorage.setItem('exercises', JSON.stringify(exercises.value))
    clearEditingExercise()
  }

  const clearEditingExercise = (): void => {
    editingExercise.value = {
      id: undefined,
      title: '',
      category: undefined,
      categories: [],
      series: undefined,
      amount: undefined,
      weight: undefined,
      count: 0,
      completed: false,
    }
    editingId.value = null
  }

  return {
    exercises,
    pendingExercises,
    doneExercise,
    incrementCounter,
    changeStatus,
    createExercise,
    filterExercise,
    deleteExercise,
    editExercise,
    updateExercise,
    editingExercise,
    editingId,
    clearEditingExercise,
    deletingExercise,
  }
})

export interface Modal {
  status: boolean
  toogleModal: () => void
}

export const useModals = defineStore('modals', () => {
  const exercises = useExercises()

  const addModal = ref<Modal>({
    status: false,
    toogleModal() {
      this.status = !this.status
    },
  })
  const editModal = ref<Modal>({
    status: false,
    toogleModal() {
      this.status = !this.status
      if (!this.status) {
        exercises.clearEditingExercise()
      }
    },
  })

  const deleteModal = ref<Modal>({
    status: false,
    toogleModal() {
      this.status = !this.status
    },
  })

  return {
    addModal,
    editModal,
    deleteModal,
  }
})
