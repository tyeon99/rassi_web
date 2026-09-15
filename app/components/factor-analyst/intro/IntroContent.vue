<template>
  <div class="introContent">
    <div class="title">스타일 패스에서 모두 이용하실 수 있어요!</div>

    <div ref="tabContainer" class="introContent__tab">
      <div 
        class="tab-indicator"
        :style="{
          width: `${indicatorStyle.width}px`,
          transform: `translateX(${indicatorStyle.left}px)`
        }"
      ></div>

      <button 
        v-for="(tab, tidx) in styleTabs" 
        :key="tidx"
        :ref="(el) => setTabRef(el, tidx)"
        :class="{ active: currentTabIdx === tidx }"
        @click="updateIndicator(tidx)"
      >
        {{ tab }}
      </button>
    </div>

    <div class="introContent__tabContent">
      <component :is="activeTabComponent" />
    </div>
    
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick, type Component, type ComponentPublicInstance } from 'vue'
// style
import '~/assets/css/factor-analyst/common.css'
import ItemStyleTabContent from '~/components/factor-analyst/intro/ItemStyleTabContent.vue'
import StyleTabContent from '~/components/factor-analyst/intro/StyleTabContent.vue'
import RecommendStyleTabContent from '~/components/factor-analyst/intro/RecommendStyleTabContent.vue'

const currentTabIdx = ref(0)
const tabContainer = ref<HTMLDivElement | null>(null) 
const tabButtons = ref<HTMLButtonElement[]>([])

const indicatorStyle = ref({
  width: 0,
  left: 0
})

const styleTabs = ['종목스타일', '스타일⁺', '추천스타일']

const tabComponents: Component[] = [
  ItemStyleTabContent,
  StyleTabContent,
  RecommendStyleTabContent
]

const activeTabComponent = computed<Component | undefined>(() => tabComponents[currentTabIdx.value])

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

onMounted(async () => {
  await nextTick() 
  updateIndicator(0)
})
</script>