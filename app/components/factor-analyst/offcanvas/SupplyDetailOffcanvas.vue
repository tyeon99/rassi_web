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
          <strong>수급은 어떤 종목스타일일까요</strong>
          <div class="txt-box">
            <p>
              기관·외국인 등 주요 투자 주체의 매매 흐름을 분석하는 종목 스타일이에요.<br />
              실제 자금이 꾸준히 유입될수록 높은 점수를 받아요.
            </p>
          </div>
        </div>
        <div class="txt-group">
          <strong>수급은 이렇게 계산돼요</strong>
          <div class="txt-box">
            <p>
              수급 점수는 <strong>외국인·기관의 순매수가 얼마나 꾸준히 이어졌는지, 매수세가 얼마나 강했는지, 공매도·대차 동향</strong>을 종합해 계산해요. <br />
              외국인·기관의 수급이 안정적으로 유입될수록 높은 점수를 받아요.
            </p>
            <p>
              섹터가 사용되는 스타일에서 섹터는 기업의 주요 사업과 산업 특성에 따라 분류하는 <strong>GICS 산업분류체계를 기준으로 구분</strong>해요.
            </p>
          </div>
        </div>
        <div class="txt-group">
          <strong>수급은 총 4개로 구분돼요</strong>
          <div class="box">
            <button>
              <div class="txt">
                <strong>수급 강세</strong>
                <p>기관과 외국인의 매수세가 강하게 유입되는 종목</p>
              </div>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 12.75L11.25 9L7.5 5.25" stroke="#D3D3D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
            <button>
              <div class="txt">
                <strong>거래는 활발</strong>
                <p>거래는 활발하지만 지속적인 매수세는 확인되지 않는 종목</p>
              </div>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 12.75L11.25 9L7.5 5.25" stroke="#D3D3D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
            <button>
              <div class="txt">
                <strong>매물 부담</strong>
                <p>매도 물량 부담이 상대적으로 높은 종목</p>
              </div>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 12.75L11.25 9L7.5 5.25" stroke="#D3D3D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
            <button>
              <div class="txt">
                <strong>수급 부재</strong>
                <p>기관과 외국인의 매수세가 거의 없는 종목</p>
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