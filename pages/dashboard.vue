<template>
  <div class="flex h-screen w-full">
    <navigation-side-menu />
    <!-- <navigation-side-drawer
      :show="toggleDrawer"
      @close="toggleDrawer = false"
    /> -->
    <div class="w-full overflow-y-auto">
      <navigation-dashboard-header @toggle="toggleDrawer = true" />
      <nuxt-child />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  /* data() {
    return {
      toggleDrawer: false,
    }
  }, */
  layout: 'dashboard',
}
</script>
