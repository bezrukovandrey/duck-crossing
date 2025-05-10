<template>

<div class="mt-20 md:mt-32 lg:mt-40 px-12 sm:px-20 md:px-32 lg:px-40 font-slimamif text-dark xl:text-2xl lg:text-xl md:text-lg text-base flex md:flex-row flex-col">
<div class="md:w-1/2 flex flex-col mx-auto items-center z-20">
    <p>Всем привет! Меня зовут Саша/Сашенька :* <br>
Я художник и иллюстратор! <br>
Живу в городе Санкт-Петербург. <br> На этом сайте вы сможете найти примеры моих работ и заказать понравившиеся с доставкой!
    </p><div class="flex flex-col max-lg:gap-4 justify-center items-center md:max-[850px]:flex-row md:max-[850px]:gap-0 ">
    <RouterLink 
  to="/portfolio" 
  class="relative inline-flex mt-4 lg:mt-8 text-dark text-base md:text-lg lg:text-xl font-appleberry group transition-all duration-300 hover:-translate-y-1 hover:scale-105 "
>
  
  <span class="relative z-10 px-14 py-4 lg:px-20 lg:py-6 text-center">
    Посмотреть мои работы
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

</div>
<img src="./../assets/avatar.png" alt="Avatar" class="sm:max-md:mb-4 md:max-[850px]:mb-16 max-md:mx-12 max-md:mt-4 md:w-1/2 mb-4 sm:w-2/3 w-full flex self-center md:h-1/3 z-20" />
</div>
<img src="./../assets/duck.png" class="xl:block hidden absolute z-20 w-64 h-auto right-32  bouncing" />
<img src="./../assets/bunny.png" class="xl:block hidden absolute z-20 w-64 h-auto left-32 top-[700px] bouncing" />
<img src="./../assets/paper_back.png" class="absolute -mt-72 md:-mt-24 w-full h-auto object-cover inset-x-0 m-auto z-0" />
<img src="./../assets/heart.png" class="hidden lg:block absolute -mt-16 md:mt-48 xl:mt-80 z-20 w-32 h-auto left-1/2 transform -translate-x-6 2xl:-translate-x-1/2" />
<div class="relative mt-0 md:mt-64 xl:mt-96 xl:w-[calc(100vw-16rem)] lg:w-[calc(100vw-4rem)] w-full lg:mx-auto z-10 px-8 lg:px-0">
    
  <img src="./../assets/paper_2.png" class="hidden lg:block lg:w-full lg:h-auto object-cover" />
  <img src="./../assets/paper_long.png" class="absolute sm:hidden -top-80 w-5/6 object-cover" />
  <img src="./../assets/paper_2_vert.png" class="hidden md:max-lg:block  w-[150%] object-cover" />
  
  <img src="./../assets/paper_long.png" class="hidden sm:max-md:block -mt-24  w-[150%] object-cover" />
  
  <img src="./../assets/paper_xlong.png" class="sm:hidden -mt-24 w-[150%] object-cover" />
  <img src="./../assets/paper_long.png" class="min-[413px]:hidden -mt-24  w-[150%] object-cover" />
  <img src="./../assets/paper_long.png" class="min-[367px]:hidden -mt-24  w-[150%] object-cover" />
  
  
  
  <img
      v-if="showDuck2"
      src="./../assets/duck_2.png"
      class="absolute xl:block hidden w-64 h-auto left-0 top-0 transform -translate-x-1/4 translate-y-1/2 -mt-32 z-20"
    />
    <img
      v-else
      src="./../assets/duck_3.png"
      class="absolute xl:block hidden w-64 h-auto left-0 top-0 transform -translate-x-1/4 translate-y-1/2 -mt-32 z-20"
    />
    
    <img
      v-if="!showDuck2"
      src="./../assets/duck_2.png"
      class="absolute xl:block hidden w-64 h-auto right-0 top-0 transform translate-x-1/4 translate-y-1/2 -mt-32 z-20"
    />
    <img
      v-else
      src="./../assets/duck_3.png"
      class="absolute xl:block hidden w-64 h-auto right-0 top-0 transform translate-x-1/4 translate-y-1/2 -mt-32 z-20"
    />
  
  <div class="absolute inset-0 mt-20 md:mt-32 lg:mt-12 xl:mt-16 flex flex-col md:flex-row md:justify-between px-20 sm:pl-32 max-[450px]:pr-16 lg:pr-12 2xl:px-36 items-start text-dark">
   
    <div class="w-full md:w-1/2 2xl:pr-8 pr-4 max-[500px]:pr-0">
      <h2 class="2xl:text-4xl xl:text-2xl lg:text-xl text-lg font-kompost">О ПРОЕКТЕ</h2>
      <p class="2xl:text-xl xl:text-lg text-base  font-slimamif leading-7">
        Duck crossing — это один из моих творческих проектов, на который есть большие планы: ставлю цель создать из него собственный бренд. 
        Проект существует около двух лет, но, создавая его, я не знала, в каком направлении он будет развиваться. Пока что веду его одна.
      </p>
      <h2 class="2xl:text-4xl xl:text-2xl lg:text-xl text-lg font-kompost mt-4">ЧТО Я ДЕЛАЮ?</h2>
      <div class="2xl:text-xl text-base xl:text-lg  font-slimamif leading-7">
        Я творю разные штучки своими руками:
        <ul class="list-disc pl-5">
