<template>
  <div
    class="offcanvas-overlay animate__animated animate__faster detailOffcanvas"
    :class="{ 'animate__fadeIn': isOffcanvasAni, 'animate__fadeOut': !isOffcanvasAni }" 
    @click="closeDetailOffcanvas"
  >
    <div
      class="offcanvas-content animate__animated animate__faster detailOffcanvas"
      :class="{ 'animate__fadeInUp': isOffcanvasAni, 'animate__fadeOutDown': !isOffcanvasAni }" 
      @click.stop
    >
      <div class="offcanvas-header">
        <div class="title">
          <div class="top">
            <img width="17" src="~/assets/img/trigger-view/main/ai-icon.png" alt="ai 아이콘">
            <strong>SK하이닉스의 트리거뷰</strong>
          </div>
          <div class="bottom">2026/06/10 WED</div>
        </div>
        <button @click="closeDetailOffcanvas">
          <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 11L16.5 16.5M16.5 16.5L22 22M16.5 16.5L22 11M16.5 16.5L11 22" stroke="black" stroke-width="2" stroke-linecap="round" />
          </svg>
        </button>
      </div>

      <div ref="tabContainer" class="offcanvas__tab">
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

      <div 
        class="offcanvas-body"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
      >
        <div class="tab-content">
          <div
            v-if="activeTab.content"
            class="txt-box"
            v-html="activeTab.content"
          ></div>

          <div
            v-if="activeTab.checkGroup && activeTab.checkGroup.length > 0" class="check-group"
          >
            <div 
              v-for="(check, cidx) in activeTab.checkGroup" 
              :key="cidx" 
              class="check"
            >
              <div class="title">
                <span>CHECK {{ cidx + 1 }}</span>
                <strong>{{ check.title }}</strong>
              </div>
              <div class="box-group">
                <div 
                  v-for="(box, bidx) in check.boxes" 
                  :key="bidx" 
                  class="box"
                >
                  <div class="title">{{ box.label }}</div>
                  <div class="txt">{{ box.desc }}</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from 'vue'
import type { ComponentPublicInstance } from 'vue'

defineProps({
  isOffcanvasAni: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close-detailOffcanvas'])

const currentTabIdx = ref(0)
const tabContainer = ref<HTMLDivElement | null>(null) 
const tabButtons = ref<HTMLButtonElement[]>([])

const indicatorStyle = ref({
  width: 0,
  left: 0
})

const startX = ref(0)
const startY = ref(0)
const endX = ref(0)
const endY = ref(0)
const minSwipeDistance = 50

const closeDetailOffcanvas = () => {
  emit('close-detailOffcanvas')
}

const qualityTabs = [
  { 
    name: '투자의견 요약',
    content: 'SK하이닉스는 HBM 중심의 구조적 이익 레벨 업, 2026~2027년 대규모 이익 성장과 40조원 자사주 매입·소각 및 FCF 50% 이상 환원 정책에 기반한 강력한 주주환원, 동종 업계 대비 낮은 PER 수준을 감안할 때 중장기 관점에서 매수 우위 종목으로 판단된다. 다만 단기적으로는 수급 부진과 AI 투자 사이클 변동, 경쟁 심화에 따른 변동성 리스크가 존재하므로 단기 레버리지 확대보다는 조정 시 분할 매수 전략이 합리적인 구간으로 판단된다.<br /><br />SK하이닉스는 HBM 중심의 구조적 이익 레벨 업, 2026~2027년 대규모 이익 성장과 40조원 자사주 매입·소각 및 FCF 50% 이상 환원 정책에 기반한 강력한 주주환원, 동종 업계 대비 낮은 PER 수준을 감안할 때 중장기 관점에서 매수 우위 종목으로 판단된다. 다만 단기적으로는 수급 부진과 AI 투자 사이클 변동, 경쟁 심화에 따른 변동성 리스크가 존재하므로 단기 레버리지 확대보다는 조정 시 분할 매수 전략이 합리적인 구간으로 판단된다.',
    checkGroup: []
  },
  { 
    name: '실적 및 펀더멘털',
    content: '실적 및 펀더멘털 내용.',
    checkGroup: []
  },
  { 
    name: '밸류에이션',
    content: '밸류에이션 내용.',
    checkGroup: []
  },
  { 
    name: '이슈와 모멘텀',
    content: '이슈와 모멘텀 내용.',
    checkGroup: []
  },
  { 
    name: '핵심근거',
    content: '',
    checkGroup: [
      {
        title: '이익성장',
        boxes: [
          { label: '근거', desc: '2026년 영업이익 258~267조원(+448~+467% YoY), 2027년 386~415조원(+52~+55% YoY) 컨센서스' },
          { label: '해석', desc: 'HBM·DRAM 가격 상승과 HBM4 양산에 따른 구조적 레벨 업' },
          { label: '투자시서점', desc: '중장기 실적 모멘텀 강해 매수 우위' }
        ]
      },
      {
        title: '이익·리비전 팩터',
        boxes: [
          { label: '근거', desc: '2026년 영업이익 258~267조원(+448~+467% YoY), 2027년 386~415조원(+52~+55% YoY) 컨센서스' },
          { label: '해석', desc: 'HBM·DRAM 가격 상승과 HBM4 양산에 따른 구조적 레벨 업' },
          { label: '투자시서점', desc: '중장기 실적 모멘텀 강해 매수 우위' }
        ]
      }
    ]
  }
]

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
    if (diffX > 0 && currentTabIdx.value < qualityTabs.length - 1) {
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

<style scoped>
  @import '~/assets/css/trigger-view/common.css';
</style>