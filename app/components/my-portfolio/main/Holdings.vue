<template>
  <div class="mainSection">

    <div class="mainSection__title">보유 종목 (10종목)</div>

    <!-- 탭 네비게이션 -->
    <div ref="tabContainer" class="custom-tab">
      <div 
        class="tab-indicator"
        :style="{
          width: `${indicatorStyle.width}px`,
          transform: `translateX(${indicatorStyle.left}px)`
        }"
      ></div>

      <button 
        v-for="(tab, tidx) in tabs" 
        :key="tidx"
        :ref="(el) => setTabRef(el, tidx)"
        :class="{ active: currentTabIdx === tidx }"
        @click="updateIndicator(tidx)"
      >
        {{ tab }}
      </button>
    </div>

    <div 
      class="tabContent"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      <ByReturn v-if="currentTabIdx === 0" />
      <ByInclusion v-if="currentTabIdx === 1" />
      <ByWeight v-if="currentTabIdx === 2" />
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, type ComponentPublicInstance } from 'vue'
import '~/assets/css/my-portfolio/common.css'
import ByReturn from '~/components/my-portfolio/main/tabcontents/ByReturn.vue'
import ByInclusion from '~/components/my-portfolio/main/tabcontents/ByInclusion.vue'
import ByWeight from '~/components/my-portfolio/main/tabcontents/ByWeight.vue'

const tabs = ['수익률순', '편입일순', '비중순']
const currentTabIdx = ref(0)

const tabContainer = ref<HTMLDivElement | null>(null) 
const tabButtons = ref<HTMLButtonElement[]>([])

const indicatorStyle = ref({
  width: 0,
  left: 0
})

const startX = ref(0)
const startY = ref(0)
const endX = ref(0)
const endY = ref(0)
const minSwipeDistance = 50

const setTabRef = (el: Element | ComponentPublicInstance | null, index: number) => {
  if (el) {
    tabButtons.value[index] = el as HTMLButtonElement
  }
}

const updateIndicator = (index: number) => {
  currentTabIdx.value = index
  const targetButton = tabButtons.value[index]
  const container = tabContainer.value
  
  if (targetButton) {
    indicatorStyle.value = {
      width: targetButton.offsetWidth,
      left: targetButton.offsetLeft - 20
    }

    if (container) {
      const buttonCenter = targetButton.offsetLeft + (targetButton.offsetWidth / 2)
      const containerHalfWidth = container.offsetWidth / 2
      const targetScrollLeft = buttonCenter - containerHalfWidth

      container.scrollTo({
        left: targetScrollLeft,
        behavior: 'smooth'
      })
    }
  }
}

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
    if (diffX > 0 && currentTabIdx.value < tabs.length - 1) {
      updateIndicator(currentTabIdx.value + 1)
    } else if (diffX < 0 && currentTabIdx.value > 0) {
      updateIndicator(currentTabIdx.value - 1)
    }
  }

  startX.value = 0
  startY.value = 0
  endX.value = 0
  endY.value = 0
}

onMounted(async () => {
  await nextTick() 
  updateIndicator(0)
})
</script>