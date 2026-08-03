<template>
  <div class="content-section">
    <div class="title">
      <span>이 회사 장부는 괜찮을까?</span>
      <h1>F스코어 OX</h1>
    </div>
    
    <div class="box-group">
      <div 
        v-for="(item, idx) in fScoreList" 
        :key="idx" 
        class="box"
      >
        <div class="box-title">
          <span>Q</span>
          <p>{{ item.question }}</p>
        </div>
        <div class="inner-box">
          <span 
            :class="item.isPass ? 'pass' : 'fail'"
          >
            {{ item.isPass ? 'PASS' : 'FAIL' }}
          </span>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import '~/assets/css/factor-analyst/common.css'

const fScoreList = [
  {
    question: '올해 당기순이익은 0보다 큰가?',
    isPass: true,
    description: '최근 당기순이익은 1조 3,500억원으로 전년 대비 증가했습니다.'
  },
  {
    question: '영업활동 현금흐름이 양수(+)인가?',
    isPass: true,
    description: '영업활동 현금흐름이 2조 1,000억원으로 유입되었습니다.'
  },
  {
    question: '전년 대비 순이익률(ROA)이 증가했는가?',
    isPass: false,
    description: '원가 상승으로 인해 순이익률이 전년 대비 1.2%p 감소했습니다.'
  },
  {
    question: '장기부채 비율이 전년 대비 감소했는가?',
    isPass: false,
    description: '신규 설비 투자 자금 조달로 인해 부채 비율이 상승했습니다.'
  }
]
</script>