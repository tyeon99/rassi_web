<template>
  <div class="content-section">
    <div class="title">
      <span>최근 3개월, 실적 전망은 어떻게 변했을까?</span>
      <h1>중기 3개월 미래전망 OX</h1>
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
      <div class="list">
        <div class="gray-box">
          <div class="box-title">
            <strong>다른 종목들과 비교해서 전망 변화율은 어느 정도일까?</strong>
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

const rateList = [
  {
    question: '매출 예상치가 높아졌을까?',
    isPass: true,
    description: '매출 예상치가 <strong class="up">8조 8841억원</strong>으로 3개월 전 7조 5558억원 보다 높아졌어요'
  },
  {
    question: '영업이익 예상치가 높아졌을까?',
    isPass: true,
    description: '영업이익 예상치가 <strong class="up">5조 257억원</strong>으로 3개월 전 4조 396억원 보다 높아졌어요'
  },
  {
    question: '당기순이익 예상치가 높아졌을까?',
    isPass: false,
    description: '당기순이익 예상치가 <strong class="up">4조 956억원</strong>으로 3개월 전 3조 2780억원 보다 높아졌어요'
  }
]

const periodList = ref([
  {
    period: '매출',
    marketTxt: '전체 종목과 비교해서 SK하이닉스의 매출 전망 변화율은 <strong>하위 72%</strong> 수준이고, SK하이닉스가 속한 정보기술 섹터의 평균은 <strong>68</strong>이에요.',
    marketPercentile: 28,
    marketAvg: 68,
    sectorName: '정보기술 섹터',
    sectorTxt: '정보기술 섹터 종목과 비교해서 SK하이닉스의 매출 전망 변화율은 <strong>하위 72%</strong> 수준이에요.',
    sectorPercentile: 28
  },
  {
    period: '영업이익',
    marketTxt: '전체 종목과 비교해서 SK하이닉스의 영업이익 전망 변화율은 <strong>중간</strong> 수준이고, SK하이닉스가 속한 정보기술 섹터의 평균은 <strong>68</strong>이에요.',
    marketPercentile: 56,
    marketAvg: 68,
    sectorName: '정보기술 섹터',
    sectorTxt: '정보기술 섹터 종목과 비교해서 SK하이닉스의 영업이익 전망 변화율은 <strong>하위 72%</strong> 수준이에요.',
    sectorPercentile: 28
  },
  {
    period: '당기순이익',
    marketTxt: '전체 종목과 비교해서 SK하이닉스의 당기순이익 전망 변화율은 <strong>상위 12%</strong> 수준이고, SK하이닉스가 속한 정보기술 섹터의 평균은 <strong>68</strong>이에요.',
    marketPercentile: 88,
    marketAvg: 68,
    sectorName: '정보기술 섹터',
    sectorTxt: '정보기술 섹터 종목과 비교해서 SK하이닉스의 당기순이익 전망 변화율은 <strong>하위 72%</strong> 수준이에요.',
    sectorPercentile: 28
  }
])
</script>