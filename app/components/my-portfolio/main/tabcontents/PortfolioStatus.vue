<template>
  <div class="portfolio-status">
    
    <div class="top">
      <p>
        <span>전체 기간 평가 손익</span>
        <strong class="up">+23,456,789원</strong>
      </p>

      <div ref="tabContainer" class="custom-tab mini">
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

    </div>

    <div class="chart">

      <div class="chart-box" style="height: 135px; background: #F5F7F9;"> <!--스타일 지우고 사용해주세용-->
        차트영역
      </div>

      <div class="chart-period">

        <button>1개월</button>
        <button>3개월</button>
        <button>6개월</button>
        <button>12개월</button>
        <button class="active">전체</button>

      </div>

    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import type { ComponentPublicInstance } from 'vue'
import '~/assets/css/my-portfolio/common.css'

const tabs = ['투자금', '수익률']
const currentTab = ref('투자금')

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