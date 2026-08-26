<template>
  <div class="itemStyleDetailContent">
    <div class="content-top">
      <div class="title">
        <h1>퀄리티</h1>
      </div>

      <div class="top-box">
        <div class="quality-score">
          <div class="left">
            <span>퀄리티 스코어</span>
            <p><strong>{{ score }}</strong>&nbsp;/ 100</p> <!-- 신호 없을 때 score = 00.0 -->
          </div>
          <div class="right">
            <span>고퀄리티</span>
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
            <span>저퀄리티</span>
            <span>수익 대비 <br />재무 질낮은 퀄리티</span>
            <span>튼튼하지만 <br />수익 낮은 퀄리티</span>
            <span>고퀄리티</span>
          </div>
        </div>
        <div class="inner-box">
          <p>고퀄리티 종목은 재무제표상 수익성과 건전성이 모두 '촤상위'인 종목이예요.</p>
          <button>
            <p>고컬리티 종목 모두 보기</p>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 12.75L11.25 9L7.5 5.25" stroke="#D3D3D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
        <div class="inner-box no-signal">
          <img width="20" src="~/assets/img/factor-analyst/detail/no-icon.png" alt="신호 없음">
          <p>종목 스타일 신호가 발생하지 않았습니다.</p>
          <button>
            <p>고컬리티 종목 모두 보기</p>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 12.75L11.25 9L7.5 5.25" stroke="#D3D3D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <div class="txt-box">
        <div class="txt-title">
          <img width="18" src="~/assets/img/factor-analyst/offcanvas/quality-icon.png" alt="퀄리티 계산">
          <p>퀄리티 점수 계산의 근거</p>
        </div>
        <div class="txt">퀄리티 점수는 회사 장부를 바탕으로 하는 F스코어와 돈버는 효율성인 GP/A로 계산해요.</div>
      </div>
    </div>

    <div class="body-content">
      <NODATA title="퀄리티" />
      <QCS01 />
      <QCS02 />
    </div>
  </div>
</template>

<script setup lang="ts">
import QCS01 from '~/components/factor-analyst/item/detail/sections/QCS01.vue'
import QCS02 from '~/components/factor-analyst/item/detail/sections/QCS02.vue'
import NODATA from '~/components/factor-analyst/item/detail/sections/NODATA.vue'

const score = ref(86.2)
</script>