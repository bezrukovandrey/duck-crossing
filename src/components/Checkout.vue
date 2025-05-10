<template>
  <Loader v-if="isLoading" />
  <div v-else>
    <Toast :message="toastMessage" :show="showToast" />
    
    <div v-if="cartStore.items.length > 0" class="relative  md:max-xl:hidden">
  <img src="./../assets/paper_back.png" class="absolute -mt-16 xl:-mt-32 left-1/2 transform -translate-x-1/2 h-16 xl:h-24 z-20 w-auto inset-x-0 top-0" />
  <h1 class="absolute left-1/2 transform -translate-x-1/2 -mt-12 xl:-mt-24 top-0 text-2xl xl:text-4xl font-kompost text-dark z-20">КОРЗИНА</h1>
</div>


<div  v-if="cartStore.items.length > 0">
  
  <div class="xl:mt-40 lg:mt-36 md:mt-32 mt-20 relative z-20 px-12 sm:px-16 md:px-32 lg:px-40 xl:px-48">
    <div class="flex flex-col" ref="sliderWrapper">
      <div class="overflow-hidden w-full">
        <div
          class="flex transition-transform duration-500 ease-in-out"
          :class="{ 'justify-center': cartStore.items.length < imagesPerSlide }"
          :style="{ transform: `translateX(-${currentIndex * (100 / imagesPerSlide)}%)` }"
        >
          <div
            v-for="item in cartStore.items"
            :key="item.id"
            class="w-1/2 sm:w-1/3 lg:w-1/4 flex-shrink-0 p-2"
          >
            <div class="relative">
              <img loading="lazy" :src="item.images[0]" @click="openModal(item)" class="w-full h-auto object-cover rounded-xl shadow-custom" />
              <button 
                @click.stop="handleRemoveFromCart(item.id)" 
                class="absolute top-0 right-0 group transform bg-iconSecondaryBg rounded-full p-2 border-2 border-dark hover:bg-iconSecondaryBgHover hover:-translate-y-1 hover:scale-105 hover:shadow-custom hover:shadow-dark transition-all duration-300"
              >
                <img src="./../assets/cross.svg" class="sm:w-8 sm:h-8 w-6 h-6 text-dark" />
              </button>
              <div class="mt-2 relative">
                <img src="./../assets/paper_item.png" class="w-full h-auto" style="min-height: 50px" />
                <h3 class="absolute inset-0 w-5/6 mx-auto flex items-center justify-center font-appleberry text-dark text-sm md:text-lg overflow-hidden">
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

    <button v-show="!isAtStart" @click="prevSlide" class="group absolute left-2 sm:left-4 lg:left-28 xl:left-32 top-1/2 transform  -translate-y-1/2">
      <img src="./../assets/left.svg" alt="Arrow Left" class="w-10 h-10 sm:w-12 sm:h-12 transition-all duration-200 group-hover:brightness-0 group-hover:-translate-x-1" />
    </button>
    <button v-show="!isAtEnd" @click="nextSlide" class="group absolute right-2 sm:right-4 lg:right-28 xl:right-32 top-1/2 transform -translate-y-1/2">
      <img src="./../assets/right.svg" alt="Arrow Right" class="w-10 h-10 sm:w-12 sm:h-12 transition-all  duration-200 group-hover:brightness-0 group-hover:translate-x-1" />
    </button>
  </div>

  <div class="mt-8 flex flex-col lg:flex-row px-12 sm:px-12 md:px-32 2xl:px-40 text-dark gap-8">
    <div class="w-full lg:w-1/2 z-10 gap-8 flex flex-col">
      <div class="flex flex-wrap gap-4 justify-between items-baseline">
  <h1 class="text-xl sm:text-2xl font-kompost">СПОСОБ ДОСТАВКИ</h1>
  <div class="relative text-lg flex flex-row gap-4 sm:gap-8 font-slimamif leading-7">
    <div
      v-if="snowflakePosition"
      class="absolute transition-all duration-500 ease-in-out pointer-events-none z-0 will-change-transform"
      :style="{
        left: `${snowflakePosition.left}px`,
        top: `${snowflakePosition.top}px`,
        transform: 'translate(-50%, -50%)'
      }"
    >
      <img 
        src="./../assets/snowflake.png" 
        class="w-16 h-16 min-w-16 min-h-16 opacity-60 transform-none" 
      />
    </div>

    <div
      v-for="(option, index) in deliveryOptions"
      :key="index"
      :ref="el => optionRefs[index] = el"
      @click="selectOption(index)"
      class="relative cursor-pointer z-10 px-2"
    >
      <h2 :class="{
        'text-dark font-bold text-base': selectedIndex === index, 
        'text-base': selectedIndex !== index 
      }">
        {{ option }}
      </h2>
    </div>
  </div>
