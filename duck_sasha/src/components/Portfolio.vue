<template>
  <div class="relative">
  <img src="./../assets/paper_back.png" class="absolute -mt-32 left-1/2 transform -translate-x-1/2 h-24 z-20 w-auto inset-x-0 top-0" />
  <h1 class="absolute left-1/2 transform -translate-x-1/2 -mt-24 top-0 text-4xl font-kompost text-dark z-20">ПОРТФОЛИО</h1>
</div>

  <div class="mt-40 flex px-40 text-dark" >
<div class="w-1/2 pr-8 z-20">
    <div class="text-4xl font-kompost">С ЧЕМ И КАК Я РАБОТАЮ</div>
    <div class="text-xl mt-2 font-slimamif leading-7">
      Duck crossing — это один из моих творческих проектов, на который есть большие планы: ставлю цель создать из него собственный бренд. 
      Проект существует около двух лет, но, создавая его, я не знала, в каком направлении он будет развиваться. Пока что веду его одна.
    </div>
    </div>
  <div class="w-1/2 pl-8 border-l-2 border-l-button z-20">
    <div class="text-4xl font-kompost">ЧТО В МОЕМ ПОРТФОЛИО?</div>
    <div class="text-xl mt-2 font-slimamif leading-7">
      Если вы из Санкт-Петербурга, то все товары можно забрать самовывозом по договоренности. 
      В другие города доставка почтой России или другими сервисами по договоренности.
    </div>
  </div>
</div>
<div class="mt-12 relative z-20 px-48 " >
  <div class="overflow-hidden w-full">
    <div
      class="flex transition-transform duration-500 ease-in-out"
      :style="{ transform: `translateX(-${currentIndex * 25}%)` }"
    >
      <div
        v-for="item in items"
        :key="item.id"
        class="w-1/4 flex-shrink-0 p-2"
      >
        <div class="relative">
          <img :src="item.image" @click="openModal(item.image)" class="w-full h-auto object-cover rounded-xl shadow-custom" />
          <div class="mt-4 relative">
            <img src="./../assets/paper_item.png" class="w-full h-auto" style="min-height: 50px" />
            <h1 class="absolute inset-0 flex items-center justify-center font-mahone text-dark text-xl">
              {{ item.name }}
            </h1>
          </div>
        </div>
      </div>
      
      
    </div>
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
    class="fixed inset-0 bg-black/90 flex justify-center items-center z-50"
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

  
<button @click="prevSlide" class="group absolute left-32 top-1/2 transform -translate-y-1/2" :class="{ 'opacity-40': isAtStart, 'cursor-not-allowed': isAtStart }" id="prevButton">
  <img src="./../assets/left.svg" alt="Arrow Left" :class="{ 'filter brightness-0': !isAtStart }"  class="w-12 h-12 transition-all duration-200 group-hover:filter group-hover:brightness-0 group-hover:-translate-x-1" />
</button>
<button @click="nextSlide" class="group absolute right-32 top-1/2 transform -translate-y-1/2" :class="{ 'opacity-40': isAtEnd, 'cursor-not-allowed': isAtEnd }" id="nextButton">
  <img src="./../assets/right.svg" alt="Arrow Right" :class="{ 'filter brightness-0': !isAtEnd }" class="w-12 h-12 transition-all duration-200 group-hover:filter group-hover:brightness-0 group-hover:translate-x-1" />
</button>
<div class="mt-8 flex justify-center px-48 z-20"> <!-- Добавлен отступ сверху и такой же padding по бокам -->
  <RouterLink 
    to="/shop" 
    class="bg-button z-30 text-light text-xl font-mahone px-8 py-4 rounded-2xl shadow-custom border-light border-2 hover:bg-buttonHover hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:shadow-dark focus:bg-buttonFocus focus:ring focus:ring-buttonFocus transition-all duration-300"
  >
    Перейти в магазин
  </RouterLink>
</div>
</div>
<img src="./../assets/paper_back.png" class="absolute -mt-60 w-[calc(100vw-4rem)] h-auto object-cover inset-x-0 m-auto z-0" />
<img src="./../assets/heart.png" :class="{ hidden: isModalOpen1 || isModalOpen }" class="absolute mt-24 z-40 w-30 h-auto left-1/2 transform -translate-x-1/2" />

