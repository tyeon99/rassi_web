<template>
  <div class="recommendResultContent__section">
    <div class="recommendResultContent__section--title">
      <h1>추천 스타일+ 종목 Pick5 1개월 성과 추적</h1>
    </div>
    <div class="recommendResultContent__section--txt">
      추천 당시 제시된 목표수익률과 추천 이후 1개월 내 Pick 5 종목이 기록한 최대 달성 수익률을 확인할 수 있습니다.
    </div>
    <div class="recommendResultContent__section--content">
      <div class="rate-box">
        <div class="rate">
          <img width="27" src="~/assets/img/factor-analyst/recommend/rate-icon01.png" alt="수익률 아이콘01">
          <div class="txt">
            <p>1개월 내 목표 수익률</p>
            <strong class="up">+22.90%</strong>
            <span>6월 5일 기준</span>
          </div>
        </div>
        <span>
          <img width="44" src="~/assets/img/factor-analyst/recommend/arrow.png" alt="화살표">
        </span>
        <div class="rate">
          <img width="27" src="~/assets/img/factor-analyst/recommend/rate-icon02.png" alt="수익률 아이콘02">
          <div class="txt">
            <p>최대 달성 수익률</p>
            <strong class="up">+22.90%</strong>
            <span>6월 5일 기준</span>
          </div>
        </div>
      </div>
      <!-- // -->
      <div class="inner-box">
        차트 영역 <!--영역 보여주느라 넣어놨습니다 (생략해주세용)-->
      </div>
      <!-- <div class="chart-box">
        실제 차트는 여기 안에 넣어주세여
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
// style
import '~/assets/css/factor-analyst/common.css'

</script>