</div>

      <div class="flex flex-col gap-1">
        <h1 class="text-xl sm:text-2xl font-kompost">ВАШИ КОНТАКТЫ</h1>
        <input v-model="contacts" type="text" placeholder="Имя и способ связи" class="w-full h-12 bg-light text-dark font-slimamif rounded-xl p-4 border-2 border-dark focus:outline-none focus:ring focus:ring-buttonFocus transition-all duration-300" />
        <h1 class="text-xl sm:text-2xl font-kompost mt-2">КОММЕНТАРИЙ К ЗАКАЗУ</h1>
        <textarea v-model="comment" class="w-full min-h-32 max-h-32 lg:max-h-36 h-32 bg-light text-dark font-slimamif rounded-xl p-4 border-2 border-dark focus:outline-none focus:ring focus:ring-buttonFocus transition-all duration-300"></textarea>
      </div>
    </div>

    <div class="w-full lg:w-1/2 border-t-2 lg:border-t-0 lg:border-l-2 border-button pt-4 lg:pt-0 lg:pl-8 z-10 flex flex-col">
      <div class="flex flex-row justify-between items-baseline">
        <h1 class="text-xl sm:text-2xl font-kompost">ИТОГО К ОПЛАТЕ</h1>
        <h2 class="text-4xl sm:text-5xl mt-2 font-slimamif leading-7">{{ cartSum() }} ₽</h2>
      </div>

      <div class="mt-8 flex flex-wrap gap-4 mx-auto justify-center">
        <button
          @click.stop="handleClearCart()"
          class="relative inline-flex mt-4 lg:mt-8 text-dark text-base md:text-lg lg:text-xl font-appleberry group transition-all duration-300 hover:-translate-y-1 hover:scale-105 "
>
  
  <span class="relative z-10 px-14 py-4 lg:px-20 lg:py-6 text-center">
    Очистить корзину
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
              filter grayscale-[70%] brightness-80 opacity-90
             group-hover:grayscale-50 group-hover:brightness-90 group-hover:opacity-100
             group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-dark"
      alt="Фон кнопки"
    />
  </div>
        </button>
        <button
          @click.stop="handleOrder()"
        class="relative inline-flex mt-4 lg:mt-8 text-dark text-base md:text-lg lg:text-xl font-appleberry group transition-all duration-300 hover:-translate-y-1 hover:scale-105 "
>
  
  <span class="relative z-10 px-14 py-4 lg:px-20 lg:py-6 text-center">
    Сделать заказ
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
  <img src="./../assets/paper_1.png" alt="Paper" class="hidden sm:max-lg:block absolute -mt-[480px]  md:w-[calc(100vw-4rem)] w-full h-auto object-cover inset-x-0 m-auto z-0" />
  <img src="./../assets/paper_long.png" class=" sm:hidden  -mt-[720px]  w-[150%] object-cover" />
  <img src="./../assets/paper_3.png" class="hidden lg:max-[1330px]:block lg:w-full lg:h-auto -mt-40 object-cover" />
</div>



<div v-else class="mt-20 md:mt-40 relative z-20 px-4 sm:px-8 md:px-16"> 
  <div v-if="madeOrder">
  <h1 class="text-2xl sm:text-3xl lg:text-4xl font-kompost flex justify-center">Спасибо за покупку!</h1>
  <p class="text-base sm:text-lg md:text-xl mt-2 font-slimamif leading-7 flex justify-center">
    Ваш заказ успешно оформлен. Мы свяжемся с вами в ближайшее время для подтверждения заказа и уточнения деталей доставки.
  </p>
</div>
<div v-else>
  <h1 class="text-2xl sm:text-3xl lg:text-4xl font-kompost flex justify-center">Ваша корзина пуста</h1>
  <p class="text-base sm:text-lg md:text-xl mt-2 font-slimamif leading-7 flex justify-center">
    Добавьте товары в корзину, чтобы продолжить
  </p>
</div>
  <div class="flex justify-center sm:mt-8">
    <RouterLink 
  to="/shop" 
  class="relative inline-flex mt-4 lg:mt-8 text-dark text-base md:text-lg lg:text-xl font-appleberry group transition-all duration-300 hover:-translate-y-1 hover:scale-105 "
