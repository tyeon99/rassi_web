<template>
  <div class="itemStyleSection">
    <div class="title">추천스타일의 추천 근거는?</div>
    
    <div class="recommend">

      <div class="box">
        <div class="top">
          <div class="box-title">
            <strong>추천근거</strong>
            <p>‘Factor Momentum Everywhere(2019)’ 연구</p>
          </div>
          <div class="box-txt">
            팩터에도 모멘텀이 있다는 개념, 즉 최근 성과가 좋았던 팩터가 이후에도 우수한 성과를 이어갈 가능성이 높다는 건 해외 학술 연구로 입증돼 있어요. 다만 해외 연구는 미국 시장을 기준으로 하기 때문에, 그 결론을 그대로 가져오지 않고 한국 시장 데이터로 처음부터 다시 검증했어요.<br /><br />

            국내 시장 데이터를 바탕으로 여러 방식을 비교 검증한 결과, 한국 시장에서 안정적으로 통하는 방식을 찾아 지금의 추천 로직에 적용했어요.
          </div>
          <div class="inner-box">
            추천 스타일은 이를 바탕으로 22개의 스타일을 분석하여, 기대수익률이 높은 스타일과 Pick 5 종목을 선별합니다.
          </div>
        </div>

        <div class="bottom">
          <button>
            <p>논문 원문 확인하기</p>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 12.75L11.25 9L7.5 5.25" stroke="#D3D3D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
// style
import '~/assets/css/factor-analyst/common.css'

</script>