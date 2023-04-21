<script lang="ts" setup>
  import DesktopNavbar from './DesktopNavbar.vue'
</script>

<template>
  <aside
    class="lg:flex-between bg-topography fixed left-0 z-10 hidden h-screen w-24 flex-col border-r-2 border-yellow-500 py-8"
  >
    <img
      class="w-14"
      src="../../assets/img/towo_logo.png"
      alt="Logo da ToWo, com uma figura de uma pessoa levantando um peso no lugar do T."
    />

    <DesktopNavbar />

    <span></span>
  </aside>
</template>
