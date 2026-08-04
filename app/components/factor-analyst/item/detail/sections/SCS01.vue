<template>
  <div class="content-section">
    <div class="title">
      <span>매수세가 꾸준히 쌓이고 있을까?</span>
      <h1>순매수지속성은?</h1>
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
          <span :class="item.isPass ? 'pass' : 'fail'">
            {{ item.isPass ? 'PASS' : 'FAIL' }}
          </span>
          <p v-html="item.description"></p>
        </div>
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

          <div class="period-group">
            <div
              v-for="(group, gIdx) in item.periodGroups"
              :key="gIdx"
              class="range-group"
            >
              <span class="period">{{ group.period }}</span>
              <div 
                v-for="(range, rIdx) in group.ranges" 
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
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import '~/assets/css/factor-analyst/common.css'

const rateList = [
  {
    question: '외국인이 최근 1주 동안 계속 사들였을까?',
    isPass: true,
    description: '외국인 1주 누적 순매수대금은 <strong class="up">1,800억</strong>원이에요.'
  },
  {
    question: '기관이 최근 1주 동안 계속 사들였을까?',
    isPass: true,
    description: '기관 1주 누적 순매수대금은 <strong class="down">-320억</strong>원으로, 순매도였어요.'
  },
  {
    question: '외국인이 최근 1개월 동안 계속 사들였을까?',
    isPass: false,
    description: '외국인 1개월 누적 순매수대금은 <strong class="up">9,500억</strong>원이에요.'
  },
  {
    question: '기관이 최근 1개월 동안 계속 사들였을까?',
    isPass: true,
    description: '기관 1개월 누적 순매수대금은 <strong class="up">2,100억</strong>원이에요.'
  },
  {
    question: '외국인이 최근 3개월 동안 계속 사들였을까?',
    isPass: true,
    description: '외국인 3개월 누적 순매수대금은 2조 1,000억원으로, 유동시총 대비 <strong class="up">4.8%</strong>예요.'
  },
  {
    question: '기관이 최근 3개월 동안 계속 사들였을까?',
    isPass: false,
    description: '기관 3개월 누적 순매수대금은 8,200억원으로, 유동시총 대비 <strong class="up">1.9%</strong>예요'
  }
]

const itemList = ref([
  {
    title: '전체 시장과 비교하면?',
    subTitle: '전체 종목 중 SK하이닉스보다 외국인 순매수가 더 이어졌던 종목의 비율, 그리고 기관 순매수가 더 이어졌던 종목의 비율',
    isScore: false,
    periodGroups: [
      {
        period: '1주',
        ranges: [
          { label: '외국인 전체', val: '91.2', score: 91.2 },
          { label: '기관 전체', val: '91.2', score: 91.2 }
        ]
      },
      {
        period: '1개월',
        ranges: [
          { label: '외국인 전체', val: '91.2', score: 91.2 },
          { label: '기관 전체', val: '91.2', score: 91.2 }
        ]
      },
      {
        period: '3개월',
        ranges: [
          { label: '외국인 전체', val: '91.2', score: 91.2 },
          { label: '기관 전체', val: '91.2', score: 91.2 }
        ]
      }
    ]
  },
  {
    title: 'SK하이닉스가 속한 반도체 업종의 평균은?',
    subTitle: '반도체 업종 (총 32종목)에 속한 종목들의 평균 스코어',
    isScore: false,
    periodGroups: [
      {
        period: '1주',
        ranges: [
          { label: '외국인 업종평균', val: '85.0', score: 85.0 },
          { label: '기관 업종평균', val: '78.4', score: 78.4 }
        ]
      },
      {
        period: '1개월',
        ranges: [
          { label: '외국인 업종평균', val: '88.2', score: 88.2 },
          { label: '기관 업종평균', val: '80.1', score: 80.1 }
        ]
      },
      {
        period: '3개월',
        ranges: [
          { label: '외국인 업종평균', val: '94.5', score: 94.5 },
          { label: '기관 업종평균', val: '82.0', score: 82.0 }
        ]
      }
    ]
  },
  {
    title: '같은 업종과 비교하면?',
    subTitle: '반도체 업종 안에서 SK하이닉스보다 외국인 순매수가 더 이어졌던 종목의 비율, 그리고 기관 순매수가 더 이어졌던 종목의 비율',
    isScore: false,
    periodGroups: [
      {
        period: '1주',
        ranges: [
          { label: '외국인 전체', val: '76.2', score: 76.2 },
          { label: '기관 전체', val: '70.5', score: 70.5 }
        ]
      },
      {
        period: '1개월',
        ranges: [
          { label: '외국인 전체', val: '81.0', score: 81.0 },
          { label: '기관 전체', val: '73.2', score: 73.2 }
        ]
      },
      {
        period: '3개월',
        ranges: [
          { label: '외국인 전체', val: '89.4', score: 89.4 },
          { label: '기관 전체', val: '75.0', score: 75.0 }
        ]
      }
    ]
  }
])
</script>