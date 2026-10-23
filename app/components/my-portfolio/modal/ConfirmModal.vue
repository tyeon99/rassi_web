<template>
  <div
    class="modal-overlay animate__animated animate__faster confirmModal"
    :class="{ 'animate__fadeIn': isModalAni, 'animate__fadeOut': !isModalAni }" 
    @click="closeConfirmModal"
  >
    <div
      class="modal-content animate__animated animate__faster confirmModal"
      :class="{
        animate__fadeInDown: isModalAni,
        animate__fadeOutUp: !isModalAni,
      }"
      @click.stop
    >
      <div class="modal-header">
        <button type="button" @click="closeConfirmModal">
          <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 11L16.5 16.5M16.5 16.5L22 22M16.5 16.5L22 11M16.5 16.5L11 22" stroke="black" stroke-width="2" stroke-linecap="round" />
          </svg>
        </button>
      </div>

      <div class="modal-body">
        
        <div class="txt" v-html="message"></div>

        <div class="btn-group">
          <button @click="closeConfirmModal">
            {{ cancelText }}
          </button>
          <button @click="closeConfirmModal">
            {{ confirmText }}
          </button>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  isModalAni?: boolean
  message?: string
  cancelText?: string
  confirmText?: string
}

withDefaults(defineProps<Props>(), {
  isModalAni: false,
  message: '',
  cancelText: '취소',
  confirmText: '확인'
})

const emit = defineEmits<{
  (e: 'close-confirmModal'): void
  (e: 'confirm'): void
}>()

const closeConfirmModal = () => {
  emit('close-confirmModal')
}
</script>