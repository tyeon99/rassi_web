<template>
  <div class="content-section">
    <div class="title">
      <span>누가 더 적극적으로 매수하고 있을까?</span>
      <h1>참여강도는?</h1>
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
      <div class="list">
        <div class="gray-box">
          <div class="box-title">
            <strong>다른 종목들과 비교해서 참여 강도는 어느 정도일까?</strong>
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

                <!-- 외국인 백분위 -->
                <div class="range-wrap">
                  <div class="txt mb-1">
                    <p>전체 시장</p>
                    <strong>외국인 백분위 : {{ item.foreignerPercentile }}</strong>
                  </div>
                  <div class="range">
                    <div class="bar">
                      <span class="avg" :style="{ left: `${item.foreignerAvg}%` }"></span>
                    </div>
                    <div class="score" :style="{ width: `${item.foreignerPercentile}%` }"></div>
                  </div>
                  <div class="txt">
                    <span>하위</span>
                    <span class="avg-txt" :style="{ left: `${item.foreignerAvg}%` }">
                      평균 {{ item.foreignerAvg }}
                    </span>
                    <span>상위</span>
                  </div>
                </div> <!-- range-wrap -->

                <!-- 기관 백분위 -->
                <div class="range-wrap">
                  <div class="txt mb-1">
                    <p>전체 시장</p>
                    <strong>기관 백분위 : {{ item.institutionPercentile }}</strong>
                  </div>
                  <div class="range">
                    <div class="bar">
                      <span class="avg"></span>
                    </div>
                    <div class="score" :style="{ width: `${item.institutionPercentile}%` }"></div>
                  </div>
                  <div class="txt">
                    <span>하위</span>
                    <span>평균 {{ item.institutionAvg }}</span>
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
    question: '최근 1주 동안 누가 더 적극적으로 샀을까?',
    description: '최근 1주 거래대금 120억 2,356만 원 중 외국인은 <strong class="down">25.2% 순매도</strong>, 기관은 <strong class="up">12.2% 순매수</strong>했어요.'
  },
  {
    question: '최근 1개월 동안 누가 더 적극적으로 샀을까?',
    description: '최근 1개월 거래대금 120억 2,356만 원 중 외국인은 <strong class="down">25.2% 순매도</strong>, 기관은 <strong class="up">12.2% 순매수</strong>했어요.'
  },
  {
    question: '최근 3개월 동안 누가 더 적극적으로 샀을까?',
    description: '최근 3개월 거래대금 120억 2,356만 원 중 외국인은 <strong class="down">25.2% 순매도</strong>, 기관은 <strong class="up">12.2% 순매수</strong>했어요.'
  }
]

const periodList = ref([
  {
    period: '1주일',
    marketTxt: 'SK하이닉스의 1주일 외국인 참여 강도는 <strong>하위 12%</strong>로 평균 <strong>56</strong>보다 낮아요. 1주일 기관 참여 강도는 <strong>상위 22%</strong>로 평균 <strong>45</strong>보다 높아요.',
    foreignerPercentile: 85,
    foreignerAvg: 68,
    institutionPercentile: 85,
    institutionAvg: 40
  },
  {
    period: '1개월',
    marketTxt: 'SK하이닉스의 1개월 외국인 참여 강도는 <strong>하위 12%</strong>로 평균 <strong>56</strong>보다 낮아요. 1개월 기관 참여 강도는 <strong>상위 22%</strong>로 평균 <strong>45</strong>보다 높아요.',
    foreignerPercentile: 85,
    foreignerAvg: 68,
    institutionPercentile: 85,
    institutionAvg: 40
  },
  {
    period: '3개월',
    marketTxt: 'SK하이닉스의 3개월 외국인 참여 강도는 <strong>하위 12%</strong>로 평균 <strong>56</strong>보다 낮아요. 3개월 기관 참여 강도는 <strong>상위 22%</strong>로 평균 <strong>45</strong>보다 높아요.',
    foreignerPercentile: 85,
    foreignerAvg: 68,
    institutionPercentile: 85,
    institutionAvg: 40
  }
])
</script>