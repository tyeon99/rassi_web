<template>
  <header id="header" class="mainHeader">
    <div class="left">
      <button class="back">
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.5625 16.625L8.14461 11.2071C7.75408 10.8166 7.75408 10.1834 8.14461 9.79289L13.5625 4.375" stroke="#141414" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
      <div class="title">
        <img width="17" src="~/assets/img/trigger-view/main/ai-icon.png" alt="ai 아이콘">
        <h1>트리거뷰</h1>
      </div>
      <button @click="openGuideOffcanvas">
        <img width="20" src="~/assets/img/trigger-view/header/info-icon.png" alt="안내 아이콘">
      </button>
    </div>
    
    <div class="right">
      <button @click="goLink">발생 종목 빠르게 보기</button>
    </div>
    <!-- 이용안내 -->
    <GuideOffcanvas 
      v-if="isGuideOffcanvasOpen"
      :isOffcanvasAni="isOffcanvasAni"
      @close-guideOffcanvas="closeGuideOffcanvas"
    />
  </header>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import GuideOffcanvas from '~/components/trigger-view/main/GuideOffcanvas.vue'
import { useRouter } from 'vue-router'

const isGuideOffcanvasOpen = ref(false)
const isOffcanvasAni = ref(false)
const router = useRouter()

const goLink = () => {
  router.push('/trigger-view/item')
}

// 이용안내 열기
const openGuideOffcanvas = () => {
  isGuideOffcanvasOpen.value = true
  isOffcanvasAni.value = true
}

// 이용안내 닫기
const closeGuideOffcanvas = () => {
  isOffcanvasAni.value = false
  setTimeout(() => {
    isGuideOffcanvasOpen.value = false
  }, 300)
}

watch(isGuideOffcanvasOpen, (isOpen) => {
  if (isOpen) {
    document.documentElement.classList.add('scroll-lock')
    document.body.classList.add('scroll-lock')
  } else {
    document.documentElement.classList.remove('scroll-lock')
    document.body.classList.remove('scroll-lock')
  }
})

</script>
