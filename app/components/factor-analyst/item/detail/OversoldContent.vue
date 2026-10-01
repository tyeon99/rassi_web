<template>
  <div class="itemStyleDetailContent">
    <div class="content-top">
      <div class="top-title">
        <h1>낙폭과대</h1>
        <button @click="openItemStyleDetailOffcanvas">
          <span>낙폭과대는?</span>
          <img width="20" src="~/assets/img/factor-analyst/item/question-icon.png">
        </button>
      </div>

      <div class="top-box">
        <div class="quality-score">
          <div class="left">
            <span>낙폭과대 스코어</span>
            <p><strong>{{ score }}</strong>&nbsp;/ 100</p> <!-- 신호 없을 때 score = 00.0 -->
          </div>
          <div class="right">
            <span>과매도 구간</span>
            <!-- 신호 없을 때 -->
            <!-- <span class="no-signal">-</span> -->
          </div>
        </div>

        <!-- <div class="range-wrap">
          <div class="range">
            <div class="bar"></div>
            <div class="score" :style="{ width: `${score}%` }">
              <img
                class="item-icon"
                width="18"
                src="~/assets/img/factor-analyst/main/item-circle.png"
                alt="종목 아이콘"
              />
            </div>
          </div>
          <div class="txt">
            <span>없음</span>
            <span>과매도 구간</span>
          </div>
        </div> -->

        <div class="inner-box">
          <p>최근 급락으로 과매도 구간에 진입한 종목이에요.</p>
        </div>
        <div class="inner-box no-signal">
          <img width="20" src="~/assets/img/factor-analyst/detail/no-icon.png" alt="신호 없음">
          <p>종목 스타일 신호가 발생하지 않았습니다.</p>
        </div>

        <div class="box-bottom">
          <button>
            <p>과매도 구간 종목 [123]개 보기</p>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 12.75L11.25 9L7.5 5.25" stroke="#D3D3D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
        
      </div>

      <div class="txt-box">
        <div class="txt-title">
          <img width="18" src="~/assets/img/factor-analyst/offcanvas/quality-icon.png" alt="퀄리티 계산">
          <p>낙폭과대 점수 계산의 근거</p>
        </div>
        <div class="txt">낙폭과대 점수는 최근 단기 수익률, 고점 대비 하락폭, 이동평균선과의 차이를 종합해 계산해요. 최근 많이 하락한 종목일수록 점수가 높아요.</div>
      </div>
    </div>

    <div class="body-content">
      <NODATA title="낙폭과대" />
      <OSCS01 />
      <OSCS02 />
      <OSCS03 />
    </div>
    <ItemStyleDetailOffcanvas 
      v-if="isItemStyleDetailOffcanvasOpen"
      :isOffcanvasAni="isOffcanvasAni"
      @close-itemStyleDetailOffcanvas="closeItemStyleDetailOffcanvas"
    />
  </div>
</template>

<script setup lang="ts">
import OSCS01 from '~/components/factor-analyst/item/detail/sections/OSCS01.vue'
import OSCS02 from '~/components/factor-analyst/item/detail/sections/OSCS02.vue'
import OSCS03 from '~/components/factor-analyst/item/detail/sections/OSCS03.vue'
import NODATA from '~/components/factor-analyst/item/detail/sections/NODATA.vue'
import { ref, watch } from 'vue'
import '~/assets/css/factor-analyst/common.css'
import ItemStyleDetailOffcanvas from '~/components/factor-analyst/offcanvas/OversoldDetailOffcanvas.vue'

const isItemStyleDetailOffcanvasOpen = ref(false)
const isOffcanvasAni = ref(false)

const score = ref(86.2)

// 종목 스타일 상세보기 열기
const openItemStyleDetailOffcanvas = () => {
  isOffcanvasAni.value = true
  isItemStyleDetailOffcanvasOpen.value = true
}

// 종목 스타일 상세보기 닫기
const closeItemStyleDetailOffcanvas = () => {
  isOffcanvasAni.value = false
  setTimeout(() => {
    isItemStyleDetailOffcanvasOpen.value = false
  }, 300)
}

watch(isItemStyleDetailOffcanvasOpen, (isOpen) => {
  if (isOpen) {
    document.body.classList.add('scroll-lock')
  } else {
    document.body.classList.remove('scroll-lock')
  }
})
</script>