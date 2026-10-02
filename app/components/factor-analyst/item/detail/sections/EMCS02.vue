<template>
  <div class="content-section">
    <div class="title">
      <span>앞으로 12개월, 더 좋아질까?</span>
      <h1>실적 전망 OX</h1>
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

        <!-- 컨세서스 데이터가 없는 경우 -->
        <div v-if="!item.description" class="inner-box no-signal">
          <img width="20" src="~/assets/img/factor-analyst/detail/no-icon.png" alt="없음 아이콘">
          <p v-html="item.noSignal"></p>
        </div>
      </div>
    </div>

    <div class="list-group">
      <div class="list">
        <div class="gray-box">
          <div class="box-title">
            <strong>다른 종목들과 비교해서 실적 전망은 어느 정도일까?</strong>
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

          <!-- 컨세서스 데이터가 없는 경우 -->
          <div class="inner-box no-signal">
            <img width="20" src="~/assets/img/factor-analyst/detail/no-icon.png" alt="없음 아이콘">
            <p>최근 발표된 컨세서스 추정치가 없어서<br /> 비교할 수 없어요</p>
          </div>

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
    question: '매출 전망이 좋아질까?',
    isPass: true,
    description: '향후 12개월 매출 컨센서스는 32조 2000억이고, 최근 12개월 매출은 30조 2000억원으로 <strong>2조 2000억</strong> 늘었어요. 이는 시총대비 <strong class="up">23.1%</strong> 이에요.',
    noSignal: '최근 발표된 매출 추정치가 없어서 <br />표시하지 못했어요.'
  },
  {
    question: '영업이익 전망이 좋아질까?',
    isPass: true,
    description: '향후 12개월 영업이익 컨센서스는 32조 2000억이고, 최근 12개월 영업이익은 30조 2000억원으로 <strong>2조 2000억</strong> 늘었어요. 이는 시총대비 <strong class="up">23.1%</strong> 이에요.',
    noSignal: '최근 발표된 영업이익 추정치가 없어서 <br />표시하지 못했어요.'
  },
  {
    question: '당기순이익 전망이 좋아질까?',
    isPass: true,
    description: '향후 12개월 당기순이익 컨센서스는 32조 2000억이고, 최근 12개월 당기순이익은 30조 2000억원으로 <strong>2조 2000억</strong> 늘었어요. 이는 시총대비 <strong class="up">23.1%</strong> 이에요.',
    noSignal: '최근 발표된 당기순이익 추정치가 없어서 <br />표시하지 못했어요.'
  }
]

const periodList = ref([
  {
    period: '매출',
    marketTxt: '전체 종목과 비교해서 SK하이닉스의 시총대비 향후 12개월 매출 전망 규모는 <strong>하위 72%</strong> 수준이고, SK하이닉스가 속한 정보기술 섹터의 평균은 <strong>68</strong>이에요.',
    marketPercentile: 28,
    marketAvg: 68,
    sectorName: '정보기술 섹터',
    sectorTxt: '정보기술 섹터 종목과 비교해서 SK하이닉스의 시총대비 향후 12개월 매출 전망 규모는 <strong>하위 72%</strong> 수준이에요.',
    sectorPercentile: 28
  },
  {
    period: '영업이익',
    marketTxt: '전체 종목과 비교해서 SK하이닉스의 시총대비 향후 12개월 영업이익 전망 규모는 <strong>중간</strong> 수준이고, SK하이닉스가 속한 정보기술 섹터의 평균은 <strong>68</strong>이에요.',
    marketPercentile: 56,
    marketAvg: 68,
    sectorName: '정보기술 섹터',
    sectorTxt: '정보기술 섹터 종목과 비교해서 SK하이닉스의 시총대비 향후 12개월 영업이익 전망 규모는 <strong>하위 72%</strong> 수준이에요.',
    sectorPercentile: 28
  },
  {
    period: '당기순이익',
    marketTxt: '전체 종목과 비교해서 SK하이닉스의 시총대비 향후 12개월 당기순이익 전망 규모는 <strong>상위 12%</strong> 수준이고, SK하이닉스가 속한 정보기술 섹터의 평균은 <strong>68</strong>이에요.',
    marketPercentile: 88,
    marketAvg: 68,
    sectorName: '정보기술 섹터',
    sectorTxt: '정보기술 섹터 종목과 비교해서 SK하이닉스의 시총대비 향후 12개월 당기순이익 전망 규모는 <strong>하위 72%</strong> 수준이에요.',
    sectorPercentile: 28
  }
])
</script>