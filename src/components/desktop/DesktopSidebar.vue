<script setup lang="ts">
  import DesktopNavbar from './DesktopNavbar.vue'

  const classAside =
    'fixed z-10 min-w-fit w-20 min-h-screen hidden lg:flex flex-col items-center gap-4 bg-neutral-900 py-8'
</script>

<template>
  <aside :class="classAside">
    <img
      class="w-14"
      src="../../assets/img/towo_logo.png"
      alt="Logo da ToWo, com uma figura de uma pessoa levantando um peso no lugar do T."
    />
    <DesktopNavbar />
  </aside>
</template>
