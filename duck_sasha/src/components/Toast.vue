<template>
    <transition name="fade">
      <div 
        v-if="show" 
        class="fixed flex flex-row bottom-6 left-6 bg-dark text-light pr-6 py-3 rounded-xl shadow-custom border-light border-2 z-50 text-lg font-mahone"
      >
      <img src="./../assets/duck_2.png" class="w-32 h-auto" />
       <h1 class="flex self-center"> {{ message }}</h1>
      </div>
    </transition>
  </template>
  
  <script setup>
  defineProps({
    message: String,
    show: Boolean,
  });
  </script>
  
  <style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  </style>
  