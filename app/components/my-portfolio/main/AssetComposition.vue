<template>
  <div class="mainSection">

    <div class="mainSection__title">
      <strong>자산 구성</strong>
      <span>총 123,456,789원</span>
    </div>

    <div class="chart-group">
      
      <div class="donut-chart">
        <svg viewBox="0 0 100 100" class="circular-chart">
          <path 
            class="circle-bg"
            d="M 50 5 A 45 45 0 0 1 50 95 A 45 45 0 0 1 50 5"
          />
          <path 
            class="circle"
            :stroke-dasharray="`${(stockPercent * 282.7) / 100}, 282.7`"
            d="M 50 5 A 45 45 0 0 1 50 95 A 45 45 0 0 1 50 5"
          />
        </svg>
        <div class="donut-txt">
          <span>주식</span>
          <strong>{{ stockPercent }}%</strong>
        </div>
      </div>

      <div class="chart-legend">
        <div class="legend-item">
          <div class="top">
            <span class="stock"></span>
            <p>주식 평가 금액({{ stockCount }}종목)</p>
          </div>
          <strong>{{ stockRate }}%</strong>
        </div>

        <div class="legend-item">
          <div class="top">
            <span></span>
            <p>현금({{ cashPercent }}%)</p>
          </div>
          <strong>{{ cashAmount.toLocaleString() }}원</strong>
        </div>
      </div>

    </div>

    <div class="rebalancing-box">
      
      <div class="top">
        <div class="left">
          <img width="45" src="~/assets/img/my-portfolio/main/calendar-icon02.png" alt="달력">
          <div class="txt">
            <span>다음 리밸런싱</span>
            <strong>{{ nextRebalanceDate }}</strong>
          </div>
        </div>
        <div class="d-day">
          D-{{ dDay }}
        </div>
      </div>

      <div class="gauge-wrap">
        <div class="gauge-bar">
          <div class="gauge-fill" :style="{ width: `${progressPercent}%` }"></div>
        </div>
        <div class="gauge-txt">
          <span>{{ lastRebalanceDateText }} 리밸런싱</span>
          <span>{{ nextRebalanceDateText }} 예정</span>
        </div>
      </div>

      <div class="bottom">
        <p>나의 리밸런싱 주기는 <strong>{{ rebalancePeriod }}</strong>이에요</p>
        <button>
          <span>캘린더 보기</span>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <use xlink:href="#stroke0_745_6687" stroke="#788591"/>
            <use xlink:href="#stroke0_745_6687" stroke="black" stroke-opacity="0.2"/>
            <use xlink:href="#stroke0_745_6687" stroke="black" stroke-opacity="0.2"/>
            <use xlink:href="#stroke0_745_6687" stroke="black" stroke-opacity="0.2"/>
            <use xlink:href="#stroke0_745_6687" stroke="black" stroke-opacity="0.2"/>
            <use xlink:href="#stroke0_745_6687" stroke="black" stroke-opacity="0.2"/>
            <defs>
            <path id="stroke0_745_6687" d="M7.5 12.75L11.25 9L7.5 5.25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </defs>
          </svg>
        </button>
      </div>

    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import '~/assets/css/my-portfolio/common.css'

const stockPercent = ref(72.9)
const stockCount = ref(9)
const stockRate = ref(39.85)
const cashPercent = ref(7.3)
const cashAmount = ref(123123)

const dDay = ref(20)
const nextRebalanceDate = ref('10월 23일 (화)')
const progressPercent = ref(70) 
const lastRebalanceDateText = ref('9.23')
const nextRebalanceDateText = ref('10.23')
const rebalancePeriod = ref('한 달')
</script>