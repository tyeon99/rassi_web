<template>
  <div class="content-section">
    <div class="title">
      <span>최근 주가는 고점과 저점 중 어디에 가까울까?</span>
      <h1>주가 위치는?</h1>
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
          <p v-html="item.description"></p>
        </div>
      </div>
    </div>

    <div class="list-group">
      <div 
        v-for="(group, gIdx) in locationGroups" 
        :key="gIdx" 
        class="list"
      >
        <div class="gray-box">
          <div class="box-title">
            <strong>{{ group.title }}</strong>
          </div>

          <div class="period-group">
            <div 
              v-for="(item, idx) in group.periodList" 
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
    question: '최근 1개월 주가 위치는?',
    description: 'SK하이닉스의 최근 1개월 주가는 고점 대비 -12.5%, 저점 대비 +8.3% 수준이에요.'
  },
  {
    question: '최근 3개월 주가 위치는?',
    description: 'SK하이닉스의 최근 3개월 주가는 고점 대비 -12.5%, 저점 대비 +8.3% 수준이에요.'
  }
]

const locationGroups = ref([
  {
    title: '다른 종목과 비교해서 최근 1개월 주가 위치는 어느 정도일까?',
    periodList: [
      {
        period: '고점 대비 하락',
        marketTxt: '전체 종목과 비교해서 SK하이닉스의 최근 1개월 고점 대비 하락은 <strong>하위 12.2%</strong> 수준이고, SK하이닉스가 속한 정보기술 섹터의 평균은 <strong>68</strong>이에요.',
        marketPercentile: 54.2,
        marketAvg: 68,
        sectorName: '정보기술 섹터',
        sectorTxt: '정보기술 섹터 종목과 비교해서 SK하이닉스의 최근 1개월 고점 대비 하락은 <strong>중간</strong> 수준이에요.',
        sectorPercentile: 28.2
      },
      {
        period: '저점 대비 상승',
        marketTxt: '전체 종목과 비교해서 SK하이닉스의 최근 1개월 저점 대비 상승은 <strong>하위 12.2%</strong>이고, SK하이닉스가 속한 정보기술 섹터의 평균은 <strong>68</strong>이에요.',
        marketPercentile: 54.2,
        marketAvg: 68,
        sectorName: '정보기술 섹터',
        sectorTxt: '정보기술 섹터 종목과 비교해서 SK하이닉스의 최근 1개월 저점 대비 상승은 <strong>중간</strong> 수준이에요.',
        sectorPercentile: 28.2
      }
    ]
  },
  {
    title: '다른 종목과 비교해서 최근 3개월 주가 위치는 어느 정도일까?',
    periodList: [
      {
        period: '고점 대비 하락',
        marketTxt: '전체 종목과 비교해서 SK하이닉스의 최근 3개월 고점 대비 하락은 <strong>하위 12.2%</strong>이고, SK하이닉스가 속한 정보기술 섹터의 평균은 <strong>68</strong>이에요.',
        marketPercentile: 54.2,
        marketAvg: 68,
        sectorName: '정보기술 섹터',
        sectorTxt: '정보기술 섹터 종목과 비교해서 SK하이닉스의 최근 3개월 고점 대비 하락은 <strong>중간</strong> 수준이에요.',
        sectorPercentile: 28.2
      },
      {
        period: '저점 대비 상승',
        marketTxt: '전체 종목과 비교해서 SK하이닉스의 최근 3개월 저점 대비 상승은 <strong>하위 12.2%</strong>이고, SK하이닉스가 속한 정보기술 섹터의 평균은 <strong>68</strong>이에요.',
        marketPercentile: 54.2,
        marketAvg: 68,
        sectorName: '정보기술 섹터',
        sectorTxt: '정보기술 섹터 종목과 비교해서 SK하이닉스의 최근 3개월 저점 대비 상승은 <strong>중간</strong> 수준이에요.',
        sectorPercentile: 28.2
      }
    ]
  }
])
</script>