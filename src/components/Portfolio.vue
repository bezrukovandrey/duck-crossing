<template>
  <div class="relative  md:max-xl:hidden">
  <img src="./../assets/paper_back.png" class="absolute -mt-16 xl:-mt-32 left-1/2 transform -translate-x-1/2 h-16 xl:h-24 z-20 w-auto inset-x-0 top-0" />
  <h1 class="absolute left-1/2 transform -translate-x-1/2 -mt-12 xl:-mt-24 top-0 text-2xl xl:text-4xl font-kompost text-dark z-20">ПОРТФОЛИО</h1>
</div>

<div class="mt-20 md:mt-28 lg:mt-40 flex flex-col lg:flex-row px-12 sm:px-28 lg:px-40 text-dark sm:gap-12 gap-2">
  <div class="w-full lg:w-1/2 lg:pr-8 z-20">
    <h2 class="text-xl sm:text-2xl lg:text-4xl font-kompost">С ЧЕМ И КАК Я РАБОТАЮ</h2>
    <p class="text-base md:text-xl md:mt-2 font-slimamif leading-6 sm:leading-7">
      Я работаю с разными материалами и техниками, которые позволяют мне создавать уникальные изделия. 
      Я шью игрушки, делаю украшения, печатаю открытки и принты, а также создаю различные аксессуары. 
      Мой стиль — это сочетание ярких цветов, интересных форм и текстур, которые делают каждое изделие особенным.
    </p>
  </div>

  <div class="w-full lg:w-1/2 lg:pl-8  lg:border-l-2 lg:border-button z-20 lg:pt-0">
    <h2 class="text-xl sm:text-2xl lg:text-4xl font-kompost">ЧТО В МОЕМ ПОРТФОЛИО?</h2>
    <p class="text-base md:text-xl md:mt-2 font-slimamif leading-6 sm:leading-7">
      В моем портфолио представлены изделия, которые я создала за время существования проекта. 
      Я постоянно экспериментирую с новыми идеями и техниками, поэтому в моем портфолио можно найти разнообразные изделия: от мягких игрушек до украшений и открыток. 
      Я надеюсь, что вам понравится то, что вы увидите!
    </p>
  </div>
</div>
<img src="./../assets/paper_1.png" alt="Paper" class="min-[580px]:hidden min-[420px]:-mt-64 -mt-[360px] w-full h-auto object-cover inset-x-0 m-auto z-0" />
<img src="./../assets/paper_1.png" alt="Paper" class="min-[420px]:hidden  -mt-40 w-full h-auto object-cover inset-x-0 m-auto z-0" />
<img src="./../assets/paper_1.png" alt="Paper" class="hidden sm:max-[700px]:block absolute  -mt-80 w-full h-auto object-cover inset-x-0 m-auto z-0" />

<img src="./../assets/paper_9.png" class="sm:max-xl:block hidden absolute -mt-12  w-[150%] object-cover" />
<img src="./../assets/paper_long.png" class="sm:hidden absolute -mt-16  w-[150%] object-cover" />
<div class="mt-12 relative z-20 px-12 sm:px-16 md:px-32 lg:px-40 xl:px-48 mx-auto  py-4">
  <div class="overflow-hidden relative w-full max-w-[calc(100vw-8rem)] mx-auto">
    <div
      class="flex transition-transform duration-500 ease-in-out"
      :style="{ transform: `translateX(-${currentIndex * (100 / itemsPerSlide)}%)` }"
    >
      <div
        v-for="item in items"
        :key="item.id"
        class="flex-shrink-0 p-2 "
        :class="{
          'w-full': itemsPerSlide === 1,
          'w-1/2': itemsPerSlide === 2,
          'w-1/3': itemsPerSlide === 3,
          'w-1/4': itemsPerSlide === 4
        }"
      >
        <div class="relative">
          <img :src="item.image" @click="openModal(item.image)" class="w-full h-auto object-cover rounded-xl shadow-custom" />
          <div class="mt-4 relative">
            <img src="./../assets/paper_item.png" class="w-full h-auto min-h-[50px]" />
            <h2 class="absolute inset-0 flex items-center justify-center font-appleberry text-dark text-base sm:text-lg lg:text-xl">
              {{ item.name }}
            </h2>
          </div>
          
        </div>
        
      </div>
      
    </div>
    
  </div>
  <button @click="prevSlide" class="group absolute left-4 md:left-16 xl:left-32 top-1/2 transform -translate-y-32 z-30"
    :class="{ 'opacity-40 cursor-not-allowed': isAtStart }">
    <img src="./../assets/left.svg" class="w-10 sm:w-12 h-auto group-hover:-translate-x-1 transition-all" />
  </button>

  <button @click="nextSlide" class="group absolute right-4 md:right-16 xl:right-32 top-1/2 transform -translate-y-32 z-30"
    :class="{ 'opacity-40 cursor-not-allowed': isAtEnd }">
    <img src="./../assets/right.svg" class="w-10 sm:w-12 h-auto group-hover:translate-x-1 transition-all" />
  </button>

  
 

 
  <div class="mt-8 flex justify-center">
    <RouterLink
      to="/shop"
      class="relative inline-flex mx-auto  mt-4 lg:mt-8 text-dark text-base md:text-lg lg:text-xl font-appleberry group transition-all duration-300 hover:-translate-y-1 hover:scale-105 "
