<template>
    <div class="relative  md:max-xl:hidden">
  <img src="./../assets/paper_back.png" class="absolute -mt-16 xl:-mt-32 left-1/2 transform -translate-x-1/2 h-16 xl:h-24 z-20 w-auto inset-x-0 top-0" />
  <h1 class="absolute left-1/2 transform -translate-x-1/2 -mt-12 xl:-mt-24 top-0 text-2xl xl:text-4xl font-kompost text-dark z-20">СОБЫТИЯ</h1>
</div>

<div class="mt-20 md:mt-28 lg:mt-40 flex flex-col lg:flex-row px-12 sm:px-28 lg:px-40 text-dark sm:gap-12 gap-2">
  <div class="lg:w-1/2 z-20">
    <h1 class="text-xl sm:text-3xl lg:text-4xl font-kompost">ПОЧЕМУ АРТ-МАРКЕТЫ?</h1>
    <p class="text-base sm:text-xl sm:mt-2 font-slimamif leading-6 sm:leading-7">
      Пикники, творческие встречи и фотосеты — это уникальная возможность провести время на свежем воздухе, наслаждаясь атмосферой творчества и общения. Такие мероприятия позволяют не только отдохнуть, но и познакомиться с интересными людьми, обменяться идеями и вдохновением. Фотосеты на природе добавляют особую магию, запечатлевая яркие моменты и создавая воспоминания, которые останутся с вами надолго.
    </p>
  </div>
  <div class="lg:w-1/2 z-20 lg:border-t-0 lg:border-l-2 lg:border-button lg:pt-0 lg:pl-8 flex flex-col ">
    <h1 class="text-xl sm:text-3xl lg:text-4xl font-kompost">БЛИЖАЙШЕЕ СОБЫТИЕ?</h1>
    <p class="text-base sm:text-xl sm:mt-2 font-slimamif leading-6 sm:leading-7">
      Арт-Маркет “Гнездо” 29 июня 2025 года в Даниловском, Москва.
    </p>
    <div class="mt-6 sm:mt-8 flex justify-center lg:justify-start px-4 lg:px-0">
      <button
        class="relative inline-flex mx-auto  mt-4 lg:mt-8 text-dark text-base md:text-lg lg:text-xl font-appleberry group transition-all duration-300 hover:-translate-y-1 hover:scale-105 "
>
  
  <span class="relative z-20 px-14 py-4 lg:px-20 lg:py-6 text-center">
    Подробнее о событии
  </span>
  
 
  <div class="absolute inset-0 z-0 overflow-hidden rounded-lg" 
       :style="{
         left: '-8px',
         right: '-8px',
         top: '-4px',
         bottom: '-4px'
       }">
    
    <img 
      src="./../assets/button_bg.png" 
      class="w-full h-full object-cover transition-all duration-300 
             group-hover:brightness-90 group-hover:scale-105 
             group-hover:shadow-xl group-hover:shadow-dark"
      alt="Фон кнопки"
    />
  </div>
        </button>
    </div>
  </div>
</div>


<div class="mt-12 relative z-20  px-6 sm:px-12 lg:px-48  py-4 ">
  <img src="./../assets/paper_1.png" class="hidden sm:max-[964px]:block absolute left-1/2 transform -mt-80 md:max-lg:px-7 -translate-x-1/2 w-full -z-20 inset-x-0 top-0" />
  <img src="./../assets/paper_8.png" class="hidden lg:max-2xl:block absolute left-1/2 transform -mt-16 min-[1175px]:-mt-24 min-[1300px]:-mt-32 -translate-x-1/2 w-full -z-10 inset-x-0 top-0" />
  <img src="./../assets/paper_9.png" class="hidden md:max-lg:block absolute left-1/2 transform  -mt-20 -translate-x-1/2 w-full -z-10 inset-x-0 top-0" />
  <img src="./../assets/paper_10.png" class=" max-h-[720px] hidden sm:max-md:block absolute left-1/2 transform  -mt-12 -translate-x-1/2 w-full -z-10 inset-x-0 top-0" />
  <h1 class="text-3xl sm:text-4xl z-20 font-kompost text-center">ГАЛЕРЕЯ</h1>

  <div class="mt-4 overflow-hidden z-20 w-full relative max-w-[calc(100vw-8rem)] mx-auto">
    <div class="flex transition-transform duration-500 ease-in-out"
         :style="{ transform: `translateX(-${currentIndex * (100 / imagesPerSlide)}%)` }">
      <div
        v-for="item in items.slice(0, items.length/2)"
        :key="item.id"
        :class="`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 p-2`"
      >
        <div class="relative gap-2 flex flex-col h-52">
          <img :src="item.image" class="w-full h-full object-cover rounded-xl shadow-custom" @click="openModal(item)" />
        </div>
      </div>
    </div>

    
   
  </div>
  <div class="mt-4 overflow-hidden z-20 w-full relative max-w-[calc(100vw-8rem)] mx-auto">
    <div class="flex transition-transform duration-500 ease-in-out"
         :style="{ transform: `translateX(-${currentIndex * (100 / imagesPerSlide)}%)` }">
      <div
        v-for="item in items.slice(items.length/2)"
        :key="item.id"
        :class="`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 p-2`"
      >
        <div class="relative gap-2 flex flex-col h-52">
          <img :src="item.image" class="w-full h-full object-cover rounded-xl shadow-custom" @click="openModal(item)" />
        </div>
      </div>
    </div>

   
   
  </div>
  <button @click="prevSlide" class=" z-20 group absolute left-4 top-1/2 transform"
      :class="{ 'opacity-40': isAtStart, 'cursor-not-allowed': isAtStart }">
      <img src="./../assets/left.svg" class="w-10 sm:w-12 h-10 sm:h-12 transition-all duration-200 group-hover:brightness-0 group-hover:-translate-x-1" />
    </button>
    <button @click="nextSlide" class="z-20 group absolute right-4 top-1/2 transform "
      :class="{ 'opacity-40': isAtEnd, 'cursor-not-allowed': isAtEnd }">
      <img src="./../assets/right.svg" class="w-10 sm:w-12 h-10 sm:h-12 transition-all duration-200 group-hover:brightness-0 group-hover:translate-x-1" />
    </button>

 
  <transition
    enter-active-class="transition-opacity duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div v-if="isModalOpen" class="fixed inset-0 bg-black/90 flex justify-center items-center z-50 p-4" @click="closeModal">
      <transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 scale-90"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-110"
      >
        <img
          :src="selectedImage"
          class="max-w-full max-h-full object-contain"
          @click.stop
        />
      </transition>
    </div>
  </transition>
