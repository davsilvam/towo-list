import { ref, watchEffect } from 'vue'

// stores
import { defineStore } from 'pinia'

// types
import { Exercise } from '../@types'

export const useExercises = defineStore('exercises', () => {
  const exercises = ref<Exercise[]>(
    JSON.parse(localStorage.getItem('exercises') || '[]')
  )
  const pendingExercises = ref<Exercise[]>([])
  const doneExercises = ref<Exercise[]>([])

  const editingExercise = ref<Exercise>({
    id: '',
    title: '',
    category: {
      name: '',
      subcategories: [],
    },
    series: 0,
    amount: 0,
    weight: 0,
    count: 0,
    completed: false,
  })

  const deletingExerciseId = ref<string>('')

  watchEffect(() => {
    pendingExercises.value = exercises.value.filter(
      (exercise) => !exercise.completed
    )

    doneExercises.value = exercises.value.filter(
      (exercise) => exercise.completed
    )

    return {
      doneExercises,
      pendingExercises,
    }
  })

  function incrementExerciseSerieCounter(id: string) {
    const exercise = exercises.value.find((exercise) => (exercise.id = id))

    if (!exercise) return

    if (exercise.completed) {
      exercise.count = 0
      changeExerciseStatus(id)
      localStorage.setItem('exercises', JSON.stringify(exercises.value))

      return
    }

    exercise.count++
    localStorage.setItem('exercises', JSON.stringify(exercises.value))

    if (exercise.count === exercise.series) {
      changeExerciseStatus(id)
      localStorage.setItem('exercises', JSON.stringify(exercises.value))

      return
    }
  }

  function changeExerciseStatus(id: string) {
    const exercise = exercises.value.find((exercise) => exercise.id === id)

    if (!exercise) return

    exercise.completed = !exercise.completed
  }

  function createExercise(exercise: Exercise) {
    exercises.value.push(exercise)
    localStorage.setItem('exercises', JSON.stringify(exercises.value))
  }

  function deleteExercise(id: string) {
    const filteredExercises = exercises.value.filter(
      (exercise) => exercise.id !== id
    )

    exercises.value = filteredExercises
    localStorage.setItem('exercises', JSON.stringify(exercises.value))
    deletingExerciseId.value = ''
  }

  function editExercise(id: string) {
    const task = exercises.value.find((exercise) => exercise.id === id)

    if (!task) return

    editingExercise.value = task
  }

  function filterExercise(search: string) {
    const filteredExercises = exercises.value.filter((exercise) =>
      exercise.title.includes(search)
    )

    return filteredExercises
  }

  function updateExercise(updatedExercise: Exercise) {
    const updatedExercises = exercises.value.filter(
      (exercise) => exercise.id !== updatedExercise.id
    )

    exercises.value = [...updatedExercises, updatedExercise]
    localStorage.setItem('exercises', JSON.stringify(exercises.value))

    clearEditingExercise()
  }

  function clearEditingExercise() {
    editingExercise.value = {
      id: '',
      title: '',
      category: {
        name: '',
        subcategories: [],
      },
      series: 0,
      amount: 0,
      weight: 0,
      count: 0,
      completed: false,
    }
  }

  return {
    exercises,
    doneExercises,
    pendingExercises,
    editingExercise,
    deletingExerciseId,
    incrementExerciseSerieCounter,
    createExercise,
    deleteExercise,
    editExercise,
    filterExercise,
    updateExercise,
    clearEditingExercise,
  }
})
