<template>
  <div id="wrap">
    <BackTitleHeader 
      class="recommend" 
      :class="{ 'header-fixed': isScrolled }" 
      title="추천 스타일⁺" 
    />
    <main id="main" class="main">
      <RecommendListContent />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import '~/assets/css/factor-analyst/common.css'
import BackTitleHeader from '~/components/factor-analyst/header/BackTitleHeader.vue'
import RecommendListContent from '~/components/factor-analyst/recommend/RecommendListContent.vue'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>