<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import DesktopSidebar from './components/desktop/DesktopSidebar.vue'
  import MobileNavbar from './components/MobileNavbar.vue'
</script>

<template>
  <div class="w-screen bg-neutral-900 flex justify-between relative">
    <DesktopSidebar class="hidden lg:flex" />
    <RouterView class="lg:ml-20"></RouterView>
    <MobileNavbar class="lg:hidden" />
  </div>
</template>
