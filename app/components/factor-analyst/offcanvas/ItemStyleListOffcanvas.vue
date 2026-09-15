<template>
  <div
    class="offcanvas-overlay animate__animated animate__faster itemStyleListOffcanvas"
    :class="{ 'animate__fadeIn': isOffcanvasAni, 'animate__fadeOut': !isOffcanvasAni }" 
    @click="closeItemStyleListOffcanvas"
  >
    <div
      class="offcanvas-content animate__animated animate__faster itemStyleListOffcanvas"
      :class="{ 'animate__fadeInUp': isOffcanvasAni, 'animate__fadeOutDown': !isOffcanvasAni }" 
      @click.stop
    >
      <div class="offcanvas-close">
        <button @click="closeItemStyleListOffcanvas">
          <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 11L16.5 16.5M16.5 16.5L22 22M16.5 16.5L22 11M16.5 16.5L11 22" stroke="black" stroke-width="2" stroke-linecap="round" />
          </svg>
        </button>
      </div>

      <div class="offcanvas-body">
        <div class="body-top">
          <strong>퀄리티</strong>
          <p>
            여기에 설명이 들어갑니다.여기에 설명이 들어갑니다.여기에 설명이 들어갑니다.여기에 설명이 들어갑니다.
          </p>
        </div>
        <div class="body-content">
          <div class="quality-box">
            <strong>고퀄리티</strong>
            <p>제무제표상 수익성과 건전성이 모두 '촤상위'인 종목</p>
          </div>
          <div class="txt-group">
            <div class="txt">
              <strong>1. 포트폴리오의 중심축(core)으로 활용</strong>
              <p>
                삼박자가 한 방향(우상향)으로 정렬된 가장 이상적인 강세 종목으로 지표 간의 엇박자가 없어 상승 구조의 신뢰도가 매우 높으므로, 현재 시장에서 포트폴리오를 안정적으로 이끌어갈 핵심 주도주로 편입하여 보유하는 전략이 유효해요.
              </p>
            </div>
            <div class="txt">
              <strong>2. 메이저 수급을 추종하는 추세 매매</strong>
              <p>
                단순한 기대감이나 테마성 소문이 아니라, 기관과 외국인의 '진짜 돈(실수급)'이 유입되며 상승 추세를 지탱하고 있을 확률이 높아요. 메이저 수급이라는 확실한 뒷배가 존재하므로, 추세가 꺾이기 전까지는 섣부른 고점 예측을 지양하고 상방을 열어둔 채 추세를 끝까지 누리는 전략도 좋아요.
              </p>
            </div>
            <div class="txt">
              <strong>3. 일시적 조정을 '철저한 분할 매수' 기회로 포착</strong>
              <p>
                상승 스토리와 실적, 수급의 삼박자가 워낙 뚜렷하기 때문에 주가가 일시적으로 숨을 고르더라도 복귀 탄력이 강한 편이예요. 주가가 눌릴 때 불안해하기보다, 기존 메이저 수급의 이탈 여부를 체크하며 지지선 부근에서 비중을 점진적으로 확대하는 '재진입 타이밍'으로 적극 활용하기 좋아요.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  isOffcanvasAni: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close-itemStyleListOffcanvas'])

const closeItemStyleListOffcanvas = () => {
  emit('close-itemStyleListOffcanvas')
}
</script>