<template>
  <div
    class="offcanvas-overlay animate__animated animate__faster"
    :class="{ 'animate__fadeIn': isOffcanvasAni, 'animate__fadeOut': !isOffcanvasAni }" 
    @click="closeGuideOffcanvas"
  >
    <div
      class="offcanvas-content animate__animated animate__faster guideOffcanvas"
      :class="{ 'animate__fadeInUp': isOffcanvasAni, 'animate__fadeOutDown': !isOffcanvasAni }" 
      @click.stop
    >
      <div class="offcanvas-header">
        <button @click="closeGuideOffcanvas">
          <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 11L16.5 16.5M16.5 16.5L22 22M16.5 16.5L22 11M16.5 16.5L11 22" stroke="black" stroke-width="2" stroke-linecap="round" />
          </svg>
        </button>
      </div>

      <div class="offcanvas-body">
        <div class="title">
          <img width="24" src="~/assets/img/trigger-view/offcanvas/warning-icon.png" alt="안내 아이콘">
          <p>트리거뷰 이용 안내</p>
        </div>
        <div class="box-group">
          <div class="box">
            <strong>트리거뷰 안내</strong>
            <p>
              트리거뷰는 씽크풀이 관리하는 리포트, 뉴스, 공시 등 투자정보에 특화된 전문 DB를 기반으로 AI(LLM)가 분석·요약·재구성한 콘텐츠​입니다.
            </p>
          </div>
          <div class="box">
            <strong>정보의 정확성</strong>
            <p>
              투자정보에 특화된 전문 DB를 기반으로 제공하고 있으나, AI가 생성하는 과정에서 일부 부정확하거나 누락된 내용이 포함될 수 있습니다. 중요한 투자 판단 시에는 관련 정보를 함께 확인해 주세요.
            </p>
          </div>
          <div class="box">
            <strong>투자 시 유의사항</strong>
            <p>
              본 자료는 투자 판단을 위한 참고 정보로 활용해 주세요. 최종 투자 판단과 그에 따른 책임은 이용자 본인에게 있으며, 과거의 투자 성과가 미래의 수익을 보장하지 않습니다.
            </p>
          </div>
          <div class="box">
            <strong>저작권 안내</strong>
            <p>
              본 자료는 투자 판단을 위한 참고 정보로 활용해 주세요. 최종 투자 판단과 그에 따른 책임은 이용자 본인에게 있으며, 과거의 투자 성과가 미래의 수익을 보장하지 않습니다.
            </p>
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

const emit = defineEmits(['close-guideOffcanvas'])

const closeGuideOffcanvas = () => {
  emit('close-guideOffcanvas')
}
</script>
