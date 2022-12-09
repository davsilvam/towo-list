<script setup lang="ts">
  import DesktopNavbar from './DesktopNavbar.vue'
</script>

<template>
  <aside
    class="fixed z-10 right-4 min-w-fit w-20 hidden lg:flex flex-col items-center gap-4 py-8 rounded-lg bg-neutral-900 bg-opacity-80 group"
  >
    <img
      class="w-14"
      src="../../assets/img/towo_logo.png"
      alt="Logo da ToWo, com uma figura de uma pessoa levantando um peso no lugar do T."
    />
    <DesktopNavbar />
  </aside>
</template>
