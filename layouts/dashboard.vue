<template>
  <div class="font-Inter antialiased text-dark-text overflow-hidden">
    <div style="height: 722px" class="flex grow-0 flex-shrink basis-auto">
      <div
        class="relative hidden w-56 md:fixed md:left-0 md:top-0 md:bottom-0 md:flex md:flex-none md:flex-col md:justify-between"
      ></div>
      <div class="relative md:ml-56 w-full">
        <nav class="h-16 w-full">
          <div class="container">
            <div class="h-16 flex items-center justify-center">
              <span class="font-bold uppercase">Untitled</span>
            </div>
          </div>
        </nav>
        <div class="rounded-none md:rounded-tl-3xl shadow-lg bg-red-100 w-full">
          <div
            :style="{ height: scrollAreaHeight }"
            class="overflow-y-auto overflow-x-hidden scroll-smooth w-full min-h-full"
          >
            <nuxt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // baseHeight: '',
      // scrollAreaHeight: '',
    }
  },
  mounted() {
    /* this.baseHeight = this.$VHToPX(100)
    this.scrollAreaHeight =
      this.$data.$screenSize.width < 610 ? this.$VHToPX(100) : this.$VHToPX(91) */
    /* console.log(this.baseHeight)
    console.log(this.scrollAreaHeight) */
  },
  computed: {
    baseHeight() {
      if (process.client) {
        return this.$VHToPX(100)
      }
    },
    scrollAreaHeight() {
      if (process.client) {
        return this.$data.$screenSize.width < 610
          ? this.$VHToPX(100)
          : this.$VHToPX(91)
      }
    },
  },
}
</script>

<style>
body {
  background-color: #eeeeee;
}
</style>
