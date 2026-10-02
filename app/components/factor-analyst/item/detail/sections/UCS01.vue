<template>
  <div class="content-section">
    <div class="title">
      <span>청산가치보다 저평가일까?</span>
      <h1>NCAV 스크리닝은?</h1>
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

    <div class="gray-box">
      <div class="box-title">
        <strong>순유동자산은?</strong>
      </div>
      <div class="white-box">
        <div class="wbox-stxt">순유동자산 : 4,900억 8250만</div>
      </div>
      <div class="calculate-wrap">
        <div class="white-box">
          <div class="bottom">
            <div class="txt">
              <p>유동자산</p>
              <strong>1452억<br />9000만</strong>
            </div>
            <img width="19" src="~/assets/img/factor-analyst/detail/minus.png" alt="마이너스">
            <div class="txt">
              <p>총부채</p>
              <strong>52억<br />9500만</strong>
            </div>
            <img width="19" src="~/assets/img/factor-analyst/detail/minus.png" alt="마이너스">
            <div class="txt">
              <p>우선주</p>
              <strong>0</strong>
            </div>
            <img width="19" src="~/assets/img/factor-analyst/detail/minus.png" alt="마이너스">
            <div class="txt">
              <p>비지배지분</p>
              <strong>52억<br />9500만</strong>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="list-group">
      <div class="list">
        <div class="gray-box">
          <div class="box-title">
            <strong>다른 종목과 비교해서 순유동자산 비율은 어느 정도 일까?</strong>
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
                  <span class="avg"></span>
                </div>
                <div class="score" :style="{ width: `${marketPercentile}%` }"></div>
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

const rateList = [
  {
    question: '순유동자산(NCAV)이 시가총액보다 큰가요?',
    isPass: true,
    description: '순유동자산은 4900억 8520만원이고, 시가총액은 724억 1100만원으로 순유동자산은 현재 시가총액의 <strong class="up">116.65%</strong> 수준이에요.'
  }
]

const marketTxt = 'SK하이닉스의 순유동자산(NCAV)비율은 전체 시장에서 <strong>상위 12%</strong> 수준이에요.'
const marketPercentile = ref(78)
</script>