<template>
  <div class="recommendResultContent__section">
    <div class="recommendResultContent__section--title">
      <h1>
        추천 스타일⁺ 종목 Pick5 1개월 성과 추적
        <button @click="openRecommendInfoOffcanvas">
          <img width="20" src="~/assets/img/factor-analyst/recommend/info-icon.png" alt="안내">
        </button>
      </h1>
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
    <RecommendInfoOffcanvas 
      v-if="isRecommendInfoOffcanvasOpen"
      :isOffcanvasAni="isOffcanvasAni"
      @close-recommendInfoOffcanvas="closeRecommendInfoOffcanvas"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// style
import '~/assets/css/factor-analyst/common.css'
import RecommendInfoOffcanvas from '~/components/factor-analyst/offcanvas/RecommendInfoOffcanvas.vue'

const isRecommendInfoOffcanvasOpen = ref(false)
const isOffcanvasAni = ref(false)

// 종목 스타일 상세보기 열기
const openRecommendInfoOffcanvas = () => {
  isOffcanvasAni.value = true
  isRecommendInfoOffcanvasOpen.value = true
}

// 종목 스타일 상세보기 닫기
const closeRecommendInfoOffcanvas = () => {
  isOffcanvasAni.value = false
  setTimeout(() => {
    isRecommendInfoOffcanvasOpen.value = false
  }, 300)
}

watch(isRecommendInfoOffcanvasOpen, (isOpen) => {
  if (isOpen) {
    document.body.classList.add('scroll-lock')
  } else {
    document.body.classList.remove('scroll-lock')
  }
})

</script>