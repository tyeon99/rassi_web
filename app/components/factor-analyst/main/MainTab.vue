<template>
  <div ref="tabContainer" class="mainTab">
    <div 
      class="tab-indicator"
      :style="{
        width: `${indicatorStyle.width}px`,
        transform: `translateX(${indicatorStyle.left}px)`
      }"
    ></div>

    <button
      v-for="(tab, idx) in tabs"
      :key="idx"
      :ref="(el) => setTabRef(el, idx)"
      :class="{ active: activeTab === tab.id }"
      @click="updateTab(tab.id, idx)"
    >
      {{ tab.name }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import type { ComponentPublicInstance } from 'vue'
import '~/assets/css/factor-analyst/common.css'

const tabs = [
  { id: 'market', name: '마켓뷰' },
  { id: 'ai-signal', name: 'AI매매신호' },
  { id: 'stock-catch', name: '종목캐치' },
  { id: 'style-plus', name: '스타일⁺' }
]

const activeTab = ref('style-plus')

const tabContainer = ref<HTMLDivElement | null>(null)
const tabButtons = ref<HTMLButtonElement[]>([])

const indicatorStyle = ref({
  width: 0,
  left: 0
})

// 버튼 요소 수집 함수
const setTabRef = (el: Element | ComponentPublicInstance | null, index: number) => {
  if (el) {
    tabButtons.value[index] = el as HTMLButtonElement
  }
}

const updateTab = (tabId: string, index: number) => {
  activeTab.value = tabId
  
  const targetButton = tabButtons.value[index]
  if (targetButton) {
    indicatorStyle.value = {
      width: targetButton.offsetWidth,
      left: targetButton.offsetLeft
    }
  }
}

onMounted(async () => {
  await nextTick()
  updateTab('style-plus', 3)
})
</script>