<!-- app/app.vue -->
<template>
  <NuxtPage />
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

// Nuxt 내장 useHead를 확실하게 명시적 임포트
import { useHead } from '@unhead/vue'

const viewportContent = ref<string>('width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no')

const handleViewport = (): void => {
  if (typeof window === 'undefined') return

  if (window.screen.width < 375) {
    viewportContent.value = 'width=375, user-scalable=no'
  } else {
    viewportContent.value = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
  }
}

useHead({
  meta: [
    {
      name: 'viewport',
      content: () => viewportContent.value
    }
  ]
})

onMounted(() => {
  handleViewport()
  window.addEventListener('resize', handleViewport)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleViewport)
})
</script>