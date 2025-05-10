<template>
    <Toast :message="toastMessage" :show="showToast" />
<div class="relative  md:max-xl:hidden">
  <img src="./../assets/paper_back.png" class="absolute -mt-16 xl:-mt-32 left-1/2 transform -translate-x-1/2 h-16 xl:h-24 z-20 w-auto inset-x-0 top-0" />
  <h1 class="absolute left-1/2 transform -translate-x-1/2 -mt-12 xl:-mt-24 top-0 text-2xl xl:text-4xl font-kompost text-dark z-20">МАГАЗИН</h1>
</div>

<div class="lg:mt-40 md:mt-32 mt-20 flex xl:px-40 px-20 text-dark">


</div>
<Loader v-if="isLoading" />
<div v-else class="  relative z-20 sm:-mt-2 lg:-mt-8 lg:px-48 px-24" >
    <div class="flex flex-col" ref="sliderWrapper">
      <div class="flex flex-col sm:flex-row justify-center gap-4 items-center my-4">
        <h2 class="text-center text-xl lg:text-2xl font-appleberry text-dark z-20">Выберите категорию</h2>
  <select
    v-model="selectedCategory" 
    class="border border-dark px-4 py-2 rounded  text-dark font-appleberry"
  >
    <option v-for="category in categories" :key="category" :value="category">
      {{ category }}
    </option>
  </select>
</div>
  <div class="overflow-hidden w-full">
    <div
      class="flex transition-transform duration-500 ease-in-out"
      :style="{ transform: `translateX(-${currentIndex * (100 / imagesPerSlide)}%)` }"
    >
      <div
        v-for="item in filteredItems.slice(0, Math.ceil(filteredItems.length/2))"
        :key="item.id"
        class="flex-shrink-0 p-2"
        :style="{ width: `${100 / imagesPerSlide}%` }"
      >
        <div class="relative max-w-80 mx-auto ">
          <img loading="lazy" :src="item.images[0]" @click="openModal(item)" class="w-full h-auto object-cover rounded-xl shadow-custom" />
          <button 
    v-if="cartStore.items.some(i => i.id === item.id)" 
    @click.stop="handleRemoveFromCart(item.id)" 
    class="absolute top-0 right-0 group transform bg-iconSecondaryBg rounded-full p-2 border-2 border-dark hover:bg-iconSecondaryBgHover hover:-translate-y-1 hover:scale-105 hover:shadow-custom hover:shadow-dark transition-all duration-300"
  >
    <img src="./../assets/cross.svg" class="sm:w-8 sm:h-8 w-6 h-6 text-dark" />
  </button>

  <button 
    v-else 
    @click.stop="handleAddToCart(item)" 
    class="absolute top-0 right-0 group transform bg-iconBg rounded-full p-2 border-2 border-dark hover:bg-iconBgHover hover:-translate-y-1 hover:scale-105 hover:shadow-custom hover:shadow-dark transition-all duration-300"
  >
    <img src="./../assets/basket.svg" class="sm:w-8 sm:h-8 w-6 h-6" />
  </button>
          <div class="mt-2 relative">
            <img src="./../assets/paper_item.png" class="w-full h-auto" style="min-height: 50px" />
            <h3 class="absolute inset-0 w-5/6 text-center mx-auto flex items-center justify-center font-appleberry text-dark text-base xl:text-lg">
              <span class="truncate text-center">
    {{ item.name }} - {{ item.price }} ₽
  </span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="overflow-hidden w-full">
    <div v-if="filteredItems.length == 1" class="mt-[580px] sm:mt-96 "></div>
    <div v-else
      class="flex transition-transform duration-500 ease-in-out"
      :style="{ transform: `translateX(-${currentIndex * (100 / imagesPerSlide)}%)` }"
    >
      <div
        v-for="item in filteredItems.slice(Math.ceil(filteredItems.length/2))"
        :key="item.id"
        class=" flex-shrink-0 p-2"
        :style="{ width: `${100 / imagesPerSlide}%` }"
      >
        <div class="relative max-w-80 mx-auto">
            <img  loading="lazy" :src="item.images[0]" @click="openModal(item)" class="w-full h-auto object-cover rounded-xl shadow-custom" />
            <button 
    v-if="cartStore.items.some(i => i.id === item.id)" 
    @click.stop="handleRemoveFromCart(item.id)" 
    class="absolute top-0 right-0 group transform bg-iconSecondaryBg rounded-full p-2 border-2 border-dark hover:bg-iconSecondaryBgHover hover:-translate-y-1 hover:scale-105 hover:shadow-custom hover:shadow-dark transition-all duration-300"
  >
    <img src="./../assets/cross.svg" class="sm:w-8 sm:h-8 w-6 h-6 text-dark" />
  </button>

  <button 
    v-else 
    @click.stop="handleAddToCart(item)" 
    class="absolute top-0 right-0 group transform bg-iconBg rounded-full p-2 border-2 border-dark hover:bg-iconBgHover hover:-translate-y-1 hover:scale-105 hover:shadow-custom hover:shadow-dark transition-all duration-300"
  >
    <img src="./../assets/basket.svg" class="sm:w-8 sm:h-8 w-6 h-6" />
  </button>
         
          <div class="mt-2 relative">
            <img src="./../assets/paper_item.png" class="w-full h-auto" style="min-height: 50px" />
            <h3 class="absolute inset-0 w-5/6 text-center mx-auto flex items-center justify-center font-appleberry text-dark text-base xl:text-lg">
              <span class="truncate text-center">
    {{ item.name }} - {{ item.price }} ₽
  </span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<transition
  name="modal-fade"
  appear
  enter-active-class="transition-opacity duration-300 ease-out"
  leave-active-class="transition-opacity duration-200 ease-in"
  enter-from-class="opacity-0"
  enter-to-class="opacity-100"
  leave-from-class="opacity-100"
  leave-to-class="opacity-0"
