<template>
  <div class="detailSection">
    
    <div class="detailSection__calendar">
      <button class="prev"> <!-- 마지막 일때 'last' 클래스 추가 -->
        <img width="24" src="~/assets/img/my-portfolio/detail/arrow-icon.png" alt="이전 버튼">
      </button>
      <p>2026년 9월</p>
      <button class="next"> <!-- 마지막 일때 'last' 클래스 추가 -->
        <img width="24" src="~/assets/img/my-portfolio/detail/arrow-icon.png" alt="다음 버튼">
      </button>
    </div>

    <!-- 탭 네비게이션 -->
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

      <!-- 보유현황 탭 -->
      <div v-if="currentTabIdx === 0" class="current-situation">
        <div 
          v-for="(item, idx) in currentList01" 
          :key="idx" 
          class="box"
        >
          <div class="top">
            <div class="left">
              <img width="30" src="~/assets/img/my-portfolio/common/item-img.png" alt="종목 아이템">
              <div class="item">
                <div class="name">
                  <strong>{{ item.name }}</strong>
                  <span>{{ item.code }}</span>
                </div>
                <div class="date">
                  <p>{{ item.date }} 편입</p>
                  <span v-if="item.isNew">신규</span>
                </div>
              </div>
            </div>
            <div class="right">
              <span :class="item.rate >= 0 ? 'up' : 'down'">
                {{ item.rate >= 0 ? `+${item.rate}%` : `${item.rate}%` }}
              </span>
            </div>
          </div>

          <div class="range-wrap">
            <div class="txt">
              <p>
                비중 
                <strong :class="{ up: item.weight > 15 }">{{ item.weight }}%</strong>
              </p>
              <span v-if="item.weight > 15">상한 15%초과</span>
            </div>
            <div class="range">
              <div class="bar">
                <span class="avg"></span>
              </div>
              <div 
                class="score" 
                :class="{ up: item.weight > 15 }" 
                :style="{ width: `${Math.min((item.weight / 30) * 100, 100)}%` }"
              ></div>
            </div>
            <div class="txt">
              <p class="avg-txt" style="left: 50%;">15%</p>
            </div>
          </div>

          <div class="inner-box">
            <div class="txt-group">
              <p>
                <span>매수가</span>
                <strong>{{ item.buyPrice }}</strong>
              </p>
              <p>
                <span>보유수량</span>
                <strong>{{ item.quantity }}</strong>
              </p>
              <p>
                <span>평가금액</span>
                <strong>{{ item.totalPrice }}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- 매도현황 탭 -->
      <div v-if="currentTabIdx === 1" class="current-situation">

        <div class="gray-box">
          <div class="top">
            <div class="left">
              <span>리밸런싱 실현 손익</span>
              <strong class="up">+9,123,000원</strong>
            </div>
            <div class="right">9월 1일 (수)</div>
          </div>

          <div class="inner-box">
            <p>
              <span>매도</span>
              <strong>8종목</strong>
            </p>
            <p>
              <span>수익</span>
              <strong>7종목</strong>
            </p>
            <p>
              <span>손실</span>
              <strong>1종목</strong>
            </p>
            <p>
              <span class="!font-semibold">평균 수익률</span>
              <strong class="up !font-bold">+53.23%</strong>
            </p>
          </div>
        </div>

        <div 
          v-for="(item, idx) in sellList" 
          :key="idx" 
          class="box"
        >
          <div class="top">
            <div class="left">
              <img width="30" src="~/assets/img/my-portfolio/common/item-img.png" alt="종목 아이템">
              <div class="item">
                <div class="name">
                  <strong>{{ item.name }}</strong>
                  <span>{{ item.code }}</span>
                </div>
                <div class="date">
                  <p>{{ item.sellQuantity }} 매도</p>
                </div>
              </div>
            </div>
            <div class="right">
              <span :class="item.rate >= 0 ? 'up' : 'down'">
                {{ item.rate >= 0 ? `+${item.rate}%` : `${item.rate}%` }}
              </span>
            </div>
          </div>

          <div class="box-group">
            <div class="inner-box">
              <div class="buy-sell">
                <div class="txt">
                  <span class="up">매수</span>
                  <p>{{ item.buyDate }}</p>
                  <strong>{{ item.buyPrice }}</strong>
                </div>
                <div class="date">{{ item.holdingPeriod }}</div>
                <div class="txt">
                  <span class="down">매도</span>
                  <p>{{ item.sellDate }}</p>
                  <strong>{{ item.sellPrice }}</strong>
                </div>
              </div>
              <div class="bottom">
                <p>실현 손익</p>
                <p :class="item.realizedProfitAmount >= 0 ? 'up' : 'down'">
                  {{ item.realizedProfit }}
                </p>
              </div>
            </div>

            <div class="inner-box">
              <button class="top" @click="toggleMore(idx)">
                <p>정산내역</p>
                <img 
                  width="18" 
                  src="~/assets/img/my-portfolio/detail/more-icon01.png" 
                  alt="더보기"
                  :class="{ rotate: item.isOpen }"
                >
              </button>

              <Transition
                name="accordion"
                @enter="onAccordionEnter"
                @after-enter="onAccordionAfterEnter"
                @leave="onAccordionLeave"
              >
                <div v-show="item.isOpen" class="inner-more">
                  <div class="price-txt">
                    <p>
                      <span>매도금액 ({{ item.details.sellCalc }})</span>
                      <strong>{{ item.details.sellTotal }}</strong>
                    </p>
                    <p>
                      <span>매도세금 ({{ item.details.taxRate }})</span>
                      <strong>{{ item.details.taxTotal }}</strong>
                    </p>
                    <p>
                      <span>매수금액 ({{ item.details.buyCalc }})</span>
                      <strong>{{ item.details.buyTotal }}</strong>
                    </p>
                    <p>
                      <span>실현 손익</span>
                      <strong>{{ item.details.realizedProfit }}</strong>
                    </p>
                  </div>
                  <div class="bottom">
                    <p>실현 손익</p>
                    <p :class="item.realizedProfitAmount >= 0 ? 'up' : 'down'">
                      {{ item.details.realizedProfit }}
                    </p>
                  </div>
                </div>
              </Transition>
            </div>

          </div>
        </div>

      </div>

    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, type ComponentPublicInstance } from 'vue'
