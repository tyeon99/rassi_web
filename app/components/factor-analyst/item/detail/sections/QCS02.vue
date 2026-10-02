<template>
  <div class="content-section">
    <div class="title">
      <span>돈 버는 효율성은 괜찮을까?</span>
      <h1>GP/A는?</h1>
    </div>
    
    <div class="box-group">
      <div 
        v-for="(item, idx) in boxItem" 
        :key="idx" 
        class="box"
      >
        <div class="box-title">
          <span>Q</span>
          <p>{{ item.question }}</p>
        </div>
        <div class="inner-box">
          <p v-html="item.description"></p>
        </div>
      </div>
    </div>
    
    <div class="list-group">
      <div 
        v-for="(item, idx) in gpaList" 
        :key="idx" 
        class="list"
      >
        <div class="gray-box">
          <div class="box-title">
            <strong>{{ item.title }}</strong>
            <p v-html="item.subTitle"></p>
          </div>

          <div class="range-wrap">
            <div class="txt mb-1">
              <p>전체시장</p>
              <strong>백분위 : {{ item.marketPercentile }}</strong>
            </div>
            <div class="range">
              <div class="bar">
                <span class="avg"></span>
              </div>
              <div class="score" :style="{ width: `${item.marketScore}%` }"></div>
            </div>
            <div class="txt">
              <span>하위</span>
              <span>평균 52.1</span>
              <span>상위</span>
            </div>
          </div>

          <div class="box-title">
            <p v-html="item.sectorDesc"></p>
          </div>

          <div class="range-wrap">
            <div class="txt mb-1">
              <p>{{ item.sectorName }}</p>
              <strong>백분위 : {{ item.sectorPercentile }}</strong>
            </div>
            <div class="range">
              <div class="bar"></div>
              <div class="score" :style="{ width: `${item.sectorScore}%` }"></div>
            </div>
            <div class="txt">
              <span>하위</span>
              <span>상위</span>
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

const boxItem = [
  {
    question: 'SK하이닉스의 GP/A는?',
    description: '최근 12개월 매출 총이익 144조 2762억원을 이전 12개월 총자산과 현재 총자산의 평균인 348조 8622억원으로 나눈 값으로, GP/A는 <strong class="up">60.4%</strong> 이에요.'
  },
  {
    question: '정보기술 섹터의 GP/A는?',
    description: 'SK하이닉스가 속한 정보기술 섹터는 총 634종목이고, 가장 높은 GP/A는 173.6%, 가장 낮은 GP/A는 -18.3%이에요. 정보기술 섹터의 평균은 <strong class="up">52.1</strong>이에요.'
  }
]

const gpaList = ref([
  {
    title: '다른 종목들과 비교해서 GP/A는 어느 정도일까?',
    subTitle: '정보기술 섹터의 평균은 <strong>52.1</strong>이고, SK하이닉스의 GP/A는 전체 시장에서 <strong>상위 2%</strong> 수준이에요.',
    marketPercentile: 78,
    marketScore: 78,
    sectorDesc: 'SK하이닉스의 GP/A는 정보기술 섹터에서 <strong>상위 2%</strong> 수준이에요.',
    sectorName: '정보기술 섹터',
    sectorPercentile: 78,
    sectorScore: 78
  }
])
</script>