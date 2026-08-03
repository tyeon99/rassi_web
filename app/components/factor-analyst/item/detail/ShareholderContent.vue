<template>
  <div class="itemStyleDetailContent">
    <div class="content-top">
      <div class="title">
        <h1>주주환원</h1>
      </div>

      <div class="top-box">
        <div class="quality-score">
          <div class="left">
            <span>주주환원 스코어</span>
            <p><strong>{{ score }}</strong>&nbsp;/ 100</p> <!-- 신호 없을 때 score = 00.0 -->
          </div>
          <div class="right">
            <span>주주환원 우수</span>
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
            <span>&nbsp;&nbsp;&nbsp;&nbsp; 배당 낮음<br />자사주 매입 적극</span>
            <span>배당 낮음<br />자사주 매입 저조</span>
            <span>주주환원 우수</span>
          </div>
        </div>
        <div class="inner-box">
          <p>배당과 자사주 매입이 모두 활발한 종목이에요.</p>
          <button>
            <p>주주환원 우수 종목 모두 보기</p>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 12.75L11.25 9L7.5 5.25" stroke="#D3D3D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
        <div class="inner-box no-signal">
          <img width="20" src="~/assets/img/factor-analyst/detail/no-icon.png" alt="신호 없음">
          <p>종목 스타일 신호가 발생하지 않았습니다.</p>
          <button>
            <p>주주환원 우수 종목 모두 보기</p>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 12.75L11.25 9L7.5 5.25" stroke="#D3D3D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <div class="txt-box">
        <div class="txt-title">
          <img width="18" src="~/assets/img/factor-analyst/offcanvas/quality-icon.png" alt="퀄리티 계산">
          <p>주주환원 점수 계산의 근거</p>
        </div>
        <div class="txt">주주환원 점수는 배당수익률과 자사주매입 규모가 시장 및 업종 대비 얼마나 높은지를 함께 반영하여 계산해요.</div>
      </div>
    </div>

    <div class="body-content">
      <SHCS01 />
      <SHCS02 />
    </div>
  </div>
</template>

<script setup lang="ts">
import SHCS01 from '~/components/factor-analyst/item/detail/sections/SHCS01.vue'
import SHCS02 from '~/components/factor-analyst/item/detail/sections/SHCS02.vue'

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