<template>
  <div>
    <div class="container">
      <div class="flex flex-wrap lg:items-center lg:justify-between">
        <div class="w-full lg:w-auto order-last lg:order-first">
          <div class="flex flex-wrap lg:flex-nowrap items-center">
            <div class="order-last lg:order-first mt-3 lg:mt-0">
              <ul class="flex flex-wrap">
                <li v-for="(item, index) in filters" :key="index" class="mr-3">
                  <div
                    class="text-primary bg-[#F9F5FF] rounded-lg py-[10px] px-4 shadow-btn flex items-center justify-center"
                  >
                    {{ item }}
                    <times-icon class="ml-[13px]" />
                  </div>
                </li>
              </ul>
            </div>
            <div
              class="w-full lg:w-auto order-first lg:order-last mt-3 lg:mt-0"
            >
              <ui-button
                secondary
                raised
                rounded
                full
                class="flex items-center justify-center"
              >
                <more-icon class="mr-[13px]" />
                More Filters
              </ui-button>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-auto order-first lg:order-last">
          <ui-search />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TimesIcon from '@/assets/icons/times.svg?inline'
import MoreIcon from '@/assets/icons/more.svg?inline'

export default {
  components: { TimesIcon, MoreIcon },
  data() {
    return {
      filters: ['All time', 'US, AU, +4'],
    }
  },
}
</script>
