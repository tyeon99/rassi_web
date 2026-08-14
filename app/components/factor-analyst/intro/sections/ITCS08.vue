<template>
  <div class="itemStyleSection">

    <div class="title">자주 묻는 질문</div>
    
    <div class="question">
      <div 
        v-for="(question, idx) in qList" 
        :key="idx" 
        class="box"
      >
        <div class="box-title">
          <span>Q</span>
          <p>{{ question.question }}</p>
        </div>
        <div class="inner-box">
          <p v-html="question.description"></p>
        </div>
      </div>
      
      <div class="notice">
        ※ 과거 성과가 미래 수익을 보장하지 않으며, 시장 상황에 따라 손실이 발생할 수 있습니다.
      </div>
    </div>
    
  </div>
</template>

<script setup lang="ts">
// style
import '~/assets/css/factor-analyst/common.css'

const qList = [
  {
    question: '모든 스타일이 매일 추천되나요?',
    description: '아니요, 그날 시장에서 가장 좋은 성과가 기대되는 상위 스타일만 선별해서 보여드려요.'
  },
  {
    question: '추천 스타일은 언제 바뀌나요?',
    description: '매일 아침 장 시작 전에 추천 스타일 TOP 2이 갱신되며, 추천 스타일에 속한 Pick 5를 확인할 수 있어요. '
  },
  {
    question: 'Pick 5 종목은 어떻게 확인하나요?',
    description: '추천 스타일 카드 안에서 확인할 수 있어요. 해당 스타일 기준 상위 5종목이 선정돼요.'
  },
  {
    question: '추천된 스타일의 과거 성과는 어디서 볼 수 있나요?',
    description: '‘날짜별 추천 스타일’에서 지난 추천 이력과 각 추천 스타일이 추천된 후 1달간의 성과를 확인할 수 있어요. '
  }
]

</script>