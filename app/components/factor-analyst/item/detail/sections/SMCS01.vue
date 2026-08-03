<template>
  <div class="content-section">
    <div class="title">
      <span>얼마나 올랐을까?</span>
      <h1>수익률은?</h1>
    </div>
    
    <div class="box-group">
      <div 
        v-for="(item, idx) in rateList" 
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
          
          <div class="white-box">
            <div class="price current">
              <p>현재가</p>
              <strong>{{ item.currentPrice.toLocaleString() }}원</strong>
            </div>
            <div class="price">
              <p>{{ item.period }}</p>
              <strong>{{ item.pastPrice.toLocaleString() }}원</strong>
              <p>대비</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import '~/assets/css/factor-analyst/common.css'

const rateList = [
  {
    question: '최근 3개월 동안 주가가 올랐을까?',
    isPass: true,
    description: '네, SK하이닉스의 최근 3개월 수익률은 <strong class="up">+18.7%</strong> 예요.',
    period: '3개월 전',
    currentPrice: 1700000,
    pastPrice: 1500000
  },
  {
    question: '최근 6개월 동안도 상승세가 이어졌을까?',
    isPass: true,
    description: '네, SK하이닉스의 최근 6개월 수익률은 <strong class="up">+25.4%</strong> 예요.',
    period: '6개월 전',
    currentPrice: 1700000,
    pastPrice: 1355000
  },
  {
    question: '장기적으로도 좋은 흐름을 유지했을까?',
    isPass: false,
    description: '아니요, SK하이닉스의 최근 12개월 수익률은 <strong class="down">-5.2%</strong> 예요.',
    period: '12개월 전',
    currentPrice: 1700000,
    pastPrice: 1793000
  }
]
</script>