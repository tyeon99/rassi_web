<template>
  <div class="createStep">

    <div class="chosen-strategy">
      <div class="left">
        <div class="icon">
          <img width="54" :src="currentStrategy.icon" :alt="currentStrategy.title">
        </div>
        <div class="txt">
          <span>선택한 전략</span>
          <strong>{{ currentStrategy.title }}</strong>
        </div>
      </div>
      <div class="right">
        <button @click="changeStrategy">변경</button>
      </div>
    </div>

    <div class="step-section">
      <div class="title">얼마로 시작할까요?</div>

      <div class="input-wrap">
        <div class="input-box">
          <input 
            v-model="formattedAmount" 
            type="text" 
            placeholder="0"
            @input="handleInput"
          >
          <div class="right">
            <span>원</span>
            <button v-if="amount > 0" @click="clearAmount">
              <img width="16" src="~/assets/img/my-portfolio/create/reset-icon.png" alt="금액 리셋">
            </button>
          </div>
        </div>
        <p>{{ koreanAmountText }}</p>
      </div>

      <div class="quick-btns">
        <button @click="addAmount(1000000)">+100만</button>
        <button @click="addAmount(1000000)">+100만</button>
        <button @click="addAmount(10000000)">+1000만</button>
        <button @click="addAmount(100000000)">+1억</button>
      </div>

      <div class="info-box">
        <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 3C4.13438 3 1 6.13438 1 10C1 13.8656 4.13438 17 8 17C11.8656 17 15 13.8656 15 10C15 6.13438 11.8656 3 8 3ZM8.5 13.375C8.5 13.4438 8.44375 13.5 8.375 13.5H7.625C7.55625 13.5 7.5 13.4438 7.5 13.375V9.125C7.5 9.05625 7.55625 9 7.625 9H8.375C8.44375 9 8.5 9.05625 8.5 9.125V13.375ZM8 8C7.80374 7.99599 7.61687 7.91522 7.47948 7.775C7.3421 7.63478 7.26515 7.4463 7.26515 7.25C7.26515 7.0537 7.3421 6.86522 7.47948 6.725C7.61687 6.58478 7.80374 6.50401 8 6.5C8.19626 6.50401 8.38313 6.58478 8.52052 6.725C8.6579 6.86522 8.73485 7.0537 8.73485 7.25C8.73485 7.4463 8.6579 7.63478 8.52052 7.775C8.38313 7.91522 8.19626 7.99599 8 8Z" fill="#515F6C" />
        </svg>
        <p>
          최대 10종목, 종목당 15% 이내로 구성해요. 투자금에 따라 주가가 높은 일부 종목은 편입되지 않아 실제 포트폴리오 구성이 달라질 수 있어요. <br />
          <strong>* 권장 투자금액 : 5000만원 이상</strong>
        </p>
      </div>
    </div>

    <div class="step-section">
      <div class="title">리밸런싱 주기를 선택하세요.</div>

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
        <div class="txt">{{ currentCycleData.desc }}</div>

        <div class="list-box">
          <p>
            <span>첫 편입</span>
            <strong>{{ currentCycleData.firstEntry }}</strong>
          </p>
          <p>
            <span>정기 리밸런싱</span>
            <strong>{{ currentCycleData.regularRebalance }}</strong>
          </p>
          <p>
            <span>운용 방식</span>
            <strong>{{ currentCycleData.operationType }}</strong>
          </p>
        </div>
      </div>
    </div>

    <div class="create-btn">
      <button 
        :disabled="amount === 0" 
        @click="createPortfolio"
      >
        나만의 포트폴리오 만들기
      </button>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick, type ComponentPublicInstance } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import '~/assets/css/my-portfolio/common.css'

import icon01 from '~/assets/img/my-portfolio/main/strategy-icon01.png'
import icon02 from '~/assets/img/my-portfolio/main/strategy-icon02.png'

const route = useRoute()
const router = useRouter()

// --- 선택한 전략  ---
const strategyMap: Record<string, { title: string; icon: string }> = {
  'strategy-1': {
    title: '황금값어치 스타일',
    icon: icon01
  },
  'strategy-2': {
    title: '황금코어 스타일',
    icon: icon02
  }
}

const currentStrategy = computed(() => {
  const strategyId = (route.query.strategyId as string) || 'strategy-1'
  return strategyMap[strategyId] ?? strategyMap['strategy-1']!
})

const changeStrategy = () => {
  const currentStrategyId = (route.query.strategyId as string) || 'strategy-1'
  router.push({
    path: '/my-portfolio/create/step1',
    query: { strategyId: currentStrategyId }
  })
}

// --- 금액 관리 ---
const amount = ref(0) //

const formattedAmount = computed({
  get: () => amount.value ? amount.value.toLocaleString() : '',
  set: (val: string) => {
    const rawValue = val.replace(/[^0-9]/g, '')
    amount.value = rawValue ? parseInt(rawValue, 10) : 0
  }
})

const koreanAmountText = computed(() => {
  if (!amount.value) return '0원'
  const eok = Math.floor(amount.value / 100000000)
  const man = Math.floor((amount.value % 100000000) / 10000)
  
  let result = ''
  if (eok > 0) result += `${eok.toLocaleString()}억 `
  if (man > 0) result += `${man.toLocaleString()}만`
  return result ? `${result}원` : '0원'
})

const handleInput = (e: Event) => {
  const target = e.target as HTMLInputElement
  const rawValue = target.value.replace(/[^0-9]/g, '')
  amount.value = rawValue ? parseInt(rawValue, 10) : 0
}

const addAmount = (value: number) => {
  amount.value += value
}

const clearAmount = () => {
  amount.value = 0
}

// --- 탭 & 스와이프 연동 ---
const currentTabIdx = ref(0)
const tabContainer = ref<HTMLDivElement | null>(null)
const tabButtons = ref<HTMLButtonElement[]>([])

const indicatorStyle = ref({
  width: 0,
  left: 0
})

const tabs = ['1달', '2주']

const startX = ref(0)
const startY = ref(0)
const endX = ref(0)
const endY = ref(0)
const minSwipeDistance = 50

const cycleDetails = [
  {
    desc: '포트폴리오를 만든 날짜에 맞춰 매월 리밸런싱해요. 그날이 휴장일이면 직전 영업일에 종목을 조정해요.',
    firstEntry: '오늘 오후 3시',
    regularRebalance: '매월 10일 오후 3시',
    operationType: '모의 운용 · 실제계좌 연동 없음'
  },
  {
    desc: '포트폴리오를 만든 날짜에 맞춰 매월 리밸런싱해요. 그날이 휴장일이면 직전 영업일에 종목을 조정해요.',
    firstEntry: '내일 오후 3시',
    regularRebalance: '14일마다 오후 3시',
    operationType: '모의 운용 · 실제계좌 연동 없음'
  }
]

const currentCycleData = computed(() => {
  return cycleDetails[currentTabIdx.value] ?? cycleDetails[0]!
})

const setTabRef = (el: Element | ComponentPublicInstance | null, index: number) => {
  if (el) tabButtons.value[index] = el as HTMLButtonElement
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
      container.scrollTo({
        left: buttonCenter - containerHalfWidth,
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

const createPortfolio = () => {
  if (amount.value === 0) return

  router.push('/my-portfolio/create/step3')
}

onMounted(async () => {
  await nextTick()
  updateIndicator(0)
})
</script>