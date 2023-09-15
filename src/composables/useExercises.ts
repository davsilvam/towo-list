import { computed, onMounted, reactive, ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import { Exercise } from '../entities'

export function useExercises() {
  const exercise = reactive({
    id: uuidv4(),
    name: '',
    weight: null,
    series: null,
    amount: null,
    category: '',
  })

  const exercises = ref<Exercise[]>([])

  onMounted(() => {
    getLocalStorageExercises()
  })

  function getLocalStorageExercises() {
    const localStorageData = JSON.parse(localStorage.getItem('towo:exercises') ?? '[]') as Exercise[]
    exercises.value = localStorageData
  }

  function updateLocalStorageExercises() {
    localStorage.setItem('towo:exercises', JSON.stringify(exercises.value))
  }

  const isFormFilled = computed(() => {
    const { name, weight, series, amount, category } = exercise

    if (name && weight !== null && weight >= 0 && series && amount && category)
      return true

    return false
  })

  function setExerciseCategory(value: string) {
    exercise.category = value
  }

  function resetFields() {
    exercise.id = uuidv4()
    exercise.name = ''
    exercise.weight = null
    exercise.series = null
    exercise.amount = null
    exercise.category = ''
  }

  function createExercise() {
    const { id, name, weight, series, amount, category } = exercise

    if (name && weight !== null && weight && series && amount && category) {
      exercises.value.push({
        id,
        name,
        weight,
        series: Array(series).fill(false),
        amount,
        category,
      })
    }

    updateLocalStorageExercises()

    resetFields()
  }

  function toogleExerciseSerie(values: [boolean, string, number]) {
    exercises.value = exercises.value.map((exercise) => {
      if (exercise.id === values[1])
        exercise.series[values[2]] = values[0]

      return exercise
    })

    updateLocalStorageExercises()
  }

  function deleteExercise(id: string) {
    exercises.value = exercises.value.filter(exercise => exercise.id !== id)
    updateLocalStorageExercises()
  }

  return {
    exercise,
    exercises,
    isFormFilled,
    setExerciseCategory,
    createExercise,
    toogleExerciseSerie,
    deleteExercise,
  }
}
