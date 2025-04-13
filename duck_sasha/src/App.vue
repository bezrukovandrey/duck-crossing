<template>
  <div class="relative flex flex-col min-h-screen bg-background">

    <div class="absolute inset-0 bg-duck-pattern bg-repeat opacity-60 pointer-events-none z-10"></div>

    <div class="flex-1 relative z-10">
      <header>
        <div class="absolute top-8 left-8 z-20">
          <div class="relative w-[184px] h-32">
            <img src="./assets/paper_logo.png" alt="Duck crossing" class="absolute w-full h-full opacity-80" />
            <RouterLink to="/"><img src="./assets/logo.png" alt="Duck crossing" class="absolute inset-0 m-auto w-40" /></RouterLink>
          </div>
        </div>

        <nav class="absolute right-8 top-8 font-kompost text-dark text-2xl z-20">
          <div class="relative w-[440px] h-20">
            <img src="./assets/paper_6.png" alt="Duck crossing" class="absolute w-full h-full object-cover opacity-80" />
            <div class="absolute inset-0 flex justify-evenly items-center">
              <RouterLink to="/shop">Магазин</RouterLink>
              <RouterLink to="/events">События</RouterLink>
              <RouterLink to="/portfolio">Портфолио</RouterLink>
            </div>
          </div>
        </nav>
      </header>

      <img src="./assets/paper_1.png" alt="Paper" class="absolute w-[calc(100vw-4rem)] h-auto object-cover inset-x-0 m-auto z-10" />

      <RouterView />
    </div>
  </div>
</template>

