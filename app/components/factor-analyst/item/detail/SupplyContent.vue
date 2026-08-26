<template>
  <div class="itemStyleDetailContent">
    <div class="content-top">
      <div class="title">
        <h1>수급</h1>
      </div>

      <div class="top-box">
        <div class="quality-score">
          <div class="left">
            <span>수급 스코어</span>
            <p><strong>{{ score }}</strong>&nbsp;/ 100</p> <!-- 신호 없을 때 score = 00.0 -->
          </div>
          <div class="right">
            <span>수급강세</span>
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
          <div class="txt four-span">
            <span>수급 부재</span>
            <span>매물 부담</span>
            <span>거래는 활발</span>
            <span>수급 강세</span>
          </div>
        </div>
        <div class="inner-box">
          <p>기관과 외국인의 매수세가 강하게 유입되는 종목이에요.</p>
          <button>
            <p>수급 강세 종목 모두 보기</p>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 12.75L11.25 9L7.5 5.25" stroke="#D3D3D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
        <div class="inner-box no-signal">
          <img width="20" src="~/assets/img/factor-analyst/detail/no-icon.png" alt="신호 없음">
          <p>종목 스타일 신호가 발생하지 않았습니다.</p>
          <button>
            <p>수급 강세 종목 모두 보기</p>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 12.75L11.25 9L7.5 5.25" stroke="#D3D3D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <div class="txt-box">
        <div class="txt-title">
          <img width="18" src="~/assets/img/factor-analyst/offcanvas/quality-icon.png" alt="퀄리티 계산">
          <p>수급 점수 계산의 근거</p>
        </div>
        <div class="txt">수급 점수는 외국인·기관의 순매수가 얼마나 꾸준히 이어졌는지, 매수세가 얼마나 강했는지, 공매도·대차 동향을 종합해 계산해요. <br /> 외국인·기관의 수급이 안정적으로 유입될수록 높은 점수를 받아요.</div>
      </div>
    </div>

    <div class="body-content">
      <NODATA title="수급" />
      <SCS01 />
      <SCS02 />
      <SCS03 />
    </div>
  </div>
</template>

<script setup lang="ts">
import SCS01 from '~/components/factor-analyst/item/detail/sections/SCS01.vue'
import SCS02 from '~/components/factor-analyst/item/detail/sections/SCS02.vue'
import SCS03 from '~/components/factor-analyst/item/detail/sections/SCS03.vue'
import NODATA from '~/components/factor-analyst/item/detail/sections/NODATA.vue'

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