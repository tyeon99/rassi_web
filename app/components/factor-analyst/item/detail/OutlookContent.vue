<template>
  <div class="itemStyleDetailContent">
    <div class="content-top">
      <div class="title">
        <h1>미래전망</h1>
      </div>

      <div class="top-box">
        <div class="quality-score">
          <div class="left">
            <span>미래전망 스코어</span>
            <p><strong>{{ score }}</strong>&nbsp;/ 100</p> <!-- 신호 없을 때 score = 00.0 -->
          </div>
          <div class="right">
            <span>전망 상향</span>
            <!-- 신호 없을 때 -->
            <!-- <span class="no-signal">-</span> -->
          </div>
        </div>
        <div class="range-wrap">
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
            <span>전망 하향</span>
            <span>급격한 상향</span>
            <span>전망 상향</span>
          </div>
        </div>
        <div class="inner-box">
          <p>시장 전망치가 꾸준히 상향되고 있는 종목이에요.</p>
          <button>
            <p>전망 상향 종목 모두 보기</p>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 12.75L11.25 9L7.5 5.25" stroke="#D3D3D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
        <div class="inner-box no-signal">
          <img width="20" src="~/assets/img/factor-analyst/detail/no-icon.png" alt="신호 없음">
          <p>종목 스타일 신호가 발생하지 않았습니다.</p>
          <button>
            <p>전망 상향 종목 모두 보기</p>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 12.75L11.25 9L7.5 5.25" stroke="#D3D3D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <div class="txt-box">
        <div class="txt-title">
          <img width="18" src="~/assets/img/factor-analyst/offcanvas/quality-icon.png" alt="퀄리티 계산">
          <p>미래전망 점수 계산의 근거</p>
        </div>
        <div class="txt">미래전망 점수는 최근 1개월·3개월 동안 매출, 영업이익, 순이익 전망이 얼마나 상향 조정됐는지를 종합해 계산해요. 1개월 변화로 최근 흐름을, 3개월 변화로 업종 내 위치를 함께 봐요.</div>
      </div>
    </div>

    <div class="body-content">
      <OCS01 />
      <OCS02 />
    </div>
  </div>
</template>

<script setup lang="ts">
import OCS01 from '~/components/factor-analyst/item/detail/sections/OCS01.vue'
import OCS02 from '~/components/factor-analyst/item/detail/sections/OCS02.vue'

defineProps({
  isOffcanvasAni: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close-qualityOffcanvas'])
const score = ref(86.2)

const closeQualityOffcanvas = () => {
  emit('close-qualityOffcanvas')
}
</script>