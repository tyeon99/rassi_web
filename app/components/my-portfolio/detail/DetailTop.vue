<template>
  <div class="detailSection !pt-0">
    <div class="detailSection__toptitle">황금값어치 포트폴리오</div>
    <div class="detailSection__toptxt">리밸런싱 주기를 선택해보세요.</div>

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
      
      <div class="period">

        <div class="top">
          <p>
            <span>누적수익률</span>
            <strong class="up">{{ currentPeriodData.returnScore }}</strong>
          </p>
          <p>
            <span>현재 자산</span>
            <strong>{{ currentPeriodData.currentAsset }}</strong>
          </p>
        </div>

        <div class="bottom">
          <p>
            <button @click="openTermGuideModal('CAGR')">
              <img width="14" src="~/assets/img/my-portfolio/detail/question-icon.png" alt="물음표">
            </button>
            <span>
              CAGR <em>연평균 수익률</em>
            </span>
            <strong>{{ currentPeriodData.cagr }}</strong>
          </p>
          <div class="line"></div>
          <p>
            <button @click="openTermGuideModal('MDD')">
              <img width="14" src="~/assets/img/my-portfolio/detail/question-icon.png" alt="물음표">
            </button>
            <span>
              MDD <em>최대 낙폭</em>
            </span>
            <strong>{{ currentPeriodData.mdd }}</strong>
          </p>
          <div class="line"></div>
          <p>
            <span>투자원금</span>
            <strong>{{ currentPeriodData.principal }}</strong>
          </p>
        </div>

      </div>

    </div>

    <!-- 용어 설명 모달 -->
    <TermGuideModal 
      v-if="isTermGuideModalOpen"
      :isModalAni="isModalAni"
      :title="modalContent.title"
      :description="modalContent.description"
      @close-termGuideModal="closeTermGuideModal"
    />

  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, nextTick, type ComponentPublicInstance } from 'vue'
import '~/assets/css/my-portfolio/common.css'
import TermGuideModal from '~/components/my-portfolio/modal/TermGuideModal.vue'

const isTermGuideModalOpen = ref(false)
const isModalAni = ref(false)

const modalContent = ref({
  title: '',
  description: ''
})

// 용어 정의
const termDictionary: Record<string, { title: string; description: string }> = {
  CAGR: {
    title: 'CAGR (연평균 수익률)',
    description: '일정 기간의 투자 성과를 연평균 수익률로 환산한 값이에요. 기간이 달라도 연간 기준으로 성과를 확인할 수 있어요.'
  },
  MDD: {
    title: 'MDD (최대 낙폭)',
    description: '투자 기간 중 고점 대비 가장 크게 하락한 폭이에요. <br>수치가 클수록 해당 기간의 최대 하락폭이 컸다는 의미예요.'
  }
}

// 용어 설명 모달 열기
const openTermGuideModal = async (termKey?: string) => {
  if (termKey && termDictionary[termKey]) {
    modalContent.value = termDictionary[termKey]
  }

  isTermGuideModalOpen.value = true
  await nextTick() // DOM 생성 타이밍 보장
  isModalAni.value = true
}

// 용어 설명 모달 닫기
const closeTermGuideModal = () => {
  isModalAni.value = false
  setTimeout(() => {
    isTermGuideModalOpen.value = false
  }, 300)
}

watch(isTermGuideModalOpen, (isOpen) => {
  if (isOpen) {
    document.documentElement.classList.add('scroll-lock')
    document.body.classList.add('scroll-lock')
  } else {
    document.documentElement.classList.remove('scroll-lock')
    document.body.classList.remove('scroll-lock')
  }
})

interface PeriodData {
  returnScore: string
  currentAsset: string
  cagr: string
  mdd: string
  principal: string
}

const currentTabIdx = ref(0)
const tabContainer = ref<HTMLDivElement | null>(null) 
const tabButtons = ref<HTMLButtonElement[]>([])

const indicatorStyle = ref({
  width: 0,
  left: 0
})

const tabs = ['1달', '2주']

// 스와이프 관련 상태값
const startX = ref(0)
const startY = ref(0)
const endX = ref(0)
const endY = ref(0)
const minSwipeDistance = 50

const periodDataList = ref<PeriodData[]>([
  {
    returnScore: '95.3점',
    currentAsset: '8.03억',
    cagr: '39.85%',
    mdd: '41.23%',
    principal: '1억원'
  },
  {
    returnScore: '88.1점',
    currentAsset: '6.52억',
    cagr: '32.10%',
    mdd: '35.40%',
    principal: '1억원'
  }
])

const currentPeriodData = computed<PeriodData>(() => {
  return periodDataList.value[currentTabIdx.value] ?? {
    returnScore: '0점',
    currentAsset: '0원',
    cagr: '0%',
    mdd: '0%',
    principal: '0원'
  }
})

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

// 터치 스와이프 핸들러
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