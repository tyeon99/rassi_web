<template>
  <section class="mainSection px-0">
    <div class="mainSection__title px-5">
      <h2>추천 스타일에 대한 기록</h2>
      <em>5/20 ~ 6/20</em>
    </div>
    
    <div ref="tabContainer" class="mainSection__tab">
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
        {{ tab.name }}
      </button>
    </div>
    <div class="mainSection__content px-5">
      <div 
        v-for="(tab, cidx) in styleTabs" 
        :key="cidx"
      >
        <div v-if="currentTabIdx === cidx" class="tab-content">
          <div class="record">
            <button 
              v-for="(recordText, ridx) in tab.records" 
              :key="ridx"
            >
              <p v-html="recordText"></p>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import type { ComponentPublicInstance } from 'vue'
import '~/assets/css/factor-analyst/common.css'

const currentTabIdx = ref(0)
const tabContainer = ref<HTMLDivElement | null>(null) 
const tabButtons = ref<HTMLButtonElement[]>([])

const indicatorStyle = ref({
  width: 0,
  left: 0
})

const styleTabs = [
  { 
    name: '정석강세 스타일', 
    records: [
      "정석강세 스타일은 한달간 <strong>+36.2%</strong> 수익률을 달성했어요.",
      "한달동안 가장 많이 추천된스타일인 정석강세 스타일로 <strong>17</strong>번 추천되었어요.",
      "<strong>5/20</strong>일 정석강세 스타일은 한종목도 빠짐없이 모두 상승했어요.",
      "정성강세스타일에서 가장 많이 오른 삼성전자는 <strong>+75%</strong> 상승했어요."
    ]
  },
  { 
    name: '수급선행 스타일', 
    records: [
      "한달동안 가장 많이 추천된스타일인 정석강세 스타일로 <strong>17</strong>번 추천되었어요.",
      "<strong>5/20</strong>일 정석강세 스타일은 한종목도 빠짐없이 모두 상승했어요.",
      "정석강세 스타일은 한달간 <strong>+36.2%</strong> 수익률을 달성했어요.",
      "정성강세스타일에서 가장 많이 오른 삼성전자는 <strong>+75%</strong> 상승했어요."
    ]
  },
  { 
    name: '황금밸런스 스타일', 
    records: [
      "정석강세 스타일은 한달간 <strong>+36.2%</strong> 수익률을 달성했어요.",
      "<strong>5/20</strong>일 정석강세 스타일은 한종목도 빠짐없이 모두 상승했어요.",
      "한달동안 가장 많이 추천된스타일인 정석강세 스타일로 <strong>17</strong>번 추천되었어요.",
      "정성강세스타일에서 가장 많이 오른 삼성전자는 <strong>+75%</strong> 상승했어요."
    ]
  }
]

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
    // 기존 인디케이터 크기/위치 계산
    indicatorStyle.value = {
      width: targetButton.offsetWidth,
      left: targetButton.offsetLeft - 20
    }

    // 선택된 탭을 가운데로 보내는 스크롤 계산
    if (container) {
      // 버튼의 왼쪽 시작점 + (버튼 넓이 절반) = 버튼의 중심점
      const buttonCenter = targetButton.offsetLeft + (targetButton.offsetWidth / 2)
      // 컨테이너 전체 넓이의 절반 = 화면의 중심점
      const containerHalfWidth = container.offsetWidth / 2
      
      // 계산된 목표 스크롤 위치 (버튼 중심을 화면 중심으로 맞추기)
      const targetScrollLeft = buttonCenter - containerHalfWidth

      // 브라우저 내장 scrollTo 함수로 스무스하게 밀어주기 (끝에 닿으면 알아서 멈춤)
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