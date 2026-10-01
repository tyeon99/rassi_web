<template>
  <div class="content-section">
    <div class="title">
      <span>얼마나 올랐을까?</span>
      <h1>수익률 OX</h1>
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
              <p>기준일 종가</p>
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
    question: '3개월 전보다 주가가 올랐을까?',
    isPass: false,
    description: 'SK하이닉스의 최근 3개월 수익률은 <strong class="down">-21.07%</strong>이에요.',
    period: '3개월 전',
    currentPrice: 1700000,
    pastPrice: 1500000
  },
  {
    question: '6개월 전보다 주가가 올랐을까?',
    isPass: true,
    description: 'SK하이닉스의 최근 6개월 수익률은 <strong class="up">+86.48%</strong>이에요.',
    period: '3개월 전',
    currentPrice: 1700000,
    pastPrice: 1500000
  },
  {
    question: '12개월 전보다 주가가 올랐을까?',
    isPass: true,
    description: 'SK하이닉스의 최근 12개월 수익률은 <strong class="up">+416.59%</strong>이에요.',
    period: '3개월 전',
    currentPrice: 1700000,
    pastPrice: 1500000
  }
]
</script>