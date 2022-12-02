<template>
  <div class="w-full flex items-center justify-center">
    <div
      id="card"
      class="w-fit flex justify-between items-center rounded-sm mx-8 px-8 py-4"
    >
      <i class="ri-lightbulb-line text-xl text-neutral-100 w-1/6"></i>
      <h3 class="text-neutral-100 text-center w-5/6">
        Ainda não há exercícios. Por que não criar um?
      </h3>
    </div>
  </div>
</template>

<style scoped>
  #card {
    background: rgba(38, 38, 38, 0.65);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(8.1px);
    -webkit-backdrop-filter: blur(8.1px);
    border: 1px solid rgba(38, 38, 38, 0.21);
  }
</style>
