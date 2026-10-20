<template>
  <div class="detailSection">
    <div class="detailSection__title">포트폴리오 운용 안내</div>

    <div class="guide-box">
      <p 
        v-for="(item, idx) in guideList" 
        :key="idx"
      >
        <span>{{ item.label }}</span>
        <strong>{{ item.value }}</strong>
      </p>
    </div>

    <div class="guide-txt">
      <p>
        ※ 리밸런싱일에만 매매하고, 매도 신호가 나지 않으면 그대로 유지해요.
      </p>
      <p>
        ※ 배당 수익금은 수익률 계산에 포함되지 않았어요. 실제 투자 수익률은 표시된 수익률보다 더 높을 수 있어요.
      </p>
    </div>

  </div>
</template>

<script setup lang="ts">
import '~/assets/css/my-portfolio/common.css'

interface GuideItem {
  label: string
  value: string
}

const guideList: GuideItem[] = [
  { label: '운용 기간', value: '2021.01.04~ 2026.09.02' },
  { label: '리밸런싱', value: '매월 첫 영업일' },
  { label: '보유 종목 수', value: '최대 10종목' },
  { label: '신규 매수 비중', value: '종목당 전체의 15% 상한' },
  { label: '매도 비용', value: '매도 시 세금 0.25% 반영' },
  { label: '배당 수익금', value: '미포함' }
]
</script>