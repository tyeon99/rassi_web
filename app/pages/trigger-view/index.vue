<template>
  <div id="wrap" class="trigger-view">
    <MainHeader />

    <MainTab v-model="currentTabIdx" />

    <main 
      id="main" 
      class="main select-none"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      <div class="main__tabContent">
        <!-- <SkeletonContent /> -->
        <component :is="activeTabComponent" />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
// css
import '~/assets/css/trigger-view/common.css'

import { ref, computed } from 'vue'
import type { Component } from 'vue'

import MainHeader from '~/components/trigger-view/header/MainHeader.vue'
import MainTab from '~/components/trigger-view/main/MainTab.vue'

import TrendingTabContent from '~/components/trigger-view/main/TrendingTabContent.vue'
import HighestTabContent from '~/components/trigger-view/main/HighestTabContent.vue'
import FocusTabContent from '~/components/trigger-view/main/FocusTabContent.vue'
import SkeletonContent from '~/components/trigger-view/main/SkeletonContent.vue'

const currentTabIdx = ref(0)

const tabComponents: Component[] = [
  TrendingTabContent,
  HighestTabContent,
  FocusTabContent
]

const activeTabComponent = computed<Component | undefined>(() => tabComponents[currentTabIdx.value])

const startX = ref(0)
const startY = ref(0)
const endX = ref(0)
const endY = ref(0)
const minSwipeDistance = 50 

const handleTouchStart = (e: TouchEvent) => {
  if (e.touches && e.touches[0]) {
    startX.value = e.touches[0].clientX
    startY.value = e.touches[0].clientY
  }
}

const handleTouchMove = (e: TouchEvent) => {
  if (e.touches && e.touches[0]) {
    endX.value = e.touches[0].clientX
    endY.value = e.touches[0].clientY
  }
}

const handleTouchEnd = () => {
  if (!startX.value || !endX.value) return

  const diffX = startX.value - endX.value
  const diffY = startY.value - endY.value

  if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > minSwipeDistance) {
    if (diffX > 0 && currentTabIdx.value < tabComponents.length - 1) {
      currentTabIdx.value++
    } else if (diffX < 0 && currentTabIdx.value > 0) {
      currentTabIdx.value--
    }
  }

  // 좌표 초기화
  startX.value = 0
  startY.value = 0
  endX.value = 0
  endY.value = 0
}
</script>
