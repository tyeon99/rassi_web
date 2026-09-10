<template>
  <div class="content-section">
    <div class="title">
      <span>배당을 얼마나 줄까?</span>
      <h1>배당은?</h1>
    </div>

    <div 
      v-for="(info, iIdx) in infoList" 
      :key="iIdx" 
      class="list"
    >
      <div class="gpa-title">
        <p>{{ info.question }}</p>
        <span>{{ info.gpaScore }}</span>
      </div>
      <div class="gpa-txt !mb-0" v-html="info.description"></div>
    </div>

    <div class="list-group">
      <div 
        v-for="(item, cIdx) in chartList" 
        :key="cIdx" 
        class="list"
      >
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
// style
import '~/assets/css/factor-analyst/common.css'

const infoList = ref([
  {
    question: '최근 1년 동안 배당을 얼마나 줬을까?',
    gpaScore: 86.2,
    description: '배당수익률은 <strong>0.7%</strong>이고 최근 1년 배당금 총액 <strong>3조 2,000억</strong>원을 시가총액 <strong>178조</strong>원으로 나눈 값이에요.'
  },
  {
    question: '반도체 섹터의 평균 스코어는?',
    gpaScore: 74.5,
    description: '반도체 섹터의 총 종목수는 <strong>32종목</strong>이고, 가장 높은 스코어는 <strong>99.2</strong>, 가장 낮은 스코어는 <strong>35.2</strong> 예요.'
  }
])

const chartList = ref([
  {
    boxTxt: '전 종목 중 SK하이닉스 배당의 위치는?',
    score: 86.2
  },
  {
    boxTxt: '업종 내 SK하이닉스 배당의 위치는?',
    score: 74.5
  }
])
</script>