<template>
  <div class="content-section">
    <div class="title">
      <span>배당을 얼마나 줄까?</span>
      <h1>배당은?</h1>
    </div>
    
    <div class="list-group">
      <div 
        v-for="(item, idx) in gpaList" 
        :key="idx" 
        class="list"
      >
        <div class="gpa-title">
          <p>{{ item.question }}</p>
          <span>{{ item.gpaScore }}</span>
        </div>
        <div class="gpa-txt">
          {{ item.description }}
        </div>
        <div class="gray-box">
          <p>{{ item.boxTxt }}</p>

          <div class="range-wrap">
            <div class="range">
              <div class="bar">
                <span class="avg"></span>
              </div>
              <div class="score" :style="{ width: `${item.score}%` }">
                <img
                  class="item-icon"
                  width="18"
                  src="~/assets/img/factor-analyst/main/item-circle.png"
                  alt="종목 아이콘"
                />
              </div>
            </div>
            <div class="txt">
              <span>0</span>
              <span>전종목 평균</span>
              <span>12000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import '~/assets/css/factor-analyst/common.css'

const gpaList = ref([
  {
    question: '최근 1년 동안 배당을 얼마나 줬을까?',
    gpaScore: 86.2,
    description: '최근 1년 배당금 총액 3조 2,000억을 시가총액 178조로 나눈 값이예요.',
    score: 86.2,
    boxTxt: '전 종목 중 SK하이닉스 배당의 위치는?'
  },
  {
    question: '반도체 섹터의 평균 스코어는?',
    gpaScore: 74.5,
    description: '반도체 섹터의 총 종목수는 32종목이고, 가장 높은 스코어는 99.2, 가장 낮은 스코어는 35.2 예요.',
    score: 74.5,
    boxTxt: '업종 내 SK하이닉스 배당의 위치는?'
  }
])
</script>