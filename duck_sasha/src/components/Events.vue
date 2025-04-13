<template>
    <div class="relative">
  <img src="./../assets/paper_back.png" class="absolute -mt-32 left-1/2 transform -translate-x-1/2 h-24 z-20 w-auto inset-x-0 top-0" />
  <h1 class="absolute left-1/2 transform -translate-x-1/2 -mt-24 top-0 text-4xl font-kompost text-dark z-30">СОБЫТИЯ</h1>
</div>
 <div class="mt-40 flex px-40 text-dark">
<div class="w-1/2 pr-8 z-20">
    <div class="text-4xl font-kompost">ПОЧЕМУ АРТ-МАРКЕТЫ?</div>
    <div class="text-xl mt-2 font-slimamif leading-7">
        Duck crossing — это один из моих творческих проектов, на который есть большие планы: ставлю цель создать из него собственный бренд. Проект существует около двух лет, но, создавая его, я не знала, в каком направлении он будет развиваться. Пока что веду его одна.
    </div>
    </div>
  <div class="w-1/2 pl-8 border-l-2 border-l-button z-20 flex flex-col">
    <div class="text-4xl font-kompost">БЛИЖАЙШЕЕ СОБЫТИЕ?</div>
    <div class="text-xl mt-2 font-slimamif leading-7">
        Москва, РФ, планета Земля 22.04.25 Арт-Маркет “Таня”
    </div>
    <div class="mt-8 flex justify-center px-48">
    <button 
    class="bg-button whitespace-nowrap z-30 text-light text-xl font-mahone px-8 py-4 rounded-2xl shadow-custom border-light border-2 hover:bg-buttonHover hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:shadow-dark focus:bg-buttonFocus focus:ring focus:ring-buttonFocus transition-all duration-300"
  >
    Подробнее о событии
</button>
</div>
  </div>
  
</div>
<div class="mt-12 relative z-30 px-48">
    <div class="text-4xl font-kompost mx-auto flex justify-center">ГАЛЕРЕЯ</div>
  <div class=" mt-4 overflow-hidden w-full">
    <div
      class="flex transition-transform duration-500 ease-in-out"
      :style="{ transform: `translateX(-${currentIndex * 25}%)` }"
    >
      <div
        v-for="item in items.slice(0, items.length/2)"
        :key="item.id"
        class="w-1/4 flex-shrink-0 p-2"
      >
        <div class="relative gap-2 flex flex-col h-52">
          <img :src="item.image" class="w-full h-full object-cover rounded-xl shadow-custom" @click="openModal(item)"/>
        </div>
      </div>
    </div>
  </div>
  <div class=" mt-2 overflow-hidden w-full">
    <div
      class="flex transition-transform duration-500 ease-in-out"
      :style="{ transform: `translateX(-${currentIndex * 25}%)` }"
    >
      <div
        v-for="item in items.slice(items.length/2)"
        :key="item.id"
        class="w-1/4 flex-shrink-0 p-2"
      >
        <div class="relative gap-2 flex flex-col h-52">
          <img :src="item.image" class="w-full h-full object-cover rounded-xl shadow-custom" @click="openModal(item)"/>
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
        :src="selectedImage"
        class="max-w-full max-h-full object-contain"
        @click.stop
      />
    </transition>
  </div>
</transition>
  
<button @click="prevSlide" class="group absolute left-32 top-1/2 transform " :class="{ 'opacity-40': isAtStart, 'cursor-not-allowed': isAtStart }" id="prevButton">
  <img src="./../assets/left.svg" alt="Arrow Left" :class="{ 'filter brightness-0': !isAtStart }"  class="w-12 h-12 transition-all duration-200 group-hover:filter group-hover:brightness-0 group-hover:-translate-x-1" />
</button>
<button @click="nextSlide" class="group absolute right-32 top-1/2 transform" :class="{ 'opacity-40': isAtEnd, 'cursor-not-allowed': isAtEnd }" id="nextButton">
  <img src="./../assets/right.svg" alt="Arrow Right" :class="{ 'filter brightness-0': !isAtEnd }" class="w-12 h-12 transition-all duration-200 group-hover:filter group-hover:brightness-0 group-hover:translate-x-1" />
</button>

</div>

<footer class="w-full mt-32 h-40 bg-footer flex justify-evenly items-center">
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
image: './../src/assets/events/0.jpg',

},
{
id: 1,
image: './../src/assets/events/1.jpg',

},
{
id: 2,
image: './../src/assets/events/2.jpg',

},
{
id: 3,
image: './../src/assets/events/3.jpg',

},
{
id: 4,
image: './../src/assets/events/4.jpg',

},
{
id: 5,
image: './../src/assets/events/5.jpg',

},
{
id: 6,
image: './../src/assets/events/6.jpg',

},
{
id: 7,
image: './../src/assets/events/7.jpg',

},
{
id: 8,
image: './../src/assets/events/8.jpg',

},
{
id: 9,
image: './../src/assets/events/9.jpg',

},
{
id: 10,
image: './../src/assets/events/10.jpg',

},
{
id: 11,
image: './../src/assets/events/11.jpg',

},
{
id: 12,
image: './../src/assets/events/12.jpg',

},
{
id: 13,
image: './../src/assets/events/13.jpg',

},
{
id: 14,
image: './../src/assets/events/14.jpg',

},
{
id: 15,
image: './../src/assets/events/15.jpg',

},
{
id: 16,
image: './../src/assets/events/16.jpg',

},
{
id: 17,
image: './../src/assets/events/17.jpg',

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
const imagesPerSlide = 4;







const isAtStart = computed(() => currentIndex.value === 0);
const isAtEnd = computed(() => currentIndex.value >= (items.value.length - imagesPerSlide)/2 -2);

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
</script>