>
  
  <span class="relative z-10 px-14 py-4 lg:px-20 lg:py-6 text-center">
    Перейти в магазин
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
    </RouterLink>
  </div>
  <transition
  enter-active-class="transition-opacity duration-300 ease-out"
  enter-from-class="opacity-0"
  enter-to-class="opacity-100"
  leave-active-class="transition-opacity duration-200 ease-in"
  leave-from-class="opacity-100"
  leave-to-class="opacity-0"
>
  <div
    v-if="isModalOpen"
    class="fixed inset-0 bg-black/90 flex justify-center items-center z-50 p-4"
    @click="closeModal"
  >
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 scale-90"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-110"
    >
      <img
        :src="categoryImages"
        class="max-w-full max-h-full object-contain"
        @click.stop
      />
    </transition>
  </div>
</transition>
</div>

<img src="./../assets/paper_back.png" class="absolute hidden sm:block -mt-60 w-full h-auto object-cover inset-x-0 m-auto z-0" />
<img src="./../assets/heart.png" :class="{ hidden: isModalOpen1 || isModalOpen }" class="max-lg:hidden absolute mt-24 z-40 w-30 h-auto left-1/2 transform -translate-x-1/2" />

<div class="relative mt-8 sm:mt-12 lg:mt-40 w-full mx-auto px-8 z-20" :class="{ hidden: isModalOpen }">
  <img src="./../assets/paper_2.png" class="w-full h-auto object-cover" />
  
  <div class="absolute  inset-0 mt-2 sm:mt-8 lg:mt-16 flex flex-col items-center text-dark text-center">
    <h1 class="text-2xl sm:text-3xl lg:text-4xl font-kompost mb-2 sm:mb-6">МОЕ ПОРТФОЛИО IN ENGLISH</h1>

    
    <div class="relative w-full mx-auto px-24 min-[450px]:px-28 sm:px-32 lg:px-40 xl:px-48">
      <transition name="combo" mode="out-in">
        <img
          v-if="displayedImages"
          :src="displayedImages"
          :key="currentIndex1"
          @click="openModal1(displayedImages)"
          class="w-full h-auto object-cover rounded-xl shadow-custom cursor-pointer"
        />
      </transition>

      
      <button 
        @click="prevSlide1"
        :class="{ 'opacity-40 cursor-not-allowed': isAtStart1 }"
        class="group absolute left-12 min-[450px]:left-16 xl:left-32 top-1/2 transform -translate-y-1/2 z-30"
      >
        <img 
          src="./../assets/left.svg" 
          alt="Arrow Left" 
          class="w-10 h-10 sm:w-12 sm:h-12 transition-all group-hover:-translate-x-1"
        />
      </button>

      <button 
        @click="nextSlide1"
        :class="{ 'opacity-40 cursor-not-allowed': isAtEnd1 }"
        class="group absolute right-12 min-[450px]:right-16 xl:right-32 top-1/2 transform -translate-y-1/2 z-30"
      >
        <img 
          src="./../assets/right.svg" 
          alt="Arrow Right" 
          class="w-10 h-10 sm:w-12 sm:h-12 transition-all group-hover:translate-x-1"
        />
      </button>
    </div>
    <transition
  enter-active-class="transition-opacity duration-300 ease-out"
  enter-from-class="opacity-0"
  enter-to-class="opacity-100"
  leave-active-class="transition-opacity duration-200 ease-in"
  leave-from-class="opacity-100"
  leave-to-class="opacity-0"
