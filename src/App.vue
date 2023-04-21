<script lang="ts" setup>
  // components
  import DesktopSidebar from './components/app/DesktopSidebar.vue'
  import MobileNavbar from './components/app/MobileNavbar.vue'
  import AddModal from './components/modal/AddModal.vue'
  import EditModal from './components/modal/EditModal.vue'
  import DeleteModal from './components/modal/DeleteModal.vue'

  // router
  import { RouterView } from 'vue-router'

  // stores
  import { useModals } from './stores'

  const { addModal, editModal, deleteModal } = useModals()
</script>

<template>
  <div class="flex-between relative w-full bg-neutral-900">
    <DesktopSidebar />

    <RouterView class="bg-neutral-900 lg:ml-24" v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <Component :is="Component" />
      </Transition>
    </RouterView>

    <MobileNavbar />

    <Teleport to="body">
      <AddModal v-if="addModal.isOpen" />
      <EditModal v-if="editModal.isOpen" />
      <DeleteModal v-if="deleteModal.isOpen" />
    </Teleport>
  </div>
</template>

<style>
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease-out;
  }
</style>
