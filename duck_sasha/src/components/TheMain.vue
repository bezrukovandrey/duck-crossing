<template>

<div class="mt-40 px-40 font-slimamif text-dark text-4xl flex">
<div class="w-5/12 flex flex-col mx-auto items-center z-20">
    <div>Всем привет! Меня зовут Саша/Сашенька :* <br><br>
Я художник и иллюстратор! <br>
Живу в городе Санкт-Петербург. <br> На этом сайте вы сможете найти примеры моих работ и заказать понравившиеся с доставкой!
</div>
<RouterLink to="/portfolio" class="mt-8 bg-button text-light text-xl font-mahone px-8 py-4 rounded-2xl shadow-custom border-light border-2 hover:bg-buttonHover hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:shadow-dark focus:bg-buttonFocus focus:ring focus:ring-buttonFocus transition-all duration-300 ">Посмотреть мои работы</RouterLink>
<RouterLink to="/shop" class="mt-8 bg-button text-light text-xl font-mahone px-8 py-4 rounded-2xl shadow-custom border-light border-2 hover:bg-buttonHover hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:shadow-dark focus:bg-buttonFocus focus:ring focus:ring-buttonFocus transition-all duration-300">Перейти в магазин</RouterLink>
</div>
<img src="./../assets/avatar.png" alt="Avatar" class="w-7/12 z-20" />
</div>
<img src="./../assets/duck.png" class="absolute z-20 w-64 h-auto left-1/2 transform -translate-x-1/2 bouncing" />
<img src="./../assets/bunny.png" class="absolute z-20 w-64 h-auto right-1/2 transform -translate-x-1/2 bouncing" />
<img src="./../assets/paper_back.png" class="absolute -mt-24 w-[calc(100vw-4rem)] h-auto object-cover inset-x-0 m-auto z-0" />
<img src="./../assets/heart.png" class="absolute mt-72 z-20 w-32 h-auto left-1/2 transform -translate-x-1/2" />
<div class="relative mt-80 w-[calc(100vw-16rem)] mx-auto z-10">
    
  <img src="./../assets/paper_2.png" class="w-full h-auto object-cover" />
  <img
      v-if="showDuck2"
      src="./../assets/duck_2.png"
      class="absolute w-64 h-auto left-0 top-1/2 transform -translate-x-1/4 -mt-32 z-20"
    />
    <img
      v-else
      src="./../assets/duck_3.png"
      class="absolute w-64 h-auto left-0 top-1/2 transform -translate-x-1/4 -mt-32 z-20"
    />
    
    <!-- Правая утка -->
    <img
      v-if="!showDuck2"
      src="./../assets/duck_2.png"
      class="absolute w-64 h-auto right-0 top-1/2 transform translate-x-1/4 -mt-32 z-20"
    />
    <img
      v-else
      src="./../assets/duck_3.png"
      class="absolute w-64 h-auto right-0 top-1/2 transform translate-x-1/4 -mt-32 z-20"
    />
  
  <div class="absolute inset-0 mt-16 flex justify-between px-36 items-start text-dark">
   
    <div class="w-1/2 pr-8">
      <div class="text-4xl font-kompost">О ПРОЕКТЕ</div>
      <div class="text-xl mt-2 font-slimamif leading-7">
        Duck crossing — это один из моих творческих проектов, на который есть большие планы: ставлю цель создать из него собственный бренд. 
        Проект существует около двух лет, но, создавая его, я не знала, в каком направлении он будет развиваться. Пока что веду его одна.
      </div>
      <div class="text-4xl font-kompost mt-4">ЧТО Я ДЕЛАЮ?</div>
      <div class="text-xl mt-2 font-slimamif leading-7">
        Я творю разные штучки своими руками: <br/>
✨шью игрушки по собственным выкройкам <br/>
✨вырезаю штампы и ими вручную печатаю открытки и принты <br/>
✨рисую милые иллюстрации для своего мерча <br/>
✨делаю украшения из стекла и натуральных камней <br/>
Ещё иногда устраиваю тематические фотосеты и творческие встречи! 
      </div>
      <div class="text-4xl font-kompost mt-4">КАК ЗАКАЗАТЬ?</div>
      <div class="text-xl mt-2 font-slimamif leading-7">
        Заказы формируются через личные сообщения в телеграмме или в сообщениях сообщества в вк
Многие изделия выполняются только под заказ, наличие товаров можно уточнять в сообщениях.
    </div></div>

   
    <div class="w-1/2 pl-8 border-l-2 border-l-button">
      <div class="text-4xl font-kompost">КУДА МОЖНО ДОСТАВИТЬ?</div>
      <div class="text-xl mt-2 font-slimamif leading-7">
        Если вы из Санкт-Петербурга, то все товары можно забрать самовывозом по договоренности. 
        В другие города доставка почтой России или другими сервисами по договоренности.
      </div>
      <div class="text-4xl font-kompost mt-4">МОЖНО ЛИ СОБРАТЬ УКРАШЕНИЕ ПО ЭСКИЗУ ИЛИ ПОДРОБНОМУ ОПИСАНИЮ?</div>
      <div class="text-xl mt-2 font-slimamif leading-7">
        Да, я принимаю заказы на украшения по вашим предпочтениям. Мне достаточно собрать несколько примеров украшений, которые вам нравятся, примерного описания вашего стиля в одежде, желаемой цветовой гаммы. 
      </div>
      <div class="text-4xl font-kompost mt-4">ОТ ЧЕГО ЗАВИСИТ СТОИМОСТЬ УКРАШЕНИЙ ПОД ЗАКАЗ?</div>
      <div class="text-xl mt-2 font-slimamif leading-7">
        Стоимость украшений формируется из себестоимости материалов и сложности изготовления. Если хочется более уникальные материалы, на поиск которых потребуется время, это тоже повлияет на стоимость изделия.
      </div>
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
import { RouterLink } from 'vue-router';

import { ref, onMounted } from 'vue';

const showDuck2 = ref(true);

// Переключение изображений каждую секунду
onMounted(() => {
  setInterval(() => {
    showDuck2.value = !showDuck2.value;
  }, 3000); // Каждые 3 секунды меняем местами уток
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