<div class="relative mt-40 w-[calc(100vw-16rem)] mx-auto z-20" :class="{ hidden: isModalOpen }">
  
  <img src="./../assets/paper_2.png" class="w-full h-auto object-cover" />
  
  <div class="absolute inset-0 mt-16 flex justify-start text-dark items-start flex-col">
   
      <div class="text-4xl font-kompost mx-auto">МОЕ ПОРТФОЛИО IN ENGLISH</div>
      <div class="mt-12 relative w-full overflow-hidden z-20 px-48">
  <div class="relative w-full h-auto">
    <transition name="combo" mode="out-in">
      <img 
        v-if="displayedImages" 
        :src="displayedImages" 
        :key="currentIndex1"
        @click="openModal1(displayedImages)"
        class="w-full h-auto object-cover rounded-xl shadow-custom"
      />
    </transition>
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
    class="fixed inset-0 bg-black/90 flex justify-center items-center z-50"
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
        class="max-w-full max-h-full object-contain"
        @click.stop
      />
    </transition>
  </div>
</transition>

  <!-- Кнопки -->
  <button 
    @click="prevSlide1" 
    :class="{ 'opacity-40 cursor-not-allowed': isAtStart1 }"
    class="group absolute left-32 top-1/2 transform -translate-y-1/2"
  >
    <img 
      src="./../assets/left.svg" 
      :class="{ 'filter brightness-0': !isAtStart1 }" 
      alt="Arrow Left" 
      class="w-12 h-12 transition-all duration-200 group-hover:filter group-hover:brightness-0 group-hover:-translate-x-1" 
    />
  </button>

  <button 
    @click="nextSlide1" 
    :class="{ 'opacity-40 cursor-not-allowed': isAtEnd1 }"
    class="group absolute right-32 top-1/2 transform -translate-y-1/2"
  >
    <img 
      src="./../assets/right.svg" 
      :class="{ 'filter brightness-0': !isAtEnd1 }" 
      alt="Arrow Right" 
      class="w-12 h-12 transition-all duration-200 group-hover:filter group-hover:brightness-0 group-hover:translate-x-1" 
    />
  </button>
</div>
</div>
</div>
<footer class="w-full mt-8 h-40 bg-footer flex justify-evenly items-center">
<p class="text-light text-3xl font-kompost">Подписывайтесь на мои соцсети </p>
<div class="flex gap-8">
  <a href="https://t.me/duckcrossing">
    <img src="./../assets/tg.png" alt="Telegram" class="w-16 h-16" />
  </a>
  <a href="https://vk.com/duckcrossing">
    <img src="./../assets/vk.png" alt="Vk" class="w-16 h-16" />
  </a>
</div>
  </footer>
</template>
<script setup>
import { ref, computed } from 'vue';

const items = ref([{
id: 0,
image: './../src/assets/portfolio/0.jpg',
name: 'Мягкие игрушки',
category: 'toys',
},
{
id: 1,
image: './../src/assets/portfolio/1.jpg',
name: 'Линогравюра',
category: 'linocut',
},
{
id: 2,
image: './../src/assets/portfolio/2.jpg',
name: 'Брелочки',
category: 'keychains',
},
{
id: 3,
image: './../src/assets/portfolio/3.jpg',
name: 'Открытки',
category: 'postcards',
},
{
id: 4,
image: './../src/assets/portfolio/4.jpg',
name: 'Украшения',
category: 'jewelry',
},
{
id: 5,
image: './../src/assets/portfolio/5.jpg',
name: 'Стикеры',
category: 'stickers',
},
{
id: 6,
image: './../src/assets/portfolio/6.jpg',
name: 'Фетр',
category: 'felt',
},

]);

const images=ref([
'./../src/assets/portfolio_en/1.jpg',
'./../src/assets/portfolio_en/2.jpg',
'./../src/assets/portfolio_en/0.jpg',
'./../src/assets/portfolio_en/3.jpg',
'./../src/assets/portfolio_en/4.jpg',
'./../src/assets/portfolio_en/5.jpg',
'./../src/assets/portfolio_en/6.jpg',
'./../src/assets/portfolio_en/7.jpg',
'./../src/assets/portfolio_en/8.jpg',
'./../src/assets/portfolio_en/9.jpg',
])
const currentIndex = ref(0);
const imagesPerSlide = 4;







const isAtStart = computed(() => currentIndex.value === 0);
const isAtEnd = computed(() => currentIndex.value >= items.value.length - imagesPerSlide);

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