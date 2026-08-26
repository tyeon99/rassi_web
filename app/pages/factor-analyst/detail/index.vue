<template>
  <div id="wrap">
    <BackHeader />
    <DetailTop />
    <DetailTab v-model="currentTab" />
    <main id="main" class="main">
      <div 
        class="detailTab-content select-none"
        @touchstart="handleTouchStart"
        @touchend="handleTouchEnd"
      >
        <StyleItem v-if="currentTab === 'style-item'" />
        <StyleIntro v-else-if="currentTab === 'style-intro'" />
        <StyleRecord v-else-if="currentTab === 'style-record'" />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// style
import '~/assets/css/factor-analyst/common.css'

import BackHeader from '~/components/factor-analyst/header/BackHeader.vue'
import DetailTop from '~/components/factor-analyst/detail/DetailTop.vue'
import DetailTab from '~/components/factor-analyst/detail/DetailTab.vue'
import StyleItem from '~/components/factor-analyst/detail/StyleItem.vue'
import StyleIntro from '~/components/factor-analyst/detail/StyleIntro.vue'
import StyleRecord from '~/components/factor-analyst/detail/StyleRecord.vue'

const currentTab = ref('style-item')

const tabList = ['style-item', 'style-intro', 'style-record']

const startX = ref(0)
const endX = ref(0)
const minSwipeDistance = 50

const handleTouchStart = (e: TouchEvent) => {
  if (e.touches && e.touches[0]) {
    startX.value = e.touches[0].clientX
  }
}

const handleTouchEnd = (e: TouchEvent) => {
  if (e.changedTouches && e.changedTouches[0]) {
    endX.value = e.changedTouches[0].clientX
    processSwipe()
  }
}

const processSwipe = () => {
  const swipeDistance = startX.value - endX.value
  const currentIdx = tabList.indexOf(currentTab.value)

  if (currentIdx === -1) return

  // 다음 탭으로
  if (swipeDistance > minSwipeDistance && currentIdx < tabList.length - 1) {
    const nextTab = tabList[currentIdx + 1]
    if (nextTab) currentTab.value = nextTab
  }
  // 이전 탭으로
  else if (swipeDistance < -minSwipeDistance && currentIdx > 0) {
    const prevTab = tabList[currentIdx - 1]
    if (prevTab) currentTab.value = prevTab
  }
}
</script>