<li>шью игрушки по собственным выкройкам </li>
<li>вырезаю штампы и ими вручную печатаю открытки и принты</li>
<li>рисую милые иллюстрации для своего мерча </li>
<li>делаю украшения из стекла и натуральных камней </li>
</ul>
Ещё иногда устраиваю тематические фотосеты и творческие встречи! 
</div>
      <h2 class="2xl:text-4xl xl:text-2xl lg:text-xl text-lg font-kompost mt-4">КАК ЗАКАЗАТЬ?</h2>
      <p class="2xl:text-xl text-base xl:text-lg font-slimamif leading-7">
        Заказы формируются через личные сообщения в телеграмме или в сообщениях сообщества в вк
Многие изделия выполняются только под заказ, наличие товаров можно уточнять в сообщениях.
      </p></div>

   
    <div class="w-full md:w-1/2 2xl:pl-8 md:pl-4 md:pr-6 lg:pr-0 md:border-l-2 mt-4 md:mt-0 md:border-l-button">
      <h2 class="2xl:text-4xl xl:text-2xl lg:text-xl text-lg font-kompost">КУДА МОЖНО ДОСТАВИТЬ?</h2>
      <p class="2xl:text-xl text-base xl:text-lg  font-slimamif leading-7">
        Если вы из Санкт-Петербурга, то все товары можно забрать самовывозом по договоренности. 
        В другие города доставка почтой России или другими сервисами по договоренности.
      </p>
      <h2 class="2xl:text-4xl xl:text-2xl lg:text-xl text-lg font-kompost mt-4">МОЖНО ЛИ СОБРАТЬ УКРАШЕНИЕ ПО ЭСКИЗУ ИЛИ ПОДРОБНОМУ ОПИСАНИЮ?</h2>
      <p class="2xl:text-xl text-base xl:text-lg  font-slimamif leading-7">
        Да, я принимаю заказы на украшения по вашим предпочтениям. Мне достаточно собрать несколько примеров украшений, которые вам нравятся, примерного описания вашего стиля в одежде, желаемой цветовой гаммы. 
      </p>
      <h2 class="2xl:text-4xl xl:text-2xl lg:text-xl text-lg font-kompost mt-4">ОТ ЧЕГО ЗАВИСИТ СТОИМОСТЬ УКРАШЕНИЙ ПОД ЗАКАЗ?</h2>
      <p class="2xl:text-xl text-base xl:text-lg  font-slimamif leading-7">
        Стоимость украшений формируется из себестоимости материалов и сложности изготовления. Если хочется более уникальные материалы, на поиск которых потребуется время, это тоже повлияет на стоимость изделия.
      </p>
    </div>
  </div>
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
import { RouterLink } from 'vue-router';
import { ref, onMounted } from 'vue';

const showDuck2 = ref(true);


onMounted(() => {
  setInterval(() => {
    showDuck2.value = !showDuck2.value;
  }, 3000);
});
</script>

<style scoped>
@keyframes jump {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}

.bouncing {
  animation: jump 1s infinite ease-in-out;
}

</style>
