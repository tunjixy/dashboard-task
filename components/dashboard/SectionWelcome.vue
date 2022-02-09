<template>
  <div>
    <div class="container">
      <div class="md:flex md:items-center md:justify-between">
        <div>
          <h1 class="text-2xl md:text-3xl font-medium">Welcome back, Olivia</h1>
          <p class="text-base text-light-text mt-1">
            Track, manage and forecast your customers and orders.
          </p>
        </div>
        <div class="flex items-center mt-4">
          <ui-button secondary raised rounded class="mr-3 flex items-center">
            <upload-icon class="mr-2" />
            Import
          </ui-button>
          <ui-button primary raised rounded class="flex items-center">
            <plus-icon class="mr-2" />
            Add
          </ui-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UploadIcon from '@/assets/icons/upload.svg?inline'
import PlusIcon from '@/assets/icons/plus.svg?inline'

export default {
  components: { UploadIcon, PlusIcon },
}
</script>
