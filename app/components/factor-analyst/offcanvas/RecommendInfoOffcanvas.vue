<template>
  <div
    class="offcanvas-overlay animate__animated animate__faster recommendInfoOffcanvas"
    :class="{ 'animate__fadeIn': isOffcanvasAni, 'animate__fadeOut': !isOffcanvasAni }" 
    @click="closeRecommendInfoOffcanvas"
  >
    <div
      class="offcanvas-content animate__animated animate__faster recommendInfoOffcanvas"
      :class="{ 'animate__fadeInUp': isOffcanvasAni, 'animate__fadeOutDown': !isOffcanvasAni }" 
      @click.stop
    >
      <div class="offcanvas-close">
        <button @click="closeRecommendInfoOffcanvas">
          <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 11L16.5 16.5M16.5 16.5L22 22M16.5 16.5L22 11M16.5 16.5L11 22" stroke="black" stroke-width="2" stroke-linecap="round" />
          </svg>
        </button>
      </div>

      <div class="offcanvas-body">
        <div class="title">목표수익률과 최대 달성수익률은?</div>
        <div class="box-group">
          <div class="box">
            <div class="box-title">목표수익률</div>
            <div class="box-txt">
              약 1개월 이내 달성이 기대하는 스타일 Pick 종목의 수익률입니다.<br />
              최근 6개월 동안 해당 스타일이 과거 순위 1~2위에 올랐던 시점의 이후 약 1개월 내 실현한 수익률을 바탕으로 산출합니다.<br />
              최근 6개월 내 산출 조건을 충족한 사례가 없는 경우 목표수익률이 제공되지 않을 수 있습니다.
            </div>
          </div>
          <div class="box">
            <div class="box-title">최대 달성수익률</div>
            <div class="box-txt">
              추천 스타일의 Pick 종목으로 선정된 후 1개월 동안 기록한 수익률입니다.<br />
              해당 기간 중 수익률이 가장 높았던 시점을 기준으로 표시합니다.
            </div>
          </div>
        </div>
        <div class="guide">
          ※ 목표수익률은 과거 데이터를 기반으로 산출한 참고 지표로, 실제 수익률을 보장하지 않습니다.
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

const emit = defineEmits(['close-recommendInfoOffcanvas'])

const closeRecommendInfoOffcanvas = () => {
  emit('close-recommendInfoOffcanvas')
}
</script>