import '~/assets/css/my-portfolio/common.css'

interface StockItem {
  name: string
  code: string
  date: string
  isNew: boolean
  rate: number
  weight: number
  buyPrice: string
  quantity: string
  totalPrice: string
}

interface SettlementDetails {
  sellCalc: string
  sellTotal: string
  taxRate: string
  taxTotal: string
  buyCalc: string
  buyTotal: string
  realizedProfit: string
}

interface SellStockItem {
  name: string
  code: string
  sellQuantity: string
  rate: number
  buyDate: string
  buyPrice: string
  holdingPeriod: string
  sellDate: string
  sellPrice: string
  realizedProfit: string
  realizedProfitAmount: number
  isOpen: boolean
  details: SettlementDetails
}

const currentTabIdx = ref(0)
const tabContainer = ref<HTMLDivElement | null>(null) 
const tabButtons = ref<HTMLButtonElement[]>([])

const indicatorStyle = ref({
  width: 0,
  left: 0
})

const tabs = ['보유현황', '매도현황']

// 스와이프 관련 상태값
const startX = ref(0)
const startY = ref(0)
const endX = ref(0)
const endY = ref(0)
const minSwipeDistance = 50

// 보유현황
const currentList01 = ref<StockItem[]>([
  {
    name: '삼성전자',
    code: '000660',
    date: '26.08.30',
    isNew: true,
    rate: 22.82,
    weight: 17.8,
    buyPrice: '123,400원',
    quantity: '156주',
    totalPrice: '123,456,100원'
  },
  {
    name: '삼성전자',
    code: '000660',
    date: '26.08.30',
    isNew: false,
    rate: 22.82,
    weight: 14.8,
    buyPrice: '123,400원',
    quantity: '156주',
    totalPrice: '123,456,100원'
  },
  {
    name: '삼성전자',
    code: '000660',
    date: '26.08.30',
    isNew: false,
    rate: 22.82,
    weight: 17.8,
    buyPrice: '123,400원',
    quantity: '156주',
    totalPrice: '123,456,100원'
  },
  {
    name: '삼성전자',
    code: '000660',
    date: '26.08.30',
    isNew: false,
    rate: 22.82,
    weight: 14.8,
    buyPrice: '123,400원',
    quantity: '156주',
    totalPrice: '123,456,100원'
  }
])

// 매도현황
const sellList = ref<SellStockItem[]>([
  {
    name: '삼성전자',
    code: '000660',
    sellQuantity: '23주',
    rate: 5.23,
    buyDate: '26.08.03',
    buyPrice: '98,000원',
    holdingPeriod: '42일',
    sellDate: '26.10.03',
    sellPrice: '500,000원',
    realizedProfit: '+8,023,230원',
    realizedProfitAmount: 8023230,
    isOpen: true,
    details: {
      sellCalc: '11,500원*620주',
      sellTotal: '65,000,000원',
      taxRate: '0.25%',
      taxTotal: '-23,000원',
      buyCalc: '9,500원*620주',
      buyTotal: '-60,000,000원',
      realizedProfit: '+8,023,230원'
    }
  },
  {
    name: '삼성전자',
    code: '000660',
    sellQuantity: '23주',
    rate: 5.23,
    buyDate: '26.08.03',
    buyPrice: '98,000원',
    holdingPeriod: '4개월 2일',
    sellDate: '26.10.03',
    sellPrice: '500,000원',
    realizedProfit: '+8,023,230원',
    realizedProfitAmount: 8023230,
    isOpen: false, 
    details: {
      sellCalc: '11,500원*620주',
      sellTotal: '65,000,000원',
      taxRate: '0.25%',
      taxTotal: '-23,000원',
      buyCalc: '9,500원*620주',
      buyTotal: '-60,000,000원',
      realizedProfit: '+8,023,230원'
    }
  }
])

// 아코디언 토글 함수
const toggleMore = (index: number) => {
  const item = sellList.value[index]
  if (item) {
    item.isOpen = !item.isOpen
  }
}

const onAccordionEnter = (el: Element) => {
  const element = el as HTMLElement
  element.style.height = '0px'
  element.style.overflow = 'hidden'
  element.style.transition = 'height 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
  element.offsetHeight
  element.style.height = `${element.scrollHeight}px`
}

const onAccordionAfterEnter = (el: Element) => {
  const element = el as HTMLElement
  element.style.height = ''
  element.style.overflow = ''
  element.style.transition = ''
}

const onAccordionLeave = (el: Element) => {
  const element = el as HTMLElement
  element.style.height = `${element.scrollHeight}px`
  element.style.overflow = 'hidden'
  element.style.transition = 'height 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
  element.offsetHeight
  element.style.height = '0px'
}

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