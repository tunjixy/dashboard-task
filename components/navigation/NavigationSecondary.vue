<template>
  <nav class="hidden lg:block w-full h-16 border-b border-border-nav">
    <div class="container h-16 flex items-center justify-between">
      <ul class="hidden lg:flex items-center">
        <li v-for="(menu, index) in menus" :key="index" class="mr-1">
          <nuxt-link
            :to="menu.link"
            :class="[menu.active ? 'bg-grey rounded-md' : '']"
            class="text-base font-medium block hover:bg-grey hover:rounded-md py-2 px-3 transition-all ease-in duration-300"
          >
            {{ menu.name }}
          </nuxt-link>
        </li>
      </ul>
      <ul class="flex items-center ml-4">
        <ui-search />
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        {
          name: 'Overview',
          link: '/dashboard/overview',
          active: true,
        },
        {
          name: 'Notifications',
          link: '/dashboard/notifications',
          active: false,
        },
        {
          name: 'Analytics',
          link: '/dashboard/Analytics',
          active: false,
        },
        {
          name: 'Saved reports',
          link: '/dashboard/saved-reports',
          active: false,
        },
        {
          name: 'Trade History',
          link: '/dashboard/trade-history',
          active: false,
        },
        {
          name: 'User reports',
          link: '/dashboard/user-reports',
          active: false,
        },
      ],
    }
  },
}
</script>
