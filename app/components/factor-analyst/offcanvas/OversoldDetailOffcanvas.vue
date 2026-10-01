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
          <strong>낙폭과대는 어떤 종목스타일일까요</strong>
          <div class="txt-box">
            <p>
              최근 주가가 과도하게 하락했는지 판단하는 종목 스타일이에요.<br />
              하락 폭이 크고 과매도 구간에 가까울수록 높은 점수를 받아요.
            </p>
          </div>
        </div>
        <div class="txt-group">
          <strong>낙폭과대는 이렇게 계산돼요</strong>
          <div class="txt-box">
            <p>
              낙폭과대 점수는 <strong>최근 단기 수익률, 고점 대비 하락폭, 이동평균선과의 차이</strong>를 종합해 계산해요. 최근 많이 하락한 종목일수록 점수가 높아요.
            </p>
            <p>
              섹터가 사용되는 스타일에서 섹터는 기업의 주요 사업과 산업 특성에 따라 분류하는 <strong>GICS 산업분류체계를 기준으로 구분</strong>해요.
            </p>
          </div>
        </div>
        <div class="txt-group">
          <strong>낙폭과대는 해당 여부로 구분돼요</strong>
          <div class="box">
            <button>
              <div class="txt">
                <strong>과매도 구간</strong>
                <p>최근 급락으로 과매도 구간에 진입한 종목</p>
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