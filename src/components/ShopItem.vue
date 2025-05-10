<template>

    
    
      <div
        
        class="fixed inset-0 bg-black/90 flex justify-center items-center z-40 p-4"
        @click="close"
      >
        <transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 scale-90"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="transition-all duration-200 ease-in"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-110"
        >
          <div
            class="w-full relative md:w-[90%] lg:w-[70%] xl:w-7/12 max-h-[90vh] overflow-y-auto rounded-xl z-20 "
            @click.stop
          >
            <img src="./../assets/paper_2.png" class="hidden md:block w-full h-auto object-cover" />
            <img src="./../assets/paper_2_vert.png" class="md:hidden w-full h-auto object-cover" />
  
            <div
              class="absolute inset-0  top-10 min-[400px]:top-12 left-4 right-4 flex text-dark md:items-start md:flex-row flex-col items-center px-4 md:px-16 gap-8 pb-12"
            >
             
              <div class="w-full md:w-1/2 flex flex-row sm:flex-col md:items-start sm:gap-4">
                <img
                  :src="selectedImage"
                  class="md:w-full w-1/2 md:mt-0 mt-4 sm:mt-16 object-cover mx-auto rounded-xl shadow-custom"
                  loading="lazy"
                />
                <div class="flex gap-4 flex-col sm:flex-row justify-center">
                  <img
                    v-for="(img, index) in item.images"
                    :key="index"
                    :src="img"
                    loading="lazy"
                    @click.stop="selectedImage = img"
                    class="xl:w-20 xl:h-20 sm:w-16 sm:h-16 w-12 h-12 object-cover rounded-md border-2 cursor-pointer transition duration-300 hover:scale-105"
                    :class="{
                      'border-dark': selectedImage === img,
                      'border-light': selectedImage !== img
                    }"
                  />
                </div>
              </div>
  
             
              <div class="w-full md:w-1/2 flex flex-col gap-2 sm:gap-6 text-center md:text-left">
                <h1 class="text-2xl md:text-4xl font-kompost">{{ item.name }}</h1>
                <p class="text-base md:text-xl font-slimamif leading-6 md:leading-7 pl-4 md:pl-0">
                  {{ item.description }}
                </p>
                <h2 class="font-appleberry text-xl md:text-2xl">{{ item.price}} ₽</h2>
                
<button
  v-if="cartStore.items.some(i => i.id === item.id)"
  @click.stop="handleRemove"
  class="relative inline-flex items-center justify-center mx-auto mt-2 sm:mt-4 lg:mt-8 text-dark text-base md:text-lg lg:text-xl font-appleberry group transition-all duration-300 hover:-translate-y-1 hover:scale-105 max-w-[90vw] md:max-w-none"
>
  <span class="relative z-10 px-12 py-2 sm:py-4 lg:px-16 lg:py-6 text-center whitespace-nowrap">
    Убрать из корзины
  </span>
  
  <div class="absolute inset-0 z-0 overflow-hidden rounded-lg" 
       :style="{
         left: '-6px',
         right: '-6px',
         top: '-3px',
         bottom: '-3px'
       }">
    <img 
      src="./../assets/button_bg.png" 
      class="w-full h-full object-cover transition-all duration-300 
             filter grayscale-[70%] brightness-80 opacity-90
             group-hover:grayscale-50 group-hover:brightness-90 group-hover:opacity-100
             group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-dark"
      alt="Фон кнопки"
    />
    <div class="absolute inset-0 bg-gray-400/30 group-hover:bg-gray-400/10 transition-all duration-300"></div>
  </div>
</button>


<button v-else
  @click.stop="handleAdd"
  class="relative inline-flex items-center justify-center mx-auto mt-2 sm:mt-4 lg:mt-8 text-dark text-base md:text-lg lg:text-xl font-appleberry group transition-all duration-300 hover:-translate-y-1 hover:scale-105 max-w-[90vw] md:max-w-none"
>
  <span class="relative z-10 px-12 py-2 sm:py-4 lg:px-16 lg:py-6 text-center whitespace-nowrap">
    Добавить в корзину
  </span>
  
  <div class="absolute inset-0 z-0 overflow-hidden rounded-lg" 
       :style="{
         left: '-6px',
         right: '-6px',
         top: '-3px',
         bottom: '-3px'
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
        </transition>
        <Toast :message="toastMessage" :show="showToast" />
      </div>
    
  </template>
  
  <script setup>
  import { ref, watch } from 'vue'
  import { cartStore } from '@/store'
  import Toast from '@/components/Toast.vue'
  
  const props = defineProps({
    isOpen: Boolean,
    item: Object,
  })
  
  const emit = defineEmits(['close'])
  
  const selectedImage = ref(props.item?.images?.[0] || '')
  
  watch(
    () => props.item,
    (newItem) => {
      if (newItem?.images?.length) {
        selectedImage.value = newItem.images[0]
      }
    },
    { immediate: true }
  )
  
  function close() {
    emit('close')
  }
  
  function handleAdd() {
    if (!cartStore.items.some(i => i.id === props.item.id)) {
      cartStore.addToCart(props.item);
        triggerToast('Товар добавлен в корзину!')
    }
  }
  
  function handleRemove() {
    cartStore.removeFromCart(props.item.id)
    triggerToast('Товар убран из корзины!');
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
  