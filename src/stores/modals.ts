import { reactive } from 'vue'

// stores
import { defineStore } from 'pinia'
import { useExercises } from './'

// types
import { Modal } from '../@types'

export const useModals = defineStore('modals', () => {
  const { clearEditingExercise } = useExercises()

  const addModal = reactive<Modal>({
    isOpen: false,
    toogleModal() {
      this.isOpen = !this.isOpen
    },
  })

  const deleteModal = reactive<Modal>({
    isOpen: false,
    toogleModal() {
      this.isOpen = !this.isOpen
    },
  })

  const editModal = reactive<Modal>({
    isOpen: false,
    toogleModal() {
      this.isOpen = !this.isOpen
      if (!this.isOpen) {
        clearEditingExercise()
      }
    },
  })

  return {
    addModal,
    deleteModal,
    editModal,
  }
})
