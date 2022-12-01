import { defineStore } from 'pinia'
import { ref, watchEffect } from 'vue'

export interface Exercise {
  title: string,
  series: number | unknown,
  amount: number | unknown,
  count: number,
  completed: boolean
}

export const useTask = defineStore('tasks', () => {

  const exercises = ref<Exercise[]>([])
  const pendingExercises = ref<Exercise[]>([])
  const doneExercise = ref<Exercise[]>([])

  watchEffect(() => {
    pendingExercises.value = exercises.value.filter( 
      (exercise: Exercise) => exercise.completed === false)

    doneExercise.value = exercises.value.filter(
      (exercise: Exercise) => exercise.completed === true)

      return {
        pendingExercises,
        doneExercise
      }
  })

  const updateExercise = () => {
    pendingExercises.value = exercises.value.filter( 
      (exercise: Exercise) => exercise.completed === false)

    doneExercise.value = exercises.value.filter(
      (exercise: Exercise) => exercise.completed === true)

      return {
        pendingExercises,
        doneExercise
      }
  }

  const incrementCounter = (index: number) => {
    const exercise: Exercise = exercises.value[index]

    if (exercise.completed) {
      exercise.count = 0
      changeStatus(index)
      updateExercise()
      return
    }

    exercise.count++

    if (exercise.count === exercise.series) {
      changeStatus(index)
      updateExercise()
      return
    }
  }

  const changeStatus = (index: number) => {
    const exercise: Exercise = exercises.value[index]
    exercise.completed = !exercise.completed
  }

  const createExercise = (exercise: Exercise) => {
    exercises.value.unshift(exercise)
    updateExercise()
  }

  const filterExercise = (search: string) => {
    const filteredExercises = exercises.value.filter(
      (exercise: Exercise) => exercise.title.includes(search))

    return filteredExercises
  } 

  return {
    exercises,
    pendingExercises,
    doneExercise,
    incrementCounter,
    changeStatus,
    createExercise,
    filterExercise
  }
})