<template>
  <div class="content-section">
    <div class="title">
      <span>얼마나 올랐을까?</span>
      <h1>상대강도는?</h1>
    </div>
    
    <div class="list-group">
      <div 
        v-for="(item, idx) in itemList" 
        :key="idx" 
        class="list"
      >
        <div class="gray-box">
          <div class="box-title">
            <strong>{{ item.title }}</strong>
            <p>{{ item.subTitle }}</p>
          </div>

          <div 
            v-for="(range, rIdx) in item.ranges" 
            :key="rIdx" 
            class="range-wrap"
          >
            <div class="txt mb-1">
              <p>{{ range.label }}</p>
              <strong>{{ range.val }}</strong>
            </div>
            <div class="range">
              <div class="bar"></div>
              <div class="score" :style="{ width: `${range.score}%` }"></div>
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

const itemList = ref([
  {
    title: '전체 시장과 비교하면?',
    subTitle: '전체 종목 중 SK 하이닉스보다 수익률이 낮은 종목의 비율',
    isScore: false,
    ranges: [
      { label: '3개월 전체', val: '91.2', score: 91.2 },
      { label: '6개월 전체', val: '91.2', score: 91.2 },
      { label: '12개월 전체', val: '91.2', score: 91.2 }
    ]
  },
  {
    title: 'SK하이닉스가 속한 반도체 업종의 평균 스코어는?',
    subTitle: '반도체 업종 (총 32종목)에 속한 종목들의 평균 스코어',
    isScore: true, 
    ranges: [
      { label: '3개월 업종평균', val: '85.4', score: 85.4 },
      { label: '6개월 업종평균', val: '88.0', score: 88.0 },
      { label: '12개월 업종평균', val: '96.4', score: 96.4 }
    ]
  },
  {
    title: '같은 업종과 비교하면?',
    subTitle: '반도체 업종 안에서 SK 하이닉스보다 수익률이 낮은 종목의 비율',
    isScore: false,
    ranges: [
      { label: '3개월 업종', val: '74.5', score: 74.5 },
      { label: '6개월 업종', val: '80.1', score: 80.1 },
      { label: '12개월 업종', val: '82.3', score: 82.3 }
    ]
  }
])
</script>