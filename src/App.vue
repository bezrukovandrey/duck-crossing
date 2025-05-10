<template>
  <Analytics/>
  <SpeedInsights/>
  <div class="relative flex flex-col min-h-screen bg-background">

    <div class="absolute inset-0 bg-duck-pattern bg-repeat opacity-60 pointer-events-none z-10"></div>
    <Loader v-if="store.isLoading" />
    <div v-else class="flex-1 relative z-10">
      <header>
        <div class="absolute md:top-8 md:left-8 z-20 top-4 left-4">
          <div class="relative lg:w-48 lg:h-32 w-28 h-16 ">
            <RouterLink to="/"><img src="./assets/logo.png" alt="Duck crossing" class="absolute inset-0 m-auto" /></RouterLink>
          </div>
        </div>
        <button
    class="md:hidden absolute top-4 right-4 z-40 bg-iconBg rounded-full p-2 shadow-lg transition duration-300 ease-in-out hover:bg-iconBgHover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-iconBg"
    @click="isMobileMenuOpen = !isMobileMenuOpen"
    aria-label="Открыть меню"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-8 w-8 text-dark"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </button>
        <nav class="hidden md:block absolute md:right-8 md:top-8 top-4 right-4 font-kompost text-dark text-2xl z-20">
          <div class="relative w-[440px] h-20">
            <img src="./assets/paper_6.png" alt="Duck crossing" class="absolute w-full h-full object-cover opacity-80" />
            <div class="absolute inset-0 flex justify-evenly items-center">
              <RouterLink to="/shop">Магазин</RouterLink>
              <RouterLink to="/events">События</RouterLink>
              <RouterLink to="/portfolio">Портфолио</RouterLink>
            </div>
          </div>
        </nav>
        <transition name="fade">
    <div
      v-if="isMobileMenuOpen"
      class="fixed inset-0 bg-background bg-opacity-95 z-30 flex flex-col justify-center items-center space-y-6 text-3xl font-kompost text-dark"
    >
    <RouterLink to="/" @click="isMobileMenuOpen = false">Главная</RouterLink>
      <RouterLink to="/shop" @click="isMobileMenuOpen = false">Магазин</RouterLink>
      <RouterLink to="/events" @click="isMobileMenuOpen = false">События</RouterLink>
      <RouterLink to="/portfolio" @click="isMobileMenuOpen = false">Портфолио</RouterLink>
      <RouterLink to="/checkout" @click="isMobileMenuOpen = false">Корзина</RouterLink>
    </div>
  </transition>
      </header>

      <img src="./assets/paper_1.png" alt="Paper" class="absolute md:w-[calc(100vw-4rem)] w-full h-auto object-cover inset-x-0 m-auto z-10" />

      <RouterView />
    </div>
  </div>
</template>
<script setup>
import { Analytics } from '@vercel/analytics/vue';
import { SpeedInsights } from '@vercel/speed-insights/vue';
import Loader from '@/components/Loader.vue'
import { store } from './store'
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>