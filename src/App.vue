<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import { useModals } from './store'
  import DesktopSidebar from './components/desktop/DesktopSidebar.vue'
  import MobileNavbar from './components/MobileNavbar.vue'
  import AddModal from './components/modal/AddModal.vue'
  import EditModal from './components/modal/EditModal.vue'
  import DeleteModal from './components/modal/DeleteModal.vue'

  const modals = useModals()
</script>

<template>
  <div class="relative w-screen flex-between bg-neutral-900">
    <DesktopSidebar />
    <RouterView class="bg-neutral-900 lg:ml-24" v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <Component :is="Component" />
      </Transition>
    </RouterView>
    <MobileNavbar />
    <Teleport to="body">
      <AddModal v-if="modals.addModal.status" />
      <EditModal v-if="modals.editModal.status" />
      <DeleteModal v-if="modals.deleteModal.status" />
    </Teleport>
  </div>
</template>

<style>
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s ease-out;
  }
</style>