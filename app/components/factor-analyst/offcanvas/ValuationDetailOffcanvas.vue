<template>
  <div
    class="offcanvas-overlay animate__animated animate__faster itemStyleDetailOffcanvas"
    :class="{ 'animate__fadeIn': isOffcanvasAni, 'animate__fadeOut': !isOffcanvasAni }" 
    @click="closeItemStyleDetailOffcanvas"
  >
    <div
      class="offcanvas-content animate__animated animate__faster itemStyleDetailOffcanvas"
      :class="{ 'animate__fadeInUp': isOffcanvasAni, 'animate__fadeOutDown': !isOffcanvasAni }" 
      @click.stop
    >
      <div class="offcanvas-close">
        <button @click="closeItemStyleDetailOffcanvas">
          <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 11L16.5 16.5M16.5 16.5L22 22M16.5 16.5L22 11M16.5 16.5L11 22" stroke="black" stroke-width="2" stroke-linecap="round" />
          </svg>
        </button>
      </div>

      <div class="offcanvas-body">
        <div class="txt-group">
          <strong>밸류에이션은 어떤 종목스타일일까요</strong>
          <div class="txt-box">
            <p>
              현재 주가가 기업 가치 대비 얼마나 저평가되어 있는지 평가하는 종목 스타일이에요.<br />
              기업 가치에 비해 가격이 저렴할수록 높은 점수를 받아요.
            </p>
          </div>
        </div>
        <div class="txt-group">
          <strong>밸류에이션은 이렇게 계산돼요</strong>
          <div class="txt-box">
            <p>
              밸류에이션 점수는 <strong>이익, 매출, 순자산을 기준으로 현재 주가가 얼마나 저평가되어 있는지</strong>를 측정해요. 각 지표별로 업종 내 상대적 위치와 최근 1~3년간의 변화 추이를 함께 반영한 뒤, 지표별 중요도(가중치)를 더해 최종 점수를 구해요.
            </p>
            <p>
              섹터가 사용되는 스타일에서 섹터는 기업의 주요 사업과 산업 특성에 따라 분류하는 <strong>GICS 산업분류체계를 기준으로 구분</strong>해요.
            </p>
          </div>
        </div>
        <div class="txt-group">
          <strong>밸류에이션은 총 2개로 구분돼요</strong>
          <div class="box">
            <button>
              <div class="txt">
                <strong>저평가 매력</strong>
                <p>기업 가치 대비 현재 주가가 저평가된 종목</p>
              </div>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 12.75L11.25 9L7.5 5.25" stroke="#D3D3D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
            <button>
              <div class="txt">
                <strong>고평가 구간</strong>
                <p>시장 기대가 크게 반영된 고평가 종목</p>
              </div>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 12.75L11.25 9L7.5 5.25" stroke="#D3D3D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
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

const emit = defineEmits(['close-itemStyleDetailOffcanvas'])

const closeItemStyleDetailOffcanvas = () => {
  emit('close-itemStyleDetailOffcanvas')
}
</script>