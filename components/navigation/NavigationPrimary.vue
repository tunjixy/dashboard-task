<template>
  <nav class="w-full h-[72px] border-b border-border-nav">
    <div class="container h-[72px] flex items-center justify-between">
      <div class="flex items-center">
        <nuxt-link to="/">
          <app-logo />
        </nuxt-link>
        <ul class="hidden lg:flex items-center ml-7">
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
      </div>
      <ul class="flex items-center ml-4">
        <ui-button
          secondary
          rounded
          raised
          class="lg:flex lg:items-center mr-4 hidden"
        >
          <flash-icon class="mr-2" />
          Upgrade now
        </ui-button>
        <div class="mr-1 p-[10px] lg:flex hidden">
          <setting-icon />
        </div>
        <div class="mr-4 p-[10px] lg:flex hidden">
          <notification-icon />
        </div>
        <div class="lg:flex hidden">
          <img src="@/assets/images/avatar.png" alt="Avatar" />
        </div>
        <menu-icon class="cursor-pointer flex lg:hidden" />
      </ul>
    </div>
  </nav>
</template>

<script>
import MenuIcon from '@/assets/icons/menu.svg?inline'
import FlashIcon from '@/assets/icons/flash.svg?inline'
import SettingIcon from '@/assets/icons/setting.svg?inline'
import NotificationIcon from '@/assets/icons/notification.svg?inline'

export default {
  components: { MenuIcon, FlashIcon, SettingIcon, NotificationIcon },
  data() {
    return {
      menus: [
        {
          name: 'Home',
          link: '/home',
          active: false,
        },
        {
          name: 'Dashboard',
          link: '/dashboard',
          active: true,
        },
        {
          name: 'Projects',
          link: '/projects',
          active: false,
        },
        {
          name: 'Tasks',
          link: '/tasks',
          active: false,
        },
        {
          name: 'Reporting',
          link: '/reporting',
          active: false,
        },
        {
          name: 'Users',
          link: '/users',
          active: false,
        },
      ],
    }
  },
}
</script>
