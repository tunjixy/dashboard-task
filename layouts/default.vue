<template>
  <div class="font-Inter antialiased flex flex-col min-h-screen text-dark-text">
    <header>
      <navigation-primary />
      <navigation-secondary />
    </header>
    <main class="con">
      <transition name="fade" mode="out-in">
        <Nuxt />
      </transition>
    </main>
  </div>
</template>

<style>
html,
body {
  height: 100%;
}

body {
  @apply bg-white;
}

#__nuxt,
#__layout {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.con {
  flex: 1 0 auto;
}
</style>
