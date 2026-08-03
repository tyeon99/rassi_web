<!-- app/pages/index.vue -->
<template>
  <div id="wrap">
    <MainHeader />
    <MainTab />
    <main id="main" class="main">

      <!-- 확인용(삭제..부탁해용) -->
      <!-- <button @click="openFreePaymentOffcanvas">결제 무료</button>
      <button @click="openUnderPaymentOffcanvas">결제 1개월 미만</button>
      <button @click="openOverPaymentOffcanvas">결제 2개월 이상</button> -->
      <!-- // -->

      <TodayRecommend />
      <DateRecommend />
      <RecommendRecipe />
      <AllStyle />
    </main>
    <!-- 11-1 결제_레이어(무료 사용자) -->
    <FreePaymentOffcanvas 
      v-if="isFreePaymentOffcanvasOpen"
      :isOffcanvasAni="isOffcanvasAni"
      @close-freePaymentOffcanvas="closeFreePaymentOffcanvas"
    />
    <!-- 11-2 결제_레이어(1개월 미만 사용자) -->
    <UnderPaymentOffcanvas 
      v-if="isUnderPaymentOffcanvasOpen"
      :isOffcanvasAni="isOffcanvasAni"
      @close-underPaymentOffcanvas="closeUnderPaymentOffcanvas"
    />
    <!-- 11-3 결제_레이어(2개월 이상 사용자) -->
    <OverPaymentOffcanvas 
      v-if="isOverPaymentOffcanvasOpen"
      :isOffcanvasAni="isOffcanvasAni"
      @close-overPaymentOffcanvas="closeOverPaymentOffcanvas"
    />
  </div>
</template>

<script setup lang="ts">
// style
import '~/assets/css/factor-analyst/common.css'
// components
import MainHeader from '~/components/factor-analyst/header/MainHeader.vue'
import MainTab from '~/components/factor-analyst/main/MainTab.vue'
import TodayRecommend from '~/components/factor-analyst/main/TodayRecommend.vue'
import DateRecommend from '~/components/factor-analyst/main/DateRecommend.vue'
import RecommendRecipe from '~/components/factor-analyst/main/RecommendStyle.vue'
import AllStyle from '~/components/factor-analyst/main/AllStyle.vue'
import FreePaymentOffcanvas from '~/components/factor-analyst/offcanvas/FreePaymentOffcanvas.vue'
import UnderPaymentOffcanvas from '~/components/factor-analyst/offcanvas/UnderPaymentOffcanvas.vue'
import OverPaymentOffcanvas from '~/components/factor-analyst/offcanvas/OverPaymentOffcanvas.vue'

const isFreePaymentOffcanvasOpen = ref(false)
const isUnderPaymentOffcanvasOpen = ref(false)
const isOverPaymentOffcanvasOpen = ref(false)
const isOffcanvasAni = ref(false)

// 11-1 결제_레이어 열기
const openFreePaymentOffcanvas = () => {
  isOffcanvasAni.value = true
  isFreePaymentOffcanvasOpen.value = true
}

// 11-1 결제_레이어 닫기
const closeFreePaymentOffcanvas = () => {
  isOffcanvasAni.value = false
  setTimeout(() => {
    isFreePaymentOffcanvasOpen.value = false
  }, 300)
}

watch(isFreePaymentOffcanvasOpen, (isOpen) => {
  if (isOpen) {
    document.body.classList.add('scroll-lock')
  } else {
    document.body.classList.remove('scroll-lock')
  }
})

// 11-2 결제_레이어 열기
const openUnderPaymentOffcanvas = () => {
  isOffcanvasAni.value = true
  isUnderPaymentOffcanvasOpen.value = true
}

// 11-2 결제_레이어 닫기
const closeUnderPaymentOffcanvas = () => {
  isOffcanvasAni.value = false
  setTimeout(() => {
    isUnderPaymentOffcanvasOpen.value = false
  }, 300)
}

watch(isUnderPaymentOffcanvasOpen, (isOpen) => {
  if (isOpen) {
    document.body.classList.add('scroll-lock')
  } else {
    document.body.classList.remove('scroll-lock')
  }
})

// 11-3 결제_레이어 열기
const openOverPaymentOffcanvas = () => {
  isOffcanvasAni.value = true
  isOverPaymentOffcanvasOpen.value = true
}

// 11-3 결제_레이어 닫기
const closeOverPaymentOffcanvas = () => {
  isOffcanvasAni.value = false
  setTimeout(() => {
    isOverPaymentOffcanvasOpen.value = false
  }, 300)
}

watch(isOverPaymentOffcanvasOpen, (isOpen) => {
  if (isOpen) {
    document.body.classList.add('scroll-lock')
  } else {
    document.body.classList.remove('scroll-lock')
  }
})

</script>