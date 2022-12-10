<script setup lang="ts">
  import { LightBulbIcon } from '@heroicons/vue/24/outline'
  import DesktopNavbar from './DesktopNavbar.vue'
</script>

<template>
  <aside
    class="fixed left-0 z-10 h-screen w-24 hidden lg:flex-between flex-col py-8 border-r-2 border-yellow-500 bg-topography"
  >
    <img
      class="w-14"
      src="../../assets/img/towo_logo.png"
      alt="Logo da ToWo, com uma figura de uma pessoa levantando um peso no lugar do T."
    />
    <DesktopNavbar />
    <LightBulbIcon class="cursor-pointer w-5 text-neutral-100" />
  </aside>
</template>
