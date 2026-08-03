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
          <p v-html="item.description"></p>
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
    description: '네, 2026년 SK하이닉스의 당기순이익은 <strong class="up">1조 3500억</strong>이예요.  '
  },
  {
    question: '올해 영업으로 번 진짜 현금이 0보다 큰가?',
    isPass: true,
    description: '네, 2026년 SK하이닉스의 영업현금흐름은 <strong class="up">2500억</strong>이예요.  '
  },
  {
    question: '작년보다 자산 대비 이익률(ROA)이 좋아졌나?',
    isPass: false,
    description: '아니요, 2026년 자산 대비 이익률은 <strong class="up">+17.18%</strong>이고, 2025년 자산 대비 이익률은 <strong class="up">+25.21%</strong> 이예요.'
  },
  {
    question: '작년보다 빚(부채비율)이 줄었나?',
    isPass: false,
    description: '네, 2025년 부채비율은 <strong class="up">+25.21%</strong>이고, 2026년 부채비율은 <strong class="up">+12.12%</strong> 이예요.   '
  }
]
</script>