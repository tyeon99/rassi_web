<template>
  <div class="portfolio-performance">
    
    <div ref="tabContainer" class="bar-tab">
      <div 
        class="tab-indicator"
        :style="{
          width: `${indicatorStyle.width}px`,
          transform: `translateX(${indicatorStyle.left}px)`
        }"
      ></div>

      <button
        v-for="(tab, idx) in tabs"
        :key="tab"
        :ref="(el) => setTabRef(el, idx)"
        :class="{ active: currentTab === tab }"
        @click="selectTab(tab, idx)"
      >
        {{ tab }}
      </button>
    </div>

    <div class="tabContent">

      <PortfolioStatus v-if="currentTab === '포트폴리오 현황'" />
      <PortfolioHistory v-else-if="currentTab === '히스토리'" />

    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import type { ComponentPublicInstance } from 'vue'
import '~/assets/css/my-portfolio/common.css'
import PortfolioStatus from '~/components/my-portfolio/main/tabcontents/PortfolioStatus.vue'
import PortfolioHistory from '~/components/my-portfolio/main/tabcontents/PortfolioHistory.vue'

const tabs = ['포트폴리오 현황', '히스토리']
const currentTab = ref('포트폴리오 현황')

const tabButtons = ref<HTMLButtonElement[]>([])

const indicatorStyle = ref({
  width: 0,
  left: 0
})

const setTabRef = (el: Element | ComponentPublicInstance | null, index: number) => {
  if (el) {
    tabButtons.value[index] = el as HTMLButtonElement
  }
}

const selectTab = (tabName: string, index: number) => {
  currentTab.value = tabName
  updateIndicator(index)
}

const updateIndicator = (index: number) => {
  nextTick(() => {
    const targetButton = tabButtons.value[index]
    if (targetButton) {
      indicatorStyle.value = {
        width: targetButton.offsetWidth,
        left: targetButton.offsetLeft
      }
    }
  })
}

onMounted(async () => {
  await nextTick()
  updateIndicator(0)
})
</script>