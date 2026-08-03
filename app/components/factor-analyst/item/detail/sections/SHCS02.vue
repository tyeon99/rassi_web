<template>
  <div class="content-section">
    <div class="title">
      <span>자사주를 사들이고 있을까?</span>
      <h1>자사주매입은?</h1>
    </div>

    <div class="list">
      <div class="gpa-title">
        <p>최근 3개월 동안 자사주를 사들였을까?</p>
        <span>86.2</span>
      </div>
      <div class="gpa-txt !mb-0">
        3개월 자사주 순매입액은 <span class="up">1,070억원</span>으로, <br />
        시가총액 178조원 대비 0.6%예요.
      </div>
    </div>

    <div class="list">
      <div class="gpa-title">
        <p>최근 12개월 동안도 꾸준히 사들였을까?</p>
        <span>86.2</span>
      </div>
      <div class="gpa-txt !mb-0">
        최근 12개월 자사주 순매입액은 <span class="up">4,070억원</span>으로, <br />
        시가총액 178조원 대비 2.4%예요.
      </div>
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
    subTitle: '전체 종목 중 SK하이닉스보다 자사주매입 비율이 낮은 종목의 비율',
    isScore: false,
    ranges: [
      { label: '3개월 전체', val: '91.2', score: 91.2 },
      { label: '12개월 전체', val: '91.2', score: 91.2 }
    ]
  },
  {
    title: 'SK하이닉스가 속한 반도체 업종의 평균 스코어는?',
    subTitle: '반도체 업종 (총 32종목)에 속한 종목들의 평균 스코어',
    isScore: true, 
    maxScore: '96.4',
    maxScorePeriod: '12개월',
    minScore: '12.5',
    minScorePeriod: '12개월',
    ranges: [
      { label: '3개월 업종평균', val: '85.4', score: 85.4 },
      { label: '12개월 업종평균', val: '88.0', score: 88.0 }
    ]
  },
  {
    title: '같은 업종과 비교하면?',
    subTitle: '반도체 업종 안에서 SK하이닉스보다 자사주매입 비율이 낮은 종목의 비율',
    isScore: false,
    ranges: [
      { label: '3개월 업종', val: '74.5', score: 74.5 },
      { label: '12개월 업종', val: '80.1', score: 80.1 }
    ]
  }
])
</script>