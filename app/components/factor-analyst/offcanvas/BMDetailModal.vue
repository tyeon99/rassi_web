<template>
  <div
    class="modal-overlay animate__animated animate__faster itemStyleDetailModal"
    :class="{ 'animate__fadeIn': isModalAni, 'animate__fadeOut': !isModalAni }" 
    @click="closeBMDetailModal"
  >
    <div
      class="modal-content animate__animated animate__faster itemStyleDetailModal"
      :class="{ 'animate__fadeInUp': isModalAni, 'animate__fadeOutDown': !isModalAni }" 
      @click.stop
    >
      <div class="modal-close">
        <button @click="closeBMDetailModal">
          <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 11L16.5 16.5M16.5 16.5L22 22M16.5 16.5L22 11M16.5 16.5L11 22" stroke="black" stroke-width="2" stroke-linecap="round" />
          </svg>
        </button>
      </div>

      <div class="modal-body">
        <div class="txt-group">
          <strong>장부가치수익률(BM)이란?</strong>
          <div class="txt-box">
            <p>
              장부가치수익률(BM)은 PBR의 역수(자본총계 ÷ 시가총액)로, 높을수록 장부가치 대비 주가가 상대적으로 낮은 수준임을 의미해요. 따라서 상위에 위치할수록 긍정적이에요.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  isModalAni: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close-bmDetailModal'])

const closeBMDetailModal = () => {
  emit('close-bmDetailModal')
}
</script>