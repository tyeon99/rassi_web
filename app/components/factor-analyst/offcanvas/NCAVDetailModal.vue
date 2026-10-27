<template>
  <div
    class="modal-overlay animate__animated animate__faster itemStyleDetailModal"
    :class="{ 'animate__fadeIn': isModalAni, 'animate__fadeOut': !isModalAni }" 
    @click="closeNCAVDetailModal"
  >
    <div
      class="modal-content animate__animated animate__faster itemStyleDetailModal"
      :class="{ 'animate__fadeInUp': isModalAni, 'animate__fadeOutDown': !isModalAni }" 
      @click.stop
    >
      <div class="modal-close">
        <button @click="closeNCAVDetailModal">
          <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 11L16.5 16.5M16.5 16.5L22 22M16.5 16.5L22 11M16.5 16.5L11 22" stroke="black" stroke-width="2" stroke-linecap="round" />
          </svg>
        </button>
      </div>

      <div class="modal-body">
        <div class="txt-group">
          <strong>NCAV(순유동자산)란?</strong>
          <div class="txt-box">
            <p>
              NCAV는 기업의 유동자산에서 전체 부채를 차감한 순자산 가치를 나타내는 지표예요. 시가총액과 비교해 값이 높을수록 기업의 자산 가치 대비 주가가 저평가되어 있을 가능성이 높다는 의미예요.
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

const emit = defineEmits(['close-ncavDetailModal'])

const closeNCAVDetailModal = () => {
  emit('close-ncavDetailModal')
}
</script>