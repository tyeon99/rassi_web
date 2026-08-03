<template>
  <div class="content-section">
    <div class="title">
      <span>청산가치보다 저평가일까?</span>
      <h1>NCAV 스크리닝은?</h1>
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
          
          <div class="calculate-wrap">
            <div class="white-box">
              <div class="top">
                <p>순유통자산</p>
                <strong>4,900억</strong>
              </div>
              <div class="bottom">
                <div class="txt">
                  <p>유동자산</p>
                  <strong>8,200억</strong>
                </div>
                <img width="19" src="~/assets/img/factor-analyst/detail/minus.png" alt="마이너스">
                <div class="txt">
                  <p>총부채</p>
                  <strong>3,100억</strong>
                </div>
                <img width="19" src="~/assets/img/factor-analyst/detail/minus.png" alt="마이너스">
                <div class="txt">
                  <p>우선주</p>
                  <strong>0</strong>
                </div>
                <img width="19" src="~/assets/img/factor-analyst/detail/minus.png" alt="마이너스">
                <div class="txt">
                  <p>비지배지분</p>
                  <strong>200억</strong>
                </div>
              </div>
            </div>

            <div class="white-box">
              <div class="top">
                <p>NCAV 비율</p>
                <strong>3,800억</strong>
              </div>
              <div class="bottom">
                <div class="txt">
                  <p class="border-b">순유동자산 (NCAV)</p>
                  <strong>시가총액</strong>
                </div>
                <img width="19" src="~/assets/img/factor-analyst/detail/equal.png" alt="마이너스">
                <div class="txt">
                  <p class="border-b">4,900억</p>
                  <strong>3,800억</strong>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    
    <div class="list-group">
      <div 
        v-for="(item, idx) in gpaList" 
        :key="idx" 
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
import '~/assets/css/factor-analyst/common.css'

const rateList = [
  {
    question: '순유동자산(NCAV)이 시가총액보다 큰가요?',
    isPass: true,
    description: '네, SK하이닉스를 지금 당장 청산해도 남는 자산이 시가총액보다 <strong class="up">1.29배</strong> 많아요.'
  }
]

const gpaList = ref([
  {
    score: 86.2,
    boxTxt: '전 종목 중 SK하이닉스 NCAV 비율의 위치는?'
  }
])
</script>