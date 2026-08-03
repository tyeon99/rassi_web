<template>
  <div class="itemStyleListContent">
    <!-- 탭 네비게이션 -->
    <div ref="tabContainer" class="mainSection__tab">
      <div 
        class="tab-indicator"
        :style="{
          width: `${indicatorStyle.width}px`,
          transform: `translateX(${indicatorStyle.left}px)`
        }"
      ></div>

      <button 
        v-for="(tab, tidx) in qualityTabs" 
        :key="tidx"
        :ref="(el) => setTabRef(el, tidx)"
        :class="{ active: currentTabIdx === tidx }"
        @click="updateIndicator(tidx)"
      >
        {{ tab.name }}
      </button>
    </div>

    <!-- 탭 컨텐츠 영역 -->
    <div class="mainSection__content px-5">
      <div class="tab-content">
        <div class="summary-box">
          <p v-html="activeTab.summary"></p>
          <button @click="openItemStyleListOffcanvas">
            <span>자세히 보기</span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 12.75L11.25 9L7.5 5.25" stroke="#D3D3D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>

        <!-- 종목 리스트 -->
        <div class="listGroup">
          <div 
            v-for="(item, idx) in activeTab.list" 
            :key="idx" 
            class="list"
          >
            <div class="left">
              <div class="circle">
                <img 
                  width="30" 
                  src="~/assets/img/factor-analyst/main/item-circle.png" 
                  alt="종목로고"
                >
              </div>
              <div class="name">
                <p>{{ item.name }}</p>
                <span>{{ item.code }}</span>
              </div>
            </div>
            <div class="right">
              <span>팩터 스코어</span>
              <p class="up">{{ item.score }}점</p>
            </div>
          </div>
        </div>

        <!-- 종목 없을 때 -->
        <div class="no-item">
          <img width="20" src="~/assets/img/factor-analyst/detail/no-icon.png" alt="아이콘">
          <p>해당 종목 스타일에 속하는 <br />종목이 없습니다.</p>
        </div>

      </div>
    </div>
    <ItemStyleListOffcanvas 
      v-if="isItemStyleListOffcanvasOpen"
      :isOffcanvasAni="isOffcanvasAni"
      @close-itemStyleListOffcanvas="closeItemStyleListOffcanvas"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from 'vue'
import type { ComponentPublicInstance } from 'vue'
import '~/assets/css/factor-analyst/common.css'
import ItemStyleListOffcanvas from '~/components/factor-analyst/offcanvas/ItemStyleListOffcanvas.vue'

const isItemStyleListOffcanvasOpen = ref(false)
const isOffcanvasAni = ref(false)
const currentTabIdx = ref(0)
const tabContainer = ref<HTMLDivElement | null>(null) 
const tabButtons = ref<HTMLButtonElement[]>([])

const indicatorStyle = ref({
  width: 0,
  left: 0
})

const qualityTabs = [
  { 
    name: '고퀄리티', 
    summary: "재무제표상 수익성과 건전성이 <br /> 모두 '최상위'인 종목",
    list: [
      { name: '삼성전자', code: '055872', score: '95.3' },
      { name: 'SK하이닉스', code: '000660', score: '88.5' },
      { name: '현대차', code: '005380', score: '82.1' },
      { name: '네이버', code: '035420', score: '79.4' },
      { name: '카카오', code: '035720', score: '75.8' }
    ]
  },
  { 
    name: '안정형퀄리티', 
    summary: "수익성은 보통이나 <br /> 재무 안정성이 뛰어난 종목",
    list: [
      { name: '한국전력', code: '015760', score: '70.2' },
      { name: 'KT&G', code: '033780', score: '68.9' },
      { name: '신한지주', code: '055550', score: '65.4' }
    ]
  },
  { 
    name: '로우퀄리티', 
    summary: "단기 모멘텀은 있으나 <br /> 재무 주의가 필요한 종목",
    list: [
      { name: 'OO제약', code: '123456', score: '52.1' },
      { name: 'XX바이오', code: '654321', score: '48.0' }
    ]
  },
  { 
    name: '저퀄리티', 
    summary: "수익성과 건전성이 모두 낮아 <br /> 투자 시 주의가 필요한 종목",
    list: [
      { name: 'AA테크', code: '999999', score: '31.2' }
    ]
  }
]


// 종목 스타일 상세보기 열기
const openItemStyleListOffcanvas = () => {
  isOffcanvasAni.value = true
  isItemStyleListOffcanvasOpen.value = true
}

// 종목 스타일 상세보기 닫기
const closeItemStyleListOffcanvas = () => {
  isOffcanvasAni.value = false
  setTimeout(() => {
    isItemStyleListOffcanvasOpen.value = false
  }, 300)
}

watch(isItemStyleListOffcanvasOpen, (isOpen) => {
  if (isOpen) {
    document.body.classList.add('scroll-lock')
  } else {
    document.body.classList.remove('scroll-lock')
  }
})

const activeTab = computed(() => (qualityTabs[currentTabIdx.value] || qualityTabs[0]) as (typeof qualityTabs)[0])

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