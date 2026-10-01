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
          <strong>저변동성은 어떤 종목스타일일까요</strong>
          <div class="txt-box">
            <p>
              주가 변동성이 얼마나 낮은지를 측정하는 종목 스타일이에요.<br />
              시장 변동에도 주가가 안정적으로 움직이는 종목일수록 높은 점수를 받아요.
            </p>
          </div>
        </div>
        <div class="txt-group">
          <strong>저변동성은 이렇게 계산돼요</strong>
          <div class="txt-box">
            <p>
              저변동성 점수는 <strong>최근 3·12개월 주가변동성이 시장 및 업종 대비 얼마나 낮은지</strong>를 종합하여 계산해요. 
            </p>
            <p>
              섹터가 사용되는 스타일에서 섹터는 기업의 주요 사업과 산업 특성에 따라 분류하는 <strong>GICS 산업분류체계를 기준으로 구분</strong>해요.
            </p>
          </div>
        </div>
        <div class="txt-group">
          <strong>저변동성은 총 3개로 구분돼요</strong>
          <div class="box">
            <button>
              <div class="txt">
                <strong>안정적인 주가</strong>
                <p>변동성이 낮고 안정적인 주가 흐름을 보여온 종목</p>
              </div>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 12.75L11.25 9L7.5 5.25" stroke="#D3D3D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
            <button>
              <div class="txt">
                <strong>변동성 전환</strong>
                <p>최근 주가 움직임의 성격이 크게 달라진 종목</p>
              </div>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 12.75L11.25 9L7.5 5.25" stroke="#D3D3D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
            <button>
              <div class="txt">
                <strong>고변동성</strong>
                <p>주가 변동성이 매우 큰 고위험 종목</p>
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