>
  <ShopItem
    v-if="isModalOpen"
    :item="selectedItem"
    @close="isModalOpen = false"
  />
</transition>

  
<button @click="prevSlide" class="group absolute left-12 sm:left-8 lg:left-32 top-1/2 transform -translate-y-1/2" :class="{ 'opacity-40': isAtStart, 'cursor-not-allowed': isAtStart }" id="prevButton">
  <img src="./../assets/left.svg" alt="Arrow Left" :class="{ 'filter brightness-0': !isAtStart }"  class="lg:w-12 lg:h-12 w-8 h-8 transition-all duration-200 group-hover:filter group-hover:brightness-0 group-hover:-translate-x-1" />
</button>
<button @click="nextSlide" class="group absolute right-12 sm:right-8 lg:right-32 top-1/2 transform -translate-y-1/2" :class="{ 'opacity-40': isAtEnd, 'cursor-not-allowed': isAtEnd }" id="nextButton">
  <img src="./../assets/right.svg" alt="Arrow Right" :class="{ 'filter brightness-0': !isAtEnd }" class="lg:w-12 lg:h-12 w-8 h-8 transition-all duration-200 group-hover:filter group-hover:brightness-0 group-hover:translate-x-1" />
</button>
</div>

<img
    src="./../assets/paper_1.png"
    alt="Paper"
    class="absolute top-48 sm:max-md:top-96 md:top-72 left-0 md:max-lg:px-8 h-auto object-cover z-0 sm:max-lg:block hidden"
  />
  <img
    src="./../assets/paper_long.png"
    alt="Paper"
    class="absolute top-4 left-0 h-auto object-cover z-10 sm:hidden"
  />

  

  


<div class="sm:mt-12 flex justify-center px-48 z-20">
  <RouterLink 
  v-show="cartStore.items.length > 0"
  to="/checkout" 
  class="relative inline-flex mt-4 lg:mt-8 text-dark text-base md:text-lg lg:text-xl font-appleberry group transition-all duration-300 hover:-translate-y-1 hover:scale-105 "
>
  
  <span class="relative z-10 px-14 py-16 sm:px-14 sm:py-6 lg:px-20 lg:py-6 text-center">
    Перейти в корзину
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


<footer class="w-full mt-8 h-40 bg-footer flex justify-evenly items-center">
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
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
import { cartStore } from '@/store';
import Toast from './Toast.vue';
import ShopItem from './ShopItem.vue';
import Loader from './Loader.vue';
import { supabase } from '@/supabaseClient'

const items = ref([]);
const isLoading = ref(true);

const selectedCategory = ref('Все');
const categories = ref([]);

const fetchData = async () => {
  isLoading.value = true;

  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('status', 'available') 

  if (error) {
    console.error('Ошибка загрузки товаров из Supabase:', error);
    isLoading.value = false;
    return;
  }


  items.value = data;

  
  const allCategories = new Set(data.map(p => p.category).filter(Boolean));
  categories.value = ['Все', ...Array.from(allCategories)];

  isLoading.value = false;
};

const MAX_ITEMS = 8;






const filteredItems = computed(() => {
  if (selectedCategory.value === 'Все') {
    return items.value;
  }
  return items.value.filter(item => item.category === selectedCategory.value);
});

watch(filteredItems, async (newItems) => {
  isLoading.value = true;

 
  const imagesToPreload = newItems.slice(0, MAX_ITEMS).flatMap(item => item.images || []);

  await Promise.all([
    Promise.all(
      imagesToPreload.map(
        src => new Promise(resolve => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = resolve;
        })
      )
    ),
    
    new Promise(resolve => setTimeout(resolve, 1000))
  ]);

  isLoading.value = false;
}, { immediate: true });



onMounted(() => {
  fetchData();
  updateItemsPerSlide();

  window.addEventListener('resize', updateItemsPerSlide)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateItemsPerSlide)
})



const currentIndex = ref(0);
const imagesPerSlide = ref(4);

const updateItemsPerSlide = () => {
  const width = window.innerWidth
  if (width < 640) imagesPerSlide.value = 1 
  else if (width < 768) imagesPerSlide.value = 2 
  else if (width < 1024) imagesPerSlide.value = 3 
  else imagesPerSlide.value = 4 
}

const isModalOpen = ref(false);
const selectedItem = ref(items.value[0]);

const selectedImage = ref(selectedItem.value?.images[0])



const openModal = (item) => {
  selectedItem.value = item;
  selectedImage.value = item.images[0];
  isModalOpen.value = true;

};







const isAtStart = computed(() => currentIndex.value === 0);
const isAtEnd = computed(() => {
  return currentIndex.value >=  filteredItems.value.length/2 - imagesPerSlide.value
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

function handleAddToCart(item) {
    if (!cartStore.items.some(i => i.id === item.id)) {
    cartStore.addToCart(item);
    triggerToast('Товар добавлен в корзину!');
  }
}

function handleRemoveFromCart(id) {
  cartStore.removeFromCart(id);
  triggerToast('Товар удалён из корзины!');
}

watch(selectedCategory, () => {
  currentIndex.value = 0;
}); 

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