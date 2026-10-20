<template>
  <div class="detailSection !px-0">
    <div class="detailSection__title !px-5">월별 수익률</div>
    <div class="detailSection__txt !px-5">연도를 선택하신 후 막대 그래프를 누르시면, 해당 월의 포트폴리오 구성을 보실 수 있어요.</div>

    <div class="rate-box">

      <div class="box-group">
        <div class="box">
          <span>2023</span>
          <strong class="up">+26.8%</strong>
        </div>
        <div class="box">
          <span>2024</span>
          <strong class="down">-12.6%</strong>
        </div>
        <div class="box">
          <span>2025</span>
          <strong class="up">+17.9%</strong>
        </div>
        <div class="box">
          <span>2026</span>
          <strong class="up">+57.9%</strong>
        </div>
      </div>

      <div class="chart-group !px-5">
        <div class="chart-box" style="height: 135px; background: #F5F7F9;"> <!--스타일 지우고 사용해주세용-->
          차트 영역
        </div>
      </div>

    </div>

  </div>
</template>

<script setup lang="ts">
import '~/assets/css/my-portfolio/common.css'

</script>