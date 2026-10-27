<template>
  <div
    class="modal-overlay animate__animated animate__faster itemStyleDetailModal"
    :class="{ 'animate__fadeIn': isModalAni, 'animate__fadeOut': !isModalAni }" 
    @click="closeGPADetailModal"
  >
    <div
      class="modal-content animate__animated animate__faster itemStyleDetailModal"
      :class="{ 'animate__fadeInUp': isModalAni, 'animate__fadeOutDown': !isModalAni }" 
      @click.stop
    >
      <div class="modal-close">
        <button @click="closeGPADetailModal">
          <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 11L16.5 16.5M16.5 16.5L22 22M16.5 16.5L22 11M16.5 16.5L11 22" stroke="black" stroke-width="2" stroke-linecap="round" />
          </svg>
        </button>
      </div>

      <div class="modal-body">
        <div class="txt-group">
          <strong>GP/A(총자산 대비 매출총이익률)란?</strong>
          <div class="txt-box">
            <p>
              GP/A는 기업이 보유한 자산을 활용해 얼마나 많은 매출총이익을 창출하는지 평가한 지표예요. 값이 높을수록 자산 대비 이익 창출 능력이 우수하다는 의미예요.
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

const emit = defineEmits(['close-gpaDetailModal'])

const closeGPADetailModal = () => {
  emit('close-gpaDetailModal')
}
</script>