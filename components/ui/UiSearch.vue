<template>
  <div class="relative">
    <input
      v-model="search"
      class="w-full bg-white rounded-lg pl-11 pr-[14px] py-[10px] shadow-btn focus:outline-none border-border-btn focus:ring-1 focus:ring-primary text-base form-input"
      type="text"
      :placeholder="placeholder"
    />
    <search-icon class="absolute w-5 h-5 top-3 left-[14px]" />
  </div>
</template>

<script>
import SearchIcon from '@/assets/icons/search.svg?inline'

export default {
  name: 'UiSearch',
  components: { SearchIcon },
  props: {
    placeholder: {
      type: String,
      default: 'Search',
    },
  },
  data() {
    return {
      search: '',
    }
  },
  watch: {
    search(val) {
      if (val) {
        this.$emit('search', val)
      }
    },
  },
}
</script>
