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
          <strong>딥밸류는 어떤 종목스타일일까요</strong>
          <div class="txt-box">
            <p>
              청산가치 수준까지 저평가된 종목을 찾는 종목 스타일이에요.<br />
              시장 평가가 기업의 자산가치보다 크게 낮을 때 ON으로 표시돼요.
            </p>
          </div>
        </div>
        <div class="txt-group">
          <strong>딥밸류는 이렇게 계산돼요</strong>
          <div class="txt-box">
            <p>
              딥밸류 점수는 <strong>순유동자산이 시가총액보다 큰 종목만을 대상으로 저평가 정도</strong>를 계산해요. "충분히 안전마진이 있는지"부터 걸러내는 종목 스타일이에요.
            </p>
            <p>
              섹터가 사용되는 스타일에서 섹터는 기업의 주요 사업과 산업 특성에 따라 분류하는 <strong>GICS 산업분류체계를 기준으로 구분</strong>해요.
            </p>
          </div>
        </div>
        <div class="txt-group">
          <strong>딥밸류는 해당 여부로 구분돼요</strong>
          <div class="box">
            <button>
              <div class="txt">
                <strong>초저평가</strong>
                <p>청산가치 대비 크게 할인되어 거래되는 종목</p>
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