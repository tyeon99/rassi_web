<template>
  <div ref="tabContainer" class="detailTab">
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
      :class="{ active: modelValue === tab.id }"
      @click="updateTab(tab.id)"
    >
      {{ tab.name }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, watch } from 'vue'
import type { ComponentPublicInstance } from 'vue'
import '~/assets/css/factor-analyst/common.css'

const props = defineProps({
  modelValue: {
    type: String,
    required: true
  }
})
const emit = defineEmits(['update:modelValue'])

const tabs = [
  { id: 'style-item', name: '스타일 종목' },
  { id: 'style-intro', name: '스타일 소개' },
  { id: 'style-record', name: '스타일 기록' }
]

const tabContainer = ref<HTMLDivElement | null>(null)
const tabButtons = ref<HTMLButtonElement[]>([])
const initialTop = ref(0) 

const indicatorStyle = ref({
  width: 0,
  left: 0
})

const setTabRef = (el: Element | ComponentPublicInstance | null, index: number) => {
  if (el) {
    tabButtons.value[index] = el as HTMLButtonElement
  }
}

const scrollToTabTop = async () => {
  await nextTick()
  if (tabContainer.value) {
    const stickyOffset = 58
    const targetScrollTop = initialTop.value - stickyOffset

    if (window.scrollY > targetScrollTop) {
      window.scrollTo({
        top: targetScrollTop,
        behavior: 'smooth'
      })
    }
  }
}

const updateTab = (tabId: string) => {
  emit('update:modelValue', tabId)
  scrollToTabTop()
}

watch(() => props.modelValue, (newTabId) => {
  const targetIdx = tabs.findIndex(t => t.id === newTabId)
  if (targetIdx !== -1) {
    nextTick(() => {
      const targetButton = tabButtons.value[targetIdx]
      if (targetButton) {
        indicatorStyle.value = {
          width: targetButton.offsetWidth,
          left: targetButton.offsetLeft
        }
      }
    })
  }
}, { immediate: true })

onMounted(async () => {
  await nextTick()
  if (tabContainer.value) {
    initialTop.value = tabContainer.value.getBoundingClientRect().top + window.scrollY
  }
})
</script>