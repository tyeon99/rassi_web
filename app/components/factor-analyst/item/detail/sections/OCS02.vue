<template>
  <div class="content-section">
    <div class="title">
      <span>최근 3개월, 업종 내에서는 어떨까?</span>
      <h1>중기 미래전망 (3개월)은?</h1>
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
    question: '매출 예상치가 높아졌을까?',
    isPass: true,
    description: '최근 3개월 동안 매출 예상치가 <strong class="up">+0.42%p</strong> 높아졌어요'
  },
  {
    question: '영업이익 예상치가 높아졌을까?',
    isPass: true,
    description: '최근 3개월 동안 영업이익 예상치가 <strong class="up">+0.85%p</strong> 높아졌어요.'
  },
  {
    question: '당기순이익 예상치가 높아졌을까?',
    isPass: false,
    description: '최근 3개월 동안 당기순이익 예상치가 <strong class="down">-0.51%p</strong> 낮아졌어요.'
  }
]

const itemList = ref([
  {
    title: '같은 업종과 비교하면?',
    subTitle: '매출·영업이익·당기순이익 3개월 예상치 변화를 전체 종목과 비교한 위치',
    isScore: false,
    ranges: [
      { label: '업종 상대 (3개월)', val: '91.2', score: 91.2 }
    ]
  }
])
</script>