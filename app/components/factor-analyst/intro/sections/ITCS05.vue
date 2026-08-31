<template>
  <div class="itemStyleSection">
    <div class="tab-box">
      <div class="title">안전성과 역발상</div>

      <div ref="tabContainer" class="itemStyleSection__tab">
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
          :class="{ active: currentTab === idx }"
          @click="updateIndicator(idx)"
        >
          {{ tab }}
        </button>
      </div>

      <div class="itemStyleSection__tabContent">
        <div class="list-box">
          <button 
            v-for="(itemTitle, idx) in currentList" 
            :key="idx" 
            class="list"
          >
            <div class="left">
              <strong>{{ itemTitle }}</strong>
            </div>
            <div class="right">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 12.75L11.25 9L7.5 5.25" stroke="#D3D3D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from 'vue'
import type { ComponentPublicInstance } from 'vue'

// style
import '~/assets/css/factor-analyst/common.css'

const tabs = ['저변동성', '낙폭과대']
const currentTab = ref(0)

const tabContainer = ref<HTMLDivElement | null>(null)
const tabButtons = ref<HTMLButtonElement[]>([])

const indicatorStyle = ref({
  width: 0,
  left: 0
})

const tabData = [
  // 저변동성 데이터
  ['안정적인 주가', '변동성 전환', '고변동성'],
  // 낙폭과대 데이터
  ['과매도 구간']
]

const currentList = computed(() => tabData[currentTab.value])

const setTabRef = (el: Element | ComponentPublicInstance | null, index: number) => {
  if (el) {
    tabButtons.value[index] = el as HTMLButtonElement
  }
}

const updateIndicator = (index: number) => {
  currentTab.value = index
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

onMounted(async () => {
  await nextTick()
  updateIndicator(0)
})
</script>