<template>
  <div
    class="offcanvas-overlay animate__animated animate__faster paymentOffcanvas"
    :class="{ 'animate__fadeIn': isOffcanvasAni, 'animate__fadeOut': !isOffcanvasAni }" 
    @click="closeOverPaymentOffcanvas"
  >
    <div
      class="offcanvas-content animate__animated animate__faster paymentOffcanvas"
      :class="{ 'animate__fadeInUp': isOffcanvasAni, 'animate__fadeOutDown': !isOffcanvasAni }" 
      @click.stop
    >
      <div class="offcanvas-close">
        <button @click="closeOverPaymentOffcanvas">
          <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 11L16.5 16.5M16.5 16.5L22 22M16.5 16.5L22 11M16.5 16.5L11 22" stroke="black" stroke-width="2" stroke-linecap="round" />
          </svg>
        </button>
      </div>

      <div class="offcanvas-body">

        <div class="body-title">
          <strong>프리미엄 고객님만의 무료 혜택</strong>
          <p>프리미엄 2개월 이상 이용 중인 고객님께<br />00,000원 상당의 스타일 패스를 무료로 제공합니다.</p>
          <span class="!text-main">프리미엄을 유지하시면<br />스타일 패스도 계속 함께 이용하실 수 있습니다.</span>
        </div>

        <div class="body-box">
          <div class="box-title">스타일 패스에서 이용하세요!</div>
          <div class="box-txt">
            <div class="txt">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 5.25V6.75H9V12.75H10.5V5.25H7.5ZM9 1.5C9.98491 1.5 10.9602 1.69399 11.8701 2.0709C12.7801 2.44781 13.6069 3.00026 14.3033 3.6967C14.9997 4.39314 15.5522 5.21993 15.9291 6.12987C16.306 7.03982 16.5 8.01509 16.5 9C16.5 10.9891 15.7098 12.8968 14.3033 14.3033C12.8968 15.7098 10.9891 16.5 9 16.5C8.01509 16.5 7.03982 16.306 6.12987 15.9291C5.21993 15.5522 4.39314 14.9997 3.6967 14.3033C2.29018 12.8968 1.5 10.9891 1.5 9C1.5 7.01088 2.29018 5.10322 3.6967 3.6967C5.10322 2.29018 7.01088 1.5 9 1.5Z" fill="#364350"
                />
              </svg>
              <p>10개 종목 스타일과<br />23개 스타일 패스로 종목 분석</p>
            </div>
            <div class="txt">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.75 5.25V6.75H9.75V8.25H8.25C7.85218 8.25 7.47064 8.40804 7.18934 8.68934C6.90804 8.97064 6.75 9.35218 6.75 9.75V12.75H11.25V11.25H8.25V9.75H9.75C10.1478 9.75 10.5294 9.59196 10.8107 9.31066C11.092 9.02936 11.25 8.64782 11.25 8.25V6.75C11.25 6.35218 11.092 5.97064 10.8107 5.68934C10.5294 5.40804 10.1478 5.25 9.75 5.25H6.75ZM9 1.5C9.98491 1.5 10.9602 1.69399 11.8701 2.0709C12.7801 2.44781 13.6069 3.00026 14.3033 3.6967C14.9997 4.39314 15.5522 5.21993 15.9291 6.12987C16.306 7.03982 16.5 8.01509 16.5 9C16.5 10.9891 15.7098 12.8968 14.3033 14.3033C12.8968 15.7098 10.9891 16.5 9 16.5C8.01509 16.5 7.03982 16.306 6.12987 15.9291C5.21993 15.5522 4.39314 14.9997 3.6967 14.3033C2.29018 12.8968 1.5 10.9891 1.5 9C1.5 7.01088 2.29018 5.10322 3.6967 3.6967C5.10322 2.29018 7.01088 1.5 9 1.5Z" fill="#364350" />
              </svg>
              <p>매일 스타일 패스와 Pick 5 종목 추천</p>
            </div>
            <div class="txt">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.25 11.25V10.125C11.25 9.82663 11.1315 9.54048 10.9205 9.3295C10.7095 9.11853 10.4234 9 10.125 9C10.4234 9 10.7095 8.88147 10.9205 8.6705C11.1315 8.45952 11.25 8.17337 11.25 7.875V6.75C11.25 6.35218 11.092 5.97064 10.8107 5.68934C10.5294 5.40804 10.1478 5.25 9.75 5.25H6.75V6.75H9.75V8.25H8.25V9.75H9.75V11.25H6.75V12.75H9.75C10.1478 12.75 10.5294 12.592 10.8107 12.3107C11.092 12.0294 11.25 11.6478 11.25 11.25ZM9 1.5C9.98491 1.5 10.9602 1.69399 11.8701 2.0709C12.7801 2.44781 13.6069 3.00026 14.3033 3.6967C14.9997 4.39314 15.5522 5.21993 15.9291 6.12987C16.306 7.03982 16.5 8.01509 16.5 9C16.5 10.9891 15.7098 12.8968 14.3033 14.3033C12.8968 15.7098 10.9891 16.5 9 16.5C8.01509 16.5 7.03982 16.306 6.12987 15.9291C5.21993 15.5522 4.39314 14.9997 3.6967 14.3033C2.29018 12.8968 1.5 10.9891 1.5 9C1.5 7.01088 2.29018 5.10322 3.6967 3.6967C5.10322 2.29018 7.01088 1.5 9 1.5Z" fill="#364350" />
              </svg>
              <p>종목 스타일별 분석 데이터와<br />추천 스타일 패스 성과 추적 제공</p>
            </div>
          </div>
        </div>

      </div>
      
      <div class="offcanvas-footer">
        <button>스타일 패스 시작하기</button>
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

const emit = defineEmits(['close-overPaymentOffcanvas'])

const closeOverPaymentOffcanvas = () => {
  emit('close-overPaymentOffcanvas')
}
</script>