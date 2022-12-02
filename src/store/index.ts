import { defineStore } from 'pinia'
import { ref, watchEffect } from 'vue'

export interface Exercise {
  title: string
  series: number | unknown
  amount: number | unknown
  count: number
  completed: boolean
}

export const useTask = defineStore('tasks', () => {
  const exercises = ref<Exercise[]>(
    JSON.parse(localStorage.getItem('exercises') || '[]')
  )
  const pendingExercises = ref<Exercise[]>([])
  const doneExercise = ref<Exercise[]>([])

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

  const updateExercise = () => {
    pendingExercises.value = exercises.value.filter(
      (exercise: Exercise) => exercise.completed === false
    )

    doneExercise.value = exercises.value.filter(
      (exercise: Exercise) => exercise.completed === true
    )
  }

  const incrementCounter = (index: number) => {
    const exercise: Exercise = exercises.value[index]

    if (exercise.completed) {
      exercise.count = 0
      changeStatus(index)
      localStorage.setItem('exercises', JSON.stringify(exercises.value))
      updateExercise()
      return
    }

    exercise.count++
    localStorage.setItem('exercises', JSON.stringify(exercises.value))

    if (exercise.count === exercise.series) {
      changeStatus(index)
      localStorage.setItem('exercises', JSON.stringify(exercises.value))
      updateExercise()
      return
    }
  }

  const changeStatus = (index: number) => {
    const exercise: Exercise = exercises.value[index]
    exercise.completed = !exercise.completed
    updateExercise()
  }

  const createExercise = (exercise: Exercise) => {
    exercises.value.unshift(exercise)
    localStorage.setItem('exercises', JSON.stringify(exercises.value))
    updateExercise()
  }

  const filterExercise = (search: string) => {
    const filteredExercises = exercises.value.filter((exercise: Exercise) =>
      exercise.title.includes(search)
    )

    return filteredExercises
  }

  const deleteExercise = (id: number) => {
    const task = ref<Exercise>(exercises.value[id])
    const filteredExercises = exercises.value.filter((exercise: Exercise) => 
      exercise != task.value
    )

    exercises.value = filteredExercises
    localStorage.setItem('exercises', JSON.stringify(exercises.value))
  }

  return {
    exercises,
    pendingExercises,
    doneExercise,
    incrementCounter,
    changeStatus,
    createExercise,
    filterExercise,
    deleteExercise
  }
})
