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
        
        <div class="chart-group">
          <div 
            v-for="(chart, cIdx) in box.charts" 
            :key="cIdx" 
            @click="goToDetail(chart.itemStyle)"
            class="chart"
          >

            <div class="txt">
              <p>{{ chart.itemStyle }}</p>
            </div>

            <!-- 도넛차트 -->
            <div v-if="chart.isPayment" class="donut-chart">
              <svg class="w-full h-[88px] max-w-[135px]" viewBox="0 0 100 65">
                <path
                  d="M 10,50 A 40,40 0 0,1 90,50"
                  fill="none"
                  stroke="#E8EDF7"
                  stroke-width="8"
                  stroke-linecap="round"
                />
                <path
                  d="M 10,50 A 40,40 0 0,1 90,50"
                  fill="none"
                  stroke="#6565FF"
                  stroke-width="8"
                  stroke-linecap="round"
                  :stroke-dasharray="125.66"
                  :stroke-dashoffset="isLoaded ? getDashOffset(chart.score) : 125.66"
                  class="transition-all duration-1000 ease-out"
                />
                <g
                  class="transition-transform duration-1000 ease-out origin-[50px_50px]"
                  :style="{
                    transform: `rotate(${isLoaded ? getRotationAngle(chart.score) : 0}deg)`,
                    transformOrigin: '50px 50px'
                  }"
                >
                  <circle
                    cx="10"
                    cy="50"
                    r="6"
                    fill="#FFFFFF"
                    stroke="#6565FF"
                    stroke-width="3"
                  />
                </g>
              </svg>
              <span>
                {{ chart.score }}
              </span>
            </div>

            <!-- 스코어가 포함된 차트 -->
            <!-- <div class="chart-score">
              //// 차트영역 (밑에 스코어 빼고 위에부분 차트 묶음만 넣으면 될 거 같아여) /////
              <span>92.8</span>
            </div> -->

            <div v-if="chart.isPayment" class="txt">
              <span>{{ chart.isPayment ? chart.analyzeTxt : '신호없음' }}</span>
              <button>분석보기</button>
            </div>

            <!-- 결제정보 없을 때 -->
            <div v-else class="no-payment">
              <img width="24" src="~/assets/img/factor-analyst/item/question-icon.png" alt="물음표 아이콘">
              <span>눌러서<br />종목 스타일을<br />확인해 보세요.</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import '~/assets/css/factor-analyst/common.css'

const router = useRouter()

const isLoaded = ref(false)

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true
  }, 100)
})

// 점수에 따른 반원 svg
const getDashOffset = (score: number = 0) => {
  const circumference = 125.66
  const progress = Math.min(Math.max(score, 0), 100) / 100
  return circumference * (1 - progress)
}

// 점수에 따른 동그라미 노브
const getRotationAngle = (score: number = 0) => {
  const progress = Math.min(Math.max(score, 0), 100) / 100
  return progress * 180
}

const typeMap: Record<string, string> = {
  '퀄리티': 'quality',
  '주가모멘텀': 'stock-momentum',
  '실적모멘텀': 'earnings-momentum',
  '미래전망': 'outlook',
  '밸류에이션': 'valuation',
  '수급': 'supply',
  '주주환원': 'shareholder',
  '초저평가': 'underrated',
  '저변동성': 'low-vol',
  '낙폭과대': 'oversold'
}

const goToDetail = (itemStyle: string) => {
  const typeParam = typeMap[itemStyle]
  
  if (typeParam) {
    router.push(`/factor-analyst/item/style/detail/${typeParam}`)
  } else {
    console.warn(`[Warning] '${itemStyle}'에 해당하는 URL type 매핑이 없습니다.`)
  }
}

const roundBoxes = [
  {
    roundNum: 1,
    title: '이 회사가 돈 버는 능력',
    charts: [
      { itemStyle: '퀄리티', isPayment: true, score: 85.6, analyzeTxt: '튼튼하지만 수익 낮은 퀄리티' },
      { itemStyle: '주가모멘텀', isPayment: false, score: 0, analyzeTxt: '단기조정' }
    ]
  },
  {
    roundNum: 2,
    title: '수익성 및 성장성 분석',
    charts: [
      { itemStyle: '실적모멘텀', isPayment: true, score: 85.6, analyzeTxt: '실적 개선 기대' },
      { itemStyle: '미래전망', isPayment: true, score: 85.6, analyzeTxt: '전망 상향' }
    ]
  },
  {
    roundNum: 3,
    title: '주가 변동 및 위험도',
    charts: [
      { itemStyle: '밸류에이션', isPayment: true, score: 62.4, analyzeTxt: '고평가 구간' },
      { itemStyle: '수급', isPayment: true, score: 78.1, analyzeTxt: '거래는 활발' }
    ]
  },
  {
    roundNum: 4,
    title: '시장 관심도 및 수급',
    charts: [
      { itemStyle: '주주환원', isPayment: true, score: 45.0, analyzeTxt: '배당 높음 자사주 매입 저조' },
      { itemStyle: '초저평가', isPayment: true, score: 91.2, analyzeTxt: '청산가치 보다 낮음' }
    ]
  },
  {
    roundNum: 5,
    title: '밸류에이션 평가',
    charts: [
      { itemStyle: '저변동성', isPayment: false, score: 0, analyzeTxt: '변동성 전환' },
      { itemStyle: '낙폭과대', isPayment: true, score: 88.0, analyzeTxt: '과매도 구간' }
    ]
  }
]
</script>