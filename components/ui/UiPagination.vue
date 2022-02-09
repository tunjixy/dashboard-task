<template>
  <div class="px-6">
    <div class="hidden md:flex md:items-center md:justify-between h-[65px]">
      <div class="flex items-center">
        <ui-button secondary raised rounded class="mr-3"> Previous </ui-button>
        <ui-button secondary raised rounded> Next </ui-button>
      </div>
      <div class="title">Page 1 of 10</div>
    </div>
    <div class="md:hidden h-[65px] flex items-center justify-center">
      <div
        class="w-full border-t border-border-nav pt-4 flex items-center justify-between"
      >
        <arrow-left-icon />
        <div class="title">Page 1 of 10</div>
        <arrow-right-icon />
      </div>
    </div>
  </div>
</template>

<script>
import ArrowLeftIcon from '@/assets/icons/arrow-left.svg?inline'
import ArrowRightIcon from '@/assets/icons/arrow-right.svg?inline'

export default {
  components: { ArrowLeftIcon, ArrowRightIcon },
}
</script>

<style scoped>
.title {
  @apply text-sm font-medium;
}
</style>
