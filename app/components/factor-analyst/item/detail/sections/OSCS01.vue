<template>
  <div class="content-section">
    <div class="title">
      <span>최근 주가가 많이 빠졌을까?</span>
      <h1>단기 하락 OX</h1>
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
      <div class="list">
        <div class="gray-box">
          <div class="box-title">
            <strong>다른 종목들과 비교해서 단기 하락 수준은 어느 정도일까?</strong>
          </div>

          <div class="period-group">
            <div 
              v-for="(item, idx) in periodList" 
              :key="idx" 
              class="period-box"
            >
              <span class="period">{{ item.period }}</span>
              
              <div class="range-box">
                <div class="box-txt" v-html="item.marketTxt"></div>

                <div class="range-wrap">
                  <div class="txt mb-1">
                    <p>전체 시장</p>
                    <strong>백분위 : {{ item.marketPercentile }}</strong>
                  </div>
                  <div class="range">
                    <div class="bar">
                      <span class="avg" :style="{ left: `${item.marketAvg}%` }"></span>
                    </div>
                    <div class="score" :style="{ width: `${item.marketPercentile}%` }"></div>
                  </div>
                  <div class="txt">
                    <span>하위</span>
                    <span class="avg-txt" :style="{ left: `${item.marketAvg}%` }">
                      평균 {{ item.marketAvg }}
                    </span>
                    <span>상위</span>
                  </div>
                </div> <!-- range-wrap -->
              </div> <!-- range-box -->

              <div class="range-box">
                <div class="box-txt" v-html="item.sectorTxt"></div>

                <div class="range-wrap">
                  <div class="txt mb-1">
                    <p>{{ item.sectorName }}</p>
                    <strong>백분위 : {{ item.sectorPercentile }}</strong>
                  </div>
                  <div class="range">
                    <div class="bar"></div>
                    <div class="score" :style="{ width: `${item.sectorPercentile}%` }"></div>
                  </div>
                  <div class="txt">
                    <span>하위</span>
                    <span>상위</span>
                  </div>
                </div> <!-- range-wrap -->
              </div> <!-- range-box -->

            </div> <!-- period-box -->
          </div> <!-- period-group -->

        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import '~/assets/css/factor-analyst/common.css'

// 1. Q&A 데이터 (이미지 1:1 매칭)
const rateList = [
  {
    question: '최근 1주 동안 주가가 빠졌나?',
    isPass: true,
    description: 'SK하이닉스의 최근 1주 수익률은 <strong class="down">-6.8%</strong>로, 주가가 하락했어요.'
  },
  {
    question: '최근 1개월 동안 주가가 빠졌나?',
    isPass: false,
    description: 'SK하이닉스의 최근 1개월 수익률은 <strong class="up">+12.3%</strong>로, 주가가 상승했어요.'
  }
]

// 2. 단기 하락 백분위 데이터 (1주일 / 1개월)
const periodList = ref([
  {
    period: '1주일',
    marketTxt: '전체 종목과 비교해서 SK하이닉스의 1주일 하락폭은 <strong>하위 72%</strong> 수준이고, SK하이닉스가 속한 정보기술 섹터의 1주일 평균은 <strong>68</strong>이에요.',
    marketPercentile: 28,
    marketAvg: 68,
    sectorName: '정보기술 섹터',
    sectorTxt: '정보기술 섹터 종목과 비교해서 SK하이닉스의 1주일 하락폭은 <strong>상위 12%</strong> 수준이에요.',
    sectorPercentile: 88
  },
  {
    period: '1개월',
    marketTxt: '전체 종목과 비교해서 SK하이닉스의 1개월 하락폭은 <strong>하위 72%</strong> 수준이고, SK하이닉스가 속한 정보기술 섹터의 1개월 평균은 <strong>68</strong>이에요.',
    marketPercentile: 28,
    marketAvg: 68,
    sectorName: '정보기술 섹터',
    sectorTxt: '정보기술 섹터 종목과 비교해서 SK하이닉스의 1개월 하락폭은 <strong>중간</strong> 수준이에요.',
    sectorPercentile: 54
  }
])
</script>