</div>
<img src="./../assets/paper_long.png" class="sm:hidden absolute max-h-[1000px] bottom-48 w-full h-auto object-cover inset-x-0 m-auto z-10" />
<img src="./../assets/paper_long.png" class="sm:hidden absolute top-4 max-h-[1000px] w-full h-auto object-cover inset-x-0 m-auto z-10" />

<footer class="w-full mt-48 sm:mt-20 lg:mt-36 xl:mt-48 2xl:mt-72 h-40 bg-footer flex justify-evenly items-center">
<p class="text-light text-lg sm:text-xl lg:text-3xl font-kompost">Подписывайтесь на мои соцсети </p>
<div class="flex gap-4 sm:gap-8">
  <a href="https://t.me/duckcrossing">
    <img src="./../assets/tg.png" alt="Telegram" class="lg:w-16 lg:h-16 w-8 h-8" />
  </a>
  <a href="https://vk.com/duckcrossing">
    <img src="./../assets/vk.png" alt="Vk" class="lg:w-16 lg:h-16 w-8 h-8" />
  </a>
</div>
  </footer>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
const items = ref([{
id: 0,
image: '/assets/events_0.jpg',

},
{
id: 1,
image: '/assets/events_1.jpg',

},
{
id: 2,
image: '/assets/events_2.jpg',

},
{
id: 3,
image: '/assets/events_3.jpg',

},
{
id: 4,
image: '/assets/events_4.jpg',

},
{
id: 5,
image: '/assets/events_5.jpg',

},
{
id: 6,
image: '/assets/events_6.jpg',

},
{
id: 7,
image: '/assets/events_7.jpg',

},
{
id: 8,
image: '/assets/events_8.jpg',

},
{
id: 9,
image: '/assets/events_9.jpg',

},
{
id: 10,
image: '/assets/events_10.jpg',

},
{
id: 11,
image: '/assets/events_11.jpg',

},
{
id: 12,
image: '/assets/events_12.jpg',

},
{
id: 13,
image: '/assets/events_13.jpg',

},
{
id: 14,
image: '/assets/events_14.jpg',

},
{
id: 15,
image: '/assets/events_15.jpg',

},
{
id: 16,
image: '/assets/events_16.jpg',

},
{
id: 17,
image: '/assets/events_17.jpg',

},

]);

const isModalOpen = ref(false);
const selectedImage = ref('');

const openModal = (item) => {
  selectedImage.value = item.image;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};
const currentIndex = ref(0);
const imagesPerSlide = ref(4);

const updateItemsPerSlide = () => {
  const width = window.innerWidth
  if (width < 640) imagesPerSlide.value = 1 
  else if (width < 768) imagesPerSlide.value = 2 
  else if (width < 1024) imagesPerSlide.value = 3 
  else imagesPerSlide.value = 4 
}







const isAtStart = computed(() => currentIndex.value === 0);
const isAtEnd = computed(() => {
  return currentIndex.value >=  items.value.length/2 - imagesPerSlide.value
});

const nextSlide = () => {
if (!isAtEnd.value) {
  currentIndex.value++;
}
};

const prevSlide = () => {
if (!isAtStart.value) {
  currentIndex.value--;
}
};

onMounted(() => {
  updateItemsPerSlide()
  window.addEventListener('resize', updateItemsPerSlide)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateItemsPerSlide)
})
</script>