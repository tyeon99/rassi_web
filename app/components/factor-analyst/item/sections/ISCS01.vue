<template>
  <div class="itemStyleContent__section">
    <div class="itemStyleContent__section--title">
      SK하이닉스의 종목 스타일은?
    </div>
    <div class="itemStyleContent__section--txt">
      퀄리티, 실적모멘텀, 저변동성 3개의 종목 스타일이 포착되었어요.
      해당 종목 스타일을 눌러 포착된 내용을 확인해 보세요.
    </div>
    <div class="itemStyleContent__section--content">
      <div 
        v-for="(box, idx) in roundBoxes" 
        :key="idx" 
        class="box"
      >
        <span class="round">라운드{{ box.roundNum }}</span>
        <div class="box-title text-center">{{ box.title }}</div>
        
        <div class="donut-chart">
          <button 
            v-for="(chart, cIdx) in box.charts" 
            :key="cIdx" 
            @click="openItemStyleDetailOffcanvas"
            class="chart"
          >
            <!-- 도넛차트 -->
            <div v-if="chart.isPayment" class="donut">
              <img width="135" src="~/assets/img/factor-analyst/item/donut-chart.png" alt="도넛차트">
            </div>

            <!-- 결제정보 없을 때 -->
            <div v-else class="no-payment">
              <img width="24" src="~/assets/img/factor-analyst/item/question-icon.png" alt="물음표 아이콘">
              <span>눌러서<br />종목 스타일을<br />확인해 보세요.</span>
            </div>

            <!-- 낙폭과대 -->
            <!-- <div class="signal">
              <img width="60" src="~/assets/img/factor-analyst/item/signal.png" alt="낙폭과대">
              <p>과매도 구간</p>
            </div> -->

            <!-- 낙폭과대 신호없음 -->
            <!-- <div class="signal">
              <img width="60" src="~/assets/img/factor-analyst/item/no-signal.png" alt="낙폭과대">
              <p>신호없음</p>
            </div> -->

            <p>{{ chart.label }}</p>
          </button>
        </div>
      </div>
    </div>
    <ItemStyleDetailOffcanvas 
      v-if="isItemStyleDetailOffcanvasOpen"
      :isOffcanvasAni="isOffcanvasAni"
      @close-itemStyleDetailOffcanvas="closeItemStyleDetailOffcanvas"
    />
  </div>
</template>

<script setup lang="ts">
import '~/assets/css/factor-analyst/common.css'
import ItemStyleDetailOffcanvas from '~/components/factor-analyst/offcanvas/ItemStyleDetailOffcanvas.vue'

const isItemStyleDetailOffcanvasOpen = ref(false)
const isOffcanvasAni = ref(false)

const roundBoxes = [
  {
    roundNum: 1,
    title: '이 회사가 돈 버는 능력',
    charts: [
      { label: '퀄리티', isPayment: true },
      { label: '미래전망', isPayment: false }
    ]
  },
  {
    roundNum: 2,
    title: '수익성 및 성장성 분석',
    charts: [
      { label: '실적모멘텀', isPayment: true },
      { label: '성장성', isPayment: true }
    ]
  },
  {
    roundNum: 3,
    title: '주가 변동 및 위험도',
    charts: [
      { label: '저변동성', isPayment: true },
      { label: '안정성', isPayment: true }
    ]
  },
  {
    roundNum: 4,
    title: '시장 관심도 및 수급',
    charts: [
      { label: '수급선행', isPayment: true },
      { label: '거래대금', isPayment: true }
    ]
  },
  {
    roundNum: 5,
    title: '밸류에이션 평가',
    charts: [
      { label: '저평가', isPayment: false },
      { label: '배당성향', isPayment: true }
    ]
  }
]

// 종목 스타일 상세보기 열기
const openItemStyleDetailOffcanvas = () => {
  isOffcanvasAni.value = true
  isItemStyleDetailOffcanvasOpen.value = true
}

// 종목 스타일 상세보기 닫기
const closeItemStyleDetailOffcanvas = () => {
  isOffcanvasAni.value = false
  setTimeout(() => {
    isItemStyleDetailOffcanvasOpen.value = false
  }, 300)
}

watch(isItemStyleDetailOffcanvasOpen, (isOpen) => {
  if (isOpen) {
    document.body.classList.add('scroll-lock')
  } else {
    document.body.classList.remove('scroll-lock')
  }
})
</script>