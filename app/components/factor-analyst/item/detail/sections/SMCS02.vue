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

          <div v-if="item.isScore" class="score-box">
            <div class="score">
              <p>가장 높은 스코어</p>
              <strong class="up">{{ item.maxScore }}</strong>
              <span>{{ item.maxScorePeriod }} 기준</span>
            </div>
            <div class="score">
              <p>가장 낮은 스코어</p>
              <strong class="down">{{ item.minScore }}</strong>
              <span>{{ item.minScorePeriod }} 기준</span>
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
    title: '동종 업계와 비교하면?',
    subTitle: '동종 업계 종목 중 SK 하이닉스보다 수익률이 낮은 종목의 비율',
    isScore: true, 
    maxScore: '96.4',
    maxScorePeriod: '12개월',
    minScore: '12.5',
    minScorePeriod: '12개월',
    ranges: [
      { label: '3개월 업종', val: '85.4', score: 85.4 },
      { label: '6개월 업종', val: '88.0', score: 88.0 },
      { label: '12개월 업종', val: '96.4', score: 96.4 }
    ]
  },
  {
    title: '동일 테마와 비교하면?',
    subTitle: '동일 테마 종목 중 SK 하이닉스보다 수익률이 낮은 종목의 비율',
    isScore: false,
    ranges: [
      { label: '3개월 테마', val: '74.5', score: 74.5 },
      { label: '6개월 테마', val: '80.1', score: 80.1 },
      { label: '12개월 테마', val: '82.3', score: 82.3 }
    ]
  }
])
</script>