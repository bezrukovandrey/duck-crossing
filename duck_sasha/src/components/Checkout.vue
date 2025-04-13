<template>
    <Toast :message="toastMessage" :show="showToast" />
<div class="relative">
  <img src="./../assets/paper_back.png" class="absolute -mt-32 left-1/2 transform -translate-x-1/2 h-24 z-20 w-auto inset-x-0 top-0" />
  <h1 class="absolute left-1/2 transform -translate-x-1/2 -mt-24 top-0 text-4xl font-kompost text-dark z-30">КОРЗИНА</h1>
</div>
<div class="mt-40 flex px-40 text-dark">

<div class="text-4xl font-kompost z-20 mx-auto">
    ДОБАВЛЕННЫЕ ТОВАРЫ
</div>


</div>
<div class="mt-4 relative z-20 px-48 " >
<div class="flex flex-col" ref="sliderWrapper">

<div class="overflow-hidden w-full">
<div
  class="flex transition-transform duration-500 ease-in-out"
  :class="{ 'justify-center': cartStore.items.length < 4 }"
  :style="{ transform: `translateX(-${currentIndex * 25}%)` }"
>
  <div
    v-for="item in cartStore.items"
    :key="item.id"
    class="w-1/4 flex-shrink-0 p-2"
  >
    <div class="relative ">
      <img :src="item.images[0]" @click="openModal(item)" class="w-full h-auto object-cover rounded-xl shadow-custom" />
      <button 
@click.stop="handleRemoveFromCart(item.id)" 
class="absolute top-0 right-0 group transform bg-iconSecondaryBg rounded-full p-2 border-2 border-dark hover:bg-iconSecondaryBgHover hover:-translate-y-1 hover:scale-105 hover:shadow-custom hover:shadow-dark transition-all duration-300"
>
<img src="./../assets/cross.svg" class="w-8 h-8 text-dark" />
</button>

      <div class="mt-2 relative">
        <img src="./../assets/paper_item.png" class="w-full h-auto" style="min-height: 50px" />
        <h1 class="absolute inset-0 w-11/12 text-center mx-auto flex items-center justify-center font-mahone text-dark text-xl">
          {{ item.name }} - {{ item.price }}₽
        </h1>
      </div>
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
<div class="relative w-7/12 mx-auto z-20 " @click.stop>
    <img src="./../assets/paper_2.png" class=" w-full h-auto object-cover" />
    <div class="absolute inset-0 top-12 left-12 flex text-dark items-start flex-row px-16 gap-8">

<!-- Левая часть: картинка + миниатюры -->
<div class="w-1/2 flex flex-col items-start gap-4">

<!-- Большая картинка -->
<img
:src="selectedImage"
class="w-full object-cover rounded-xl shadow-custom"
@click.stop
/>

<!-- Миниатюры -->
<div class="flex gap-4">
<img
  v-for="(img, index) in selectedItem.images"
  :key="index"
  :src="img"
  @click="setImage(img)"
  @click.stop
  class="w-20 h-20 object-cover rounded-md border-2 cursor-pointer transition duration-300 hover:scale-105"
  :class="{
    'border-dark': selectedImage === img,
    'border-light': selectedImage !== img
  }"
/>
</div>
</div>

<!-- Правая часть: текст и кнопка -->
<div class="w-1/2 flex flex-col gap-8">
<div class="text-4xl font-kompost flex justify-center">{{ selectedItem.name }}</div>
<div class="text-xl font-slimamif leading-7">
{{ selectedItem.description }}
</div>
<h1 class="flex items-center justify-center font-mahone text-2xl">
{{ selectedItem.price }}₽
</h1>
<button v-if="cartStore.items.some(i => i.id === selectedItem.id)" 
@click.stop="handleRemoveFromCart(selectedItem.id)" 
class="w-fit self-center bg-buttonSecondary whitespace-nowrap z-30 text-light text-xl font-mahone px-8 py-4 rounded-2xl shadow-custom border-light border-2 hover:bg-buttonSecondaryHover hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:shadow-dark focus:bg-buttonSecondaryFocus focus:ring focus:ring-buttonFocus transition-all duration-300"
>
Убрать из корзины
</button>
<button  v-else @click.stop="handleAddToCart(selectedItem) "
class="w-fit self-center bg-button whitespace-nowrap z-30 text-light text-xl font-mahone px-8 py-4 rounded-2xl shadow-custom border-light border-2 hover:bg-buttonHover hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:shadow-dark focus:bg-buttonFocus focus:ring focus:ring-buttonFocus transition-all duration-300"
>
Добавить в корзину
</button>
</div>
</div>

</div>
</transition>
</div>
</transition>


<button v-show="!isAtStart" @click="prevSlide" class="group absolute left-32 top-1/2 transform -translate-y-1/2" id="prevButton">
  <img src="./../assets/left.svg" alt="Arrow Left" :class="{ 'filter brightness-0': !isAtStart }"  class="w-12 h-12 transition-all duration-200 group-hover:filter group-hover:brightness-0 group-hover:-translate-x-1" />
</button>
<button v-show="!isAtEnd" @click="nextSlide" class="group absolute right-32 top-1/2 transform -translate-y-1/2" id="nextButton">
  <img src="./../assets/right.svg" alt="Arrow Right" :class="{ 'filter brightness-0': !isAtEnd }" class="w-12 h-12 transition-all duration-200 group-hover:filter group-hover:brightness-0 group-hover:translate-x-1" />
</button>
</div>
</template>
<script setup>
import { ref, computed } from 'vue';
import { cartStore } from '@/store';
import Toast from './Toast.vue';

const currentIndex = ref(0);

const isAtStart = computed(() => currentIndex.value === 0);
const isAtEnd = computed(() => currentIndex.value >= cartStore.items.length - 4);


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

function handleRemoveFromCart(id) {
  cartStore.removeFromCart(id);
  triggerToast('Товар удалён из корзины!');
}

function handleClearCart() {
  cartStore.clearCart();
}

const toastMessage = ref('');
const showToast = ref(false);

function triggerToast(msg) {
  toastMessage.value = msg;
  showToast.value = true;
  setTimeout(() => {
    showToast.value = false;
  }, 4000);
}
</script>