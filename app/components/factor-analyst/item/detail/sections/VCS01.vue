<template>
  <div class="content-section">
    <div class="title">
      <span>번 돈에 비해 주가가 얼마나 저평가 되어 있는가?</span>
      <h1>이익수익률(EY) 점수는?</h1>
    </div>

    <div class="gray-box">
      <div class="box-title">
        <strong>과거 나와 비교한 EY 점수는?</strong>
        <p>EY점수는 순이익/시가총액 (=1/PER)로 수익가치의 점수예요.</p>
      </div>
      <div class="score-wrap">
        <div 
          v-for="(compare, cIdx) in pastComparisons" 
          :key="cIdx" 
          class="box"
        >
          <div class="top">{{ compare.type }}</div>
          <div class="bottom">
            <div 
              v-for="(sItem, sIdx) in compare.scores" 
              :key="sIdx" 
              class="score"
            >
              <span>{{ sItem.year }}</span>
              <p>{{ sItem.val }}</p>
            </div>
          </div>
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
import '~/assets/css/factor-analyst/common.css'

const pastComparisons = ref([
  {
    type: '전망대비',
    scores: [
      { year: '1년전', val: '91.2' },
      { year: '2년전', val: '81.2' },
      { year: '3년전', val: '71.2' }
    ]
  },
  {
    type: '실적대비',
    scores: [
      { year: '1년전', val: '91.2' },
      { year: '2년전', val: '71.2' },
      { year: '3년전', val: '81.2' }
    ]
  }
])

const itemList = ref([
  {
    title: '같은 업종과 비교하면?',
    subTitle: '이익 기준 EY를 같은 업종 회사들과 비교',
    isScore: false,
    ranges: [
      { label: '향후 12개월 동안의 전망으로 비교', val: '88.4', score: 88.4 },
      { label: '지난 12개월 동안의 실적으로 비교', val: '88.4', score: 88.4 }
    ]
  },
  {
    title: 'SK하이닉스의 EY 스코어 위치는?',
    isScore: false,
    ranges: [
      { label: '예상 실적의 스코어', val: '91.2', score: 91.2 },
      { label: '누적 실적의 스코어', val: '91.2', score: 91.2 }
    ]
  }
])
</script>