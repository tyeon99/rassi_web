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
            @click="goToDetail(chart.itemStyle)"
            class="chart"
          >
            <p>{{ chart.itemStyle }}</p>

            <!-- 도넛차트 -->
            <div v-if="chart.isPayment" class="donut">
              <img width="135" src="~/assets/img/factor-analyst/item/donut-chart.png" alt="도넛차트">
            </div>

            <!-- 결제정보 없을 때 -->
            <div v-else class="no-payment">
              <img width="24" src="~/assets/img/factor-analyst/item/question-icon.png" alt="물음표 아이콘">
              <span>눌러서<br />종목 스타일을<br />확인해 보세요.</span>
            </div>

            <div class="analyze">
              <span>분석</span>
              <p>{{ chart.isPayment ? chart.analyzeTxt : '-' }}</p>
            </div>

          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import '~/assets/css/factor-analyst/common.css'

const router = useRouter()

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
      { itemStyle: '퀄리티', isPayment: true, analyzeTxt: '튼튼하지만 수익 낮은 퀄리티' },
      { itemStyle: '주가모멘텀', isPayment: false, analyzeTxt: '단기조정' }
    ]
  },
  {
    roundNum: 2,
    title: '수익성 및 성장성 분석',
    charts: [
      { itemStyle: '실적모멘텀', isPayment: true, analyzeTxt: '실적 개선 기대' },
      { itemStyle: '미래전망', isPayment: true, analyzeTxt: '전망 상향' }
    ]
  },
  {
    roundNum: 3,
    title: '주가 변동 및 위험도',
    charts: [
      { itemStyle: '밸류에이션', isPayment: true, analyzeTxt: '고평가 구간' },
      { itemStyle: '수급', isPayment: true, analyzeTxt: '거래는 활발' }
    ]
  },
  {
    roundNum: 4,
    title: '시장 관심도 및 수급',
    charts: [
      { itemStyle: '주주환원', isPayment: true, analyzeTxt: '배당 높음 자사주 매입 저조' },
      { itemStyle: '초저평가', isPayment: true, analyzeTxt: '청산가치 보다 낮음' }
    ]
  },
  {
    roundNum: 5,
    title: '밸류에이션 평가',
    charts: [
      { itemStyle: '저변동성', isPayment: false, analyzeTxt: '변동성 전환' },
      { itemStyle: '낙폭과대', isPayment: true, analyzeTxt: '과매도 구간' }
    ]
  }
]
</script>