<template>
    <div class="loader-container opacity-100 bg-hearts-pattern">
      

      <img src="@/assets/duck_2.png" alt="Загрузка..." class="loader-img" />
      <img src="@/assets/duck_3.png" alt="Загрузка..." class="loader-img" />
      <img src="@/assets/duck_2.png" alt="Загрузка..." class="loader-img" />
      <img src="@/assets/duck_3.png" alt="Загрузка..." class="loader-img" />
      <p class="loader-text">Загружаем...</p>
    </div>
  </template>
  
  <script setup>

  </script>
  
  <style scoped>
  .loader-container {
    @apply fixed inset-0 flex flex-col items-center justify-center z-50 bg-background;
  }
  
  .loader-img {
    width: 160px;
    height: auto;
    animation: float 2s ease-in-out infinite;
    opacity: 1.0;
  }
  
  .loader-text {
    @apply text-dark text-3xl font-kompost mt-4;
    animation: pulse 2s infinite;
  }
  
  @keyframes float {
    0% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0); }
  }
  
  @keyframes pulse {
    0% { opacity: 1; }
    50% { opacity: 0.6; }
    100% { opacity: 1; }
  }
  </style>
  