<template>
  <div class="content-section">
    <div class="title">
      <span>배당을 얼마나 줄까?</span>
      <h1>배당수익률은?</h1>
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
      <div class="list">
        <div class="gray-box">
          <div class="box-title">
            <strong>다른 종목과 비교해서 배당수익률은 어느 정도일까?</strong>
          </div>

          <div class="range-box">
            <div class="box-txt" v-html="marketTxt"></div>

            <div class="range-wrap">
              <div class="txt mb-1">
                <p>전체 시장</p>
                <strong>백분위 : {{ marketPercentile }}</strong>
              </div>
              <div class="range">
                <div class="bar">
                  <span class="avg" :style="{ left: `${marketAvg}%` }"></span>
                </div>
                <div class="score" :style="{ width: `${marketPercentile}%` }"></div>
              </div>
              <div class="txt">
                <span>하위</span>
                <span class="avg-txt" :style="{ left: `${marketAvg}%` }">
                  평균 {{ marketAvg }}
                </span>
                <span>상위</span>
              </div>
            </div> <!-- range-wrap -->
          </div> <!-- range-box -->

          <!-- 섹터 레인지 박스 -->
          <div class="range-box">
            <div class="box-txt" v-html="sectorTxt"></div>

            <div class="range-wrap">
              <div class="txt mb-1">
                <p>정보기술 섹터</p>
                <strong>백분위 : {{ sectorPercentile }}</strong>
              </div>
              <div class="range">
                <div class="bar"></div>
                <div class="score" :style="{ width: `${sectorPercentile}%` }"></div>
              </div>
              <div class="txt">
                <span>하위</span>
                <span>상위</span>
              </div>
            </div> <!-- range-wrap -->
          </div> <!-- range-box -->

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
    question: '최근 1년 동안 배당을 얼마나 줬을까?',
    description: '배당수익률은 <strong class="up">0.7%</strong>이고 최근 1년 배당금 총액은 <strong>3조 2,000억</strong>원이에요.'
  },
  {
    question: '정보기술 섹터의 배당수익률은?',
    description: 'SK하이닉스가 속한 정보기술 섹터는 총 634종목이고, 가장 높은 배당수익률은 19.2%, 가장 낮은 배당수익률은 2.3%로 평균은 <strong>8.3%</strong>이에요.'
  }
]

const marketTxt = '전체 종목과 비교해서 SK하이닉스의 배당수익률은 <strong>하위 12.2%</strong>이고, SK하이닉스가 속한 정보기술 섹터의 평균값인 <strong>68</strong>보다 낮아요.'
const marketPercentile = ref(54.2)
const marketAvg = ref(68)

const sectorTxt = '정보기술 섹터 종목과 비교해서 SK하이닉스의 배당수익률은 <strong>중간</strong> 수준이에요.'
const sectorPercentile = ref(28.2)
</script>