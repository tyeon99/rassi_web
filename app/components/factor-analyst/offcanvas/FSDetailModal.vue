<template>
  <div
    class="modal-overlay animate__animated animate__faster itemStyleDetailModal"
    :class="{ 'animate__fadeIn': isModalAni, 'animate__fadeOut': !isModalAni }" 
    @click="closeFSDetailModal"
  >
    <div
      class="modal-content animate__animated animate__faster itemStyleDetailModal"
      :class="{ 'animate__fadeInUp': isModalAni, 'animate__fadeOutDown': !isModalAni }" 
      @click.stop
    >
      <div class="modal-close">
        <button @click="closeFSDetailModal">
          <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 11L16.5 16.5M16.5 16.5L22 22M16.5 16.5L22 11M16.5 16.5L11 22" stroke="black" stroke-width="2" stroke-linecap="round" />
          </svg>
        </button>
      </div>

      <div class="modal-body">
        <div class="txt-group">
          <strong>F스코어(F-Score)란?</strong>
          <div class="txt-box">
            <p>
              F스코어는 기업의 수익성, 재무건전성, 운영 효율성을 종합적으로 평가한 지표예요. 값이 높을수록 기업의 재무 상태가 양호하고 개선되고 있다는 의미예요.
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

const emit = defineEmits(['close-fsDetailModal'])

const closeFSDetailModal = () => {
  emit('close-fsDetailModal')
}
</script>