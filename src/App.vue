<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import DesktopSidebar from './components/desktop/DesktopSidebar.vue'
  import MobileNavbar from './components/MobileNavbar.vue'
</script>

<template>
  <div class="relative w-screen flex-between bg-neutral-900">
    <DesktopSidebar />
    <RouterView class="lg:ml-20 bg-neutral-800" />
    <MobileNavbar />
  </div>
</template>