>
  
  <span class="relative z-10 px-14 py-4 lg:px-20 lg:py-6 text-center md:max-[850px]:py-12">
    Перейти в магазин
  </span>
  
 
  <div class="absolute inset-0 z-0 overflow-hidden rounded-lg  " 
       :style="{
         left: '-8px',
         right: '-8px',
         top: '-4px',
         bottom: '-4px'
       }">
    
    <img 
      src="./../assets/button_bg.png" 
      class="w-full h-full  object-cover transition-all duration-300 
             group-hover:brightness-90 group-hover:scale-105 
             group-hover:shadow-xl group-hover:shadow-dark"
      alt="Фон кнопки"
    />
  </div>
</RouterLink>
  </div>
  <img src="./../assets/duck_back_2.png" class="mt-2  sm:mt-8 w-1/4 sm:w-3/4 lg:w-5/6 xl:w-11/12 h-auto mx-auto z-10" />
  <img src="./../assets/duck.png" alt="Paper" class="md:hidden mt-16 w-full h-auto object-cover z-10" />
</div>
<footer class="w-full mt-56 2xl:mt-72 h-40 bg-footer flex justify-evenly items-center">
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
</div>
</template>
<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue';
import { cartStore } from '@/store';
import Toast from './Toast.vue';
import ShopItem from './ShopItem.vue';
import Loader from './Loader.vue';
import { supabase } from '@/supabaseClient';

const isLoading = ref(true);

const currentIndex = ref(0);
const imagesPerSlide = ref(4);


const updateItemsPerSlide = () => {
  const width = window.innerWidth
  if (width < 640) imagesPerSlide.value = 2 
  else if (width < 1024) imagesPerSlide.value = 3 
  else imagesPerSlide.value = 4 
}

const isAtStart = computed(() => currentIndex.value === 0);
const isAtEnd = computed(() => currentIndex.value >=  cartStore.items.length - imagesPerSlide.value);



const isModalOpen = ref(false);
const selectedItem = ref(cartStore.items[0]);

const selectedImage = ref(selectedItem.value?.images[0])


const openModal = (item) => {
  selectedItem.value = item;
  selectedImage.value = item.images[0];
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

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
  triggerToast('Корзина очищена!');
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

function cartSum() {
  return cartStore.items.reduce((acc, item) => acc + parseInt(item.price), 0);
}

const deliveryOptions = ['Самовывоз', 'Почта РФ']
const selectedIndex = ref(0)
const optionRefs = ref([])
const snowflakePosition = ref(null)

const updateSnowflakePosition = () => {
  const el = optionRefs.value[selectedIndex.value]
  if (el) {
    const container = el.offsetParent
    
    snowflakePosition.value = {
      left: el.offsetLeft + el.offsetWidth / 2,
      top: el.offsetTop + el.offsetHeight / 2
    }
  }
}

const selectOption = async (index) => {
  selectedIndex.value = index
  await nextTick()
  updateSnowflakePosition()
}

let comment = ref('')
let contacts = ref('')

async function sendOrderToTelegram() {
  const cartItems = cartStore.items;
  const cartSumValue = cartSum();
  const deliveryOption = deliveryOptions[selectedIndex.value];

  await fetch('/api/sendOrder', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      cartItems,
      cartSum: cartSumValue,
      deliveryOption,
      contacts: contacts.value,
      comment: comment.value,
    }),
  });
}


const madeOrder = ref(false);

async function handleOrder() {
  try {
    await sendOrderToTelegram();

    
    const idsToUpdate = cartStore.items.map(item => item.id);

    const { error } = await supabase
      .from('products')
      .update({ status: 'sold' })
      .in('id', idsToUpdate);

    if (error) {
      console.error('Ошибка при обновлении статусов в Supabase:', error);
      triggerToast('Ошибка при обновлении статусов.');
      return;
    }

    cartStore.clearCart();
    madeOrder.value = true;
    triggerToast('Заказ успешно оформлен!');

  } catch (error) {
    console.error('Ошибка отправки заказа:', error);
    triggerToast('Ошибка отправки заказа. Попробуйте позже.');
  }
}

const MAX_IMAGES = 4;

const waitForCartImages = async () => {
  await nextTick(); 
  setTimeout(() => {
    isLoading.value = false;
  }, 500);
};

onMounted(() => {
  updateSnowflakePosition()
  updateItemsPerSlide()
  window.addEventListener('resize', updateItemsPerSlide)
  waitForCartImages()
})

onUnmounted(() => {
  window.removeEventListener('resize', updateItemsPerSlide)
})
</script>