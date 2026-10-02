<template>
  <div class="content-section">
    <div class="title">
      <span>다른 종목보다 많이 올랐을까?</span>
      <h1>주가 상대강도는?</h1>
    </div>
    
    <div class="list-group">
      <div class="list">
        <div class="gray-box">
          <div class="box-title">
            <strong>다른 종목들과 비교해서 수익률 변화율은 어느 정도일까?</strong>
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
                      <span class="avg"></span>
                    </div>
                    <div class="score" :style="{ width: `${item.marketPercentile}%` }"></div>
                  </div>
                  <div class="txt">
                    <span>하위</span>
                    <span>평균 {{ item.marketAvg }}</span>
                    <span>상위</span>
                  </div>
                </div> <!-- range-wrap -->
              </div> <!-- range-box -->

              <!-- 2. 섹터 비교 레인지 박스 -->
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

const periodList = ref([
  {
    period: '3개월',
    marketTxt: '전체 종목과 비교해서 SK하이닉스의 3개월 수익률 변화율은 <strong>하위 72%</strong> 수준이고, SK하이닉스가 속한 정보기술 섹터의 평균은 <strong>68</strong>이에요.',
    marketPercentile: 28,
    marketAvg: 68,
    sectorName: '정보기술섹터',
    sectorTxt: '정보기술 섹터 종목과 비교해서 SK하이닉스의 3개월 수익률 변화율은 <strong>하위 72%</strong> 수준이에요.',
    sectorPercentile: 28
  },
  {
    period: '6개월',
    marketTxt: '전체 종목과 비교해서 SK하이닉스의 6개월 수익률 변화율은 <strong>중간 수준</strong>이고, SK하이닉스가 속한 정보기술 섹터의 평균은 <strong>68</strong>이에요.',
    marketPercentile: 56,
    marketAvg: 68,
    sectorName: '정보기술섹터',
    sectorTxt: '정보기술 섹터 종목과 비교해서 SK하이닉스의 6개월 수익률 변화율은 <strong>하위 72%</strong> 수준이에요.',
    sectorPercentile: 28
  },
  {
    period: '12개월',
    marketTxt: '전체 종목과 비교해서 SK하이닉스의 12개월 수익률 변화율은 <strong>상위 12%</strong> 수준이고, SK하이닉스가 속한 정보기술 섹터의 평균은 <strong>68</strong>이에요.',
    marketPercentile: 88,
    marketAvg: 68,
    sectorName: '정보기술섹터',
    sectorTxt: '정보기술 섹터 종목과 비교해서 SK하이닉스의 12개월 수익률 변화율은 <strong>하위 72%</strong> 수준이에요.',
    sectorPercentile: 28
  }
])
</script>