>
  <div
    v-if="isModalOpen1"
    class="fixed inset-0 bg-black/90 flex justify-center items-center z-50 p-4"
    @click="closeModal1"
  >
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
        class="max-w-full max-h-[90vh] object-contain"
        @click.stop
      />
    </transition>
  </div>
</transition>

  </div>
</div>

<footer class="w-full mt-12 h-40 bg-footer flex justify-evenly items-center">
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
image: '/assets/portfolio_0.JPG',
name: 'Мягкие игрушки',
category: 'toys',
},
{
id: 1,
image: '/assets/portfolio_1.jpg',
name: 'Линогравюра',
category: 'linocut',
},
{
id: 2,
image: '/assets/portfolio_2.JPG',
name: 'Брелочки',
category: 'keychains',
},
{
id: 3,
image: '/assets/portfolio_3.jpg',
name: 'Открытки',
category: 'postcards',
},
{
id: 4,
image: '/assets/portfolio_4.jpg',
name: 'Украшения',
category: 'jewelry',
},
{
id: 5,
image: '/assets/portfolio_5.jpg',
name: 'Стикеры',
category: 'stickers',
},
{
id: 6,
image: '/assets/portfolio_6.jpg',
name: 'Фетр',
category: 'felt',
},

]);

const images=ref([
'/assets/desc_1.jpg',
'/assets/desc_2.jpg',
'/assets/desc_0.jpg',
'/assets/desc_3.jpg',
'/assets/desc_4.jpg',
'/assets/desc_5.jpg',
'/assets/desc_6.jpg',
'/assets/desc_7.jpg',
'/assets/desc_8.jpg',
'/assets/desc_9.jpg',
])
const currentIndex = ref(0)
const itemsPerSlide = ref(4)

const updateItemsPerSlide = () => {
  const width = window.innerWidth
  if (width < 640) itemsPerSlide.value = 1
  else if (width < 768) itemsPerSlide.value = 2
  else if (width < 1024) itemsPerSlide.value = 3
  else itemsPerSlide.value = 4
}

onMounted(() => {
  updateItemsPerSlide()
  window.addEventListener('resize', updateItemsPerSlide)
})
onUnmounted(() => {
  window.removeEventListener('resize', updateItemsPerSlide)
})






const isAtStart = computed(() => currentIndex.value === 0);
const isAtEnd = computed(() => currentIndex.value >= items.value.length - itemsPerSlide.value);

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

const currentIndex1 = ref(0);

const displayedImages = computed(() => images.value[currentIndex1.value]);

const isAtStart1 = computed(() => currentIndex1.value === 0);
const isAtEnd1 = computed(() => currentIndex1.value >= images.value.length - 1);

const nextSlide1 = () => {
if (!isAtEnd1.value) {
  currentIndex1.value++;
}
};



const prevSlide1= () => {
if (!isAtStart1.value) {
  currentIndex1.value--;
}
};

const isModalOpen = ref(false);
const categoryImages = ref('');

const openModal = (image) => {
  categoryImages.value = image;
  isModalOpen.value = true;
  
};

const closeModal = () => {
  isModalOpen.value = false;
};

const isModalOpen1 = ref(false);
const selectedImage = ref('');

const openModal1 = (displayedImages) => {
  selectedImage.value = displayedImages;
  isModalOpen1.value = true;
  
};

const closeModal1 = () => {
  isModalOpen1.value = false;
};
</script>
<style scoped>
.combo-enter-active, .combo-leave-active {
  transition: all 0.5s ease;
}
.combo-enter-from, .combo-leave-to {
  opacity: 0;
  transform: translateX(20px) scale(0.95);
}

.modal-parent {
  isolation: isolate;
  position: relative;
  z-index: 0;
}

</style>