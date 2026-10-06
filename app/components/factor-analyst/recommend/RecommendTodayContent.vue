<template>
  <div class="recommendTodayContent">
    <div class="txt">
      6월 10일 황금코어 스타일, 황금값어치 스타일, 양날의 검스타일에서 15종목이 추천되었어요.
    </div>
    <div class="box-group">
      <div 
        v-for="(item, idx) in recommendList" 
        :key="idx" 
        class="box"
      >
        <div class="top">
          <div class="left">
            <div class="circle">
              <img width="30" src="~/assets/img/factor-analyst/main/item-circle.png" alt="종목로고">
            </div>
            <div class="name">
              <strong>{{ item.name }}</strong>
              <span>{{ item.code }}</span>
            </div>
          </div>
          <div class="right">
            {{ item.style }}
          </div>
        </div>

        <div class="bottom">
          <strong>투자 포인트</strong>
          <p>{{ item.pointDesc }}</p>
          <div class="tag-group">
            <span 
              v-for="(tag, tIdx) in item.tags" 
              :key="tIdx"
            >
              {{ tag }}
            </span>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import '~/assets/css/factor-analyst/common.css'

const recommendList = ref([
  {
    name: '삼성전자',
    code: '055872',
    style: '황금코어 스타일',
    pointDesc: '높은 변동성과 반등 가능성이 공존하는 고위험 고수익 스타일에 속하는 종목이에요.',
    tags: ['높은 변동성', '고위험 고수익']
  },
  {
    name: 'SK하이닉스',
    code: '000660',
    style: '황금값어치 스타일',
    pointDesc: '저평가 매력이 돋보이며 안정적인 실적 흐름을 유지하는 스타일의 종목이에요.',
    tags: ['저평가', '실적 우수']
  },
  {
    name: '현대차',
    code: '005380',
    style: '양날의 검스타일',
    pointDesc: '단기 모멘텀은 강하나 주가 변동 폭이 커 유의가 필요한 종목이에요.',
    tags: ['모멘텀 상향', '변동성 유의']
  }
])
</script>