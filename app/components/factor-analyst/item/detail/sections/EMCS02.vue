<template>
  <div class="content-section">
    <div class="title">
      <span>앞으로 12개월, 더 좋아질까?</span>
      <h1>실적 전망은?</h1>
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

const rateList = [
  {
    question: '매출 전망이 좋아질까?',
    isPass: true,
    description: '향후 12개월 매출 컨센서스는 35.8조원으로, 최근 실적 32.0조원 대비 늘어날 전망이에요. 시가총액 대비로 환산하면 <strong class="up">+2.13%p</strong>예요.'
  },
  {
    question: '영업이익 전망이 좋아질까?',
    isPass: true,
    description: '향후 12개월 영업이익 컨센서스는 10.6조원으로, 최근 실적 8.9조원 대비 늘어날 망이에요. 시가총액 대비로 환산하면 <strong class="up">+0.96%p</strong>예요.'
  },
  {
    question: '당기순이익 전망이 좋아질까?',
    isPass: false,
    description: '향후 12개월 당기순이익 컨센서스는 8.5조원으로, 최근 실적 7.2조원 대비 늘어날 망이에요. 시가총액 대비로 환산하면 <strong class="up">+0.73%p</strong>예요.'
  }
]

const itemList = ref([
  {
    title: '전체 시장과 비교하면?',
    subTitle: '전체 종목 중 SK하이닉스보다 매출·영업이익·당기순이익 성장폭(시가총액 대비)이 낮은 종목의 비율',
    isScore: false,
    ranges: [
      { label: '매출 전체', val: '91.2', score: 91.2 },
      { label: '영업이익 전체', val: '91.2', score: 91.2 },
      { label: '당기순이익 전체', val: '91.2', score: 91.2 }
    ]
  },
  {
    title: 'SK하이닉스가 속한 반도체 업종의 평균 스코어는?',
    subTitle: '반도체 업종 (총 32종목)에 속한 종목들의 평균 스코어',
    isScore: true, 
    ranges: [
      { label: '매출 업종평균', val: '85.4', score: 85.4 },
      { label: '영업이익 업종평균', val: '88.0', score: 88.0 },
      { label: '당기순이익 업종평균', val: '96.4', score: 96.4 }
    ]
  },
  {
    title: '같은 업종과 비교하면?',
    subTitle: '반도체 업종 안에서 SK하이닉스보다 컨센서스 성장 전망이 낮은 종목의 비율',
    isScore: false,
    ranges: [
      { label: '매출 업종', val: '74.5', score: 74.5 },
      { label: '영업이익 업종', val: '80.1', score: 80.1 },
      { label: '당기순이익 업종', val: '82.3', score: 82.3 }
    ]
  }
])
</script>