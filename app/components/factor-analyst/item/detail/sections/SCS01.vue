<template>
  <div class="content-section">
    <div class="title">
      <span>매수세가 꾸준히 이어지고 있을까?</span>
      <h1>순매수지속성 OX</h1>
    </div>
    
    <div 
      v-for="(groupSet, sIdx) in analystGroups" 
      :key="sIdx" 
      class="section-group"
    >
      <div class="box-wrap">
        <span class="period">{{ groupSet.period }}</span>
        <div class="box-group">
          <div 
            v-for="(item, idx) in groupSet.rateList" 
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
      </div>

      <div class="list-group">
        <div class="list">
          <div class="gray-box">
            <div class="box-title">
              <strong>{{ groupSet.listTitle }}</strong>
            </div>

            <div class="period-group">
              <div 
                v-for="(item, idx) in groupSet.periodList" 
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
    </div> <!-- analyst-set -->

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import '~/assets/css/factor-analyst/common.css'

const analystGroups = ref([
  {
    period: '외국인',
    listTitle: '다른 종목들과 비교해서 외국인 순매수 비율은 어느 정도일까?',
    rateList: [
      {
        question: '외국인이 최근 1주 동안 샀을까?',
        isPass: true,
        description: '외국인은 최근 1주 동안 <strong class="up">1,800억 5,200만원</strong>을 순매수했어요. 이는 유동시가총액의 4.8% 수준이에요.'
      },
      {
        question: '외국인이 최근 1개월 동안 샀을까?',
        isPass: true,
        description: '외국인은 최근 1개월 동안 <strong class="up">1,800억 5,200만원</strong>을 순매수했어요. 이는 유동시가총액의 4.8% 수준이에요.'
      },
      {
        question: '외국인이 최근 3개월 동안 샀을까?',
        isPass: true,
        description: '외국인은 최근 3개월 동안 <strong class="up">1,800억 5,200만원</strong>을 순매수했어요. 이는 유동시가총액의 4.8% 수준이에요.'
      }
    ],
    periodList: [
      {
        period: '1주일',
        marketTxt: '전체 종목과 비교해서 SK하이닉스의 1주일 외국인 순매수 비율은 <strong>하위 72%</strong> 수준이고, SK하이닉스가 속한 정보기술 섹터의 평균은 <strong>68</strong>이에요.',
        marketPercentile: 28,
        marketAvg: 68,
        sectorName: '정보기술 섹터',
        sectorTxt: '정보기술 섹터 종목과 비교해서 SK하이닉스의 1주일 외국인 순매수 비율은 <strong>하위 72%</strong> 수준이에요.',
        sectorPercentile: 28
      },
      {
        period: '1개월',
        marketTxt: '전체 종목과 비교해서 SK하이닉스의 1개월 외국인 순매수 비율은 <strong>하위 72%</strong> 수준이고, SK하이닉스가 속한 정보기술 섹터의 평균은 <strong>68</strong>이에요.',
        marketPercentile: 28,
        marketAvg: 68,
        sectorName: '정보기술 섹터',
        sectorTxt: '정보기술 섹터 종목과 비교해서 SK하이닉스의 1개월 외국인 순매수 비율은 <strong>하위 72%</strong> 수준이에요.',
        sectorPercentile: 28
      },
      {
        period: '3개월',
        marketTxt: '전체 종목과 비교해서 SK하이닉스의 3개월 외국인 순매수 비율은 <strong>하위 72%</strong> 수준이고, SK하이닉스가 속한 정보기술 섹터의 평균은 <strong>68</strong>이에요.',
        marketPercentile: 28,
        marketAvg: 68,
        sectorName: '정보기술 섹터',
        sectorTxt: '정보기술 섹터 종목과 비교해서 SK하이닉스의 3개월 외국인 순매수 비율은 <strong>하위 72%</strong> 수준이에요.',
        sectorPercentile: 28
      }
    ]
  },
  {
    period: '기관',
    listTitle: '다른 종목들과 비교해서 기관 순매수 비율은 어느 정도일까?',
    rateList: [
      {
        question: '기관이 최근 1주 동안 샀을까?',
        isPass: true,
        description: '기관은 최근 1주 동안 <strong class="up">1,800억 5,200만원</strong>을 순매수했어요. 이는 유동시가총액의 4.8% 수준이에요.'
      },
      {
        question: '기관이 최근 1개월 동안 샀을까?',
        isPass: true,
        description: '기관은 최근 1개월 동안 <strong class="up">1,800억 5,200만원</strong>을 순매수했어요. 이는 유동시가총액의 4.8% 수준이에요.'
      },
      {
        question: '기관이 최근 3개월 동안 샀을까?',
        isPass: true,
        description: '기관은 최근 3개월 동안 <strong class="up">1,800억 5,200만원</strong>을 순매수했어요. 이는 유동시가총액의 4.8% 수준이에요.'
      }
    ],
    periodList: [
      {
        period: '1주일',
        marketTxt: '전체 종목과 비교해서 SK하이닉스의 1주일 기관 순매수 비율은 <strong>하위 72%</strong> 수준이고, SK하이닉스가 속한 정보기술 섹터의 평균은 <strong>68</strong>이에요.',
        marketPercentile: 28,
        marketAvg: 68,
        sectorName: '정보기술 섹터',
        sectorTxt: '정보기술 섹터 종목과 비교해서 SK하이닉스의 1주일 기관 순매수 비율은 <strong>하위 72%</strong> 수준이에요.',
        sectorPercentile: 28
      },
      {
        period: '1개월',
        marketTxt: '전체 종목과 비교해서 SK하이닉스의 1개월 기관 순매수 비율은 <strong>하위 72%</strong> 수준이고, SK하이닉스가 속한 정보기술 섹터의 평균은 <strong>68</strong>이에요.',
        marketPercentile: 28,
        marketAvg: 68,
        sectorName: '정보기술 섹터',
        sectorTxt: '정보기술 섹터 종목과 비교해서 SK하이닉스의 1개월 기관 순매수 비율은 <strong>하위 72%</strong> 수준이에요.',
        sectorPercentile: 28
      },
      {
        period: '3개월',
        marketTxt: '전체 종목과 비교해서 SK하이닉스의 3개월 기관 순매수 비율은 <strong>하위 72%</strong> 수준이고, SK하이닉스가 속한 정보기술 섹터의 평균은 <strong>68</strong>이에요.',
        marketPercentile: 28,
        marketAvg: 68,
        sectorName: '정보기술 섹터',
        sectorTxt: '정보기술 섹터 종목과 비교해서 SK하이닉스의 3개월 기관 순매수 비율은 <strong>하위 72%</strong> 수준이에요.',
        sectorPercentile: 28
      }
    ]
  }
])
</script>