<template>
  <header id="header" class="backTitleHeader">
    <button>
      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.5625 16.625L8.14461 11.2071C7.75408 10.8166 7.75408 10.1834 8.14461 9.79289L13.5625 4.375" stroke="#141414" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>
    <h1>{{ title }}</h1>
  </header>
</template>

<script setup lang="ts">
import '~/assets/css/factor-analyst/common.css'

defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>